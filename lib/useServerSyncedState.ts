"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import type { MemberToolKey } from "@/lib/memberToolKeys";

const SAVE_DEBOUNCE_MS = 800;

type SyncStatus = "loading" | "synced" | "saving" | "error";

interface UseServerSyncedStateResult<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
  status: SyncStatus;
  lastSaved: string | null;
  /** Flush any pending debounced save immediately. */
  saveNow: () => void;
}

/**
 * Server-backed replacement for a per-user localStorage blob. Reads/writes
 * `/api/member-data/[toolKey]` for the signed-in Clerk user, so a tool's
 * saved work follows the member across browsers and devices instead of
 * living only in one browser's localStorage.
 *
 * Migration-on-read: if the server has no row yet for this user+tool but the
 * browser still has the tool's old localStorage blob, that local data is
 * used immediately (via `migrate`, if given) and pushed to the server in the
 * background. The localStorage copy is never deleted — every save also
 * mirrors to it, so it stays a live local fallback rather than a one-time
 * migration artifact.
 */
export function useServerSyncedState<T>(
  toolKey: MemberToolKey,
  defaultValue: T,
  migrate?: (raw: unknown) => T
): UseServerSyncedStateResult<T> {
  const { user, isLoaded } = useUser();
  const legacyKey = user ? `ae_${toolKey}_${user.id}` : null;

  const [data, setData] = useState<T>(defaultValue);
  const [status, setStatus] = useState<SyncStatus>("loading");
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  const hasLoadedRef = useRef(false);
  const migrateRef = useRef(migrate);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dataRef = useRef(data);

  useEffect(() => {
    migrateRef.current = migrate;
  }, [migrate]);

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  const runMigrate = useCallback((raw: unknown): T => {
    return migrateRef.current ? migrateRef.current(raw) : (raw as T);
  }, []);

  // Load: server row wins if present; otherwise fall back to (and migrate)
  // any existing localStorage data; otherwise use the default.
  useEffect(() => {
    if (!isLoaded || !user || !legacyKey) return;

    let cancelled = false;
    hasLoadedRef.current = false;

    async function load() {
      try {
        const res = await fetch(`/api/member-data/${toolKey}`);
        if (!res.ok) throw new Error(`GET failed: ${res.status}`);
        const body = (await res.json()) as { data: unknown; updatedAt: string | null };

        if (cancelled) return;

        if (body.data !== null && body.data !== undefined) {
          setData(runMigrate(body.data));
          if (body.updatedAt) setLastSaved(body.updatedAt);
        } else {
          const raw = legacyKey ? localStorage.getItem(legacyKey) : null;
          if (raw) {
            try {
              const parsed = JSON.parse(raw);
              const migrated = runMigrate(parsed);
              setData(migrated);
              if (parsed && typeof parsed === "object" && "_savedAt" in parsed) {
                setLastSaved((parsed as { _savedAt?: string })._savedAt ?? null);
              }
              // Seed the server row in the background; failure here isn't
              // fatal — the debounced save effect below will retry on the
              // next edit, and the localStorage copy is untouched either way.
              fetch(`/api/member-data/${toolKey}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: migrated }),
              }).catch(() => {});
            } catch {
              setData(defaultValue);
            }
          } else {
            setData(defaultValue);
          }
        }
        if (!cancelled) setStatus("synced");
      } catch {
        // Server unreachable — fall back to whatever's local so the tool
        // still works offline-ish, rather than showing a blank state.
        if (cancelled) return;
        try {
          const raw = legacyKey ? localStorage.getItem(legacyKey) : null;
          setData(raw ? runMigrate(JSON.parse(raw)) : defaultValue);
        } catch {
          setData(defaultValue);
        }
        setStatus("error");
      } finally {
        if (!cancelled) hasLoadedRef.current = true;
      }
    }

    load();

    return () => {
      cancelled = true;
    };
    // defaultValue is intentionally not a dependency — it should be a stable
    // reference per call site (usually a fresh object from a factory
    // function), and including it would re-trigger the load on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user, legacyKey, toolKey, runMigrate]);

  const persist = useCallback(
    (value: T) => {
      if (!legacyKey) return;
      try {
        localStorage.setItem(legacyKey, JSON.stringify(value));
      } catch {
        // Ignore local storage write failures (e.g. quota) — the server
        // write is what actually matters now.
      }
      setStatus("saving");
      fetch(`/api/member-data/${toolKey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: value }),
      })
        .then((res) => {
          if (!res.ok) throw new Error(`PUT failed: ${res.status}`);
          setStatus("synced");
          setLastSaved(new Date().toISOString());
        })
        .catch(() => setStatus("error"));
    },
    [toolKey, legacyKey]
  );

  const saveNow = useCallback(() => {
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    persist(dataRef.current);
  }, [persist]);

  // Debounced save on every data change after the initial load.
  useEffect(() => {
    if (!hasLoadedRef.current || !legacyKey) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      persist(data);
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
    // persist intentionally omitted: it's stable across the data changes we
    // care about here (only toolKey/legacyKey identity affects it), and
    // including it would re-arm the debounce timer on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, legacyKey]);

  return { data, setData, status, lastSaved, saveNow };
}

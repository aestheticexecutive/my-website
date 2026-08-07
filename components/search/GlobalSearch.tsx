"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ExternalLink, CornerDownLeft } from "lucide-react";
import { searchIndex, type SearchEntry } from "@/lib/search-index";

const MAX_RESULTS = 8;

function scoreEntry(query: string, entry: SearchEntry): number | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  const title = entry.title.toLowerCase();
  const desc = entry.description.toLowerCase();
  const category = entry.category.toLowerCase();
  const type = entry.type.toLowerCase();

  if (title === q) return 120;
  if (title.startsWith(q)) return 100;
  if (title.includes(q)) return 80;
  if (category === q || type === q) return 60;
  if (category.includes(q) || type.includes(q)) return 45;
  if (desc.includes(q)) return 30;
  return null;
}

function getResults(query: string): SearchEntry[] {
  if (!query.trim()) return [];
  return searchIndex
    .map((entry) => ({ entry, score: scoreEntry(query, entry) }))
    .filter((x): x is { entry: SearchEntry; score: number } => x.score !== null)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, MAX_RESULTS)
    .map((x) => x.entry);
}

export function GlobalSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = getResults(query);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const go = useCallback(
    (entry: SearchEntry) => {
      if (entry.external) {
        window.open(entry.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(entry.href);
      }
      close();
    },
    [router, close]
  );

  // Cmd/Ctrl+K opens from anywhere; Escape closes
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape" && open) {
        close();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function handleInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = results[activeIndex];
      if (target) go(target);
    }
  }

  return (
    <>
      {/* Trigger — desktop */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 h-9 px-3 rounded text-sm text-warm-400 hover:text-cream hover:bg-warm-900 transition-colors"
        aria-label="Search"
      >
        <Search size={15} />
        <span className="text-xs tracking-wide">Search</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded border border-warm-700 text-warm-500">⌘K</span>
      </button>

      {/* Trigger — mobile icon */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-warm-400 hover:text-cream p-1"
        aria-label="Search"
      >
        <Search size={20} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 md:pt-28 px-4"
          style={{ background: "rgba(6,0,2,0.75)", backdropFilter: "blur(4px)" }}
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl border overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #1a000c 0%, #0c0004 100%)",
              borderColor: "rgba(162,140,117,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: "rgba(162,140,117,0.15)" }}>
              <Search size={17} style={{ color: "#a28c75" }} className="flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search resources, templates, webinars…"
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "#fffdf6" }}
              />
              <button onClick={close} className="flex-shrink-0 opacity-50 hover:opacity-90 transition-opacity" aria-label="Close search">
                <X size={16} style={{ color: "#fffdf6" }} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim() === "" ? (
                <p className="px-5 py-8 text-center text-xs" style={{ color: "rgba(255,253,246,0.3)" }}>
                  Start typing to search across Resources, Templates, and Webinars.
                </p>
              ) : results.length === 0 ? (
                <p className="px-5 py-8 text-center text-xs" style={{ color: "rgba(255,253,246,0.3)" }}>
                  No results for &ldquo;{query}&rdquo;.
                </p>
              ) : (
                <ul className="py-2">
                  {results.map((entry, i) => (
                    <li key={`${entry.category}-${entry.title}`}>
                      <button
                        onClick={() => go(entry)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className="w-full text-left px-5 py-3 flex items-start gap-3 transition-colors"
                        style={{ background: i === activeIndex ? "rgba(162,140,117,0.1)" : "transparent" }}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <span className="text-sm font-medium truncate" style={{ color: "#fffdf6" }}>
                              {entry.title}
                            </span>
                            {entry.external && <ExternalLink size={11} style={{ color: "rgba(162,140,117,0.6)" }} />}
                          </div>
                          <p className="text-xs leading-snug line-clamp-1" style={{ color: "rgba(255,253,246,0.4)" }}>
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full tracking-wide"
                            style={{ background: "rgba(162,140,117,0.12)", border: "1px solid rgba(162,140,117,0.25)", color: "#a28c75" }}
                          >
                            {entry.category}
                          </span>
                          {i === activeIndex && <CornerDownLeft size={12} style={{ color: "rgba(162,140,117,0.5)" }} />}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Compass, Download, ExternalLink, RotateCcw } from "lucide-react";
import {
  questions,
  emptyAnswers,
  buildRoadmap,
  CATEGORY_LABEL,
  type Answers,
  type RoadmapItem,
  type RoadmapResult,
} from "@/lib/roadmap-data";
import { useServerSyncedState } from "@/lib/useServerSyncedState";

interface RoadmapData {
  answers: Answers;
  completed: boolean;
}

const defaultRoadmapData: RoadmapData = { answers: emptyAnswers, completed: false };

function ItemCard({ item, number }: { item: RoadmapItem; number: number }) {
  const isDownload = item.href.startsWith("/downloads/") || item.href.startsWith("/templates/");
  const cardClass =
    "group flex items-start gap-3.5 bg-white border border-warm-200 rounded-xl p-5 hover:border-gold-300 hover:shadow-sm transition-all duration-200";
  const inner = (
    <>
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-warm-100 text-warm-600 text-[11px] font-medium flex items-center justify-center mt-0.5">
        {number}
      </span>
      <div className="min-w-0 flex-1 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap mb-1">
            <h3 className="font-display text-base font-medium text-warm-900">{item.title}</h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold-50 border border-gold-100 text-gold-600 font-medium tracking-wide uppercase">
              {item.type}
            </span>
          </div>
          <p className="text-sm text-warm-600 leading-relaxed">{item.description}</p>
        </div>
        {item.external ? (
          <ExternalLink size={15} className="text-warm-400 group-hover:text-warm-700 transition-colors flex-shrink-0 mt-1" />
        ) : isDownload ? (
          <Download size={15} className="text-warm-400 group-hover:text-warm-700 transition-colors flex-shrink-0 mt-1" />
        ) : (
          <ArrowRight size={15} className="text-warm-400 group-hover:text-warm-700 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
        )}
      </div>
    </>
  );

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {inner}
      </a>
    );
  }
  if (isDownload) {
    return (
      <a href={item.href} download className={cardClass}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={item.href} className={cardClass}>
      {inner}
    </Link>
  );
}

function PhaseHeading({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-display text-2xl font-light text-warm-900 mb-1.5">{title}</h2>
      <p className="text-sm text-warm-600 max-w-2xl">{sub}</p>
    </div>
  );
}

const ANSWER_LABEL: Record<string, Record<string, string>> = {
  stage: { new: "Brand new", growing: "Growing fast", established: "Established", plateaued: "Plateaued" },
  priority: { marketing: "Marketing", operations: "Operations", finance: "Finance", staff: "Staff" },
  teamSize: { solo: "Solo / me + 1", small: "3–7 people", mid: "8–15 people", large: "16+ people" },
  goal: { foundation: "Get organized", growth: "Grow revenue", fix: "Fix a problem area", scale: "Plan ahead / scale" },
};

export default function RoadmapPage() {
  const { data, setData, status } = useServerSyncedState<RoadmapData>("roadmap", defaultRoadmapData);
  const { answers, completed } = data;
  const [step, setStep] = useState(0);

  function selectAnswer(questionId: keyof Answers, value: string) {
    const next = { ...answers, [questionId]: value } as Answers;
    if (step < questions.length - 1) {
      setStep(step + 1);
      setData({ answers: next, completed: false });
    } else {
      setData({ answers: next, completed: true });
    }
  }

  function retake() {
    setStep(0);
    setData(defaultRoadmapData);
  }

  if (status === "loading") return null;

  const result: RoadmapResult | null = completed ? buildRoadmap(answers) : null;

  // A single running sequence number across every phase, so "the order to
  // tackle them" reads as one continuous list even though it's grouped.
  const sequence = new Map<string, number>();
  if (result) {
    let n = 1;
    [
      ...result.phase1.items,
      ...result.phase2.items,
      ...result.phase3.groups.flatMap((g) => g.items),
      ...result.phase4.items,
    ].forEach((item) => {
      sequence.set(item.href, n);
      n += 1;
    });
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Link
        href="/members/dashboard"
        className="inline-flex items-center gap-1.5 text-xs text-warm-500 hover:text-warm-700 tracking-wide mb-6 transition-colors"
      >
        <ArrowLeft size={12} /> Dashboard
      </Link>

      <div className="flex items-start gap-4 mb-8">
        <div className="w-11 h-11 rounded-lg bg-gold-50 border border-gold-100 flex items-center justify-center flex-shrink-0">
          <Compass size={20} className="text-gold-600" />
        </div>
        <div>
          <p className="text-xs text-warm-500 tracking-widest uppercase mb-1.5">Where Should I Start?</p>
          <h1 className="font-display text-3xl md:text-4xl font-light text-warm-900">
            {result ? "Your Personalized Roadmap" : "A Quick Practice Assessment"}
          </h1>
        </div>
      </div>

      {!result && (
        <div className="max-w-2xl">
          <p className="text-sm text-warm-600 mb-8 leading-relaxed">
            Four quick questions about your practice — then we&apos;ll put together a personalized path
            through every guide, tool, and template in the library, in the order that actually makes
            sense for where you are right now.
          </p>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {questions.map((q, i) => (
              <div
                key={q.id}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-gold-400" : "bg-warm-200"}`}
              />
            ))}
          </div>
          <p className="text-xs text-warm-500 tracking-wide uppercase mb-6">
            Question {step + 1} of {questions.length}
          </p>

          <h2 className="font-display text-2xl font-light text-warm-900 mb-6">{questions[step].prompt}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {questions[step].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => selectAnswer(questions[step].id, opt.value)}
                className="text-left bg-white border border-warm-200 rounded-xl p-5 hover:border-gold-300 hover:shadow-sm transition-all duration-200 text-sm text-warm-800"
              >
                {opt.label}
              </button>
            ))}
          </div>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 text-xs text-warm-500 hover:text-warm-700 tracking-wide transition-colors"
            >
              <ArrowLeft size={12} /> Back
            </button>
          )}
        </div>
      )}

      {result && (
        <div>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(answers) as (keyof Answers)[]).map((k) =>
                answers[k] ? (
                  <span key={k} className="text-xs px-3 py-1.5 rounded-full bg-warm-100 text-warm-700">
                    {ANSWER_LABEL[k][answers[k] as string]}
                  </span>
                ) : null
              )}
            </div>
            <button
              onClick={retake}
              className="inline-flex items-center gap-1.5 text-xs text-warm-500 hover:text-warm-700 tracking-wide transition-colors flex-shrink-0"
            >
              <RotateCcw size={12} /> Retake Assessment
            </button>
          </div>

          <p className="text-sm text-warm-600 mb-10">
            Every guide, tool, and template on the site — <strong className="text-warm-800 font-medium">{result.totalCount} in all</strong> —
            numbered in the order to work through them.
          </p>

          <div className="space-y-14">
            <section>
              <PhaseHeading title={result.phase1.title} sub={result.phase1.sub} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.phase1.items.map((item) => (
                  <ItemCard key={item.href} item={item} number={sequence.get(item.href)!} />
                ))}
              </div>
            </section>

            <section>
              <PhaseHeading title={result.phase2.title} sub={result.phase2.sub} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.phase2.items.map((item) => (
                  <ItemCard key={item.href} item={item} number={sequence.get(item.href)!} />
                ))}
              </div>
            </section>

            <section>
              <PhaseHeading title={result.phase3.title} sub={result.phase3.sub} />
              <div className="space-y-6">
                {result.phase3.groups.map((g) => (
                  <div key={g.category}>
                    <div className="flex items-center gap-2 mb-3">
                      <Check size={13} className="text-gold-500" />
                      <p className="text-xs tracking-widest uppercase text-warm-500">{CATEGORY_LABEL[g.category]}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {g.items.map((item) => (
                        <ItemCard key={item.href} item={item} number={sequence.get(item.href)!} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <PhaseHeading title={result.phase4.title} sub={result.phase4.sub} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.phase4.items.map((item) => (
                  <ItemCard key={item.href} item={item} number={sequence.get(item.href)!} />
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

import { Video } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars | Aesthetic Executive",
};

export default function WebinarsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs text-warm-500 tracking-widest uppercase mb-2">
          Member Library
        </p>
        <h1 className="font-display text-4xl font-light text-warm-900">
          Webinars
        </h1>
        <p className="text-warm-600 mt-1.5">
          Live sessions and a growing archive of expert-led training.
        </p>
      </div>

      {/* Empty state */}
      <div className="border border-warm-200 rounded-xl py-20 flex flex-col items-center text-center px-6">
        <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-100 flex items-center justify-center mb-4">
          <Video size={20} className="text-gold-600" />
        </div>
        <h2 className="font-display text-xl font-medium text-warm-900 mb-1.5">
          No webinars scheduled yet
        </h2>
        <p className="text-sm text-warm-500 max-w-sm">
          Live sessions and recorded trainings will show up here as soon as they&apos;re available.
        </p>
      </div>
    </div>
  );
}

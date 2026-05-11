"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function StoryPreview() {
  const { t } = useLanguage();
  const s = t.storyPreview;

  return (
    <section className="relative py-24 lg:py-32 bg-primary text-bg-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="absolute top-10 left-10 w-8 h-8 text-bg-yellow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
        </svg>
        <svg className="absolute top-32 right-20 w-12 h-12 text-bg-pink" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
        </svg>
        <svg className="absolute bottom-20 left-32 w-10 h-10 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
            {s.label}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight">
            {s.heading}
          </h2>
        </div>

        <div className="bg-bg-cream/5 backdrop-blur-sm border border-bg-cream/10 rounded-3xl p-8 lg:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-bg-pink rounded-2xl flex items-center justify-center text-2xl shrink-0">
              🌙
            </div>
            <div>
              <p className="text-xs text-accent uppercase tracking-wide mb-1">
                {s.sampleLabel}
              </p>
              <h3 className="font-display text-2xl">{s.storyTitle}</h3>
            </div>
          </div>

          <div className="font-display text-lg lg:text-xl leading-relaxed text-bg-cream/90 space-y-4 italic">
            <p>{s.storyP1}</p>
            <p className="text-accent not-italic">{s.storyDialogue1}</p>
            <p>
              {s.storyP2}{" "}
              <span className="text-accent not-italic">{s.storyDialogue2}</span>
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-bg-cream/10 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-bg-cream/60">{s.totalDuration}</p>
                <p className="font-medium">{s.durationValue}</p>
              </div>
            </div>
            <span className="text-xs text-bg-cream/50">{s.aiAttribution}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "@/components/LanguageProvider";

const STEP_COLORS = ["bg-bg-pink", "bg-bg-yellow", "bg-bg-purple"];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how" className="relative py-24 lg:py-32 bg-bg-cream noise-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary-light uppercase tracking-widest mb-4">
            {t.howItWorks.label}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
            {t.howItWorks.headingLine1}
            <br />
            <span className="italic font-light">{t.howItWorks.headingLine2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="relative">
              <div
                className={`${STEP_COLORS[i]} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 -rotate-3`}
              >
                <span className="font-display text-2xl text-primary font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-2xl text-primary mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-primary-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

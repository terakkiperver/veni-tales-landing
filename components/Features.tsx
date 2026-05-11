"use client";

import { useLanguage } from "@/components/LanguageProvider";

const CARD_COLORS = ["bg-bg-pink", "bg-bg-yellow", "bg-bg-purple", "bg-accent-light"];
const CARD_ICONS = ["✨", "🎙️", "🌱", "🛡️"];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative py-24 lg:py-32 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary-light uppercase tracking-widest mb-4">
            {t.features.label}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
            {t.features.headingLine1}
            <br />
            <span className="italic font-light">{t.features.headingLine2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.cards.map((card, i) => (
            <div key={i} className="group relative">
              <div
                className={`${CARD_COLORS[i]} rounded-3xl p-6 h-full transition-transform group-hover:-translate-y-1`}
              >
                <div className="text-4xl mb-4">{CARD_ICONS[i]}</div>
                <h3 className="font-display text-xl text-primary mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-primary-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

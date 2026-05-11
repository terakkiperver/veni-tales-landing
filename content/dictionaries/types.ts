export type OnboardingSlideText = {
  title: string;
  description: string;
};

export type Dictionary = {
  lang: "en" | "tr";
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    intro: string;
    features: string;
    howItWorks: string;
    download: string;
  };
  hero: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    headingLine3: string;
    description: string;
    ctaHowItWorks: string;
    socialProof: string;
  };
  heroCarousel: {
    screenAlt1: string;
    screenAlt2: string;
    tablistLabel: string;
  };
  onboarding: {
    heading: string;
    subtitle: string;
    slides: OnboardingSlideText[];
  };
  features: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    cards: { title: string; description: string }[];
  };
  storyPreview: {
    label: string;
    heading: string;
    sampleLabel: string;
    storyTitle: string;
    storyP1: string;
    storyDialogue1: string;
    storyP2: string;
    storyDialogue2: string;
    totalDuration: string;
    durationValue: string;
    aiAttribution: string;
  };
  howItWorks: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    steps: { title: string; description: string }[];
  };
  cta: {
    headingLine1: string;
    headingLine2: string;
    description: string;
    appStoreFrom: string;
    download: string;
  };
  footer: {
    tagline: string;
    privacy: string;
    terms: string;
    support: string;
    copyright: string;
  };
};

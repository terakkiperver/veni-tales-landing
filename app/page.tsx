import Hero from "@/components/Hero";
import OnboardingShowcase from "@/components/OnboardingShowcase";
import HowItWorks from "@/components/HowItWorks";
import StoryPreview from "@/components/StoryPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <OnboardingShowcase />
      <StoryPreview />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}

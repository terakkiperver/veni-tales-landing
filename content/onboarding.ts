/**
 * Sync copy with kaka_mobile/src/locales/tr.json → onboarding.*
 * Images: public/splash_1.png … splash_4.png (from SplashImage_1–4).
 * Slide bg / stripe colors match OnboardingScreen.tsx slides array.
 */
export type OnboardingSlide = {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  bg: string;
  stripe: string;
};

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: "s1",
    imageSrc: "/splash_1.png",
    title: "Çocuğunuza özel masallar",
    description:
      "Minik kahramanınız masalın içine adım atsın! Her hikaye renkli görseller ve sıcacık bir seslendirmeyle canlanır.",
    bg: "#FAFBF7",
    stripe: "#FCCDDC",
  },
  {
    id: "s2",
    imageSrc: "/splash_2.png",
    title: "Kahraman çocuğunuz!",
    description:
      "Çocuğunuz en sevdiği temada, isterse kahramanı olduğu eğlenceli bir macera dinlesin.",
    bg: "#FCCDDC",
    stripe: "#FFFF95",
  },
  {
    id: "s3",
    imageSrc: "/splash_3.png",
    title: "Dinlerken Dil Öğrensin",
    description:
      "İsteseniz masala sevimli yabancı kelimeler saklanır. Küçük kaşif onları bulmaya bayılacak.",
    bg: "#FFFF95",
    stripe: "#83EEA6",
  },
  {
    id: "s4",
    imageSrc: "/splash_4.png",
    title: "Her masalda bir değer",
    description:
      "Sabrı öğreten bir penguen, paylaşmayı gösteren bir sincap… Karakterler eğlendirirken güzel değerler fısıldar.",
    bg: "#83EEA6",
    stripe: "#F9C365",
  },
];

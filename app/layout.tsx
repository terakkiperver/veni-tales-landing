import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Veni Tales — Personalized audio stories for your child",
  description:
    "AI-powered, professionally narrated personalized tales. Create magical stories with your child's name, interests and dreams.",
  openGraph: {
    title: "Veni Tales — Personalized audio stories for your child",
    description: "AI-powered personalized audio stories for your child.",
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserratAlternates.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

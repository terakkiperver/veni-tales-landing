import type { Metadata } from "next";
import PrivacyClientPage from "./PrivacyClientPage";

export const metadata: Metadata = {
  title: "Privacy policy / Gizlilik politikası — Veni Tales",
  description:
    "How Veni Tales processes personal data in the mobile app and on this website. Kişisel verilerin Veni Tales uygulaması ve web sitesinde nasıl işlendiği.",
};

export default function PrivacyPage() {
  return <PrivacyClientPage />;
}

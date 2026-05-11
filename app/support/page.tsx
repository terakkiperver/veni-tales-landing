import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "@/components/LegalPageShell";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Destek — Veni Tales",
  description: "Veni Tales ile iletişim, sık sorulan sorular ve yasal belgeler.",
};

export default function SupportPage() {
  return (
    <LegalPageShell title="Destek ve iletişim">
      <section className="space-y-4">
        <p>
          Veni Tales ile ilgili teknik sorunlar, geri bildirim veya hesap konularında size yardımcı
          olmaktan memnuniyet duyarız.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-primary/10 bg-bg-cream p-6">
        <h2 className="font-display text-xl font-semibold text-primary">Bize yazın</h2>
        <p>
          E-posta:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-semibold text-primary underline underline-offset-2"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p className="text-sm">
          Mümkün olduğunca uygulama sürümünüzü (ör. iOS sürümü), cihaz modelinizi ve sorunun
          kısa bir tanımını paylaşın; yanıt süresini kısaltır.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Sık sorulanlar</h2>
        <dl className="space-y-6">
          <div>
            <dt className="font-semibold text-primary">Aboneliğimi nasıl iptal ederim?</dt>
            <dd className="mt-2">
              iOS&apos;ta abonelikler genellikle Ayarlar → Apple Kimliğiniz → Abonelikler üzerinden
              yönetilir. İptal ve iade koşulları Apple&apos;ın politikalarına tabidir.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-primary">Hesabımı ve verilerimi silebilir miyim?</dt>
            <dd className="mt-2">
              Hesap silme veya veri talepleri için uygulama içindeki ilgili akışı kullanın veya{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium text-primary underline underline-offset-2"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              üzerinden bize yazın. Talebinizi kimlik doğrulaması ile işleme alırız.
            </dd>
          </div>
        </dl>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Yasal belgeler</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
              Gizlilik politikası
            </Link>
          </li>
          <li>
            <Link href="/terms" className="font-medium text-primary underline underline-offset-2">
              Kullanım koşulları
            </Link>
          </li>
        </ul>
      </section>
    </LegalPageShell>
  );
}

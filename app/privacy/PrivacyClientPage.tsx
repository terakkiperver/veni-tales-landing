"use client";

import LegalPageShell from "@/components/LegalPageShell";
import { useLanguage } from "@/components/LanguageProvider";
import {
  LEGAL_LAST_UPDATED,
  LEGAL_LAST_UPDATED_EN,
  SUPPORT_EMAIL,
} from "@/lib/site";

export default function PrivacyClientPage() {
  const { locale } = useLanguage();
  const isEn = locale === "en";

  return (
    <LegalPageShell
      title={isEn ? "Privacy policy" : "Gizlilik politikası"}
      updatedLine={
        isEn ? `Last updated: ${LEGAL_LAST_UPDATED_EN}` : undefined
      }
      updated={isEn ? undefined : LEGAL_LAST_UPDATED}
      backLabel={isEn ? "← Home" : undefined}
    >
      {isEn ? <PrivacyEn email={SUPPORT_EMAIL} /> : <PrivacyTr email={SUPPORT_EMAIL} />}
    </LegalPageShell>
  );
}

function PrivacyTr({ email }: { email: string }) {
  return (
    <>
      <section className="space-y-4">
        <p>
          Bu gizlilik politikası, Veni Tales mobil uygulaması ve bu web sitesi (&quot;Hizmet&quot;)
          kapsamında kişisel verilerinizin nasıl işlendiğini açıklar. Hizmeti kullanarak bu politikada
          özetlendiği şekilde veri işlemeyi kabul etmiş sayılırsınız. Politikayı sık sık
          güncelleyebiliriz; önemli değişiklikleri uygulama veya web üzerinden bildirmeye çalışırız.
        </p>
        <p className="rounded-2xl border border-primary/10 bg-bg-cream p-4 text-sm text-primary">
          Bu metin genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez. Şirket unvanı,
          veri sorumlusu adresi ve veri işleme detaylarını (altyapı sağlayıcıları, saklama süreleri
          vb.) yürürlükteki mevzuata ve fiili uygulamanıza göre netleştirmeniz gerekir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Veri sorumlusu</h2>
        <p>
          Kişisel verileriniz, Hizmeti sunan tüzel kişi (&quot;biz&quot;) tarafından 6698 sayılı
          Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) ve ilgili mevzuat çerçevesinde
          işlenir. Veri sorumlusuna ilişkin kimlik ve iletişim bilgileri için:{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium text-primary underline underline-offset-2"
          >
            {email}
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Hangi veriler toplanabilir?
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-1">
          <li>
            <strong className="text-primary">Hesap ve profil:</strong> örneğin e-posta, oturum
            bilgileri, çocuk profili için sağladığınız isim, yaş ve tercihler (uygulama akışına göre).
          </li>
          <li>
            <strong className="text-primary">Kullanım verisi:</strong> uygulama sürümü, cihaz ve
            işletim sistemi özeti, çökme raporları, özellik kullanımına dair teknik günlükler.
          </li>
          <li>
            <strong className="text-primary">Ödeme ve abonelik:</strong> satın alma işlemleri
            genellikle Apple App Store gibi platformlar üzerinden yürütülür; ödeme kartı bilgileriniz
            bize doğrudan iletilmez. Platformun paylaştığı işlem ve abonelik durumu ile sınırlı bilgiler
            işlenebilir.
          </li>
          <li>
            <strong className="text-primary">İçerik ve tercihler:</strong> masal oluşturma için
            girdiğiniz metinler, tema ve ortam tercihleri, seslendirme veya üretimle ilgili seçimler.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">İşleme amaçları</h2>
        <p>
          Verileriniz; hesabınızı sağlamak ve güvence altına almak, masal ve sesli içerik üretimi,
          kaliteyi iyileştirmek, destek taleplerinizi yanıtlamak, yasal yükümlülükleri yerine getirmek
          ve — açık rıza veya yasal dayanak varsa — size bildirim veya pazarlama iletişimi sunmak
          amacıyla işlenebilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Hukuki sebep ve aktarım
        </h2>
        <p>
          KVKK&apos;nın 5. ve 6. maddelerinde öngörülen; sözleşmenin kurulması veya ifası, veri
          sorumlusunun meşru menfaati, açık rıza veya hukuki yükümlülük gibi hukuki sebeplere
          dayanarak işleme yapılabilir. Bulut barındırma, kimlik doğrulama, yapay zeka veya ses
          üretimi, analitik ve çökme raporlama gibi hizmetler için güvenilir iş ortaklarına ve
          yurtiçi/yurtdışı sunucularda — gerekli güvenlik önlemleri ve hukuki düzenlemeler çerçevesinde
          — aktarım yapılabilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Saklama süresi</h2>
        <p>
          Veriler, işleme amacının gerektirdiği süre boyunca ve yasal zamanaşımı / düzenlemelerin
          öngördüğü sürelerle sınırlı olarak saklanır; süre sonunda silinir, anonimleştirilir veya
          imha edilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Çocuklar</h2>
        <p>
          Veni Tales çocuklara yönelik içerik sunabilir; kişisel verilerin işlenmesinde veli veya
          vasinin gerektiğinde onay veya bilgilendirmesini temel alırız. Çocuğa ait işlemler için yalnızca
          gerekli minimum veriyi toplamayı hedefleriz. Bir çocuğa ait veriyi hukuka aykırı toplandığına
          inanıyorsanız lütfen bizimle iletişime geçin.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          KVKK kapsamındaki haklarınız
        </h2>
        <p>
          Kanun&apos;un 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, bilgi talep
          etme, düzeltme ve silme, aktarılan üçüncü kişileri bilme, zarar halinde tazminat talep etme
          gibi haklara sahipsiniz. Taleplerinizi{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>{" "}
          adresine iletebilirsiniz.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">İletişim</h2>
        <p>
          Gizlilik ile ilgili sorularınız için:{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>
          .
        </p>
      </section>
    </>
  );
}

function PrivacyEn({ email }: { email: string }) {
  return (
    <>
      <section className="space-y-4">
        <p>
          This privacy policy explains how we process your personal data when you use the Veni Tales
          mobile application and this website (together, the &quot;Service&quot;). By using the
          Service you agree to processing as described here. We may update this policy from time to
          time and will try to notify you of material changes through the app or the website.
        </p>
        <p className="rounded-2xl border border-primary/10 bg-bg-cream p-4 text-sm text-primary">
          This text is for general information only and does not replace legal advice. You should
          finalize your legal entity name, data-controller address, and processing details (subprocessors,
          retention periods, etc.) in line with applicable law and your actual practices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Data controller</h2>
        <p>
          Your personal data is processed by the legal entity that operates the Service
          (&quot;we&quot;) in accordance with Law No. 6698 on the Protection of Personal Data
          (&quot;KVKK&quot;) and related Turkish legislation, where applicable. For identification and
          contact details of the data controller, please reach us at{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium text-primary underline underline-offset-2"
          >
            {email}
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          What data may we collect?
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-1">
          <li>
            <strong className="text-primary">Account and profile:</strong> for example email, session
            information, and information you provide for a child profile such as name, age, and
            preferences (depending on app flows).
          </li>
          <li>
            <strong className="text-primary">Usage data:</strong> app version, device and operating
            system summary, crash reports, and technical logs related to feature usage.
          </li>
          <li>
            <strong className="text-primary">Payments and subscriptions:</strong> purchases are
            typically handled through platforms such as the Apple App Store; we do not receive your
            full payment card details directly. We may process limited information shared by the
            platform about transactions and subscription status.
          </li>
          <li>
            <strong className="text-primary">Content and preferences:</strong> text you enter to
            create stories, theme and setting preferences, and choices related to narration or
            generation.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Purposes of processing</h2>
        <p>
          We may process your data to provide and secure your account, generate stories and audio
          content, improve quality, respond to support requests, comply with legal obligations, and —
          where there is a legal basis or explicit consent — to send notifications or marketing
          communications.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Legal basis and transfers
        </h2>
        <p>
          Processing may rely on legal bases set out in KVKK Articles 5 and 6, such as performance of
          a contract, legitimate interests of the controller, explicit consent, or legal obligation.
          We may transfer data to trusted partners and servers in Türkiye or abroad for hosting,
          authentication, AI or audio generation, analytics, and crash reporting, subject to appropriate
          safeguards and applicable law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Retention</h2>
        <p>
          We retain data for as long as needed for the purposes described above and as required by
          legal retention periods; after that period, data is deleted, anonymized, or destroyed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Children</h2>
        <p>
          Veni Tales may offer content aimed at children; where required we rely on a parent or
          guardian&apos;s consent or information. We aim to collect only the minimum data necessary
          for child-related features. If you believe we have collected a child&apos;s data unlawfully,
          please contact us.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Your rights under KVKK</h2>
        <p>
          Under Article 11 of KVKK you may have the right to learn whether your data are processed,
          request information, request correction or deletion, learn third parties to whom data are
          transferred, and claim compensation in case of damage. You can submit requests to{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Contact</h2>
        <p>
          For privacy-related questions, email us at{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>
          .
        </p>
      </section>
    </>
  );
}

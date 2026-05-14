"use client";

import Link from "next/link";
import LegalPageShell from "@/components/LegalPageShell";
import { useLanguage } from "@/components/LanguageProvider";
import {
  LEGAL_LAST_UPDATED,
  LEGAL_LAST_UPDATED_EN,
  SUPPORT_EMAIL,
} from "@/lib/site";

const APPLE_REPORT_PROBLEM = "https://reportaproblem.apple.com";

export default function SupportClientPage() {
  const { locale } = useLanguage();
  const isEn = locale === "en";

  return (
    <LegalPageShell
      title={isEn ? "Support & contact" : "Destek ve iletişim"}
      updatedLine={
        isEn ? `Last updated: ${LEGAL_LAST_UPDATED_EN}` : undefined
      }
      updated={isEn ? undefined : LEGAL_LAST_UPDATED}
      backLabel={isEn ? "← Home" : undefined}
    >
      {isEn ? <SupportEn email={SUPPORT_EMAIL} /> : <SupportTr email={SUPPORT_EMAIL} />}
    </LegalPageShell>
  );
}

function SupportTr({ email }: { email: string }) {
  return (
    <>
      <section className="space-y-4">
        <p>
          Veni Tales, yapay zeka ile çocuğunuza özel sesli masallar üreten bir uygulamadır. Aşağıda
          sık sorulan soruların yanıtlarını bulabilirsiniz; ek yardım için sayfanın sonundaki iletişim
          bölümüne bakın.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="font-display text-xl font-semibold text-primary">
          Kategori 1: Genel kullanım
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="Veni Tales nedir?"
            a={
              <>
                Veni Tales, yapay zeka kullanarak çocuğunuza özel sesli masallar oluşturan bir
                uygulamadır. Çocuğunuzun ismi, yaşı, ilgi alanları ve sevdiği karakterleri öğrenerek
                ona özgün hikayeler üretir ve profesyonel seslendirmeyle dinletir.
              </>
            }
          />
          <FaqItem
            q="Veni Tales kaç yaş için uygun?"
            a={
              <>
                Veni Tales 3 yaş ve üzeri çocuklar için tasarlanmıştır. İçerik filtreleri ile çocuk
                dostu hikayeler üretilir. Ebeveyn gözetiminde kullanılmasını öneriyoruz.
              </>
            }
          />
          <FaqItem
            q="Uygulamayı kullanmak için hesap açmam gerekli mi?"
            a={
              <>
                Hayır. Hesap açmadan <strong className="text-primary">bir adet kısa hikaye</strong>{" "}
                oluşturabilirsiniz; hikaye üretilirken size yöneltilen sorularla seçimlerinizi
                netleştirebilirsiniz. Daha fazla hikaye için Charm / Spell / Epic Pack satın alırken
                Apple veya Google hesabınızla giriş yapmanız gerekir; bu, kredilerinizin güvenle
                saklanması içindir.
              </>
            }
          />
          <FaqItem
            q="Hangi cihazlarda çalışır?"
            a={
              <>
                Şu an Veni Tales yalnızca iOS cihazlarda (iPhone ve iPad) kullanılabilir. Android
                sürümü yakında gelecektir.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">
          Kategori 2: Satın alma ve krediler (Venitoken)
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="Venitoken nedir?"
            a={
              <>
                Venitoken, Veni Tales içinde hikaye oluşturmak için kullanılan dijital kredilerdir.
                Her hikaye 1 Venitoken kullanır. Üç farklı paket seçeneğimiz vardır:{" "}
                <strong className="text-primary">Charm Pack</strong> — 30 Venitoken,{" "}
                <strong className="text-primary">Spell Pack</strong> — 80 Venitoken,{" "}
                <strong className="text-primary">Epic Pack</strong> — 200 Venitoken (en avantajlı).
              </>
            }
          />
          <FaqItem
            q="Satın aldığım krediler nasıl yönetilir?"
            a={
              <>
                Kredileriniz Apple veya Google hesabınıza bağlıdır. Aynı hesapla farklı cihazlarda
                giriş yaparak kredilerinize erişebilirsiniz.
              </>
            }
          />
          <FaqItem
            q="İade nasıl alınır?"
            a={
              <>
                Tüm satın almalar Apple App Store üzerinden işlendiği için iadeler de Apple üzerinden
                yapılır:{" "}
                <a
                  href={APPLE_REPORT_PROBLEM}
                  className="font-medium text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {APPLE_REPORT_PROBLEM}
                </a>{" "}
                adresine gidin, Apple ID&apos;nizle giriş yapın, Veni Tales satın almasını bulun ve
                &quot;Sorun bildir&quot; → &quot;İade talep et&quot; seçeneğini kullanın. Apple
                genelde 24–48 saat içinde iade kararını verir. İade konusunda yardım isterseniz{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>{" "}
                adresinden bize ulaşabilirsiniz.
              </>
            }
          />
          <FaqItem
            q="Kullanılmış krediler iade edilir mi?"
            a={
              <>
                Tüketilmiş krediler (hikaye oluşturmak için kullanılmış olanlar) Apple&apos;ın
                politikası gereği iade kapsamı dışındadır. Kullanılmamış krediler için iade talebi
                Apple üzerinden yapılabilir.
              </>
            }
          />
          <FaqItem
            q="Krediler ne zaman süresi dolar?"
            a={
              <>
                Venitoken&apos;larınız süresizdir; sınırsız süre kullanabilirsiniz.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">
          Kategori 3: Hikaye üretimi
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="Hikayeler nasıl oluşturuluyor?"
            a={
              <>
                Hikayeler yapay zeka ile üretilir. Çocuğunuzun bilgilerini ve seçtiğiniz temayı
                kullanarak özgün metinler yazılır; metin profesyonel seslendirme ile ses dosyasına
                dönüştürülür.
              </>
            }
          />
          <FaqItem
            q="Hikaye uygunsuz çıkarsa ne yapmalıyım?"
            a={
              <>
                Yapay zeka çıktıları için içerik filtreleri uyguluyoruz; nadiren beklenmedik içerik
                üretebilir. Uygunsuz bir içerikle karşılaşırsanız hikaye ekranındaki &quot;Bildir&quot;
                düğmesine basın veya{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>{" "}
                adresine yazın. Konuyu inceleyip kredinizi iade ediyoruz.
              </>
            }
          />
          <FaqItem
            q="Aynı temayı tekrar üretebilir miyim?"
            a={
              <>
                Evet. Her seferinde farklı bir hikaye üretilir; aynı temayı seçseniz bile çıktı
                değişir.
              </>
            }
          />
          <FaqItem
            q="Hikayeler kayıtlı kalır mı?"
            a={
              <>
                Oluşturulan hikayeler hesabınıza kaydedilir. Uygulamayı tekrar açtığınızda geçmiş
                hikayelerinizi dinleyebilirsiniz.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">
          Kategori 4: Ebeveyn kontrolleri
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="Veni Tales çocuklar için güvenli mi?"
            a={
              <>
                Evet; Veni Tales çocuk güvenliği gözetilerek tasarlanmıştır: tüm hikayeler içerik
                filtrelerinden geçer, reklam yoktur, üçüncü taraf bağlantıları yoktur ve ebeveyn
                kontrolü her zaman aktiftir.
              </>
            }
          />
          <FaqItem
            q="Çocuğum yanlışlıkla satın alma yapabilir mi?"
            a={
              <>
                Hayır. Tüm satın almalar Apple&apos;ın doğrulamasından geçer. iOS Family Sharing
                ayarlarıyla çocuğunuzun satın alma yapmasını engelleyebilirsiniz.
              </>
            }
          />
          <FaqItem
            q="Çocuk profili bilgileri nerede saklanıyor?"
            a={
              <>
                Çocuğunuzun bilgileri (ismi, yaşı, ilgi alanları) yalnızca hikaye üretimi için
                kullanılır ve gizlilik politikamıza göre işlenir. Ayrıntılar için{" "}
                <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
                  Gizlilik politikası
                </Link>{" "}
                sayfamıza bakın.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">
          Kategori 5: Teknik sorunlar
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="Uygulama açılmıyor"
            a={
              <>
                Uygulamayı tamamen kapatıp yeniden açın; cihazınızı yeniden başlatın; gerekirse
                uygulamayı silip yeniden yükleyin (krediler hesabınızda kalır, giriş yaparak geri
                alabilirsiniz). Sorun sürerse{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>{" "}
                adresine yazın; cihaz modelinizi ve iOS sürümünüzü belirtin.
              </>
            }
          />
          <FaqItem
            q="Hikaye yüklenmiyor"
            a={
              <>
                İnternet bağlantınızı kontrol edin; hikaye üretimi için stabil bağlantı gerekir.
                Bağlantı iyiyse uygulamayı yeniden başlatın; devam ederse bize bildirin.
              </>
            }
          />
          <FaqItem
            q="Satın aldım ama kredilerim gelmedi"
            a={
              <>
                Bazen Apple doğrulama süreci 1–2 dakika sürebilir. Bekledikten sonra hâlâ
                gelmediyse Ayarlar → Satın Alımları Geri Yükle (Restore Purchases) düğmesine basın;
                Apple hesabınızla giriş yaptığınızdan emin olun. Gerekirse satın alma makbuzuyla{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>{" "}
                adresine yazın.
              </>
            }
          />
          <FaqItem
            q="Sesli anlatım çalışmıyor"
            a={
              <>
                Telefonunuzun ses ayarlarını ve sessiz modu kontrol edin; Bluetooth bağlantınızı
                kontrol edin; uygulamayı yeniden başlatın.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">Kategori 6: Hesap</h2>
        <dl className="space-y-6">
          <FaqItem
            q="Hesabımı nasıl silerim?"
            a={
              <>
                Hesabınızı ve tüm verilerinizi silmek için uygulama içinde{" "}
                <strong className="text-primary">Ayarlar → Hesap → Hesabımı sil</strong> yolunu
                kullanın veya{" "}
                <a
                  href={`mailto:${email}?subject=Hesabımı%20Sil`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>{" "}
                adresine &quot;Hesabımı Sil&quot; başlığıyla yazın. İşlem 30 gün içinde tamamlanır.
                KVKK kapsamındaki haklarınız için{" "}
                <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
                  Gizlilik politikası
                </Link>
                mıza bakın.
              </>
            }
          />
          <FaqItem
            q="Krediler kayboldu, ne yapmalıyım?"
            a={
              <>
                Kredileriniz Apple veya Google hesabınıza bağlıdır. Ayarlar → Satın Alımları Geri
                Yükle ile geri yükleyebilirsiniz. Sorun sürerse satın alma makbuzunuzla birlikte bize
                ulaşın.
              </>
            }
          />
          <FaqItem
            q="Hesabımı başka cihaza nasıl taşırım?"
            a={
              <>
                Yeni cihazınızda aynı Apple veya Google hesabıyla Veni Tales&apos;e giriş yapın;
                kredileriniz otomatik olarak gelir.
              </>
            }
          />
        </dl>
      </section>

      <section className="space-y-3 rounded-2xl border border-primary/10 bg-bg-cream p-6">
        <h2 className="font-display text-xl font-semibold text-primary">Bize ulaşın</h2>
        <p>
          E-posta:{" "}
          <a
            href={`mailto:${email}`}
            className="font-semibold text-primary underline underline-offset-2"
          >
            {email}
          </a>
        </p>
        <p>
          Tüm sorularınızı genelde <strong className="text-primary">24–48 saat</strong> içinde
          yanıtlıyoruz. Türkçe ve İngilizce destek sunuyoruz. E-posta gönderirken mümkünse şunları
          ekleyin:
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm">
          <li>Cihaz modeliniz (ör. iPhone 14, iPad Air)</li>
          <li>iOS sürümünüz (Ayarlar → Genel → Hakkında → Yazılım Sürümü)</li>
          <li>Uygulama sürümü (Ayarlar → Hakkında)</li>
          <li>Sorunun kısa ve net açıklaması</li>
          <li>Mümkünse ekran görüntüsü</li>
        </ul>
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
    </>
  );
}

function SupportEn({ email }: { email: string }) {
  return (
    <>
      <section className="space-y-4">
        <p>
          Veni Tales creates personalized audio fairy tales for your child using AI. Below you will
          find answers to common questions; for anything else, see the contact section at the end
          of this page.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="font-display text-xl font-semibold text-primary">
          Category 1: General use
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="What is Veni Tales?"
            a={
              <>
                Veni Tales is an app that uses AI to create personalized audio fairy tales for your
                child. It learns your child&apos;s name, age, interests, and favorite characters to
                generate unique stories with professional narration.
              </>
            }
          />
          <FaqItem
            q="What ages is Veni Tales for?"
            a={
              <>
                Veni Tales is designed for children aged 3 and up. Child-friendly stories are
                produced with content filters. We recommend use with parental supervision.
              </>
            }
          />
          <FaqItem
            q="Do I need an account to use the app?"
            a={
              <>
                No. Without an account you can create{" "}
                <strong className="text-primary">one short story</strong>. While the story is being
                created, you can answer the questions we ask to refine your choices. For more
                stories, when you purchase a Charm, Spell, or Epic Pack you will need to sign in with
                your Apple or Google account so your credits can be stored securely.
              </>
            }
          />
          <FaqItem
            q="Which devices are supported?"
            a={
              <>
                Veni Tales is currently available only on iOS (iPhone and iPad). An Android version
                is coming soon.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">
          Category 2: Purchases and credits (Venitokens)
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="What is a Venitoken?"
            a={
              <>
                Venitokens are digital credits used inside Veni Tales to create stories. Each story
                uses 1 Venitoken. We offer three packs:{" "}
                <strong className="text-primary">Charm Pack</strong> — 30 Venitokens,{" "}
                <strong className="text-primary">Spell Pack</strong> — 80 Venitokens,{" "}
                <strong className="text-primary">Epic Pack</strong> — 200 Venitokens (best value).
              </>
            }
          />
          <FaqItem
            q="How are my purchased credits managed?"
            a={
              <>
                Your credits are tied to your Apple or Google account. Sign in with the same account
                on another device to access your balance.
              </>
            }
          />
          <FaqItem
            q="How do I get a refund?"
            a={
              <>
                Purchases are processed through the Apple App Store, so refunds are handled by Apple:
                go to{" "}
                <a
                  href={APPLE_REPORT_PROBLEM}
                  className="font-medium text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {APPLE_REPORT_PROBLEM}
                </a>
                , sign in with your Apple ID, find your Veni Tales purchase, and use &quot;Report a
                problem&quot; → &quot;Request a refund&quot;. Apple usually decides within 24–48
                hours. If you would like help with a refund, contact us at{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>
                .
              </>
            }
          />
          <FaqItem
            q="Can used credits be refunded?"
            a={
              <>
                Credits already spent on creating a story are generally outside Apple&apos;s refund
                scope. Unused credits may be eligible for a refund request through Apple.
              </>
            }
          />
          <FaqItem
            q="Do credits expire?"
            a={
              <>
                Your Venitokens do not expire; you can use them for as long as you like.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">
          Category 3: Story generation
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="How are stories created?"
            a={
              <>
                Stories are generated with AI using your child&apos;s details and the theme you pick.
                The text is converted into professional-quality narration and audio.
              </>
            }
          />
          <FaqItem
            q="What if a story is inappropriate?"
            a={
              <>
                We apply content filters to AI output, but unexpected content can rarely appear. If
                you see something inappropriate, tap &quot;Report&quot; on the story screen or
                email{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>
                . We will review the case and refund your credit.
              </>
            }
          />
          <FaqItem
            q="Can I generate the same theme again?"
            a={
              <>
                Yes. Each generation produces a different story, even if you choose the same theme
                again.
              </>
            }
          />
          <FaqItem
            q="Are stories saved?"
            a={
              <>
                Created stories are saved to your account. When you open the app again, you can
                listen to your past stories.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">
          Category 4: Parent controls
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="Is Veni Tales safe for children?"
            a={
              <>
                Yes. Veni Tales is built with child safety in mind: all stories pass content
                filters, there are no ads, there are no third-party links, and parental controls stay
                active.
              </>
            }
          />
          <FaqItem
            q="Can my child make a purchase by accident?"
            a={
              <>
                No. All purchases go through Apple&apos;s verification. You can also use iOS Family
                Sharing settings to prevent purchases on a child&apos;s device.
              </>
            }
          />
          <FaqItem
            q="Where is my child profile data stored?"
            a={
              <>
                Your child&apos;s information (name, age, interests) is used only to generate stories
                and is processed according to our privacy policy. See our{" "}
                <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
                  Privacy policy
                </Link>{" "}
                for details.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">
          Category 5: Technical issues
        </h2>
        <dl className="space-y-6">
          <FaqItem
            q="The app won&apos;t open"
            a={
              <>
                Force-quit and reopen the app; restart your device; if needed, delete and reinstall
                the app (your credits remain on your account after you sign in again). If the
                problem continues, email{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>{" "}
                with your device model and iOS version.
              </>
            }
          />
          <FaqItem
            q="A story won&apos;t load"
            a={
              <>
                Check your internet connection; story generation needs a stable connection. If
                connectivity is fine, restart the app; if it still fails, let us know.
              </>
            }
          />
          <FaqItem
            q="I purchased credits but they didn&apos;t appear"
            a={
              <>
                Apple verification can sometimes take 1–2 minutes. If they still don&apos;t show up,
                tap Settings → Restore Purchases and make sure you are signed in with the correct
                Apple account. If needed, email{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>{" "}
                with your receipt.
              </>
            }
          />
          <FaqItem
            q="Audio narration doesn&apos;t work"
            a={
              <>
                Check volume and silent mode; check Bluetooth; restart the app.
              </>
            }
          />
        </dl>

        <h2 className="font-display text-xl font-semibold text-primary">Category 6: Account</h2>
        <dl className="space-y-6">
          <FaqItem
            q="How do I delete my account?"
            a={
              <>
                To delete your account and associated data, use{" "}
                <strong className="text-primary">Settings → Account → Delete my account</strong> in
                the app, or email{" "}
                <a
                  href={`mailto:${email}?subject=Delete%20my%20account`}
                  className="font-medium text-primary underline underline-offset-2"
                >
                  {email}
                </a>{" "}
                with the subject &quot;Delete my account&quot;. We aim to complete the process within
                30 days. For data protection rights, see our{" "}
                <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
                  Privacy policy
                </Link>
                .
              </>
            }
          />
          <FaqItem
            q="My credits disappeared — what should I do?"
            a={
              <>
                Credits are tied to your Apple or Google account. Try Settings → Restore Purchases.
                If the issue persists, contact us with your purchase receipt.
              </>
            }
          />
          <FaqItem
            q="How do I move my account to a new device?"
            a={
              <>
                Sign in to Veni Tales on the new device with the same Apple or Google account. Your
                credits should appear automatically.
              </>
            }
          />
        </dl>
      </section>

      <section className="space-y-3 rounded-2xl border border-primary/10 bg-bg-cream p-6">
        <h2 className="font-display text-xl font-semibold text-primary">Contact us</h2>
        <p>
          Email:{" "}
          <a
            href={`mailto:${email}`}
            className="font-semibold text-primary underline underline-offset-2"
          >
            {email}
          </a>
        </p>
        <p>
          We usually reply within <strong className="text-primary">24–48 hours</strong>. Support is
          available in Turkish and English. When you email us, please include:
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm">
          <li>Device model (e.g. iPhone 14, iPad Air)</li>
          <li>iOS version (Settings → General → About → Software Version)</li>
          <li>App version (Settings → About)</li>
          <li>A clear description of the issue</li>
          <li>A screenshot if possible</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Legal</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
              Privacy policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="font-medium text-primary underline underline-offset-2">
              Terms of use
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

function FaqItem({
  q,
  a,
}: {
  q: string;
  a: React.ReactNode;
}) {
  return (
    <div>
      <dt className="font-semibold text-primary">{q}</dt>
      <dd className="mt-2 text-fg-muted [&_a]:text-primary">{a}</dd>
    </div>
  );
}

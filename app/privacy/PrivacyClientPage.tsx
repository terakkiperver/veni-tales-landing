"use client";

import LegalPageShell from "@/components/LegalPageShell";
import { useLanguage } from "@/components/LanguageProvider";
import {
  LEGAL_ENTITY_ADDRESS_EN,
  LEGAL_ENTITY_ADDRESS_TR,
  LEGAL_ENTITY_NAME_EN,
  LEGAL_ENTITY_NAME_TR,
  LEGAL_ENTITY_VKN,
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
          özetlendiği şekilde veri işlemeyi kabul etmiş sayılırsınız. Politikayı güncelleyebiliriz;
          önemli değişiklikleri uygulama veya web üzerinden bildirmeye çalışırız.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Veri sorumlusu</h2>
        <p>
          <strong className="text-primary">{LEGAL_ENTITY_NAME_TR}</strong> (&quot;biz&quot;),
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) ve ilgili mevzuat
          kapsamında veri sorumlusudur.
        </p>
        <ul className="list-inside list-disc space-y-2 pl-1 text-primary-light">
          <li>
            <strong className="text-primary">Adres:</strong> {LEGAL_ENTITY_ADDRESS_TR}
          </li>
          <li>
            <strong className="text-primary">Vergi kimlik numarası (VKN):</strong>{" "}
            {LEGAL_ENTITY_VKN}
          </li>
          <li>
            <strong className="text-primary">İletişim:</strong>{" "}
            <a
              href={`mailto:${email}`}
              className="font-medium text-primary underline underline-offset-2"
            >
              {email}
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          İşlenen veri kategorileri (özet)
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-1">
          <li>
            <strong className="text-primary">Kimlik / profil:</strong> çocuk profili için
            sağladığınız ad veya takma ad, yaş veya yaş aralığı, ilgi alanları ve tercihler (uygulama
            akışına göre).
          </li>
          <li>
            <strong className="text-primary">İletişim ve hesap:</strong> kayıt yönteminize bağlı
            olarak e-posta; kullanıcı tanımlayıcısı; oturum ve kimlik doğrulama ile ilgili teknik
            bilgiler.
          </li>
          <li>
            <strong className="text-primary">İşlem / satın alma:</strong> uygulama içi satın alma ve
            abonelikler için platformların paylaştığı işlem kimliği, ürün tanımlayıcısı, satın alma
            tarihi ve tutarı, abonelik durumu gibi sınırlı bilgiler (kart bilgisi bize iletilmez).
          </li>
          <li>
            <strong className="text-primary">İçerik:</strong> masal oluşturmak için girdiğiniz
            metinler, tema ve ortam tercihleri, seslendirme veya üretimle ilgili seçimler.
          </li>
          <li>
            <strong className="text-primary">Kullanım ve cihaz:</strong> uygulama sürümü, dil
            tercihi, cihaz modeli ve işletim sistemi özeti, hata ve çökme günlükleri, özellik
            kullanımına dair teknik kayıtlar (toplanan alanlar sürüme ve ayarlara göre değişebilir).
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">İşleme amaçları</h2>
        <p>
          Verileriniz; hesabınızı sağlamak ve güvence altına almak, kişiselleştirilmiş masal ve sesli
          içerik üretmek, hizmet kalitesini iyileştirmek, destek taleplerinizi yanıtlamak ve yasal
          yükümlülükleri yerine getirmek amacıyla işlenir.
        </p>
        <p>
          <strong className="text-primary">Şu an için:</strong> ticari amaçlı pazarlama e-postası
          göndermiyoruz; pazarlama bildirimi için anlık bildirim (push) kullanmıyoruz; bu web sitesinde
          analitik veya reklam amaçlı çerez uygulamıyoruz. Yalnızca hizmetin işletilmesi için gerekli
          teknik çerezler veya benzeri oturum unsurları kullanılabilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Yapay zeka ile üretilen içerik ve ses
        </h2>
        <p>
          Masal metni oluşturmak için sağladığınız girdiler (örneğin çocuğa ait isim, yaş veya yaş
          aralığı, ilgi alanları, tema ve istemler) yapay zeka tabanlı içerik üretim hizmeti
          sağlayıcılarımıza iletilerek işlenebilir. Üretilen metin, seslendirme için metinden sese
          hizmet sağlayıcılarına aktarılabilir.
        </p>
        <p>
          <strong className="text-primary">Model eğitimi:</strong> girdilerinizi veya üretilen
          masalları yapay zeka modellerini eğitmek için kullanmıyoruz; bu amaçla işleme yapmıyoruz.
          Sağlayıcıların kendi politikalarına tabi ek işlemleri için ilgili sağlayıcı belgelerine
          bakınız.
        </p>
        <p>
          İçerik güvenliği için makul teknik ve süreç önlemleri uyguluyoruz; buna rağmen yapay zeka
          çıktıları her zaman hatasız veya her yaş için uygun olmayabilir. Veli veya vasi olarak
          içeriği çocuğunuza sunmadan önce değerlendirmeniz önemlidir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Üçüncü taraflar ve alt işlemciler
        </h2>
        <p>
          Hizmeti sunmak için aşağıdaki <strong className="text-primary">kategorilerde</strong>{" "}
          hizmet sağlayıcılarından yararlanıyoruz. Bu bölümde ticari unvanları tek tek listelemiyoruz;
          güncel liste veya ek bilgi talebi için{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>{" "}
          adresinden bize yazabilirsiniz.
        </p>
        <ul className="list-inside list-disc space-y-2 pl-1">
          <li>Mobil uygulama mağazası ve uygulama içi ödeme altyapısı</li>
          <li>Abonelik ve satın alma yönetimi altyapısı</li>
          <li>Bulut barındırma, veri tabanı ve uygulama arka ucu</li>
          <li>Kimlik doğrulama ve güvenlik hizmetleri</li>
          <li>Yapay zeka ile metin üretimi hizmetleri</li>
          <li>Metinden sese / ses sentezi hizmetleri</li>
          <li>Çökme raporlama veya hata izleme araçları (kullanıldığı ölçüde)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Yurtdışına aktarım</h2>
        <p>
          Bazı hizmet sağlayıcılarımızın sunucuları veya tüzel kişilikleri yurt dışında bulunabilir.
          Bu durumda kişisel verileriniz, KVKK ve ilgili mevzuatta öngörülen şartlara ve sözleşmesel /
          teknik güvencelere uygun olarak yurt dışına aktarılabilir. Aktarımın hukuki sebebi; sözleşmenin
          ifası, açık rızanız, meşru menfaat veya kanunda öngörülen diğer hukuki dayanaklardan biri
          olabilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Hukuki sebep</h2>
        <p>
          İşleme; KVKK&apos;nın 5. ve 6. maddelerinde öngörülen; sözleşmenin kurulması veya ifası,
          hukuki yükümlülük, meşru menfaat veya açık rıza (örneğin isteğe bağlı özellikler) gibi
          sebeplere dayanabilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Ödeme ve abonelik</h2>
        <p>
          Uygulama içi satın almalar (örneğin kredi paketleri) ve abonelikler büyük ölçüde Apple App
          Store ve buna bağlı ödeme / abonelik yönetimi altyapısı üzerinden yürütülür. Ödeme kartı
          bilgileriniz bize doğrudan iletilmez. İşlemle ilgili olarak platform ve altyapı
          sağlayıcılarından işlem kimliği, ürün tanımlayıcısı, tarih ve tutar, abonelik durumu gibi
          sınırlı veriler işlenebilir. İade talepleri öncelikle Apple&apos;ın süreçlerine tabidir;
          süreçte size yardımcı olmak için{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>{" "}
          üzerinden iletişime geçebilirsiniz.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Saklama süreleri</h2>
        <p>
          Veriler; işlendikleri amaç için gerekli süre boyunca ve vergi, muhasebe, ticaret ve benzeri
          yasal saklama yükümlülükleri ile teknik yedekleme uygulamalarımız çerçevesinde tutulur.
          Süreler veri türüne göre değişebilir; süre dolduğunda silme, yok etme veya anonimleştirme
          yapılır. Belirli saklama süreleri tablosunu bu politikayı güncelleyerek veya talebiniz
          üzerine paylaşabiliriz.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Çocuklara ilişkin kişisel veriler
        </h2>
        <p>
          Veni Tales çocuklara yönelik içerik sunabilir; hesap oluşturma, satın alma ve sözleşmeye
          bağlı işlemler veli veya vasi tarafından yürütülür. Çocuğa ait verileri yalnızca masalı
          kişiselleştirme ve hizmetin sunulması için gerekli ölçüde işleriz.
        </p>
        <p>
          <strong className="text-primary">Örnek olarak işlenebilecekler:</strong> çocuk için kullanılan
          ad veya takma ad, yaş veya yaş aralığı, ilgi ve tema tercihleri, uygulama içi dinleme veya
          oluşturma geçmişi (özellikler açıksa).
        </p>
        <p>
          <strong className="text-primary">Toplamadığımız veya talep etmediğimiz örnekler:</strong>{" "}
          çocuğun fotoğrafı veya videosu, çocuğun ses kaydı (masal üretimi için ayrıca talep etmediğimiz
          sürece), çocuğun e-posta veya telefonu, çocuğa ait kesin konum verisi, çocuğun sosyal medya
          profili.
        </p>
        <p>
          Veli veya vasi; çocuğa ait verileri görüntüleme, düzeltme veya silme talebinde bulunmak için
          uygulama içi akışları kullanabilir veya{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>{" "}
          adresinden bize yazabilir. Hukuka aykırı toplandığına inandığınız veriler için derhal bize
          bildirimde bulunun.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Hesabın silinmesi</h2>
        <p>
          Hesabınızı ve ilişkili kişisel verilerinizi silmek için uygulamada{" "}
          <strong className="text-primary">Ayarlar → Hesap → Hesabımı sil</strong> yolunu
          kullanabilirsiniz. Alternatif olarak{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>{" "}
          adresine kimliğinizi doğrulayabileceğimiz bilgilerle birlikte yazabilirsiniz. Yasal olarak
          saklanması gereken kayıtlar (örneğin belirli muhasebe veya vergi kayıtları) saklı kalmak
          kaydıyla, talebiniz uygun süre içinde işleme alınır; yedeklerden silme teknik olarak bir
          süre daha gerektirebilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Veri güvenliği</h2>
        <p>
          Verilerinizin gizliliği ve bütünlüğü için makul teknik ve idari tedbirler (örneğin iletimde
          şifreleme, erişim kontrolleri, tedarikçi değerlendirmesi) uygularız. İnternet üzerinden
          veri iletiminin %100 güvenli olacağına dair garanti verilemez.
        </p>
        <p>
          Kişisel verilerinizi etkileyen bir ihlal tespit edilmesi halinde, KVKK ve ilgili mevzuatta
          öngörülen süre ve şekilde Kişisel Verileri Koruma Kurulu&apos;nu ve etkilenen kişileri
          bilgilendirmek için gerekli adımları atarız.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          KVKK kapsamındaki haklarınız (Madde 11)
        </h2>
        <p>Kanunun 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
        <ol className="list-inside list-decimal space-y-2 pl-1">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
          <li>
            KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok
            edilmesini isteme,
          </li>
          <li>
            (5) ve (6) bentleri uyarınca yapılan işlemlerin, verilerin aktarıldığı üçüncü kişilere
            bildirilmesini isteme,
          </li>
          <li>
            Münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun
            ortaya çıkmasına itiraz etme,
          </li>
          <li>Kanuna aykırı işlenmesi sebebiyle zararın giderilmesini talep etme.</li>
        </ol>
        <p>
          Taleplerinizi{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>{" "}
          adresine iletebilirsiniz. Kimlik teyidi ve talebin niteliğine göre ek bilgi isteyebiliriz.
          Yanıt süresi, yürürlükteki mevzuatta öngörülen sürelere tabidir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">İletişim</h2>
        <p>
          Gizlilik ve kişisel verilerle ilgili sorularınız için:{" "}
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
          This privacy policy explains how{" "}
          <strong className="text-primary">{LEGAL_ENTITY_NAME_EN}</strong> (&quot;we&quot;,
          &quot;us&quot;) processes personal data when you use the Veni Tales mobile application and
          this website (together, the &quot;Service&quot;). We are established in Türkiye; if you live
          elsewhere, additional rights may apply under local law. By using the Service you agree to
          processing as described here. We may update this policy and will try to notify you of
          material changes through the app or the website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Data controller</h2>
        <p>
          The data controller is <strong className="text-primary">{LEGAL_ENTITY_NAME_EN}</strong>,
          processing personal data under Law No. 6698 on the Protection of Personal Data
          (&quot;KVKK&quot;) and related Turkish legislation, where applicable.
        </p>
        <ul className="list-inside list-disc space-y-2 pl-1 text-primary-light">
          <li>
            <strong className="text-primary">Address:</strong> {LEGAL_ENTITY_ADDRESS_EN}
          </li>
          <li>
            <strong className="text-primary">Tax ID (VKN):</strong> {LEGAL_ENTITY_VKN}
          </li>
          <li>
            <strong className="text-primary">Contact:</strong>{" "}
            <a
              href={`mailto:${email}`}
              className="font-medium text-primary underline underline-offset-2"
            >
              {email}
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Categories of personal data</h2>
        <ul className="list-inside list-disc space-y-2 pl-1">
          <li>
            <strong className="text-primary">Identity / profile:</strong> name or display name, age
            or age range, interests and preferences you provide for a child profile (depending on app
            flows).
          </li>
          <li>
            <strong className="text-primary">Contact and account:</strong> email address if you sign
            in that way; user identifiers; technical information related to sessions and
            authentication.
          </li>
          <li>
            <strong className="text-primary">Transactions / purchases:</strong> limited purchase and
            subscription data such as transaction identifiers, product identifiers, date and amount,
            and subscription status as shared by app stores and related infrastructure (we do not
            receive your full card details).
          </li>
          <li>
            <strong className="text-primary">Content:</strong> text you enter to create stories, theme
            and setting preferences, and choices related to narration or generation.
          </li>
          <li>
            <strong className="text-primary">Usage and device:</strong> app version, language
            preference, device model and OS summary, crash logs, and technical logs related to
            feature usage (fields may vary by release and settings).
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Purposes of processing</h2>
        <p>
          We process data to provide and secure the Service, generate personalized stories and audio,
          improve quality, respond to support requests, and comply with legal obligations.
        </p>
        <p>
          <strong className="text-primary">Current practices:</strong> we do not send marketing
          emails; we do not use push notifications for marketing; we do not use analytics or
          advertising cookies on this website. Only cookies or similar technologies strictly necessary
          to operate the site may be used.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          AI-generated content and audio
        </h2>
        <p>
          To generate story text, information you provide (such as the child&apos;s name or display
          name, age or age range, interests, themes, and prompts) may be processed by providers of
          AI-based text generation. Generated text may be sent to text-to-speech providers to create
          audio.
        </p>
        <p>
          <strong className="text-primary">Model training:</strong> we do not use your inputs or
          generated stories to train AI models for our own purposes. Providers may have their own
          policies for how they process data on their systems; please review their documentation where
          relevant.
        </p>
        <p>
          We apply reasonable technical and process measures for safety; AI outputs may still be
          imperfect or unsuitable for some ages. Parents or guardians should review content before
          sharing it with a child.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Subprocessors and third-party services
        </h2>
        <p>
          We use providers in the following <strong className="text-primary">categories</strong>.
          We do <strong className="text-primary">not</strong> list legal trade names individually in
          this policy; you may request further information by emailing{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>
          .
        </p>
        <ul className="list-inside list-disc space-y-2 pl-1">
          <li>Mobile app store and in-app purchase infrastructure</li>
          <li>Subscription and purchase management infrastructure</li>
          <li>Cloud hosting, databases, and application backend</li>
          <li>Authentication and security services</li>
          <li>AI-based text generation services</li>
          <li>Text-to-speech / voice synthesis services</li>
          <li>Crash reporting or error monitoring tools (where used)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">International transfers</h2>
        <p>
          Some providers may process data outside Türkiye. Where this occurs, we rely on appropriate
          safeguards and legal bases under KVKK and applicable law (such as contract performance,
          explicit consent where required, or other permitted grounds).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Legal basis</h2>
        <p>
          Processing may rely on legal bases under KVKK Articles 5 and 6, including performance of a
          contract, legal obligation, legitimate interests, or explicit consent for optional features.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Payments and subscriptions</h2>
        <p>
          In-app purchases (such as credit packs) and subscriptions are primarily handled through the
          Apple App Store and related payment and subscription infrastructure. We do not receive your
          full payment card details. We may process limited data such as transaction identifiers,
          product identifiers, date and amount, and subscription status. Refund requests are primarily
          governed by Apple&apos;s processes; you may contact us at{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>{" "}
          for assistance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Retention</h2>
        <p>
          We retain data for as long as necessary for the purposes described in this policy and as
          required by tax, accounting, commercial, or similar legal retention rules, and in line with
          our technical backup practices. Retention periods may vary by data category. When retention
          ends, we delete, destroy, or anonymize data. We may publish a more detailed retention table in
          updates to this policy or provide it upon request.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Children&apos;s privacy</h2>
        <p>
          Veni Tales may offer child-directed content. Account creation, purchases, and contractual
          steps are carried out by a parent or guardian. We process child-related data only to the
          extent needed to personalize stories and provide the Service.
        </p>
        <p>
          <strong className="text-primary">Examples of what we may process:</strong> a name or
          display name used in the story, age or age range, interests and theme preferences, and in-app
          listening or creation history where features are enabled.
        </p>
        <p>
          <strong className="text-primary">Examples of what we do not collect or ask for:</strong>{" "}
          photos or videos of the child, the child&apos;s voice recordings (unless separately
          requested for a feature you choose), the child&apos;s email or phone number, precise
          location of the child, or the child&apos;s social media profiles.
        </p>
        <p>
          Parents or guardians may exercise access, correction, or deletion through in-app flows or by
          emailing{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>
          . If you believe we collected a child&apos;s data unlawfully, contact us immediately.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Account deletion</h2>
        <p>
          You can delete your account and related personal data in the app under{" "}
          <strong className="text-primary">Settings → Account → Delete my account</strong>. You may
          also email{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>{" "}
          with information that allows us to verify your identity. Records we must keep by law (for
          example certain accounting or tax records) may be retained as required. Deletion from
          backups may take additional time for technical reasons.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Data security</h2>
        <p>
          We implement reasonable technical and organizational measures (such as encryption in
          transit, access controls, and vendor review). No method of transmission over the internet is
          completely secure.
        </p>
        <p>
          If we become aware of a personal data breach that affects your personal data, we will take
          steps to notify the Turkish Personal Data Protection Authority and affected individuals as
          required by KVKK and related legislation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Your rights under KVKK (Article 11)</h2>
        <p>Under Article 11 of KVKK, you have the right to:</p>
        <ol className="list-inside list-decimal space-y-2 pl-1">
          <li>Learn whether your personal data are processed,</li>
          <li>Request information if they have been processed,</li>
          <li>Learn the purpose of processing and whether data are used in line with that purpose,</li>
          <li>Know third parties to whom personal data are transferred domestically or abroad,</li>
          <li>Request rectification if data are incomplete or inaccurate,</li>
          <li>
            Request deletion or destruction of personal data under the conditions set out in Article
            7 of KVKK,
          </li>
          <li>
            Request notification of third parties to whom data were transferred about operations
            carried out under items (5) and (6),
          </li>
          <li>
            Object to outcomes against you where data are analyzed exclusively through automated
            systems,
          </li>
          <li>Claim compensation for damage arising from unlawful processing.</li>
        </ol>
        <p>
          Submit requests to{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>
          . We may ask for identity verification and additional information depending on your request.
          Response timelines follow statutory periods under applicable law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Contact</h2>
        <p>
          For privacy questions:{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>
          .
        </p>
      </section>
    </>
  );
}

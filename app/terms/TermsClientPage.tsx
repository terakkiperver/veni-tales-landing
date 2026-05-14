"use client";

import Link from "next/link";
import LegalPageShell from "@/components/LegalPageShell";
import { useLanguage } from "@/components/LanguageProvider";
import {
  LEGAL_ENTITY_NAME_EN,
  LEGAL_ENTITY_NAME_TR,
  LEGAL_LAST_UPDATED,
  LEGAL_LAST_UPDATED_EN,
  SUPPORT_EMAIL,
} from "@/lib/site";

export default function TermsClientPage() {
  const { locale } = useLanguage();
  const isEn = locale === "en";

  return (
    <LegalPageShell
      title={isEn ? "Terms of use" : "Kullanım koşulları"}
      updatedLine={
        isEn ? `Last updated: ${LEGAL_LAST_UPDATED_EN}` : undefined
      }
      updated={isEn ? undefined : LEGAL_LAST_UPDATED}
      backLabel={isEn ? "← Home" : undefined}
    >
      {isEn ? <TermsEn email={SUPPORT_EMAIL} /> : <TermsTr email={SUPPORT_EMAIL} />}
    </LegalPageShell>
  );
}

function TermsTr({ email }: { email: string }) {
  return (
    <>
      <section className="space-y-4">
        <p>
          Veni Tales (&quot;Hizmet&quot;), kişiselleştirilmiş masal ve sesli içerik sunan mobil
          uygulama ve ilişkili web özellikleridir. Hizmeti{" "}
          <strong className="text-primary">{LEGAL_ENTITY_NAME_TR}</strong> (&quot;biz&quot;,
          &quot;şirket&quot;) işletir ve sunar.
        </p>
        <p>
          Bu Kullanım Koşulları (&quot;Sözleşme&quot;), Hizmeti kullanan gerçek veya tüzel kişiyi
          (&quot;Kullanıcı&quot;) ve çocuk profili oluşturma, içerik üretme veya çocuğa yönelik
          özellikleri kullanırken hareket eden ebeveyn veya vasiyi (&quot;Ebeveyn/Vasi&quot;)
          birlikte bağlar. Hizmeti çocuğunuz adına kullanıyorsanız, bu Sözleşmeyi Ebeveyn/Vasi
          olarak kabul ve taahhüt etmiş sayılırsınız.
        </p>
        <p>
          <strong className="text-primary">Yürürlük:</strong> İşbu Sözleşme,{" "}
          <strong className="text-primary">{LEGAL_LAST_UPDATED}</strong> tarihi itibarıyla
          yürürlüğe girer. Hizmeti kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz
          anlamına gelir; kabul etmiyorsanız Hizmeti kullanmayınız.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Hizmetin kapsamı</h2>
        <p>
          Veni Tales; yapay zeka ve ses teknolojileriyle kişiselleştirilmiş masal ve sesli içerik
          deneyimi sunar. Özellikler zaman içinde değişebilir; belirli işlevler ücretli, kredi veya
          abonelik gerektirebilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Anonim kullanım</h2>
        <p>
          Hizmetin sınırlı bölümlerini hesap oluşturmadan veya kimliğinizi doğrulamadan
          kullanmanıza izin verilebilir. Anonim kullanımda oluşturulan içerikler cihazınızda veya
          sunucularımızda geçici olarak tutulabilir; hesap oluşturulmadığı sürece verilerinizin
          sürekliliği ve cihazlar arası senkronizasyonu garanti edilmez.
        </p>
        <p>
          Satın alma, abonelik, buluta kalıcı kayıt, çocuk profili veya gelişmiş özellikler için
          kayıt ve kimlik doğrulama talep edebiliriz. Anonim kullanım, bu Sözleşmedeki yasak
          kullanım ve içerik kurallarına tabidir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Hesap ve güvenlik</h2>
        <p>
          Hesap oluşturduğunuzda bilgilerinizin doğruluğundan ve hesap güvenliğinden Kullanıcı
          olarak siz sorumlusunuz. Yetkisiz erişimi fark ederseniz derhal bize bildirin. Hizmeti
          yürürlükteki hukuka, üçüncü kişilerin haklarına ve bu Sözleşmeye aykırı kullanamazsınız.
        </p>
        <p>
          Çocuklara yönelik özelliklerde Ebeveyn/Vasi&apos;nin onayı veya bilgilendirmesi esas
          alınır; çocuğun kişisel verileri ve içerik tercihleri için yasal temsilci sorumluluğu
          Ebeveyn/Vasi&apos;ye aittir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Paketler, kredi, abonelik ve iade
        </h2>
        <p>
          <strong className="text-primary">Charm Pack, Spell Pack ve Epic Pack</strong> (&quot;
          Paketler&quot;), uygulama içinden satın alınabilen kredi veya kullanım hakkı paketleridir.
          Her paketin içeriği, süresi, fiyatı ve kullanım koşulları satın alma öncesi uygulama
          içinde gösterilir.
        </p>
        <p>
          Paketlerle tanımlanan krediler veya kullanım hakları tükendiğinde, tüketilen kısım için{" "}
          <strong className="text-primary">iade veya nakit karşılığı talep edilemez</strong>.
          Yürürlükteki mevzuatın zorunlu kıldığı istisnalar ve Apple App Store üzerinden yürütülen
          iade süreçleri saklıdır.
        </p>
        <p>
          Ödemeler ve abonelik yönetimi öncelikle Apple App Store (veya ileride desteklenebilecek
          diğer platformlar) üzerinden yapılır. Fiyat, fatura döngüsü, iptal ve iade Apple veya
          ilgili platformun şartlarına tabidir; otomatik yenilenen abonelikleri platform hesabınızdan
          yönetmeniz gerekir.
        </p>
        <p>
          <strong className="text-primary">Tüketici hakları:</strong> Tüketici sıfatıyla
          6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği
          başta olmak üzere yürürlükteki mevzuat kapsamındaki <strong className="text-primary">
            değiştirilemeyen haklarınız saklıdır
          </strong>
          . Dijital içerik veya hizmetlere ilişkin cayma, ayıp ve iade koşulları ilgili kanun ile
          platform kuralları çerçevesinde değerlendirilir.
        </p>
        <p>
          Gizlilik uygulamalarımız için{" "}
          <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
            Gizlilik politikası
          </Link>{" "}
          sayfamıza bakın.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Yapay zeka ile üretilen içerik ve kullanım hakları
        </h2>
        <p>
          Masal, metin ve görseller yapay zeka ve otomasyonla üretilebilir; sonuçlar her zaman
          hatasız veya her yaş ve bağlam için uygun olmayabilir. İçerik güvenliği ve uygunluk için
          teknik ve süreç bazlı önlemler uyguluyoruz; buna rağmen{" "}
          <strong className="text-primary">%100 doğruluk veya uygunluk garantisi verilmez</strong>.
          Ebeveyn veya vasi olarak içeriği çocuğunuza sunmadan önce değerlendirmeniz önemlidir.
        </p>
        <p>
          <strong className="text-primary">Üretilen içeriğe ilişkin lisans:</strong> Size, yalnızca
          kişisel ve aile içi dinleme/okuma amacıyla, Hizmet üzerinden üretilen masal ve sesleri
          kullanmak için devredilemez, alt lisans verilemez, münhasır olmayan ve dünya çapında
          sınırlı bir lisans verilir. Ticari kullanım, kamuya açık performans, yeniden satış,
          veri madenciliği, toplu indirme veya üçüncü kişilere içerik sağlama (API, bot, paylaşım
          ağları vb.) bu Sözleşmede açıkça izin verilmedikçe yasaktır. Üçüncü taraf platformlara
          yüklemeniz veya model eğitimi için kullanmanız yasaktır.
        </p>
        <p>
          Hesabınızın sonlanması veya Hizmetin ilgili özelliğinin kaldırılması halinde, bulutta
          saklanan içeriklere erişiminiz sona erebilir; yasal saklama yükümlülükleri saklı kalmak
          kaydıyla içerikleri önceden indirmeniz veya yedeklemeniz sizin sorumluluğunuzdadır.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Üçüncü taraf hizmetler</h2>
        <p>
          Hizmet; <strong className="text-primary">ticari unvanları bu metinde tek tek sayılmayan</strong>{" "}
          üçüncü taraf sağlayıcılar aracılığıyla da sunulabilir. Örneğin ödeme ve abonelik yönetimi
          altyapısı, bulut barındırma ve veri tabanı, kimlik doğrulama, ses sentezi, yapay zeka ile
          içerik üretimi, analitik, çökme raporlama ve benzeri işlevler için bu sağlayıcılar
          kullanılabilir. Kişisel verilerinizin işlenmesi,{" "}
          <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
            Gizlilik politikamız
          </Link>{" "}
          ile uyumlu olacak şekilde ve yalnızca Hizmetin ifası için gerekli ölçüde aktarılabilir.
        </p>
        <p>
          Apple App Store veya ileride desteklenen diğer dağıtım platformlarının kendi şartları ve
          gizlilik politikaları da geçerlidir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Hizmet sürekliliği, bakım ve güncellemeler
        </h2>
        <p>
          Hizmetin kesintisiz veya belirli bir süre boyunca kesintisiz sunulacağı şeklinde bir
          taahhüt verilmez. Bakım, güncelleme, altyapı iyileştirmesi, güvenlik yaması veya mücbir
          sebep nedeniyle geçici veya planlı kesintiler yaşanabilir.
        </p>
        <p>
          Planlı bakım için mümkün olduğunca önceden bilgilendirme yapılmaya çalışılır; acil güvenlik
          veya operasyonel durumlarda bildirim gecikebilir veya kısıtlı olabilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Fikri mülkiyet ve lisans
        </h2>
        <p>
          Hizmet; yazılım, arayüz tasarımı, markalar ve telifle korunan diğer unsurları içerir.{" "}
          <strong className="text-primary">Veni Tales</strong> adı ve markası{" "}
          <strong className="text-primary">{LEGAL_ENTITY_NAME_TR}</strong>
          &apos;ne aittir. Size yalnızca bu Sözleşmeye uygun şekilde Hizmeti kullanmak için sınırlı,
          devredilemez bir lisans verilir.
        </p>
        <p>
          Üretilen masal metinleri ve sesleri yukarıdaki kişisel kullanım lisansı kapsamındadır;
          şirketin veya lisans verenlerin fikri mülkiyet hakları saklıdır.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Garanti reddi ve sorumluluk sınırı
        </h2>
        <p>
          Hizmet &quot;olduğu gibi&quot; sunulur. Yürürlükteki hukukun izin verdiği ölçüde kesintisiz
          veya hatasız çalışacağına dair garanti verilmez. Belirli dolaylı veya arızi zararlardan
          doğan sorumluluklar, kanunun gerektirdiği azami sınıra kadar hariç tutulabilir veya
          sınırlanabilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Değişiklik ve fesih</h2>
        <p>
          Koşulları güncelleyebilir veya Hizmetin herhangi bir kısmını sonlandırabiliriz. Önemli
          değişiklikleri uygulama, e-posta veya web üzerinden makul ölçüde bildirmeye çalışırız.
          Güncel koşulları düzenli olarak okumanız önerilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Uygulanacak hukuk</h2>
        <p>
          Uyuşmazlıkların çözümünde Türkiye Cumhuriyeti kanunları uygulanır. Tüketici iseniz,
          yürürlükteki mevzuat kapsamındaki zorunlu haklarınız saklıdır.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">İletişim</h2>
        <p>
          Sorularınız için:{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>
          .
        </p>
      </section>
    </>
  );
}

function TermsEn({ email }: { email: string }) {
  return (
    <>
      <section className="space-y-4">
        <p>
          Veni Tales (the &quot;Service&quot;) is a mobile application and related web experience
          that offers personalized stories and audio content. The Service is operated and provided
          by <strong className="text-primary">{LEGAL_ENTITY_NAME_EN}</strong> (&quot;we&quot;,
          &quot;us&quot;).
        </p>
        <p>
          These Terms of Use (the &quot;Agreement&quot;) bind (i) the natural or legal person using
          the Service (the &quot;User&quot;), and (ii) the parent or guardian who creates a child
          profile, generates content for a minor, or otherwise uses child-related features (the
          &quot;Parent/Guardian&quot;). If you use the Service on behalf of your child, you enter
          into this Agreement as Parent/Guardian.
        </p>
        <p>
          <strong className="text-primary">Effective date:</strong> This Agreement takes effect on{" "}
          <strong className="text-primary">{LEGAL_LAST_UPDATED_EN}</strong>. Continued use of the
          Service means you accept the then-current terms; if you do not agree, do not use the
          Service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Scope of the Service</h2>
        <p>
          Veni Tales offers personalized fairy tales and audio content using AI and voice
          technologies. Features may change over time; some functionality may require payment,
          credits, or a subscription.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Use without an account</h2>
        <p>
          We may allow limited parts of the Service to be used without creating an account or
          verifying your identity. Content created while anonymous may be stored temporarily on your
          device or our servers; without an account we do not guarantee continuity of data or
          cross-device sync.
        </p>
        <p>
          Purchases, subscriptions, durable cloud storage, child profiles, or advanced features may
          require registration and authentication. Anonymous use is still subject to prohibited-use
          and content rules in this Agreement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Account and security</h2>
        <p>
          When you create an account, you are responsible as User for the accuracy of your
          information and for safeguarding your credentials. Notify us promptly of any unauthorized
          access. You may not use the Service in violation of applicable law, third-party rights, or
          this Agreement.
        </p>
        <p>
          For child-related features we rely on Parent/Guardian consent or information where
          required; Parent/Guardian remains responsible for the minor&apos;s personal data and
          content choices under applicable law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Packs, credits, subscriptions, and refunds
        </h2>
        <p>
          <strong className="text-primary">Charm Pack, Spell Pack, and Epic Pack</strong> (the
          &quot;Packs&quot;) are in-app purchases of credits or usage entitlements. Each Pack&apos;s
          contents, duration, price, and conditions are shown in the app before purchase.
        </p>
        <p>
          When credits or entitlements included in a Pack are{" "}
          <strong className="text-primary">fully consumed, no refund or cash value</strong> is
          owed for the portion already used, except where mandatory consumer rights apply or where
          Apple&apos;s refund process (or another supported platform) provides a remedy.
        </p>
        <p>
          Payments and subscription management are primarily handled through the Apple App Store
          (or other platforms we may support later). Pricing, billing cycles, cancellation, and
          refunds are governed by Apple or the relevant platform; you must manage auto-renewing
          subscriptions through your platform account.
        </p>
        <p>
          <strong className="text-primary">Consumer rights (Türkiye):</strong> If you qualify as a
          consumer under Turkish law, including Law No. 6502 on the Protection of Consumers and
          the Regulation on Distance Contracts, your{" "}
          <strong className="text-primary">mandatory statutory rights cannot be waived</strong>.
          Withdrawal, defects, and refunds for digital content or services are assessed under
          applicable legislation and platform rules.
        </p>
        <p>
          For privacy practices, see our{" "}
          <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
            Privacy policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          AI-generated content and usage rights
        </h2>
        <p>
          Stories, text, and images may be produced using AI and automation; results may not always
          be accurate or appropriate for every age or context. We apply technical and process
          measures for safety and suitability; nevertheless we{" "}
          <strong className="text-primary">do not guarantee 100% accuracy or appropriateness</strong>
          . As a parent or guardian, you should review content before sharing it with your child.
        </p>
        <p>
          <strong className="text-primary">License to you:</strong> We grant you a limited,
          non-exclusive, non-transferable, non-sublicensable, worldwide license to use stories and
          audio generated through the Service solely for personal, private, and household listening
          or reading. Commercial use, public performance, resale, data mining, bulk downloading, or
          supplying content to third parties (including via APIs, bots, or sharing networks) is
          prohibited unless expressly permitted in this Agreement. Uploading generated content to
          third-party platforms for redistribution, or using it to train models, is prohibited.
        </p>
        <p>
          If your account ends or we remove a feature, access to content stored in the cloud may end;
          except where we must retain data by law, you are responsible for downloading or backing up
          content in advance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Third-party services</h2>
        <p>
          The Service may rely on <strong className="text-primary">third-party providers whose
          names are not individually listed here</strong>, for example payment and subscription
          infrastructure, cloud hosting and databases, authentication, voice synthesis, AI content
          generation, analytics, crash reporting, and similar functions. Personal data may be shared
          with them only as needed to operate the Service and as described in our{" "}
          <Link href="/privacy" className="font-medium text-primary underline underline-offset-2">
            Privacy policy
          </Link>
          .
        </p>
        <p>
          The Apple App Store or other distribution platforms you use also apply their own terms and
          privacy policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Availability, maintenance, and updates
        </h2>
        <p>
          We do not warrant that the Service will be uninterrupted or continuously available.
          Outages may occur due to maintenance, updates, infrastructure work, security patches, or
          events beyond our reasonable control.
        </p>
        <p>
          Where practicable we will try to give advance notice of planned maintenance; for urgent
          security or operational reasons, notice may be delayed or limited.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Intellectual property and license
        </h2>
        <p>
          The Service includes software, interface design, trademarks, and other protected elements.
          The <strong className="text-primary">Veni Tales</strong> name and brand are owned by{" "}
          <strong className="text-primary">{LEGAL_ENTITY_NAME_EN}</strong>. We grant you only the
          limited, non-transferable license described in this Agreement to use the Service.
        </p>
        <p>
          Generated story text and audio are subject to the personal-use license above; our and our
          licensors&apos; intellectual property rights are reserved.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Disclaimer and limitation of liability
        </h2>
        <p>
          The Service is provided &quot;as is.&quot; To the extent permitted by law, we do not warrant
          uninterrupted or error-free operation. Certain indirect or consequential damages may be
          excluded or limited to the maximum extent permitted by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Changes and termination</h2>
        <p>
          We may update these terms or discontinue any part of the Service. We will try to give
          reasonable notice of material changes through the app, email, or the website. Please review
          the current terms regularly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Governing law</h2>
        <p>
          The laws of the Republic of Türkiye apply to the resolution of disputes. If you are a
          consumer, any mandatory rights under applicable consumer law remain unaffected.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Contact</h2>
        <p>
          Questions:{" "}
          <a href={`mailto:${email}`} className="font-medium text-primary underline underline-offset-2">
            {email}
          </a>
          .
        </p>
      </section>
    </>
  );
}

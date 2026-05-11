import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "@/components/LegalPageShell";
import { LEGAL_LAST_UPDATED, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kullanım koşulları — Veni Tales",
  description:
    "Veni Tales hizmetinin kullanımına ilişkin şartlar, abonelikler ve sorumluluklar.",
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Kullanım koşulları" updated={LEGAL_LAST_UPDATED}>
      <section className="space-y-4">
        <p>
          Veni Tales (&quot;Hizmet&quot;) mobil uygulamasını ve ilişkili web özelliklerini
          kullanarak bu Kullanım koşullarını kabul etmiş olursunuz. Kabul etmiyorsanız lütfen
          Hizmeti kullanmayın.
        </p>
        <p className="rounded-2xl border border-primary/10 bg-bg-cream p-4 text-sm text-primary">
          Bu metin genel bir şablondur; şirket bilgileri, uygulanacak hukuk, uyuşmazlık çözümü ve
          abonelik koşulları üretim ortamınıza göre avukatınızca gözden geçirilmelidir. Otomatik
          yenilenen abonelikler için App Store satın alma akışında da gerekli bilgilendirmeleri
          sağlamalısınız.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Hizmetin kapsamı</h2>
        <p>
          Veni Tales, yapay zeka ve ses teknolojileriyle kişiselleştirilmiş masal ve sesli içerik
          deneyimi sunar. Özellikler zaman içinde değişebilir; belirli işlevler ücretli veya abonelik
          gerektirebilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Hesap ve güvenlik</h2>
        <p>
          Hesap bilgilerinizin gizliliğinden siz sorumlusunuz. Yetkisiz kullanımı fark ederseniz
          derhal bize bildirin. Hizmeti yürürlükteki hukuka, üçüncü kişilerin haklarına ve bu
          koşullara aykırı kullanamazsınız.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Abonelik ve uygulama içi satın alma
        </h2>
        <p>
          Ödemeler ve abonelik yönetimi Apple App Store (veya ileride sunulabilecek diğer platformlar)
          üzerinden yapılır. Fiyat, fatura döngüsü ve iptal işlemleri platformun şartlarına tabidir.
          Otomatik yenilenen aboneliklerde iptali, Apple hesabınızın abonelik ayarlarından veya
          platformun sürecine uygun şekilde yapmanız gerekir.
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
          Yapay zeka ile üretilen içerik
        </h2>
        <p>
          Masal ve görseller yapay zeka ve otomasyonla üretilebilir; sonuçlar her zaman hatasız veya
          her yaş ve bağlam için uygun olmayabilir. Ebeveyn veya vasi olarak içeriği çocuğunuza
          sunmadan önce değerlendirmeniz önerilir. Üretilen metinlerin veya seslerin ticari
          yeniden kullanımı bu koşullarda açıkça izin verilmedikçe yasaktır.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Fikri mülkiyet ve lisans
        </h2>
        <p>
          Hizmet, yazılım, tasarım ve markalar dahil olmak üzere koruma altındaki unsurlar içerir.
          Size yalnızca kişisel ve bu koşullara uygun şekilde Hizmeti kullanmak için sınırlı, devredilemez
          bir lisans verilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">
          Garanti reddi ve sorumluluk sınırı
        </h2>
        <p>
          Hizmet &quot;olduğu gibi&quot; sunulur. Yürürlükteki hukukun izin verdiği ölçüde; kesintisiz
          veya hatasız çalışacağına dair garanti verilmez. Belirli dolaylı veya arızi zararlardan
          doğan sorumluluklar, kanunun gerektirdiği azami sınıra kadar hariç tutulabilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Değişiklik ve fesih</h2>
        <p>
          Koşulları güncelleyebilir veya Hizmetin herhangi bir kısmını sonlandırabiliriz. Önemli
          değişiklikleri makul ölçüde bildirmeye çalışırız. Güncel koşulları düzenli olarak okumanız
          önerilir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">Uygulanacak hukuk</h2>
        <p>
          Uyuşmazlıkların çözümünde Türkiye Cumhuriyeti kanunları uygulanır. Tüketici iseniz,
          ilgili mevzuat kapsamındaki zorunlu haklarınız saklıdır.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">İletişim</h2>
        <p>
          Sorularınız için:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-primary underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}

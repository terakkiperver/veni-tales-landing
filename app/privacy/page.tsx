import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";
import { LEGAL_LAST_UPDATED, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik politikası — Veni Tales",
  description:
    "Veni Tales mobil uygulaması ve web sitesi için kişisel verilerin işlenmesine ilişkin gizlilik politikası.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Gizlilik politikası" updated={LEGAL_LAST_UPDATED}>
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
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-primary underline underline-offset-2">
            {SUPPORT_EMAIL}
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
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-primary underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>{" "}
          adresine iletebilirsiniz.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-semibold text-primary">İletişim</h2>
        <p>
          Gizlilik ile ilgili sorularınız için:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-primary underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}

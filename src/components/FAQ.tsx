import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FAQ({ isOpen, onClose }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ESC tuşu ile kapatma
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // scroll kapatma
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const faqData: FAQItem[] = [
    {
      question: "Web sitesine sahip olmanın faydaları",
      answer: "Web siteniz, işletmenizin 7/24 açık olan dijital vitrinidir. Müşterileriniz istediği zaman ürün ve hizmetlerinizi inceleyebilir, iletişime geçebilir ve alışveriş yapabilir. Ayrıca marka kredibilitesi sağlar, müşteri güvenini artırır ve rakiplerinizden öne çıkmanızı sağlar. Modern dünyada web sitesi olmayan işletmeler, potansiyel müşterilerinin %80'ini kaybetme riski taşır."
    },
    {
      question: "Google'da çıkmanız için neden site gerekli?",
      answer: "Google, arama sonuçlarında web sitesi olan işletmeleri öncelikli olarak gösterir. Web siteniz yoksa Google My Business bile tam verimli çalışmaz. SEO optimizasyonu ile siteniz Google'ın ilk sayfasında yer alabilir, bu da organik müşteri trafiği demektir. Ayrıca Google Ads reklamlarınız da web sitenize yönlendirilerek dönüşüm oranları artar. Web sitesi, dijital pazarlama stratejilerinizin temel taşıdır."
    },
    {
      question: "Neden hazır site yerine bana özel yaptırmalısınız?",
      answer: "Hazır siteler binlerce kişi tarafından kullanılır ve markanızı diğerlerinden ayırmaz. Özel tasarım siteniz, markanızın kimliğini yansıtır ve rekabette öne çıkmanızı sağlar. Ayrıca sadece ihtiyacınız olan özellikler eklenir, gereksiz eklentilerle yavaşlamaz. Teknik destek garantili, SEO optimizasyonu dahil ve istediğiniz zaman güncellenebilir. Uzun vadede hem daha ekonomik hem de daha etkilidir."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Çıkış Butonu */}
        <button
          className="sticky top-6 right-6 float-right text-gray-400 hover:text-gray-700 transition-colors duration-200 bg-white/90 rounded-full p-3 shadow-lg border border-gray-200 z-20 mb-4"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Modal İçerik */}
        <div className="p-8 pt-4 pb-8">
          {/* Başlık */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="text-orange-500 w-8 h-8" />
              <h2 className="text-4xl text-gray-900 font-bold">Sık Sorulan Sorular</h2>
              <HelpCircle className="text-orange-500 w-8 h-8" />
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Web sitesi konusunda merak ettiklerinizin cevaplarını burada bulabilirsiniz. 
              Başka sorularınız için bizimle iletişime geçmekten çekinmeyin.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-8">
            {faqData.map((faq, index) => (
              <Card 
                key={index} 
                className="border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className="cursor-pointer p-6 hover:bg-orange-50/50 transition-colors duration-200"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-orange-500 transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-orange-500 transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </div>
                
                {openIndex === index && (
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="border-l-4 border-orange-400 pl-4 py-2">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, ShoppingCart, Sparkles, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  // ESC tuşu ile kapatma
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // scroll kapatma
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const demoProducts = [
    {
      title: 'Luxe Jewelry E-ticaret Sitesi',
      description: 'Premium mücevher markası için geliştirilmiş modern, şık ve güvenli e-ticaret platformu.',
      image: '/images/Ekran görüntüsü 2025-09-20 200051.png',
      features: ['Ürün Galerisi', 'Stok Takibi', 'Güvenli Ödeme', 'Admin Paneli'],
      tech: ['React', 'Node.js', 'MongoDB'],
      category: 'E-ticaret',
      status: 'Aktif Demo',
    },
    {
      title: 'Admin Dashboard Sistemi',
      description: 'Kapsamlı stok yönetimi, sipariş takibi ve müşteri analizi özellikleri ile donatılmış admin dashboard sistemi.',
      image: '/images/Ekran görüntüsü 2025-09-20 200155.png',
      features: ['Satış Raporları', 'Kullanıcı Yönetimi', 'Grafik Analizi', 'Bildirimler'],
      tech: ['Vue.js', 'Express', 'PostgreSQL'],
      category: 'Admin Panel',
      status: 'Demo Hazır',
    },
    {
      title: 'Ürün Yönetim Sistemi',
      description: 'Yeni ürün ekleme formu ile detaylı kategori, fiyat ve stok yönetimi.',
      image: '/images/Ekran görüntüsü 2025-09-20 200212.png',
      features: ['Ürün Ekleme', 'Kategori Seçimi', 'Fiyat Yönetimi', 'Görsel Yükleme'],
      tech: ['Next.js', 'Prisma', 'Cloudinary'],
      category: 'Form Sistemi',
      status: 'Geliştirmede',
    },
    {
      title: 'Mini CRM Çözümleri',
      description: 'İşinizi kolaylaştıracak kapsamlı müşteri ilişkileri yönetim sistemi. Müşteri takibi, satış süreçleri ve raporlama özellikleri ile işletmenizin verimliliğini artırın.',
      image: '/images/Ekran görüntüsü 2025-09-24 142713.png',
      features: ['Müşteri Takibi', 'Satış Süreçleri', 'Raporlama', 'İletişim Yönetimi'],
      tech: ['React', 'TypeScript', 'Supabase'],
      category: 'CRM Sistemi',
      status: 'Aktif Demo',
    },
    {
      title: 'Profesyonel İş Yönetimi',
      description: 'Modern iş süreçlerinizi dijitalleştiren kapsamlı yönetim sistemi. Proje takibi, ekip koordinasyonu ve verimlilik analizi.',
      image: '/images/Ekran görüntüsü 2025-09-24 144942.png',
      features: ['Proje Yönetimi', 'Ekip Takibi', 'Zaman Yönetimi', 'Raporlama'],
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      category: 'İş Yönetimi',
      status: 'Demo Hazır',
    },
    {
      title: 'Akıllı Analiz Paneli',
      description: 'Verilerinizi görselleştiren ve iş kararlarınızı destekleyen gelişmiş analiz dashboard\'u. Gerçek zamanlı raporlar ve akıllı öngörüler.',
      image: '/images/Ekran görüntüsü 2025-09-24 144951.png',
      features: ['Veri Analizi', 'Grafik Raporlar', 'Trend Analizi', 'Export İmkanı'],
      tech: ['React', 'Chart.js', 'Node.js'],
      category: 'Analiz Sistemi',
      status: 'Aktif Demo',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'E-ticaret':
        return 'bg-[#F97316] text-white';
      case 'Admin Panel':
        return 'bg-[#0A3D62] text-white';
      case 'Form Sistemi':
        return 'bg-purple-600 text-white';
      case 'CRM Sistemi':
        return 'bg-emerald-600 text-white';
      case 'İş Yönetimi':
        return 'bg-blue-600 text-white';
      case 'Analiz Sistemi':
        return 'bg-indigo-600 text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aktif Demo':
        return 'bg-green-100 text-green-800';
      case 'Demo Hazır':
        return 'bg-blue-100 text-blue-800';
      case 'Geliştirmede':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-[#F97316] w-8 h-8" />
            <h2 className="text-4xl text-[#0A3D62] font-bold">DEMO ÜRÜNLERİMİZ</h2>
            <Sparkles className="text-[#F97316] w-8 h-8" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Geliştirdiğimiz e-ticaret çözümlerini canlı demo olarak inceleyebilir, 
            kendi projeniz için ilham alabilirsiniz.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {demoProducts.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden transform hover:scale-105 bg-white"
            >
              <div
                className="relative overflow-hidden h-64 cursor-pointer"
                onClick={() => setSelectedImage({ src: product.image, title: product.title })}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <Badge className={`absolute top-4 left-4 ${getCategoryColor(product.category)} z-10`}>
                  {product.category}
                </Badge>

                <Badge className={`absolute top-4 right-4 ${getStatusColor(product.status)} z-10`}>
                  {product.status}
                </Badge>

                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <h4 className="font-bold text-lg mb-1">{product.title}</h4>
                  <p className="text-sm">Fotoğrafa tıklayın</p>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl mb-3 text-[#0A3D62] group-hover:text-[#F97316] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popup (Modal) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Çıkış Butonu */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors duration-200 bg-white/80 rounded-full p-2 shadow-md"
              onClick={() => setSelectedImage(null)}
            >
              <X size={22} />
            </button>

            {/* İçerik */}
            <div className="p-6">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[65vh] object-contain rounded-lg"
              />

              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#0A3D62] mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-gray-500">
                  ESC tuşuna basarak veya çarpıya tıklayarak kapatabilirsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

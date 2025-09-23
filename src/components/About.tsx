import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, ShoppingCart, Palette, Zap } from 'lucide-react';

export function About() {
  const skills = [
    'E-ticaret', 'Güvenlik', 'Admin Paneli', 'Mobil Uyumluluk', 'SEO',
    'Ödeme Sistemleri', 'Stok Yönetimi', 'Performans', 'SSL', 'Demo Projeler',
    'Özel Tasarım', 'Yedekleme', 'Destek', 'Eğitim', 'Bakım'
  ];

  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-[#F97316]" />,
      title: 'Özel Tasarımlı E-ticaret Siteleri',
      description: 'Mobil uyumlu, modern tasarımlı e-ticaret siteleri ile işletmenizin online varlığını güçlendirin.'
    },
    {
      icon: <Code className="w-8 h-8 text-[#F97316]" />,
      title: 'Güvenli Altyapı Çözümleri',
      description: 'Saldırılara karşı korunmuş, güvenli altyapı sistemleri ile verilerinizi koruma altına alın.'
    },
    {
      icon: <Palette className="w-8 h-8 text-[#F97316]" />,
      title: 'Özelleştirilebilir Admin Panelleri',
      description: 'İsteğe göre özelleştirilen, kullanımı kolay yönetim panelleri ile işletmenizi yönetin.'
    },
    {
      icon: <Zap className="w-8 h-8 text-[#F97316]" />,
      title: 'Demo Projeler',
      description: 'Karar vermeden önce demo projelerimizi inceleyerek fikir edinme ve ön izleme imkanı.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-[#0A3D62] font-bold">
            Hakkımızda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profesyonel ekibimizle, işletmelerin ihtiyaçlarına uygun modern, güvenli ve ölçeklenebilir e-ticaret çözümleri geliştiriyoruz.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl mb-6 text-[#0A3D62]">Misyonumuz</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Küçük ve orta ölçekli işletmelerin dijital dünyada güçlü bir yer edinmesini sağlamak için uygun maliyetli ve yüksek performanslı projeler sunuyoruz.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              E-ticaret sitelerimizin temelinde yalnızca estetik tasarım değil; kullanıcı deneyimi, güvenlik ve sürdürülebilir başarı bulunur. İsteğe özel geliştirdiğimiz yönetim panelleri ile müşterilerimize kolay kullanılabilir ve kontrolü tamamen ellerinde tutabilecekleri sistemler sağlıyoruz.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Her projede, müşterilerimizin satışlarını artırmasına ve markalarını daha ileriye taşımasına katkı sağlayacak yenilikçi, güvenli ve profesyonel çözümler üretiyoruz.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-[#0A3D62] text-white hover:bg-[#F97316] transition-all duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTgyNjkxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="E-ticaret Çözümleri"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-[#0A3D62]/10 rounded-lg"></div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-3xl text-center mb-12 text-[#0A3D62]">Hizmetlerimiz</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:scale-105 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h4 className="mb-3 text-[#0A3D62]">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
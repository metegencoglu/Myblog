import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      title: 'Her E-ticaret Sitesinde Olması Gereken 10 Temel Özellik',
      excerpt: 'Online mağazanızın başarılı olması için gerekli olan temel özellikleri keşfedin. Kullanıcı deneyiminden dönüşüm optimizasyonuna kadar.',
      date: '2024-01-15',
      category: 'E-ticaret',
      image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODIzMTMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '5 dk okuma'
    },
    {
      title: 'Website Performans Optimizasyonu Rehberi',
      excerpt: 'Web sitenizi daha hızlı hale getirmek için kanıtlanmış teknikleri öğrenin. Daha iyi kullanıcı deneyimi ve SEO sıralaması için.',
      date: '2024-01-10',
      category: 'Web Geliştirme',
      image: 'https://images.unsplash.com/photo-1676731820390-a119efe23333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTgyNTExNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '8 dk okuma'
    },
    {
      title: 'Online Mağazanız İçin Doğru Ödeme Sistemi Seçimi',
      excerpt: 'Popüler ödeme çözümlerini karşılaştırın ve işletmeniz için en uygun olanını seçin. Ücretler, özellikler ve güvenlik açısından.',
      date: '2024-01-05',
      category: 'Dijital İpuçları',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTgyNjkxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '6 dk okuma'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'E-ticaret':
        return 'bg-[#F97316] text-white';
      case 'Web Geliştirme':
        return 'bg-[#0A3D62] text-white';
      case 'Dijital İpuçları':
        return 'bg-[#F97316] text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-[#0A3D62] font-bold">
            Son Makaleler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Web geliştirme, e-ticaret en iyi uygulamaları ve dijital pazarlama ipuçları ile 
            işletmenizin online başarısına destek olun.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md overflow-hidden hover:scale-105 bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}>
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="group-hover:text-[#F97316] transition-colors duration-200 leading-tight text-[#0A3D62]">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString('tr-TR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center text-[#F97316] mt-4 group-hover:gap-2 transition-all duration-200">
                  <span>Devamını Oku</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#F97316] hover:bg-[#E85D04] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Tüm Makaleleri Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
}
import { Button } from './ui/button';
import { ArrowRight, Star, Users, Trophy, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Stats Cards - Top Right */}
      <div className="absolute top-8 right-8 z-20 hidden lg:block">
        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
              <Trophy className="w-6 h-6 text-[#F97316]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Başarılı Proje</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-[#0A3D62]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">Mutlu Müşteri</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4 flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">5.0</div>
              <div className="text-sm text-gray-600">Müşteri Puanı</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="w-full">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 mb-8">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">Profesyonel E-ticaret Çözümleri</span>
          </div>

          {/* Main heading - Centered */}
          <div className="text-center space-y-6 mb-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900">Modern</span>
              <span className="block bg-gradient-to-r from-[#F97316] to-[#E85D04] bg-clip-text text-transparent">
                E-ticaret Siteleri
              </span>
              <span className="block text-gray-900">Geliştiriyoruz</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Markanızın dijital dünyada güçlü bir varlık göstermesi için özel tasarım, 
              yüksek performanslı e-ticaret siteleri geliştiriyoruz.
            </p>
          </div>

          {/* CTA buttons - Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-[#F97316] to-[#E85D04] hover:from-[#E85D04] hover:to-[#F97316] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Projeye Başla
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 hover:border-[#0A3D62] hover:text-[#0A3D62] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              Portföyü İncele
            </Button>
          </div>

          {/* Mobile Stats - Bottom */}
          <div className="lg:hidden mt-16">
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 mx-auto mb-3">
                  <Trophy className="w-8 h-8 text-[#F97316]" />
                </div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Başarılı Proje</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 mx-auto mb-3">
                  <Users className="w-8 h-8 text-[#0A3D62]" />
                </div>
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 mx-auto mb-3">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">5.0</div>
                <div className="text-sm text-gray-600">Müşteri Puanı</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
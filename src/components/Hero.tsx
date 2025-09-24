import { Button } from './ui/button';
import { ArrowRight, Star, Users, Trophy, Sparkles, Monitor, ArrowUpRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToPortfolio = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-gradient-to-b from-orange-100/80 via-orange-50/50 to-orange-50/80">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-br from-orange-200/50 via-orange-100/40 to-transparent"></div>
        <div className="absolute top-20 left-40 w-64 h-64 rounded-full border-2 border-orange-300/40"></div>
        <div className="absolute top-40 left-60 w-32 h-32 rounded-full border-2 border-orange-400/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-orange-200/40 to-transparent"></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-orange-300/20 rounded-full filter blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-orange-400/15 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 border-2 border-orange-500/30 rounded-full"></div>
      </div>

      {/* Modern Dashboard Illustration - Right Side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block w-1/2 h-full">
        <div className="relative w-full h-full">
          {/* Dashboard Mockup */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-[580px] h-[400px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-orange-500/30">
            {/* Header */}
            <div className="h-12 bg-gray-900 border-b border-orange-500/30 flex items-center justify-between px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-3 w-16 bg-orange-500/40 rounded-full"></div>
                <div className="h-6 w-6 rounded-full bg-orange-500/60 flex items-center justify-center">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="grid grid-cols-3 gap-4 p-4">
              {/* Stats Card */}
              <div className="col-span-1 bg-gray-800 rounded-lg p-3 border border-orange-500/30">
                <div className="h-2 w-12 bg-orange-500 rounded-full mb-3"></div>
                <div className="h-4 w-16 bg-gradient-to-r from-orange-500 to-orange-400/70 rounded-full mb-2"></div>
                <div className="h-2 w-20 bg-gray-700 rounded-full"></div>
              </div>
              
              {/* Stats Card */}
              <div className="col-span-1 bg-gray-800 rounded-lg p-3 border border-orange-500/30">
                <div className="h-2 w-12 bg-orange-500 rounded-full mb-3"></div>
                <div className="h-4 w-16 bg-gradient-to-r from-orange-500 to-orange-400/70 rounded-full mb-2"></div>
                <div className="h-2 w-20 bg-gray-700 rounded-full"></div>
              </div>
              
              {/* Stats Card */}
              <div className="col-span-1 bg-gray-800 rounded-lg p-3 border border-orange-500/30">
                <div className="h-2 w-12 bg-orange-400 rounded-full mb-3"></div>
                <div className="h-4 w-16 bg-gradient-to-r from-orange-500 to-orange-400/70 rounded-full mb-2"></div>
                <div className="h-2 w-20 bg-gray-700 rounded-full"></div>
              </div>
              
              {/* Chart */}
              <div className="col-span-2 bg-gray-800 rounded-lg p-3 border border-orange-500/30 h-32">
                <div className="flex justify-between mb-4">
                  <div className="h-2 w-20 bg-orange-400 rounded-full"></div>
                  <div className="h-4 w-4 bg-orange-500 rounded-full"></div>
                </div>
                <div className="flex items-end h-16 space-x-2">
                  <div className="h-6 w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t"></div>
                  <div className="h-10 w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t"></div>
                  <div className="h-16 w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t"></div>
                  <div className="h-12 w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t"></div>
                  <div className="h-8 w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t"></div>
                  <div className="h-14 w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t"></div>
                </div>
              </div>
              
              {/* Table */}
              <div className="col-span-1 bg-gray-800 rounded-lg p-3 border border-orange-500/30 h-32">
                <div className="h-2 w-14 bg-orange-400 rounded-full mb-4"></div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-gray-700 rounded-full"></div>
                  <div className="h-2 w-2/3 bg-orange-500/60 rounded-full"></div>
                  <div className="h-2 w-full bg-gray-700 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-orange-500/40 rounded-full"></div>
                </div>
              </div>
              
              {/* Wide Card */}
              <div className="col-span-3 bg-gray-800 rounded-lg p-3 border border-orange-500/30 h-20">
                <div className="h-2 w-24 bg-orange-400 rounded-full mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 bg-orange-500 rounded-full"></div>
                    <div className="h-3 w-20 bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="h-6 w-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-md flex items-center justify-center">
                    <div className="h-1.5 w-12 bg-white/80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gradient Glow Effect */}
          <div className="absolute right-8 -bottom-10 w-96 h-20 bg-orange-500/40 filter blur-3xl"></div>
          <div className="absolute right-40 top-20 w-64 h-64 bg-orange-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-orange-500/20 rounded-full filter blur-xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-16 lg:mb-0">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-white rounded-full shadow-md border border-orange-200 mb-8">
              <Monitor className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-800">Profesyonel E-ticaret Çözümleri</span>
            </div>

            {/* Main heading - Left aligned */}
            <div className="space-y-6 mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Markanızı <span className="text-orange-500 font-black">Dijital</span> Dünyada Güçlendirin
              </h1>
              {/* orange underline accent */}
              <div className="h-2 w-32 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full shadow-sm"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Özel tasarım, <span className="text-orange-600 font-medium">yüksek performanslı</span> ve kullanıcı dostu e-ticaret siteleri geliştiriyoruz.
              </p>
            </div>

            {/* CTA buttons - Left aligned */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                variant="default"
                size="lg"
                onClick={scrollToContact}
                className="!bg-gradient-to-r !from-orange-500 !to-orange-600 !text-white !border-0 hover:!bg-gradient-to-r hover:!from-orange-600 hover:!to-orange-700 px-8 py-6 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Projeye Başla
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToPortfolio}
                className="border-2 border-orange-300 text-orange-700 hover:border-orange-500 hover:bg-orange-50 px-8 py-6 rounded-xl text-base font-semibold transition-all duration-300 bg-white/90 backdrop-blur-sm"
              >
                Portföyü İncele
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            {/* Stats Row - Desktop & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg mr-3">
                    <Trophy className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                </div>
                <div className="text-sm font-medium text-gray-600">Başarılı Proje</div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg mr-3">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                </div>
                <div className="text-sm font-medium text-gray-600">Mutlu Müşteri</div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-lg mr-3">
                    <Star className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">5.0</div>
                </div>
                <div className="text-sm font-medium text-gray-600">Müşteri Puanı</div>
              </div>
            </div>
          </div>
          
          {/* Right Column Placeholder for Mobile */}
          <div className="w-full lg:hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl h-64 shadow-lg overflow-hidden relative border border-orange-400/30">
            <div className="h-10 bg-gray-900 border-b border-orange-500/30 flex items-center justify-between px-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="h-4 w-12 bg-orange-500/50 rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Monitor size={80} className="text-orange-500 mb-4" />
              <div className="h-3 w-24 bg-orange-500/60 rounded-full mb-2"></div>
              <div className="h-2 w-32 bg-orange-400/40 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-md flex items-center justify-center">
                <div className="h-1.5 w-8 bg-white/70 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
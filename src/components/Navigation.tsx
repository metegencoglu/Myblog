import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Ana Sayfa', id: 'hero' },
    { label: 'Hakkımızda', id: 'about' },
    { label: 'Blog', id: 'blog' },
    { label: 'Portföy', id: 'about' }, // Links to skills section for now
    { label: 'İletişim', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 backdrop-blur-sm shadow-xl border-b border-orange-200' 
        : 'bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-2">
          {/* Logo */}
          <div 
            className="cursor-pointer group transition-transform duration-200 hover:scale-105" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg border border-orange-300">
                <span className="text-white font-bold text-sm">EB</span>
              </div>
              <span className="text-gray-800 font-bold text-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                E-ticaret Blog
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-lg transition-all duration-200 font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-0 transition-opacity duration-200 rounded-lg"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-orange-50 hover:bg-orange-500 hover:text-white text-orange-600 transition-colors duration-200 border border-orange-200 shadow-sm"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-orange-50 to-orange-100 border-t border-orange-200 shadow-lg">
            <div className="px-2 pt-3 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-lg transition-all duration-200 font-medium border border-orange-200 hover:border-orange-400"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
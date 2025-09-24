import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onOpenFAQ={() => setIsFAQOpen(true)} />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FAQ isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} />
      <Toaster position="top-right" />
    </div>
  );
}
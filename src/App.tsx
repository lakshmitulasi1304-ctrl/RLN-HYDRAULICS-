import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth scroll handler which aligns offsets beautifully
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Intersection observer to automatically highlight current visible section
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'brands',
      'industries',
      'contact'
    ];

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOption = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // focused center bands
      threshold: 0
    };

    const observer = new IntersectionObserver(handleObserver, observerOption);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Handle scroll progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      
      {/* Scroll fluid-flow progress indicator at very top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-100 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 transition-all duration-75 relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Subtle bubbles reflecting fluid density */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/40 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Sticky header glassmorphism Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Hero Core Banner Section */}
      <Hero 
        onExploreProducts={() => handleNavigate('brands')}
        onContactUs={() => handleNavigate('contact')}
      />

      <main className="relative z-10">
        
        {/* About Section */}
        <About />

        {/* Authorized Brands Dealer Matrix Section */}
        <Brands />

        {/* Applications served section */}
        <Industries />

        {/* Callbacks submission system & visual geolocator maps */}
        <Contact />

      </main>

      {/* Complete Footer Section */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

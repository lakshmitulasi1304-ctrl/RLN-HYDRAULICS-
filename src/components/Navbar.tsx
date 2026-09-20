import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Menu, X, Phone, Mail, Award, Compass } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Authorised Dealers and Products', id: 'brands' },
    { name: 'Industries Served', id: 'industries' },
    { name: 'Contact and Address', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-md py-3' : 'bg-slate-50/80 backdrop-blur-sm border-b border-slate-100 py-4'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo element */}
          <button id="nav_logo" onClick={() => onNavigate('home')} className="flex items-center gap-2 group cursor-pointer text-left bg-transparent border-0 p-0">
            <div>
              <span className="block font-algerian text-lg sm:text-xl text-blue-900 leading-none">
                R.L.N HYDRAULICS
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                id={`lnk_${link.id}`}
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded-md transition-all duration-200 cursor-pointer ${activeSection === link.id ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Spacer */}
          <div className="hidden xl:block"></div>

          {/* Mobile Menu Button */}
          <button
            id="mobile_menu_trigger"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded border border-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile_drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-b border-slate-200 absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  id={`mlnk_${link.id}`}
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left py-2 px-3 text-sm font-bold tracking-wide uppercase rounded-md transition-colors ${activeSection === link.id ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'}`}
                >
                  {link.name}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+91 94480 84725 / +91 80 2315 2843</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a href="mailto:rlnhydraulics@gmail.com" className="hover:text-blue-600 transition-colors">rlnhydraulics@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a href="mailto:rln_hydraulics@yahoo.co.in" className="hover:text-blue-600 transition-colors">rln_hydraulics@yahoo.co.in</a>
                </div>
                <button
                  id="mobile_quick_quote"
                  onClick={() => {
                    onNavigate('contact');
                    setIsOpen(false);
                  }}
                  className="w-full mt-2 py-2.5 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider rounded shadow"
                >
                  Contact &amp; Office Address
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

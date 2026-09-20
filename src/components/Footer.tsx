import { useState } from 'react';
import { Settings, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react';
import yukenLogoImg from './yuken_logo.png';
import prismLogoImg from './prism_logo.avif';
import bossLogoImg from './boss_logo.jpg';
import bondioliLogoImg from './bondioli_pavesi_logo.png';
import bhagavathiLogoImg from './bhagavathi_logo.png';
import vbcLogoImg from './vbc.jpg';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Authorised Dealers and Products', id: 'brands' },
    { name: 'Industries Served', id: 'industries' },
    { name: 'Contact and Address', id: 'contact' }
  ];

  const brandList = [
    { name: 'YUKEN INDIA LIMITED', id: 'brands', logo: yukenLogoImg },
    { name: 'PRISM HYDRAULICS P LTD.', id: 'brands', logo: prismLogoImg },
    { name: 'BOSS GEAR PUMPS', id: 'brands', logo: bossLogoImg },
    { name: 'BONDIOLI AND PAVESI INDIA PVT.LTD.', id: 'brands', logo: bondioliLogoImg },
    { name: 'BHAGWATI FILTERS PVT. LIMITED', id: 'brands', logo: bhagavathiLogoImg },
    { name: 'VBC Hydraulics', id: 'brands', logo: vbcLogoImg }
  ];

  const productCategories = [
    'Hydraulic Pumps',
    'Control Valves',
    'Servo Valves',
    'Hydraulic Cylinders',
    'Power Packs',
    'Pressure Gauges',
    'Hydro Motors',
    'Heat Exchangers',
    'Hydraulic Accessories'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-12 relative overflow-hidden">
      
      {/* Visual Accent flow line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-slate-600">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-algerian text-lg sm:text-xl text-blue-900 leading-none">
                R.L.N HYDRAULICS
              </span>
            </div>
            


            <div className="space-y-3.5 text-xs text-slate-700">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Bala Nagar, Hyderabad, Telangana - 500037</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>+91 98660 02736</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="mailto:rlnhydraulics@gmail.com" className="hover:text-blue-600 hover:underline transition-colors">rlnhydraulics@gmail.com</a>
                  <a href="mailto:rlnhydraulics@rediffmail.com" className="hover:text-blue-600 hover:underline transition-colors mt-0.5">rlnhydraulics@rediffmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs text-blue-950 uppercase tracking-widest font-black border-l-2 border-blue-600 pl-3.5 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    id={`foot_link_${link.id}`}
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-blue-600 underline-offset-4 hover:underline transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-slate-600"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs text-blue-950 uppercase tracking-widest font-black border-l-2 border-blue-600 pl-3.5 mb-6">
              Products
            </h4>
            <ul className="space-y-2 text-xs">
              {productCategories.map((cat) => (
                <li key={cat}>
                  <button
                    id={`foot_cat_${cat.replace(' ', '_')}`}
                    onClick={() => onNavigate('contact')}
                    className="hover:text-blue-600 underline-offset-4 hover:underline transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-slate-600"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Brands Supplied */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="font-mono text-xs text-blue-950 uppercase tracking-widest font-black border-l-2 border-blue-600 pl-3.5 mb-6">
                Brands Supplied
              </h4>
              <div className="flex flex-col gap-2.5">
                {brandList.map((brand) => (
                  <button
                    key={brand.name}
                    id={`foot_brand_${brand.name.replace(/\s+/g, '_')}`}
                    onClick={() => onNavigate('brands')}
                    className="flex items-center gap-3 hover:text-blue-600 hover:bg-blue-50/40 p-1.5 rounded-xl transition-all duration-200 text-left bg-transparent border border-transparent hover:border-blue-100 cursor-pointer group/footbrand w-full"
                  >
                    <div className="w-10 h-7 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-sm relative">
                      {brand.name === 'VBC Hydraulics' ? (
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          className="absolute max-w-none" 
                          style={{
                            height: '350%',
                            top: '-10%',
                            right: '-10%'
                          }}
                          referrerPolicy="no-referrer" 
                        />
                      ) : (
                        <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 group-hover/footbrand:text-blue-700 leading-tight">
                      {brand.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Lower row: Copyright, socials, scrolltop */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div>
            <p>© 2026 R.L.N Hydraulics. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-500 mt-1">
              Authorized Dealerships &amp; Technical Services verified in Bala Nagar, Hyderabad.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll indicators */}
          <button
            id="totop_btn"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-50 transition-colors shadow-sm cursor-pointer text-blue-600 hover:text-blue-700"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>

    </footer>
  );
}

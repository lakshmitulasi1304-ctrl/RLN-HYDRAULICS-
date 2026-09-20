import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle2, Factory, ShieldCheck, Cpu, X, ZoomIn } from 'lucide-react';
import { BRANDS_DATA } from '../data';
import yukenBrandingImg from './yuken.jpg';
import yukenLogoImg from './yuken_logo.png';
import prismBrandingImg from './prism.png';
import prismLogoImg from './prism_logo.avif';
import bossBrandingImg from './boss.jpg';
import bossLogoImg from './boss_logo.jpg';
import bondioliBrandingImg from './Bond.png';
import bondioliLogoImg from './bondioli_pavesi_logo.png';
import bhagavathiBrandingImg from './bhagavathi.png';
import bhagavathiLogoImg from './bhagavathi_logo.png';
import vbcBrandingImg from './vbc.jpg';
import manufacturersBrandingImg from './manufacturers.png';
import stocklistBrandingImg from './stocklist.png';

export default function Brands() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [activeLightboxAlt, setActiveLightboxAlt] = useState<string>('');

  useEffect(() => {
    if (activeLightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLightboxImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="brands" className="py-24 bg-white border-t border-slate-100 relative">
      
      {/* Structural Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-md mb-4 shadow-sm">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span className="font-mono text-[10px] text-blue-800 uppercase tracking-widest font-extrabold">Authorized Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight mb-4">
            Authorized Dealer Network &amp; Sourcing
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We operate as primary authorized partner channels for the world's most trusted manufacturers of high-performance hydraulic systems. All products feature direct traceability and original spare warranties.
          </p>
        </div>

        {/* Brands Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {BRANDS_DATA.map((brand, index) => (
            <motion.div
              id={`brand_card_${brand.id}`}
              key={brand.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border border-slate-200 bg-gradient-to-br ${brand.logoBg} transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden relative group`}
            >
              {/* Authorized Logo Decal Badge */}
              <div className="absolute top-0 right-0 p-4 bg-white/90 border-b border-l border-slate-200 rounded-bl-2xl flex items-center gap-1.5 backdrop-blur-sm shadow-sm z-20">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="font-mono text-[9px] text-blue-700 uppercase tracking-widest font-black">
                  {brand.label}
                </span>
              </div>

              {/* Backing structural icon */}
              <div className="absolute bottom-6 right-6 text-blue-600/5 group-hover:text-blue-600/10 transition-colors pointer-events-none z-0">
                <Factory className="w-32 h-32" />
              </div>

              {/* Brand Header */}
              <div className="relative z-10 mb-6 flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight group-hover:text-blue-800 transition-colors">
                    {brand.name}
                  </h3>
                  <div className="w-12 h-1 bg-blue-600 rounded mt-3"></div>
                </div>
                {brand.id === 'yuken' && (
                  <img
                    src={yukenLogoImg}
                    alt="YUKEN Logo"
                    className="h-8 max-w-[120px] object-contain shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer p-1 bg-white rounded border border-slate-100"
                    onClick={() => {
                      setActiveLightboxImage(yukenLogoImg);
                      setActiveLightboxAlt("YUKEN INDIA LIMITED Official Logo");
                    }}
                    referrerPolicy="no-referrer"
                  />
                )}
                {brand.id === 'prism' && (
                  <img
                    src={prismLogoImg}
                    alt="Prism Logo"
                    className="h-8 max-w-[120px] object-contain shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer p-1 bg-white rounded border border-slate-100"
                    onClick={() => {
                      setActiveLightboxImage(prismLogoImg);
                      setActiveLightboxAlt("Prism Hydraulics Official Logo");
                    }}
                    referrerPolicy="no-referrer"
                  />
                )}
                {brand.id === 'boss' && (
                  <img
                    src={bossLogoImg}
                    alt="BOSS GEAR PUMPS Logo"
                    className="h-8 max-w-[110px] object-contain shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer p-1 bg-white rounded border border-slate-100"
                    onClick={() => {
                      setActiveLightboxImage(bossLogoImg);
                      setActiveLightboxAlt("BOSS GEAR PUMPS Official Logo");
                    }}
                    referrerPolicy="no-referrer"
                  />
                )}
                {brand.id === 'bondioli' && (
                  <img
                    src={bondioliLogoImg}
                    alt="Bondioli & Pavesi Logo"
                    className="h-8 max-w-[110px] object-contain shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer p-1 bg-white rounded border border-slate-100"
                    onClick={() => {
                      setActiveLightboxImage(bondioliLogoImg);
                      setActiveLightboxAlt("BONDIOLI AND PAVESI INDIA PVT.LTD. Official Logo");
                    }}
                    referrerPolicy="no-referrer"
                  />
                )}
                {brand.id === 'bhagwati' && (
                  <img
                    src={bhagavathiLogoImg}
                    alt="Bhagwati Filters Logo"
                    className="h-8 max-w-[110px] object-contain shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer p-1 bg-white rounded border border-slate-100"
                    onClick={() => {
                      setActiveLightboxImage(bhagavathiLogoImg);
                      setActiveLightboxAlt("BHAGWATI FILTERS PVT. LIMITED Official Logo");
                    }}
                    referrerPolicy="no-referrer"
                  />
                )}
                {brand.id === 'vbc' && (
                  <div 
                    className="h-8 w-24 overflow-hidden relative bg-white rounded border border-slate-100 shrink-0 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center p-0.5"
                    onClick={() => {
                      setActiveLightboxImage(vbcBrandingImg);
                      setActiveLightboxAlt("VBC Hydraulics");
                    }}
                  >
                    <img
                      src={vbcBrandingImg}
                      alt="VBC Logo"
                      className="absolute max-w-none"
                      style={{
                        height: '380%',
                        top: '-15%',
                        right: '-8%'
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>

              {/* Product Direct Directory Index */}
              <div className="relative z-10">
                <span className="block font-mono text-[10px] text-slate-500 tracking-widest uppercase mb-4 font-black border-b border-slate-100 pb-2">
                  AUTHORIZED PRODUCT RANGE
                </span>

                <ul className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {brand.products.map((prod, idx) => (
                    <li
                      key={idx}
                      onClick={handleScrollToContact}
                      className="flex items-start gap-2 group/item cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 group-hover/item:text-blue-800 transition-colors" />
                      <span className="group-hover/item:text-blue-900 group-hover/item:underline underline-offset-4 decoration-blue-500/60 transition-colors leading-tight font-medium">
                        {prod}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {brand.id === 'yuken' && (
                <div 
                  onClick={() => {
                    setActiveLightboxImage(yukenBrandingImg);
                    setActiveLightboxAlt("YUKEN Solutions & Technical Catalog");
                  }}
                  className="mt-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white p-4 relative z-10 hover:border-blue-300 hover:shadow-md transition-all cursor-zoom-in group/yuken-img flex flex-col items-center"
                >
                  <div className="w-full relative">
                    <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3 text-center">Products &amp; Channels Catalog</div>
                    <img
                      src={yukenBrandingImg}
                      alt="YUKEN Friendly Intelligent Powerful Hydraulics"
                      className="w-full h-auto object-contain mx-auto block group-hover/yuken-img:scale-[1.01] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Interactive Zoom Indicator Overlay */}
                    <div className="absolute inset-0 bg-blue-950/0 group-hover/yuken-img:bg-blue-950/5 transition-all flex items-center justify-center duration-300 rounded-xl">
                      <div className="opacity-0 group-hover/yuken-img:opacity-100 bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-bold transition-all duration-300 transform translate-y-2 group-hover/yuken-img:translate-y-0">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to view whole image</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {brand.id === 'prism' && (
                <div 
                  onClick={() => {
                    setActiveLightboxImage(prismBrandingImg);
                    setActiveLightboxAlt("Prism Hydraulics Products Catalog Expanded");
                  }}
                  className="mt-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white p-4 relative z-10 hover:border-blue-300 hover:shadow-md transition-all cursor-zoom-in group/prism-img flex flex-col items-center"
                >
                  <div className="w-full relative">
                    <img
                      src={prismBrandingImg}
                      alt="Prism Hydraulics Products Catalog"
                      className="w-full h-auto object-contain mx-auto block group-hover/prism-img:scale-[1.01] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Interactive Zoom Indicator Overlay */}
                    <div className="absolute inset-0 bg-blue-950/0 group-hover/prism-img:bg-blue-950/5 transition-all flex items-center justify-center duration-300 rounded-xl">
                      <div className="opacity-0 group-hover/prism-img:opacity-100 bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-bold transition-all duration-300 transform translate-y-2 group-hover/prism-img:translate-y-0">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to view whole image</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {brand.id === 'boss' && (
                <div 
                  onClick={() => {
                    setActiveLightboxImage(bossBrandingImg);
                    setActiveLightboxAlt("BOSS GEAR PUMPS Catalog Expanded");
                  }}
                  className="mt-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white p-4 relative z-10 hover:border-blue-300 hover:shadow-md transition-all cursor-zoom-in group/boss-img flex flex-col items-center"
                >
                  <div className="w-full relative">
                    <img
                      src={bossBrandingImg}
                      alt="BOSS GEAR PUMPS Catalog"
                      className="w-full h-auto object-contain mx-auto block group-hover/boss-img:scale-[1.01] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Interactive Zoom Indicator Overlay */}
                    <div className="absolute inset-0 bg-blue-950/0 group-hover/boss-img:bg-blue-950/5 transition-all flex items-center justify-center duration-300 rounded-xl">
                      <div className="opacity-0 group-hover/boss-img:opacity-100 bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-bold transition-all duration-300 transform translate-y-2 group-hover/boss-img:translate-y-0">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to view whole image</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {brand.id === 'bondioli' && (
                <div 
                  onClick={() => {
                    setActiveLightboxImage(bondioliBrandingImg);
                    setActiveLightboxAlt("BONDIOLI AND PAVESI INDIA PVT.LTD. Catalog Expanded");
                  }}
                  className="mt-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white p-4 relative z-10 hover:border-blue-300 hover:shadow-md transition-all cursor-zoom-in group/bondioli-img flex flex-col items-center"
                >
                  <div className="w-full relative">
                    <img
                      src={bondioliBrandingImg}
                      alt="BONDIOLI AND PAVESI INDIA PVT.LTD. Catalog"
                      className="w-full h-auto object-contain mx-auto block group-hover/bondioli-img:scale-[1.01] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Interactive Zoom Indicator Overlay */}
                    <div className="absolute inset-0 bg-blue-950/0 group-hover/bondioli-img:bg-blue-950/5 transition-all flex items-center justify-center duration-300 rounded-xl">
                      <div className="opacity-0 group-hover/bondioli-img:opacity-100 bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-bold transition-all duration-300 transform translate-y-2 group-hover/bondioli-img:translate-y-0">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to view whole image</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {brand.id === 'bhagwati' && (
                <div 
                  onClick={() => {
                    setActiveLightboxImage(bhagavathiBrandingImg);
                    setActiveLightboxAlt("BHAGWATI FILTERS PVT. LIMITED Catalog Expanded");
                  }}
                  className="mt-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white p-4 relative z-10 hover:border-blue-300 hover:shadow-md transition-all cursor-zoom-in group/bhagwati-img flex flex-col items-center"
                >
                  <div className="w-full relative">
                    <img
                      src={bhagavathiBrandingImg}
                      alt="BHAGWATI FILTERS PVT. LIMITED Catalog"
                      className="w-full h-auto object-contain mx-auto block group-hover/bhagwati-img:scale-[1.01] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Interactive Zoom Indicator Overlay */}
                    <div className="absolute inset-0 bg-blue-950/0 group-hover/bhagwati-img:bg-blue-950/5 transition-all flex items-center justify-center duration-300 rounded-xl">
                      <div className="opacity-0 group-hover/bhagwati-img:opacity-100 bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-bold transition-all duration-300 transform translate-y-2 group-hover/bhagwati-img:translate-y-0">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to view whole image</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {brand.id === 'vbc' && (
                <div 
                  onClick={() => {
                    setActiveLightboxImage(vbcBrandingImg);
                    setActiveLightboxAlt("VBC Hydraulics Products Catalog Expanded");
                  }}
                  className="mt-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white p-4 relative z-10 hover:border-blue-300 hover:shadow-md transition-all cursor-zoom-in group/vbc-img flex flex-col items-center"
                >
                  <div className="w-full relative">
                    <img
                      src={vbcBrandingImg}
                      alt="VBC Hydraulics Products Catalog"
                      className="w-full h-auto object-contain mx-auto block group-hover/vbc-img:scale-[1.01] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Interactive Zoom Indicator Overlay */}
                    <div className="absolute inset-0 bg-blue-950/0 group-hover/vbc-img:bg-blue-950/5 transition-all flex items-center justify-center duration-300 rounded-xl">
                      <div className="opacity-0 group-hover/vbc-img:opacity-100 bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-bold transition-all duration-300 transform translate-y-2 group-hover/vbc-img:translate-y-0">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to view whole image</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {brand.id === 'stockiest' && (
                <div 
                  onClick={() => {
                    setActiveLightboxImage(stocklistBrandingImg);
                    setActiveLightboxAlt("Hydraulic Components Stocklist Expanded");
                  }}
                  className="mt-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white p-4 relative z-10 hover:border-blue-300 hover:shadow-md transition-all cursor-zoom-in group/stockiest-img flex flex-col items-center"
                >
                  <div className="w-full relative">
                    <img
                      src={stocklistBrandingImg}
                      alt="Hydraulic Components Stocklist"
                      className="w-full h-auto object-contain mx-auto block group-hover/stockiest-img:scale-[1.01] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Interactive Zoom Indicator Overlay */}
                    <div className="absolute inset-0 bg-blue-950/0 group-hover/stockiest-img:bg-blue-950/5 transition-all flex items-center justify-center duration-300 rounded-xl">
                      <div className="opacity-0 group-hover/stockiest-img:opacity-100 bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-bold transition-all duration-300 transform translate-y-2 group-hover/stockiest-img:translate-y-0">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to view whole image</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {brand.id === 'manufacturer' && (
                <div 
                  onClick={() => {
                    setActiveLightboxImage(manufacturersBrandingImg);
                    setActiveLightboxAlt("Manufacturers Of Hydraulic Solutions Expanded");
                  }}
                  className="mt-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white p-4 relative z-10 hover:border-blue-300 hover:shadow-md transition-all cursor-zoom-in group/manufacturer-img flex flex-col items-center"
                >
                  <div className="w-full relative">
                    <img
                      src={manufacturersBrandingImg}
                      alt="Manufacturers Of Hydraulic Solutions"
                      className="w-full h-auto object-contain mx-auto block group-hover/manufacturer-img:scale-[1.01] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Interactive Zoom Indicator Overlay */}
                    <div className="absolute inset-0 bg-blue-950/0 group-hover/manufacturer-img:bg-blue-950/5 transition-all flex items-center justify-center duration-300 rounded-xl">
                      <div className="opacity-0 group-hover/manufacturer-img:opacity-100 bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 text-xs font-bold transition-all duration-300 transform translate-y-2 group-hover/manufacturer-img:translate-y-0">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to view whole image</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {/* Interactive Micro Callout bar */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center relative z-10">
                <span className="text-[10px] text-slate-400 font-mono font-bold">CALIBRATION CAPABLE</span>
                <button
                  id={`brand_quote_btn_${brand.id}`}
                  onClick={handleScrollToContact}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                >
                  <span>Inquire About Stock</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
            onClick={() => setActiveLightboxImage(null)}
          >
            {/* Soft Ambient glowing flare in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-blue-600/15 rounded-full filter blur-[120px] pointer-events-none"></div>

            {/* Floating Close Button */}
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all cursor-pointer z-[110] focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Instruction Badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/15 border border-white/10 text-white/90 text-xs font-mono tracking-wider flex items-center gap-2 pointer-events-none backdrop-blur-sm z-[110]">
              <span>Click anywhere to close</span>
              <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-sans">ESC</span>
            </div>

            {/* Display Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center p-4 sm:p-6 bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()} // Prevent direct background close when clicking on actual white board
            >
              <img
                src={activeLightboxImage}
                alt={activeLightboxAlt}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl block mx-auto select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

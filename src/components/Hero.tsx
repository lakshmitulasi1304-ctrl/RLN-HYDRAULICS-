import { motion } from 'motion/react';
import { ShieldCheck, Compass, ArrowDown, ChevronRight, Settings } from 'lucide-react';
import { HERO_DATA } from '../data';

interface HeroProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export default function Hero({ onExploreProducts, onContactUs }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-32 lg:pt-16">
      
      {/* Dynamic Hydraulic Flow Indicator lines */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-600/15 to-transparent animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
        {/* Glowing vertical column flow */}
        <div className="absolute right-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
        <div className="absolute left-1/3 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"></div>
      </div>

      {/* Hero Background Photo with specialized gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_DATA.heroImage}
          alt="RLN Hydraulics Premium Industrial Engineering Facility"
          className="w-full h-full object-cover object-center scale-105 filter opacity-10 contrast-[1.1] mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        {/* High-Contrast Light Slate Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-slate-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/30"></div>
      </div>

      {/* Main Content Pane */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 text-center lg:text-left w-full">
        <div className="flex flex-col justify-center max-w-4xl">
          
          <div className="flex flex-col justify-center">

            {/* Main Title heading */}
            <motion.h1
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-algerian text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-none mb-6 text-blue-900"
            >
              R.L.N HYDRAULICS
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl font-bold text-slate-700 tracking-wide mb-4 max-w-2xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-2"
            >
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <span>{HERO_DATA.tagline}</span>
            </motion.div>

            {/* Subheading description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base text-slate-600 max-w-2xl mb-10 leading-relaxed font-sans mx-auto lg:mx-0"
            >
              {HERO_DATA.subheading}
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="hero_btn_explore"
                onClick={onExploreProducts}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold uppercase text-xs tracking-widest rounded shadow-lg hover:shadow-blue-600/20 shadow-blue-500/5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{HERO_DATA.ctaPrimary}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero_btn_contact"
                onClick={onContactUs}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-700 font-bold uppercase text-xs tracking-widest rounded transition-all hover:bg-slate-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{HERO_DATA.ctaSecondary}</span>
                <Compass className="w-4 h-4 text-blue-600 animate-[spin_20s_linear_infinite]" />
              </button>
            </motion.div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Explore Operations</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-blue-600" />
          </motion.div>
        </div>

      </div>

    </section>
  );
}

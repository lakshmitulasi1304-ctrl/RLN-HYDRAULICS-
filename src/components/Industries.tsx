import { motion } from 'motion/react';
import { Factory, HardHat, Cpu, Hammer, Zap, Settings, Wrench } from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data';

export default function Industries() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-blue-600" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-blue-600" />;
      case 'Factory':
        return <Factory className="w-6 h-6 text-blue-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-blue-600" />;
      case 'Settings':
        return <Settings className="w-6 h-6 text-blue-600 animate-[spin_5s_linear_infinite]" />;
      default:
        return <Factory className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-blue-50/30 border-t border-slate-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-blue-600 tracking-widest uppercase font-bold mb-3 block">
              Global Application Matrices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              Industries Served &amp; Field Duty
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            Our specialized product distributions support major high-load mechanisms across automated manufacture assembly corridors, severe mining operations, and critical construction platforms.
          </p>
        </div>

        {/* Dynamic Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_SERVED.map((ind, index) => (
            <motion.div
              id={`ind_card_${ind.id}`}
              key={ind.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 flex items-center gap-4 group"
            >
              {/* Icon wrapper */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {getIconComponent(ind.iconName)}
              </div>

              <div>
                <h3 className="text-base font-extrabold text-blue-950 group-hover:text-blue-600 transition-colors">
                  {ind.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

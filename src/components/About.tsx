import { motion } from 'motion/react';
import { ShieldAlert, Award, HelpingHand, Handshake, Factory } from 'lucide-react';
import { ABOUT_DATA } from '../data';

export default function About() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'trusted_solutions':
        return <ShieldAlert className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />;
      case 'quality_products':
        return <Award className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />;
      case 'expert_support':
        return <HelpingHand className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />;
      case 'reliable_service':
        return <Handshake className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />;
      default:
        return <Factory className="w-8 h-8 text-slate-500" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-100 relative">
      {/* Decorative Blueprint Background Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column: Company Intro */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-xs text-blue-600 tracking-widest uppercase font-bold mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight mb-6">
              Our Journey &amp; Engineering Focus
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded mb-6"></div>
            
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Welcome to <strong>R.L.N Hydraulics</strong> — a trusted name in hydraulic solutions since 2005. Based in Bala Nagar, Hyderabad, we specialize in delivering reliable hydraulic products and engineering solutions for a wide range of industrial applications.
              </p>
              <p>
                Over the years, we have built a strong reputation for quality, performance, and customer satisfaction. Our commitment to dependable service and industry-focused solutions has helped us become a preferred choice for businesses across multiple sectors.
              </p>
              <p>
                We deal in a wide range of hydraulic and industrial products, including hydraulic pumps, hydraulic cylinders, hydraulic power packs, hydraulic valves, high-pressure pumps, and heat exchangers. We also provide solutions tailored for industries such as machine tools, steel plants, power plants, electric cable industries, plastic industries, construction, and stone crushing industries.
              </p>
              <p>
                At <strong>R.L.N Hydraulics</strong>, we believe that strong customer relationships are built through consistent quality, timely support, and practical engineering expertise. 
              </p>
              <p>
                With a focus on continuous improvement and long-term reliability, we aim to expand our services and continue supporting industries with dependable hydraulic systems and components.
              </p>
            </div>
          </div>

          {/* Right Cards Column: Bento Grid Accent */}
          <div className="lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {ABOUT_DATA.cards.map((card, index) => (
                <motion.div
                  id={card.id}
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl border ${card.color} border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden relative`}
                >
                  {/* Subtle Gradient Backglow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full filter blur-xl group-hover:from-blue-500/10 transition-all"></div>

                  <div className="mb-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 shadow-inner mb-4 group-hover:border-blue-200 transition-colors">
                      {getIcon(card.id)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

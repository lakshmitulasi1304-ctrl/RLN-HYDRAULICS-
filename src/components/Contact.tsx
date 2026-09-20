import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-100 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/[0.02] rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-blue-600 tracking-widest uppercase font-bold mb-3 block">
            Direct Procurement Channels
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Contact &amp; Address Info
          </h2>
          <p className="text-slate-600 text-sm mt-4">
            Connect directly with our engineering sales desk or visit our corporate office in Hyderabad.
          </p>
        </div>

        {/* Centered Contact Details Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl border border-slate-200 bg-white space-y-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
          >
            <div>
              <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest font-mono text-blue-600">
                    Corporate Office
                  </h3>
                  <p className="text-xl font-algerian text-blue-900 mt-2">R.L.N HYDRAULICS</p>
                </div>
                <div className="bg-blue-50/50 border border-blue-100 px-4 py-2 rounded-xl">
                  <span className="text-[10px] font-mono text-blue-700 block font-bold uppercase tracking-wider">Contact Person</span>
                  <span className="text-sm font-sans font-bold text-slate-700">R Siva Rama Prasad</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Office Address</h4>
                    <p className="text-sm text-slate-700 mt-1 font-sans leading-relaxed">
                      Flat No G3, Panchavathi Apartments, Behind Bbr Hospital,<br />
                      Vinayak Nagar, Bala Nagar, Hyderabad - 500037,<br />
                      Telangana, India
                    </p>
                  </div>
                </div>

                {/* Phone Line */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Hotlines &amp; Mobile Phone</h4>
                    <p className="text-sm text-slate-700 mt-1 font-mono leading-relaxed">
                      <a href="tel:+919866002736" className="hover:text-blue-600 hover:underline transition-colors block font-bold text-base">+91 98660 02736 (Mobile)</a>
                    </p>
                  </div>
                </div>

                {/* Mail Box */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Direct Dispatch Email</h4>
                    <p className="text-sm text-slate-700 mt-1 font-mono leading-relaxed">
                      <a href="mailto:rlnhydraulics@rediffmail.com" className="hover:text-blue-600 hover:underline transition-colors block font-semibold text-base">rlnhydraulics@rediffmail.com</a>
                      <a href="mailto:rlnhydraulics@gmail.com" className="hover:text-blue-600 hover:underline transition-colors block font-semibold text-base mt-2">rlnhydraulics@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 text-center">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                Direct Contact Hours: Mon - Sat (9:00 AM - 6:00 PM)
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

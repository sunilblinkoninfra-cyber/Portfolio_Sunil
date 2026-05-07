import { motion } from 'motion/react';
import { Send, Terminal as TerminalIcon, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-primary">Terminal_Interface</span>
            <h2 className="text-4xl md:text-6xl font-bold">INITIATE <br /> <span className="text-white/40 italic">UPLINK</span></h2>
          </div>
          
          <p className="text-lg text-white/50 leading-relaxed max-w-md">
            Ready to transition your business into an AI-Native ecosystem? Connect for expert architecture and strategic consulting.
          </p>

          <div className="space-y-6 pt-8">
            <div className="flex flex-col gap-4">
              <a href="mailto:kumars92@outlook.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:border-brand-primary transition-colors">
                  <Mail className="w-5 h-5 text-white group-hover:text-brand-primary transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-white/40">Secure_Email</span>
                  <span className="text-lg font-light">kumars92@outlook.com</span>
                </div>
              </a>
              <a href="tel:+919540110558" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:border-brand-primary transition-colors">
                  <TerminalIcon className="w-5 h-5 text-white group-hover:text-brand-primary transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-white/40">Secure_Line</span>
                  <span className="text-lg font-light">+91-9540-110-558</span>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <button key={i} className="w-12 h-12 glass-card flex items-center justify-center hover:text-brand-primary hover:border-brand-primary transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-0 overflow-hidden relative">
          {/* Terminal Header */}
          <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 hidden md:block italic">neuron_os — bash — 80x24</span>
          </div>

          <div className="p-8 space-y-6 bg-black/40">
            <div className="font-mono text-xs text-white/50 space-y-2">
              <p className="flex gap-2">
                <span className="text-brand-primary">➜</span>
                <span>system.init_contact_request --type="consultation"</span>
              </p>
              <p className="text-white/20 italic">// Awaiting user input parameters...</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <label className="font-mono text-[9px] uppercase tracking-widest text-white/30 ml-1">Param: Identity</label>
                <input 
                  type="text" 
                  placeholder="name/org"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-brand-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[9px] uppercase tracking-widest text-white/30 ml-1">Param: Uplink_Address</label>
                <input 
                  type="email" 
                  placeholder="address@domain.ext"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-brand-primary/50 transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-mono text-[9px] uppercase tracking-widest text-white/30 ml-1">Param: Payload_Buffer</label>
                <textarea 
                  placeholder="describe the transformation objective..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 0.98 }}
                className="md:col-span-2 py-4 brand-gradient text-white font-mono text-[10px] uppercase tracking-[0.3em] font-bold rounded-lg flex items-center justify-center gap-2 group"
              >
                Execute_Transmission <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

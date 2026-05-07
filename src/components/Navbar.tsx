import { motion } from 'motion/react';

export function Navbar() {
  const navItems = [
    { id: '01', name: 'Identity', href: '#about' },
    { id: '02', name: 'Protocol', href: '#experience' },
    { id: '03', name: 'Systems', href: '#projects' },
    { id: '04', name: 'Stack', href: '#skills' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-8 border-b border-white/5 bg-bg-dark/80 backdrop-blur-md pointer-events-auto"
    >
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-8 h-8 border-2 border-brand-primary rounded-sm flex items-center justify-center">
          <div className="w-4 h-4 bg-brand-primary animate-pulse" />
        </div>
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white hidden md:block">
          SUNIL KUMAR <span className="opacity-40 font-light">// AI_STRATEGIST</span>
        </span>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-all flex items-center gap-2 group"
            >
              <span className="text-brand-primary/40 group-hover:text-brand-primary transition-colors">{item.id}</span>
              {item.name}
            </a>
          ))}
        </div>
        
        <button className="px-6 py-2 border border-white/10 bg-white/5 text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors">
          Initialize Consultation
        </button>
      </div>
    </motion.nav>
  );
}

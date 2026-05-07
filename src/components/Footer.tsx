export function Footer() {
  return (
    <footer className="px-10 py-8 text-[9px] uppercase tracking-[0.2em] text-white/30 border-t border-white/5 bg-bg-alt flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-wrap gap-8 justify-center md:justify-start">
        <div className="flex items-center gap-2">
          <span className="text-white/10 uppercase">Session ID:</span>
          <span className="text-white/40">4920-AI-X-PRO</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/10 uppercase">Location:</span>
          <span className="text-white/40">Digital / Remote / Global</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center md:justify-end">
        <a href="#" className="text-white/60 hover:text-brand-primary transition-colors">Privacy Protocol</a>
        <div className="flex items-center gap-2">
          <span className="text-white/10 italic">Core Status:</span>
          <span className="text-brand-primary animate-pulse italic">Normal_Operational</span>
        </div>
        <div className="text-brand-primary border-l border-white/10 pl-8">
          © 2026 SUNIL KUMAR // AI ENGINEERING STRATEGY
        </div>
      </div>
    </footer>
  );
}

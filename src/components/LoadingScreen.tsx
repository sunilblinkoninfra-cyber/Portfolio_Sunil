import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return p + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-bg-dark flex flex-col items-center justify-center p-6"
        >
          <div className="max-w-md w-full space-y-8">
            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-2 border-brand-primary/20 border-t-brand-primary rounded-full"
              />
              <div className="text-center">
                <span className="font-display text-2xl font-bold tracking-tighter uppercase italic">
                  NEURON<span className="text-brand-primary">_</span>OS
                </span>
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.4em] mt-2">Initialize_Boot_Sequence</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="font-mono text-[9px] uppercase text-white/40 tracking-widest italic">Core_Loading...</span>
                <span className="font-mono text-xl text-brand-primary">{Math.min(percent, 100)}%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-primary" 
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                />
              </div>
            </div>

            <div className="font-mono text-[8px] text-white/10 uppercase tracking-widest space-y-1">
              <p>{'>'} LOADING_KERNEL_SPACE</p>
              <p>{'>'} MOUNTING_NEURAL_SUBSYSTEMS</p>
              <p>{'>'} ESTABLISHING_ENCRYPTED_UPLINK</p>
              <p>{'>'} OPTIMIZING_AGENT_ORCHESTRATION</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

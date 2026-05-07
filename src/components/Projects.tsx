import { motion } from 'motion/react';
import { ExternalLink, Github, Terminal, Database, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: "01",
    title: "Agentic_AI_OS",
    category: "Agentic Workflows",
    description: "Built AI agents for multi-step reasoning, planning, and task execution, handling 1k+ weekly executions with memory systems.",
    impact: "30% Faster Execution",
    tech: ["Python", "OpenAI", "VectorDB"],
    imageColor: "from-cyan-600/20 to-blue-600/20"
  },
  {
    id: "02",
    title: "Pact_AI_Assistant",
    category: "Smart Contract AI",
    description: "LLM-powered assistant for Kadena Pact smart contract analysis, debugging, and generation with 85% accuracy.",
    impact: "60% Time Reduction",
    tech: ["Pact", "RAG", "LLMOps"],
    imageColor: "from-purple-600/20 to-blue-600/20"
  },
  {
    id: "03",
    title: "Blockchain_Forensic_AI",
    category: "Financial Intelligence",
    description: "Designed AI system to detect multi-hop laundering and suspicious transaction patterns, analyzing 100K+ transactions.",
    impact: "35% Precision Increase",
    tech: ["GraphDB", "AI-Scoring", "Forensics"],
    imageColor: "from-amber-600/20 to-orange-600/20"
  },
  {
    id: "04",
    title: "PhishX_Neural_Guard",
    category: "AI Security",
    description: "NLP-based detection system for phishing emails and social engineering patterns, processing 10k+ messages/day.",
    impact: "40% Incident Reduction",
    tech: ["PyTorch", "NLP", "Kafka"],
    imageColor: "from-red-600/20 to-orange-600/20"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-primary">Selected_Deployments</span>
            <h2 className="text-4xl md:text-6xl font-bold italic">INTELLIGENCE <br /> <span className="not-italic text-white/40">DASHBOARD</span></h2>
          </div>
          <button className="font-mono text-[10px] uppercase tracking-widest border-b border-brand-primary pb-2 text-brand-primary hover:text-white hover:border-white transition-colors">
            View_All_Archives
          </button>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 glass-card p-1 overflow-hidden"
            >
              <div className={cn(
                "lg:col-span-7 h-[400px] lg:h-auto rounded-xl bg-gradient-to-br relative overflow-hidden",
                project.imageColor
              )}>
                {/* Simulated UI background */}
                <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-50 pointer-events-none font-mono text-[8px] uppercase tracking-widest">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Source: encrypted_uplink</span>
                    <span>Status: executing_logic</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-16 h-16 border rounded-full border-dashed border-white/20 animate-spin-slow flex items-center justify-center">
                      <div className="w-8 h-8 border rounded-full border-white/40" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-3/4 h-1 bg-white/10" />
                    <div className="w-1/2 h-1 bg-white/10" />
                    <div className="w-2/3 h-1 bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-brand-primary/60">{project.id} // {project.category}</span>
                      <h3 className="text-3xl font-display font-bold mt-1 group-hover:text-brand-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-white/5 rounded-full transition-colors"><Github className="w-4 h-4" /></button>
                      <button className="p-2 hover:bg-white/5 rounded-full transition-colors"><ExternalLink className="w-4 h-4" /></button>
                    </div>
                  </div>
                  
                  <p className="text-white/50 leading-relaxed italic">
                    "{project.description}"
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 bg-white/[0.02]">
                      <span className="text-[9px] font-mono uppercase text-white/30 block mb-1">Impact_Metric</span>
                      <span className="text-lg font-bold text-brand-primary">{project.impact}</span>
                    </div>
                    <div className="glass-card p-4 bg-white/[0.02]">
                      <span className="text-[9px] font-mono uppercase text-white/30 block mb-1">Architecture_</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.tech.map(t => (
                          <span key={t} className="text-[8px] bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-white/5 group-hover:bg-brand-primary/10 border border-white/10 group-hover:border-brand-primary/30 font-mono text-[10px] uppercase tracking-[0.2em] transition-all">
                  Load_Case_Study_
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


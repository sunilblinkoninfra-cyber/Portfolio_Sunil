import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Cpu, Network, Zap, Shield, Database, LayoutPanelTop, BarChart3 } from 'lucide-react';

const expertiseNodes = [
  {
    title: "AI Strategy",
    icon: <Cpu className="w-5 h-5" />,
    description: "Aligning generative AI with enterprise roadmap for maximum impact.",
    tags: ["Roadmap", "ROI", "Ethics"]
  },
  {
    title: "Agent Systems",
    icon: <Network className="w-5 h-5" />,
    description: "Orchestrating autonomous multi-agent swarms for complex reasoning.",
    tags: ["AutoGPT", "CrewAI", "LangChain"]
  },
  {
    title: "Automation",
    icon: <Zap className="w-5 h-5" />,
    description: "End-to-end workflow hyper-automation using intelligent logic.",
    tags: ["Python", "API", "RPA"]
  },
  {
    title: "Infrastructure",
    icon: <Shield className="w-5 h-5" />,
    description: "Secure, scalable LLM deployment and vector database architecture.",
    tags: ["AWS", "Pinecone", "Cloud"]
  },
  {
    title: "Intelligence",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "Transforming raw enterprise data into predictive business insights.",
    tags: ["ML", "DataOps", "BigData"]
  },
  {
    title: "Architecture",
    icon: <LayoutPanelTop className="w-5 h-5" />,
    description: "Designing the frontend and backend for next-gen AI applications.",
    tags: ["Next.js", "React", "Node"]
  }
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-primary">
                Executive_Leadership
              </span>
              <h2 className="text-4xl md:text-6xl font-bold italic tracking-tighter">
                SUNIL <span className="text-white/40 not-italic">KUMAR_</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl italic">
              "AI Engineering Leader with 10+ years of experience delivering production-grade AI systems and enterprise transformation initiatives. Specialized in designing LLM-based systems and scalable AI platforms (MLOps + LLMOps)."
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
              <div>
                <dt className="font-mono text-[10px] uppercase text-white/30 mb-2">Ex_Experience</dt>
                <dd className="text-3xl font-display font-bold italic">10+ Years</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase text-white/30 mb-2">Operational_Gain</dt>
                <dd className="text-3xl font-display font-bold">30-40%</dd>
              </div>
            </div>
            
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 italic">Current_Node: Asyntrix Technologies</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Leading AI Strategy and Engineering. Driving 30-40% improvement in operational efficiency through automation and intelligent systems.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-white/30 tracking-widest">Academic_Foundation</span>
                <p className="text-sm text-white/70">B.Tech – Electronics & Communication Engineering</p>
                <p className="text-[10px] font-mono text-white/30">Lovely Professional University | 2009 – 2013</p>
              </div>
              
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase text-white/30 tracking-widest">System_Verifications</span>
                <div className="flex flex-wrap gap-2">
                  {['Google Advanced Data Analytics', 'Google IT Support', 'CISSP (Candidate)', 'AIGP (Expected 2026)'].map((cert) => (
                    <span key={cert} className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] text-white/50 uppercase tracking-wider italic">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertiseNodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-card p-6 hover:border-brand-primary/30 transition-all duration-500 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-black transition-all">
                  {node.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{node.title}</h3>
                <p className="text-sm text-white/40 mb-4">{node.description}</p>
                <div className="flex flex-wrap gap-2">
                  {node.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono uppercase px-2 py-1 bg-white/5 rounded border border-white/5 text-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

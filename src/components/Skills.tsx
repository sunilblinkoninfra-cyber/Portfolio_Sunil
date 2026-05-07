import { motion } from 'motion/react';

const skillCategories = [
  {
    name: "AI_Architecture",
    skills: ["GenAI", "LLMs", "RAG", "Agentic Workflows", "Prompt Engineering"]
  },
  {
    name: "Engineering_Stack",
    skills: ["Python", "SQL", "C/C++", "MATLAB", "Distributed Systems"]
  },
  {
    name: "MLOps_LLMOps",
    skills: ["Model Deployment", "Monitoring", "Evaluation Pipelines", "CI/CD for ML", "Scalable AI Pipelines"]
  },
  {
    name: "Business_Ops",
    skills: ["AI Strategy", "Workflow Automation", "Predictive Analytics", "Data Operations", "Digital Transformation"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-primary">Capability_Network</span>
          <h2 className="text-4xl md:text-6xl font-bold italic tracking-tighter">NEURAL <span className="not-italic text-white/30">STACK_</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{cat.name}</h3>
              </div>
              
              <ul className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 5 }}
                    className="group flex flex-col gap-1 cursor-default"
                  >
                    <span className="text-lg font-light group-hover:text-brand-primary transition-colors">{skill}</span>
                    <div className="w-full h-px bg-white/5 group-hover:bg-brand-primary/20 transition-all" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-wrap justify-between gap-12">
          <div className="flex-1 min-w-[200px] flex items-center gap-4">
            <div className="w-12 h-12 glass-card flex items-center justify-center font-mono text-xs text-brand-primary">AI</div>
            <p className="text-xs text-white/30 leading-relaxed uppercase tracking-wider italic">
              "Every business will eventually be defined by the quality of its intelligent systems architecture."
            </p>
          </div>
          <div className="flex-1 min-w-[200px] grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="w-full h-full bg-brand-primary/20" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Asyntrix Technologies",
    role: "AI Engineering Lead / AI Strategist",
    period: "2024 – Present",
    highlights: [
      "Led end-to-end delivery of AI initiatives, driving 30–40% improvement in operational efficiency.",
      "Architected LLM-based solutions (RAG pipelines + agentic workflows) for enterprise use cases.",
      "Designed and implemented AI governance and LLMOps frameworks.",
      "Defined and executed AI adoption roadmap for high-impact use cases."
    ]
  },
  {
    company: "Acelerar Technologies",
    role: "Service Delivery Head",
    period: "2021 – 2024",
    highlights: [
      "Managed delivery of AI data pipelines and curation workflows.",
      "Led cross-functional teams to deliver AI-ready datasets, reducing turnaround time by 25%+.",
      "Achieved 99%+ quality benchmarks, improving client satisfaction.",
      "Designed process optimization frameworks increasing throughput."
    ]
  },
  {
    company: "Teleperformance India",
    role: "Assistant Manager – Customer Solutions",
    period: "2016 – 2020",
    highlights: [
      "Built data-driven workforce planning models, improving resource utilization.",
      "Analyzed performance gaps and implemented corrective strategies.",
      "Delivered training and performance programs improving productivity."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-primary">
              Career_Protocol
            </span>
            <h2 className="text-4xl md:text-6xl font-bold italic tracking-tighter">
              PROFESSIONAL <br />
              <span className="text-white/40 not-italic">HISTORY_</span>
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-brand-primary/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-white/60 font-medium italic mt-1">{exp.role}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-white/10" />
                  <span className="font-mono text-xs text-white/30 uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/50 leading-relaxed">
                    <div className="mt-2 w-1 h-1 rounded-full bg-brand-primary shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Search, Activity, Map, Layout, Code2, Rocket, LineChart, TrendingUp } from 'lucide-react';

const steps = [
  { title: "Discovery", icon: <Search />, desc: "Uncovering hidden inefficiencies and automation goldmines." },
  { title: "Systems Analysis", icon: <Activity />, desc: "Mapping the neural pathways of your current business operations." },
  { title: "AI Opportunity", icon: <Map />, desc: "Defining the high-impact zones for AI transformation." },
  { title: "Architecture", icon: <Layout />, desc: "Designing the multi-agent swarms and system integrations." },
  { title: "Development", icon: <Code2 />, desc: "Building the custom intelligence layer and automation flows." },
  { title: "Deployment", icon: <Rocket />, desc: "Seamless integration of AI into your existing ecosystem." },
  { title: "Optimization", icon: <LineChart />, desc: "Continuous refinement of prompt quality and agent performance." },
  { title: "Scaling", icon: <TrendingUp />, desc: "Expanding success across all departments and business units." }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="process" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-primary">Transformation_Journey</span>
          <h2 className="text-4xl md:text-6xl font-bold italic tracking-tighter">THE <span className="not-italic text-white/30">PROTOCOL_</span></h2>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative",
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                <div className="flex-1 w-full lg:text-right">
                  {i % 2 === 0 ? (
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-brand-primary">Step_0{i + 1}</span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-sm text-white/40 max-w-sm ml-auto">{step.desc}</p>
                    </div>
                  ) : null}
                </div>

                <div className="relative z-10 w-16 h-16 rounded-full glass-card flex items-center justify-center text-brand-primary border-brand-primary/20 bg-white/5">
                  {step.icon}
                  {/* Progress light */}
                  <div className="absolute -inset-1 rounded-full border border-brand-primary/20 opacity-0 group-hover:opacity-100 animate-pulse" />
                </div>

                <div className="flex-1 w-full text-left">
                  {i % 2 !== 0 ? (
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-brand-primary">Step_0{i + 1}</span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-sm text-white/40 max-w-sm">{step.desc}</p>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { cn } from '@/lib/utils';

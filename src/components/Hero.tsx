import { Suspense, useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function SunilAvatar() {
  const meshRef = useRef<THREE.Group>(null!);
  
  // Using a stable fallback for portrait
  const avatarUrl = 'https://api.dicebear.com/7.x/avataaars/png?seed=Sunil&backgroundColor=050505';
  
  const texture = useLoader(THREE.TextureLoader, avatarUrl);

  useFrame((state) => {
    if (meshRef.current) {
      const targetY = (state.mouse.x * Math.PI) / 8;
      const targetX = (state.mouse.y * Math.PI) / 10;
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.1);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetX, 0.1);
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <mesh position={[0, 0.5, 0]}>
          <planeGeometry args={[4.5, 4.5]} />
          <meshBasicMaterial map={texture} transparent={true} />
        </mesh>
        
        {/* Decorative Holographic Elements */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <torusGeometry args={[1.5, 0.01, 16, 100]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
          <circleGeometry args={[2, 64]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.05} />
        </mesh>
      </Float>
    </group>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-10 overflow-hidden pt-32">
      {/* Decorative Grid and Glow */}
      <div className="absolute inset-0 z-0 opacity-10 grid-bg pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-12 xl:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-20 relative"
          >
            <div className="mb-4 px-2 py-1 inline-block border border-brand-primary/30 bg-brand-primary/5 rounded text-[9px] uppercase tracking-widest text-brand-primary font-bold italic">
              AI Engineering Leader | 10+ Years Experience
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white mb-6">
              ARCHITECTING <br/>
              <span className="text-stroke">PRODUCTION</span> <br/>
              AI SYSTEMS
            </h1>
            <p className="max-w-md text-white/50 text-sm md:text-base leading-relaxed mb-8">
              Delivering enterprise-grade AI transformation through LLM-based systems, RAG pipelines, and agentic workflows with measurable ROI.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-10 py-5 bg-white text-black font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-brand-primary transition-all">
                View Key Projects
              </a>
              <a href="#contact" className="px-10 py-5 border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-12 xl:col-span-5 h-[400px] lg:h-[600px] relative flex items-center justify-center">
          <div className="absolute inset-0 z-0 scale-150 transform">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <ambientLight intensity={1} />
              <Suspense fallback={null}>
                <SunilAvatar />
              </Suspense>
            </Canvas>
          </div>
          
          <div className="absolute bottom-4 right-0 lg:bottom-10 lg:right-0 text-right z-10">
            <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1">Operational Improvement</div>
            <div className="text-3xl font-mono text-white tracking-widest">30-40%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

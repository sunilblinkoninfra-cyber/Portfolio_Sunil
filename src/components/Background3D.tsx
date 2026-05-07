import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00D1FF"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function NeuralLines() {
  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < 20; i++) {
      const points = [];
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      points.push(start);
      for (let j = 0; j < 5; j++) {
        points.push(
          new THREE.Vector3(
            start.x + (Math.random() - 0.5) * 2,
            start.y + (Math.random() - 0.5) * 2,
            start.z + (Math.random() - 0.5) * 2
          )
        );
      }
      l.push(new THREE.CatmullRomCurve3(points).getPoints(50));
    }
    return l;
  }, []);

  return (
    <group>
      {lines.map((linePoints, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints(linePoints)} />
          <lineBasicMaterial attach="material" color="#7000FF" transparent opacity={0.1} />
        </line>
      ))}
    </group>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-bg-dark">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00D1FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000FF" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <ParticleField />
          <NeuralLines />
        </Float>

        <fog attach="fog" args={['#050505', 5, 15]} />
      </Canvas>
    </div>
  );
}

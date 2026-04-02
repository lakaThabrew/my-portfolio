import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars, Sparkles } from '@react-three/drei';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} className="absolute inset-0 w-full h-full z-0 opacity-70">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#1ace5cff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#60a5fa" />
        
        {/* Subtle Stars */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1.5} />
        
        {/* Glowing Sparkles */}
        <Sparkles count={200} scale={15} size={3} speed={0.4} opacity={0.5} color="#ffffff" />
        
        {/* Large floating abstract wireframe shapes in the background far away */}
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[-8, 4, -10]} scale={2}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#e31212ff" roughness={0.4} metalness={0.6} wireframe />
          </mesh>
        </Float>

        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
          <mesh position={[8, -5, -12]} scale={3}>
            <torusGeometry args={[1, 0.4, 16, 32]} />
            <meshStandardMaterial color="#04f45cff" roughness={0.3} metalness={0.7} wireframe />
          </mesh>
        </Float>

        <Float speed={1} rotationIntensity={0.8} floatIntensity={1}>
          <Sphere args={[2, 64, 64]} position={[0, -2, -15]} scale={1}>
            <MeshDistortMaterial
              color="#6101c2ff"
              attach="material"
              distort={0.4}
              speed={1.5}
              roughness={0.2}
              metalness={0.8}
              wireframe={true}
            />
          </Sphere>
        </Float>
        <Float speed={1.2} rotationIntensity={2} floatIntensity={1.5}>
          <mesh position={[-12, -8, -15]} scale={2.5}>
            <tetrahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#fbbf24" roughness={0.3} metalness={0.8} wireframe />
          </mesh>
        </Float>

        <Float speed={2.5} rotationIntensity={3} floatIntensity={2}>
          <mesh position={[12, 8, -20]} scale={2}>
            <torusKnotGeometry args={[1, 0.3, 64, 8]} />
            <meshStandardMaterial color="#f43f5e" roughness={0.2} metalness={0.9} wireframe />
          </mesh>
        </Float>

        <Float speed={0.8} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[-2, 10, -18]} scale={2.5}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#38bdf8" roughness={0.4} metalness={0.6} wireframe />
          </mesh>
        </Float>

        <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2.5}>
          <mesh position={[15, 0, -14]} scale={2}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#a78bfa" roughness={0.3} metalness={0.7} wireframe />
          </mesh>
        </Float>

      </Canvas>

      {/* Existing stylistic layers on top of 3D Canvas */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-brand-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>
    </div>
  );
}

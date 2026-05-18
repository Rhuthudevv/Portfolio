import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function Crystals() {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-4, 1, -2]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <icosahedronGeometry args={[2, 0]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.5}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.5}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1.5}
            iridescenceThicknessRange={[0, 1400]}
            clearcoat={1}
            roughness={0.1}
            transmission={1}
            ior={1.5}
            color="#ffffff"
            attenuationDistance={1}
            attenuationColor="#ffffff"
          />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[5, -2, -5]} rotation={[0, Math.PI / 3, Math.PI / 6]}>
          <octahedronGeometry args={[2.5, 0]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.8}
            anisotropy={0.5}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1.3}
            iridescenceThicknessRange={[0, 1000]}
            clearcoat={1}
            roughness={0.1}
            transmission={0.9}
            ior={1.2}
            color="#00e5ff"
            attenuationDistance={2}
            attenuationColor="#00e5ff"
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[2, 3, -8]} rotation={[Math.PI / 6, 0, Math.PI / 2]}>
          <dodecahedronGeometry args={[1.5, 0]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1}
            chromaticAberration={0.3}
            roughness={0.2}
            transmission={0.95}
            ior={1.1}
            color="#ffffff"
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function CrystalBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', background: '#000000' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00e5ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        <spotLight position={[0, 5, 0]} intensity={3} color="#00e5ff" penumbra={1} distance={20} />
        
        <Crystals />
        <Sparkles count={100} scale={15} size={2} speed={0.4} color="#00e5ff" opacity={0.3} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

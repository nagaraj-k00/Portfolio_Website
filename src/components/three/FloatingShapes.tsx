import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ 
  position, 
  geometry, 
  color, 
  speed = 1,
  distort = 0.3,
  wobble = false 
}: { 
  position: [number, number, number]; 
  geometry: 'sphere' | 'torus' | 'octahedron' | 'icosahedron';
  color: string;
  speed?: number;
  distort?: number;
  wobble?: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  const geometryComponent = useMemo(() => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  }, [geometry]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={0.8}>
        {geometryComponent}
        {wobble ? (
          <MeshWobbleMaterial
            color={color}
            factor={0.4}
            speed={2}
            transparent
            opacity={0.7}
          />
        ) : (
          <MeshDistortMaterial
            color={color}
            distort={distort}
            speed={2}
            transparent
            opacity={0.6}
          />
        )}
      </mesh>
    </Float>
  );
};

const GlassSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={1.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#f97316"
          transmission={0.9}
          thickness={0.5}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f97316" />
      <pointLight position={[10, -10, 5]} intensity={0.3} color="#fbbf24" />

      {/* Floating Shapes */}
      <FloatingShape 
        position={[-3, 2, -2]} 
        geometry="sphere" 
        color="#f97316" 
        speed={0.8}
        distort={0.4}
      />
      <FloatingShape 
        position={[3.5, -1, -3]} 
        geometry="torus" 
        color="#fb923c" 
        speed={1.2}
        distort={0.2}
      />
      <FloatingShape 
        position={[-2, -2, -4]} 
        geometry="octahedron" 
        color="#fbbf24" 
        speed={0.6}
        wobble
      />
      <FloatingShape 
        position={[2, 2.5, -2]} 
        geometry="icosahedron" 
        color="#ea580c" 
        speed={1}
        distort={0.3}
      />
      
      {/* Glass sphere in center-right */}
      <GlassSphere position={[1, 0, -1]} />
      
      {/* Smaller accent shapes */}
      <FloatingShape 
        position={[-4, 0, -5]} 
        geometry="icosahedron" 
        color="#fdba74" 
        speed={1.5}
        distort={0.5}
      />
      <FloatingShape 
        position={[4, 1, -4]} 
        geometry="sphere" 
        color="#c2410c" 
        speed={0.9}
        distort={0.3}
      />
    </>
  );
};

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

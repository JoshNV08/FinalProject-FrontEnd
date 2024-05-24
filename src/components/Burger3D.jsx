import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function BurgerModel() {
  const { scene } = useGLTF('src/assets/burger3.glb');

  return (
    <Canvas style={{ height: '80vh', width: '100%' }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 10, 5]} intensity={2} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
};

export default BurgerModel;

import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function BurgerModel() {
  const { scene } = useGLTF("../src/assets/burger3.glb");
  const burgerRef = useRef();
  const controlsRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const x = (clientX / innerWidth) * 2 - 1;
    const y = -(clientY / innerHeight) * 2 + 1;

    if (burgerRef.current) {
      burgerRef.current.rotation.y = x * 0.2;
      burgerRef.current.rotation.x = y * 0.2;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 2, 5);
      controlsRef.current.update();
    }
  }, []);

  if (isMobile) {
    return (
      <img
        src="../src/assets/BurgerHome.png"
        alt="Burger"
        style={{ height: "auto", width: "100%" }}
      />
    );
  }

  return (
    <Canvas style={{ height: "80vh", width: "110%", bottom: "45px" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 10, 5]} intensity={2} />
      <primitive ref={burgerRef} object={scene} scale={[8, 8, 8]} />
      <OrbitControls
        ref={controlsRef}
        minDistance={5}
        maxDistance={8}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}

export default BurgerModel;

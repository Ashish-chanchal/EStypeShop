import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HeadphoneModel from "./HeadphoneModel";
import WatchModel from "./WatchModel";

const ModelCanvas = ({ category }) => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 4, 3]} intensity={1.8} />
        <pointLight position={[-2, -2, -2]} intensity={0.5} />
        <spotLight position={[0, 5, 0]} intensity={1.2} />

        <Suspense fallback={null}>
          {category === "Headphones" && <HeadphoneModel />}
          {category === "Smartwatch" && <WatchModel />}
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default ModelCanvas;

import React, { Suspense } from "react";
import { Canvas,  useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import LandingModel from "./LandingModel"
import Loading from "./Loading";
import * as THREE from "three";

function Rig() {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();
    return useFrame(() =>
      camera.position.lerp(
        vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
        0.02
      )
    );
  }

export default function Landing() {
    return (
        <div className="landing">
            {/* 3D CANVAS */}
            <Canvas linear frameloop="demand">
              <PerspectiveCamera makeDefault position={[0, 2, 5]} />
              <Suspense fallback={<Loading />}>

                {/* Lights */}
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15}  penumbra={2} />
                <spotLight
                  position={[-10, -10, -10]}
                  angle={0.15}
                  penumbra={2}
                />
                <spotLight position={[10, -10, 10]} angle={0.15} penumbra={2} />
                <pointLight position={[-10, -10, -10]} />

                {/* Model */}
                <LandingModel />

                {/* Cursor-Move-Camera Rig */}
                <Rig />
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  enableRotate={false}
                />

              </Suspense>
            </Canvas>
            <div className="tagline">
              <p>learn how to save a life</p>
            </div>
          </div>
    )
}

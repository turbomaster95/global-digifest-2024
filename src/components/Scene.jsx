import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '@/components/CanvasLoader';
import { calculateSizes } from '@/lib/const';
import { useMediaQuery } from 'react-responsive';
import Target from '@/components/Target';
import ReactLogo from '@/components/ReactLogo';
import Cube from '@/components/Cube';
import Rings from '@/components/Rings';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

export default function Scene() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Canvas style={{ height: '500px', width: '100%' }}>
      <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <group>
                    {/* <OrbitControls /> */}
                    <Target position={sizes.targetPosition} />
                    <ReactLogo position={sizes.reactLogoPosition} />
                    <Cube position={sizes.cubePosition} />
                    <Rings position={sizes.ringPosition} />
                </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
      </Suspense>
    </Canvas>
  );
}

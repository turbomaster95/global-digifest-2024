import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '@/components/computer';
import HeroCamera from '@/components/Camera';
import CanvasLoader from '@/components/CanvasLoader';
import { calculateSizes } from '@/lib/const';
import { useMediaQuery } from 'react-responsive';

export default function Scene({ setModelLoaded }) {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      {/* Pass setModelLoaded to CanvasLoader to notify App when loading is complete */}
      <Suspense fallback={<CanvasLoader setModelLoaded={setModelLoaded} />}>
        <ambientLight intensity={1} />
        <pointLight position={10, 0.5, 0.5} />
        <HeroCamera isMobile={false}>
          <Model position={10, 0.5, -0.2} />
        </HeroCamera>
      </Suspense>
    </Canvas>
  );
}

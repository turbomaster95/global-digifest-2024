import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '@/components/computer';
import HeroCamera from '@/components/Camera';
import Loader from '@/components/Loader';
import { calculateSizes } from '@/lib/const';
import { useMediaQuery } from 'react-responsive'

export default function Scene() {
  const isSmall = useMediaQuery({
    maxWidth: 440
  })
  const isMobile = useMediaQuery({
      maxWidth: 768
  })
  const isTablet = useMediaQuery({
      minWidth: 768,
      maxWidth: 1024
  })

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <Canvas style={{ height: 'calc(100vh - 64px)', width: '100vw' }}>
      {/* <Suspense fallback={<Loader />}> */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <HeroCamera isMobile={false}>
            <Model position={10, 0.5, 0.5} />
          </HeroCamera>
      {/* </Suspense> */}
    </Canvas>
  );
}

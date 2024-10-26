import Navbar from '@/components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { gsap } from "gsap";
import Scene from '@/components/Scene';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin);

export default function App() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const tl = gsap.timeline();

  useEffect(() => {
    if (modelLoaded) {
      tl.from(".hedr", { opacity: 0, ease: "back.out" })
        .to(".hedr", { duration: 10, opacity: 1, ease: "back.out" })
    }
  }, [modelLoaded, tl]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
          {/* Pass setModelLoaded to Scene to control loading state */}
          <Scene setModelLoaded={setModelLoaded} style={{ zIndex: -1 }} />

          {/* Conditionally render text after model is loaded */}
          {modelLoaded && setInterval(2000) && (
            <h1
              className="absolute inset-0 flex justify-center items-center hedr"
              style={{
                fontSize: '16vw',
                margin: 0,
                lineHeight: 1,
                fontWeight: 600,
                color: 'white',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            >
              Coderrrrr.site
            </h1>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}


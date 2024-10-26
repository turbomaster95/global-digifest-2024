import Navbar from '@/components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { gsap } from "gsap";
import Scene from '@/components/Scene';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const tl = useRef(gsap.timeline({ paused: true }));
  const cRef = useRef(null);
  const lettersRef = useRef(null);

  const handleModelLoaded = () => {
    setModelLoaded(true); // Trigger re-render
  };

  useEffect(() => {
    if (modelLoaded) {
      // Initial animation for all letters
      tl.current
        .from(".letter", {
          yPercent: "random([-100, 100])",
          opacity: 0,
          duration: 2,
          stagger: 0.1,
          ease: "back.out",
        })
        .to(
          lettersRef.current,
          { y: -window.innerHeight, duration: 2, ease: "power2.out" },
          "+=1" // Delay to allow letters to stay on-screen briefly
        )
        .play();
    }
  }, [modelLoaded]);

  useEffect(() => {
    // Separate scroll trigger only for "C" element
    if (modelLoaded) {
      ScrollTrigger.create({
        trigger: cRef.current,
        start: "top center",
        end: "bottom+=500 center",
        scrub: true,
        onEnter: () => {
          gsap.to(cRef.current, {
            y: 500,
            duration: 1,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(cRef.current, {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
          });
        },
      });
    }
  }, [modelLoaded]);

  useEffect(() => {
    // Prevent default scroll behavior to avoid issues
    const preventScroll = (event) => event.preventDefault();
    document.addEventListener('wheel', preventScroll);
    return () => document.removeEventListener('wheel', preventScroll);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
          {/* Pass handleModelLoaded to Scene to notify when loading completes */}
          <Scene setModelLoaded={handleModelLoaded} style={{ zIndex: -1 }} />

          {/* Conditionally render text only after model is fully loaded */}
          {modelLoaded && (
            <h1
              className="absolute inset-0 flex justify-center items-center hedr text-black dark:text-white"
              ref={lettersRef}
              style={{
                fontSize: '16vw',
                margin: 0,
                lineHeight: 1,
                fontWeight: 600,
                zIndex: 1,
                pointerEvents: 'none',
              }}
            >
              <span ref={cRef} className="letter">C</span>
              <span className="letter">o</span>
              <span className="letter">d</span>
              <span className="letter">e</span>
              <span className="letter">r</span>
              <span className="letter">r</span>
              <span className="letter">r</span>
              <span className="letter">r</span>
              <span className="letter">r</span>
              <span className="letter">.</span>
              <span className="letter">s</span>
              <span className="letter">i</span>
              <span className="letter">t</span>
              <span className="letter">e</span>
            </h1>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

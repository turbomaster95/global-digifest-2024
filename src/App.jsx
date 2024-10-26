import Navbar from '@/components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { gsap } from "gsap";
import Scene from '@/components/Scene';
import { useEffect, useState, useRef } from 'react';
import PreLoading from '@/components/Loader';
import StaggeredText from './components/effects/StaggeredText';
import PopupText from './components/effects/PopupText';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Lenis, useLenis } from '@studio-freight/react-lenis';

gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  const [lolo, setLolo] = useState(false);
  const [count, setCount] = useState(10);
  const initialTimeline = useRef(gsap.timeline({ paused: true }));
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    // Update lolo state for animation after 5 seconds
    const loloTimer = setTimeout(() => {
      setLolo(true);
    }, 5000);

    return () => clearTimeout(loloTimer);
  }, []);

  useEffect(() => {
    // Countdown timer for PreLoading component
    const countdownTimer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 2000);
  }, []);

  // Scroll to top initially and handle smooth scrolling
  useLenis();

  useEffect(() => {
    gsap.to(window, {
      duration: 0.2,
      scrollTo: 0,
    });
  }, []);

  useEffect(() => {
    // Lock/unlock scroll based on preloading status
    const lockScroll = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    if (isPreloading) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => unlockScroll();
  }, [isPreloading]);

  // Simulate loading time
  useEffect(() => {
    const preloadingTimer = setTimeout(() => {
      setIsPreloading(false);
    }, 100);

    return () => clearTimeout(preloadingTimer);
  }, []);

  useEffect(() => {
    const startAnimation = () => {
      initialTimeline.current
        .from(".letter", {
          yPercent: "random([-100, 100])",
          opacity: 0,
          filter: "blur(10px)",
          duration: 2.5,
          stagger: 0.1,
        })
        .to(".letter", { filter: "blur(0px)", duration: 0.5 }, "-=1.5")
        .play();
    };

    if (lolo) {
      startAnimation();
    }
  }, [lolo]);

  return (
    <Lenis root>
      <ErrorBoundary className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {isPreloading && <PreLoading count={count} />}
          <Navbar />

          <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            {/* Conditional rendering based on count */}
            {count > 0 ? (
              console.log("✨ Preloading... ✨")
            ) : (
              <h1
                className="absolute inset-0 flex justify-center items-center hedr text-black dark:text-white"
                style={{
                  fontSize: '16vw',
                  margin: 0,
                  lineHeight: 1,
                  fontWeight: 600,
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              >
                <span className="letter">C</span>
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

          <div className="content">
            <div className="flex items-center justify-center min-h-screen text-black dark:text-white">
              <PopupText>
                <p>You can customize the animations and styles further based on your requirements...</p>
              </PopupText>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </Lenis>
  );
}

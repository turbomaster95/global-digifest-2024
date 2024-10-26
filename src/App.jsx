import Navbar from '@/components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { gsap } from "gsap";
import Scene from '@/components/Scene';
import { useEffect, useState, useRef } from 'react';
import PreLoading from '@/components/Loader'; // Import your PreLoading component
import StaggeredText from './components/effects/StaggeredText';
import PopupText from './components/effects/PopupText';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  const [lolo, setLolo] = useState(false);
  const [count, setCount] = useState(10);
  const initialTimeline = useRef(gsap.timeline({ paused: true }));
  const [setIsPreloading] = useState(true);

  useEffect(() => {
    // Set a timeout to change the state of `lolo` after 2 seconds
    const timer = setTimeout(() => {
      setLolo(true); // Set `lolo` to true to start the animation
    }, 5000); // 2000 milliseconds = 2 seconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        } else return prev - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    gsap.to(window, {
      duration: 0.2,       // duration of scroll in seconds
      scrollTo: 0,       // scroll position (0 = top)
    });
  })

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden";

    // Simulate loading completion or tie this to actual loading logic
    const timer = setTimeout(() => {
      setIsPreloading(false);
      document.body.style.overflow = ""; // Restore scroll
    }, 5000); // Replace 5000 with actual loading duration

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ""; // Cleanup overflow in case of unmount
    };
  }, []);

  useEffect(() => {
    const startAnimation = () => {
      initialTimeline.current
        .from(".letter", {
          yPercent: "random([-100, 100])",
          opacity: 0,
          filter: "blur(10px)", // Start with blur effect
          duration: 2.5,
          stagger: 0.1,
        })
        .to(".letter", { filter: "blur(0px)", duration: 0.5 }, "-=1.5")
        .play();
    };

    if (lolo) {
      startAnimation(); // Start animation when `lolo` is true
    }
  }, [lolo]); // Runs when `lolo` changes

  useEffect(() => {
    const preventScroll = (event) => event.preventDefault();
    document.addEventListener('wheel', preventScroll);
    return () => document.removeEventListener('wheel', preventScroll);
  }, []);

  return (
    <ErrorBoundary className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <PreLoading count={count} />
        <Navbar />

        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
          
          {/* Conditionally render the PreLoading or the text */}
          {count > 0 ? (
              // <PreLoading count={count} />
              console.log("✨✨")
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
        <div className='content'>
          <div className="flex items-center justify-center min-h-screen text-black dark:text-white">
            <PopupText>
                <p>You can customize the animations and styles further based on your requirements...</p>
            </PopupText>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

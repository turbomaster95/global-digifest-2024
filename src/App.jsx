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
import CarProjects from './components/Carousel-Projects';
import Cube from './components/Cube';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { calculateSizes } from '@/lib/const';
import { useMediaQuery } from 'react-responsive';
import AboutH from './components/AboutH';
import InteractiveStars from './components/Cursor';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  const [lolo, setLolo] = useState(false);
  const [count, setCount] = useState(10);
  const initialTimeline = useRef(gsap.timeline({ paused: true }));
  const [isPreloading, setIsPreloading] = useState(true);
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  useEffect(() => {
    // Update lolo state for animation after 5 seconds
    const loloTimer = setTimeout(() => {
      setLolo(true);
    }, 5000);

    return () => clearTimeout(loloTimer);
  }, []);

  useEffect(() => {
    gsap.to(window, {
      duration: 0.1,
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
    }, 1000);
  }, []);

  // Handle smooth scrolling
  useLenis();

  // // Simulate loading time
  // useEffect(() => {
  //   const preloadingTimer = setTimeout(() => {
  //     setIsPreloading(false);
  //   }, 50);

  //   return () => clearTimeout(preloadingTimer);
  // }, []);

  useEffect(() => {
    const startAnimation = () => {
      initialTimeline.current
        .set(".letter", { className: "letter", visibility: "visible" })
        .from(".letter", {
          yPercent: "random([-120, 120])",
          opacity: 0,
          filter: "blur(10px)",
          duration: 2,
          stagger: 0.1,
          onStart: () => console.log("Animation start"),
      })
      .to(".letter", { filter: "blur(0px)", duration: 0.5, onComplete: () => console.log("Animation end") }, "-=1.5")
      .play();
    };

    if (lolo) {
      startAnimation();
      setTimeout(() => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      })
    }
  }, [lolo]);
  useEffect(() => {
    // Ensure the script runs after the component mounts
    // const script = document.createElement('script');
    // script.src = '/oneko.js'; // Path to your oneko.js file
    // script.async = true;
    // document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      // document.body.removeChild(script);
    };
  }, []);

  return (
    <Lenis root>
      <ErrorBoundary className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <PreLoading count={count} />
          <Navbar />

          <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <section id="home" className="section-class">
              {/* Conditional rendering based on count */}
              {count > 0 ? (
                console.log("✨ Preloading... ✨")
              ) : (
                <h1
                  className="absolute inset-0 flex items-center hedr text-black dark:text-white"
                  style={{
                    fontSize: '16vw',
                    margin: 1.5,
                    lineHeight: 0.5,
                    fontWeight: 600,
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                >
                  <span className="hidden letter">C</span>
                  <span className="hidden letter">o</span>
                  <span className="hidden letter">d</span>
                  <span className="hidden letter">e</span>
                  <span className="hidden letter">r</span>
                  <span className="hidden letter">r</span>
                  <span className="hidden letter">r</span>
                  <span className="hidden letter">r</span>
                  <span className="hidden letter">r</span>
                  <span className="hidden letter">.</span>
                  <span className="hidden letter">s</span>
                  <span className="hidden letter">i</span>
                  <span className="hidden letter">t</span>
                  <span className="hidden letter">e</span>
                </h1>
              )}
            </section>
          </div>

          <div className="content">
            <div className="flex items-center flex-col justify-center min-h-screen text-black dark:text-white">
              <img src="/keyboard.jpeg" alt="keyboard" className="w-80 mb-8 align-middle" />
              <section id="about" className="section-class">
              <StaggeredText>
                <p>Building   Interactive   Experiences   for   the   Web.</p>
              </StaggeredText>
              <br />
              <br />
              <br />
              <br />
              {/* <Canvas style={{ height: '500px', width: '500px' }}>
                  <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                  <Cube position={sizes.cubePosition} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                  <OrbitControls />
              </Canvas> */}
              <AboutH />
              </section>
            </div>
          </div>
          <section id="projects" className="section-class">
            <div className="flex items-center flex-col justify-center ml-0 text-black dark:text-white">
                <br />
                <br />
                <br />
                <br />
                <StaggeredText>
                  <p className='mb-10'>PROJECTS</p>
                </StaggeredText>
                <br />
                <br />
                <br />
                <br />
            </div>    
            <CarProjects />
            <br />
            <br />
          </section>
          <br />
          <br />
          <Contact />
          <SocialLinks />
          <Footer />
        </div>
      </ErrorBoundary>
    </Lenis>
  );
}

import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Globe from 'react-globe.gl';

const ContactCard = () => {
    const globeRef = useRef(null);
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        // IntersectionObserver to detect when the section is in the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the component is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView && globeRef.current) {
            // GSAP animation for the card entrance
            gsap.fromTo(
                globeRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
            );
        }
    }, [isInView]);

    const N = 1;
    const gData = [...Array(N).keys()].map(() => ({
      lat: 9.931233,
      lng: 	76.267303,
      size: 10 + 2 * 8,
      color: 'white',
    }));

    const markerSvg = `<svg viewBox="-4 0 36 36">
        <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
        <circle fill="black" cx="14" cy="14" r="7"></circle>
    </svg>`;
    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-900 text-white p-8 space-y-8 rounded-md max-w-5xl mx-auto"
        >
            <div className="flex justify-between flex-wrap gap-8">
                {/* Left Section */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full sm:w-1/3 space-y-4"
                >
                    <Card className="bg-gray-800 p-4 rounded-md">
                        <h3 className="text-xl font-semibold">Hi, I'm Deva</h3>
                        <p className="text-sm mt-2">
                            I am a full-stack developer with a passion for creating beautiful and functional websites,
                            apps, and games. I love to explore new technologies and stay up-to-date with the latest technologies in the industry.
                            I love building interactive and engaging user experiences.
                        </p>
                    </Card>
                </motion.div>
                
                {/* Center Section */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full sm:w-1/3 space-y-4"
                >
                    <Card className="bg-gray-800 p-4 rounded-md">
                        <h3 className="text-xl font-semibold">Tech Stack</h3>
                        <p className="text-sm mt-1">
                            I use ReactJS, GSAP, Framer Motion, TailwindCSS, and shadcn/ui to build my projects.
                        </p>
                    </Card>
                </motion.div>
                
                {/* Footer Section */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full sm:w-1/3"
                >
                    <Card className="bg-gray-800 p-4 rounded-md">
                        <h3 className="text-lg font-semibold">My Passion for Coding</h3>
                        <p className="text-sm">
                            I love solving problems and building things through code. Programming isn't just my profession—it's
                            my passion. I enjoy exploring new technologies and enhancing my skills.
                        </p>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full sm:w-1/3"
                >
                    <Card className="bg-gray-800 p-4 rounded-md">
                        <h3 className="text-lg font-semibold">Contact me at</h3>
                        <a
                            href="mailto:admin@coderrrrr.site"
                            className="text-blue-400 underline mt-1 block"
                        >
                            admin@coderrrrr.site
                        </a>
                    </Card>
                </motion.div>
                
                {/* Right Section */}
                <motion.div
                    ref={globeRef}
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full"
                >
                    <Card className="bg-gray-800 p-4 rounded-md">
                        <h3 className="text-xl font-semibold">I'm available on Discord.</h3>
                        <p className="text-sm mt-2">
                            I'm based in India and can work remotely for anyone in the world.
                        </p>
                        <Button asChild className="mt-4 shadow-sm hover:shadow-lg hover:bg-white hover:text-black border border-gray-500 ">
                            <a href="https://discordapp.com/users/765881288740569088">Contact Me</a>
                        </Button>
                        <div className='rounded-3xl w-full sm:h-[326px] flex justify-center items-center h-fit'>
                            <Globe
                                    height={326}
                                    width={326}
                                    backgroundColor='rgba(0,0,0,0)'
                                    backgroundImageOpacity={0.5}
                                    showAtmosphere
                                    showGraticules
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    ref={globeRef}
                                    htmlElementsData={gData}
                                    htmlElement={d => {
                                        const el = document.createElement('div');
                                        el.innerHTML = markerSvg;
                                        el.style.color = d.color;
                                        el.style.width = `${d.size}px`;
                                
                                        el.style['pointer-events'] = 'auto';
                                        el.style.cursor = 'pointer';
                                        el.onclick = () => console.info(d);
                                        return el;
                                    }}
                                />
                        </div>
                    </Card>
                </motion.div>
                
            </div>
        </motion.div>
    );
};

export default ContactCard;

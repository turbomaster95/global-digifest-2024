import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaYoutube } from 'react-icons/fa';

export default function SocialLinks() {
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
                    className="w-full sm:w-1/3 space-y-2 items-center justify-center center"
                >
                    <center>
                        <Card className="bg-gray-800 items-center justify-center center p-4 rounded-md w-max max-w-max">
                            <center>
                                <h3 className="text-xl font-bold items-center justify-center center">Social Links</h3>
                            </center>
                            <CardContent>
                            <a href="https://deva.nom.za/yt" target="_blank" rel="noopener noreferrer" className=""><img loading='lazy' href="/logos/youtube.png" className="w-50 h-10" src="/logos/youtube.png" alt="Youtube" style={{display: 'inline-block', margin: 100}}></img></a>
                            <a href="https://deva.nom.za/x" target="_blank" rel="noopener noreferrer" className=""><img loading='lazy' href="/logos/x.svg" className="w-10 h-10 mr-2" src="/logos/x.svg" alt="X" style={{display: 'inline-block', margin: 100}}></img></a>
                            <a href="https://deva.nom.za/insta" target="_blank" rel="noopener noreferrer" className="hover:underline"><img loading='lazy' href="/logos/instagram.svg" className="w-10 h-10 mr-2" src="/logos/instagram.svg" alt="Instagram" style={{display: 'inline-block', margin: 100}}></img></a>
                            <a href="https://deva.nom.za/masd" target="_blank" rel="noopener noreferrer" className="hover:underline"><img loading='lazy' href="/logos/mastodon.svg" className="w-10 h-10 mr-2" src="/logos/mastodon.svg" alt="Mastodon" style={{display: 'inline-block', margin: 100}}></img></a>
                            </CardContent>
                        </Card>
                    </center>
                </motion.div>
            </div>
        </motion.div>
    ); 
}
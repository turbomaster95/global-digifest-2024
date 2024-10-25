import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function About() { 
    const circleRef = useRef(null);

    useEffect(() => {
        // Animate the circle to rotate and pulse around the avatar
        gsap.to(circleRef.current, {
            duration: 6,
            rotation: 360,
            transformOrigin: "center center",
            repeat: -1,
            ease: "linear",
        });
        gsap.to(circleRef.current, {
            duration: 1.5,
            scale: 1.05,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <>
            <div className="min-h-screen bg-black dark:bg-gray-900 transition-colors duration-300">
                <Navbar />
                <div className="flex flex-col items-center pt-8 relative">
                    {/* Sci-Fi Rotating Circular Border */}
                    <div
                        ref={circleRef}
                        className="absolute w-96 h-96 rounded-full border-4 border-green-400 opacity-80"
                        style={{
                            boxShadow: "0 0 15px rgba(0, 255, 0, 0.6), inset 0 0 10px rgba(0, 255, 0, 0.6)",
                            top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                        }}
                    ></div>

                    {/* Avatar component for circular image */}
                    <Avatar className="w-1/4 h-1/4 rounded-full border-4 border-gray-300 dark:border-gray-700 mb-4 relative z-10">
                        <AvatarImage src="https://github.com/shadcn.png" alt="me!" />
                    </Avatar>
                    
                    <Card className="max-w-2xl w-full mx-auto bg-gray-800 dark:bg-gray-800 shadow-green-500 shadow-md mt-6">
                        <CardHeader>
                            <CardTitle className="text-green-400">About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-200">
                                Hi! I am Deva, an independent developer from India.<br /><br />
                                Coding is not just my profession, it is my passion.
                                <br />
                                My Skills:
                                <ul className="list-disc list-inside pl-5 text-green-400">
                                    <li>Node.js</li>
                                    <li>Python</li>
                                    <li>Git</li>
                                    <li>HTML/CSS/JS</li>
                                </ul>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

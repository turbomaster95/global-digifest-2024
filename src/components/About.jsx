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
            rotate: 360,
            transformOrigin: "50% 50%", // Changed this line
            repeat: -1,
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
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Navbar />
                <div className="flex flex-col items-center pt-8 relative">
                    {/* Sci-Fi Rotating Circular Border */}
                    <div
                        className="absolute w-[25%] h-[25%] rounded-full"
                        ref={circleRef}
                        style={{
                            top: "48%",  // Adjust positioning relative to avatar
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            border: "2px solid rgba(0, 255, 0, 0.8)",
                            boxShadow: "0 0 20px 6px rgba(0, 255, 0, 0.6), inset 0 0 10px rgba(0, 255, 0, 0.6)",
                        }}
                    ></div>


                    {/* Avatar component for circular image */}
                    <Avatar className="w-1/4 h-1/4 rounded-full border-4 border-gray-300 dark:border-gray-700 mb-4 relative">
                        <AvatarImage src="https://github.com/shadcn.png" alt="me!" />
                    </Avatar>

                    <Card className="max-w-2xl w-full mx-auto bg-white dark:bg-gray-800 md:shadow-md md:shadow-black mt-6">
                        <CardHeader>
                            <CardTitle className="text-black dark:text-white">About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-black dark:text-white">
                                Hi! I am Deva, an independent developer from India.<br /><br />
                                Coding is not just my profession, it is my passion.
                                <br />
                                My Skills:
                                <ul className="list-disc list-inside pl-5">
                                    <li>Node.js</li>
                                    <li>Python</li>
                                    <li>Git</li>
                                    <li>HTML/CSS/JS</li>
                                </ul>
                            </p>
                        </CardContent>
                    </Card>
                    <br />
                </div>
            </div>
        </>
    );
}


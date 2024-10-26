"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const WallPopupText = ({ children }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div ref={textRef} className="flex flex-col items-center overflow-hidden">
      {React.Children.map(children, (child, lineIndex) => (
        <div className="flex flex-wrap justify-center mb-2 text-xl">
          {child.props.children.split(" ").map((word, wordIndex) => (
            <motion.span
              key={`${lineIndex}-${wordIndex}`}
              className="inline-block mr-1"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  rotateX: 75,
                  perspective: 1000,
                  z: -200,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  z: 0,
                  transition: {
                    duration: 0.8,
                    delay: lineIndex * 0.2 + wordIndex * 0.08, // Stagger for each word
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {word}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WallPopupText;

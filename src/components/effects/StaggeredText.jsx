import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const StaggeredText = ({ children }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start the animation when in view
          observer.disconnect(); // Stop observing after it's in view
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
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

  // Convert children to string and split into characters
  const text = React.Children.toArray(children).map(child => child.props.children).join("");

  return (
    <div className="flex space-x-1" ref={textRef}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            initial: { opacity: 0, y: 30, filter: "blur(5px)" },
            animate: { opacity: 1, y: 0, filter: "blur(0px)"  },
          }}
          initial="initial"
          animate={isVisible ? "animate" : "initial"} // Animate when visible
          transition={{ duration: 0.6, delay: index * 0.02 }} // Stagger effect
          className="text-3xl ml-16 font-bold"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default StaggeredText;

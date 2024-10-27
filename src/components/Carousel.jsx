import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Dotmastr',
    description: 'A simple cross-platform dotfiles manager. Dotfiles are hidden configuration files in Unix-based systems (e.g., .bashrc, .vimrc) that store user settings and preferences for applications, allowing for customized environments across shells, editors, and more. A dotfiles manager streamlines tracking and syncing configurations across devices, automating setup to ensure a consistent environment with ease.',
    image: 'https://via.placeholder.com/300', // Placeholder image, replace with actual image URL
  },
  {
    title: 'Obstacle Avoiding Robotic Car',
    description: 'An Obstacle Avoiding Robotic Car uses an Arduino Uno R4 WiFi, IR sensor, and L293D motor driver to autonomously navigate by detecting obstacles and adjusting its path. The IR sensor identifies nearby objects, while the Arduino processes this data to control the motors via the L293D driver, steering the car around obstacles.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Coderrrrr.site',
    description: 'This website you are currently on. It is my personal website that showcases my projects and skills. It was built using Next.js, Tailwind CSS, and Framer Motion.',
    image: 'https://via.placeholder.com/300',
  },
];

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <Card
        ref={carouselRef}
        className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      >
        {/* Left Side - Text */}
        <div className="flex-1 p-6">
          <h3 className="text-2xl font-bold text-white">
            {projects[currentIndex].title}
          </h3>
          <hr className="my-2 border-gray-600" />
          <p className="text-white">{projects[currentIndex].description}</p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <img
            src={projects[currentIndex].image}
            alt="Project Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </Card>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default ProjectsCarousel;
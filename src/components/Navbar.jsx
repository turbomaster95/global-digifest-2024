import React, { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { motion } from "framer-motion"

const navItems = ['Home', 'About', 'Projects', 'Contact']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    gsap.from(".navbas", {
      opacity: 0,
      filter: "blur(10px)",
      duration: 2,
    }) // "-=1.5" means start this animation 1.5 seconds before the previous one ends
  }, []);

  setTimeout(() => {
    gsap.to(".navbas", { 
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5 
    });
  }, 8000);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 transition-colors duration-300 navbas ">
      <div className="max-w-8xl bg-gray-700">
        <div className="flex items-center mx-7 justify-between h-16 ">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white ">👨‍💻Coderrrrr.site</a>
          </div>
          <div className="hidden md:flex md:flex-grow md:justify-center mx-0 "> {/* Center the links */}
                <div className="flex space-x-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={`/${item.toLowerCase()}`}
                      className="text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-bold "
                    >
                      {item.toUpperCase()}
                    </Link>

                  ))}
                </div>
          </div>
          <div className="flex items-center">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              className="p-1 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Toggle dark mode</span>
              {darkMode ? (
                <Sun className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Moon className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="block text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

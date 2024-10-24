import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div>
      <div className="Hero">
        <div className="mt-24 grid md:grid-cols-2 items-center md:gap-4 gap-8 max-w-5xl max-md:max-w-md mx-auto">
          <div className="order-1 md:order-1 max-md:text-center">
            <h4>Website Developer</h4>
            <h3 className="text-white">
              Hello I'm <br /> <span>Ahmad Hassan</span>
            </h3>
            <p className="mt-4 text-sm text-white">
            Crafting dynamic and responsive digital solutions for a seamless online experience
            </p>
            
            {/* Button and Social Icons */}
            <div className="flex items-center space-x-4 mt-8 mywork">
              <button
                type="button"
                className="my-bt rounded text-sm outline-none tracking-wide text-[#0bfa9d] bg-transparent border-2 border-[#0bfa9d] hover:bg-[#0bfa9d] hover:text-white transition-all ease-in-out duration-300"
              >
                View Work
              </button>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="myic border-2 border-[#0bfa9d] text-white hover:text-blue-500 rounded-full transition-all duration-300">
                  <FontAwesomeIcon icon={faFacebookF} size="sm" />
                </a> 
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="myic border-2 border-[#0bfa9d] text-white hover:text-pink-500 rounded-full transition-all duration-300">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="myic border-2 border-[#0bfa9d] text-white hover:text-blue-400 rounded-full transition-all duration-300">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-2 md:order-2 relative flex justify-center items-center">
            <div className="overflow-hidden">
              <img 
                src="/assets/hero1.png" 
                className="overflow-hidden w-full h-full object-contain rounded-full" 
                alt="Dining Experience" 
              />
            </div>            

            {/* Animated Circle */}
            <motion.svg
              className="absolute inset-0 mysvg w-full h-full"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="250" // Center of the SVG
                cy="250" // Center of the SVG
                r="250"
                stroke="#0bfa9d"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{ 
                  strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                  rotate: [120, 360], // Maintain the rotation effect
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear", // Use a linear easing for consistent speed
                  repeatType: 'loop' // Repeat the loop rather than reverse
                }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;

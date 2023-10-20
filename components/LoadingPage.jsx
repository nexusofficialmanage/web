'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './LoadingPage.css';

const LoadingPage = () => {
  const circleControls = useAnimation(); // Controls for the rotating circle
  const birdControls = useAnimation(); // Controls for the flying bird

  useEffect(() => {
    // Animate the circle
    circleControls.start({
      rotate: 360,
      transition: { loop: Infinity, duration: 2, ease: 'linear' },
    });

    // Animate the bird (adjust the path to stay closer to the top of the screen)
    birdControls.start({
      x: [100, -100, 100], // Horizontal flying path
      y: [-30, -60, -30], // Vertical flying path (stay closer to the top)
      transition: { loop: Infinity, duration: 5, ease: 'linear' },
    });
  }, []); // The empty dependency array ensures this runs after the component has mounted

  return (
    <div className="loader-container">
      <motion.div
        className="loader-circle"
        initial={{ rotate: 0 }}
        animate={circleControls}
      />
      
    </div>
  );
};

export default LoadingPage;

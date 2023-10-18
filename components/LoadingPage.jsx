import React from 'react';
import { motion } from 'framer-motion';
import './LoadingPage.css';

const LoadingPage = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader-circle"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, duration: 2, ease: "linear" }} // Adjust the duration as needed
      />
    </div>
  );
};

export default LoadingPage;

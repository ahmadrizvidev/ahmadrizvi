// pages/_app.js
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InitialTransition from '@/components/InitialTransition';
import '../styles/globals.css';

const pageTransition = {
  initial: { opacity: 0, y: 100 }, // Start from below
  animate: { opacity: 1, y: 0 }, // Move to the center
  exit: { opacity: 0, y: -100 }, // Move off-screen to the top
};

function MyApp({ Component, pageProps, router }) {
  const [loadingComplete, setLoadingComplete] = useState(false); // State to manage loading

  const handleLoadingComplete = () => {
    setLoadingComplete(true); // Mark loading as complete
  };

  return (
    <>
      <InitialTransition onLoadingComplete={handleLoadingComplete} />
      {loadingComplete && (
        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath} // Unique key for the animated div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.5 }} // Slide duration
            style={{ position: 'absolute', width: '100%', top: 0, left: 0 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default MyApp;

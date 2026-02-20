import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import video5 from '../assets/Video/Video 5.mp4';

const FloatingVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '240px',
            height: '426px', // 9:16 aspect ratio
            zIndex: 1000,
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            border: '2px solid var(--primary)',
            background: '#000'
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 1001,
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>

          <video
            src={video5}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            padding: '12px',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            color: 'white',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Live Working Site
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingVideo;

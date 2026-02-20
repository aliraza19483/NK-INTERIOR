import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const OfferModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="modal-overlay">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="offer-modal"
          >
            <button className="modal-close" onClick={closeModal}>×</button>

            <div className="modal-content">
              <span className="modal-badge">Exclusive Offer</span>
              <h1 className="serif italic">35% OFF</h1>
              <h2 className="serif">Transform Your Space</h2>
              <p>Claim your exclusive discount on our premium design services. limited time offer for our exclusive clients.</p>

              <form className="modal-form" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="number" placeholder="Your Phone Number" required />
                <button type="submit" className="btn-submit">Claim Offer</button>
              </form>

              <button className="btn-cancel" onClick={closeModal}>
                Maybe Later, View Website
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OfferModal;

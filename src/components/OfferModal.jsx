import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const OfferModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsVisible(false);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I'd like to claim the 35% Exclusive Offer.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8953507727?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

              <form className="modal-form" onSubmit={handleWhatsAppSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn-submit">Claim Offer on WhatsApp</button>
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

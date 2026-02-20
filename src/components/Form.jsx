import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    timeline: '',
    vision: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hello NK CONTRACTOR! 
I would like to discuss a project.
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}
Timeline: ${formData.timeline}
Vision: ${formData.vision}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8953507727?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding form-section-bg" id="contact">
      <div className="container">
        <div className="form-card">
          <div className="form-deco"></div>

          <div style={{ position: 'relative', zIndex: 10 }}>
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <h2 className="primary-text uppercase tracking-wide" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '16px' }}>Contact Us</h2>
              <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', color: 'var(--elite)', marginBottom: '24px' }}>Begin Your Project</h1>
              <p className="serif italic" style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
                Join the exclusive. Let’s collaborate to build a space that reflects your distinct success.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit}>
              <div className="form-group-row">
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div className="form-input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder="Project Type (e.g., Residential)"
                    required
                  />
                </div>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="Preferred Timeline"
                    required
                  />
                </div>
              </div>

              <div className="form-input-wrapper">
                <textarea
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Share your vision with us..."
                  style={{ resize: 'none' }}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-submit"
                >
                  Request Consultation on WhatsApp
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

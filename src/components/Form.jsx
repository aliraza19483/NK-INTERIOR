import { motion } from 'framer-motion';

const Form = () => {
  return (
    <section className="section-padding form-section-bg">
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

            <form>
              <div className="form-group-row">
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="form-input-wrapper">
                  <input
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    placeholder="Project Type (e.g., Residential)"
                  />
                </div>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    placeholder="Preferred Timeline"
                  />
                </div>
              </div>

              <div className="form-input-wrapper">
                <textarea
                  rows="4"
                  placeholder="Share your vision with us..."
                  style={{ resize: 'none' }}
                ></textarea>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-submit"
                >
                  Request Consultation
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

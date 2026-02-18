import { motion } from 'framer-motion';
import founderImg from '../assets/images/Client Image.jpeg';

const Founder = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="founder-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="founder-img-wrapper"
          >
            <div className="img-container">
              <img
                src={founderImg}
                alt="Elite Interior Founder"
                className="founder-img"
              />
            </div>

            <div className="founder-badge">
              <span>Elite</span>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="founder-bio"
          >
            <h2>Our Visionary</h2>
            <h1>Design is the soul of every space.</h1>
            <div className="bio-text">
              <p>
                Founded on the principles of elegance and functionality, Elite Interior brings a bespoke approach to luxury living. Our philosophy centers on creating environments that are not just beautiful, but deeply personal.
              </p>
              <p>
                "I believe that architecture and interiors should speak to the identity of those who inhabit them. Every texture, every light fixture, and every corner is an opportunity to tell a story of sophistication and royalty."
              </p>
            </div>
            <div className="founder-sig">
              — Azhar, Founder & Principal Designer
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

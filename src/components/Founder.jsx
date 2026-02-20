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
                alt="NK CONTRACTOR Founder"
                className="founder-img"
              />
            </div>

            <div className="founder-badge">
              <span>NK</span>
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
                NK CONTRACTOR is a full-service provider specializing in False Ceiling, Painting, and Electrical work. We bring expertise and dedication to every project, ensuring your space is both functional and aesthetically pleasing.
              </p>
              <p>
                "Quality craftsmanship is the foundation of every great home. Whether it's the perfect paint finish, intricate ceiling work, or safe electrical installations, we handle it all with precision and care."
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

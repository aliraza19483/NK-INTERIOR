import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-bg" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-content"
      >
        <span className="hero-subtitle">Bespoke Design</span>
        <h1 className="hero-title">
          NK<br />CONTRACTOR
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1.5 }}
          className="hero-divider"
        ></motion.div>
        <p className="hero-description">
          Crafting timeless spaces that define your legacy.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="scroll-indicator"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </div>
  );
}

export default Hero;

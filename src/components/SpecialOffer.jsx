import { motion } from 'framer-motion';

const SpecialOffer = () => {
  return (
    <section className="special-offer-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="offer-box"
        >
          <div className="offer-text">
            <h2 className="primary-text uppercase tracking-wide">Limited Time Privilege</h2>
            <h1 className="serif">Bespoke Excellence at <span className="highlight">35% OFF</span></h1>
            <p>Experience the pinnacle of interior design with a significant investment reduction. Available for our next 5 signature projects.</p>
          </div>
          <div className="offer-action">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-submit"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              Get My Quotation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffer;

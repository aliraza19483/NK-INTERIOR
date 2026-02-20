import { motion } from 'framer-motion';
import photo7 from '../assets/images/Photo 7.jpeg';
import photo8 from '../assets/images/photo 8.jpeg';
import photo9 from '../assets/images/photo 9.jpeg';

const articles = [
  {
    id: 1,
    title: 'The Art of Minimalist Luxury',
    excerpt: 'Discover how simplicity in design can create the most profound sense of opulence.',
    image: photo7,
    date: 'Feb 15, 2026'
  },
  {
    id: 2,
    title: 'Sustainable Textures for 2026',
    excerpt: 'Exploring the beauty of eco-conscious materials that don\'t compromise on elegance.',
    image: photo8,
    date: 'Feb 10, 2026'
  },
  {
    id: 3,
    title: 'Lighting: The Silent Architect',
    excerpt: 'How strategic illumination transforms a living space into a cinematic experience.',
    image: photo9,
    date: 'Feb 05, 2026'
  }
];

const Magazine = () => {
  return (
    <section className="section-padding" id="design-idea" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="magazine-header">
          <div style={{ maxWidth: '600px' }}>
            <h2 className="primary-text uppercase tracking-wide" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '16px' }}>The Journal</h2>
            <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--elite)', marginBottom: '16px' }}>Magazine & Trends</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Insights from our principal designers on the evolution of bespoke spaces.</p>
          </div>
          <button className="btn-link">
            View All Stories
          </button>
        </div>

        <div className="article-grid">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="article-card"
            >
              <div className="article-img-box">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-img"
                />
                <div className="article-tag">
                  Design
                </div>
              </div>
              <div>
                <span className="article-date">{article.date}</span>
                <h3 className="serif article-title italic">
                  {article.title}
                </h3>
                <p className="article-excerpt">
                  {article.excerpt}
                </p>
                <div className="article-more">
                  Read More
                  <div className="more-line"></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Magazine;

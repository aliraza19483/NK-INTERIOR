import { motion } from 'framer-motion';
import photo1 from '../assets/images/Photo 1.jpeg';
import photo2 from '../assets/images/photo 2.jpeg';
import photo3 from '../assets/images/photo 3.jpeg';
import photo4 from '../assets/images/photo 4.jpeg';
import photo5 from '../assets/images/Photo 5.jpeg';
import video1 from '../assets/Video/Video 1.mp4';
import video5 from '../assets/Video/Video 2.mp4';

const projects = [
  { id: 1, image: photo1 },
  { id: 2, image: photo2 },
  { id: 3, image: photo3 },
  { id: 4, image: photo4 },
  { id: 5, image: photo5 },
];

const Portfolio = () => {
  return (
    <section className="section-padding" id="portfolio">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 className="primary-text uppercase tracking-wide" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '16px' }}>Our Portfolio</h2>
          <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--elite)' }}>Recent Projects</h1>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="portfolio-item"
            >
              <img
                src={project.image}
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-meta">
                  <span className="portfolio-cat">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="recent-project-video" style={{ marginTop: '80px', textAlign: 'center' }}>
          <h2 className="primary-text uppercase tracking-wide" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '24px' }}>Witness Our Craft</h2>
          <h1 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--elite)', marginBottom: '40px' }}>Recent Working Project</h1>

          <div className="video-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
            gap: '32px',
            marginTop: '40px'
          }}>
            {[video1, video5].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '9/16', // Proper aspect ratio for fixed vertical video
                  overflow: 'hidden',
                  background: '#000',
                  borderRadius: '12px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <video
                  src={video}
                  className="w-full h-full"
                  controls
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

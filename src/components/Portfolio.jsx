import { motion } from 'framer-motion';
import photo1 from '../assets/images/Photo 1.jpeg';
import photo2 from '../assets/images/photo 2.jpeg';
import photo3 from '../assets/images/photo 3.jpeg';
import photo4 from '../assets/images/photo 4.jpeg';
import photo5 from '../assets/images/Photo 5.jpeg';
import photo6 from '../assets/images/photo 6.jpeg';

const projects = [
  { id: 1, title: 'Royal Penthouse', category: 'Residential', image: photo1 },
  { id: 2, title: 'Bespoke Lounge', category: 'Commercial', image: photo2 },
  { id: 3, title: 'Minimalist Haven', category: 'Residential', image: photo3 },
  { id: 4, title: 'Executive Suite', category: 'Office', image: photo4 },
  { id: 5, title: 'Modern Villa', category: 'Residential', image: photo5 },
  { id: 6, title: 'The Grand Hall', category: 'Hospitality', image: photo6 },
];

const Portfolio = () => {
  return (
    <section className="section-padding">
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
                alt={project.title}
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
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=xb_y1-2-3-4-5"
              title="Recent Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin by understanding your vision, lifestyle, and unique preferences through an in-depth creative session.'
  },
  {
    number: '02',
    title: 'Design & Visuals',
    description: 'Our team crafts bespoke 3D visualizations and material palettes, refining every detail until it resonates with your legacy.'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'From procurement to precision installation, we manage the entire project to ensure a seamless transition into your new space.'
  }
];

const Process = () => {
  return (
    <section className="section-padding process-bg italic">
      <div className="container">
        <div style={{ marginBottom: '80px' }}>
          <h2 className="primary-text uppercase tracking-wide" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '16px' }}>The Journey</h2>
          <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '24px' }}>Our Design Process</h1>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="process-step"
            >
              <span className="step-num">{step.number}</span>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p style={{ fontStyle: 'normal' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

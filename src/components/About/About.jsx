import { motion } from 'framer-motion'
import './About.css'

function About() {
  const MotionDiv = motion.div
  const MotionFigure = motion.figure

  return (
    <section className="about" id="about" aria-label="About section">
      <MotionDiv
        className="about-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <article className="about-content">
          <span className="section-tag">About Me</span>
          <h2 className="section-heading">Driven to Solve Real Problems with AI</h2>
          <p className="section-lead">
            I am ANKIT KUMAR, a B.Tech student in Artificial Intelligence and Machine
            Learning Engineering with strong interest in building useful machine learning
            solutions. My work focuses on data preprocessing, model evaluation, and
            practical application of supervised and unsupervised techniques.
          </p>
          <p>
            I enjoy turning raw data into insights and creating models that support
            decision-making. With a disciplined learning mindset and hands-on project
            experience, I am actively preparing for internship and full-time opportunities
            in AI and ML.
          </p>
        </article>

        <MotionFigure
          className="about-photo"
          whileHover={{ scale: 1.04, rotate: 1.5 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        >
          <img src="./ankit-dp.png" alt="Profile of Ankit Kumar" />
        </MotionFigure>
      </MotionDiv>
    </section>
  )
}

export default About

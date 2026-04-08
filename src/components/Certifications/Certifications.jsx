import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
import './Certifications.css'

function Certifications() {
  const MotionArticle = motion.article

  return (
    <section className="certifications" id="certifications" aria-label="Certifications section">
      <span className="section-tag">Certification</span>
      <h2 className="section-heading">Validated Learning Milestones</h2>

      <MotionArticle
        className="certification-card"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -6 }}
      >
        <div className="certification-icon">
          <FaCertificate />
        </div>
        <div>
          <h3>Introduction to Artificial Intelligence</h3>
          <p>Simplilearn | 2026</p>
        </div>
      </MotionArticle>
    </section>
  )
}

export default Certifications

import { motion } from 'framer-motion'
import { FaBolt, FaPuzzlePiece, FaDumbbell, FaSyncAlt } from 'react-icons/fa'
import './Strengths.css'

const strengths = [
  { icon: <FaBolt />, title: 'Quick Learner' },
  { icon: <FaPuzzlePiece />, title: 'Problem-Solving Mindset' },
  { icon: <FaDumbbell />, title: 'Hardworking & Disciplined' },
  { icon: <FaSyncAlt />, title: 'Adaptable to New Technologies' },
]

function Strengths() {
  const MotionArticle = motion.article

  return (
    <section className="strengths" id="strengths" aria-label="Strengths section">
      <span className="section-tag">Strengths</span>
      <h2 className="section-heading">Personal Strengths That Drive Results</h2>

      <div className="strength-grid">
        {strengths.map((item, index) => (
          <MotionArticle
            key={item.title}
            className="strength-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="strength-icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </MotionArticle>
        ))}
      </div>
    </section>
  )
}

export default Strengths

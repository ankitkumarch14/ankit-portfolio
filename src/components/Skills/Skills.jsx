import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaBrain, FaChartLine } from 'react-icons/fa'
import './Skills.css'

const technicalSkills = [
  { name: 'Python', level: 88 },
  { name: 'C/C++ (Basic)', level: 62 },
  { name: 'DBMS & SQL', level: 82 },
  { name: 'Data Structures & Algorithms', level: 78 },
]

const aiMlSkills = [
  { icon: <FaBrain />, title: 'Model Training & Evaluation', text: 'Practical model building, tuning, and metrics-based validation.' },
  { icon: <FaChartLine />, title: 'Data Visualization', text: 'Creating clear insights using Matplotlib and analysis workflows.' },
  { icon: <FaCode />, title: 'NLP Basics', text: 'Text preprocessing and introductory natural language pipelines.' },
  { icon: <FaDatabase />, title: 'Data Cleaning', text: 'Preparing structured datasets with reliable preprocessing steps.' },
]

function Skills() {
  const MotionArticle = motion.article
  const MotionDiv = motion.div

  return (
    <section className="skills" id="skills" aria-label="Skills section">
      <span className="section-tag">Skills</span>
      <h2 className="section-heading">Technical and AI/ML Capabilities</h2>
      <p className="section-lead">
        Core skills that support model development, data processing, and effective
        implementation of machine learning solutions.
      </p>

      <div className="skills-grid">
        <MotionArticle
          className="skills-progress-card"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <h3>Technical Skills</h3>
          <div className="progress-list">
            {technicalSkills.map((skill) => (
              <div className="progress-item" key={skill.name}>
                <div className="progress-head">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-track">
                  <MotionDiv
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  ></MotionDiv>
                </div>
              </div>
            ))}
          </div>
        </MotionArticle>

        <MotionArticle
          className="skills-ai-grid"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          {aiMlSkills.map((item) => (
            <MotionDiv
              className="skill-feature-card"
              key={item.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            >
              <div className="skill-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </MotionDiv>
          ))}
        </MotionArticle>
      </div>
    </section>
  )
}

export default Skills

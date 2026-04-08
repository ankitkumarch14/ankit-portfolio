import { motion } from 'framer-motion'
import './Projects.css'

const projectList = [
  {
    title: 'House Price Prediction Model',
    description:
      'Built a linear regression pipeline with preprocessing and feature selection to estimate real-estate prices from structured data.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
  },
  {
    title: 'Student Performance Prediction',
    description:
      'Developed a supervised learning model to analyze student behavior indicators and predict academic performance trends.',
    tech: ['Python', 'Matplotlib', 'Supervised Learning'],
  },
  {
    title: 'Spam Email Detection System',
    description:
      'Implemented Naive Bayes classification with text preprocessing for spam filtering in email message datasets.',
    tech: ['Python', 'Scikit-learn', 'NLP'],
  },
  {
    title: 'Basic Chatbot',
    description:
      'Designed an NLP-based chatbot capable of handling simple user queries with structured conversational responses.',
    tech: ['Python', 'NLP', 'Text Processing'],
  },
]

function Projects() {
  const MotionArticle = motion.article

  return (
    <section className="projects" id="projects" aria-label="Projects section">
      <span className="section-tag">Projects</span>
      <h2 className="section-heading">Applied AI/ML Project Experience</h2>
      <p className="section-lead">
        A curated set of practical projects demonstrating model design, preprocessing,
        and AI-focused problem solving.
      </p>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <MotionArticle
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button type="button">View Case Study</button>
          </MotionArticle>
        ))}
      </div>
    </section>
  )
}

export default Projects

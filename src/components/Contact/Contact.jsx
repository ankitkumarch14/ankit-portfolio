import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  const MotionArticle = motion.article
  const MotionForm = motion.form

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="contact" id="contact" aria-label="Contact section">
      <span className="section-tag">Contact</span>
      <h2 className="section-heading">Let&apos;s Connect and Collaborate</h2>

      <div className="contact-grid">
        <MotionArticle
          className="contact-details"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <h3>Contact Information</h3>
          <p>
            Phone: <a href="tel:8789020087">8789020087</a>
          </p>
          <p>
            Email: <a href="mailto:ankitkumarch14@gmail.com">ankitkumarch14@gmail.com</a>
          </p>
          <p>
            Location: Mohalla Lakhnu Sarai, Sasaram, Rohtas, Bihar, India
          </p>

          <h3>Career Objective</h3>
          <p>
            Aspiring AI/ML Engineer with a strong interest in Artificial Intelligence and
            Machine Learning. Seeking opportunities to apply my skills in real-world
            projects and grow in the field of AI.
          </p>

          <h3>Education</h3>
          <ul>
            <li>B.Tech in Artificial Intelligence & Machine Learning Engineering</li>
            <li>Diploma (2020-2023) - State Board of Technical Education</li>
            <li>Matric (2020) - Bihar School Examination Board</li>
          </ul>
        </MotionArticle>

        <MotionForm
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <label htmlFor="fullName">Name</label>
          <input id="fullName" name="fullName" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message"
            required
          ></textarea>

          <a href="mailto:ankitkumarch14@gmail.com">
            <button type="button">Send Message</button>
          </a>
        </MotionForm>
      </div>
    </section>
  )
}

export default Contact
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const roles = ['AI/ML Engineer', 'Machine Learning Enthusiast', 'Aspiring Data Scientist']

function Hero() {
  const MotionDiv = motion.div
  const [typedText, setTypedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 55 : 95

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.slice(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 900)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-orb hero-orb-left"></div>
      <div className="hero-orb hero-orb-right"></div>

      <MotionDiv
        className="hero-content"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <span className="section-tag">Welcome to my portfolio</span>
        <h1 className="hero-name">ANKIT KUMAR</h1>
        <p className="hero-role">
          <span>{typedText}</span>
          <span className="typing-cursor">|</span>
        </p>
        <p className="hero-tagline">
          Aspiring AI/ML Engineer building intelligent systems through data-driven learning,
          practical experimentation, and disciplined problem solving.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-socials" aria-label="Social links">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="mailto:ankitkumarch14@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </MotionDiv>
    </section>
  )
}

export default Hero

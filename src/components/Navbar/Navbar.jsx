import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certification' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const MotionNav = motion.nav
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.55 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className="navbar-wrapper">
      <MotionNav
        className="navbar"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <a href="#home" className="navbar-brand" aria-label="Go to home section">
          ANKIT KUMAR
        </a>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleLinkClick}
                className={activeSection === item.id ? 'is-active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </MotionNav>
    </header>
  )
}

export default Navbar
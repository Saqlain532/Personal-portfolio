import React, { useState } from 'react'
import { FaSun, FaMoon, FaBars, FaXmark } from 'react-icons/fa6'
import { motion } from "motion/react";
import { Form } from './Form'

const Navbar = () => {
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('light')
  }

  return (
    <motion.nav
      className='w-full bg-surface border-b-2 border-border sticky top-0 z-50'
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* Main Navbar */}
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3'>

        {/* Logo */}
        <h1 className="font-display text-text-main flex items-center text-lg md:text-xl">

          <div className="h-10 w-10 mr-3 rounded-full border-2 border-border flex items-center justify-center bg-surface-variant">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

          </div>

          <span className='hidden sm:block'>
            Saqlain Mustaque
          </span>

        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">

          <a
            href="#home"
            className='font-sans text-text-main border-2 bg-surface border-border rounded-3xl px-4 py-2 hover:scale-105 transition'
          >
            Home
          </a>

          <a
            href="#about"
            className='font-sans text-text-main border-2 bg-surface border-border rounded-3xl px-4 py-2 hover:scale-105 transition'
          >
            About
          </a>

          <a
            href="#projects"
            className='font-sans text-text-main border-2 bg-surface border-border rounded-3xl px-4 py-2 hover:scale-105 transition'
          >
            Projects
          </a>

          <a
            href="#contact"
            className='font-sans text-text-main border-2 bg-surface border-border rounded-3xl px-4 py-2 hover:scale-105 transition'
          >
            Contact
          </a>

        </div>

        {/* Desktop Buttons */}
        <div className='hidden md:flex items-center gap-3'>

          <button
            onClick={toggleTheme}
            className='bg-surface-variant text-text-main text-xl p-2 rounded-full border-2 border-border hover:scale-105 transition'
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setFormOpen(true)}
            className='bg-primary text-white font-sans px-5 py-2 rounded-3xl hover:scale-105 transition'
          >
            Get in Touch
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div className='flex md:hidden items-center gap-3'>

          <button
            onClick={toggleTheme}
            className='bg-surface-variant text-text-main text-lg p-2 rounded-full border-2 border-border'
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-text-main text-2xl'
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='md:hidden px-4 pb-4 flex flex-col gap-3 bg-surface border-t border-border'
        >

          <a
            href="#home"
            className='text-text-main border border-border rounded-xl px-4 py-3 bg-surface-variant'
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            className='text-text-main border border-border rounded-xl px-4 py-3 bg-surface-variant'
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#projects"
            className='text-text-main border border-border rounded-xl px-4 py-3 bg-surface-variant'
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#contact"
            className='text-text-main border border-border rounded-xl px-4 py-3 bg-surface-variant'
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

          <button
            onClick={() => {
              setFormOpen(true)
              setMenuOpen(false)
            }}
            className='bg-primary text-white font-sans px-4 py-3 rounded-xl'
          >
            Get in Touch
          </button>

        </motion.div>
      )}

      {/* Contact Form Modal */}
      <Form isOpen={formOpen} onClose={() => setFormOpen(false)} />

    </motion.nav>
  )
}

export default Navbar
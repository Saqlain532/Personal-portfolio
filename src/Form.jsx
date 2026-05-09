import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react'
import { FaXmark } from 'react-icons/fa6'

export const Form = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    query: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  // Initialize EmailJS (get your public key from emailjs.com)
  React.useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Get current time
      const now = new Date()
      const time = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        {
          to_email: 'saqlainmustaque532@gmail.com', 
          from_name: formData.name,
          phone: formData.phone,
          message: formData.query,
          time: time,
          reply_to: formData.email || 'noreply@example.com'
        }
      )

      setStatus('success')
      setMessage('Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', phone: '', query: '' })
      setTimeout(() => {
        onClose()
        setStatus('idle')
      }, 2000)
    } catch (error) {
      setStatus('error')
      setMessage('Failed to send message. Please try again.')
      console.error('Error sending email:', error)
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <motion.div
        className='bg-surface border-2 border-border rounded-2xl w-full max-w-md p-8'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        {/* Header */}
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold text-text-main'>Get in Touch</h2>
          <button
            onClick={onClose}
            className='text-text-main hover:text-primary transition'
          >
            <FaXmark size={24} />
          </button>
        </div>

        {/* Form */}
        {status !== 'success' ? (
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Name */}
            <div>
              <label className='block text-sm font-semibold text-text-main mb-2'>
                Name
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Your name'
                className='w-full px-4 py-2 bg-base border-2 border-border rounded-lg text-text-main placeholder-text-muted focus:outline-none focus:border-primary transition'
              />
            </div>

            {/* Phone */}
            <div>
              <label className='block text-sm font-semibold text-text-main mb-2'>
                Contact Number
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder='Your contact number'
                className='w-full px-4 py-2 bg-base border-2 border-border rounded-lg text-text-main placeholder-text-muted focus:outline-none focus:border-primary transition'
              />
            </div>

            {/* Query */}
            <div>
              <label className='block text-sm font-semibold text-text-main mb-2'>
                Message
              </label>
              <textarea
                name='query'
                value={formData.query}
                onChange={handleChange}
                required
                placeholder='Your message or query'
                rows='5'
                className='w-full px-4 py-2 bg-base border-2 border-border rounded-lg text-text-main placeholder-text-muted focus:outline-none focus:border-primary transition resize-none'
              />
            </div>

            {/* Error message */}
            {status === 'error' && (
              <div className='p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-400 text-sm'>
                {message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type='submit'
              disabled={status === 'loading'}
              className='w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition'
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        ) : (
          <div className='text-center py-8'>
            <div className='text-green-500 text-5xl mb-4'>✓</div>
            <p className='text-text-main font-semibold'>{message}</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
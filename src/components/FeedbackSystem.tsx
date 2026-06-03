import { useState } from 'react'

interface FeedbackForm {
  name: string
  email: string
  type: 'correction' | 'suggestion' | 'success-story' | 'general'
  subject: string
  message: string
}

const FeedbackSystem = () => {
  const [form, setForm] = useState<FeedbackForm>({
    name: '',
    email: '',
    type: 'general',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In a real application, this would send data to a backend
    // For now, we'll simulate submission and show confirmation
    console.log('Feedback submitted:', form)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setForm({
        name: '',
        email: '',
        type: 'general',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-6">Feedback System</h2>
      
      {!submitted ? (
        <>
          <p className="text-[var(--text-secondary)] mb-6">
            Help us improve this career guidance platform by submitting corrections, suggestions, or sharing your success story. Your feedback is valuable to us and other users.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-secondary)] transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-secondary)] transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Feedback Type *
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-secondary)] transition-all"
              >
                <option value="general">General Feedback</option>
                <option value="correction">Correction / Update Information</option>
                <option value="suggestion">Suggestion for Improvement</option>
                <option value="success-story">Share Your Success Story</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-secondary)] transition-all"
                placeholder="Brief subject of your feedback"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border-2 border-[var(--border-color)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-secondary)] transition-all resize-none"
                placeholder="Please provide detailed feedback, corrections, or suggestions..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[var(--accent-secondary)] text-white rounded-lg font-bold hover:bg-[var(--accent-tertiary)] transition-all shadow-md"
            >
              Submit Feedback
            </button>
          </form>

          <div className="mt-6 p-4 bg-[var(--bg-tertiary)] rounded-lg border-l-4 border-[var(--accent-yellow)]">
            <h4 className="font-bold text-[var(--accent-primary)] mb-2">What We're Looking For</h4>
            <ul className="text-sm text-[var(--text-secondary)] space-y-1">
              <li>• Corrections to outdated information about courses, exams, or colleges</li>
              <li>• Suggestions for new career paths or educational opportunities</li>
              <li>• Your personal success story to inspire others</li>
              <li>• Feedback on improving the user experience</li>
              <li>• Reports of any bugs or issues you encounter</li>
            </ul>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[var(--accent-primary)] mb-2">Thank You!</h3>
          <p className="text-[var(--text-secondary)]">
            Your feedback has been submitted successfully. We appreciate your contribution to improving this platform.
          </p>
        </div>
      )}
    </div>
  )
}

export default FeedbackSystem

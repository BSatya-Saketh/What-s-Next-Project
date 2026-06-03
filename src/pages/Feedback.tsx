import FeedbackSystem from '../components/FeedbackSystem'

const Feedback = () => {
  return (
    <div className="space-y-5">
      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">Share Your Feedback</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Your feedback helps us improve this career guidance platform for everyone. Whether you've found an error, have a suggestion, or want to share your success story, we'd love to hear from you.
        </p>
        <p className="text-lg text-[var(--text-secondary)]">
          Please fill out the form below with your feedback. We review all submissions and use them to continuously improve the accuracy and usefulness of our content.
        </p>
      </section>

      <FeedbackSystem />
    </div>
  )
}

export default Feedback

const After10th = () => {
  return (
    <div className="space-y-5">
      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-4">Making the Right Choice After 10th Grade</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Completing 10th grade is a significant milestone in your academic journey. The path you choose now will influence your future career options. Take time to explore different streams based on your interests, aptitude, and career goals.
        </p>
        <p className="text-lg text-[var(--text-secondary)]">Below are the major educational and vocational paths available after 10th grade:</p>
      </section>

      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-6">Intermediate/Higher Secondary Education</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-6">
          The most common path after 10th grade is to continue with higher secondary education (11th and 12th). This prepares you for undergraduate studies and professional courses.
        </p>
        
        <div className="space-y-8">
          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-primary)]">
            <h3 className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg mb-4">🔬 Science Stream</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">MPC (Math, Physics, Chemistry)</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">BiPC (Biology, Physics, Chemistry)</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">MPBiPC</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Library Science</div>
            </div>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-secondary)]">
            <h3 className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg mb-4">💼 Commerce Stream</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">CEC</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">MEC (Math, Economics, Commerce)</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">CEC with Computer Science</div>
            </div>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-tertiary)]">
            <h3 className="bg-gradient-to-r from-[var(--accent-tertiary)] to-[var(--accent-primary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg mb-4">🎨 Arts/Humanities Stream</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">HEC</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">HPS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Languages & Literature</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-5 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Fine Arts & Performing Arts</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-6">Making Your Decision</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-6">When choosing your path after 10th grade, consider these factors:</p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-[var(--accent-primary)] mb-2 group-hover:scale-105 transition-transform">Personal Interests</h4>
            <p className="text-sm text-[var(--text-secondary)]">Choose a field that aligns with your passions and interests.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="font-bold text-[var(--accent-secondary)] mb-2 group-hover:scale-105 transition-transform">Aptitude</h4>
            <p className="text-sm text-[var(--text-secondary)]">Consider your natural abilities and strengths.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="font-bold text-[var(--accent-tertiary)] mb-2 group-hover:scale-105 transition-transform">Career Goals</h4>
            <p className="text-sm text-[var(--text-secondary)]">Research the educational requirements for your desired career.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-bold text-[var(--accent-primary)] mb-2 group-hover:scale-105 transition-transform">Financial Considerations</h4>
            <p className="text-sm text-[var(--text-secondary)]">Evaluate the cost of education and potential return on investment.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-3xl mb-3">⏰</div>
            <h4 className="font-bold text-[var(--accent-secondary)] mb-2 group-hover:scale-105 transition-transform">Time Commitment</h4>
            <p className="text-sm text-[var(--text-secondary)]">Consider how long you're willing to study before entering the workforce.</p>
          </div>
        </div>

        <p className="text-lg text-[var(--text-secondary)] mt-6 text-center">
          Remember that your choice after 10th grade is important but not irreversible. Many successful professionals have changed their educational and career paths later in life.
        </p>
      </section>
    </div>
  )
}

export default After10th

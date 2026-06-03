const Graduation = () => {
  return (
    <div className="space-y-5">
      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-4">Understanding Graduation Options</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Graduation, or undergraduate education, is a critical phase that builds upon your 12th-grade foundation and prepares you for specialized careers or further studies. The undergraduate program you choose significantly influences your career trajectory, skill development, and future opportunities.
        </p>
        <p className="text-lg text-[var(--text-secondary)]">
          In India, undergraduate programs typically span 3-5 years depending on the discipline. These programs offer in-depth knowledge in specific fields while developing critical thinking, analytical abilities, and professional skills essential for the workplace.
        </p>
      </section>

      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-6">Major Graduation Streams</h2>
        
        <div className="space-y-6">
          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎭</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Arts & Humanities</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Literature</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">History</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Psychology</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Sociology</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Philosophy</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Political Science</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Languages</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Foundation for civil services, teaching, journalism, social work, and public administration</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">💼</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Commerce & Management</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Accounting</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Finance</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">BBA</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Economics</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Marketing</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">HR</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Leads to careers in banking, corporate sector, finance, and entrepreneurship</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🔬</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-tertiary)] to-[var(--accent-primary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Science</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Physics</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Chemistry</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Biology</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Mathematics</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Computer Science</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Statistics</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Foundation for research, teaching, and technical careers in various industries</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">⚙️</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Engineering</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">CSE</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">IT</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Mechanical</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Civil</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Electrical</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Electronics</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">High demand in tech and manufacturing sectors</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🏥</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Medicine</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">MBBS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">BDS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">B.Pharma</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Nursing</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Allied Health</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Essential for healthcare careers, medical practice, and pharmaceutical industries</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">⚖️</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-tertiary)] to-[var(--accent-primary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Law</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Corporate Law</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Criminal Law</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Civil Law</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">International Law</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">IP Law</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Foundation for legal practice and corporate law careers</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-6">Choosing Your Graduation Program</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-6">When selecting your undergraduate program, consider these factors:</p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-3xl mb-3">❤️</div>
            <h4 className="font-bold text-[var(--accent-primary)] mb-2 group-hover:scale-105 transition-transform">Interest & Passion</h4>
            <p className="text-sm text-[var(--text-secondary)]">Choose a field you genuinely enjoy and are curious about.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-3xl mb-3">📊</div>
            <h4 className="font-bold text-[var(--accent-secondary)] mb-2 group-hover:scale-105 transition-transform">Career Opportunities</h4>
            <p className="text-sm text-[var(--text-secondary)]">Research job market demand and growth potential in the field.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-3xl mb-3">🏛️</div>
            <h4 className="font-bold text-[var(--accent-tertiary)] mb-2 group-hover:scale-105 transition-transform">Institution Quality</h4>
            <p className="text-sm text-[var(--text-secondary)]">Consider college reputation, placement records, and facilities.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-3xl mb-3">🎓</div>
            <h4 className="font-bold text-[var(--accent-primary)] mb-2 group-hover:scale-105 transition-transform">Future Education</h4>
            <p className="text-sm text-[var(--text-secondary)]">Consider postgraduate options and specialization opportunities.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-bold text-[var(--accent-secondary)] mb-2 group-hover:scale-105 transition-transform">Financial Planning</h4>
            <p className="text-sm text-[var(--text-secondary)]">Evaluate tuition costs, scholarships, and potential ROI.</p>
          </div>
        </div>

        <p className="text-lg text-[var(--text-secondary)] mt-6 text-center">
          Remember that while your undergraduate degree is important, it's just the beginning of your professional journey. Many successful professionals change fields or specialize further through additional qualifications and experience. Focus on developing transferable skills alongside domain knowledge to remain adaptable in an evolving job market.
        </p>
      </section>
    </div>
  )
}

export default Graduation

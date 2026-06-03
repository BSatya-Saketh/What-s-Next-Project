const AfterGraduation = () => {
  return (
    <div className="space-y-5">
      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-4">Your Next Steps After Graduation</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Completing your undergraduate degree opens doors to specialized career paths, advanced academic pursuits, and professional development opportunities. The choices you make at this stage can significantly impact your long-term career trajectory and earning potential.
        </p>
        <p className="text-lg text-[var(--text-secondary)]">
          Whether you're considering further education, entering the job market, or pursuing entrepreneurship, it's important to evaluate options that align with your academic background, career goals, and personal interests. Below are the major pathways available after graduation, organized by degree type.
        </p>
      </section>

      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-6">Available Career Paths</h2>
        
        <div className="space-y-6">
          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎓</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Post-Graduate Studies</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">MA</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">MSc</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">MCom</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">MBA</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">MTech</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">MCA</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Requires qualifying exams like CAT, GATE, NET, or institute-specific tests</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">💼</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Professional Practice</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Corporate</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Government</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Private Sector</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Startups</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Consulting</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Entry-level positions to gain practical experience in your field</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🔬</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-tertiary)] to-[var(--accent-primary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Research & Academia</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">PhD</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Research Fellowships</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">University Teaching</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Postdoc</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">For academic careers, research positions, or teaching at universities</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🏛️</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Civil Services</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">IAS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">IPS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">IFS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">State PSC</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Banking</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Requires UPSC Civil Services Examination or state PSC exams</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Entrepreneurship</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Startup</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Small Business</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Franchise</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">E-commerce</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Consulting</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Requires business planning, funding, market research, and execution skills</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">📜</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-tertiary)] to-[var(--accent-primary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Certifications & Skill Development</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">IT Certifications</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Management</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Finance</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Data Science</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">Digital Marketing</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Professional certifications to enhance employability and specialize in niche areas</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-6">Planning Your Post-Graduation Path</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-6">When deciding your path after graduation, consider these factors:</p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-[var(--accent-primary)] mb-2 group-hover:scale-105 transition-transform">Career Goals</h4>
            <p className="text-sm text-[var(--text-secondary)]">Define your long-term career objectives and align your path accordingly.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-bold text-[var(--accent-secondary)] mb-2 group-hover:scale-105 transition-transform">Financial Considerations</h4>
            <p className="text-sm text-[var(--text-secondary)]">Evaluate costs of further education vs. immediate employment income.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-3xl mb-3">📈</div>
            <h4 className="font-bold text-[var(--accent-tertiary)] mb-2 group-hover:scale-105 transition-transform">Market Demand</h4>
            <p className="text-sm text-[var(--text-secondary)]">Research industry trends and job market demand for your chosen path.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-3xl mb-3">⏰</div>
            <h4 className="font-bold text-[var(--accent-primary)] mb-2 group-hover:scale-105 transition-transform">Time Investment</h4>
            <p className="text-sm text-[var(--text-secondary)]">Consider the duration of further education vs. gaining work experience.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-3xl mb-3">👨‍👩‍👧</div>
            <h4 className="font-bold text-[var(--accent-secondary)] mb-2 group-hover:scale-105 transition-transform">Personal Circumstances</h4>
            <p className="text-sm text-[var(--text-secondary)]">Consider family responsibilities, location preferences, and personal commitments.</p>
          </div>
        </div>

        <p className="text-lg text-[var(--text-secondary)] mt-6 text-center">
          Remember that professional development is a continuous journey. Many successful professionals combine work experience with part-time or distance learning programs to advance their careers. Stay adaptable and open to new opportunities as industries and job markets evolve.
        </p>
      </section>
    </div>
  )
}

export default AfterGraduation

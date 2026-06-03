const After12th = () => {
  return (
    <div className="space-y-5">
      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-4">Planning Your Future After 12th Grade</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Completing 12th grade is a crucial milestone that opens doors to specialized higher education and career paths. The choices you make now will significantly influence your professional journey. Take time to explore options that align with your academic strengths, personal interests, and long-term goals.
        </p>
        <p className="text-lg text-[var(--text-secondary)]">Below are the major educational and career paths available after 12th grade, organized by stream.</p>
      </section>

      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-6">Available Career Paths</h2>
        
        <div className="space-y-6">
          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">⚙️</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Engineering</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">CSE</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">IT</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">ECE</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Mechanical</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Civil</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Electrical</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">Chemical</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Requires JEE Main/Advanced or state-level engineering entrance exams</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🏥</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Medical</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">MBBS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">BDS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">BAMS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">B.Pharma</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Nursing</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">Allied Health</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Requires NEET qualification for most medical courses</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎓</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-tertiary)] to-[var(--accent-primary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Degree Programs</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">BA</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">BSc</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">BCom</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">BBA</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">LLB</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">BCA</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Liberal arts, science, commerce, management, and law degrees for diverse career options</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">📊</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Professional Courses</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">CA</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">CS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">ICWA</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-primary)]">CMA</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Professional qualifications in finance and accounting</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🎖️</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Defense Services</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">NDA</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">CDS</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">AFCAT</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-secondary)]">SSB</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Entry into Indian Armed Forces (Army, Navy, Air Force). Requires NDA/CDS exam conducted by UPSC</p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="bg-gradient-to-r from-[var(--accent-tertiary)] to-[var(--accent-primary)] text-white px-6 py-3 rounded-xl inline-block text-xl font-bold shadow-lg">Teaching</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">D.Ed</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">B.Ed</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">M.Ed</div>
              <div className="bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-hover)] text-[#333] px-4 py-2 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[var(--accent-tertiary)]">NET</div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">Education diplomas and degrees for teaching careers in schools and educational institutions</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-6">Making Your Decision</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-6">When choosing your path after 12th grade, consider these factors:</p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-3xl mb-3">📈</div>
            <h4 className="font-bold text-[var(--accent-primary)] mb-2 group-hover:scale-105 transition-transform">Academic Performance</h4>
            <p className="text-sm text-[var(--text-secondary)]">Evaluate your 12th grade marks and subject strengths for eligibility.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-3xl mb-3">📝</div>
            <h4 className="font-bold text-[var(--accent-secondary)] mb-2 group-hover:scale-105 transition-transform">Entrance Exam Preparation</h4>
            <p className="text-sm text-[var(--text-secondary)]">Consider time needed for JEE, NEET, CAT, or other competitive exams.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-tertiary)] group">
            <div className="text-3xl mb-3">💼</div>
            <h4 className="font-bold text-[var(--accent-tertiary)] mb-2 group-hover:scale-105 transition-transform">Career Prospects</h4>
            <p className="text-sm text-[var(--text-secondary)]">Research job opportunities and growth potential in your chosen field.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-primary)] group">
            <div className="text-3xl mb-3">💵</div>
            <h4 className="font-bold text-[var(--accent-primary)] mb-2 group-hover:scale-105 transition-transform">Financial Investment</h4>
            <p className="text-sm text-[var(--text-secondary)]">Consider tuition fees, living expenses, and potential ROI of education.</p>
          </div>
          <div className="flex-1 min-w-[220px] max-w-[320px] bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] group">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-[var(--accent-secondary)] mb-2 group-hover:scale-105 transition-transform">Personal Goals</h4>
            <p className="text-sm text-[var(--text-secondary)]">Align your choice with long-term career aspirations and life goals.</p>
          </div>
        </div>

        <p className="text-lg text-[var(--text-secondary)] mt-6 text-center">
          Remember that while your choice after 12th is important, many successful professionals change directions during their careers. Focus on building transferable skills and maintaining a growth mindset regardless of your chosen path.
        </p>
      </section>
    </div>
  )
}

export default After12th

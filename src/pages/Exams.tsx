const Exams = () => {
  return (
    <div className="space-y-5">
      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">National & State Level Entrance Exams</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Entrance exams are crucial gateways to prestigious educational institutions in India. These exams evaluate students' aptitude, knowledge, and problem-solving abilities to determine their eligibility for various undergraduate programs. Preparing for these exams requires dedication, strategic planning, and thorough understanding of the syllabus.
        </p>
      </section>

      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[var(--accent-primary)] text-white">
              <th className="px-4 py-3 text-left font-bold uppercase text-sm">SI No</th>
              <th className="px-4 py-3 text-left font-bold uppercase text-sm">Name of The Examination<br/>Conducted By</th>
              <th className="px-4 py-3 text-left font-bold uppercase text-sm">Application Invited For</th>
              <th className="px-4 py-3 text-left font-bold uppercase text-sm">Notification Month</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">1</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">JEE Main<br/>NTA</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">B.E/B.Tech/B.Arch/B.Planning</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">November & December</td>
            </tr>
            <tr className="bg-[var(--table-row-even)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">2</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">JEE Advanced<br/>IITs</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">B.E/B.Tech</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">May</td>
            </tr>
            <tr className="bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">3</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">NEET<br/>NTA</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">MBBS/BDS/BAMS/BUMS/BSMS/BHMS</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">December</td>
            </tr>
            <tr className="bg-[var(--table-row-even)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">4</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">CLAT<br/>Consortium of NLUs</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">BA LLB, BBA LLB, LLM</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">August</td>
            </tr>
            <tr className="bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">5</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">CAT<br/>IIMs</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">MBA/PGDM</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">August</td>
            </tr>
            <tr className="bg-[var(--table-row-even)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">6</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">XAT<br/>XLRI</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">MBA/PGDM</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">August</td>
            </tr>
            <tr className="bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">7</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">MAT<br/>AIMA</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">MBA/PGDM</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">Throughout the year</td>
            </tr>
            <tr className="bg-[var(--table-row-even)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">8</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">CMAT<br/>NTA</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">MBA/PGDM</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">February & March</td>
            </tr>
            <tr className="bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">9</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">NATA<br/>Council of Architecture</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">B.Arch</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">March</td>
            </tr>
            <tr className="bg-[var(--table-row-even)] hover:bg-[var(--bg-tertiary)] transition-colors">
              <td className="px-4 py-3 border-b border-[var(--border-color)]">10</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">NDA<br/>UPSC</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">Army, Navy, Air Force</td>
              <td className="px-4 py-3 border-b border-[var(--border-color)]">June & December</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="bg-[var(--bg-tertiary)] p-8 rounded-lg shadow-lg border-l-4 border-[var(--accent-primary)]">
        <h3 className="text-xl font-bold text-[var(--accent-primary)] mb-4">Exam Preparation Tips</h3>
        <ul className="text-left space-y-3 text-[var(--text-secondary)]">
          <li className="flex items-start">
            <span className="text-[var(--accent-secondary)] font-bold mr-2">✓</span>
            <span>Start preparation early and create a structured study plan</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--accent-secondary)] font-bold mr-2">✓</span>
            <span>Understand the exam pattern and syllabus thoroughly</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--accent-secondary)] font-bold mr-2">✓</span>
            <span>Practice previous year question papers and mock tests</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--accent-secondary)] font-bold mr-2">✓</span>
            <span>Focus on weak areas while maintaining strengths</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--accent-secondary)] font-bold mr-2">✓</span>
            <span>Stay updated with exam notifications and important dates</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--accent-secondary)] font-bold mr-2">✓</span>
            <span>Maintain physical and mental health during preparation</span>
          </li>
        </ul>
      </section>

      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">Choosing the Right Exam</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">When selecting which entrance exams to attempt, consider:</p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex-1 min-w-[200px] max-w-[300px] bg-[var(--bg-secondary)] p-5 rounded-lg shadow border-t-4 border-[var(--accent-primary)] hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-[var(--accent-primary)] mb-2">Career Alignment</h4>
            <p className="text-sm text-[var(--text-secondary)]">Choose exams that align with your desired career path and field of study.</p>
          </div>
          <div className="flex-1 min-w-[200px] max-w-[300px] bg-[var(--bg-secondary)] p-5 rounded-lg shadow border-t-4 border-[var(--accent-primary)] hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-[var(--accent-primary)] mb-2">Eligibility Criteria</h4>
            <p className="text-sm text-[var(--text-secondary)]">Verify you meet the educational qualification and age requirements.</p>
          </div>
          <div className="flex-1 min-w-[200px] max-w-[300px] bg-[var(--bg-secondary)] p-5 rounded-lg shadow border-t-4 border-[var(--accent-primary)] hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-[var(--accent-primary)] mb-2">Institution Quality</h4>
            <p className="text-sm text-[var(--text-secondary)]">Consider the reputation, placement records, and facilities of institutions accepting these exam scores.</p>
          </div>
          <div className="flex-1 min-w-[200px] max-w-[300px] bg-[var(--bg-secondary)] p-5 rounded-lg shadow border-t-4 border-[var(--accent-primary)] hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-[var(--accent-primary)] mb-2">Preparation Time</h4>
            <p className="text-sm text-[var(--text-secondary)]">Evaluate if you have sufficient time to prepare for multiple exams effectively.</p>
          </div>
          <div className="flex-1 min-w-[200px] max-w-[300px] bg-[var(--bg-secondary)] p-5 rounded-lg shadow border-t-4 border-[var(--accent-primary)] hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-[var(--accent-primary)] mb-2">Exam Overlap</h4>
            <p className="text-sm text-[var(--text-secondary)]">Check exam dates to avoid conflicts and manage your preparation schedule.</p>
          </div>
        </div>

        <p className="text-lg text-[var(--text-secondary)] mt-6">
          Remember that entrance exams are just one pathway to your career. Choose wisely based on your strengths and interests rather than following trends or peer pressure.
        </p>
      </section>
    </div>
  )
}

export default Exams

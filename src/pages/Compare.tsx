import ComparisonTool from '../components/ComparisonTool'
import CollegeRankings from '../components/CollegeRankings'

const Compare = () => {
  return (
    <div className="space-y-5">
      <section className="bg-[var(--bg-secondary)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-4 pb-2 border-b-4 border-[var(--accent-secondary)] inline-block">Compare Career Paths</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-4">
          Use this tool to compare different career options side-by-side. Select up to 3 career paths to analyze their duration, eligibility, salary prospects, and career scope.
        </p>
        <p className="text-lg text-[var(--text-secondary)]">
          This comparison will help you make informed decisions about your educational and career choices by highlighting the key differences between various options.
        </p>
      </section>

      <ComparisonTool />
      
      <CollegeRankings />
    </div>
  )
}

export default Compare

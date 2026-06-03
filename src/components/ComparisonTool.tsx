import { useState } from 'react'
import { careerPathsData, CareerOption } from '../data/careerPaths'

const ComparisonTool = () => {
  const [selectedOptions, setSelectedOptions] = useState<CareerOption[]>([])
  const [showSelector, setShowSelector] = useState(true)

  // Flatten all career options from all stages
  const allOptions = [
    ...careerPathsData.after10th.branches.flatMap(b => b.options),
    ...careerPathsData.after12th.branches.flatMap(b => b.options),
    ...careerPathsData.graduation.branches.flatMap(b => b.options),
    ...careerPathsData.afterGraduation.branches.flatMap(b => b.options)
  ]

  const toggleOption = (option: CareerOption) => {
    setSelectedOptions(prev => {
      const exists = prev.find(o => o.id === option.id)
      if (exists) {
        return prev.filter(o => o.id !== option.id)
      }
      if (prev.length >= 3) {
        return prev // Limit to 3 comparisons
      }
      return [...prev, option]
    })
  }

  const removeOption = (optionId: string) => {
    setSelectedOptions(prev => prev.filter(o => o.id !== optionId))
  }

  const clearAll = () => {
    setSelectedOptions([])
  }

  return (
    <div className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[var(--accent-primary)]">Career Comparison Tool</h2>
        <button
          onClick={() => setShowSelector(!showSelector)}
          className="px-4 py-2 bg-[var(--accent-secondary)] text-white rounded-full font-medium hover:bg-[var(--accent-tertiary)] transition-all"
        >
          {showSelector ? 'Hide Selector' : 'Add to Compare'}
        </button>
      </div>

      {showSelector && (
        <div className="mb-6 p-4 bg-[var(--bg-primary)] rounded-lg">
          <p className="text-sm text-[var(--text-secondary)] mb-3">
            Select up to 3 career options to compare ({selectedOptions.length}/3 selected)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
            {allOptions.map(option => (
              <button
                key={option.id}
                onClick={() => toggleOption(option)}
                disabled={selectedOptions.length >= 3 && !selectedOptions.find(o => o.id === option.id)}
                className={`p-3 rounded-lg text-left transition-all ${
                  selectedOptions.find(o => o.id === option.id)
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                } ${selectedOptions.length >= 3 && !selectedOptions.find(o => o.id === option.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="font-medium text-sm">{option.title}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedOptions.length > 0 && (
        <>
          <div className="flex items-center justify-between mb-4">
            <p className="text-[var(--text-secondary)]">Comparing {selectedOptions.length} career options</p>
            <button
              onClick={clearAll}
              className="text-sm text-[var(--accent-secondary)] hover:text-[var(--accent-primary)] underline"
            >
              Clear All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--accent-primary)] text-white">
                  <th className="p-3 text-left border-r border-white/20">Criteria</th>
                  {selectedOptions.map(option => (
                    <th key={option.id} className="p-3 text-left border-r border-white/20 last:border-r-0">
                      {option.title}
                      <button
                        onClick={() => removeOption(option.id)}
                        className="ml-2 text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30"
                      >
                        Remove
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[var(--bg-primary)]">
                  <td className="p-3 font-medium text-[var(--accent-secondary)] border-r border-[var(--border-color)]">Description</td>
                  {selectedOptions.map(option => (
                    <td key={option.id} className="p-3 text-[var(--text-primary)] border-r border-[var(--border-color)] last:border-r-0">
                      {option.description}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[var(--bg-tertiary)]">
                  <td className="p-3 font-medium text-[var(--accent-secondary)] border-r border-[var(--border-color)]">Duration</td>
                  {selectedOptions.map(option => (
                    <td key={option.id} className="p-3 text-[var(--text-primary)] border-r border-[var(--border-color)] last:border-r-0">
                      {option.duration || 'N/A'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[var(--bg-primary)]">
                  <td className="p-3 font-medium text-[var(--accent-secondary)] border-r border-[var(--border-color)]">Eligibility</td>
                  {selectedOptions.map(option => (
                    <td key={option.id} className="p-3 text-[var(--text-primary)] border-r border-[var(--border-color)] last:border-r-0">
                      {option.eligibility || 'N/A'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[var(--bg-tertiary)]">
                  <td className="p-3 font-medium text-[var(--accent-secondary)] border-r border-[var(--border-color)]">Career Scope</td>
                  {selectedOptions.map(option => (
                    <td key={option.id} className="p-3 text-[var(--text-primary)] border-r border-[var(--border-color)] last:border-r-0">
                      {option.scope || 'N/A'}
                    </td>
                  ))}
                </tr>
                {selectedOptions.some(o => o.salary) && (
                  <>
                    <tr className="bg-[var(--bg-primary)]">
                      <td className="p-3 font-medium text-[var(--accent-secondary)] border-r border-[var(--border-color)]">Entry Level Salary</td>
                      {selectedOptions.map(option => (
                        <td key={option.id} className="p-3 text-[var(--text-primary)] border-r border-[var(--border-color)] last:border-r-0">
                          {option.salary?.entryLevel || 'N/A'}
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-[var(--bg-tertiary)]">
                      <td className="p-3 font-medium text-[var(--accent-secondary)] border-r border-[var(--border-color)]">Mid Level Salary</td>
                      {selectedOptions.map(option => (
                        <td key={option.id} className="p-3 text-[var(--text-primary)] border-r border-[var(--border-color)] last:border-r-0">
                          {option.salary?.midLevel || 'N/A'}
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-[var(--bg-primary)]">
                      <td className="p-3 font-medium text-[var(--accent-secondary)] border-r border-[var(--border-color)]">Senior Level Salary</td>
                      {selectedOptions.map(option => (
                        <td key={option.id} className="p-3 text-[var(--text-primary)] border-r border-[var(--border-color)] last:border-r-0">
                          {option.salary?.seniorLevel || 'N/A'}
                        </td>
                      ))}
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {selectedOptions.length === 0 && (
        <div className="text-center py-8 text-[var(--text-secondary)]">
          <p className="text-lg">No career options selected for comparison</p>
          <p className="text-sm mt-2">Click "Add to Compare" to select career options</p>
        </div>
      )}
    </div>
  )
}

export default ComparisonTool

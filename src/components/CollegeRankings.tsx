import { useState } from 'react'
import { careerPathsData, CareerOption } from '../data/careerPaths'

interface CollegeRankingsProps {
  optionId?: string
}

const CollegeRankings = ({ optionId }: CollegeRankingsProps) => {
  const [selectedOption, setSelectedOption] = useState<CareerOption | null>(
    optionId ? findOptionById(optionId) : null
  )

  function findOptionById(id: string): CareerOption | null {
    for (const stageKey of Object.keys(careerPathsData)) {
      if (stageKey === 'exams') continue
      const stage = careerPathsData[stageKey as keyof typeof careerPathsData] as any
      for (const branch of stage.branches) {
        const option = branch.options.find((o: CareerOption) => o.id === id)
        if (option) return option
      }
    }
    return null
  }

  // Get all options with college data
  const optionsWithColleges = [
    ...careerPathsData.after10th.branches.flatMap(b => b.options.filter(o => o.colleges && o.colleges.length > 0)),
    ...careerPathsData.after12th.branches.flatMap(b => b.options.filter(o => o.colleges && o.colleges.length > 0)),
    ...careerPathsData.graduation.branches.flatMap(b => b.options.filter(o => o.colleges && o.colleges.length > 0)),
    ...careerPathsData.afterGraduation.branches.flatMap(b => b.options.filter(o => o.colleges && o.colleges.length > 0))
  ]

  const currentColleges = selectedOption?.colleges || []

  return (
    <div className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-6">College Rankings</h2>

      {!selectedOption && (
        <div className="mb-6">
          <p className="text-[var(--text-secondary)] mb-4">Select a career option to view top colleges:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {optionsWithColleges.map(option => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option)}
                className="p-4 bg-[var(--bg-primary)] rounded-lg text-left hover:bg-[var(--bg-tertiary)] transition-all border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)]"
              >
                <div className="font-bold text-[var(--accent-primary)]">{option.title}</div>
                <div className="text-sm text-[var(--text-secondary)] mt-1">
                  {option.colleges?.length} top colleges
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedOption && (
        <>
          <div className="mb-6 p-4 bg-[var(--bg-primary)] rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[var(--accent-primary)]">{selectedOption.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{selectedOption.description}</p>
              </div>
              <button
                onClick={() => setSelectedOption(null)}
                className="px-4 py-2 bg-[var(--accent-secondary)] text-white rounded-full font-medium hover:bg-[var(--accent-tertiary)] transition-all"
              >
                Change Selection
              </button>
            </div>
          </div>

          {currentColleges.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[var(--accent-primary)] text-white">
                    <th className="p-3 text-left border-r border-white/20">Rank</th>
                    <th className="p-3 text-left border-r border-white/20">College Name</th>
                    <th className="p-3 text-left border-r border-white/20">Location</th>
                    <th className="p-3 text-left border-r border-white/20">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {currentColleges.map((college, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-tertiary)]'
                      } hover:bg-[var(--bg-secondary)] transition-colors`}
                    >
                      <td className="p-3 border-r border-[var(--border-color)]">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent-secondary)] text-white font-bold">
                          {college.ranking || index + 1}
                        </span>
                      </td>
                      <td className="p-3 font-medium text-[var(--text-primary)] border-r border-[var(--border-color)]">
                        {college.name}
                      </td>
                      <td className="p-3 text-[var(--text-secondary)] border-r border-[var(--border-color)]">
                        {college.location}
                      </td>
                      <td className="p-3 border-r border-[var(--border-color)]">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            college.type === 'Government'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {college.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-[var(--text-secondary)]">
              <p>No college rankings data available for this option.</p>
            </div>
          )}

          <div className="mt-6 p-4 bg-[var(--bg-tertiary)] rounded-lg border-l-4 border-[var(--accent-yellow)]">
            <h4 className="font-bold text-[var(--accent-primary)] mb-2">College Selection Tips</h4>
            <ul className="text-sm text-[var(--text-secondary)] space-y-2">
              <li>• Consider both government and private institutions based on your preferences</li>
              <li>• Look beyond rankings - consider placement records, faculty, and infrastructure</li>
              <li>• Check entrance exam requirements and cutoff scores for each college</li>
              <li>• Consider location and living costs when making your decision</li>
              <li>• Research alumni networks and industry connections</li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default CollegeRankings

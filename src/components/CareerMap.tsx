import { useState } from 'react'
import { careerPathsData, CareerBranch, CareerOption } from '../data/careerPaths'

interface CareerMapProps {
  stageId?: string
}

const CareerMap = ({ stageId }: CareerMapProps) => {
  const [selectedStage, setSelectedStage] = useState<string>(stageId || 'after-10th')
  const [expandedBranches, setExpandedBranches] = useState<Set<string>>(new Set())
  const [selectedOption, setSelectedOption] = useState<CareerOption | null>(null)

  const stages = [
    { id: 'after-10th', title: 'After 10th', data: careerPathsData.after10th },
    { id: 'after-12th', title: 'After 12th', data: careerPathsData.after12th },
    { id: 'graduation', title: 'Graduation', data: careerPathsData.graduation },
    { id: 'after-graduation', title: 'After Graduation', data: careerPathsData.afterGraduation }
  ]

  const currentStage = stages.find(s => s.id === selectedStage)?.data

  const toggleBranch = (branchId: string) => {
    setExpandedBranches(prev => {
      const newSet = new Set(prev)
      if (newSet.has(branchId)) {
        newSet.delete(branchId)
      } else {
        newSet.add(branchId)
      }
      return newSet
    })
  }

  const selectOption = (option: CareerOption) => {
    setSelectedOption(option)
  }

  return (
    <div className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-6">Visual Career Map</h2>
      
      {/* Stage Selector */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {stages.map(stage => (
          <button
            key={stage.id}
            onClick={() => setSelectedStage(stage.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedStage === stage.id
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
            }`}
          >
            {stage.title}
          </button>
        ))}
      </div>

      {/* Career Flowchart */}
      <div className="space-y-4">
        {currentStage?.branches.map((branch: CareerBranch) => (
          <div key={branch.id} className="relative">
            {/* Branch Node */}
            <div
              onClick={() => toggleBranch(branch.id)}
              className="bg-[var(--bg-primary)] border-2 border-[var(--accent-secondary)] rounded-lg p-4 cursor-pointer hover:bg-[var(--bg-tertiary)] transition-all shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-[var(--accent-primary)] text-lg">{branch.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{branch.description}</p>
                </div>
                <div className="text-2xl">
                  {expandedBranches.has(branch.id) ? '▼' : '▶'}
                </div>
              </div>
            </div>

            {/* Connector Line */}
            {expandedBranches.has(branch.id) && (
              <div className="ml-8 mt-2 relative">
                <div className="absolute left-[-16px] top-0 bottom-0 w-0.5 bg-[var(--accent-secondary)]"></div>
                
                {/* Career Options */}
                <div className="space-y-3 mt-4">
                  {branch.options.map((option: CareerOption) => (
                    <div
                      key={option.id}
                      onClick={() => selectOption(option)}
                      className={`relative bg-[var(--bg-tertiary)] border-l-4 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedOption?.id === option.id
                          ? 'border-[var(--accent-primary)] bg-[var(--bg-primary)]'
                          : 'border-[var(--accent-tertiary)] hover:bg-[var(--bg-primary)]'
                      }`}
                    >
                      {/* Connector from branch */}
                      <div className="absolute left-[-20px] top-1/2 w-4 h-0.5 bg-[var(--accent-secondary)]"></div>
                      
                      <h4 className="font-bold text-[var(--text-primary)]">{option.title}</h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{option.description}</p>
                      
                      {option.duration && (
                        <div className="mt-2 text-xs text-[var(--accent-secondary)]">
                          <span className="font-medium">Duration:</span> {option.duration}
                        </div>
                      )}
                      
                      {option.eligibility && (
                        <div className="mt-1 text-xs text-[var(--accent-secondary)]">
                          <span className="font-medium">Eligibility:</span> {option.eligibility}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Selected Option Details */}
      {selectedOption && (
        <div className="mt-6 p-6 bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[var(--accent-primary)] mb-4">{selectedOption.title}</h3>
          
          <p className="text-[var(--text-primary)] mb-4">{selectedOption.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {selectedOption.duration && (
              <div className="bg-[var(--bg-tertiary)] p-3 rounded-lg">
                <div className="text-sm font-medium text-[var(--accent-secondary)]">Duration</div>
                <div className="text-[var(--text-primary)]">{selectedOption.duration}</div>
              </div>
            )}
            
            {selectedOption.eligibility && (
              <div className="bg-[var(--bg-tertiary)] p-3 rounded-lg">
                <div className="text-sm font-medium text-[var(--accent-secondary)]">Eligibility</div>
                <div className="text-[var(--text-primary)]">{selectedOption.eligibility}</div>
              </div>
            )}
            
            {selectedOption.scope && (
              <div className="bg-[var(--bg-tertiary)] p-3 rounded-lg md:col-span-2">
                <div className="text-sm font-medium text-[var(--accent-secondary)]">Career Scope</div>
                <div className="text-[var(--text-primary)]">{selectedOption.scope}</div>
              </div>
            )}
            
            {selectedOption.salary && (
              <div className="bg-[var(--bg-tertiary)] p-3 rounded-lg md:col-span-2">
                <div className="text-sm font-medium text-[var(--accent-secondary)]">Salary Range</div>
                <div className="text-[var(--text-primary)] mt-1">
                  <div>Entry Level: {selectedOption.salary.entryLevel}</div>
                  <div>Mid Level: {selectedOption.salary.midLevel}</div>
                  <div>Senior Level: {selectedOption.salary.seniorLevel}</div>
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setSelectedOption(null)}
            className="mt-4 px-4 py-2 bg-[var(--accent-secondary)] text-white rounded-full font-medium hover:bg-[var(--accent-tertiary)] transition-all"
          >
            Close Details
          </button>
        </div>
      )}
    </div>
  )
}

export default CareerMap

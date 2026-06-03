import { useState, useMemo } from 'react'
import { careerPathsData } from '../data/careerPaths'

interface SearchResult {
  title: string
  description: string
  page: string
  category: string
  score?: number
}

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  // Dynamically build search index from career paths data
  const contentIndex = useMemo(() => {
    const index: SearchResult[] = []

    // Index career options from all stages
    Object.entries(careerPathsData).forEach(([stageKey, stageData]) => {
      if (stageKey === 'exams') {
        // Index exams
        const exams = stageData as any
        exams.forEach((exam: any) => {
          index.push({
            title: exam.name,
            description: exam.description,
            page: '/exams',
            category: 'Entrance Exams'
          })
        })
      } else {
        // Index career branches and options
        const stage = stageData as any
        stage.branches.forEach((branch: any) => {
          branch.options.forEach((option: any) => {
            index.push({
              title: option.title,
              description: option.description,
              page: `/${stageKey}`,
              category: stage.title
            })
          })
        })
      }
    })

    return index
  }, [])

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery || searchQuery.trim().length < 2) {
      setResults([])
      return
    }

    const terms = searchQuery.toLowerCase().trim().split(/\s+/)
    const searchResults: SearchResult[] = []

    contentIndex.forEach(item => {
      const titleLower = item.title.toLowerCase()
      const descriptionLower = item.description.toLowerCase()
      const categoryLower = item.category.toLowerCase()

      let score = 0

      terms.forEach(term => {
        if (titleLower.includes(term)) score += 10
        if (descriptionLower.includes(term)) score += 5
        if (categoryLower.includes(term)) score += 3
      })

      if (score > 0) {
        searchResults.push({ ...item, score })
      }
    })

    searchResults.sort((a, b) => (b.score || 0) - (a.score || 0))
    setResults(searchResults.slice(0, 10))
  }

  return (
    <div className="bg-[var(--bg-secondary)] p-5 rounded-lg shadow-lg">
      <div className="flex gap-3 max-w-xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            handleSearch(e.target.value)
          }}
          placeholder="Search career paths, courses, exams..."
          className="flex-1 px-5 py-3 border-2 border-[var(--border-color)] rounded-full bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-secondary)] transition-all"
        />
        <button
          onClick={() => handleSearch(query)}
          className="bg-[var(--accent-secondary)] text-white px-6 py-3 rounded-full font-bold hover:bg-[var(--accent-tertiary)] transition-all shadow"
        >
          Search
        </button>
      </div>
      
      {results.length > 0 && (
        <div className="mt-5 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={index}
              onClick={() => window.location.href = result.page}
              className="p-4 mb-3 bg-[var(--bg-primary)] rounded-lg border-l-4 border-[var(--accent-secondary)] hover:bg-[var(--bg-tertiary)] hover:translate-x-1 transition-all cursor-pointer"
            >
              <div className="font-bold text-[var(--accent-primary)]">{result.title}</div>
              <div className="text-sm text-[var(--text-secondary)] mt-1">{result.description}</div>
              <div className="text-xs text-[var(--accent-secondary)] mt-2 italic">
                Found in: {result.category}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {query.length >= 2 && results.length === 0 && (
        <div className="mt-5 text-center text-[var(--text-secondary)] italic">
          No results found. Try different keywords.
        </div>
      )}
    </div>
  )
}

export default Search

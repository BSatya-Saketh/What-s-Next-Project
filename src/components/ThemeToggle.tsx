import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-5 right-5 bg-[var(--bg-secondary)] border-2 border-[var(--accent-secondary)] text-[var(--text-primary)] px-4 py-2 rounded-full font-bold hover:bg-[var(--accent-secondary)] hover:text-white transition-all flex items-center gap-2 shadow-lg"
      aria-label="Toggle dark mode"
    >
      <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
      <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  )
}

export default ThemeToggle

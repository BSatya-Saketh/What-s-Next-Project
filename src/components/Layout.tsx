import { Outlet, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import Search from './Search'

const Layout = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <header className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] text-white py-6 rounded-lg shadow-lg mb-5 relative">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-2xl font-bold mb-2">Career Guidance: What Next?</h1>
          <p className="text-lg opacity-90 max-w-2xl">Explore Educational and Career Opportunities After 10th, 12th, and Graduation</p>
          <ThemeToggle />
        </div>
      </header>
      
      <nav className="max-w-6xl mx-auto px-5 mb-5">
        <ul className="flex flex-wrap justify-center gap-4">
          <li><Link to="/" className="bg-[var(--accent-secondary)] text-white px-4 py-2 rounded shadow hover:bg-[var(--accent-tertiary)] transition-all">Home</Link></li>
          <li><Link to="/after10th" className="bg-[var(--accent-secondary)] text-white px-4 py-2 rounded shadow hover:bg-[var(--accent-tertiary)] transition-all">After 10th</Link></li>
          <li><Link to="/after12th" className="bg-[var(--accent-secondary)] text-white px-4 py-2 rounded shadow hover:bg-[var(--accent-tertiary)] transition-all">After 12th</Link></li>
          <li><Link to="/graduation" className="bg-[var(--accent-secondary)] text-white px-4 py-2 rounded shadow hover:bg-[var(--accent-tertiary)] transition-all">Graduation</Link></li>
          <li><Link to="/afterGraduation" className="bg-[var(--accent-secondary)] text-white px-4 py-2 rounded shadow hover:bg-[var(--accent-tertiary)] transition-all">After Graduation</Link></li>
          <li><Link to="/exams" className="bg-[var(--accent-secondary)] text-white px-4 py-2 rounded shadow hover:bg-[var(--accent-tertiary)] transition-all">Entrance Exams</Link></li>
          <li><Link to="/compare" className="bg-[var(--accent-yellow)] text-[var(--text-primary)] px-4 py-2 rounded shadow hover:bg-[var(--accent-yellow-hover)] transition-all font-bold">Compare</Link></li>
          <li><Link to="/feedback" className="bg-[var(--accent-primary)] text-white px-4 py-2 rounded shadow hover:bg-[var(--accent-dark)] transition-all">Feedback</Link></li>
        </ul>
      </nav>
      
      <div className="max-w-6xl mx-auto px-5 mb-5">
        <Search />
      </div>
      
      <main className="max-w-6xl mx-auto px-5">
        <Outlet />
      </main>
      
      <footer className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] text-white py-4 rounded-lg shadow-lg mt-8">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <p>&copy; 2025 Career Guide | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

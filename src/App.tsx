import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import After10th from './pages/After10th'
import After12th from './pages/After12th'
import Graduation from './pages/Graduation'
import AfterGraduation from './pages/AfterGraduation'
import Exams from './pages/Exams'
import Compare from './pages/Compare'
import Feedback from './pages/Feedback'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="after10th" element={<After10th />} />
          <Route path="after12th" element={<After12th />} />
          <Route path="graduation" element={<Graduation />} />
          <Route path="afterGraduation" element={<AfterGraduation />} />
          <Route path="exams" element={<Exams />} />
          <Route path="compare" element={<Compare />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

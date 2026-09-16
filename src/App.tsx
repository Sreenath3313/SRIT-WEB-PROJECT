import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DepartmentPage from './pages/DepartmentPage'
import AllDepartmentsPage from './pages/AllDepartmentsPage'
import MessageFromHead from './pages/MessageFromHead'
import NdliClubPage from './pages/NdliClubPage'
import WomenEmpowermentCellPage from './pages/WomenEmpowermentCellPage'
import { useReveal } from './hooks/useReveal'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useReveal(pathname)
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
      return;
    }
    
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="w-full overflow-x-hidden flex flex-col min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/departments" element={<AllDepartmentsPage />} />
          <Route path="/department/:slug/*" element={<DepartmentPage />} />
          <Route path="/message-from-head" element={<MessageFromHead />} />
          <Route path="/ndli-club" element={<NdliClubPage />} />
          <Route path="/women-empowerment-cell" element={<WomenEmpowermentCellPage />} />
          <Route path="/women-empowerment" element={<WomenEmpowermentCellPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

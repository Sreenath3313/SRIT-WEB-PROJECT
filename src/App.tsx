import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import DepartmentPage from './pages/DepartmentPage'
import AllDepartmentsPage from './pages/AllDepartmentsPage'
import MessageFromHead from './pages/MessageFromHead'
import NdliClubPage from './pages/NdliClubPage'
import WomenEmpowermentCellPage from './pages/WomenEmpowermentCellPage'
import { useReveal } from './hooks/useReveal'
import OverviewPage from './pages/about/OverviewPage';
import VisionMissionPage from './pages/about/VisionMissionPage';
import ChairpersonPage from './pages/about/ChairpersonPage';
import SecretaryPage from './pages/about/SecretaryPage';
import PrincipalPage from './pages/about/PrincipalPage';
import GoverningBodyPage from './pages/about/GoverningBodyPage';
import PoliciesDocumentsPage from './pages/about/PoliciesDocumentsPage';
import AwardsAchievementsPage from './pages/about/AwardsAchievementsPage';
import AcademicCouncilPage from './pages/about/AcademicCouncilPage';
import FinanceCommitteePage from './pages/about/FinanceCommitteePage';
import OrganizationChartPage from './pages/about/OrganizationChartPage';
import MousPage from './pages/about/MousPage';
import AffiliationsAccreditationsPage from './pages/about/AffiliationsAccreditationsPage';
import MilestonesPage from './pages/about/MilestonesPage';
import SopPage from './pages/about/SopPage';
import StrategicPlanPage from './pages/about/StrategicPlanPage';
import InformationPage from './pages/InformationPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
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
    
    // Only scroll to top if this is a new navigation, not a back/forward (POP)
    if (navigationType !== 'POP') {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navigationType])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="w-full overflow-x-clip flex flex-col min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route path="/about/overview" element={<OverviewPage />} />
          <Route path="/about/vision-mission" element={<VisionMissionPage />} />
          <Route path="/about/chairperson" element={<ChairpersonPage />} />
          <Route path="/about/secretary" element={<SecretaryPage />} />
          <Route path="/about/principal" element={<PrincipalPage />} />
          <Route path="/about/governing-body" element={<GoverningBodyPage />} />
          <Route path="/about/policies-documents" element={<PoliciesDocumentsPage />} />
          <Route path="/about/awards-achievements" element={<AwardsAchievementsPage />} />
          <Route path="/about/academic-council" element={<AcademicCouncilPage />} />
          <Route path="/about/finance-committee" element={<FinanceCommitteePage />} />
          <Route path="/about/organization-chart" element={<OrganizationChartPage />} />
          <Route path="/about/mous" element={<MousPage />} />
          <Route path="/about/affiliations-accreditations" element={<AffiliationsAccreditationsPage />} />
          <Route path="/about/milestones" element={<MilestonesPage />} />
          <Route path="/about/standard-operating-procedures" element={<SopPage />} />
          <Route path="/about/institutional-strategic-plan" element={<StrategicPlanPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/departments" element={<AllDepartmentsPage />} />
          <Route path="/department/:slug/*" element={<DepartmentPage />} />
          <Route path="/message-from-head" element={<MessageFromHead />} />
          <Route path="/ndli-club" element={<NdliClubPage />} />
          <Route path="/women-empowerment-cell" element={<WomenEmpowermentCellPage />} />
          <Route path="/women-empowerment" element={<WomenEmpowermentCellPage />} />
          <Route path="/:category/:page" element={<InformationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

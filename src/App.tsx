import { BrowserRouter, Routes, Route, useLocation, useNavigationType, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import DepartmentPage from './pages/DepartmentPage'
import AllDepartmentsPage from './pages/AllDepartmentsPage'
import MessageFromHead from './pages/MessageFromHead'
import NdliClubPage from './pages/student-chapters/NdliClubPage'
import ChairmansClubPage from './pages/student-chapters/ChairmansClubPage'
import IciPage from './pages/student-chapters/IciPage'
import IeiPage from './pages/student-chapters/IeiPage'
import IetePage from './pages/student-chapters/IetePage'
import IstePage from './pages/student-chapters/IstePage'
import SaePage from './pages/student-chapters/SaePage'
import ToastmastersPage from './pages/student-chapters/ToastmastersPage'
import EnglishLanguageClubPage from './pages/student-chapters/EnglishLanguageClubPage'
import ProgrammersClubPage from './pages/student-chapters/ProgrammersClubPage'
import MccarthyClubPage from './pages/student-chapters/MccarthyClubPage'
import InternetSocietyPage from './pages/student-chapters/InternetSocietyPage'
import WomenEmpowermentCellPage from './pages/committees/WomenEmpowermentCellPage'
import EContentDevelopmentCellPage from './pages/committees/EContentDevelopmentCellPage'
import InternalComplaintCommitteePage from './pages/committees/InternalComplaintCommitteePage'
import LibraryCommitteePage from './pages/committees/LibraryCommitteePage'
import StudentWelfareCommitteePage from './pages/committees/StudentWelfareCommitteePage'
import CareerGuidanceHigherEducationCellPage from './pages/committees/CareerGuidanceHigherEducationCellPage'
import GamesSportsCellPage from './pages/committees/GamesSportsCellPage'
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
import AdmissionsCommitteePage from './pages/admissions/AdmissionsCommitteePage';
import NotificationsPage from './pages/examinations/NotificationsPage';
import EvaluationProcedurePage from './pages/examinations/EvaluationProcedurePage';
import RecountingProcedurePage from './pages/examinations/RecountingProcedurePage';
import MalpracticeRulesPage from './pages/examinations/MalpracticeRulesPage';
import ExaminationTeamPage from './pages/examinations/ExaminationTeamPage';
import ExamCommitteePage from './pages/examinations/ExamCommitteePage';
import ResultsCommitteePage from './pages/examinations/ResultsCommitteePage';
import AnnualExamReportsPage from './pages/examinations/AnnualExamReportsPage';
import GraduationDayReportsPage from './pages/examinations/GraduationDayReportsPage';
import DigiLockerPage from './pages/examinations/DigiLockerPage';
import PreviousQuestionPapersPage from './pages/examinations/PreviousQuestionPapersPage';
import ExamSectionDownloadsPage from './pages/examinations/ExamSectionDownloadsPage';
import IqacPage from './pages/committees/IqacPage';
import AntiRaggingCommitteePage from './pages/committees/AntiRaggingCommitteePage';
import SgrcPage from './pages/committees/SgrcPage';
import NptelLocalChapterPage from './pages/committees/NptelLocalChapterPage';
import ScStCellPage from './pages/committees/ScStCellPage';
import CollegeAcademicCommitteePage from './pages/committees/CollegeAcademicCommitteePage';
import ResearchConsultancyCellPage from './pages/committees/ResearchConsultancyCellPage';
import InnovationsEntrepreneurshipDevelopmentCellPage from './pages/committees/InnovationsEntrepreneurshipDevelopmentCellPage';
import IndustryInstituteInteractionCellPage from './pages/committees/IndustryInstituteInteractionCellPage';
import InformationPage from './pages/InformationPage'
import DegreeVerificationPage from './pages/DegreeVerificationPage';
import PreviousRanksPage from './pages/PreviousRanksPage';
import DownloadsPage from './pages/DownloadsPage';
import ContactUsPage from './pages/ContactUsPage';

// Campus Life Pages
import { CampusOverviewPage } from './pages/campus-life/campus-life/CampusOverviewPage'
import { CentralLibraryPage } from './pages/campus-life/campus-life/CentralLibraryPage'
import { TransportPage } from './pages/campus-life/campus-life/TransportPage'
import { HostelsPage } from './pages/campus-life/campus-life/HostelsPage'
import { InternetPage } from './pages/campus-life/campus-life/InternetPage'
import { CafeteriaPage } from './pages/campus-life/campus-life/CafeteriaPage'
import { LaboratoriesPage } from './pages/campus-life/campus-life/LaboratoriesPage'
import { SustainableCampusPage } from './pages/campus-life/campus-life/SustainableCampusPage'
import { SportsPage } from './pages/campus-life/campus-life/SportsPage'
import { ComputerCenterPage } from './pages/campus-life/campus-life/ComputerCenterPage'
import { CampusDrivesPage } from './pages/campus-life/campus-life/CampusDrivesPage'
import { AarambhPage } from './pages/campus-life/campus-life/AarambhPage'
import { SymphonyPage } from './pages/campus-life/campus-life/SymphonyPage'
import { UdbhavaanPage } from './pages/campus-life/campus-life/UdbhavaanPage'
import { AbhigyaanPage } from './pages/campus-life/campus-life/AbhigyaanPage'
import { MathematicsDayPage } from './pages/campus-life/campus-life/MathematicsDayPage'
import { PrabhavaPage } from './pages/campus-life/campus-life/PrabhavaPage'

// Community Services
import CommunityServicesPage from './pages/CommunityServicesPage'

import AcademicCalendarsPage from './pages/admissions/AcademicCalendarsPage'
import AcademicRegulationsPage from './pages/admissions/AcademicRegulationsPage'
import AdmissionProcedurePage from './pages/admissions/AdmissionProcedurePage'
import CoursesOfferedPage from './pages/admissions/CoursesOfferedPage'
import EamcetRanksPage from './pages/admissions/EamcetRanksPage'
import EcetRanksPage from './pages/admissions/EcetRanksPage'
import FeeStructurePage from './pages/admissions/FeeStructurePage'
import OnlineFeePaymentPage from './pages/admissions/OnlineFeePaymentPage'
import ScholarshipsPage from './pages/admissions/ScholarshipsPage'

import AboutTAndPPage from './pages/placements/AboutTAndPPage'
import AboutTAPPage from './pages/placements/AboutTAPPage'
import TPAnnualCalendarPage from './pages/placements/TPAnnualCalendarPage'
import TPCampusDrivesPage from './pages/placements/TPCampusDrivesPage'
import TPElearningPage from './pages/placements/TPElearningPage'
import TPInternshipsPage from './pages/placements/TPInternshipsPage'
import TPMousPage from './pages/placements/TPMousPage'
import TPPlacementStatisticsPage from './pages/placements/TPPlacementStatisticsPage'
import TPTeamMembersPage from './pages/placements/TPTeamMembersPage'
import TPTrainingProgramsPage from './pages/placements/TPTrainingProgramsPage'


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
          <Route path="/student-chapters/chairman-s-club" element={<ChairmansClubPage />} />
          <Route path="/student-chapters/ndli-club" element={<NdliClubPage />} />
          <Route path="/student-chapters/ici" element={<IciPage />} />
          <Route path="/student-chapters/iei" element={<IeiPage />} />
          <Route path="/student-chapters/iete" element={<IetePage />} />
          <Route path="/student-chapters/iste" element={<IstePage />} />
          <Route path="/student-chapters/sae" element={<SaePage />} />
          <Route path="/student-chapters/toastmasters-international-club" element={<ToastmastersPage />} />
          <Route path="/student-chapters/english-language-club" element={<EnglishLanguageClubPage />} />
          <Route path="/student-chapters/programmers-club" element={<ProgrammersClubPage />} />
          <Route path="/student-chapters/mccarthy-club" element={<MccarthyClubPage />} />
          <Route path="/student-chapters/internet-society" element={<InternetSocietyPage />} />
          <Route path="/women-empowerment-cell" element={<Navigate to="/committees/women-empowerment-cell" replace />} />
          <Route path="/women-empowerment" element={<Navigate to="/committees/women-empowerment-cell" replace />} />
                    <Route path="/examination/academic-regulations" element={<AcademicRegulationsPage />} />
                    <Route path="/examination/academic-calendars" element={<AcademicCalendarsPage />} />
          <Route path="/examination/notifications-and-results" element={<NotificationsPage />} />
          <Route path="/examination/evaluation-procedure" element={<EvaluationProcedurePage />} />
          <Route path="/examination/recounting-and-re-evaluation-procedure" element={<RecountingProcedurePage />} />
          <Route path="/examination/malpractice-rules" element={<MalpracticeRulesPage />} />
          <Route path="/examination/team-members" element={<ExaminationTeamPage />} />
          <Route path="/examination/exam-committee" element={<ExamCommitteePage />} />
          <Route path="/examination/results-committee" element={<ResultsCommitteePage />} />
          <Route path="/examination/annual-examination-reports" element={<AnnualExamReportsPage />} />
          <Route path="/examination/graduation-day-reports" element={<GraduationDayReportsPage />} />
          <Route path="/examination/digilocker-marks-memos" element={<DigiLockerPage />} />
          <Route path="/examination/previous-question-papers" element={<PreviousQuestionPapersPage />} />
          <Route path="/examination/downloads" element={<ExamSectionDownloadsPage />} />
                              <Route path="/committees/iqac" element={<IqacPage />} />
          <Route path="/committees/anti-ragging-committee" element={<AntiRaggingCommitteePage />} />
          <Route path="/committees/students-grievance-redressal-committee-sgrc" element={<SgrcPage />} />
          <Route path="/committees/nptel-local-chapter" element={<NptelLocalChapterPage />} />
          <Route path="/committees/sc-and-st-cell" element={<ScStCellPage />} />
          <Route path="/committees/college-academic-committee" element={<CollegeAcademicCommitteePage />} />
          <Route path="/committees/research-and-consultancy-cell" element={<ResearchConsultancyCellPage />} />
          <Route path="/committees/innovations-and-entrepreneurship-development-cell" element={<InnovationsEntrepreneurshipDevelopmentCellPage />} />
          <Route path="/committees/industry-institute-interaction-cell" element={<IndustryInstituteInteractionCellPage />} />
          <Route path="/committees/women-empowerment-cell" element={<WomenEmpowermentCellPage />} />
          <Route path="/committees/e-content-development-cell" element={<EContentDevelopmentCellPage />} />
          <Route path="/committees/internal-complaint-committee" element={<InternalComplaintCommitteePage />} />
          <Route path="/committees/library-committee" element={<LibraryCommitteePage />} />
          <Route path="/committees/student-welfare-committee" element={<StudentWelfareCommitteePage />} />
          <Route path="/committees/career-guidance-and-higher-education-cell" element={<CareerGuidanceHigherEducationCellPage />} />
          <Route path="/committees/games-and-sports-cell" element={<GamesSportsCellPage />} />

          <Route path="/admissions/academic-calendars" element={<AcademicCalendarsPage />} />
          <Route path="/admissions/academic-regulations" element={<AcademicRegulationsPage />} />
          <Route path="/admissions/admission-procedure" element={<AdmissionProcedurePage />} />
          <Route path="/admissions/courses-offered" element={<CoursesOfferedPage />} />
          <Route path="/admissions/eamcet-ranks" element={<EamcetRanksPage />} />
          <Route path="/admissions/ecet-ranks" element={<EcetRanksPage />} />
          <Route path="/admissions/fee-structure" element={<FeeStructurePage />} />
          <Route path="/admissions/online-fee-payment" element={<OnlineFeePaymentPage />} />
          <Route path="/admissions/scholarships" element={<ScholarshipsPage />} />
          <Route path="/admissions/admissions-committee" element={<AdmissionsCommitteePage />} />

          <Route path="/placements/about-t-and-p" element={<AboutTAPPage />} />
          <Route path="/placements/about-tap" element={<AboutTAPPage />} />
          <Route path="/placements/t-and-p-annual-calendar" element={<TPAnnualCalendarPage />} />
          <Route path="/placements/campus-drives" element={<TPCampusDrivesPage />} />
          <Route path="/placements/e-learning" element={<TPElearningPage />} />
          <Route path="/placements/internships" element={<TPInternshipsPage />} />
          <Route path="/placements/mous-and-collaborations" element={<TPMousPage />} />
          <Route path="/placements/placement-statistics" element={<TPPlacementStatisticsPage />} />
          <Route path="/placements/team-members" element={<TPTeamMembersPage />} />
          <Route path="/placements/training-programs" element={<TPTrainingProgramsPage />} />
          {/* Campus Life Routes */}
          <Route path="/campus-life/campus" element={<CampusOverviewPage />} />
          <Route path="/campus-life/library" element={<CentralLibraryPage />} />
          <Route path="/campus-life/transport" element={<TransportPage />} />
          <Route path="/campus-life/hostels" element={<HostelsPage />} />
          <Route path="/campus-life/internet" element={<InternetPage />} />
          <Route path="/campus-life/cafeteria" element={<CafeteriaPage />} />
          <Route path="/campus-life/labs" element={<LaboratoriesPage />} />
          <Route path="/campus-life/sustainable-campus" element={<SustainableCampusPage />} />
          <Route path="/campus-life/sports" element={<SportsPage />} />
          <Route path="/campus-life/computer-center" element={<ComputerCenterPage />} />
          <Route path="/campus-life/campus-drives" element={<CampusDrivesPage />} />
          <Route path="/campus-life/aarambh" element={<AarambhPage />} />
          <Route path="/campus-life/symphony" element={<SymphonyPage />} />
          <Route path="/campus-life/udbhavaan" element={<UdbhavaanPage />} />
          <Route path="/campus-life/abhigyaan" element={<AbhigyaanPage />} />
          <Route path="/campus-life/mathematics-day" element={<MathematicsDayPage />} />
          <Route path="/campus-life/prabhava" element={<PrabhavaPage />} />

          {/* Community Services Routes */}
          <Route path="/community-services/srit-social-responsibility" element={<CommunityServicesPage defaultPage="srit-social-responsibility" />} />
          <Route path="/community-services/ncc" element={<CommunityServicesPage defaultPage="ncc" />} />
          <Route path="/community-services/nss" element={<CommunityServicesPage defaultPage="nss" />} />
          <Route path="/community-services/rotaract-club" element={<CommunityServicesPage defaultPage="rotaract-club" />} />
          <Route path="/community-services/indian-redcross-society" element={<CommunityServicesPage defaultPage="indian-redcross-society" />} />
          <Route path="/community-services/unnath-bharth-abhiyan" element={<CommunityServicesPage defaultPage="unnath-bharth-abhiyan" />} />
          <Route path="/community-services/ek-bharat-shreshtha-bharat" element={<CommunityServicesPage defaultPage="ek-bharat-shreshtha-bharat" />} />
          <Route path="/community-services/viksit-bharat-2047" element={<CommunityServicesPage defaultPage="viksit-bharat-2047" />} />

          <Route path="/degree-verification" element={<DegreeVerificationPage />} />
          <Route path="/previousranks" element={<PreviousRanksPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />

          <Route path="/:category/:page" element={<InformationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

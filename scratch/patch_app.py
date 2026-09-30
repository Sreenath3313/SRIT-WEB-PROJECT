import re

with open('c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# REMOVE OLD IMPORTS
imports_to_remove = [
    'AcademicRegulationsPage',
    'AcademicCalendarsPage',
    'AdmissionProcedurePage',
    'AboutTAndPPage'
]

for imp in imports_to_remove:
    content = re.sub(rf"import\s+{imp}\s+from\s+'[^']+';\n?", "", content)

# NEW IMPORTS
new_imports = """
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
"""

content = content.replace("import InformationPage from './pages/InformationPage'", "import InformationPage from './pages/InformationPage'\n" + new_imports)

# REMOVE OLD ROUTES
routes_to_remove = [
    r'<Route path="/admissions/[^"]+" element={<[^>]+/>} />\n?',
    r'<Route path="/placements/[^"]+" element={<[^>]+/>} />\n?',
    # Also examination ones for academic regulations and calendars if they conflict, but let's just remove admissions and placements
]
for route_regex in routes_to_remove:
    content = re.sub(route_regex, "", content)

new_routes = """
          <Route path="/admissions/academic-calendars" element={<AcademicCalendarsPage />} />
          <Route path="/admissions/academic-regulations" element={<AcademicRegulationsPage />} />
          <Route path="/admissions/admission-procedure" element={<AdmissionProcedurePage />} />
          <Route path="/admissions/courses-offered" element={<CoursesOfferedPage />} />
          <Route path="/admissions/eamcet-ranks" element={<EamcetRanksPage />} />
          <Route path="/admissions/ecet-ranks" element={<EcetRanksPage />} />
          <Route path="/admissions/fee-structure" element={<FeeStructurePage />} />
          <Route path="/admissions/online-fee-payment" element={<OnlineFeePaymentPage />} />
          <Route path="/admissions/scholarships" element={<ScholarshipsPage />} />

          <Route path="/placements/about-t-and-p" element={<AboutTAndPPage />} />
          <Route path="/placements/about-tap" element={<AboutTAPPage />} />
          <Route path="/placements/t-and-p-annual-calendar" element={<TPAnnualCalendarPage />} />
          <Route path="/placements/campus-drives" element={<TPCampusDrivesPage />} />
          <Route path="/placements/e-learning" element={<TPElearningPage />} />
          <Route path="/placements/internships" element={<TPInternshipsPage />} />
          <Route path="/placements/mous-and-collaborations" element={<TPMousPage />} />
          <Route path="/placements/placement-statistics" element={<TPPlacementStatisticsPage />} />
          <Route path="/placements/team-members" element={<TPTeamMembersPage />} />
          <Route path="/placements/training-programs" element={<TPTrainingProgramsPage />} />
"""

content = content.replace("          <Route path=\"/:category/:page\" element={<InformationPage />} />", new_routes + "          <Route path=\"/:category/:page\" element={<InformationPage />} />")

with open('c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

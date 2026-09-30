import { useEffect } from 'react'
import { FileText } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

const CALENDARS_SHEET = 'https://docs.google.com/spreadsheets/d/1j25L_VRmo_1mz11kOOwewlliGAsAWprs/pubhtml?widget=true&chrome=false&headers=false'

export default function AcademicCalendarsPage() {
  const location = useLocation()
  
  // Determine if we are under admissions or examination based on URL
  const isAdmissions = location.pathname.includes('/admissions/')
  const category = isAdmissions ? 'admissions' : 'examination'
  const categoryTitle = isAdmissions ? 'Admissions' : 'Examination'
    const title = 'Academic Calendars'
  const navGroup = navLinks.find((item) => item.label.toLowerCase().replace(/\s+/g, '-') === category)

  useEffect(() => {
    document.title = `${title} | SRIT`
    const description = `Official SRIT information for ${categoryTitle} ${title}.`
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { 
        tag = document.createElement('meta'); 
        tag.setAttribute('name', 'description'); 
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', description)
  }, [title, categoryTitle])

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />
      <PageHeader title={title} categoryTitle={categoryTitle} icon={<FileText size={26} />} />
      <main className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
        <div className="flex flex-col gap-8 w-full">
          <article className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-9 shadow-sm">
            <p className="text-primary text-xs font-bold tracking-[.16em] uppercase">{categoryTitle}</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900 mb-8">{title}</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-neutral-200 mt-6 shadow-sm">
              <div className="w-full overflow-x-auto">
                <IframeWithLoader 
                  src={CALENDARS_SHEET}
                  title="Academic Calendars"
                  style={{ height: '550px', minWidth: '900px' }}
                />
              </div>
            </div>
            
          </article>
          
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

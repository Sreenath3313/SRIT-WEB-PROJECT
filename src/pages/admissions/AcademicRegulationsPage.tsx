import { useEffect } from 'react'
import { FileText, ExternalLink } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'
import IframeWithLoader from '../../components/common/IframeWithLoader'

const REGULATIONS_SHEET = 'https://docs.google.com/spreadsheets/d/1F3Z45kK6PpV0i4KThs-YwAbWTAQwyfqJ/pubhtml?widget=true&chrome=false&headers=false'

export default function AcademicRegulationsPage() {
  const location = useLocation()
  
  // Determine if we are under admissions or examination based on URL
  const isAdmissions = location.pathname.includes('/admissions/')
  const categoryTitle = isAdmissions ? 'Admissions' : 'Academic'
  const title = 'Academic Regulations'

  useEffect(() => {
    document.title = `${title} | SRIT`
    const description = `Official SRIT Academic Regulations for B.Tech & M.Tech Programs.`
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { 
      tag = document.createElement('meta'); 
      tag.setAttribute('name', 'description'); 
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description)
  }, [title])

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />

      <PageHeader title="Academic Regulations" categoryTitle="Admissions" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="space-y-6">

          <article className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-neutral-100 pb-4">
              <div>
                <h2
                  className="font-serif font-bold text-neutral-900 tracking-tight"
                  style={{
                    fontSize: 'clamp(30px, 5vw, 34px)',
                    lineHeight: '1.15',
                  }}
                >
                  {title}
                </h2>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/1F3Z45kK6PpV0i4KThs-YwAbWTAQwyfqJ/pubhtml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F67437] hover:underline font-semibold text-xs sm:text-sm"
              >
                Open Google Sheet in New Tab <ExternalLink size={14} />
              </a>
            </div>

            {/* Embedded Academic Regulations Spreadsheet - Full Width */}
            <div className="w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm bg-white">
              <div className="w-full">
                <IframeWithLoader 
                  src={REGULATIONS_SHEET}
                  title="Academic Regulations"
                  style={{ height: '800px', width: '100%' }}
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

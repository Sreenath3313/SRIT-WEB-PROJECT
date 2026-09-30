import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Award, ExternalLink } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'

interface ScholarshipData {
  id: number
  schemeCategory?: string
  schemeName: string
  schemeDetail?: string
  schemeCategoryFirst?: boolean
  organization: string
  website: string
}

const scholarshipList: ScholarshipData[] = [
  {
    id: 1,
    schemeCategory: 'POST MATRIC SCHOLARSHIP',
    schemeName: 'JAGANANNA VIDYA DEEVENA',
    schemeDetail: '(Reimbursement of Tuition Fee)',
    organization: 'GOVERNMENT OF ANDHRA PRADESH',
    website: 'https://jnanabhumi.ap.gov.in',
  },
  {
    id: 2,
    schemeCategory: 'POST MATRIC SCHOLARSHIP',
    schemeName: 'JAGANANNA VASATI DEEVENA',
    schemeDetail: '(Maintenance/Mess Fee)',
    organization: 'GOVERNMENT OF ANDHRA PRADESH',
    website: 'https://jnanabhumi.ap.gov.in',
  },
  {
    id: 3,
    schemeCategory: 'SCHEME FOR GIRL STUDENTS',
    schemeName: 'PRAGATI SCHOLARSHIP',
    schemeDetail: '(TECHNICAL DEGREE)',
    organization: 'AICTE',
    website: 'https://www.aicte-pragati-saksham-gov.in',
  },
  {
    id: 4,
    schemeCategory: 'SCHEME FOR SPECIALLY ABLED STUDENT',
    schemeName: 'SAKSHAM SCHOLARSHIP',
    schemeDetail: '(TECHNICAL DEGREE)',
    organization: 'AICTE',
    website: 'https://www.aicte-pragati-saksham-gov.in',
  },
  {
    id: 5,
    schemeName: 'ASSISTANCE & INCENTIVES',
    schemeCategory: 'SPECIAL SCHOLARSHIP PROGRAMMES',
    schemeCategoryFirst: false,
    organization: 'RURAL DEVELOPMENT TRUST',
    website: 'https://rdtfvf.org/education-for-transformation',
  },
  {
    id: 6,
    schemeName: 'NATIONAL SCHOLARSHIP PORTAL',
    organization: 'GOVERNMENT OF INDIA',
    website: 'https://scholarships.gov.in',
  },
]

export default function ScholarshipsPage() {
  useEffect(() => {
    document.title = 'Scholarships | SRIT'
    const description = 'Official SRIT Scholarships Chart including Jagananna Vidya Deevena, Vasati Deevena, AICTE Pragati, Saksham, RDT and Central Government Schemes.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />

      <PageHeader title="Scholarships" categoryTitle="Admissions" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="space-y-10">
          
          {/* Main Card with Scholarships Chart */}
          <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">

            {/* Table Container matching screenshot exact format */}
            <div className="overflow-x-auto rounded-xl border border-[#EE6425] shadow-sm">
              <table className="w-full text-left text-sm border-collapse min-w-[750px]">
                <thead>
                  {/* Top Header Row "Scholarships Chart" */}
                  <tr className="bg-[#EE6425] text-white font-serif">
                    <th colSpan={4} className="py-3.5 px-4 text-center text-xl font-bold tracking-wide border-b border-white/20">
                      Scholarships Chart
                    </th>
                  </tr>
                  {/* Column Headers */}
                  <tr className="bg-[#EE6425] text-white font-serif">
                    <th className="py-3.5 px-4 text-center font-bold text-base w-[60px] border-r border-white/20">
                      #
                    </th>
                    <th className="py-3.5 px-6 font-bold text-base w-[45%] border-r border-white/20">
                      Scheme
                    </th>
                    <th className="py-3.5 px-6 font-bold text-base w-[30%] border-r border-white/20">
                      Organization
                    </th>
                    <th className="py-3.5 px-6 font-bold text-base w-[25%]">
                      Website
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-800 bg-white">
                  {scholarshipList.map((item) => (
                    <tr key={item.id} className="hover:bg-orange-50/20 transition-colors">
                      {/* S.No */}
                      <td className="py-4 px-4 text-center font-semibold text-neutral-700 border-r border-neutral-200">
                        {item.id}
                      </td>
                      
                      {/* Scheme */}
                      <td className="py-4 px-6 border-r border-neutral-200">
                        {item.schemeCategoryFirst !== false ? (
                          <>
                            {item.schemeCategory && (
                              <div className="font-bold text-neutral-900 uppercase text-sm tracking-tight mb-0.5">
                                {item.schemeCategory}
                              </div>
                            )}
                            {item.schemeName && (
                              <div className="font-bold text-[#EE6425] text-sm sm:text-base">
                                {item.schemeName}{' '}
                                {item.schemeDetail && (
                                  <span className="font-normal text-neutral-700 text-sm">
                                    {item.schemeDetail}
                                  </span>
                                )}
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            {item.schemeName && (
                              <div className="font-bold text-[#EE6425] text-sm sm:text-base mb-0.5">
                                {item.schemeName}
                              </div>
                            )}
                            {item.schemeCategory && (
                              <div className="font-bold text-neutral-900 uppercase text-sm tracking-tight">
                                {item.schemeCategory}
                              </div>
                            )}
                          </>
                        )}
                      </td>

                      {/* Organization */}
                      <td className="py-4 px-6 font-medium text-neutral-800 uppercase border-r border-neutral-200 text-sm">
                        {item.organization}
                      </td>

                      {/* Website */}
                      <td className="py-4 px-6 font-semibold text-[#EE6425] text-sm">
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-1.5 break-all"
                        >
                          {item.website}
                          <ExternalLink size={14} className="shrink-0 text-[#EE6425]" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

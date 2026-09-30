import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'

export interface InternshipProvider {
  sNo: number
  provider: string
  url: string
}

export const internshipProviders: InternshipProvider[] = [
  {
    sNo: 1,
    provider: 'AICTE',
    url: 'https://internship.aicte-india.org/login_new.php'
  },
  {
    sNo: 2,
    provider: 'INTERNSHALA',
    url: 'https://internshala.com/'
  },
  {
    sNo: 3,
    provider: 'LETS INTERN',
    url: 'http://letsintern.com/'
  },
  {
    sNo: 4,
    provider: 'EDUSKILLS',
    url: 'http://eduskillsfoundation.org/'
  }
]

export default function TPInternshipsPage() {
  useEffect(() => {
    document.title = 'Internships | SRIT'
    const description =
      'Official Training & Placement Internships portal links and application guidance at Srinivasa Ramanujan Institute of Technology (SRIT).'
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

      <PageHeader title="Training & Placement Internships" categoryTitle="Placements" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="w-full space-y-8">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
              Internship Opportunities &amp; Application Portals
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              SRIT encourages all pre-final and final year students to undertake summer internships and virtual industry projects. Access official partner platforms below to register and apply.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden hidden md:block">
            <table className="w-full text-left text-sm text-neutral-700">
              <thead className="bg-[#FF5422] text-white font-serif font-bold tracking-wide">
                <tr>
                  <th className="px-6 py-4 w-24 text-center">S.No</th>
                  <th className="px-6 py-4">Internship Providers</th>
                  <th className="px-6 py-4 text-center w-56">Link to Register &amp; Apply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {internshipProviders.map((item) => (
                  <tr key={item.sNo} className="hover:bg-orange-50/40 transition-colors">
                    <td className="px-6 py-5 font-bold text-neutral-500 text-center">
                      {item.sNo}
                    </td>
                    <td className="px-6 py-5 font-bold text-[#FF5422] text-base">
                      {item.provider}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-xs uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-2xs"
                      >
                        Register &amp; Apply <ExternalLink size={14} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {internshipProviders.map((item) => (
              <div
                key={item.sNo}
                className="bg-white rounded-xl border border-neutral-200 p-5 shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-md">
                    #{item.sNo}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    <CheckCircle2 size={14} /> Partner
                  </span>
                </div>
                <h3 className="font-bold text-[#FF5422] text-xl">{item.provider}</h3>
                <div className="pt-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
                  >
                    Register &amp; Apply <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

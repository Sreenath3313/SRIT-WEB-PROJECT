import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'

export default function FeeStructurePage() {
  const categoryTitle = 'Admissions'
  const title = 'Fee Structure'

  useEffect(() => {
    document.title = `${title} | SRIT`
    const description = 'Official SRIT Fee Structure for B.Tech, M.Tech, Hostel Fee, Transport Fee, and Merit Scholarship Scheme details for Academic Year 2026-27.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [title])

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />

      <PageHeader title="Fee Structure" categoryTitle="Admissions" />

      {/* Main Content Area - Full Width */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <article className="w-full space-y-10">

          {/* B.Tech Fee Structure Card */}
          <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm overflow-hidden space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#F67437] border border-orange-200">
                  Undergraduate Program
                </span>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-neutral-900">B.Tech Fee Structure</h2>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 rounded-md">
                Academic Year 2026–27
              </span>
            </div>

            {/* B.Tech Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#F67437] text-white font-serif">
                    <th className="py-4 px-5 font-semibold w-1/5 text-base">Program</th>
                    <th className="py-4 px-5 font-semibold w-2/5 border-l border-white/20 text-base">
                      For seats Through Counseling <br />
                      <span className="text-xs font-normal opacity-90">(By the Govt.)</span>
                    </th>
                    <th className="py-4 px-5 font-semibold w-2/5 border-l border-white/20 text-base">
                      Management quota seats
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-800">
                  {/* Eligibility row */}
                  <tr className="bg-neutral-50/70">
                    <td className="py-4 px-5 font-bold text-lg text-neutral-900 align-top">
                      B.Tech
                    </td>
                    <td className="py-4 px-5 align-top border-l border-neutral-200">
                      <div className="font-medium text-neutral-900">
                        * Qualifying at <span className="text-[#F67437] font-bold">AP EAPCET / ECET</span>
                      </div>
                      <div className="mt-1 text-sm font-bold text-[#F67437]">
                        (Counseling Code : SRIT)
                      </div>
                    </td>
                    <td className="py-4 px-5 align-top border-l border-neutral-200 text-xs sm:text-sm leading-relaxed">
                      <p>
                        <span className="font-bold text-neutral-900">**</span> Qualifying at (<span className="text-[#F67437] font-bold">AP EAPCET / ECET</span>) and a pass in Intermediate (M.P.C.) / Diploma with at least 45% marks for OC and 40% marks for BC, SC and ST either in aggregate or in group subjects.
                      </p>
                      <p className="my-2 font-bold text-center text-neutral-500 uppercase tracking-wider text-[11px]">(or)</p>
                      <p>
                        A pass in Intermediate (M.P.C.) / Diploma with at least 45% marks for OC and 40% marks for BC, SC and ST either in aggregate or in group subjects.
                      </p>
                    </td>
                  </tr>

                  {/* Counseling seats fee */}
                  <tr>
                    <td className="py-4 px-5 font-semibold text-neutral-800 bg-neutral-50/40">
                      Counseling seats
                    </td>
                    <td colSpan={2} className="py-4 px-5 border-l border-neutral-200 font-bold text-[#F67437] text-base sm:text-lg">
                      Rs. 49,100/- <span className="text-xs sm:text-sm font-normal text-neutral-600">Per Year for Academic Year - 2026-27</span>
                    </td>
                  </tr>

                  {/* NRI seats fee */}
                  <tr>
                    <td className="py-4 px-5 font-semibold text-neutral-800 bg-neutral-50/40">
                      NRI
                    </td>
                    <td colSpan={2} className="py-4 px-5 border-l border-neutral-200 font-bold text-[#F67437] text-base sm:text-lg">
                      $ 5,000/- <span className="text-xs sm:text-sm font-normal text-neutral-600">Per Year for Academic Year - 2026-27</span>
                    </td>
                  </tr>

                  {/* Non-NRI seats fee */}
                  <tr>
                    <td className="py-4 px-5 font-semibold text-neutral-800 bg-neutral-50/40">
                      Non-NRI
                    </td>
                    <td colSpan={2} className="py-4 px-5 border-l border-neutral-200 font-bold text-[#F67437] text-base sm:text-lg">
                      Rs. 1,47,300/- <span className="text-xs sm:text-sm font-normal text-neutral-600">Per Year for Academic Year - 2026-27</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Scholarship Scheme Section matching exact website wording */}
          <div className="rounded-xl border-2 border-[#F67437]/30 bg-gradient-to-br from-orange-50/40 via-white to-neutral-50 p-6 sm:p-9 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-orange-100 pb-4">
              <span className="p-3 rounded-xl bg-[#F67437] text-white shadow-md shadow-[#F67437]/20">
                <Award size={26} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F67437] bg-orange-100 px-3 py-0.5 rounded-full">
                    Scholarship Scheme
                  </span>
                  
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
                  ₹50,000 Merit Scholarship Details
                </h3>
              </div>
            </div>

            {/* Exact website paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-800">
              <div className="p-4 rounded-xl bg-white border border-orange-200/80 shadow-xs flex items-start gap-3">
                <span className="text-[#F67437] font-bold text-lg shrink-0 mt-0.5">***</span>
                <p>
                  <strong className="text-neutral-900">The ₹50,000 Scholarship is awarded to eligible students</strong> who secured the <strong className="text-[#F67437]">AP EAPCET</strong> Rank <strong className="text-neutral-900">below 10,000</strong> and get admitted in <strong className="text-[#F67437]">CSE, CSM, CAD &amp; ECE</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-orange-200/80 shadow-xs flex items-start gap-3">
                <span className="text-[#F67437] font-bold text-lg shrink-0 mt-0.5">***</span>
                <p>
                  <strong className="text-neutral-900">The ₹50,000 Scholarship is awarded to eligible students</strong> who secured the <strong className="text-[#F67437]">AP EAPCET</strong> Rank <strong className="text-neutral-900">below 20,000</strong> and get admitted in <strong className="text-[#F67437]">CIV, MEC, &amp; EEE</strong>.
                </p>
              </div>
            </div>

            {/* Scholarship Continuation Conditions */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-xs space-y-4">
              <h4 className="font-serif font-bold text-neutral-900 text-base sm:text-lg flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#F67437]" />
                To continue receiving the scholarship in the subsequent academic years, the student must:
              </h4>

              <ul className="space-y-3 text-sm sm:text-base text-neutral-700 pl-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Maintain a minimum <strong className="text-neutral-900">CGPA of 7.0</strong> with <strong className="text-neutral-900">no backlogs</strong> in each Semester.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Maintain a minimum attendance of <strong className="text-neutral-900">75%</strong> in each Semester.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Maintain <strong className="text-neutral-900">good discipline and conduct</strong> throughout the course.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-neutral-100 flex items-start gap-2 text-xs sm:text-sm text-neutral-600">
                <AlertCircle size={16} className="text-[#F67437] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-neutral-900">Note:</strong> The scholarship will be reviewed annually. Failure to satisfy any of the above conditions may result in discontinuation of the scholarship.
                </span>
              </div>
            </div>
          </div>

          {/* M.Tech Fee Structure Card */}
          <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm overflow-hidden space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#F67437] border border-orange-200">
                  Postgraduate Program
                </span>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-neutral-900">M.Tech Fee Structure</h2>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 rounded-md">
                Academic Year 2026–27
              </span>
            </div>

            {/* M.Tech Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#F67437] text-white font-serif">
                    <th className="py-4 px-5 font-semibold w-1/5 text-base">Program</th>
                    <th className="py-4 px-5 font-semibold w-2/5 border-l border-white/20 text-base">
                      For seats Through Counseling <br />
                      <span className="text-xs font-normal opacity-90">(By the Govt.)</span>
                    </th>
                    <th className="py-4 px-5 font-semibold w-2/5 border-l border-white/20 text-base">
                      Management quota seats
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-800">
                  {/* Eligibility row */}
                  <tr className="bg-neutral-50/70">
                    <td className="py-4 px-5 font-bold text-lg text-neutral-900 align-top">
                      M.Tech
                    </td>
                    <td className="py-4 px-5 align-top border-l border-neutral-200">
                      <div className="font-medium text-neutral-900">
                        * Qualifying at <span className="text-[#F67437] font-bold">GATE / PGECET</span>
                      </div>
                      <div className="mt-1 text-sm font-bold text-[#F67437]">
                        (Counseling Code : SRIT)
                      </div>
                    </td>
                    <td className="py-4 px-5 align-top border-l border-neutral-200 text-xs sm:text-sm leading-relaxed">
                      <p>
                        <span className="font-bold text-neutral-900">**</span> A pass in graduation degree with at least 50% either in aggregate or in group subjects or qualifying at <span className="text-[#F67437] font-bold">GATE / PGECET</span>.
                      </p>
                    </td>
                  </tr>

                  {/* Counseling seats fee */}
                  <tr>
                    <td className="py-4 px-5 font-semibold text-neutral-800 bg-neutral-50/40">
                      Counseling seats
                    </td>
                    <td colSpan={2} className="py-4 px-5 border-l border-neutral-200 font-bold text-[#F67437] text-base sm:text-lg">
                      Rs. 50,000 /- <span className="text-xs sm:text-sm font-normal text-neutral-600">Per Year for Academic Year - 2026-27</span>
                    </td>
                  </tr>

                  {/* NRI / Management seats fee */}
                  <tr>
                    <td className="py-4 px-5 font-semibold text-neutral-800 bg-neutral-50/40">
                      NRI's / Management
                    </td>
                    <td colSpan={2} className="py-4 px-5 border-l border-neutral-200 font-bold text-[#F67437] text-base sm:text-lg">
                      As per government latest norms.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hostel Fee & Transport Fee Text Block */}
          <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <h4
              className="font-serif font-bold text-neutral-900"
              style={{
                fontSize: 'clamp(24px, 3vw, 24px)',
                lineHeight: '1.2',
              }}
            >
              Hostel Fee : Rs. 80,000/- per year
            </h4>

            <h4
              className="font-serif font-bold text-[#F67437]"
              style={{
                fontSize: 'clamp(24px, 2vw, 24px)',
                lineHeight: '1.3',
              }}
            >
              <Link
                to="/campus-life/transport"
                className="hover:underline inline-flex items-center gap-2"
              >
                Transport Fee details
                <ExternalLink size={22} />
              </Link>
            </h4>
          </div>

          {/* Online Fee Payment Action Banner */}
          <div className="rounded-xl bg-neutral-900 text-white p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold">Ready to Pay Your Fees Online?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Pay tuition &amp; college fees securely via the official SRIT Online Payment Portal.
              </p>
            </div>
            <Link
              to="/admissions/online-fee-payment"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F67437] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F67437]/30 transition hover:bg-orange-600"
            >
              Online Fee Payment <ExternalLink size={16} />
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  )
}

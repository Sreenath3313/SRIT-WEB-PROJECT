import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, CheckCircle2, Clock, AlertCircle, Compass } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'

export interface CalendarMonthBlock {
  period: string
  badgeColor: string
  activities: string[]
}

export const calendarData: CalendarMonthBlock[] = [
  {
    period: 'June',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    activities: [
      'Analyze previous placement statistics and define strategies for the new academic year.',
      "Update final-year students' data for placements; categorize them based on skills and CGPA.",
      'Identify training needs and schedule relevant sessions for final-year students.'
    ]
  },
  {
    period: 'July – August',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-200',
    activities: [
      'Conduct employability training sessions for final-year students.',
      'Send campus invitations to recruiters via email, and networking channels.',
      'Identify and onboard potential recruiters.',
      'Finalize and schedule initial placement drives.',
      'Plan interaction sessions during the induction program for newly admitted students (freshers).'
    ]
  },
  {
    period: 'September – November',
    badgeColor: 'bg-orange-500/10 text-primary border-orange-200',
    activities: [
      'Continue placement drives and host recruitment teams (virtual/on-campus).',
      'Conduct expert lectures and employability training sessions.',
      'Begin data collection and registration for pre-final year students (3rd years).',
      'Conduct orientation sessions on placements and internships for pre-final year students.',
      'Segment 3rd year students into groups based on readiness and profiles.',
      'Launch training programs for pre-final year students.'
    ]
  },
  {
    period: 'December',
    badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-200',
    activities: [
      'Review training programs and assess outcomes.',
      'Coordinate with companies in the pipeline for phase-2 drives.',
      'Invite EdTech & CSR partners to host internship drives.',
      'Semester examination period.'
    ]
  },
  {
    period: 'January – March',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
    activities: [
      'Launch phase-2 hiring drives focusing on unplaced students.',
      'Explore and facilitate internship opportunities.',
      'Permit and monitor industrial training/internship progress for students.',
      'Track offer rollouts and confirmations, and onboardings.',
      'Facilitate and monitor trainings for final-year students.'
    ]
  },
  {
    period: 'April – May',
    badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-200',
    activities: [
      'Collect offer letters and document.',
      'Update institute website with placement data.',
      'Prepare annual placement report.',
      'Follow-up with HRs for students onboarding.',
      'Track offer rollouts and placement confirmations.'
    ]
  }
]

export default function TPAnnualCalendarPage() {
  useEffect(() => {
    document.title = 'T & P Annual Calendar | SRIT'
    const description =
      'Official Training & Placement Cell Annual Calendar at Srinivasa Ramanujan Institute of Technology (SRIT) - Month-wise roadmap of placement drives, training sessions, and internship facilitation.'
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

      <PageHeader title="T&P Cell – Annual Calendar" categoryTitle="Placements" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="w-full space-y-10">

          {/* Intro Card */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary text-xs font-bold uppercase tracking-wider">
              <Compass size={14} /> Strategic Roadmap
            </div>
            <h2
              className="font-serif font-bold text-neutral-900"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 32px)',
                lineHeight: '1.2'
              }}
            >
              Training &amp; Placement Annual Roadmap
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed text-justify">
              This Training and Placement Calendar has been thoughtfully designed to streamline and structure all trainings, internships and placements related activities at Srinivasa Ramanujan Institute of Technology. This calendar outlines a month-wise roadmap encompassing pre-placement preparation, recruiter engagement, student training, internship facilitation, and post-placement follow-up. It aims to ensure systematic coordination between students, faculty, recruiters, and the Training &amp; Placement Cell, thereby enhancing placement outcomes and industry readiness of our students.
            </p>
          </section>

          {/* Month-wise Timeline Grid */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">
                  Month-wise Schedule &amp; Activities
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">
                  Academic year execution timeline for Training and Placement Cell operations
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                <Clock size={14} className="text-primary" /> Annual Cycle
              </span>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-700">
                <thead className="bg-[#FF5422] text-white font-serif font-bold tracking-wide">
                  <tr>
                    <th className="px-6 py-4 w-52 rounded-tl-xl text-base text-center">Month</th>
                    <th className="px-6 py-4 rounded-tr-xl text-base">Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {calendarData.map((item, index) => (
                    <tr key={item.period} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/60'}>
                      <td className="px-6 py-6 font-serif font-bold text-lg text-neutral-900 text-center align-top border-r border-neutral-200/80">
                        <span className={`inline-block px-3 py-1.5 rounded-xl border text-sm font-sans font-bold ${item.badgeColor}`}>
                          {item.period}
                        </span>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <ul className="space-y-3 text-neutral-800 text-base leading-relaxed">
                          {item.activities.map((act, actIdx) => (
                            <li key={actIdx} className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-6">
              {calendarData.map((item) => (
                <div
                  key={item.period}
                  className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <span className={`px-3 py-1 rounded-xl border text-sm font-bold ${item.badgeColor}`}>
                      {item.period}
                    </span>
                    <span className="text-xs font-medium text-neutral-400">SRIT T&amp;P</span>
                  </div>
                  <ul className="space-y-3 text-neutral-800 text-sm leading-relaxed">
                    {item.activities.map((act, actIdx) => (
                      <li key={actIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion & Note Card */}
          <section className="space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-neutral-900 text-white shadow-md border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                 Collaborative Success
              </div>
              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed text-justify">
                The successful execution of this Placement Calendar requires the collaborative efforts of students, faculty, and the Training &amp; Placement Cell. By adhering to this structured plan, SRIT aims to foster stronger industry engagement, enhance student preparedness, and ensure greater placement success across all disciplines.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 border border-orange-200 flex items-start gap-3.5">
              <AlertCircle size={20} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                <strong className="text-primary">Note:</strong> This calendar is subject to revision based on academic schedules and recruiter engagement.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

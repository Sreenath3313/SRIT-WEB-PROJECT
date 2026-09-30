import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Laptop, BookOpen } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'
import IframeWithLoader from '../../components/common/IframeWithLoader'

export default function TPTrainingProgramsPage() {
  useEffect(() => {
    document.title = 'Training Programs | SRIT'
    const description =
      'Official Training Programs conducted by Training & Placement Cell at Srinivasa Ramanujan Institute of Technology (SRIT).'
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

      <PageHeader title="Training Programs" categoryTitle="Placements" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="w-full space-y-10">

          {/* Banner Graphic Card */}
          <div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-6 shadow-sm overflow-hidden flex justify-center">
            <img
              src="https://www.srit.ac.in/wp-content/uploads/2022/08/Training-768x373.png"
              alt="SRIT Training Program Banner"
              className="rounded-xl max-h-[380px] w-auto object-contain"
            loading="lazy" />
          </div>

          {/* Training Schedule Document Card */}
          <article className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-6 overflow-hidden">
            <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
              <span className="p-2.5 rounded-xl bg-orange-50 text-primary">
                <BookOpen size={22} />
              </span>
              <div>
                <h2 className="font-serif text-2xl font-bold text-neutral-900">
                  Training Schedule &amp; Course Structure
                </h2>
                <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">
                  Detailed batch-wise training programs, domain modules, and schedule live tracker
                </p>
              </div>
            </div>

            {/* Embedded Google Sheet */}
            <div className="w-full h-[800px] sm:h-[1000px] rounded-xl overflow-hidden border border-neutral-200 shadow-2xs">
              <IframeWithLoader
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRXXbFF905K-gqxcGMcr4v4JngDAsJgzkC40N2QnIuKz57jyF2ADHOvc_Yi6eJgdCAhFN-sF3eL4qno/pubhtml?widget=true&amp;headers=false"
                title="SRIT Training Programs Schedule"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </article>

        </div>
      </main>

      <Footer />
    </div>
  )
}

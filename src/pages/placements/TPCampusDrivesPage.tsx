import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, ChevronDown, ChevronUp } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'
import IframeWithLoader from '../../components/common/IframeWithLoader'

export default function TPCampusDrivesPage() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    document.title = 'Campus Drives | SRIT'
    const description =
      'Official Campus Drives schedule and placement recruitment details at Srinivasa Ramanujan Institute of Technology (SRIT).'
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

      <PageHeader title="Campus Drives" categoryTitle="Placements" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <article className="w-full bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-6 overflow-hidden">
          
          {/* Accordion Title Header */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between p-5 rounded-xl bg-neutral-50 border border-neutral-200 cursor-pointer hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-lg bg-primary text-white font-bold text-sm">
                <Building2 size={20} />
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                Campus Drives Data Tracker
              </h2>
            </div>

            <button
              type="button"
              className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-primary transition"
              aria-label="Toggle Campus Drives"
            >
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {/* Embedded Google Sheet Container */}
          {isOpen && (
            <div className="w-full h-[800px] rounded-xl overflow-hidden border border-neutral-200 shadow-2xs">
              <IframeWithLoader
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSrEMEyriU1V7vBqzLIwvb9xstWfCC2VAhliaPpXSmvJI0-oF7-98Jerl9sRkidHy5DqIdtw3ZFSndF/pubhtml?widget=true&amp;headers=false"
                title="SRIT Campus Drives Live Sheet"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )}

        </article>
      </main>

      <Footer />
    </div>
  )
}

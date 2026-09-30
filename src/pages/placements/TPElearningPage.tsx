import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, ChevronDown, MonitorPlay } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'
import IframeWithLoader from '../../components/common/IframeWithLoader'

export default function TPElearningPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    document.title = 'e-Learning | SRIT'
    const description =
      'Official Training & Placement e-Learning resources and training activities at Srinivasa Ramanujan Institute of Technology (SRIT).'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [])

  const elearningItems = [
    {
      id: 'e-resources',
      title: 'E-Resources',
      icon: BookOpen,
      sheetUrl:
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSls4CAvBK8IO766XFdmdsIaetq2_UzPW0yK_kVOgiAGXy2yndpz5FRlA6YUUZUTCiHmn3GOpoqn4F3/pubhtml?widget=true&headers=false',
      height: 650
    },
    {
      id: 'training-activities',
      title: 'Training Activities',
      icon: MonitorPlay,
      sheetUrl:
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vRtkudTnEiAQZPfU9osugEeb_s9j1Pppma16ilqWXDRrJmTb0v3bPaqdlVoPTfhuQ/pubhtml?widget=true&headers=false',
      height: 650
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />

      <PageHeader title="Training & Placement e-Learning" categoryTitle="Placements" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="w-full space-y-6">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
              Digital Learning &amp; Training Resources
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Access curated e-resources, online practice portals, coding material, and recorded training activities designed to empower SRIT students for technical placements.
            </p>
          </div>

          {/* Accordions List */}
          <div className="space-y-4">
            {elearningItems.map((item, index) => {
              const isExpanded = openIndex === index
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-neutral-200 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-neutral-50/50 hover:bg-orange-50/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 rounded-xl bg-primary/10 text-primary font-bold shrink-0">
                        <Icon size={22} />
                      </span>
                      <h3 className="font-serif text-xl font-bold text-neutral-900">
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`p-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-primary border-primary' : ''
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="p-5 sm:p-6 border-t border-neutral-200 bg-white">
                      <div
                        className="w-full rounded-xl overflow-hidden border border-neutral-200 shadow-2xs"
                        style={{ height: `${item.height}px` }}
                      >
                        <IframeWithLoader
                          src={item.sheetUrl}
                          title={`SRIT e-Learning ${item.title}`}
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

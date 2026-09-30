import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Handshake, ChevronDown } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'
import IframeWithLoader from '../../components/common/IframeWithLoader'

export interface MouItem {
  id: string
  title: string
  sheetUrl?: string
  height?: number
  text?: string
}

export const mousList: MouItem[] = [
  {
    id: 'eduskills',
    title: 'Eduskills Foundation',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0Mi1aiHa-DRpQyR_VmN9CKGIrCqquC2z9PgWXQNQ-s1I7R_03nTwBtDPjvP0hIf5dRS3SZVOouo_4/pubhtml?widget=true&headers=false',
    height: 450
  },
  {
    id: 'tcs-yep',
    title: 'TCS Youth Employability Program',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSlo6KQmatHUPtsleiD9714_W2ghygL83FvVNY7sY5-5X0WaDZeyFRrSUESqi-RkLMW2bA1DW7rgfJx/pubhtml?widget=true&headers=false',
    height: 450
  },
  {
    id: 'epam',
    title: 'EPAM Center of Excellence',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSoadfqdKNNSzBYnG532njGFtVeMICl8B-EVGNWJMLAOIcEH0fP_ShQNf6Qj6r_YlgBVUDzlL0XtSA-/pubhtml?widget=true&headers=false',
    height: 480
  },
  {
    id: 'virtusa',
    title: 'Virtusa Center of Excellence',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTedBkDg-7PKvijI6Bri_uTmjYiY2cjTbv-f1YGvROH3iUOuGf7lN_EDIGgwJTIK1B01ERvcHQlALml/pubhtml?widget=true&headers=false',
    height: 450
  },
  {
    id: 'wipro',
    title: 'Wipro Talent Next',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRDiwl2kBZqgIG6uSmFdkXRO5i9w4ZDeOgPW0toIzGTM_Ez60p6pkKJrLYYhQGubm115hpcFKjjpQk9/pubhtml?widget=true&headers=false',
    height: 450
  },
  {
    id: 'movate',
    title: 'Movate Center of Excellence',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxKArUxCCfk_KP3TF1Aj6gikUaZJ0I6DaZvz5v5d-03C5cDglhkBC5JAe-h3twJLwS0RkBWltt4xJ6/pubhtml?widget=true&headers=false',
    height: 450
  },
  {
    id: 'ict-academy',
    title: 'ICT Academy',
    text: 'SRIT maintains a strategic partnership with ICT Academy for faculty development programs, youth empowerment, and student skill certification.'
  },
  {
    id: 'tata-trust',
    title: 'TATA Community Initiatives Trust',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQk4pqdOYiDSX_x440NcHgq8D2qbwIZirNRCuuwYxSZAE2vfB0UINpVeQb1u_l5J6hRkweas80C9mwy/pubhtml?widget=true&headers=false',
    height: 480
  },
  {
    id: 'excelr',
    title: 'ExcelR',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vT94A5tn5KqmpDl2Xfo3vFA2UhIvQQJxEiF8WtMMWSg2LlkI8bUZy5sJ3XW3wf_4e4ZHzg476s7F4s8/pubhtml?widget=true&headers=false',
    height: 500
  },
  {
    id: 'data-flair',
    title: 'Data Flair',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQjGbvuuHxj5TaHcsepavmlnqsGjeRYQ7gmq1kriZ89npclafbooOnfwdTDSd4Cf1ebbuOiV6tJ-Nm3/pubhtml?widget=true&headers=false',
    height: 500
  },
  {
    id: 'pantech',
    title: 'Pantech e Learning',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaQ11Slxx2CXPYM2GYi_HRRDmeSCMzBiqc1CHt8cpN4wlucDge2MHpCFhzsWkc1u7nVyaB_xd1zfAg/pubhtml?widget=true&headers=false',
    height: 450
  },
  {
    id: 'smartbridge',
    title: 'Smartbridge',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSaqUz0ZpBLF7HzYxj9x2pz2ul_W9zBisrDsL0y39sPX6tkIrvI_ZM3jET1BFQYlw/pubhtml?widget=true&headers=false',
    height: 450
  },
  {
    id: 'acenaar',
    title: 'AcenAAr Technologies',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSW14ougBGT79aeqHfc-6PTCIPJyd3iJJJ8-ewnOO3smLTCqex_wLD55WprOoNuYGKXc4_vLbk03st7/pubhtml?widget=true&headers=false',
    height: 450
  },
  {
    id: 'atal-incubation',
    title: 'Atal Incubation Center (SKU)',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQqbDS13l8xRC3rnGfF3L9s1IwlJAhZYDQ7SfsgTD5rDhC8A59Rsfb6-gaOIE8H_FFzBwDIrSL6fm7f/pubhtml?widget=true&headers=false',
    height: 450
  }
]

export default function TPMousPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    document.title = 'MOUs & Collaborations | SRIT'
    const description =
      'Official Training & Placement MOUs and Industry Collaborations at Srinivasa Ramanujan Institute of Technology (SRIT).'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [])

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />

      <PageHeader title="MOUs & Collaborations" categoryTitle="Placements" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="w-full space-y-6">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
              Training &amp; Placement MOUs
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              SRIT collaborates with leading global technology partners and industry leaders to establish Centers of Excellence, provide specialized certifications, and facilitate direct recruitment drives. Click on any MOU below to view details.
            </p>
          </div>

          {/* Accordions List */}
          <div className="space-y-4">
            {mousList.map((mou, index) => {
              const isExpanded = openIndex === index
              return (
                <div
                  key={mou.id}
                  className="bg-white rounded-xl border border-neutral-200 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-neutral-50/50 hover:bg-orange-50/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs shrink-0">
                        {index + 1}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900">
                        {mou.title}
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
                      {mou.sheetUrl ? (
                        <div
                          className="w-full rounded-xl overflow-hidden border border-neutral-200 shadow-2xs"
                          style={{ height: `${mou.height || 450}px` }}
                        >
                          <IframeWithLoader
                            src={mou.sheetUrl}
                            title={`${mou.title} Live Data Sheet`}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </div>
                      ) : (
                        <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-700 text-sm leading-relaxed">
                          {mou.text || 'MOU details and active skill initiatives.'}
                        </div>
                      )}
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

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, ChevronDown, Award } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'
import IframeWithLoader from '../../components/common/IframeWithLoader'

export interface PlacementStatBatch {
  year: string
  sheetUrl: string
  height: number
}

export const statisticsBatches: PlacementStatBatch[] = [
  {
    year: '2025-26',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQZp3R_EcFgZVRx72iYUqv3UKKLVl1taF_vekVSQRE39ibHTsOWEs23THppeAz_uW0feb3_9EvAiuy7/pubhtml?widget=true&chrome=false&headers=false',
    height: 750
  },
  {
    year: '2024-25',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzIOFAEwoUZotX7NJ8eq0suxqyalhg32-5J8Ne0Zv-kS67LCpM8Oun9sBfyB2w09xBKn0AK_r2deF0/pubhtml?widget=true&chrome=false&headers=false',
    height: 800
  },
  {
    year: '2023-24',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzl6ylbyjann7igjpS8TRja079YjcqChPq9NVrOZETo-CL7VfcUUjPd7D0tuKtYCNMPy-hE-K2Zu8W/pubhtml?widget=true&headers=false',
    height: 800
  },
  {
    year: '2022-23',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vThZmSC4Ma4cQWPvCEiZ-wv2DChqm6HF7LcWRIRVcgwIIbP61xo1_cPwY1gZv7FxsSrXdyhxC64ve3m/pubhtml?widget=true&headers=false',
    height: 800
  },
  {
    year: '2021-22',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQpPDJt0MBahZyp01hNKxMXrDodQvLJ7GTWwNhpoef5ilpTNapIm9qeVnchdwFrphsERmCPMflsXh_R/pubhtml?widget=true&headers=false',
    height: 800
  },
  {
    year: '2020-21',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQb6QnYROtMpLymEGzVVpmQ7NiuzK12g-Jj5X9Gpql7Uh60tvQCNhjTwMRpl9SHNFwvolTup_yKAIDL/pubhtml?widget=true&headers=false',
    height: 600
  },
  {
    year: '2019-20',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vThbpVbAP4MtB-soI67FfN1GZVMXW9EnGR-yl2OczUuB9zrj2cU1Mhzu6Yf9zDOAwtLzcY2RL0LzA9W/pubhtml?widget=true&headers=false',
    height: 600
  },
  {
    year: '2018-19',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRorUQ8CtRAEbRhXWnUiInfJiHRsQ44aGRfO7s_n6p4DV-KCLAyRGQKWBKxyJxdPQkRiFyoKzY7XYU3/pubhtml?widget=true&headers=false',
    height: 600
  },
  {
    year: '2017-18',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRfhpuPvXpW6vnT8-kZ-E3CTqe1PFtxwwmi27Wv46kiJlYBpOM5mW2o0mlcV8EZiwVgYXcFET7Ds0Uz/pubhtml?widget=true&headers=false',
    height: 600
  },
  {
    year: '2016-17',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2SR5QSYAKu7tGS24uSYSIKTw9Vnq7-3MKE9cuolQHTpUPUMZfH8jpmcdeoqEKARkonWwVLvz4XDLF/pubhtml?widget=true&headers=false',
    height: 600
  },
  {
    year: '2015-16',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa7_8JNMnaPaJcoOI5mrg8CoSyO8LAFFJOb44UxpNRsi649m6MSB8CAN8kvHYzS7bEK_oSMLKAsmUS/pubhtml?widget=true&headers=false',
    height: 600
  },
  {
    year: '2014-15',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRDAPYzeL27g5cnK9KjJIG50cFlTyp32BO-hNaNdeLZP-koPXzdVMqOb0QMhqe9p2xyPkAV9rY2q4lz/pubhtml?widget=true&headers=false',
    height: 600
  }
]

export default function TPPlacementStatisticsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    document.title = 'Placement Statistics | SRIT'
    const description =
      'Official Placement Statistics & batch-wise offer tracking at Srinivasa Ramanujan Institute of Technology (SRIT).'
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

      <PageHeader title="Placement Statistics" categoryTitle="Placements" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="w-full space-y-6">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
              Batch-Wise Placement Records
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Explore comprehensive annual placement statistics, company-wise offers, salary packages, and candidate selection data across all academic batches. Select any batch year below to view full details.
            </p>
          </div>

          {/* Accordions List */}
          <div className="space-y-4">
            {statisticsBatches.map((batch, index) => {
              const isExpanded = openIndex === index
              return (
                <div
                  key={batch.year}
                  className="bg-white rounded-xl border border-neutral-200 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-neutral-50/50 hover:bg-orange-50/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm shrink-0">
                        <Award size={18} />
                      </span>
                      <h3 className="font-serif text-xl font-bold text-neutral-900">
                        Batch {batch.year}
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
                        style={{ height: `${batch.height}px` }}
                      >
                        <IframeWithLoader
                          src={batch.sheetUrl}
                          title={`SRIT Placement Statistics Batch ${batch.year}`}
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

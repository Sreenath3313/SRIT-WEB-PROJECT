import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

const accordions = [
  {
    title: "Team",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSDgetqhENBFTcaPJj5hHef8O5OipvrUf-8ba9Y7uvKHAXtnApH3-lFu1aRFMuHaAoSi4i9OdAmakHc/pubhtml?widget=true&headers=false",
  },
  {
    title: "Activities",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2oNLEVCYK-kog88beKQ0tUMEYcZ5GaYMA5TyhCzymoA6mMUL8cgEZAGL21nhvO1Vcas-tyzI2Kz-B/pubhtml?widget=true&headers=false",
  },
  {
    title: "Minutes of Meeting",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAw3qv2fJZyFMLgTEMUDrgIb_ryj8WpZxIZWA03XUE6ozlF98J0HoH3tZaaVbCk8IPM6w2kIWnU5e1/pubhtml?widget=true&headers=false",
  },
  {
    title: "MS-Abroad LoR request form",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjR-zucObN077ZTf8ENP-K9M2S3_gqlW1ADe_GUY1pVEn62oIVchrvKAjn4_Plpw/pubhtml?widget=true&headers=false",
  },
  {
    title: "MS-Abroad LoR Requested students list",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxqpQ9doqLsjhXsiHhUUQ9ZMWH39Q-zhQie2sYKmlTRXfEkE-_bGxV90a9gz9zBVbDXrlsFV_v91po/pubhtml?widget=true&headers=false",
  },
  {
    title: "MS-Abroad Students List",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiQihYegta2aLbb6lNsEoD2FERbEIN150dFGpjycnIwT7yiXzcHpJc6rv2o0xGwilivuDmC7BljAnO/pubhtml?widget=true&headers=false",
  }
]

export default function CareerGuidanceHigherEducationCellPage() {
  const categoryTitle = 'Committees'
  const title = 'Career Guidance and Higher Education Cell'
  const navGroup = navLinks.find((item) => item.label === categoryTitle)
  
  const [activeTab, setActiveTab] = useState<string>('')

  useEffect(() => {
    document.title = `${title} | SRIT`
    const description = `Official SRIT information for ${title} under ${categoryTitle}.`
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { 
        tag = document.createElement('meta'); 
        tag.setAttribute('name', 'description'); 
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', description)
  }, [title])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-primary/20">
      <Navbar />
      <PageHeader title={title} categoryTitle={categoryTitle} icon={<FileText size={26} />} />
      
      <main className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1 relative z-10 -mt-8">
        <div className="flex flex-col gap-8 w-full">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col gap-8">

            {/* Overview */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-bold tracking-[.16em] uppercase mb-4">
                At a Glance
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">About the Cell</h2>
              
              <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300 mb-8">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>VISION:</strong> To assist, advise, and facilitate the students to understand the higher educational opportunities in India and Abroad and also, enable them to have knowledge of various competitive examinations to prepare them for the future.
                </p>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>MISSION:</strong> To provide counselling for the students on the aspects of career enhancement, skill upgradation, and requirements of industry to make them well informed about career opportunities available for them.
                </p>
              </div>

              <div className="group relative bg-white border border-neutral-200/60 rounded-xl p-7 hover:border-orange-200 transition-colors duration-300">
                <div className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>OBJECTIVES:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li>To provide information about higher studies in India and Abroad with and without aid.</li>
                    <li>To conduct career counseling/guidance through seminars by experts from the industry.</li>
                    <li>To provide information about overseas employment opportunities.</li>
                    <li>To arrange training/coaching for entrance/competitive examinations.</li>
                    <li>To guide the students for competitive exams after UG and to provide information regarding entrance exams like ICET/GATE/GRE/CAT/TOFEL/IELTS etc.</li>
                    <li>To conduct motivational programs periodically on career growth, career choice, etc.</li>
                    <li>To assist students in their career planning and provide information that helps the students to get direction to their aspirations and interests.</li>
                    <li>To conduct awareness programs on career paths and professional opportunities in private and public sector organizations.</li>
                  </ul>
                </div>
              </div>
            </motion.article>

            {/* Contact Us */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 rounded-xl text-primary">
                  <FileText size={22} />
                </div>
                Contact Us
              </h2>

              <div className="p-6 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:border-orange-100 transition-all duration-300 max-w-lg">
                  <h3 className="font-bold text-neutral-900 mb-1">Dr. D Maruthi Kumar, M. Tech., Ph. D.</h3>
                  <p className="text-sm text-neutral-500 mb-4">Assoc Prof in ECE, Coordinator-Career Guidance and Higher Education Cell</p>
                  <div className="text-sm text-neutral-600 space-y-2">
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mail:</strong> hied@srit.ac.in</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mobile No:</strong> +91-9966012141</p>
                  </div>
              </div>
            </motion.article>

            {/* Document Accordions - NEW THEME */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Documents & Records</h2>
              
              <div className="flex flex-col gap-4">
                {accordions.map((tab) => {
                  const isOpen = activeTab === tab.title
                  return (
                    <div 
                      key={tab.title} 
                      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                        isOpen 
                          ? 'border-orange-200 shadow-lg shadow-orange-100/50 bg-white' 
                          : 'border-neutral-200/60 bg-neutral-50/50 hover:border-orange-200 hover:bg-white'
                      }`}
                    >
                      <button
                        onClick={() => setActiveTab(isOpen ? '' : tab.title)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left group"
                      >
                        <span className={`font-bold transition-colors ${isOpen ? 'text-primary' : 'text-neutral-800 group-hover:text-primary'}`}>
                          {tab.title}
                        </span>
                        <div className={`p-1.5 rounded-full transition-colors ${isOpen ? 'bg-orange-100 text-primary' : 'bg-white text-neutral-400 group-hover:bg-orange-50 group-hover:text-primary shadow-sm border border-neutral-100'}`}>
                          <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={18} />
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="p-4 pt-0">
                              <div className="h-[600px] rounded-xl overflow-hidden border border-neutral-100 shadow-inner bg-neutral-50">
                                <IframeWithLoader src={tab.iframeUrl} title={tab.title} className="h-full" />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.article>

          </motion.div>

          
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, ChevronDown, CheckCircle, Target, ArrowRight, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

const iqacData = [
  {
    title: "IQAC Members",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPkb7WmUbW3WzMs_JlfpEjZo1p5hbioRPxuBrdL3Ctx-h_GdwYgnXOnvlFTjno14TmhLwVZ8cUvCuT/pubhtml?widget=true&headers=false"
  },
  {
    title: "AQARs",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWH7j2aQD3BsC5yx6dKtO9154WnNVubDdrlz6elfyJzjwiOqkdctrNx4q2jn-5Lsm2Vfbn3-MukYG7/pubhtml?widget=true&headers=false"
  },
  {
    title: "MOMs & Action Taken Reports",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT-YL6yBOws3ctqIv9Y0-G8Iewrgvifipxa_kIiLh0RqA-pyewOtUUS_AGuPOGXHA3QRiAADJrIdICr/pubhtml?widget=true&headers=false"
  },
  {
    title: "Student Satisfaction Survey",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRukULnfgdTQ6mQjrYqyypepHXTFUHgmgmPHsmdHdNWNEQwQjFrPGza48CFCePILqQxz3IJD_h2yXNo/pubhtml?widget=true&headers=false"
  },
  {
    title: "Formats of Feedback on Syllabus from stake holders",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI6GKUQhujPru8fDsevyvaHBXxzR1XETscknrh1PYookDjb5A1so4GWlmgOxXcjInSag-eAi_7JdAG/pubhtml?widget=true&chrome=false&headers=false"
  },
  {
    title: "Structured Feedback on Syllabus from Stake Holders",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcW3PgqJhwHhKqkzkSknaH1Ql_8CMESQ84uI5CPOyl8PWTGhv8oLX7tSh7wxEk3XZFbbjtwO5giS4U/pubhtml?widget=true&chrome=false&headers=false"
  },
  {
    title: "Action Taken Reports of Feedback on syllabus",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTp55D7hQrzAB2AnOeiH0ZrnJibJy2dqeG4fqTMPnYC-oI7zonBmB3fhHv-GQ3Z9pOK0PV-rxgwvjnc/pubhtml?widget=true&chrome=false&headers=false"
  }
]

export default function IqacPage() {
  const categoryTitle = 'Committees'
  const title = 'IQAC'
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
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
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
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8"
          >
            {/* Vision & Objectives */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-bold tracking-[.16em] uppercase mb-4">
                Overview
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8">Objectives</h2>
              
              <div className="bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                    <Target size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">Primary Aim</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm mb-3">
                  To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-primary">
                    <CheckCircle size={20} />
                  </div>
                  Strategies
                </h3>
                <p className="text-neutral-700 text-sm mb-4 font-semibold">IQAC shall evolve mechanisms and procedures for:</p>
                <ul className="space-y-4 text-neutral-600 text-sm list-none">
                  {[
                    "Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks.",
                    "The relevance and quality of academic and research programmes.",
                    "Optimization and integration of modern methods of teaching and learning.",
                    "The credibility of evaluation procedures.",
                    "Ensuring the adequacy, maintenance and proper allocation of support structure and services.",
                    "Sharing of research findings."
                  ].map((objective, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <ArrowRight className="text-primary/40 mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-primary" size={16} />
                      <span className="leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>

            {/* Functions */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 rounded-xl text-primary">
                  <ShieldCheck size={22} />
                </div>
                Functions of IQAC
              </h2>

              <ul className="space-y-4 text-neutral-600 text-sm list-none">
                {[
                  "Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution.",
                  "Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process.",
                  "Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes.",
                  "Dissemination of information on various quality parameters of higher education.",
                  "Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.",
                  "Documentation of the various programmes/activities leading to quality improvement.",
                  "Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices.",
                  "Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality.",
                  "Development of Quality Culture in the institution.",
                  "Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC."
                ].map((func, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-orange-50/30 hover:border-orange-100 transition-colors group">
                    <span className="flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-white text-primary text-xs font-bold shadow-sm border border-neutral-100 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{func}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            {/* Document Accordions - NEW THEME */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Documents & Reports</h2>
              
              <div className="flex flex-col gap-4">
                {iqacData.map((tab) => {
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
                          <ChevronDown 
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                            size={18} 
                          />
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
                                <IframeWithLoader 
                                  src={tab.iframeUrl}
                                  title={tab.title}
                                  className="h-full"
                                />
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

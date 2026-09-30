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
    title: "ICC Members",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQtfrh4lZhpzu6D1C0Root-KLPXUvvmmO4TIblK69Vh1PZW5gWN8tYpu-XRY6QnbaGaMITbEooZQIwA/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "ICC Activities",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSsxRxDf4KpbkJJ-1sYe9eaJM1HLEsA-NtQQ5KoAbbyZKdA2Ae-ZlpzZwxk_kE_u0SELwOUmoL196bB/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  }
]

export default function InternalComplaintCommitteePage() {
  const categoryTitle = 'Committees'
  const title = 'Internal Complaint Committee'
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
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">About Internal Complaint Committee</h2>
              
              <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300 mb-8">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>VISION:</strong> Envisaged to protect the privileges of women and curb any sexual harassments occurring against them in the campus.
                </p>
                <div className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>MISSION:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li>To create a healthy environment in the campus where every girl feels safe and self-confident without any problems relating to gender discrimination and sexual harassment.</li>
                    <li>To ensure the implementation of the policy in letter and spirit through proper reporting of the complaints and their follow-up procedures.</li>
                    <li>To uphold the commitment of the Institute to provide an environment free of gender-based discrimination.</li>
                  </ul>
                </div>
              </div>

              <div className="group relative bg-white border border-neutral-200/60 rounded-xl p-7 hover:border-orange-200 transition-colors duration-300 mb-8">
                <div className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>OBJECTIVES:</strong>
                  <p className="mb-2">The objectives of the Internal Complaint Committee to Prevent Sexual Harassment of Women at the Workplace are as follows:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>To develop a policy against sexual harassment of women at the Institute.</li>
                    <li>To evolve a permanent mechanism for the prevention and Redressal of sexual harassment cases and other acts of gender-based violence at the Institute.</li>
                    <li>To ensure the implementation of the policy in letter and spirit through proper reporting of the complaints and their follow-up procedures.</li>
                    <li>To uphold the commitment of the Institute to provide an environment free of gender-based discrimination.</li>
                    <li>To create a secure physical and social environment to deter any act of sexual harassment.</li>
                    <li>To promote a social and psychological environment to raise awareness on sexual harassment in its various forms.</li>
                  </ul>
                </div>
              </div>

              <div className="group relative bg-white border border-neutral-200/60 rounded-xl p-7 hover:border-orange-200 transition-colors duration-300">
                <div className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>FUNCTIONS OF ICC:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li>To hear and address complaints regarding sexual harassment at Srinivasa Ramanujan Institute of Technology, Ananthapuramu</li>
                    <li>To spread awareness about gender-related issues and functioning of the ICC.</li>
                  </ul>
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

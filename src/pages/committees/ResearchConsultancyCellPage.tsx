import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, FileText, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

const accordions = [
  {
    title: "Policy",
    content: "Research & Consultancy Policy - SRIT",
    iframeUrl: "",
    externalLink: "https://drive.google.com/file/d/16MZfbZY5ndGRs1mFdM5oDdrZUzlfBQpd/view?usp=sharing"
  },
  {
    title: "Incentives",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHNuMAZX-IYcnLxx55vFiy0e94gU5HbA7FjfB3gadFikJEr1To6p16ctlHGcGnkvdNaJhBzSzOXtqJ/pubhtml?widget=true&chrome=false&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Team",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSyQvXpm15MelA_cDHsQ70d6BQ3OXVzyKnmWMQifxrx3IeWUJKg9wbWRjeAPQ3PWhYwHj84nfWeFRvL/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Publications",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpJ7EuKmYi8il75EKU3g8I3vgZ-CKgIXOUe_caK5YmVNM0tQjEMWrG5eXeKzePTiNjOxVoBwp4YSjh/pubhtml?widget=true&chrome=false&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Consultancy Carried Out",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLCN4SqUDA2jCAO9C06hl6s3i3Exz202Igymqyps4Eig0PCO8P_sA-1CWX_CUs6nykQDlVleHle5wz/pubhtml?widget=true&chrome=false&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Minutes Of Meeting",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9GQ3eE4XWMWqHjVWrRM_4twhwUFvYd9HJvf_FRTdPGp6FM_Q14f6kh02sxAUg6B9UIHmmM7Y8OIer/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Patents",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQpi5to5oGZWbc_fv0VVOZWMDjA6_kMA7cJ8Uct7xRCJnaU3bqCbnB6jegHv-PT5Q/pubhtml?widget=true&chrome=false&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Projects / Grants",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRI3wOkGG2N_Zc5OC2eqyb141kfBzrO2NPqn4Wsk6fyrVEOLNHCV6dQuVIqYiPzTg/pubhtml?widget=true&chrome=false&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "SEED MONEY GRANT",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxvkiWsdGzb0p0DbjW7mKXtzg55DwtGHzNii6PJ9yLv6oAYyZ1dAz3v6mJPeZKUje3a7qCSAWTbCA7/pubhtml?widget=true&chrome=false&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Activities",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR-WWLmXXI4Py7_bm_Xx59H9LoT87c02BYFZI6bhb4Oq6jZkpJ7Ee09I2-qaxrC5xWVg08SVjuscU1q/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Indian Research Information Network System (IRINS)",
    content: "Indian Research Information Network Systems (IRINS)",
    externalLink: "https://sritech.irins.org/",
    iframeUrl: ""
  },
  {
    title: "News Letters",
    content: "Shodhana: R&D Newsletter Vol-1, October 2021",
    externalLink: "https://drive.google.com/file/d/1QJ_VB7MMrNeZGAFStQipTNQWgSc0sYyq/view?usp=sharing",
    iframeUrl: ""
  },
  {
    title: "Downloads",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7HEERUo32CN0dALobjAEVoVt8Q-SOnb3xN9FBh7JQurOl59V2BohMaQAY-FEoPXCboaiXYI1eMzJs/pubhtml?widget=true&chrome=false&headers=false",
    content: "", externalLink: ""
  }
]

export default function ResearchConsultancyCellPage() {
  const categoryTitle = 'Committees'
  const title = 'Research & Consultancy Cell'
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
                Overview
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">About Research & Consultancy Cell</h2>
              
              <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300 mb-8">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>R&C Cell-SRIT:</strong> Srinivasa Ramanujan Institute of Technology (SRIT) promotes a meaningful Research and Consultancy cell with the vision and mission to promote research in areas that truly serve the community and to promote research in the challenging and emerging frontier areas of engineering, technology, science and the humanities.
                </p>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>Aim:</strong> R&C Cell- SRIT aims to foster a research culture in the college by promote, coordinate and implement research activities of faculty and students. It enhances the general research capacity of emerging researchers and enhance institute research output such as publications, patents, etc.
                </p>
                <div className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>Objectives:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li>Identify the potential areas of research in various disciplines of engineering and form the faculty into various clusters based on their specialization.</li>
                    <li>Prepare and submit proposals to research agencies for funding projects.</li>
                    <li>Encourage multi-disciplinary research internally within the institute and externally with other organizations.</li>
                    <li>Encourage the staff to attend/publish papers in various National/International conferences of their specialized areas.</li>
                    <li>Coordinate the research activities among the various departments of the college.</li>
                    <li>Encourage the faculty to attend various research oriented Faculty development programs.</li>
                    <li>Encourage and motivate the staff to apply for Ph.D at various Universities.</li>
                    <li>Encourage the staff to publish their research works in reputed journals that have good impact factor and are Scopus indexed.</li>
                    <li>Plan for resource mobilization through industry interaction, consultancy and Extramural funding.</li>
                    <li>Identify the students project proposals and scrutinize to apply for financial support.</li>
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
                  <h3 className="font-bold text-neutral-900 mb-1">Dr. U. Raghu Babu, M. Tech., Ph. D</h3>
                  <p className="text-sm text-neutral-500 mb-4">Convener, Research & Development Cell, Associate Professor in CIV.<br/>Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                  <div className="text-sm text-neutral-600 space-y-2">
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mail:</strong> randdcell@srit.ac.in</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mobile No:</strong> +91-9177964984</p>
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
                              {tab.iframeUrl ? (
                                <div className="h-[600px] rounded-xl overflow-hidden border border-neutral-100 shadow-inner bg-neutral-50">
                                  <IframeWithLoader src={tab.iframeUrl} title={tab.title} className="h-full" />
                                </div>
                              ) : tab.externalLink ? (
                                <div className="p-4">
                                  <p className="text-neutral-600 font-medium mb-3">{tab.content}</p>
                                  <a href={tab.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors font-medium text-sm">
                                    <ExternalLink size={16} />
                                    View Document / Link
                                  </a>
                                </div>
                              ) : (
                                <div className="p-2 px-4 text-neutral-600 leading-relaxed font-medium">
                                  {tab.content}
                                </div>
                              )}
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

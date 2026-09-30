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
    title: "Team",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7isFjzECoiKy5hlmRb4PwqrgCgFwYoZlPHH9pUZy3XBgjrWffpm-GdY2ZDVz-rrhu7rfMIVdd1go5/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Activities",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRn36sCqqPKx0JXz7g4dVDgm-P2NpThC3_IojCKHaHG0c50DhIqrgsW70II9VXI3DLS4niNeGa_BjpB/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Minutes of Meeting",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSo7_RQeABudRCQF1kxjmbqICYuYN11SVgLifTRC-qKoF_B_8WXe_2V2k0ZuN2KnqGFRqdtVDuw-mHo/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  }
]

export default function WomenEmpowermentCellPage() {
  const categoryTitle = 'Committees'
  const title = 'Women Empowerment Cell'
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
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">About Women Empowerment Cell</h2>
              
              <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300 mb-8">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>AIM:</strong> The Women Empowerment Cell aims to empower girl students and faculty, enhance their understanding of issues related to women and to make the college campus a safe place for girls and women and to address the practical issues related to the welfare and equal opportunities for Women faculty, staff and students. The cell aims at creating awareness of their rights and duties. Aiming at intellectual and social upliftment of the female students, the cell stands for facilitating women's empowerment through guest lectures, seminars, awareness programs and other welfare activities.
                </p>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>VISION:</strong> To promote general well-being of female students, teaching and non-teaching women staff of the College and to provide and maintain a dignified, congenial working environment for women and enable them to explore their imminent potential in all aspects.
                </p>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>MISSION:</strong> To uplift the girls socially and intellectually, the cell conducts various awareness camps- health, legal, entrepreneurship, defense techniques, etc in order to equip them with the right knowledge for a life of equality, empowerment, personal enhancement and professional success.
                </p>
              </div>

              <div className="group relative bg-white border border-neutral-200/60 rounded-xl p-7 hover:border-orange-200 transition-colors duration-300">
                <div className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>BROAD OBJECTIVES:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li>To organize awareness programs on gender sensitization.</li>
                    <li>To motivate girl students to undertake activities that strengthen their confidence and make them believe in themselves.</li>
                    <li>Conducting various competitions to encourage their artistic talents for creative thinking.</li>
                    <li>Celebration of International Women's Day on March 8th, every year.</li>
                    <li>To conduct workshops with a motive to train girls about self-defense, health benefits and skill development.</li>
                    <li>To provide a harassment free working atmosphere, by identifying and fixing responsibility on the concerned persons for ensuring equal treatment and participation by women in all areas.</li>
                    <li>To deal appropriately with reported cases of sexual harassment, abuse or discrimination, and initiate action against particular grievances in respect of unfair treatment due to gender bias.</li>
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
                  <h3 className="font-bold text-neutral-900 mb-1">Dr. P. Vinatha, M.A, (English Lit), M.Sc (Psychology), Ph.D</h3>
                  <p className="text-sm text-neutral-500 mb-4">Associate Professor of English,<br/>Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                  <div className="text-sm text-neutral-600 space-y-2">
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mail:</strong> wepcell@srit.ac.in</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Contact:</strong> +91-9959803183</p>
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
                                    Download Document
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

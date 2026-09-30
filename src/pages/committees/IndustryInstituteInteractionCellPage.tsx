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
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS3aew7nZvG1PRmKurxaQibTU56FQ5gnNXrexzx2Gv-2YyCTv7r_myuFPU46Q67gi83W1G9hWxuOIwt/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Activities",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTYjM_NQZgz3AVivggPFeb9s9ikUa7s2IRBNgpY-W-ZwkeNIl-3fVJpOtYAxLkmiBCWjOZrVvYAe5kZ/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Minutes Of Meeting",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRvlxiysiko5uRr2fVpX3HR5wMw18mJ2PMIOQRK8Q01-aK1e4G1xKKSN7f4ZsLzCsj_WMqyQALoztc3/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Offline Internships",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQiapnoAhwSwwsXqL-QIhQuAgz7tUcY5z_c3pCoUTd_G0LhrR88I40beuQNnwulGg/pubhtml?widget=true&chrome=false&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Online Internships",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9iAbHMIiRWGbQnEq0S_WkSILfKsB2NXmcUx-KPF9eHmeISUS8wNVXrl4W2_7HgQ/pubhtml?widget=true&chrome=false&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Eduskills Statistics and Achievements",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4Rfu63I6lJ5TQcMLfV85_YGLMtNxWlUUjHm9OWvGD-211ply-Styp1LQFx8gZ7A/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  }
]

export default function IndustryInstituteInteractionCellPage() {
  const categoryTitle = 'Committees'
  const title = 'Industry Institute Interaction Cell'
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
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">About Industry Institute Interaction Cell</h2>
              
              <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300 mb-8">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>AIM:</strong> Interaction between Industry and Institute is essential for Technical Education. SRIT has established an Industry Interaction Cell to bridge the gap between Industry Expectations and Institute Offerings along with building a strong relationship between the both. III Cell serves as a podium to showcase industry practices in the institute for mutual benefit of the two parties.
                </p>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>VISION:</strong> The vision is to establish the strong links between Industry and Institute and promote various industrial activities for both the Students and Faculty community of the Institute.
                </p>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>MISSION:</strong> III Cell has been functioning in establishing the relationships with Top Notch Industries along with National Repute Institutes to enlighten both the Students and Faculty of the Institute.
                </p>
              </div>

              <div className="group relative bg-white border border-neutral-200/60 rounded-xl p-7 hover:border-orange-200 transition-colors duration-300">
                <div className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>OBJECTIVES:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li>To improvise the quality of Technical Education to cater the needs of Industry.</li>
                    <li>To establish Center of Excellence(s) by Industry/Companies to provide on field exposure.</li>
                    <li>To involve Industry professionals with Students to acquaint practical knowledge.</li>
                    <li>To involve the Teaching faculty in offering Consultancy services to industries.</li>
                    <li>To conduct Seminars/Workshops for Students and Faculty by Industry experts.</li>
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
                  <h3 className="font-bold text-neutral-900 mb-1">Dr. G Hemanth Kumar Yadav, M.Tech, Ph.D</h3>
                  <p className="text-sm text-neutral-500 mb-4">Associate Professor in CSE(AI & ML).<br/>Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                  <div className="text-sm text-neutral-600 space-y-2">
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mail:</strong> iiicell@srit.ac.in</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mobile No:</strong> +91-9848169943</p>
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

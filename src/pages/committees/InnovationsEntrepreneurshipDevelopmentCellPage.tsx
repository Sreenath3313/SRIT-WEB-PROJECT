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
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_eT6DY3cLnlGcGK2vL2O87uCV8COXZYt_spwPXQkEcgz5IFxCUgw12X-4VSY-OnaU72tUuMBik7Xj/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Event Reports",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7ltYmRKzh39Y-yRqTMlNVr1GT3oGznghH6rDiARlHOqqgoYphZbutUikhvOfQMWYClsRghYZ7g181/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Minutes Of Meeting",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSblvVfYGX6f5tJepXeVY4IxDCE58M9ekW5ZIyP_yJhyDlgKsHm7HwteXc7vgvJ1wAj4msiwVTE6Sfj/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Achievements",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfdJ5F6wk2fX-L3LWC6E0uYXSxB7hFqH_jD1bynBQ-jv3HEI45sdvhHQiqvpK5yg/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "IIC",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoCsFwJ3DUTp1xCTYbhWHXTLHKLF2tEcHO7TgxMIWlq9R9HxSp1To6xK6lC3bynE-lv3CBzKAXsCV_/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "KAPILA",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRfmI_usIEYnauRtv9WHExyW2YZCuFQD6jcckhyb-GzoHRsiFGNlxbcCmIXMAj3Q5FI51DhygkmtbBu/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "NISP",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSe1AQPLmyygNrOq9yVBue5X0u_-wKmF1dAzDD57Ytw13Q8Gc7X-nZPc2BmJ0nDt47lbgq0aWcW5zJn/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "ARIIA",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSU1Y4olGKPY6WIE7PHha-v0kP96_Ms9aRNiT7K8QozxfePF719X5N0RLEwV2dRJglWFJ_HmUmv00JH/pubhtml?widget=true&headers=false",
    content: "", externalLink: ""
  },
  {
    title: "Downloads",
    content: "IIC Event Report Template",
    externalLink: "https://docs.google.com/document/d/1z3GEQ2XX6BZZCBBKF2p0ArFmonf4oxSn/edit?usp=sharing&ouid=111180096771914758602&rtpof=true&sd=true",
    iframeUrl: ""
  }
]

export default function InnovationsEntrepreneurshipDevelopmentCellPage() {
  const categoryTitle = 'Committees'
  const title = 'Innovations & Entrepreneurship Development Cell'
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
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">About Innovations & Entrepreneurship Development Cell</h2>
              
              <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300 mb-8">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  I & ED Cell Majorly Covers Central and State Level Innovative competitions, expos, programs and also it focuses on IIC (Institution's Innovation Council), NISP (National Innovation and Start-Up Policy), MIC (Ministry of Education Innovation Council), ARIIA (Atal Ranking of Institutions on Innovations Achievement), AIC (Atal Incubation Centers), MOUs with Prominent Companies & Premier Institutions.
                </p>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  This Cell core objective is to motivate, encourage, inspire and nurture the young students and supporting them to work with innovative ideas and transform them into reality. Finally making them to be self-reliant and job creators rather than job seekers.
                </p>
              </div>

              <div className="group relative bg-white border border-neutral-200/60 rounded-xl p-7 hover:border-orange-200 transition-colors duration-300">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>VISION:</strong> To Promote Economic, Social and Environmental Development by transforming Young Age Entrepreneurs Innovative Ideas into Viable / Probable Business Propositions through Vibrant Technological Ecosystem.
                </p>
                <div className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  <strong>MISSION:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li><strong>M1:</strong> To provide a Robust Ecosystem by imparting Knowledge partnership between Industry, Academia and Alumni.</li>
                    <li><strong>M2:</strong> Facilitate and support students for collaborative or Multidisciplinary Research through exchange of Innovative Ideas or thoughts.</li>
                    <li><strong>M3:</strong> To provide Pre-Incubation and Incubation facility to nurture ideas into prototypes and Products.</li>
                  </ul>
                </div>
                <div className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  <strong>OBJECTIVES:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    <li>To encourage Science and Technology students to choose entrepreneurship as their careers.</li>
                    <li>To motivate students and faculty to convert their Innovations / Ideas and Projects into viable Business Models.</li>
                    <li>To orient students on how they can conceptualize social business start-ups that will address social issues.</li>
                    <li>To handhold students during the entire course of their study, for launching their start-ups.</li>
                    <li>To equip students with the necessary skills for managing their business enterprises.</li>
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
                  <h3 className="font-bold text-neutral-900 mb-1">Dr. B. Anjaneyulu, M.Tech, Ph.D</h3>
                  <p className="text-sm text-neutral-500 mb-4">Associate Professor of MEC<br/>Srinivasa Ramanujan Institute of Technology</p>
                  <div className="text-sm text-neutral-600 space-y-2">
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mobile No:</strong> +91-8247538830</p>
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

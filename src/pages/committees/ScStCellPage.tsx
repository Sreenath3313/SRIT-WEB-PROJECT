import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, PhoneCall, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

const scStIframes = [
  {
    title: "Team",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRvGotfnoWj9kiwVzSQNe_CpNmmCfDJVL3B9wGkG_uGeuHiredrnCSpg9wA1g3SYycQ3QsmTZNEVvhq/pubhtml?widget=true&headers=false"
  },
  {
    title: "Activities",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTY0kSn1ytZSQqvfr7lmK0LXdJkdzIcRESNstw6SCoL1lftgFAl1Ul0mKqVe-nbxIqmzFogs3cYagMu/pubhtml?widget=true&headers=false"
  },
  {
    title: "Minutes Of Meeting",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRd6w19tR34htTQwiOkypdoEZFILbf8YsVFirZaGRjLeGnAkTnENbiErbBt1BwCll9jr752qugQkNMr/pubhtml?widget=true&headers=false"
  }
]

export default function ScStCellPage() {
  const categoryTitle = 'Committees'
  const title = 'SC & ST Cell'
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

            {/* Overview */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-bold tracking-[.16em] uppercase mb-4">
                Overview
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">About SC & ST Cell</h2>
              
              <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300 mb-8">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  As per the Scheduled Castes and the Scheduled Tribes, Prevention of Atrocities Act, 1989, No. 33 of 1989, Dated 11-09-1989, SC/ST cell has formulated with the following members to address the issues related to caste based atrocities and other related grievances in the Institution.
                </p>
              </div>
            </motion.article>
            
            {/* Contact Us */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 rounded-xl text-primary">
                  <PhoneCall size={22} />
                </div>
                Contact Us
              </h2>

              <div className="p-6 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:border-orange-100 transition-all duration-300 max-w-lg">
                  <h3 className="font-bold text-neutral-900 mb-1">Mr. P. Venkata Suneel, M.Tech</h3>
                  <p className="text-sm text-neutral-500 mb-4">Assistant Professor in CIV.<br/>Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                  <div className="text-sm text-neutral-600 space-y-2">
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mail:</strong> scstcell@srit.ac.in</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mobile No:</strong> 8919226326</p>
                  </div>
              </div>
            </motion.article>

            {/* Document Accordions - NEW THEME */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Documents & Records</h2>
              
              <div className="flex flex-col gap-4">
                {scStIframes.map((tab) => {
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

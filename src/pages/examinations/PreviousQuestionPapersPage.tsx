import { useState, useEffect } from 'react'
import { FileText, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import previousPapersData from '../../data/previousPapers.json'
import PageHeader from '../../components/common/PageHeader';

export default function PreviousQuestionPapersPage() {
  const categoryTitle = 'Examination'
  const title = 'Previous Question Papers'
  const navGroup = navLinks.find((item) => item.label === 'Examination')

  const [activeTab, setActiveTab] = useState(previousPapersData[0]?.department || '')

  useEffect(() => {
    document.title = `${title} | SRIT`
    const description = `Official SRIT information for Examination ${title}.`
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { 
        tag = document.createElement('meta'); 
        tag.setAttribute('name', 'description'); 
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', description)
  }, [title])

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />
      <PageHeader title={title} categoryTitle={categoryTitle} icon={<FileText size={26} />} />
      
      <main className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
        <div className="flex flex-col gap-8 w-full">
          <article className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-9 shadow-sm">
            <p className="text-primary text-xs font-bold tracking-[.16em] uppercase">{categoryTitle}</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900 mb-6">{title}</h2>
            
            <div className="flex flex-col border-x border-t border-[#f27441]">
              {previousPapersData.map((tab) => {
                const isOpen = activeTab === tab.department;
                return (
                  <div key={tab.department} className="border-b border-[#f27441] bg-[#171e2e]">
                    <button
                      onClick={() => setActiveTab(isOpen ? '' : tab.department)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-neutral-800"
                    >
                      <span className="font-bold text-[#f27441]">{tab.department}</span>
                      <ChevronDown 
                        className={`text-[#f27441] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                        size={20} 
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden bg-neutral-50"
                        >
                          <div className="p-4 sm:p-5">
                            <div className="w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm bg-white">
                              <IframeWithLoader 
                                src={tab.iframeSrc}
                                title={`${tab.department} Question Papers`}
                                style={{ height: '600px', width: '100%' }}
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
            
          </article>
          
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

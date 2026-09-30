import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, CheckCircle, Target, ExternalLink, PhoneCall, Link as LinkIcon, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

const nptelIframes = [
  {
    title: "Details of Students Certifications",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFfpfnVZO1Fjaevww9yd4u9qM-Ln5d1iXXBzO5jfmYtwad1lKyKJ1RmTFA3XIjFsn2GSSspYhIy9Nj/pubhtml?widget=true&headers=false"
  },
  {
    title: "Details of Faculty Certifications",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR57f6OLNbVJlh0d7yltby3omhYyRsZHBXxfsVVGUG8FWShlhORL2FkzvfUm_6N-dr6upM_yINebk4C/pubhtml?widget=true&headers=false"
  },
  {
    title: "Details of Credit Transfers Through MOOCs",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRKnUlhvwxxJGsPsV62aaZ4terOfYbM5Oj7yFsjLSTgBjUccuEIf_Mos_2DlAnKidi3LkE7gByZXjzi/pubhtml?widget=true&headers=false"
  },
  {
    title: "Details of Achievements",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgCYrK6w9xbGt6e0t11adFY8bzIGKgGCXqWhULEQlle_N8sKj-6aEva5kixGi1dvNMsVAC2X7-RfdU/pubhtml?widget=true&headers=false"
  },
  {
    title: "NPTEL Team",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfE7xEWOTN9eYC6Kuxr_RPzUvRdKTjuuxed1L3kVcsMQa6rKBKH7gnNG9td9n670ENBhJ_KtbeUkm2/pubhtml?widget=true&headers=false"
  }
]

export default function NptelLocalChapterPage() {
  const categoryTitle = 'Committees'
  const title = 'NPTEL- Local Chapter'
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

            {/* Overview & Objectives */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-bold tracking-[.16em] uppercase mb-4">
                Overview
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8">About NPTEL & Objectives</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                      <Target size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900">About NPTEL</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed text-sm relative z-10">
                    National Programme on Technology Enhanced Learning (NPTEL) is a project of MHRD initiated by seven Indian Institutes of Technology (Bombay, Delhi, Kanpur, Kharagpur, Madras, Guwahati and Roorkee) along with the Indian Institute of Science, Bangalore in 2003, to provide quality education to anyone interested in learning from the IITs. The main goal was to create web and video courses in all major branches of engineering and physical sciences at the undergraduate and postgraduate levels and management courses at the postgraduate level.
                  </p>
                </div>
                
                <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                      <CheckCircle size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900">Objectives</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed text-sm relative z-10">
                    Massive Open Online Courses (MOOC) is essentially an asynchronous platform and a process for teaching through pre-recorded lectures, resource video materials, lecture notes, assignments and quizzes, which are usually online and provide self assessment in regular intervals during learning. The learning, through scheduling of fixed time duration for completion of courses and, therefore, the simultaneous participation of teachers and a large number of students may be termed synchronous and is thus similar to a classroom, albeit on the Internet and being much larger in size. Enabling quality and equitable access to a much larger population of students can lead to a significant rise in the Gross Enrollment Ratio. Courses are open for anyone to access — at no cost.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Important Links */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 rounded-xl text-primary">
                  <LinkIcon size={22} />
                </div>
                Important Links
              </h2>

              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "NPTEL Course Enrollment", url: "https://www.swayam.gov.in/NPTEL" },
                  { title: "NPTEL Certification Exam Registration", url: "https://examform.nptel.ac.in" },
                  { title: "NPTEL Domain Certification", url: "https://nptel.ac.in/noc/Domain/" },
                  { title: "NPTEL Transcript Download", url: "https://nptel.ac.in/noc/" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-md hover:border-orange-100 transition-all duration-300 group">
                      <span className="font-medium text-neutral-700 group-hover:text-primary transition-colors">{link.title}</span>
                      <div className="w-8 h-8 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-orange-50 group-hover:text-primary transition-colors">
                        <ExternalLink size={14} />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
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
                  <h3 className="font-bold text-neutral-900 mb-1">Mr. C. Sudheer Kumar, M.Tech, (Ph.D)</h3>
                  <p className="text-sm text-neutral-500 mb-4">SPOC & Assistant Professor in CSE.<br/>Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                  <div className="text-sm text-neutral-600 space-y-2">
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mail:</strong> nptel@srit.ac.in</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mobile No:</strong> 8019370310</p>
                  </div>
              </div>
            </motion.article>

            {/* Document Accordions - NEW THEME */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Documents & Records</h2>
              
              <div className="flex flex-col gap-4">
                {nptelIframes.map((tab) => {
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

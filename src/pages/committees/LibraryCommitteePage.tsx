import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, BookOpen, Clock, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

const accordions = [
  {
    title: "Library Committee",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjQeyH0if_NMefPurR0F3hzK5MvUZBP72p8Z_5bJJ27oASrpY__HbnRcCaia1DQRcG9d6ZSuzWCmOQ/pubhtml?widget=true&chrome=false&headers=false",
  },
  {
    title: "No. of Titles and Volumes (Department wise)",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxVB9zK02tu4gVIzXNMuDMRZV0E7xphn3u5-fuTb9csoCYF-mCiGx9CyB7DeHbqXzxbz9Fyr9fL6uU/pubhtml?widget=true&chrome=false&headers=false",
  },
  {
    title: "Details of Print Journals",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTCl2et84ceaiM6YuycfwWbNLOK9nYd0ljGNMxEtaA0vVQ-WJO3VpmVaO4ygbcWZAGNju61fWogHMdJ/pubhtml?widget=true&chrome=false&headers=false",
  },
  {
    title: "Details of Online Journals",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSrguCPfjBX7riPoGHtDhng9hWg_vkiMvn3dDS06fVRaKyTJRm2dgyz6AWaJCqAwEznGViPh1fWu16/pubhtml?widget=true&chrome=false&headers=false",
  },
  {
    title: "Details of e-resources available @ SRIT",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgiWCy7-Qn6CTp3ZQeFFJHZSIrYMiHV1iaSFiNM1v3XuMU3hP_sZlwyKzmJswwoBh4RZldf2KKxNaA/pubhtml?widget=true&chrome=false&headers=false",
  },
  {
    title: "MOMs",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSDc-7C8BmRQFRbykY8lvSWNCOv2Cd9Z4iymuqV9o2FDYa_pctVIapLBKV6XAD4RA/pubhtml?widget=true&chrome=false&%20headers=false",
  }
]

const libraryTeam = [
  { name: "Dr.S.Lakshmi", designation: "Librarian", qualification: "M.A.; M.L.I.Sc.; M.Phil.;Ph.D." },
  { name: "Ms. Y. Jyothi", designation: "Assistant Librarian", qualification: "M.L.I.Sc.; M.B.A." },
  { name: "Ms. A.Aruna Jyothi", designation: "Book Keeper", qualification: "B.A" },
  { name: "Ms. K.Hemalatha", designation: "Book Keeper", qualification: "Intermediate" },
  { name: "Mr. D.Lal Basha", designation: "Book Keeper", qualification: "B.A." }
]

export default function LibraryCommitteePage() {
  const categoryTitle = 'Committees'
  const title = 'Library Committee'
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
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Library is the heart of any Institution</h2>
              
              <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300 mb-8">
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10 mb-4">
                  Father of Library Science in India Dr. S.R.Ranganathan proposed five laws of Library Science. These laws are:
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1.5 text-neutral-700 font-medium mb-4">
                  <li>Books are for use. (Not for preservation)</li>
                  <li>Every reader his or her book.</li>
                  <li>Every book its reader.</li>
                  <li>Save the time of the reader.</li>
                  <li>A library is a growing organism.</li>
                </ol>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base relative z-10">
                  SRIT Library believes these laws and working for the users. The Library consists the collection of <strong>4448 titles</strong> with <strong>53290 volumes</strong>, good number of National and International Journals, and number of magazines as on today. Digital Library constitutes <strong>35 Computer systems</strong> in order to access E-journals, E-books and E-learning and so on. Library and information center provides uncompromising information and intellectual requirements to students and faculty with user friendly approach. It facilitates a fully integrated and dynamic environment for all academic studies.
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-center">
                  <span className="block text-2xl font-bold text-primary mb-1">53,290</span>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Total Volumes</span>
                </div>
                <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-center">
                  <span className="block text-2xl font-bold text-primary mb-1">4,448</span>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Total Titles</span>
                </div>
                <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-center">
                  <span className="block text-2xl font-bold text-primary mb-1">35</span>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Digital Systems</span>
                </div>
                <div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-center">
                  <span className="block text-2xl font-bold text-primary mb-1">35+</span>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Journals</span>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 rounded-xl border border-neutral-200/60 bg-white">
                  <div className="flex items-center gap-3 mb-4 text-primary font-bold">
                    <Clock size={20} /> Library Timings
                  </div>
                  <ul className="space-y-3 text-sm text-neutral-700">
                    <li className="flex justify-between border-b border-neutral-100 pb-2">
                      <span className="font-medium">Library Timings</span>
                      <span>9:00 AM to 5:30 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-neutral-100 pb-2">
                      <span className="font-medium">Transactions</span>
                      <span>9:30 AM to 4:30 PM</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl border border-neutral-200/60 bg-white">
                  <div className="flex items-center gap-3 mb-4 text-primary font-bold">
                    <BookOpen size={20} /> Space Details
                  </div>
                  <ul className="space-y-3 text-sm text-neutral-700">
                    <li className="flex justify-between border-b border-neutral-100 pb-2">
                      <span className="font-medium">Carpet Area</span>
                      <span>463.221 Sq.mts.</span>
                    </li>
                    <li className="flex justify-between border-b border-neutral-100 pb-2">
                      <span className="font-medium">Reading Space</span>
                      <span>442.085 Sq.mts.</span>
                    </li>
                    <li className="flex justify-between border-b border-neutral-100 pb-2">
                      <span className="font-medium">Seating Capacity</span>
                      <span>150</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.article>

            {/* Document Accordions - NEW THEME */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Library Information & Records</h2>
              
              <div className="flex flex-col gap-4">
                
                {/* Rules & Regulations Accordion */}
                <div 
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    activeTab === 'Rules & Regulations' 
                      ? 'border-orange-200 shadow-lg shadow-orange-100/50 bg-white' 
                      : 'border-neutral-200/60 bg-neutral-50/50 hover:border-orange-200 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setActiveTab(activeTab === 'Rules & Regulations' ? '' : 'Rules & Regulations')}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className={`font-bold transition-colors ${activeTab === 'Rules & Regulations' ? 'text-primary' : 'text-neutral-800 group-hover:text-primary'}`}>
                      Rules & Regulations
                    </span>
                    <div className={`p-1.5 rounded-full transition-colors ${activeTab === 'Rules & Regulations' ? 'bg-orange-100 text-primary' : 'bg-white text-neutral-400 group-hover:bg-orange-50 group-hover:text-primary shadow-sm border border-neutral-100'}`}>
                      <ChevronDown className={`transition-transform duration-300 ${activeTab === 'Rules & Regulations' ? 'rotate-180' : ''}`} size={18} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeTab === 'Rules & Regulations' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-6 pt-0 space-y-6">
                          <div>
                            <h4 className="font-bold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Library General Rules</h4>
                            <ul className="list-disc pl-5 space-y-2 text-neutral-700 text-sm">
                              <li>Faculty members and students of SRIT are allowed to use the library services.</li>
                              <li>Members should always produce their Identity cards while entering the library.</li>
                              <li>Readers should observe strict “silence” inside the library.</li>
                              <li>Use of mobile phones are not permitted inside the library.</li>
                              <li>Members are responsible for books issued against their membership.</li>
                              <li>Readers are not allowed to bring their personal books inside the library.</li>
                              <li>Readers should not write in, mark, scratches, and disfigure, damage, tearing library books.</li>
                              <li>are not allowed to carry eatables and drinks inside the library.</li>
                              <li>The library works from 9.00 a.m to 6.00 p.m in all working days.</li>
                              <li>One section of one branch shall be allowed to borrow / return of books in one period. (As per the library time table)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Circulation Rules</h4>
                            <ul className="list-disc pl-5 space-y-2 text-neutral-700 text-sm">
                              <li>Book borrowers must satisfy themselves with the physical condition of the book before going out.</li>
                              <li>Books are normally issued for a period of 14 days (2 Weeks) except reference books.</li>
                              <li>The renewal of any book will be done based on the demand of that book. It is not a right to claim the same book again.</li>
                              <li>Those text books which have single copies shall not be issued.</li>
                              <li>Reference books, Theses, project reports shall not be issued to students.</li>
                              <li>Library has right to recall any issued book even before the due date.</li>
                              <li>No sub lending of books is permitted.</li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Library Automation Accordion */}
                <div 
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    activeTab === 'Library Automation' 
                      ? 'border-orange-200 shadow-lg shadow-orange-100/50 bg-white' 
                      : 'border-neutral-200/60 bg-neutral-50/50 hover:border-orange-200 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setActiveTab(activeTab === 'Library Automation' ? '' : 'Library Automation')}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className={`font-bold transition-colors ${activeTab === 'Library Automation' ? 'text-primary' : 'text-neutral-800 group-hover:text-primary'}`}>
                      Library Automation
                    </span>
                    <div className={`p-1.5 rounded-full transition-colors ${activeTab === 'Library Automation' ? 'bg-orange-100 text-primary' : 'bg-white text-neutral-400 group-hover:bg-orange-50 group-hover:text-primary shadow-sm border border-neutral-100'}`}>
                      <ChevronDown className={`transition-transform duration-300 ${activeTab === 'Library Automation' ? 'rotate-180' : ''}`} size={18} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeTab === 'Library Automation' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-6 pt-0">
                          <h4 className="font-bold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Library Automation & Bar-Coding System</h4>
                          <p className="text-neutral-700 leading-relaxed text-sm">
                            Library is automated using ECAP (Engineering College Automation Package). ECAP is user friendly, multi user and multi tasking library management software. This software has been developed by Web pros solutions Pvt, Ltd, Visakhapatnam, India. SRIT is using ECAP to develop the automation in different sections in the college. So the SRIT Library is also using the same package for its operations. Bar code technology is using in data entry process. The use of barcode technology increases efficiency and eliminates human errors as in case of manual data entry. The bar code reader/scanner is the input device for data entry. In SRIT Library, each book is having unique barcode, the accession number itself is its barcode. Each book is having two barcodes. ECAP provides a module to generate barcode labels. So, all barcodes for library books are generating in SRIT library with the help of ECAP in the form of stickers. The software provides number of modules mainly Book Status, Book Reserved, Circulation, Cross check, Departmental Library, OPAC, Dues, Daily report, fines, receipts, stock verification, barcodes etc. SRIT Library is using ECAP since 2013 for its operations.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Team Accordion */}
                <div 
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    activeTab === 'Library Team' 
                      ? 'border-orange-200 shadow-lg shadow-orange-100/50 bg-white' 
                      : 'border-neutral-200/60 bg-neutral-50/50 hover:border-orange-200 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setActiveTab(activeTab === 'Library Team' ? '' : 'Library Team')}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className={`font-bold transition-colors ${activeTab === 'Library Team' ? 'text-primary' : 'text-neutral-800 group-hover:text-primary'}`}>
                      Library Team
                    </span>
                    <div className={`p-1.5 rounded-full transition-colors ${activeTab === 'Library Team' ? 'bg-orange-100 text-primary' : 'bg-white text-neutral-400 group-hover:bg-orange-50 group-hover:text-primary shadow-sm border border-neutral-100'}`}>
                      <ChevronDown className={`transition-transform duration-300 ${activeTab === 'Library Team' ? 'rotate-180' : ''}`} size={18} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeTab === 'Library Team' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-6 pt-0">
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left border-collapse">
                              <thead>
                                <tr className="bg-orange-50 text-primary border-b-2 border-orange-200">
                                  <th className="px-4 py-3 font-bold">S.No.</th>
                                  <th className="px-4 py-3 font-bold">Name of the Staff Member</th>
                                  <th className="px-4 py-3 font-bold">Designation</th>
                                  <th className="px-4 py-3 font-bold">Qualification</th>
                                </tr>
                              </thead>
                              <tbody>
                                {libraryTeam.map((member, idx) => (
                                  <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50">
                                    <td className="px-4 py-3 font-medium text-neutral-900">{idx + 1}</td>
                                    <td className="px-4 py-3 font-bold text-neutral-800">{member.name}</td>
                                    <td className="px-4 py-3 text-neutral-600">{member.designation}</td>
                                    <td className="px-4 py-3 text-neutral-600">{member.qualification}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Accordions */}
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

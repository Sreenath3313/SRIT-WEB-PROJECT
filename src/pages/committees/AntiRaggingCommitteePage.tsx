import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, ChevronDown, CheckCircle, Target, ArrowRight, Eye, PhoneCall, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

const antiRaggingData = [
  {
    title: "Team",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2AQ09xKxTEaT2j27ZIcEs47S8BJrrY71dRgNagdg8r8RrlYYYyGnc2-VRORoYfTf4u-E95zgxEKAB/pubhtml?widget=true&headers=false"
  },
  {
    title: "Circulars",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4r0QJdkZc3TTEOqU_AWPzf8AFSLuGDweDRDFtwyjjhAK5pOy7RKTY-jeCwshi5A14KX_oe6TpLafd/pubhtml?widget=true&headers=false"
  },
  {
    title: "MoMs",
    iframeUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9sE-PuqjUMHp7Uu60SshcYDuw-1HUJwxASm3VvCqdFdtb7OOedw-7gJ1g1Cy2gAj-zfWsIss-uQ3L/pubhtml?widget=true&headers=false"
  }
]

export default function AntiRaggingCommitteePage() {
  const categoryTitle = 'Committees'
  const title = 'Anti-Ragging Committee'
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
            {/* Visual Header */}
            <motion.div variants={itemVariants} className="w-full max-w-lg mx-auto bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100 p-2">
               <div className="rounded-xl overflow-hidden bg-neutral-50">
                 <img src="https://www.srit.ac.in/wp-content/uploads/2021/10/Anti-Ragging-1024x934.jpg" alt="Anti-Ragging" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
               </div>
            </motion.div>

            {/* Vision & Mission */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-bold tracking-[.16em] uppercase mb-4">
                Overview
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8">Vision & Mission</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Eye size={64} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                      <Eye size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900">Vision</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed text-sm relative z-10">
                    To build a ragging-free environment by instilling the principles of democratic values, tolerance, empathy, compassion, and sensitivity among students, thereby creating a friendly and peaceful atmosphere on campus.
                  </p>
                </div>
                
                <div className="group relative bg-neutral-50/80 border border-orange-100/80 rounded-xl p-7 hover:border-orange-300/50 transition-colors duration-300">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target size={64} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                      <Target size={20} />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900">Mission</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed text-sm relative z-10">
                    The mission of anti-ragging is to eradicate all forms of harassment, bullying, and intimidation from educational institutions. This involves promoting a culture of respect, empathy, and inclusivity where every student feels safe, valued, and supported.
                  </p>
                </div>
              </div>

              <div className="border-t border-neutral-100 pt-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-primary">
                    <CheckCircle size={20} />
                  </div>
                  Objectives
                </h3>
                <ul className="space-y-4 text-neutral-600 text-sm list-none">
                  {[
                    { title: "Prevention", text: "The primary objective is to prevent instances of ragging before they occur. This involves implementing proactive measures such as awareness campaigns, orientation programs, and workshops to educate students about the consequences of ragging and promote respectful behavior." },
                    { title: "Enforcement of Policies", text: "Implementing and enforcing strict anti-ragging policies and regulations within educational institutions. This includes clear guidelines, disciplinary actions, and reporting mechanisms to ensure that any incidents of ragging are promptly addressed." },
                    { title: "Support for Victims", text: "Providing support services, counseling, and assistance to victims of ragging. It's crucial to create a safe space for victims to report incidents confidentially and access the necessary help to cope with the trauma and consequences of ragging." },
                    { title: "Accountability", text: "Holding perpetrators of ragging accountable for their actions through appropriate disciplinary measures. This may include sanctions, fines, suspension, or expulsion, depending on the severity of the offense." },
                    { title: "Collaboration and Engagement", text: "Encouraging collaboration and engagement among students, faculty, staff, parents, and community members in anti-ragging efforts. By involving all stakeholders, it's possible to create a united front against ragging and promote a culture of respect and empathy." },
                    { title: "Monitoring and Evaluation", text: "Continuously monitoring and evaluating the effectiveness of anti-ragging initiatives and policies. This involves collecting data on reported incidents, conducting surveys, and soliciting feedback from students and other stakeholders to identify areas for improvement and ensure that anti-ragging measures remain relevant and impactful." }
                  ].map((objective, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <ArrowRight className="text-primary/40 mt-1 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-primary" size={16} />
                      <span className="leading-relaxed">
                        <strong className="text-neutral-900">{objective.title} : </strong>
                        {objective.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>

            {/* Policy */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 rounded-xl text-primary">
                  <ShieldCheck size={22} />
                </div>
                Policy Document
              </h2>

              <ul className="space-y-4 text-neutral-600 text-sm list-none mb-8">
                {[
                  "Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student;",
                  "Indulging in rowdy or undisciplined activities by any student or students which causes or is likely to cause annoyance, hardship, physical or psychological harm or to raise fear or apprehension thereof in any fresher or any other student;",
                  "Asking any student to do any act which such student will not in the ordinary course do and which has the effect of causing or generating a sense of shame, or torment or embarrassment so as to adversely affect the physique or psyche of such fresher or any other student;",
                  "Any act by a senior student that prevents, disrupts or disturbs the regular academic activity of any other student or a fresher;",
                  "Exploiting the services of a fresher or any other student for completing the academic tasks assigned to an individual or a group of students.",
                  "Any act of financial extortion or forceful expenditure burden put on a fresher or any other student by students;",
                  "Any act of physical abuse including all variants of it: sexual abuse, homosexual assaults, stripping, forcing obscene and lewd acts, gestures, causing bodily harm or any other danger to health or person;",
                  "Any act or abuse by spoken words, emails, posts, public insults which would also include deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfiture to fresher or any other student;",
                  "Any act that affects the mental health and self-confidence of a fresher or any other student with or without an intent to derive a sadistic pleasure or showing off power, authority or superiority by a student over any fresher or any other student."
                ].map((func, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-orange-50/30 hover:border-orange-100 transition-colors group">
                    <span className="flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-white text-primary text-xs font-bold shadow-sm border border-neutral-100 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{func}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/50 blur-[50px] rounded-full pointer-events-none" />
                  <p className="text-sm text-neutral-700 leading-relaxed mb-4 relative z-10">
                    Every single incident of ragging a First Information Report (FIR) must be filed without exception by the institutional authorities with the local police authorities. Depending upon the nature and gravity of the offence as established the possible punishments for those found guilty of ragging at the institution level shall be any one or any combination of the following:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-600 pl-2 relative z-10">
                      <li className="flex gap-2"><ArrowRight className="text-primary shrink-0 mt-0.5" size={14} /> Suspension from attending classes</li>
                      <li className="flex gap-2"><ArrowRight className="text-primary shrink-0 mt-0.5" size={14} /> Withholding/withdrawing scholarship/fellowship and other benefits</li>
                      <li className="flex gap-2"><ArrowRight className="text-primary shrink-0 mt-0.5" size={14} /> Debarring from appearing in any test/examination or other evaluation process and/or Withholding results</li>
                      <li className="flex gap-2"><ArrowRight className="text-primary shrink-0 mt-0.5" size={14} /> Fine with public apology</li>
                      <li className="flex gap-2"><ArrowRight className="text-primary shrink-0 mt-0.5" size={14} /> Suspension/expulsion from the hostel</li>
                      <li className="flex gap-2"><ArrowRight className="text-primary shrink-0 mt-0.5" size={14} /> Rustication from the institution for period ranging from 1 to 4 semesters</li>
                      <li className="flex gap-2"><ArrowRight className="text-primary shrink-0 mt-0.5" size={14} /> Expulsion from the institution and consequent debarring from admission to any other Institution.</li>
                  </ul>
                  <p className="text-sm text-neutral-700 leading-relaxed mt-4 pt-4 border-t border-orange-200 relative z-10">
                    <strong>Collective punishment:</strong> when the persons committing or abetting the crime of ragging are not identified, the institution shall resort to collective punishment as a deterrent to ensure community pressure on the potential raggers.
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

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:border-orange-100 transition-all duration-300">
                    <h3 className="font-bold text-neutral-900 mb-1">Dr. G. Balakrishna, M.Tech, PhD,</h3>
                    <p className="text-sm text-neutral-500 mb-4">Principal, Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                    <div className="text-sm text-neutral-600 space-y-2">
                        <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mail:</strong> principal@srit.ac.in</p>
                        <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mobile No:</strong> 7893005520, 9494592820</p>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:border-orange-100 transition-all duration-300">
                    <h3 className="font-bold text-neutral-900 mb-1">Dr. L. Vamsi Krishna Reddy, M.Tech, PhD,</h3>
                    <p className="text-sm text-neutral-500 mb-4">Convener, Associate Professor & HOD, Department of Mechanical Engineering, Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                    <div className="text-sm text-neutral-600 space-y-2">
                        <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mail:</strong> antiragging@srit.ac.in</p>
                        <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /><strong>Mobile No:</strong> +919494592820</p>
                    </div>
                </div>
              </div>
            </motion.article>

            {/* Document Accordions - NEW THEME */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Documents & Records</h2>
              
              <div className="flex flex-col gap-4">
                {antiRaggingData.map((tab) => {
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

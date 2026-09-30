import { useEffect } from 'react'
import { Target, Eye, Flag, ShieldCheck, Settings, Users, ArrowRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import PageHeader from '../../components/common/PageHeader';

export default function AboutTAndPPage() {
  const categoryTitle = 'Placements'
  const title = 'About T & P'
  const navGroup = navLinks.find((item) => item.label === 'Placements')

  useEffect(() => {
    document.title = `${title} | SRIT`
    const description = `Official SRIT information for ${categoryTitle} ${title}.`
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
                    Empowering students to achieve their career goals and fostering mutually beneficial partnerships with the industry. To become a center of excellence in career development, preparing students to meet global challenges.
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
                    Our mission is to establish connections with prominent industries, organize campus recruitment events, and provide comprehensive training programs to enhance students' skills. We aim to support students in securing suitable employment opportunities.
                  </p>
                </div>
              </div>

              <div className="border-t border-neutral-100 pt-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg text-primary">
                    <Flag size={20} />
                  </div>
                  Objectives
                </h3>
                <ul className="space-y-4 text-neutral-600 text-sm list-none">
                  {[
                    "Organize campus recruitment drives for prefinal-year / final-year students with reputable companies.",
                    "Facilitate companies in recruiting candidates according to their requirements and raise awareness among students about various career options.",
                    "Enhance students' employability by providing training in aptitude and soft skills.",
                    "Assist students in securing summer training and internship programs. Bridge the gap between industry and academia through seminars, guest lectures, conferences, corporate meets, and industrial visits.",
                    "Coordination with various departments to impart industry-relevant skills."
                  ].map((objective, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <ArrowRight className="text-primary/40 mt-0.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-primary" size={16} />
                      <span className="leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>

            {/* Activities */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 rounded-xl text-primary">
                  <Users size={22} />
                </div>
                Training and Placement Cell Activities
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8 text-[15px]">
                The T&P cell is a one-stop centre for everything related to careers. We help students in finding and applying for jobs, career guidance, resume reviews, interview preparation, and more services to help students achieve their career goals.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Mentoring Session by Industry Experts", desc: "Mentoring sessions conducted by industry experts provide valuable insights and guidance to students, helping them understand industry needs, trends, and professional expectations." },
                  { title: "Company Specific Training", desc: "Training focuses on understanding the exam patterns, types of questions, and interview processes specific to particular companies." },
                  { title: "Resume Review", desc: "Comprehensive review services ensuring resumes showcase a well-rounded set of technical skills and experiences." },
                  { title: "Boot Camps", desc: "Intensive, focused training on specific programming languages and tools within a relatively short period." },
                  { title: "Top-up Courses", desc: "Advanced topics in programming languages for students who have completed foundational training." },
                  { title: "Mock Interviews", desc: "Simulated actual interview scenarios with Faculty experts and Alumni to bridge the gap between academic knowledge and industry expectations." }
                ].map((activity, i) => (
                  <div key={i} className="p-5 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-orange-50/30 hover:border-orange-100 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary text-xs font-bold shadow-sm border border-neutral-100">{i + 1}</span>
                      <h4 className="font-bold text-neutral-900 group-hover:text-primary transition-colors">{activity.title}</h4>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed pl-9">{activity.desc}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            {/* Policy */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 rounded-xl text-primary">
                  <ShieldCheck size={22} />
                </div>
                Placement Policy
              </h2>
              
              <div className="space-y-4">
                {[
                  { title: "T&P Cell Registration", desc: "Students must register before the specified deadline. Students with up to 5 active backlogs by the end of the 5th Semester are allowed to register." },
                  { title: "Pre-Placement Training", desc: "T&P cell provides necessary pre-placement training for all registered candidates including technical training, hackathons, and mock interviews." },
                  { title: "Campus Recruitment Drives", desc: "Registered students are required to register for each specific drive once a job notification is released." },
                  { title: "Dream Offer", desc: "Students can apply for a dream job if any organization offers a salary 50% (1.5X) more than their first job with a package of 10 LPA and below. Students are allowed to secure any number of jobs for a package of 10 LPA and above." }
                ].map((policy, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-xl border border-neutral-100 bg-white shadow-sm hover:shadow-md hover:border-orange-200/60 transition-all">
                    <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 text-primary font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1.5">{policy.title}</h4>
                      <p className="text-neutral-500 text-sm leading-relaxed">{policy.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>

            {/* Process */}
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <div className="p-2.5 bg-orange-50 rounded-xl text-primary">
                  <Settings size={22} />
                </div>
                Placement Process
              </h2>
              
              <div className="relative border-l-2 border-orange-100 ml-4 space-y-10 pl-8 py-2">
                {[
                  { title: "Invitation", desc: "T&P Cell sends invitations to companies along with institute information." },
                  { title: "Registration", desc: "The T&P officer shares the job description and eligibility criteria. Interested students register to participate." },
                  { title: "Pre-Placement Talk", desc: "Companies conduct pre-placement talks (online or offline) to facilitate interaction between students and companies." },
                  { title: "Recruitment Process", desc: "Companies conduct assessments for screening and shortlist candidates for GDs or Personal Interviews. Once finalized, the company makes an offer which the student accepts." }
                ].map((step, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute w-6 h-6 bg-white border-4 border-primary rounded-full -left-[45px] top-0 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                    <h4 className="font-bold text-neutral-900 mb-2 text-lg group-hover:text-primary transition-colors">{step.title}</h4>
                    <p className="text-[15px] text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </motion.div>
          
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

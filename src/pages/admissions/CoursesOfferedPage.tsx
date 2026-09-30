import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, BookOpen, Layers, ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'

export interface CourseProgram {
  title: string
  code: string
  link?: string
  degree: string
  description?: string
}

export const ugPrograms: CourseProgram[] = [
  {
    title: 'Civil Engineering',
    code: 'CIVIL',
    degree: 'B.Tech',
    link: '/department/civil',
    description: 'Infrastructure, Structural Engineering & Environmental Systems'
  },
  {
    title: 'Electronics and Communications Engineering',
    code: 'ECE',
    degree: 'B.Tech',
    link: '/department/ece',
    description: 'VLSI, Embedded Systems, Signal Processing & Telecommunications'
  },
  {
    title: 'CSE (Artificial Intelligence & Machine Learning)',
    code: 'CSM',
    degree: 'B.Tech',
    link: '/department/csm',
    description: 'Neural Networks, Machine Intelligence, Deep Learning & Predictive Models'
  },
  {
    title: 'Electrical and Electronics Engineering',
    code: 'EEE',
    degree: 'B.Tech',
    link: '/department/eee',
    description: 'Power Systems, Renewable Energy, Control Systems & Electric Vehicles'
  },
  {
    title: 'Computer Science and Engineering',
    code: 'CSE',
    degree: 'B.Tech',
    link: '/department/cse',
    description: 'Software Engineering, Cloud Computing, Algorithms & Data Structures'
  },
  {
    title: 'Mechanical Engineering',
    code: 'MEC',
    degree: 'B.Tech',
    link: '/department/mec',
    description: 'Thermal Systems, Robotics, Manufacturing & Automation'
  },
  {
    title: 'CSE (Artificial Intelligence & Data Science)',
    code: 'CAD',
    degree: 'B.Tech',
    link: '/department/cad',
    description: 'Big Data Analytics, AI Architectures & Data Driven Intelligence'
  }
]

export const pgPrograms: CourseProgram[] = [
  {
    title: 'M.Tech – CS (Computer Science)',
    code: 'M.Tech CS',
    degree: 'M.Tech',
    description: 'Advanced Computer Science Algorithms & Distributed Systems'
  },
  {
    title: 'M.Tech in EPS (Electrical Power Systems)',
    code: 'M.Tech EPS',
    degree: 'M.Tech',
    description: 'Smart Grid Technologies & Advanced Power Engineering'
  },
  {
    title: 'M.Tech – VLSI Design',
    code: 'M.Tech VLSI',
    degree: 'M.Tech',
    description: 'Semiconductor Microelectronics & Chip Design'
  }
]

export const nbaPrograms = [
  {
    code: 'CSE',
    title: 'Computer Science & Engineering',
    link: '/department/cse',
    status: 'NBA Accredited'
  },
  {
    code: 'ECE',
    title: 'Electronics & Communication Engineering',
    link: '/department/ece',
    status: 'NBA Accredited'
  },
  {
    code: 'EEE',
    title: 'Electrical & Electronics Engineering',
    link: '/department/eee',
    status: 'NBA Accredited'
  }
]

export default function CoursesOfferedPage() {
  useEffect(() => {
    document.title = 'Courses Offered | SRIT'
    const description =
      'Explore Undergraduate (B.Tech) and Postgraduate (M.Tech) degree programs approved by AICTE & Accredited by NBA at Srinivasa Ramanujan Institute of Technology (SRIT).'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />

      <PageHeader title="Courses Offered" categoryTitle="Admissions" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="w-full space-y-12">

          {/* Under Graduate Programs Section */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-orange-50 text-primary shrink-0">
                  <BookOpen size={24} />
                </span>
                <div>
                  <h2
                    className="font-serif font-bold text-neutral-900"
                    style={{
                      fontSize: 'clamp(24px, 3.2vw, 30px)',
                      lineHeight: '1.2'
                    }}
                  >
                    Under Graduate Programs approved by AICTE
                  </h2>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">
                    4-Year Bachelor of Technology (B.Tech) Degree Courses
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-600">
                 B.Tech Programs
              </span>
            </div>

            {/* UG Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ugPrograms.map((prog) => (
                <div
                  key={prog.title}
                  className="group relative bg-white rounded-xl border border-neutral-200/90 hover:border-primary/60 p-6 shadow-2xs hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Decorative top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-orange-50 text-primary font-bold text-xs border border-orange-200/60">
                        <Building2 size={13} /> {prog.code}
                      </span>
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/80">
                        {prog.degree}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors leading-snug">
                      {prog.title}
                    </h3>

                    {prog.description && (
                      <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                        {prog.description}
                      </p>
                    )}
                  </div>

                  {prog.link && (
                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-neutral-400">SRIT Department</span>
                      <Link
                        to={prog.link}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-100 text-neutral-700 font-semibold text-xs group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-2xs"
                      >
                        Explore Department <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Post Graduate Programs Section */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                  <Layers size={24} />
                </span>
                <div>
                  <h2
                    className="font-serif font-bold text-neutral-900"
                    style={{
                      fontSize: 'clamp(24px, 3.2vw, 30px)',
                      lineHeight: '1.2'
                    }}
                  >
                    Post Graduate Programs approved by AICTE
                  </h2>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">
                    2-Year Master of Technology (M.Tech) Specializations
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700">
                 M.Tech Programs
              </span>
            </div>

            {/* PG Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pgPrograms.map((prog) => (
                <div
                  key={prog.title}
                  className="group relative bg-white rounded-xl border border-neutral-200/90 hover:border-purple-400/60 p-6 shadow-2xs hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-50 text-purple-700 font-bold text-xs border border-purple-200/60">
                        <Layers size={13} /> {prog.code}
                      </span>
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/80">
                        {prog.degree}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-purple-700 transition-colors leading-snug">
                      {prog.title}
                    </h3>

                    {prog.description && (
                      <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                        {prog.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-medium">
                    <span>AICTE Approved</span>
                    <span className="text-purple-600 font-semibold">Postgraduate</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Programs Accredited by NBA Section */}
          <section className="bg-neutral-900 text-white rounded-xl p-6 sm:p-10 shadow-md border border-neutral-800 space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-5">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-primary text-white shrink-0">
                  <Award size={24} />
                </span>
                <div>
                  <h2
                    className="font-serif font-bold text-white"
                    style={{
                      fontSize: 'clamp(24px, 3.2vw, 30px)',
                      lineHeight: '1.2'
                    }}
                  >
                    Programs Accredited by NBA
                  </h2>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-0.5">
                    National Board of Accreditation (NBA) Certified Tier-1 Quality Programs
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs font-semibold text-primary">
                <CheckCircle2 size={14} /> Tier-1 Quality
              </span>
            </div>

            {/* NBA Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nbaPrograms.map((nba) => (
                <div
                  key={nba.code}
                  className="group relative bg-neutral-800/90 rounded-xl border border-neutral-700/80 hover:border-primary p-6 shadow-md hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 text-xs font-extrabold rounded-lg bg-primary text-white shadow-2xs">
                        {nba.status}
                      </span>
                      <CheckCircle2 size={18} className="text-primary" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-primary transition-colors pt-1">
                      {nba.code}
                    </h3>
                    <p className="text-neutral-300 text-sm font-medium leading-relaxed">
                      {nba.title}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-700/80 flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-medium">SRIT Department</span>
                    <Link
                      to={nba.link}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-700/80 text-white font-semibold text-xs group-hover:bg-primary transition-all duration-300"
                    >
                      View Department <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

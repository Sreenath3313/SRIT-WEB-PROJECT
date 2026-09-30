import React from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  Target,
  Compass,
  Award,
  CheckCircle2,
  Users,
  FileCheck,
  Laptop,
  UserCheck,
  Building2,
  TrendingUp,
  Calendar,
  ShieldCheck,
  Layers,
  GraduationCap,
  BookOpen,
  ArrowUpRight
} from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'

const activities = [
  {
    id: 1,
    title: 'Mentoring session by Industry Experts',
    icon: Users,
    badge: 'Expert Guidance',
    description:
      'Mentoring sessions conducted by industry experts provide valuable insights and guidance to students, helping them understand industry needs, trends, and professional expectations.',
    benefits: [
      'Industry Insights',
      'Career Guidance',
      'Real World Experience',
      'Motivation & Inspiration',
      'Understanding Industry Culture',
      'Portfolio & Project Advice'
    ]
  },
  {
    id: 2,
    title: 'Company Specific Training',
    icon: Target,
    badge: 'Targeted Prep',
    description:
      'Company-specific training is provided to students to help them prepare for the recruitment processes of particular companies, focusing on exam patterns, question types, and interview formats.',
    benefits: [
      'Understanding Exam Patterns',
      'Familiarization with Question Types',
      'Interview Preparation',
      'Mock Assessments'
    ]
  },
  {
    id: 3,
    title: 'Resume Review',
    icon: FileCheck,
    badge: 'Profile Enhancement',
    description:
      'Resume review services provide students with the chance to have their resumes assessed by professionals. This covers academic credentials, skills, internships, projects, and certifications.',
    benefits: [
      'Academic Credentials Assessment',
      'Skills & Tech Showcase',
      'Internship & Project Highlights',
      'Professional Formatting'
    ]
  },
  {
    id: 4,
    title: 'Boot Camps',
    icon: Laptop,
    badge: 'Intensive Training',
    description:
      'Boot Camps offer intensive, focused training on specific programming languages and tools within a short period, allowing students to quickly gain practical skills for real-world projects.',
    benefits: [
      'Focused Learning',
      'Practical, Hands-On Experience',
      'Industry-Relevant Skills',
      'Problem-Solving Techniques'
    ]
  },
  {
    id: 5,
    title: 'Top Up Courses',
    icon: BookOpen,
    badge: 'Advanced Learning',
    description:
      'Top-up courses serve as an extended version of bootcamps, delving into advanced topics in programming languages and specialized areas to tackle technical placement challenges.',
    benefits: [
      'Advanced Technical Topics',
      'Specialized Domain Expertise',
      'Placement Technical Readiness',
      'Career Skills Advancement'
    ]
  },
  {
    id: 6,
    title: 'Mock Interviews',
    icon: UserCheck,
    badge: 'Realistic Simulation',
    description:
      'Mock Interviews with Faculty experts and Alumni serve as a crucial tool in preparing students for real-world job opportunities by simulating actual interview scenarios.',
    benefits: [
      'Faculty & Alumni Feedback',
      'Communication & Skill Refinement',
      'Anxiety Reduction & Confidence',
      '1-on-1, Panel & Group Formats'
    ]
  }
]

const placementPolicies = [
  {
    num: '01',
    title: 'T&P Cell Registration',
    icon: Calendar,
    summary:
      'The students who wish to participate in placement drives needs to register at the T&P cell before the specified deadline. No late entries will be entertained under any circumstances. The students with up to 5 active backlogs by the end of 5th Semester are allowed to register.'
  },
  {
    num: '02',
    title: 'Pre-Placement Training',
    icon: GraduationCap,
    summary:
      'T&P cell provide necessary pre-placement training for all the registered candidates which includes technical training, hackathons, assessments through coding platforms, mock interviews and mentoring sessions by industry experts.'
  },
  {
    num: '03',
    title: 'Campus Recruitment Drives',
    icon: Building2,
    summary:
      'All the T&P cell registered students are allowed to participate in campus recruitment drives. Once a job notification is released, students who wish to participate in the drive are required to register for each drive.'
  },
  {
    num: '04',
    title: 'Dream Offer',
    icon: Award,
    summary:
      'The T&P cell will provide opportunities to all its registered students to secure one job at the first instance, and pursues a policy of “students can apply for the dream job if any organization offering the salary of 50% (1.5X) more than first job with a package of 10 LPA and below”. In addition, students are allowed to secure any number of jobs for a package of 10 LPA and above.'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Invitation',
    desc: 'T&P Cell sends invitation to companies along with institute information. Companies interested in recruitment will notify to T&P Cell.'
  },
  {
    step: '02',
    title: 'Registration',
    desc: 'The Training and Placement officer share job description and eligibility criteria to all the T&P registered students. Interested students will register for participation in recruitment and database will be communicated to the recruiters.'
  },
  {
    step: '03',
    title: 'Pre-Placement Talk',
    desc: 'Companies interested in recruitment can conduct pre-placement talks either online or offline. Pre-Placement Talks provide a platform to facilitate interaction between students and companies, so that both are able to find the best match according to their aspirations and requirements.'
  },
  {
    step: '04',
    title: 'Recruitment Process',
    desc: 'Firstly, companies can conduct assessments for screening candidates and shortlist the candidates for either Group Discussion rounds or Personal Interview rounds depending on the organization’s recruitment policy. We welcome all the recruiters to conduct the process in hybrid mode (In Person or online).'
  },
  {
    step: '05',
    title: 'Job Offer',
    desc: 'Once the final interview round is conducted, the company makes a final offer to the candidate. The offer should include the details such as job role, compensation package and other terms and conditions required by the candidate to make further decision. Post receiving the provisional offer letter, the student accepts the same.'
  }
]

export default function AboutTAPPage() {
  React.useEffect(() => {
    document.title = 'About Training & Placement Cell | SRIT'
    const description =
      'Discover the Training & Placement (T&P) Cell at Srinivasa Ramanujan Institute of Technology (SRIT) - Vision, Mission, Objectives, Activities, Placement Policy, and Process.'
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

      <PageHeader title="Training & Placement Cell" categoryTitle="Placements" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="w-full space-y-12">

          {/* Overview / Introduction Section */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary text-xs font-bold uppercase tracking-wider">
              <Compass size={14} /> T&amp;P Overview
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 leading-snug">
              Building Careers &amp; Empowering Tomorrow&apos;s Tech Leaders
            </h2>

            <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed text-justify">
              <p>
                The <strong className="text-neutral-900">Srinivasa Ramanujan Institute of Technology (SRIT)</strong>, Andhra Pradesh, has been dedicated to the holistic development of its students since its inception. With the core philosophy of <em className="text-primary font-semibold">&ldquo;student empowerment, industry collaboration, and continuous skill development&rdquo;</em>, SRIT has been imparting comprehensive education in science and technology through its unique and flexible fractal curriculum.
              </p>
              <p>
                To ensure the 360-degree development of its students, a cell is established and operates as the <strong className="text-neutral-900">Training and Placement Cell</strong>. This cell provides career guidance to all students and facilitates excellent internship and placement opportunities. SRIT invites global industry and academic partners to collaborate, aiming to contribute positively to society.
              </p>
              <p>
                The T&amp;P Cell committed to ensuring the proper placement of students. It advises students on career options and provides up-to-date information on training and employment opportunities. The cell focuses on offering guidance and counselling and bringing students and potential employers together to achieve optimal placements, considering market conditions. It serves the interests of both students and employers by providing the necessary platform for successful interactions.
              </p>
            </div>
          </section>

          {/* Vision & Mission Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-neutral-900 text-white rounded-xl p-7 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between border border-neutral-800">
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 rounded-xl bg-primary text-white shrink-0">
                    <Target size={22} />
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">Vision</h3>
                </div>
                <p className="text-neutral-300 text-base sm:text-lg italic leading-relaxed border-l-4 border-primary pl-4 my-4">
                  &ldquo;Equipping the students by imparting quality training to meet the expectations of the industry by striving continuously for excellence and promoting them with the ethical and human values.&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                 Excellence &amp; Ethics
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-7 sm:p-8 shadow-sm border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 rounded-xl bg-orange-500 text-white shrink-0">
                    <Compass size={22} />
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900">Mission</h3>
                </div>
                <ul className="space-y-3 text-neutral-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>To bridge the gap from campus to corporate.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>To enhance the employability of the students and provide career opportunities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>To build confidence among the students and get ready for the job by preparing aptitude tests, presentations, communication skills and mock-interviews.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>To equip competence among the students through internships, certifications and pre-placement training.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>Aim to transform the students so as to meet the industry expectations in career building and in turn bring laurels to the parent institution.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Objectives */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Award size={24} />
              </span>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                  Objectives of T&amp;P Cell
                </h2>
                <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">
                  Strategic goals driving student success and recruiter satisfaction
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shrink-0">1</span>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  Organize campus recruitment drives for prefinal-year / final-year students with reputable companies.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shrink-0">2</span>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  Facilitate companies in recruiting candidates according to their requirements. Raise awareness among students about various career options.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shrink-0">3</span>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  Enhance students’ employability by providing training in aptitude and soft skills.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shrink-0">4</span>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  Assist students in securing summer training and internship programs. Bridge the gap between industry and academia through: Seminars, guest lectures, conferences, corporate meets, and industrial visits.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 md:col-span-2 flex items-start gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shrink-0">5</span>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  Coordination with various departments to impart industry-relevant skills.
                </p>
              </div>
            </div>
          </section>

          {/* Activities Section */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <Layers size={14} /> Core Initiatives
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                Training and Placement Cell Activities
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 leading-relaxed">
                The T&amp;P cell is one-stop centre for everything related to career. Help students in finding and applying for jobs, career guidance, resume reviews, interview preparation and more services to help students achieve career goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((act) => {
                const Icon = act.icon
                return (
                  <div
                    key={act.id}
                    className="group p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-primary/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <Icon size={24} />
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-200/70 text-neutral-700">
                          {act.badge}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">
                        {act.id}. {act.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {act.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-200/60">
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Key Aspects &amp; Benefits:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {act.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white border border-neutral-200 text-neutral-700 shadow-2xs"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Placement Policy Section */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck size={14} /> Rules &amp; Guidelines
              </div>
              <h2
    className="font-serif font-bold text-neutral-900"
    style={{
        fontSize: 'clamp(32px, 4vw, 32px)',
        lineHeight: '1.2',
    }}
>
    Placement Policy
</h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 leading-relaxed">
                The placement policy provides clear guidelines to students on the entire process, from registering for participation in campus placements to attending placement drives and securing job offers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {placementPolicies.map((pol) => {
                const Icon = pol.icon
                return (
                  <div
                    key={pol.num}
                    className="p-6 rounded-xl border border-neutral-200 bg-white shadow-2xs hover:shadow-md transition-shadow space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="p-2.5 rounded-xl bg-primary text-white font-bold text-sm">
                        <Icon size={20} />
                      </span>
                      <span className="font-serif text-2xl font-extrabold text-neutral-300">
                        {pol.num}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-neutral-900">
                      {pol.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {pol.summary}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Placement Process Section */}
          <section className="bg-white rounded-xl border border-neutral-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <TrendingUp size={14} /> Lifecycle
              </div>
              <h2
    className="font-serif font-bold text-neutral-900"
    style={{
        fontSize: 'clamp(32px, 4vw, 32px)',
        lineHeight: '1.2',
    }}
>
    Placement Process
</h2>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 leading-relaxed">
                The Training and Placement Cell manages communication between recruiters and students, starting from inviting companies for recruitment to supporting students throughout the placement process until job offers are finalized.
              </p>
            </div>

            <div className="relative space-y-6 before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-neutral-200 hidden md:block">
              {processSteps.map((stepItem, index) => (
                <div key={stepItem.step} className="relative flex items-start gap-6 pl-2">
                  <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-white shadow-md text-sm shrink-0">
                    {stepItem.step}
                  </span>
                  <div className="flex-1 bg-neutral-50 border border-neutral-200/80 p-5 rounded-xl hover:bg-white hover:shadow-sm transition">
                    <h3 className="font-serif text-lg font-bold text-neutral-900 mb-1">
                      {index + 1}. {stepItem.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile version for Placement Process */}
            <div className="space-y-4 md:hidden">
              {processSteps.map((stepItem, index) => (
                <div key={stepItem.step} className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-white">
                      {stepItem.step}
                    </span>
                    <h3 className="font-serif text-base font-bold text-neutral-900">
                      {index + 1}. {stepItem.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {stepItem.desc}
                  </p>
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

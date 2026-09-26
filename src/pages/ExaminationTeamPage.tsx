import { useEffect } from 'react'
import { FileText, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { navLinks } from '../data/navigation'

const teamMembers = [
  {
    sNo: 1,
    name: 'Dr M. Ranjit Reddy',
    designation: 'Controller of Examinations',
    mobile: '9515711111',
    email: 'coe@srit.ac.in'
  },
  {
    sNo: 2,
    name: 'Dr. T. Venkata Naga Jayudu',
    designation: 'Deputy Controller of Examinations',
    mobile: '9885258147',
    email: 'dcoe@srit.ac.in'
  },
  {
    sNo: 3,
    name: 'Mr. C. Sudheer Kumar',
    designation: 'Additional Controller of Examinations',
    mobile: '8019370310',
    email: 'ace1@srit.ac.in'
  },
  {
    sNo: 4,
    name: 'Mr. P. Kavin Kumar',
    designation: 'Additional Controller of Examinations',
    mobile: '9110645392',
    email: 'ace2@srit.ac.in'
  },
  {
    sNo: 5,
    name: 'Mr. T. Aravind Babu',
    designation: 'Additional Controller of Examinations',
    mobile: '7893333008',
    email: 'ace3@srit.ac.in'
  }
];

export default function ExaminationTeamPage() {
  const categoryTitle = 'Examination'
  const title = 'Team Members'
  const navGroup = navLinks.find((item) => item.label === 'Examination')

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
      <header className="relative overflow-hidden pt-[122px] lg:pt-[140px] pb-14 bg-[#0A0903]">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#FF5422 1px,transparent 1px),linear-gradient(90deg,#FF5422 1px,transparent 1px)', backgroundSize: '52px 52px' }} />
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-neutral-400">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>•</span>
            <span className="text-primary">{categoryTitle}</span>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-white">
              <FileText size={23} />
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
          </div>
        </div>
      </header>
      <main className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
        <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-9 shadow-sm">
            <p className="text-primary text-xs font-bold tracking-[.16em] uppercase">{categoryTitle}</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900">{title}</h2>
            
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-600">
                <thead className="bg-neutral-50/50 text-neutral-900 font-semibold border-b border-neutral-200">
                  <tr>
                    <th className="px-4 py-4 rounded-tl-xl">S. No</th>
                    <th className="px-4 py-4">Name</th>
                    <th className="px-4 py-4">Designation</th>
                    <th className="px-4 py-4">Mobile</th>
                    <th className="px-4 py-4 rounded-tr-xl">Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {teamMembers.map((member) => (
                    <tr key={member.sNo} className="hover:bg-orange-50/30 transition-colors">
                      <td className="px-4 py-4 font-medium text-neutral-500">{member.sNo}</td>
                      <td className="px-4 py-4 font-bold text-neutral-900">{member.name}</td>
                      <td className="px-4 py-4 font-medium">{member.designation}</td>
                      <td className="px-4 py-4">
                        <a href={`tel:${member.mobile}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                          <Phone size={14} />
                          {member.mobile}
                        </a>
                      </td>
                      <td className="px-4 py-4">
                        <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                          <Mail size={14} />
                          {member.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </article>
          
          <aside className="rounded-2xl border border-neutral-200 bg-white p-5 h-fit">
            <h2 className="font-serif text-lg font-bold text-neutral-900">Explore {categoryTitle}</h2>
            <nav className="mt-3 divide-y divide-neutral-100">
              {navGroup?.subItems?.map((item) => (
                <Link key={item.href} to={item.href} className={`block py-2.5 text-sm ${item.href === '/examination/team-members' ? 'text-primary font-semibold' : 'text-neutral-600 hover:text-primary'}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}

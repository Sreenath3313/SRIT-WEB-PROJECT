import { useEffect } from 'react'
import { FileText, GraduationCap } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { navLinks } from '../data/navigation'
import IframeWithLoader from '../components/common/IframeWithLoader'

const REGULATIONS_SHEET = 'https://docs.google.com/spreadsheets/d/1F3Z45kK6PpV0i4KThs-YwAbWTAQwyfqJ/pubhtml?widget=true&chrome=false&headers=false'

export default function AcademicRegulationsPage() {
  const location = useLocation()
  
  // Determine if we are under admissions or examination based on URL
  const isAdmissions = location.pathname.includes('/admissions/')
  const category = isAdmissions ? 'admissions' : 'examination'
  const categoryTitle = isAdmissions ? 'Admissions' : 'Examination'
  const IconComponent = isAdmissions ? GraduationCap : FileText
  const title = 'Academic Regulations'
  const navGroup = navLinks.find((item) => item.label.toLowerCase().replace(/\s+/g, '-') === category)

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
  }, [title, categoryTitle])

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
              <IconComponent size={23} />
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
          </div>
        </div>
      </header>
      <main className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
        <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
          <article className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-9 shadow-sm">
            <p className="text-primary text-xs font-bold tracking-[.16em] uppercase">{categoryTitle}</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900 mb-8">{title}</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-neutral-200 mt-6 shadow-sm">
              <div className="w-full overflow-x-auto">
                <IframeWithLoader 
                  src={REGULATIONS_SHEET}
                  title="Academic Regulations"
                  style={{ height: '550px', minWidth: '900px' }}
                />
              </div>
            </div>
            
          </article>
          
          <aside className="rounded-2xl border border-neutral-200 bg-white p-5 h-fit">
            <h2 className="font-serif text-lg font-bold text-neutral-900">Explore {categoryTitle}</h2>
            <nav className="mt-3 divide-y divide-neutral-100">
              {navGroup?.subItems?.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  className={`block py-2.5 text-sm ${item.href.includes('academic-regulations') ? 'text-primary font-semibold' : 'text-neutral-600 hover:text-primary'}`}
                >
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

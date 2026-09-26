import { useEffect } from 'react'
import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { navLinks } from '../data/navigation'
import IframeWithLoader from '../components/common/IframeWithLoader'

const NOTIFICATIONS_SHEET = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQbUoa40R0QfaHVVE10uNK6hqKmpNhA5Lx5n4-cvw8Pl5WqWq9vdsjHscJJjeFP4Q/pubhtml?widget=true&chrome=false&headers=false'

export default function NotificationsPage() {
  const categoryTitle = 'Examination'
  const title = 'Notifications & Results'
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
            <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900 mb-8">{title}</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-neutral-200 mt-6 shadow-sm">
              <div className="w-full overflow-x-auto">
                <IframeWithLoader 
                  src={NOTIFICATIONS_SHEET}
                  title="Notifications & Results"
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
                  className={`block py-2.5 text-sm ${item.href.includes('notifications-and-results') ? 'text-primary font-semibold' : 'text-neutral-600 hover:text-primary'}`}
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

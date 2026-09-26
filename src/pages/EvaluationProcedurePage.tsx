import { useEffect, useState } from 'react'
import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { navLinks } from '../data/navigation'
import IframeWithLoader from '../components/common/IframeWithLoader'

const evaluationTabs = [
  {
    id: 'r23-ug',
    title: 'R23 Regulations - UG',
    url: 'https://docs.google.com/document/d/1E8Ns6f9LDOLtEA7wttKMhre93tRmEyTw/pub?embedded=true',
    height: 800
  },
  {
    id: 'r23-pg',
    title: 'R23 Regulations - PG',
    url: 'https://docs.google.com/document/d/1ppqzt1p0xsQKuL2yYVwQN1uJz50GmTyy/pub?embedded=true',
    height: 800
  },
  {
    id: 'r20-ug',
    title: 'R20 Regulations - UG',
    url: 'https://docs.google.com/document/d/1tyJ5t5f3eGTUvz1hwaETZmzrbyTic5gs/pub?embedded=true',
    height: 1000
  },
  {
    id: 'r19-ug',
    title: 'R19 Regulations - UG',
    url: 'https://docs.google.com/document/d/14uiD3gjewrQ31yYk8o7AHKvK5lU340hp/pub?embedded=true',
    height: 1000
  }
]

export default function EvaluationProcedurePage() {
  const categoryTitle = 'Examination'
  const title = 'Evaluation Procedure'
  const navGroup = navLinks.find((item) => item.label === 'Examination')
  const [activeTab, setActiveTab] = useState(evaluationTabs[0].id)

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

  const activeData = evaluationTabs.find(tab => tab.id === activeTab) || evaluationTabs[0]
  const activeIframe = activeData.url

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
            <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900 mb-6">{title}</h2>
            
            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-neutral-100 pb-4">
              {evaluationTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-[#FF5422] text-white shadow-sm' 
                      : 'bg-neutral-50 text-neutral-600 hover:bg-orange-50 hover:text-[#FF5422]'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
              <IframeWithLoader 
                key={activeIframe} 
                src={activeIframe}
                title={`Evaluation Procedure - ${evaluationTabs.find(t => t.id === activeTab)?.title}`}
                style={{ height: `${activeData?.height || '800'}px`, width: '100%' }}
              />
            </div>
            
          </article>
          
          <aside className="rounded-2xl border border-neutral-200 bg-white p-5 h-fit">
            <h2 className="font-serif text-lg font-bold text-neutral-900">Explore {categoryTitle}</h2>
            <nav className="mt-3 divide-y divide-neutral-100">
              {navGroup?.subItems?.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  className={`block py-2.5 text-sm ${item.href.includes('evaluation-procedure') ? 'text-primary font-semibold' : 'text-neutral-600 hover:text-primary'}`}
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

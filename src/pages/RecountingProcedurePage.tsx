import { useEffect, useState } from 'react'
import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { navLinks } from '../data/navigation'
import IframeWithLoader from '../components/common/IframeWithLoader'

const recountingTabs = [
  {
    id: 'r23-ug',
    title: 'R23 Regulations - UG',
    threshold: 11,
    url: 'https://docs.google.com/document/d/1E8Ns6f9LDOLtEA7wttKMhre93tRmEyTw/pub?embedded=true',
    height: 800
  },
  {
    id: 'r23-pg',
    title: 'R23 Regulations - PG',
    threshold: 9,
    url: 'https://docs.google.com/document/d/1ppqzt1p0xsQKuL2yYVwQN1uJz50GmTyy/pub?embedded=true',
    height: 800
  },
  {
    id: 'r20-ug',
    title: 'R20 Regulations - UG',
    threshold: 9,
    url: 'https://docs.google.com/document/d/1tyJ5t5f3eGTUvz1hwaETZmzrbyTic5gs/pub?embedded=true',
    height: 1000
  },
  {
    id: 'r19-ug',
    title: 'R19 Regulations - UG',
    threshold: 11,
    url: 'https://docs.google.com/document/d/14uiD3gjewrQ31yYk8o7AHKvK5lU340hp/pub?embedded=true',
    height: 1000
  }
]

export default function RecountingProcedurePage() {
  const categoryTitle = 'Examination'
  const title = 'Recounting & Re-Evaluation Procedure'
  const navGroup = navLinks.find((item) => item.label === 'Examination')
  const [activeTab, setActiveTab] = useState(recountingTabs[0].id)

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

  const activeData = recountingTabs.find(tab => tab.id === activeTab) || recountingTabs[0]
  const thresholdString = activeData.threshold < 10 ? `0${activeData.threshold}` : `${activeData.threshold}`

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
            <div className="flex flex-wrap gap-2 mb-8 border-b border-neutral-100 pb-4">
              {recountingTabs.map(tab => (
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

            {/* Dynamic Content */}
            <div className="w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm mb-8">
              <IframeWithLoader 
                key={activeData.url} 
                src={activeData.url}
                title={`Recounting & Re-Evaluation Procedure - ${activeData.title}`}
                style={{ height: `${activeData.height || 800}px`, width: '100%' }}
              />
            </div>

            <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-[#FF5422] prose-p:text-neutral-700 prose-li:text-neutral-700">
              <p>
                The recounting/re-evaluation of answer book shall not be permitted in respect of the marks awarded to the scripts of practical examination/project work (including theory part) and in viva-voce/oral/comprehensive examinations. This recounting/re-evaluation facility shall be for theory papers of Semester End Exams only.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Recounting or Retotalling:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>If the student wants to verify the details of totalling of marks he/she scored in any course may independently apply for recounting or retotalling.</li>
                <li>If any discrepancy in totalling of marks is found, then it will be updated after proper verification.</li>
                <li>If the recounting marks are less than the original marks, the original marks shall be retained.</li>
                <li>If the marks after recounting are more than the original marks, then the recounting marks shall be awarded.</li>
              </ol>

              <h3 className="text-xl font-bold mt-8 mb-4">Re-evaluation:</h3>
              <p>
                If the student is not satisfied with the marks awarded, he/she may independently apply (online) for re-evaluation of answer script in prescribed format within the stipulated period.
              </p>
              
              <p className="font-semibold italic mt-6 mb-2">Award of marks after re-evaluation:</p>
              <ul className="list-disc pl-5 space-y-4">
                <li>If the re-evaluation marks are less than the original marks, the original marks shall be retained.</li>
                <li>
                  If the revaluation marks are greater than original marks then apply the following:
                  <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>If the difference between original marks and re-evaluation marks is <strong>less than or equal to {thresholdString} marks</strong>, there will be <strong>NO CHANGE</strong> in the final marks.</li>
                    <li>If the difference between original marks and re-evaluation marks is <strong>more than {thresholdString} marks</strong>, then the <strong>highest marks</strong> will be considered as the final marks.</li>
                  </ol>
                </li>
              </ul>
            </div>
            
          </article>
          
          <aside className="rounded-2xl border border-neutral-200 bg-white p-5 h-fit">
            <h2 className="font-serif text-lg font-bold text-neutral-900">Explore {categoryTitle}</h2>
            <nav className="mt-3 divide-y divide-neutral-100">
              {navGroup?.subItems?.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  className={`block py-2.5 text-sm ${item.href.includes('recounting-and-re-evaluation-procedure') ? 'text-primary font-semibold' : 'text-neutral-600 hover:text-primary'}`}
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

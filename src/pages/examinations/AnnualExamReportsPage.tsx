import { useEffect } from 'react'
import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

export default function AnnualExamReportsPage() {
  const categoryTitle = 'Examination'
  const title = 'Annual Examination Reports'
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
      <PageHeader title={title} categoryTitle={categoryTitle} icon={<FileText size={26} />} />
      
      <main className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
        <div className="flex flex-col gap-8 w-full">
          <article className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-9 shadow-sm">
            <p className="text-primary text-xs font-bold tracking-[.16em] uppercase">{categoryTitle}</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900 mb-6">{title}</h2>
            
            <div className="w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
              <IframeWithLoader 
                src="https://docs.google.com/spreadsheets/d/17EZVNSmLyY0VRd01R9d778G8tRZnpINr/pubhtml?widget=true&chrome=false&headers=false"
                title={title}
                style={{ height: '600px', width: '100%' }}
              />
            </div>
            
          </article>
          
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

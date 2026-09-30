import { useEffect } from 'react'
import { FileText, Download, History } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import IframeWithLoader from '../../components/common/IframeWithLoader'
import PageHeader from '../../components/common/PageHeader';

export default function DigiLockerPage() {
  const categoryTitle = 'Examination'
  const title = 'DigiLocker-Marks Memos'
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
          <div className="flex flex-col gap-8">
            <article className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-9 shadow-sm">
              <p className="text-primary text-xs font-bold tracking-[.16em] uppercase">Guide</p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900 mb-6">Procedure to Access DigiLocker</h2>
              
              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-neutral-800">DigiLocker Access Guide</h3>
                  <p className="text-sm text-neutral-600 mt-1">Download the official step-by-step PDF guide to access your Grade Cards via DigiLocker.</p>
                </div>
                <a 
                  href="https://drive.google.com/file/d/1eAJNshbHFzgRKfnvn0XF4zc6kd85sUXQ/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shrink-0"
                >
                  <Download size={18} />
                  <span>Download Guide</span>
                </a>
              </div>
            </article>

            <article className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-9 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-lg text-primary">
                  <History size={20} />
                </div>
                <div>
                  <p className="text-primary text-xs font-bold tracking-[.16em] uppercase">Archive</p>
                  <h2 className="font-serif text-2xl font-bold text-neutral-900">Exams History</h2>
                </div>
              </div>
              
              <div className="w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
                <IframeWithLoader 
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQhraye8CPOrjk5oXGXmMRGLQBJqWDu797o6_oQS3nhp33LY7fiFoh4DIh6vWPCH9YxTshz5LIdvBZP/pubhtml?widget=true&chrome=false&headers=false"
                  title="Exams History"
                  style={{ height: '600px', width: '100%' }}
                />
              </div>
            </article>
          </div>
          
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { useEffect } from 'react'
import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { navLinks } from '../../data/navigation'
import malpracticeRules from '../../data/malpracticeRules.json'
import PageHeader from '../../components/common/PageHeader';

export default function MalpracticeRulesPage() {
  const categoryTitle = 'Examination'
  const title = 'Malpractice Rules'
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
            <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900 mb-6">Disciplinary Action for / Improper Conduct in Examinations</h2>
            
            <div className="w-full overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-sm text-neutral-700">
                <thead className="text-white border-b border-neutral-200">
                  <tr className="bg-[#f27441]">
                    <th scope="col" className="px-4 py-4 font-bold text-center border-r border-white/20 w-16">S. No.</th>
                    <th scope="col" className="px-4 py-4 font-bold text-center border-r border-white/20 w-2/5">Nature of Malpractices/Improper conduct</th>
                    <th scope="col" rowSpan={2} className="px-4 py-4 font-bold text-center align-middle">Punishment</th>
                  </tr>
                  <tr className="bg-[#fa9372] text-black italic">
                    <td className="px-4 py-2 border-r border-white/20"></td>
                    <td className="px-4 py-2 font-bold text-center border-r border-white/20">If the candidate</td>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {malpracticeRules.map((rule, index) => (
                    <tr key={index} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-4 py-4 font-semibold align-top text-center border-r border-neutral-200">{rule.num}</td>
                      <td className="px-4 py-4 align-top leading-relaxed border-r border-neutral-200">{rule.nature}</td>
                      <td className="px-4 py-4 align-top leading-relaxed">{rule.punishment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </article>
          
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

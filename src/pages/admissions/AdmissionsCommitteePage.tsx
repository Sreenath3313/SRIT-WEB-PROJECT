import { useEffect } from 'react'
import { Users } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import PageHeader from '../../components/common/PageHeader'
import { navLinks } from '../../data/navigation'

export default function AdmissionsCommitteePage() {
  const categoryTitle = 'Admissions'
  const title = 'Admissions Committee'
  const navGroup = navLinks.find((item) => item.label === categoryTitle)

  useEffect(() => {
    document.title = `${title} | SRIT`
    const description = `Official SRIT information for ${categoryTitle} ${title}.`
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [title])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-primary/20">
      <Navbar />
      <PageHeader title={title} categoryTitle={categoryTitle} icon={<Users size={26} />} />

      <main className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1 relative z-10 -mt-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          {/* Main Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex-1 flex flex-col gap-8 min-w-0">
            <motion.article variants={itemVariants} className="rounded-xl border border-neutral-200/60 bg-white p-6 sm:p-9 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-bold tracking-[.16em] uppercase mb-4">
                Committee Members
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Admissions Committee</h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                The Admissions Committee is responsible for overseeing the admission process, ensuring transparency, and adhering to the guidelines provided by the Government of Andhra Pradesh and JNTUA.
              </p>

              {/* Placeholder for Data */}
              <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-8 text-center">
                <Users className="mx-auto text-orange-300 mb-4" size={48} />
                <h3 className="text-neutral-800 font-bold text-lg mb-2">Committee Details Not Provided</h3>
                <p className="text-neutral-500 text-sm max-w-md mx-auto">
                  Please provide the details or Excel sheet for the Admissions Committee, and we will update this section accordingly.
                </p>
              </div>
            </motion.article>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[320px] shrink-0"
          >
            <div className="sticky top-24 flex flex-col gap-6">
              {/* Quick Links */}
              <div className="rounded-xl border border-neutral-200/60 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-neutral-900 mb-4 pb-4 border-b border-neutral-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Related Links
                </h3>
                <nav className="flex flex-col gap-1.5">
                  {navGroup?.subItems?.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                        item.label === title
                          ? 'bg-primary text-white font-semibold shadow-md shadow-primary/20'
                          : 'text-neutral-600 hover:bg-orange-50/50 hover:text-primary hover:pl-4'
                      }`}
                    >
                      <span className="text-sm">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}

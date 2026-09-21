import { useEffect, useState } from 'react'
import { ExternalLink, FileText, GraduationCap, Landmark, Users } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { navLinks } from '../data/navigation'

const readable = (value = '') => value
  .replace(/-/g, ' ')
  .replace(/\b\w/g, (letter) => letter.toUpperCase())
  .replace(/And/g, '&')

const categoryLabels: Record<string, string> = {
  'campus-life': 'Campus Life', 'student-chapters': 'Student Chapters',
  'community-services': 'Community Services', 'h-and-s': 'Humanities & Sciences',
}

const highlights: Record<string, string[]> = {
  'library': ['The SRIT library supports teaching, learning and research through print and digital knowledge resources.', 'The official site reports 51,477 volumes, 36+ national and international journals and magazines, and a digital library with 12 computer systems.'],
  'transport': ['SRIT states that its transport service covers Anantapur City, Tadipatri, Dharmavaram and Paamidi.', 'The official site describes 29 buses with a total seating capacity of 4,000 students across two shifts.'],
  'sports': ['Sports and games are part of the SRIT student experience, with interdepartmental, intercollegiate and inter-university competitions.', 'The college highlights sports as part of balanced academic, cultural and personal development.'],
  'placement-statistics': ['For 2024–25, the official SRIT placement update lists offers from TCS, Cognizant, Lumen Technologies, HCL, Infosys, Foxconn and other employers.', 'The official update identifies a TCS Prime offer of 9.08 LPA and TCS Digital offers of 7.08 LPA.'],
  'e-services': ['Examination e-Services are provided through SRIT’s external examination portal.'],
  'online-fee-payment': ['Online fee payment is handled through the official SRIT service. Use the official site to proceed with the current payment flow.'],
}

// These are the public WordPress slugs published by SRIT.  Keeping the page
// content live prevents notices, committees, calendars and document links from
// becoming stale in a copied static snapshot.
const officialSlugs: Record<string, string> = {
  'admissions/courses-offered': 'courses-offered', 'admissions/admission-procedure': 'admission-procedure', 'admissions/fee-structure': 'fee-structure', 'admissions/online-fee-payment': 'online-fee-payment-2', 'admissions/scholarships': 'scholarships', 'admissions/eamcet-ranks': 'eamcet-ranking', 'admissions/ecet-ranks': 'ecet-ranking', 'admissions/academic-calendars': 'academic-calendars', 'admissions/academic-regulations': 'academic-regulations',
  'campus-life/campus': 'campus', 'campus-life/library': 'library', 'campus-life/transport': 'transport', 'campus-life/hostel': 'hostels', 'campus-life/internet': 'internet-connection', 'campus-life/labs': 'labs', 'campus-life/sustainable-campus': 'sustainable-campus', 'campus-life/sports': 'sports', 'campus-life/aarambh-orientation-day': 'aarambh', 'campus-life/udbhavaan-graduation-day': 'graduationday', 'campus-life/mathematics-day': 'mathematics-day',
  'student-chapters/chairman-s-club': 'chairmansclub', 'student-chapters/iei': 'iei', 'student-chapters/internet-society': 'internet-society', 'student-chapters/iete': 'iete', 'student-chapters/ici': 'ici', 'student-chapters/iste': 'iste', 'student-chapters/sae': 'sae', 'student-chapters/toastmasters-international-club': 'toast-masters-international-club', 'student-chapters/english-language-club': 'english-language-club', 'student-chapters/ndli-club': 'ndli-club', 'student-chapters/programmers-club': 'programmers-club', 'student-chapters/mccarthy-club': 'mccarthy_club',
  'examination/team-members': 'team-members', 'examination/academic-regulations': 'academic-regulations', 'examination/academic-calendars': 'academic-calendars', 'examination/notifications-and-results': 'notifications', 'examination/evaluation-procedure': 'evaluation-procedure-2', 'examination/recounting-and-re-evaluation-procedure': 'recounting-and-re-evaluation', 'examination/malpractice-rules': 'malpractice-rules', 'examination/exam-committee': 'exam-committee', 'examination/results-committee': 'results-committee', 'examination/annual-examination-reports': 'annualexamreports', 'examination/graduation-day-reports': 'results', 'examination/digilocker-marks-memos': 'digilocker', 'examination/previous-question-papers': 'previous-question-papers', 'examination/downloads': 'examsectiondownloads',
  'placements/team-members': 'training-placement-team-members', 'placements/training-programs': 'training-program', 'placements/campus-drives': 'campus-drives', 'placements/placement-statistics': 'training-placement-statistics',
  'committees/iqac': 'internal-quality-assurance-cell-2', 'committees/anti-ragging-committee': 'anti-ragging-cell', 'committees/students-grievance-redressal-committee-sgrc': 'student-grievance-redressal-committee', 'committees/nptel-local-chapter': 'nptel-local-chapter', 'committees/sc-and-st-cell': 'sc-st-cell-2', 'committees/research-and-consultancy-cell': 'research-development-cell', 'committees/innovations-and-entrepreneurship-development-cell': 'innovations-entrepreneurship-development-cell', 'committees/industry-institute-interaction-cell': 'industry-institute-interaction-cell', 'committees/women-empowerment-cell': 'women-empowerment-cell', 'committees/e-content-development-cell': 'e-content-development-cell', 'committees/library-committee': 'library-committee', 'committees/career-guidance-and-higher-education-cell': 'career-guidance-and-higher-education-cell', 'committees/games-and-sports-cell': 'games-sports-cell',
  'community-services/srit-social-responsibility': 'social-responsibility-cell', 'community-services/ncc': 'national-cadet-corps', 'community-services/nss': 'national-service-scheme', 'community-services/rotaract-club': 'rotaract-club', 'community-services/indian-redcross-society': 'indian-red-cross-society', 'community-services/unnath-bharth-abhiyan': 'unnat-bharat-abhiyan', 'community-services/ek-bharat-shreshtha-bharat': 'ek-bharat-shreshtha-bharat',
}

type OfficialBlock = { kind: 'heading' | 'paragraph' | 'item'; text: string }
type OfficialDocument = { label: string; href: string }

function extractOfficialContent(html: string) {
  const document = new DOMParser().parseFromString(html, 'text/html')
  document.querySelectorAll('script, style, iframe, svg, noscript').forEach((node) => node.remove())
  const blocks: OfficialBlock[] = []
  const seen = new Set<string>()
  document.querySelectorAll('h1,h2,h3,h4,p,li').forEach((node) => {
    const text = (node.textContent || '').replace(/\s+/g, ' ').trim()
    if (text.length < 3 || seen.has(text)) return
    seen.add(text)
    blocks.push({ kind: /^H/.test(node.tagName) ? 'heading' : node.tagName === 'LI' ? 'item' : 'paragraph', text })
  })
  const documents: OfficialDocument[] = []
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((anchor) => {
    const label = (anchor.textContent || '').replace(/\s+/g, ' ').trim()
    const rawHref = anchor.getAttribute('href') || ''
    const href = rawHref ? new URL(rawHref, 'https://www.srit.ac.in/').href : ''
    if (label && href && rawHref !== '#' && !documents.some((item) => item.href === href)) documents.push({ label, href })
  })
  return { blocks, documents: documents.slice(0, 40) }
}

const iconFor = (category: string) => category === 'admissions' || category === 'academics'
  ? GraduationCap : category === 'committees' ? Users : category === 'examination' ? FileText : Landmark

export default function InformationPage() {
  const { category = '', page = '' } = useParams()
  const categoryTitle = categoryLabels[category] || readable(category)
  const Icon = iconFor(category)
  const navGroup = navLinks.find((item) => item.label.toLowerCase().replace(/\s+/g, '-') === category)
  const sourceItem = navGroup?.subItems?.find((item) => item.href === `/${category}/${page}`)
  const title = sourceItem?.label || categoryLabels[page] || readable(page)
  const content = highlights[page]
  const isExternalService = page === 'e-services'
  const key = `${category}/${page}`
  const officialSlug = officialSlugs[key] || page
  const [officialContent, setOfficialContent] = useState<{ blocks: OfficialBlock[]; documents: OfficialDocument[] } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = `${title} | SRIT`
    const description = `Official SRIT information for ${title}.`
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', 'description'); document.head.appendChild(tag) }
    tag.setAttribute('content', description)
  }, [title])

  useEffect(() => {
    let active = true
    setLoading(true)
    setOfficialContent(null)
    if (isExternalService) { setLoading(false); return () => { active = false } }
    fetch(`https://www.srit.ac.in/wp-json/wp/v2/pages?slug=${encodeURIComponent(officialSlug)}`)
      .then((response) => response.ok ? response.json() : [])
      .then((pages: Array<{ content?: { rendered?: string } }>) => {
        if (active && pages[0]?.content?.rendered) setOfficialContent(extractOfficialContent(pages[0].content.rendered))
      })
      .catch(() => undefined)
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [officialSlug, isExternalService])

  return <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
    <Navbar />
    <header className="relative overflow-hidden pt-[122px] lg:pt-[140px] pb-14 bg-[#0A0903]">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#FF5422 1px,transparent 1px),linear-gradient(90deg,#FF5422 1px,transparent 1px)', backgroundSize: '52px 52px' }} />
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-neutral-400"><Link to="/" className="hover:text-primary">Home</Link><span>•</span><span className="text-primary">{categoryTitle}</span></div>
        <div className="mt-6 flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-white"><Icon size={23} /></span><h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h1></div>
      </div>
    </header>
    <main className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
      <div className="grid gap-8 lg:grid-cols-[1fr_270px]">
        <article className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-9 shadow-sm">
          <p className="text-primary text-xs font-bold tracking-[.16em] uppercase">{categoryTitle}</p>
          <h2 className="mt-3 font-serif text-2xl font-bold text-neutral-900">{title}</h2>
          {loading && <p className="mt-6 text-[15px] text-neutral-500">Loading current official SRIT information…</p>}
          {!loading && officialContent?.blocks.length ? <div className="mt-6 space-y-4 text-[15px] leading-8 text-neutral-700">{officialContent.blocks.map((block, index) => block.kind === 'heading' ? <h3 key={`${block.text}-${index}`} className="pt-3 font-serif text-xl font-bold leading-tight text-neutral-900">{block.text}</h3> : block.kind === 'item' ? <li key={`${block.text}-${index}`} className="ml-5 pl-1">{block.text}</li> : <p key={`${block.text}-${index}`}>{block.text}</p>)}</div> : !loading && (content ? <div className="mt-6 space-y-4 text-[15px] leading-8 text-neutral-700">{content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : <p className="mt-6 text-[15px] leading-8 text-neutral-700">The official SRIT source has no separately published page content for this item. Use the official source below for the current notice, document or service.</p>)}
          {officialContent?.documents.length ? <section className="mt-8 border-t border-neutral-100 pt-6"><h3 className="font-serif text-lg font-bold text-neutral-900">Official links and documents</h3><div className="mt-3 grid gap-2 sm:grid-cols-2">{officialContent.documents.map((document) => <a key={document.href} href={document.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 hover:border-primary hover:text-primary"><FileText size={15} className="shrink-0" />{document.label}<ExternalLink size={13} className="ml-auto shrink-0" /></a>)}</div></section> : null}
          <a href={isExternalService ? 'https://sritexams.in/' : `https://www.srit.ac.in/${officialSlug}/`} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
            {isExternalService ? 'Open external SRIT service' : 'View official SRIT source'} <ExternalLink size={16} />
          </a>
          {isExternalService && <p className="mt-3 text-xs text-neutral-500">This opens an external SRIT service in a new tab.</p>}
        </article>
        <aside className="rounded-2xl border border-neutral-200 bg-white p-5 h-fit">
          <h2 className="font-serif text-lg font-bold text-neutral-900">Explore {categoryTitle}</h2>
          <nav className="mt-3 divide-y divide-neutral-100">
            {navGroup?.subItems?.map((item) => <Link key={item.href} to={item.href} className="block py-2.5 text-sm text-neutral-600 hover:text-primary">{item.label}</Link>)}
          </nav>
        </aside>
      </div>
    </main>
    <Footer />
  </div>
}

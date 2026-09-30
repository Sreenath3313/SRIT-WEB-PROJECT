import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Copy, Check, ShieldCheck, Info, ArrowLeft } from 'lucide-react'
import Navbar from '../../components/layout/Navbar'
import PageHeader from '../../components/common/PageHeader'
import Footer from '../../components/layout/Footer'

export default function OnlineFeePaymentPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Online Fee Payment | SRIT'
    const description = 'Official SRIT Online Fee Payment details for Tuition Fee, Hostel Fee, and Transport Fee via UPI QR code and ICICI Direct Bank Transfer.'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(label)
    setTimeout(() => setCopiedField(null), 2500)
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />

      <PageHeader title="Online Fee Payment" categoryTitle="Admissions" />

      {/* Main Content Area */}
      <main className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-16 flex-1">
        <div className="space-y-10">

          {/* Main Card */}
          <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm space-y-8">

            {/* Requested Heading */}
            <div className="border-b border-neutral-100 pb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-50 text-[#F67437] border border-orange-200/80 mb-3">
                <ShieldCheck size={16} /> Official SRIT Account
              </div>
              <h2
    className="font-serif font-bold text-neutral-900 tracking-tight"
    style={{
        fontSize: 'clamp(32px, 5vw, 34px)',
        lineHeight: '1.15',
    }}
>
    Tuition Fee / Hostel Fee / Transport Fee
</h2>
            </div>

            {/* Grid Container: QR Image on Left, Account Details on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* QR Code Image */}
              <div className="lg:col-span-5 bg-gradient-to-b from-neutral-50 to-orange-50/30 p-6 rounded-xl border border-neutral-200 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="relative group p-3 bg-white rounded-xl shadow-md border border-neutral-200 max-w-[340px] w-full">
                  <img
                    src="https://www.srit.ac.in/wp-content/uploads/2024/10/ICICI-Scan_page-0001-892x1536.jpg"
                    alt="SRIT Official ICICI Fee Payment QR Code"
                    className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy" />
                </div>
                <p className="mt-4 text-xs sm:text-sm font-semibold text-neutral-600 flex items-center justify-center gap-1.5">
                  Scan &amp; Pay with any UPI app (iMobile, PhonePe, GPay, Paytm, BHIM)
                </p>
              </div>

              {/* Account Details (Right side of QR code image) */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 border-b border-neutral-100 pb-3 mb-5">
                    Account Details
                  </h3>

                  <div className="space-y-4 text-neutral-800">
                    <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                      <span className="text-xs uppercase font-bold tracking-wider text-neutral-600 block mb-1">Account Holder Name</span>
                      <p className="text-base sm:text-lg font-bold text-[#F67437]">
                        SRINIVASA RAMANUJAN INSTITUTE OF TECHNOLOGY
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
                        <div>
                          <span className="text-xs uppercase font-bold tracking-wider text-neutral-600 block mb-1">Account number</span>
                          <p className="text-base sm:text-lg font-mono font-bold text-neutral-900">
                            460405000318
                          </p>
                        </div>
                        <button
                          onClick={() => copyToClipboard('460405000318', 'account')}
                          className="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-700 transition-colors shadow-sm"
                          title="Copy Account Number"
                        >
                          {copiedField === 'account' ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                        </button>
                      </div>

                      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
                        <div>
                          <span className="text-xs uppercase font-bold tracking-wider text-neutral-600 block mb-1">IFSC</span>
                          <p className="text-base sm:text-lg font-mono font-bold text-neutral-900">
                            ICIC0004604
                          </p>
                        </div>
                        <button
                          onClick={() => copyToClipboard('ICIC0004604', 'ifsc')}
                          className="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-700 transition-colors shadow-sm"
                          title="Copy IFSC Code"
                        >
                          {copiedField === 'ifsc' ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                      <span className="text-xs uppercase font-bold tracking-wider text-neutral-600 block mb-1">Bank &amp; Branch</span>
                      <p className="text-base font-semibold text-neutral-900">
                        ICICI, BELLARY ROAD BRANCH, ANANTAPUR
                      </p>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="mt-6 pt-5 border-t border-neutral-100 flex items-start gap-3 bg-orange-50/60 p-4 rounded-xl text-xs sm:text-sm text-neutral-700 border border-orange-100">
                  <Info size={20} className="text-[#F67437] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 font-semibold block mb-0.5">Important:</strong>
                    Please retain payment receipt screenshot &amp; UTR Transaction ID for validation at the College Accounts Counter.
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Quick Nav Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-xl bg-neutral-900 text-white shadow-lg">
            <div>
              <h4 className="font-serif text-lg font-bold">Need Fee Structure Details?</h4>
              <p className="text-neutral-300 text-sm mt-0.5">View B.Tech, M.Tech, Hostel and Transport fee breakups.</p>
            </div>
            <Link
              to="/admissions/fee-structure"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F67437] text-white font-semibold text-sm hover:bg-[#e26225] transition-colors shadow-md"
            >
              <ArrowLeft size={16} /> Fee Structure Page
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

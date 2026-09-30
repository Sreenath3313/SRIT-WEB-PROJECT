import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';
import { ExternalLink, CheckCircle2, Phone } from 'lucide-react';

export default function DegreeVerificationPage() {
  useEffect(() => {
    document.title = 'Degree Verification | SRIT';
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />
      <PageHeader title="Degree Verification" categoryTitle="Services" />
      
      <main className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 sm:p-10">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">Instructions for Degree Verification</h2>
            
            <div className="prose max-w-none text-neutral-700 space-y-6">
                <p className="text-[15.5px] leading-relaxed">
                    Dear Applicant, please fill the candidate details in the below link, complete the payment (Rs.250/-) and email the following details to <a href="mailto:coe@srit.ac.in" className="text-primary font-semibold hover:underline">coe@srit.ac.in</a> with a copy (CC) to <a href="mailto:ace2@srit.ac.in" className="text-primary font-semibold hover:underline">ace2@srit.ac.in</a>.
                </p>

                <div className="bg-orange-50 border-l-4 border-primary p-4 rounded-r-md">
                    <p className="text-[15.5px] font-medium text-orange-900">
                        Please allow us a week for the verification process.
                    </p>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">Details needed for verification:</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-[15.5px]">Student Certificates needed for verification</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-[15.5px]">Payment Proof</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-100 flex flex-wrap gap-4">
                    <a href="https://paytm.me/PYTMPS/AnivFaP" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-orange-600 shadow-md hover:shadow-lg">
                        Payment Link <ExternalLink size={18} />
                    </a>
                </div>

                <div className="mt-10 bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">For any queries, Contact:</h3>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <a href="tel:+919515711111" className="flex items-center gap-2 text-[15px] text-neutral-700 hover:text-primary transition-colors">
                            <Phone className="w-5 h-5 text-primary" />
                            +91-9515711111
                        </a>
                        <a href="tel:+918019370310" className="flex items-center gap-2 text-[15px] text-neutral-700 hover:text-primary transition-colors">
                            <Phone className="w-5 h-5 text-primary" />
                            +91-8019370310
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

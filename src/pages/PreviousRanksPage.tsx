import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';

export default function PreviousRanksPage() {
  useEffect(() => {
    document.title = 'Previous Ranks | SRIT';
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />
      <PageHeader title="EAPCET / ECET Previous Ranks" categoryTitle="Academics" />
      
      <main className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
        
        <div className="space-y-12">
            {/* EAPCET Ranks Section */}
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 sm:p-10">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    EAPCET Ranks
                </h2>
                <div className="w-full overflow-hidden rounded-lg border border-neutral-200 h-[500px]">
                    <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSqDcs5apke8i1PHF3YhDsX6utrVxCPuwfHRHY1XYpGrlIGNEdZ_avkqEbZjqs3ylXfqN2ktrxrwKie/pubhtml?widget=true&headers=false" 
                        title="EAPCET Ranks"
                        className="w-full h-full border-0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* ECET Ranks Section */}
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 sm:p-10">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    ECET Ranks
                </h2>
                <div className="w-full overflow-hidden rounded-lg border border-neutral-200 h-[500px]">
                    <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQm_5cn0naIcl8zIQVT_OAt5ffP7koBTjIM-B0Edzozf4tpH3lNNT6pzW9Nim-OUfCQr4uocSAjicMm/pubhtml?widget=true&headers=false" 
                        title="ECET Ranks"
                        className="w-full h-full border-0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}

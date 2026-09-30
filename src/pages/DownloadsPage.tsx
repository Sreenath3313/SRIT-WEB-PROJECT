import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';
import { Loader2 } from 'lucide-react';

export default function DownloadsPage() {
  const [activeTab, setActiveTab] = useState<'faculty' | 'students'>('faculty');
  const [loadingFrames, setLoadingFrames] = useState<Record<string, boolean>>({
    faculty: true,
    students: true,
  });

  useEffect(() => {
    document.title = 'Downloads | SRIT';
  }, []);

  const handleIframeLoad = (id: string) => {
    setLoadingFrames(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />
      <PageHeader title="Downloads" categoryTitle="Resources" />
      
      <main className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
        
        <div className="flex flex-col">
          {/* Tabs */}
          <div className="flex flex-row items-end px-4 gap-2 relative z-10">
            <button
              onClick={() => setActiveTab('faculty')}
              className={`px-8 py-3 text-center font-bold text-base transition-all rounded-t-lg border-t-2 border-x border-b-0 ${
                activeTab === 'faculty' 
                  ? 'border-t-green-500 border-x-neutral-200 bg-white text-green-500' 
                  : 'border-transparent bg-transparent text-blue-400 hover:text-blue-500 hover:bg-neutral-100'
              }`}
              style={{ marginBottom: activeTab === 'faculty' ? '-1px' : '0' }}
            >
              Faculty
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`px-8 py-3 text-center font-bold text-base transition-all rounded-t-lg border-t-2 border-x border-b-0 ${
                activeTab === 'students' 
                  ? 'border-t-blue-400 border-x-neutral-200 bg-white text-blue-400' 
                  : 'border-transparent bg-transparent text-blue-400 hover:text-blue-500 hover:bg-neutral-100'
              }`}
              style={{ marginBottom: activeTab === 'students' ? '-1px' : '0' }}
            >
              Students
            </button>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl sm:rounded-tl-none border border-neutral-200 shadow-sm p-4 sm:p-6 relative z-0">
            <div className={`w-full overflow-hidden h-[600px] relative ${activeTab === 'faculty' ? 'block' : 'hidden'}`}>
                {loadingFrames['faculty'] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                )}
                <iframe 
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRhXr8XlQvh91m1k8ouqxp6-lNI0HIsLkBBu9CulBMgZMwCQLp9FBAhAp9RkkRALw/pubhtml?widget=true&headers=false" 
                    title="Faculty Downloads"
                    className="w-full h-full border-0 relative z-0"
                    allowFullScreen
                    onLoad={() => handleIframeLoad('faculty')}
                ></iframe>
            </div>

            <div className={`w-full overflow-hidden h-[600px] relative ${activeTab === 'students' ? 'block' : 'hidden'}`}>
                {loadingFrames['students'] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                )}
                <iframe 
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQDFgmo59jlCBISVyJ3qUYsjW4wm3Cx6W4i0t3U5bZ7Y2yQ82BjPnlcTTxfenM8dA/pubhtml?widget=true&headers=false" 
                    title="Student Downloads"
                    className="w-full h-full border-0 relative z-0"
                    allowFullScreen
                    onLoad={() => handleIframeLoad('students')}
                ></iframe>
            </div>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}

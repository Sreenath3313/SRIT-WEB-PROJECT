import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';
import { Map, Mail, Smartphone, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';

export default function ContactUsPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [loadingFrames, setLoadingFrames] = useState<Record<string, boolean>>({
    general: true,
    counsellor: true,
    map: true,
  });

  useEffect(() => {
    document.title = 'Contact Us | SRIT';
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleIframeLoad = (id: string) => {
    setLoadingFrames(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      <Navbar />
      <PageHeader title="Contact Us" categoryTitle="Get in Touch" />
      
      <main className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
          {/* Address Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center">
            <div className="text-[#ff5e14] mb-4">
              <Map className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Address</h3>
            <p className="text-neutral-800 text-sm leading-relaxed font-medium">
              SRIT Rotarypuram Village,<br />
              BK Samudram Mandal, Anantapur<br />
              District - 515701, AP
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center">
            <div className="text-[#ff5e14] mb-4">
              <Mail className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Email Address</h3>
            <a href="mailto:hr@srit.ac.in" className="text-neutral-800 text-sm font-medium hover:text-[#ff5e14]">
              hr@srit.ac.in
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center">
            <div className="text-[#ff5e14] mb-4">
              <Smartphone className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Phone Number</h3>
            <a href="tel:9515611111" className="text-neutral-800 text-sm font-medium hover:text-[#ff5e14]">
              9515611111
            </a>
          </div>

        </div>

        {/* Dropdowns / Accordions Section */}
        <div className="mb-16 space-y-4">
          
          {/* General Contact Details */}
          <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleAccordion('general')}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-neutral-50 transition-colors text-left"
            >
              <span className="font-semibold text-neutral-800">General Contact Details</span>
              {openAccordion === 'general' ? <ChevronUp className="w-5 h-5 text-neutral-500" /> : <ChevronDown className="w-5 h-5 text-neutral-500" />}
            </button>
            
            {openAccordion === 'general' && (
              <div className="border-t border-neutral-200 h-[350px] w-full relative">
                {loadingFrames['general'] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                )}
                <iframe 
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTOG_VGv8TAJM18SOFiT7lvTmQSvds63c4ZYYUWR-zc9Dnoix9pxJ08v98yS0GVgQ/pubhtml?widget=true&headers=false"
                  className="w-full h-full border-0 relative z-0"
                  allowFullScreen
                  onLoad={() => handleIframeLoad('general')}
                ></iframe>
              </div>
            )}
          </div>

          {/* Student Counsellor Contact Details */}
          <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleAccordion('counsellor')}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-neutral-50 transition-colors text-left"
            >
              <span className="font-semibold text-neutral-800">Student Counsellor Contact Details</span>
              {openAccordion === 'counsellor' ? <ChevronUp className="w-5 h-5 text-neutral-500" /> : <ChevronDown className="w-5 h-5 text-neutral-500" />}
            </button>
            
            {openAccordion === 'counsellor' && (
              <div className="border-t border-neutral-200 h-[350px] w-full relative">
                {loadingFrames['counsellor'] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                )}
                <iframe 
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeM3jHNfojfNpPq9_4ExjPNdXy2X2r3htyjzjnzTzvTRRvQ6kmk4aa1pNsbO3c6A/pubhtml?widget=true&headers=false"
                  className="w-full h-full border-0 relative z-0"
                  allowFullScreen
                  onLoad={() => handleIframeLoad('counsellor')}
                ></iframe>
              </div>
            )}
          </div>

        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden h-[500px] relative">
            {loadingFrames['map'] && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            )}
            <iframe 
                src="https://maps.google.com/maps?q=Srinivasa%20Ramanujan%20Institute%20of%20Technology%2C%20Rotarypuram%20Village%2C%20B%20K%20Samudram%20Mandal%2C%20Anantapur%2C%20Andhra%20Pradesh%20515701&t=m&z=15&output=embed&iwloc=near"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="SRIT Location Map"
                className="relative z-0"
                onLoad={() => handleIframeLoad('map')}
            ></iframe>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}

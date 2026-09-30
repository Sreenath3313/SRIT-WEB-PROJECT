import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PageHeader from '../../components/common/PageHeader';
import { fadeUp, stagger } from '../../features/about/animations';

const AccordionItem: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-[#2b3a4a]/20 bg-[#1e293b] overflow-hidden mb-1">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-[#1e293b] hover:bg-[#2b3a4a] transition-colors"
            >
                <h3 className="text-[#f67437] text-lg sm:text-xl font-bold m-0">{title}</h3>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-6 text-[#f67437]" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-white"
                    >
                        <div className="p-5 sm:p-6 text-neutral-800">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const NdliClubPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />
            <PageHeader title="NDLI CLUB" categoryTitle="STUDENT CHAPTERS" />
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-[1300px] w-full mx-auto px-4 sm:px-5 md:px-6 py-8 lg:py-12 xl:py-16 flex-grow"
            >
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-12">

                    <motion.div variants={fadeUp} className="w-full shadow-lg border border-[#1e293b] rounded-md overflow-hidden">
                        
                        <AccordionItem title="About NDLI">
                            <div className="text-neutral-700 leading-relaxed m-0 text-base space-y-4 text-justify">
                                <p>
                                    The National Digital Library of India (NDLI) Club is a dynamic and vibrant community that serves as a catalyst for holistic education and personal development. Rooted in the mission of the NDLI, these clubs are established within institutes and nodal bodies to create an immersive environment for students to expand their horizons beyond the confines of the traditional curriculum.
                                </p>
                                <p>
                                    NDLI Clubs are more than just spaces; they are nurturing hubs of exploration, innovation, and collaboration. These clubs provide a platform for students to engage in a diverse range of activities, events, and initiatives that foster the acquisition of knowledge, skills, and qualities essential for their professional and personal growth. Through a carefully curated blend of learning experiences, the NDLI Clubs empower students to become well-rounded individuals poised to excel in their chosen fields.
                                </p>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Objectives">
                            <div className="text-neutral-700 leading-relaxed text-base text-justify">
                                <p>
                                    NDLI Clubs are established within institutes and nodal bodies. These Clubs organize events aimed at enabling students to cultivate knowledge, skills, and attributes that extend beyond the standard curriculum, thereby enhancing their advancement in their respective professional fields.
                                </p>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="NDLI Club Team">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSNsNz9Np8sjT469J_d39FBuMwGOZ5nNI8J77-ZnuCIDaVqVuwNSUePLjpo8Efk2hiKGtZKZGpcx6N/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="NDLI Club Team"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="NDLI Events Organized">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRtGEf_IEOfv2qLQ1FSufGy-m-XW60jAjZ-dUNtcnIt0sTLt-5BHxcCuiIFlmD3U4MKdf6046jJKnhS/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="NDLI Events Organized"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Minutes of Meeting of NDLI">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTjOgtErCNtSb0a05VVFu6KvMY3ZKX4p6iv6GECFZfxvPNxhtBYQUuOoaDa7aBzoWZ6DyxLvt2Po0cT/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Minutes of Meeting of NDLI"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Contact Us">
                            <div className="text-neutral-700 space-y-2 m-0">
                                <p className="font-semibold text-lg text-[#0A0903]">Dr. S. Lakshmi <span className="text-sm font-normal text-neutral-500 ml-2">,</span></p>
                                <p className="text-neutral-600">Librarian</p>
                                <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 gap-2 pt-2">
                                    <p><span className="font-medium text-[#0A0903]">Mail:</span> <a href="mailto:librarian.hs@srit.ac.in" className="text-[#f67437] hover:underline">librarian.hs@srit.ac.in</a></p>
                                </div>
                            </div>
                        </AccordionItem>
                        
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default NdliClubPage;

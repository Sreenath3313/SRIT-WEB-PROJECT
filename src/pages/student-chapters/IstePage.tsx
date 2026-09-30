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

const IstePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />
            <PageHeader title="ISTE" categoryTitle="Student Chapters" />
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-[1300px] w-full mx-auto px-4 sm:px-5 md:px-6 py-8 lg:py-12 xl:py-16 flex-grow"
            >
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-12">
                    
                    <motion.div variants={fadeUp} className="w-full flex justify-center mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                            <img 
                                src="https://www.srit.ac.in/wp-content/uploads/2022/01/iste.png" 
                                alt="ISTE Logo" 
                                className="w-48 sm:w-64 h-auto object-contain"
                            loading="lazy" />
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="w-full shadow-lg border border-[#1e293b] rounded-md overflow-hidden">
                        
                        <AccordionItem title="About ISTE">
                            <p className="text-neutral-700 leading-relaxed m-0 text-base text-justify">
                                The Indian Society for Technical Education (ISTE) is a national, professional, non-profit making Society registered under the Societies Registration Act of 1860. First started in 1941 as the Association of Principals of Technical Institutions (APTI), it was converted into "Indian Society for Technical Education" in 1968 with a view to enlarge its activities to advance the cause of technological education in the country. The major objective of the ISTE is to assist and contribute in the production and development of top quality professional engineers and technicians needed by the industries and other organizations.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Objectives">
                            <ul className="list-disc pl-5 space-y-2 text-neutral-700 text-base">
                                <li>Providing quality training programmes to teachers and administrators of technical institutions to update their knowledge and skills in their fields of activity</li>
                                <li>To assist and contribute in the production and development of top quality professional engineers and technicians needed by the industry and other organisations</li>
                                <li>Providing guidance and training to students to develop better learning skills and personality</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem title="Team Members">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSSgRMsVwdICQUNx_wPBGV2hKrSVb6f2Ol7cnltJtujHPynMHIqSl1FA9y8828dbA/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Team Members"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="ISTE Faculty Memberships List">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTKCmHBwJDYozvbpFcaQR_NQg1LelVt9fLYKCWKHB92YS9_6nKklS4U40Dv6n-xIQ/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="ISTE Faculty Memberships List"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="ISTE Student Memberships List">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5x4LPoWvT8xVQ_vwOFSRUauJefGYuCy8Mvk3nUXXb5JhPGCctnGdodSr4PUsFgQ/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="ISTE Student Memberships List"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Minutes of Meeting & Action Taken Report">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5WucDPXU20ponbV93P7k2-Mun3Bwn1B4nDWNIbhshHhYux84TKjKcO2iA6NGPlQ/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Minutes of Meeting"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Activities">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRm0zs3YKXT-1l54m55su5WXvXJMqYuTBk-n2ia7Gjf7Sf_8iwjCcvYh5SuMvwAqg/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Activities"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Contact">
                            <div className="text-neutral-700 space-y-2 m-0">
                                <p className="font-semibold text-lg text-[#0A0903]">Mr. Vinod Kumar <span className="text-sm font-normal text-neutral-500 ml-2">M. Tech.</span></p>
                                <p className="text-neutral-600">Assistant Professor in EEE, ISTE-Students' Chapter Coordinator.</p>
                                <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 gap-2 pt-2">
                                    <p><span className="font-medium text-[#0A0903]">E-mail:</span> <a href="mailto:vinodkumar.eee@srit.ac.in" className="text-[#f67437] hover:underline">vinodkumar.eee@srit.ac.in</a></p>
                                    <p><span className="font-medium text-[#0A0903]">Mobile No:</span> <a href="tel:+919493207471" className="text-[#f67437] hover:underline">+91-9493207471</a></p>
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

export default IstePage;

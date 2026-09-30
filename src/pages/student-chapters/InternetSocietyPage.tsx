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

const InternetSocietyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />
            <PageHeader title="Internet Society" categoryTitle="Student Chapters" />
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-[1300px] w-full mx-auto px-4 sm:px-5 md:px-6 py-8 lg:py-12 xl:py-16 flex-grow"
            >
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-12">
                    
                    <motion.div variants={fadeUp} className="w-full shadow-lg border border-[#1e293b] rounded-md overflow-hidden">
                        
                        <AccordionItem title="Introduction">
                            <p className="text-neutral-700 leading-relaxed m-0 text-base">
                                The Internet Society Academic Hub at SRIT Engineering College is a dynamic initiative that fosters awareness, education, and research related to various facets of the internet and its technologies. This hub serves as a vibrant platform for students, faculty members, and researchers to collaborate, explore, and stay updated with the constantly evolving internet landscape.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Objectives">
                            <div className="text-neutral-700 leading-relaxed text-base space-y-4">
                                <p>The primary objectives of the Internet Society Academic Hub are:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>To promote awareness, education, and research in internet technologies.</li>
                                    <li>To provide a collaborative platform for students, faculty, and researchers.</li>
                                    <li>To organize workshops, seminars, webinars, and lectures on internet-related topics.</li>
                                    <li>To encourage research projects focusing on cutting-edge technologies like 5G, IoT, cloud computing, and blockchain.</li>
                                    <li>To bridge the gap between academic knowledge and real-world applications of internet technology.</li>
                                </ul>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Team Members">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTIkXj-2N8qwM1fsXywK5_V8l9i1A82ZM0JQANnpQXCbFU8MkRWqpcz1i1jtAK_mA/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="IS Team Members"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="IS Faculty Memberships List">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTs57QyKBtXwYFGoohpOtuGGYWvYvpKqihn9wSb6esAcq5BXsbZMHY7SVetMar44w/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="IS Faculty Memberships List"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="IS Student Memberships List">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQyE8vRY6XV2BHTOYCxA7Ij_sodYtOUlaRBLDF-ws3QE7mA6pD5t9Y78Eb9qO44dw/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="IS Student Memberships List"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Minutes of Meeting">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPJg3F9cAC-gYmqu7JI8WiRhs_XWTwOTnpPRYLG-gql2aePI8mTLoDgt_21fzMEA/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Minutes of Meeting"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Activities">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfKIPSxtb0UskbJJn2DFn9o5GnEvAY5uxtW7q052Z90hc3c8wQjPpLPTJgykAzyA/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Activities"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Contact">
                            <div className="text-neutral-700 space-y-2 m-0">
                                <p className="font-semibold text-lg text-[#0A0903]">Dr. P. Chitralingappa <span className="text-sm font-normal text-neutral-500 ml-2">M. Tech., Ph. D.</span></p>
                                <p className="text-neutral-600">Associate Professor in CSD, Internet Society-Students' Chapter Coordinator.</p>
                                <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 gap-2 pt-2">
                                    <p><span className="font-medium text-[#0A0903]">E-mail:</span> <a href="mailto:chitralingappa.cse@srit.ac.in" className="text-[#f67437] hover:underline">chitralingappa.cse@srit.ac.in</a></p>
                                    <p><span className="font-medium text-[#0A0903]">Mobile No:</span> <a href="tel:+919849913200" className="text-[#f67437] hover:underline">+91-9849913200</a></p>
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

export default InternetSocietyPage;

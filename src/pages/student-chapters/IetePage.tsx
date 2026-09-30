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

const IetePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />
            <PageHeader title="IETE" categoryTitle="Student Chapters" />
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-[1300px] w-full mx-auto px-4 sm:px-5 md:px-6 py-8 lg:py-12 xl:py-16 flex-grow"
            >
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-12">
                    
                    <motion.div variants={fadeUp} className="w-full shadow-lg border border-[#1e293b] rounded-md overflow-hidden">
                        
                        <AccordionItem title="About IETE">
                            <p className="text-neutral-700 leading-relaxed m-0 text-base">
                                The Institution of Electronics and Telecommunication Engineers (IETE) is a premier professional society in India. It promotes the advancement of electronics, telecommunications, and related fields. Established in 1953, it offers various academic programs, certifications, and conferences. IETE fosters networking among professionals and provides a platform for knowledge exchange. With a focus on research and innovation, it contributes significantly to technological development. Its members span academia, industry, and government sectors, driving progress in the realm of electronics and telecommunications.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Vision & Mission">
                            <p className="text-neutral-700 leading-relaxed m-0 text-base">
                                To inspire excellence & innovation in all fields, and to empower students through knowledge, skills, growth opportunities, and fostering a learning environment.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Team Members">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTad1ORhJahwlOk5geJm4jmwYfNPA_D6TKHyiskpIrxlpCJiGWvouVR1WFI9cUKsQ/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Team Members"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Objectives">
                            <div className="text-neutral-700 leading-relaxed text-base space-y-4">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>To plan and organize technical programs and activities such as Expert lectures, workshops, seminars for the benefit of student members on a regular basis.</li>
                                    <li>To provide a common platform for the student members to exchange ideas and information on the topics of their interest e.g. Project Design, employment / higher educational opportunities, emerging trends, personality development etc.</li>
                                    <li>To facilitate technical visits / practical training / project work of the enrolled students in R&D laboratories, industries, academic institutions etc.</li>
                                    <li>To serve as a nodal point at the institution on all aspects of professional development of the student members.</li>
                                </ul>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="IETE Faculty Membership">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQc_hV6EIfOKNqqlfoKo0qCft_rnwPu6ZU-_X4ydPV556FpUXDKF6X6FJN-SYPZBA/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="IETE Faculty Membership"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="IETE Student Memberships">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTnJtb5KwvT8wvXIH19b8oN5mb3ISSxAWri01HTF-sWSHeUdZfGpUxLQFsQO-xNVQ/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="IETE Student Memberships"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Minutes Of Meeting & Action taken Report">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRhZwej5i_WaiNSv5r9oHxsmykYVXBfbHqC9yduY2qydjgN5vxY0A53GZuNdhSNlg/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Minutes Of Meeting"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Activities">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRuoH1t8ro7-MdCcpUW5tArSdVTRw_Ebo5G2_Sl1qGp6jg3gt20rPrUCJIwELB6_A/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Activities"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Contact">
                            <div className="text-neutral-700 space-y-2 m-0">
                                <p className="font-semibold text-lg text-[#0A0903]">Rami Reddy <span className="text-sm font-normal text-neutral-500 ml-2">M. Tech., (Ph. D)</span></p>
                                <p className="text-neutral-600">Assistant Professor in ECE, IETE-Students' Chapter Coordinator.</p>
                                <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 gap-2 pt-2">
                                    <p><span className="font-medium text-[#0A0903]">E-mail:</span> <a href="mailto:ramireddy.ece@srit.ac.in" className="text-[#f67437] hover:underline">ramireddy.ece@srit.ac.in</a></p>
                                    <p><span className="font-medium text-[#0A0903]">Mobile No:</span> <a href="tel:+919491853612" className="text-[#f67437] hover:underline">+91-9491853612</a></p>
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

export default IetePage;

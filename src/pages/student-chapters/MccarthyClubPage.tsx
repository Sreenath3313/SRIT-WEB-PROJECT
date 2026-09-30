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

const MccarthyClubPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />
            <PageHeader title="MCCARTHY CLUB" categoryTitle="STUDENT CHAPTERS" />
            
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
                                src="https://www.srit.ac.in/wp-content/uploads/2026/07/McCarthy-1024x1024.png" 
                                alt="McCarthy Club Logo" 
                                className="w-64 sm:w-[350px] h-auto object-contain"
                            loading="lazy" />
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="w-full shadow-lg border border-[#1e293b] rounded-md overflow-hidden">
                        
                        <AccordionItem title="About McCarthy Club">
                            <div className="text-neutral-700 leading-relaxed m-0 text-base space-y-4 text-justify">
                                <p className="font-semibold text-lg text-[#0A0903]">Why McCarthy Club?</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Today's student <span className="font-semibold">need more</span> than <span className="font-semibold">academic knowledge</span> to succeed.</li>
                                    <li><span className="font-semibold">Skills</span> like <span className="font-semibold">communication, leadership, innovation, teamwork</span>, and <span className="font-semibold">adaptability</span> are equally important.</li>
                                    <li><span className="font-semibold">McCarthy club</span> aims to bridge this gap by <span className="font-semibold">creating opportunities</span> that <span className="font-semibold">encourage students</span> to explore their interests, <span className="font-semibold">build practical skills</span> and grow <span className="font-semibold">beyond the classroom</span>.</li>
                                </ul>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Vision and Mission">
                            <div className="text-neutral-700 leading-relaxed text-base space-y-4">
                                <div>
                                    <h4 className="font-bold text-[#f67437] text-lg mb-2">VISION:</h4>
                                    <p>• To build a community where every student feels inspired to learn, create, lead and grow together.</p>
                                    <p className="italic">"Learn together. Grow together. Lead together."</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#f67437] text-lg mb-2 mt-4">MISSION:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Create opportunities for students to develop communication, leadership, technical, and entrepreneurial skills.</li>
                                        <li>Encourage curiosity and innovation through engaging activities and real-world experiences.</li>
                                        <li>Help students stay updated with emerging technologies, trends, and essential skills.</li>
                                        <li>Inspire members to step out of their comfort zones and discover their potential.</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Objectives">
                            <div className="text-neutral-700 leading-relaxed text-base">
                                <h4 className="font-bold text-[#f67437] text-lg mb-4">Objectives:</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Promote AI, technology, and innovation.</li>
                                    <li>Develop industry-relevant skills.</li>
                                    <li>Strengthen communication and leadership.</li>
                                    <li>Create an inclusive environment for learning and growth.</li>
                                    <li>Bridge the gap between academics and industry.</li>
                                    <li>Foster collaboration and teamwork.</li>
                                    <li>Provide hands-on learning opportunities.</li>
                                    <li>Prepare students for future careers.</li>
                                </ul>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="What We Do">
                            <div className="text-neutral-700 leading-relaxed text-base space-y-4">
                                <h4 className="font-bold text-[#f67437] text-lg mb-4">Activities:</h4>
                                <ul className="space-y-4 list-none p-0">
                                    <li className="flex gap-2">
                                        <span className="text-[#f67437] font-bold">»</span> 
                                        <span><span className="font-semibold">McCarthy Labs</span> — AI & Tech Projects</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-[#f67437] font-bold">»</span> 
                                        <span><span className="font-semibold">McCarthy Talks</span> — TED-style Speaker Sessions (group discussions, healthy debates etc)</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-[#f67437] font-bold">»</span> 
                                        <span><span className="font-semibold">McCarthy Connect</span> — Networking & Alumni Interactions</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-[#f67437] font-bold">»</span> 
                                        <span><span className="font-semibold">McCarthy Spotlight</span> — Student Talent & Project Showcases (presentations on a topic given etc..,)</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-[#f67437] font-bold">»</span> 
                                        <span><span className="font-semibold">McCarthy Challenge</span> — Monthly Competitions & Problem Solving(quizzes, rapid fire questions etc..,)</span>
                                    </li>
                                </ul>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Team">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS09SINeDQo6TUV4y1Mi0spFw-2WGUfWWMCwkfjDiRb1fmYB95u061EqHSTw63j3A/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Team"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Student Members List">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSknLPwjqDhaelFy1gTlT0c7_uMwjn9CviFT7nzMkF-HKwwVVTUjxyKG25V-ABMgw/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Student Members List"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Activities">
                            <div className="text-neutral-700 leading-relaxed text-base">
                                <p className="italic text-neutral-500">More updates on activities coming soon.</p>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Contact">
                            <div className="text-neutral-700 space-y-2 m-0">
                                <h4 className="font-bold text-[#f67437] text-xl mb-4">Contact Us:</h4>
                                <p><span className="font-medium text-[#0A0903]">Mail:</span> <a href="mailto:mccarthyclub.csm@srit.ac.in" className="text-[#f67437] hover:underline font-medium">mccarthyclub.csm@srit.ac.in</a></p>
                            </div>
                        </AccordionItem>
                        
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default MccarthyClubPage;

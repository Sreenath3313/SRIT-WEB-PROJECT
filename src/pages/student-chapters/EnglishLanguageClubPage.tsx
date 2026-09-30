import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, ExternalLink } from 'lucide-react';
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

const EnglishLanguageClubPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />
            <PageHeader title="ENGLISH LANGUAGE CLUB" categoryTitle="STUDENT CHAPTERS" />
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-[1300px] w-full mx-auto px-4 sm:px-5 md:px-6 py-8 lg:py-12 xl:py-16 flex-grow"
            >
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-12">

                    <motion.div variants={fadeUp} className="w-full shadow-lg border border-[#1e293b] rounded-md overflow-hidden">
                        
                        <AccordionItem title="About Us">
                            <div className="text-neutral-700 leading-relaxed m-0 text-base space-y-4">
                                <h4 className="font-bold text-lg text-[#0A0903]">
                                    ELC-SRIT is a student-run club initiated with a motto to inspire and guide SRITians to develop language skills & fluency in English speaking and to make SRIT- English speaking campus. This student club is mentored by the faculty of English.
                                </h4>
                                <h4 className="font-bold text-[#f67437] text-lg mt-4 mb-2">Club Aim:</h4>
                                <ul className="list-disc pl-5">
                                    <li>Encourage and Engage SRITians to use English Language effectively for personal, professional and overall development.</li>
                                </ul>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Objectives">
                            <div className="text-neutral-700 leading-relaxed text-base">
                                <h4 className="font-bold text-[#f67437] text-lg mb-4">Club Objectives:</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Encourage the culture of speaking in English in the Campus.</li>
                                    <li>Provide platform to students to develop communication skills in both Verbal & Non-verbal ways.</li>
                                    <li>Develop academic writing skills to cater students' academic needs.</li>
                                    <li>Enhance English Language Proficiency and Lexical Competence through variety of activities.</li>
                                    <li>Train students in interpersonal & intrapersonal skills through conducting hands-on workshops.</li>
                                    <li>Conduct competitions among the student fraternity to bring the best out of them.</li>
                                </ul>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="ELC Team">
                            <div className="overflow-x-auto rounded-xl border border-neutral-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#f67437] text-white">
                                            <th colSpan={2} className="p-4 text-center text-lg font-bold">Club Members</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-200 text-neutral-700">
                                        <tr className="hover:bg-neutral-50">
                                            <td className="p-4 font-bold bg-neutral-100/50 w-1/3">Club Advisor</td>
                                            <td className="p-4"><strong>Mr Anil Kumar D,</strong> Associate Training & Placement Officer</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50">
                                            <td className="p-4 font-bold bg-neutral-100/50">Club Head</td>
                                            <td className="p-4"><strong>Ms Himaja P,</strong> (III B. Tech, CSE (DS))</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50">
                                            <td className="p-4 font-bold bg-neutral-100/50">Club Secretary</td>
                                            <td className="p-4"><strong>Ms Bhavya Jha,</strong> II B. Tech, CSE</td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50">
                                            <td className="p-4 font-bold bg-neutral-100/50">Club Joint-secretary</td>
                                            <td className="p-4">
                                                <p><strong>Mr Mohammad Hanif J</strong>, II B. Tech, CSE</p>
                                                <p className="my-1">&</p>
                                                <p><strong>Ms Geetha P,</strong> II B. Tech, CSE</p>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-neutral-50">
                                            <td className="p-4 font-bold bg-neutral-100/50 align-top">Club Mentors</td>
                                            <td className="p-4 space-y-3">
                                                <div>
                                                    <p><strong>Dr C Lakshmi Narayana,</strong></p>
                                                    <p className="text-sm text-neutral-500">Associate Professor of English</p>
                                                </div>
                                                <div>
                                                    <p><strong>Mr P Raghavendra Sharma,</strong></p>
                                                    <p className="text-sm text-neutral-500">Assistant Professor of English</p>
                                                </div>
                                                <div>
                                                    <p><strong>Ms S Shaheena Banu,</strong></p>
                                                    <p className="text-sm text-neutral-500">Assistant Professor of English</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Activities">
                            <div className="overflow-x-auto rounded-xl border border-neutral-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-neutral-100 text-neutral-800">
                                            <th className="p-4 font-bold text-center border-r border-neutral-200 w-1/2">Academic Year</th>
                                            <th className="p-4 font-bold text-center w-1/2">Annual Event Report</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-neutral-700">
                                        <tr className="hover:bg-neutral-50 border-t border-neutral-200">
                                            <td className="p-4 text-center font-medium border-r border-neutral-200">2020-21</td>
                                            <td className="p-4 text-center">
                                                <a 
                                                    href="https://docs.google.com/document/d/12DV5Nuhu5XxBVxYRx9cx_M6GeFUcWNBR/edit?usp=sharing&ouid=114791883951376108396&rtpof=true&sd=true" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-[#f67437] hover:text-[#e05e20] hover:underline font-medium"
                                                >
                                                    <FileText className="w-4 h-4" />
                                                    Annual Report
                                                    <ExternalLink className="w-3 h-3" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="MOMs">
                            <div className="overflow-x-auto rounded-xl border border-neutral-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-neutral-100 text-neutral-800">
                                            <th className="p-4 font-bold text-center border-r border-neutral-200 w-1/2">Date</th>
                                            <th className="p-4 font-bold text-center w-1/2">MOM Document</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-neutral-700">
                                        <tr className="hover:bg-neutral-50 border-t border-neutral-200">
                                            <td className="p-4 text-center font-medium border-r border-neutral-200">04-01-2022</td>
                                            <td className="p-4 text-center">MOM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Follow Us">
                            <div className="text-neutral-700 space-y-4 m-0">
                                <h4 className="font-bold text-[#f67437] text-xl mb-4">Contact Us:</h4>
                                <div>
                                    <p className="font-semibold text-lg text-[#f67437]">Mr. Anil Kumar D <span className="text-neutral-500 text-sm ml-1 font-normal">(PhD),</span></p>
                                    <p className="text-neutral-600">Assistant Professor in H & S.</p>
                                    <p className="text-neutral-600">Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                                </div>
                                <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 gap-2 pt-2">
                                    <p><span className="font-medium text-[#0A0903]">Mail:</span> <a href="mailto:elc@srit.ac.in" className="text-[#f67437] hover:underline">elc@srit.ac.in</a></p>
                                    <p><span className="font-medium text-[#0A0903]">Mobile No:</span> <a href="tel:+918778004869" className="text-[#f67437] hover:underline">+91-8778004869</a></p>
                                </div>
                                <div className="pt-2">
                                    <p><span className="font-medium text-[#0A0903]">Instagram Id:</span> <a href="https://instagram.com/elc_srit" target="_blank" rel="noopener noreferrer" className="text-[#f67437] hover:underline font-semibold">elc_srit</a></p>
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

export default EnglishLanguageClubPage;

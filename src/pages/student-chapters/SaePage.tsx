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

const SaePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />
            <PageHeader title="SAE - society of automotive engineering" categoryTitle="STUDENT CHAPTERS" />
            
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
                                src="https://www.srit.ac.in/wp-content/uploads/2022/01/sae.png" 
                                alt="SAE Logo" 
                                className="w-64 sm:w-80 h-auto object-contain"
                            loading="lazy" />
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="w-full shadow-lg border border-[#1e293b] rounded-md overflow-hidden">
                        
                        <AccordionItem title="About SAE">
                            <div className="text-neutral-700 leading-relaxed m-0 text-base space-y-4 text-justify">
                                <p>
                                    Society of Automotive Engineers (SAE) is an International Society having headquarters in the USA. ... SAE is one-stop resource for standards development, events, and technical information and expertise used in designing, building, maintaining, and operating self-propelled vehicles for use on land or sea, in air or space.
                                </p>
                                <p>
                                    Society of automotive engineers (SAE) SAEINDIA is a strategic alliance partner of SAE International registered in India as an Indian non-profit engineering and scientific society dedicated to the advancement of mobility industry in India. It is a society which caters to the need of innovations and latest technological developments in automotive sector. It's a platform provided to exchange ideas, share knowledge of technical expertise from well established automotive industry people among the faculty and students of technical educational institutes.
                                </p>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Vision, Mission and Objectives">
                            <div className="text-neutral-700 leading-relaxed text-base space-y-4">
                                <div>
                                    <h4 className="font-bold text-[#0A0903] text-lg mb-2">Our Vision & Mission</h4>
                                    <p>To inspire excellence & innovation in all fields, and to empower students through knowledge, skills, growth opportunities, and fostering a learning environment.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0A0903] text-lg mb-2 mt-4">Objectives:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Provides a platform to inculcate latest technological developments in automotive sector.</li>
                                        <li>Enables students/faculty to exchange ideas, share knowledge of technical expertise related to innovations in automotive sector from well established automotive industry people.</li>
                                        <li>To benefit its student members and faculty with knowledge of the latest advancements in technology in the field of automobiles</li>
                                        <li>To enhance the knowledge base of student members about recent trends in the engineering of mobility systems</li>
                                        <li>To provide to its members access to SAE International programs and services globally enabling them to practice world class standard in productivity and quality</li>
                                        <li>To provide a forum for members to informally exchange views and ideas</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Faculty Membership">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR04m7mhoBbLrkqI4gxUZc4KO8zmfpfbJyxWWQY7jrMoNrvvutGyD1tsKYgpGlnqQ/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Faculty Membership"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Student Memberships">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS7684TLk_It14G1fVqenl5UnW_ZiKyg6Yndb7PHwar7rXN8LQLtEZKCPfSrWn-uQ/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Student Memberships"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Team">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR-twobcmfECqlLsFCluoPzjaw-TggCkx2CxHkxGEp8pJ3ii_VephB_YjYSJxs0qA/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Team"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="MOM & Action Taken Report">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTTHyFgpq3H91tPPr0DzvL6j8Dzo6AlnXebmG0a_DVGoUtXDKJnOCMyvCI55DG0lA/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="MOM & Action Taken Report"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Activities">
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTVaCOtIxPXB8bkbygrukauAGNsGdCsx1KJF1Xxte1KV5j7n4jzHIMFhM6aNHzEQg/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Activities"
                                />
                            </div>
                        </AccordionItem>

                        <AccordionItem title="Contact">
                            <div className="text-neutral-700 space-y-2 m-0">
                                <p className="font-semibold text-lg text-[#0A0903]">H. JOSEPH SUNDAR <span className="text-sm font-normal text-neutral-500 ml-2">M. Tech.</span></p>
                                <p className="text-neutral-600">Assistant Professor in MECH, SAE-Students' Chapter Coordinator.</p>
                                <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 gap-2 pt-2">
                                    <p><span className="font-medium text-[#0A0903]">E-mail:</span> <a href="mailto:joseph.me@srit.ac.in" className="text-[#f67437] hover:underline">joseph.me@srit.ac.in</a></p>
                                    <p><span className="font-medium text-[#0A0903]">Mobile No:</span> <a href="tel:+917981313154" className="text-[#f67437] hover:underline">+91-7981313154</a></p>
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

export default SaePage;

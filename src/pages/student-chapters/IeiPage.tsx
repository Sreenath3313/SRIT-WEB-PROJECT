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
        <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm mb-4">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-neutral-50 transition-colors"
            >
                <h3 className="text-[#0A0903] text-lg sm:text-xl font-bold m-0">{title}</h3>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-6 text-[#FF5422]" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 sm:p-6 border-t border-neutral-100 bg-neutral-50/50">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const IeiPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />
            <PageHeader title="IEI" categoryTitle="Student Chapters" />
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-[1300px] w-full mx-auto px-4 sm:px-5 md:px-6 py-8 lg:py-12 xl:py-16 flex-grow"
            >
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-12 space-y-12">
                    <motion.div variants={fadeUp} className="prose prose-neutral max-w-none">
                        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                            <img 
                                src="https://www.srit.ac.in/wp-content/uploads/2022/01/iei.png" 
                                alt="IEI Logo" 
                                className="w-48 h-48 object-contain rounded-lg shadow-sm border border-neutral-100 p-2"
                            loading="lazy" />
                            <div>
                                <h2 className="text-[#0A0903] text-2xl md:text-3xl font-bold mb-4 mt-0">The Institution of Engineers (India)</h2>
                                <p className="text-neutral-700 leading-relaxed text-lg">
                                    The Institution of Engineers (India) (IEI) is the national organization for engineers in India. IEI has over 0.5 million members from 15 engineering disciplines in 99 centers or chapters in India and overseas; it is the largest multi-disciplinary engineering professional society in the English-speaking world. It was formed on September 13, 1920 and it is currently Headquarters at Gokhale Road, Kolkata, India.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="prose prose-neutral max-w-none border-t border-neutral-100 pt-8">
                        <h3 className="text-xl font-bold text-[#0A0903] mb-4">Vision</h3>
                        <p className="text-neutral-700 leading-relaxed">
                            To be a globally recognized center of excellence, fostering innovation and sustainable engineering solutions, driving societal progress through collaborative knowledge and expertise.
                        </p>

                        <h3 className="text-xl font-bold text-[#0A0903] mb-4 mt-8">Mission</h3>
                        <p className="text-neutral-700 leading-relaxed">
                            Empower and unite engineers by providing a platform for continuous learning, professional development, and networking opportunities. Advance the engineering profession through research, advocacy, and ethical practices, contributing to the nation's technological advancement.
                        </p>

                        <h3 className="text-xl font-bold text-[#0A0903] mb-4 mt-8">Objectives</h3>
                        <p className="text-neutral-700 leading-relaxed mb-4">
                            IEI-SRIT strives for educational excellence by ensuring high standards and continuous learning. Also fosters professional development, industry collaboration, and upholds ethical standards. Through community engagement, global outreach, and innovation promotion, IEI-SRIT advocates for engineers and represents their interests in policy discussions.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                            <li><strong>Professional Growth:</strong> Support engineers in their professional journey by organizing training programs and workshops for skill development.</li>
                            <li><strong>Industry Partnerships:</strong> Collaborate with industries to bridge the gap between academia and real-world challenges through research and technology transfer.</li>
                            <li><strong>Innovation Promotion:</strong> Encourage a culture of innovation by supporting research initiatives, fostering creativity, and recognizing outstanding contributions in the engineering field.</li>
                            <li><strong>Ethical Engineering:</strong> Promote and uphold ethical standards within the engineering community through awareness and adherence to a code of conduct.</li>
                            <li><strong>Community Involvement:</strong> Engage with local communities to use engineering expertise for addressing societal needs and contributing to sustainable development.</li>
                            <li><strong>Global Presence:</strong> Expand the global reach of IEI-SRIT by participating in international collaborations and initiatives, fostering cross-cultural understanding and contributing to global engineering advancements.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-[#0A0903] mb-4 mt-8 border-t border-neutral-100 pt-8">Benefits</h3>
                        <p className="text-neutral-700 leading-relaxed mb-4">The benefits of being a member of the students' chapter are the following:</p>
                        <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                            <li>Various technical events like seminars, industrial visits, group discussions, technical quiz competitions, workshops and model/ poster competitions will be organized throughout the year with sponsor and banner of IEI.</li>
                            <li>An Annual Students' Convention with a Seminar on a topical subject and Technical Session will be conducted to provide a platform for presentation of technical papers and building fellowship and opportunities for networking with peers and senior members to the Institution.</li>
                            <li>Opportunity to participate in technical events e.g. Seminars, Symposia, Conventions, Workshops etc. organized by various IEI centers at State, National and International levels at a concessional rate of 20%.</li>
                            <li>Scholarships for selected student members will be given by IEI.</li>
                            <li>R & D grant from IEI.</li>
                            <li>Student Members (SMIE) are entitled to enjoy following benefits regarding IEI journals:
                                <ul className="list-[circle] pl-5 mt-2 space-y-1">
                                    <li>Make free e-access by logging in through www.ieindia.org</li>
                                    <li>Can avail the journal hard copies at a concessional rate</li>
                                </ul>
                            </li>
                            <li>Student Members (SMIE) may access the IEI Library (Sir R N Mookerjee Engineering Information Service Centre) at the headquarters as well as State and Local Centres of IEI.</li>
                            <li>Student Members are entitled to receive the monthly colour tabloid `IEI NEWS' free of cost.</li>
                            <li>Opportunity to participate in technical events e.g. Seminars, Symposia, Conventions, Workshops etc. organized by various IEI centres at State, National and International levels at concessional rate.</li>
                            <li>Student Members may avail the opportunity of staying in any of the IEI guest houses.</li>
                            <li>Student groups consisting of SMIEs only will be given preference in release of grants for their final year project/thesis work.</li>
                        </ul>

                        <div className="mt-12 space-y-2">
                            <h3 className="text-xl font-bold text-[#0A0903] mb-6 border-b border-neutral-200 pb-3">Documents & Reports</h3>
                            
                            <AccordionItem title="Team Members">
                                <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                    <iframe 
                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSyXCvP05N55rwITZSKU7qqjeEgriU-Dvy-veqJZCBwHsVBNHaLDkMkZWUxdNRi1g/pubhtml?widget=true&chrome=false&headers=false"
                                        className="w-full h-full border-0"
                                        title="IEI Team Members"
                                    />
                                </div>
                            </AccordionItem>

                            <AccordionItem title="Faculty Membership List">
                                <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                    <iframe 
                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQrptOQmIJDCKHkpbYcOvMVk13CsGUFqx4yKdOP8eV8NLv7MnmvU0fyMWZM7w9qMQ/pubhtml?widget=true&chrome=false&headers=false"
                                        className="w-full h-full border-0"
                                        title="IEI Faculty Membership List"
                                    />
                                </div>
                            </AccordionItem>

                            <AccordionItem title="Student Membership List">
                                <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                    <iframe 
                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTDolXPo8Aw1GiQ9j6urr4UE2wHHRfPcKbsH9GyLcpvtDAuXuc9MQDZAD5phSVA1g/pubhtml?widget=true&chrome=false&headers=false"
                                        className="w-full h-full border-0"
                                        title="IEI Student Membership List"
                                    />
                                </div>
                            </AccordionItem>

                            <AccordionItem title="MoM & Action Taken Report">
                                <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                    <iframe 
                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQCYkK_MBBAeWdgK9n6xiY3uN6EAXoChPXF76WVti2xcFZL0yf3eJRFLvWXApagWA/pubhtml?widget=true&chrome=false&headers=false"
                                        className="w-full h-full border-0"
                                        title="IEI MoM & Action Taken Report"
                                    />
                                </div>
                            </AccordionItem>

                            <AccordionItem title="Activities">
                                <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
                                    <iframe 
                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTdvFELfrydkLRjoAbdd2ZO4Ks0oZ0xCBZoorR8Zrxg3Udyc2XSIGehytvb9qYvEg/pubhtml?widget=true&chrome=false&headers=false"
                                        className="w-full h-full border-0"
                                        title="IEI Activities Data"
                                    />
                                </div>
                            </AccordionItem>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="bg-neutral-50 rounded-xl p-6 sm:p-8 border border-neutral-200/60 mt-12">
                        <h3 className="text-lg font-bold text-[#0A0903] mb-4 border-b border-neutral-200 pb-3">Contact Us</h3>
                        <div className="text-neutral-700 space-y-2">
                            <p className="font-semibold text-lg">Dr. D Maruthi Kumar <span className="text-sm font-normal text-neutral-500 ml-2">M. Tech., Ph. D.</span></p>
                            <p className="text-neutral-600">Associate Professor in ECE, IEI-faculty Advisor.</p>
                            <div className="mt-4 flex flex-col sm:flex-row sm:gap-6 gap-2">
                                <p><span className="font-medium">E-mail:</span> <a href="mailto:maruthi.ece@srit.ac.in" className="text-[#FF5422] hover:underline">maruthi.ece@srit.ac.in</a></p>
                                <p><span className="font-medium">Mobile No:</span> <a href="tel:+919966012141" className="text-[#FF5422] hover:underline">+91-9966012141</a></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default IeiPage;

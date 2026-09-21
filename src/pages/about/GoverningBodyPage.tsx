import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';

const governingBodyMembers = [
    { sNo: 1, name: 'Prof. K. Rajanikanth', affiliation: 'Former Principal, MSRIT', designation: 'Chairman' },
    { sNo: 2, name: 'Sri A. Sambasiva Reddy', affiliation: 'Correspondent & Secretary', designation: 'Management - Member' },
    { sNo: 3, name: 'Smt. J. Padmavathy', affiliation: 'President', designation: 'Management - Member' },
    { sNo: 4, name: 'Dr. M. Ranjit Reddy', affiliation: 'Vice-President', designation: 'Management - Member' },
    { sNo: 5, name: 'Sri E.S. Chakravarthy', affiliation: 'Advisor to SRIT, Bangalore', designation: 'Nominated by Management' },
    { sNo: 6, name: 'Dr. D. Sai Chaitanya Kishore', affiliation: 'Professor, Mechanical Engineering, SRIT', designation: 'Nominated by Principal' },
    { sNo: 7, name: 'Dr. U. Raghu Babu', affiliation: 'Associate Professor, Civil Engineering, SRIT', designation: 'Nominated by Principal' },
    { sNo: 8, name: 'Prof. A. Suresh Babu', affiliation: 'Director, Software Development Centre, JNTUA', designation: 'Nominated by APSCHE' },
    { sNo: 9, name: 'Prof. S.V. Satyanarayana', affiliation: 'Principal, JNTUA College of Engineering, Kalikiri', designation: 'Nominated by JNTUA' },
    { sNo: 10, name: 'Dr. G. Balakrishna', affiliation: 'Principal of SRIT', designation: 'Ex-Officio' },
];

const minutesOfMeeting = [
    { num: 'XXX', date: '29/06/2025' },
    { num: 'XXIX', date: '28/12/2024' },
    { num: 'XXVIII', date: '17/02/2024' },
    { num: 'XXVII', date: '23/09/2023' },
    { num: 'XXVI', date: '30/01/2023' },
    { num: 'XXV', date: '30/04/2022' },
    { num: 'XXIV', date: '04/09/2021' },
    { num: 'XXIII', date: '03/01/2021' },
    { num: 'XXII', date: '29/02/2020' },
    { num: 'XXI', date: '20/10/2019' },
    { num: 'XX', date: '07/09/2019' },
];

const AccordionPanel: React.FC<{ title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }> =
    ({ title, isOpen, onToggle, children }) => (
        <div className="border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-orange-50/40 transition-colors text-left group"
            >
                <h3 className="text-lg font-bold text-[#0A0903] group-hover:text-[#FF5422] transition-colors">{title}</h3>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-[#FF5422]" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 border-t border-neutral-200 bg-neutral-50/40 overflow-x-auto">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

const GoverningBodyPage: React.FC = () => {
    const [openTab, setOpenTab] = useState<'members' | 'minutes' | null>('members');

    return (
        <AboutUsLayout title="Governing Body">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
                <motion.h2 variants={fadeUp} className="text-3xl font-serif font-bold text-[#0A0903] flex items-center gap-3">
                    <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                    Governing Body
                </motion.h2>

                <motion.div variants={fadeUp} className="space-y-4">
                    <AccordionPanel
                        title="Governing Body Members"
                        isOpen={openTab === 'members'}
                        onToggle={() => setOpenTab(openTab === 'members' ? null : 'members')}
                    >
                        <h4 className="font-semibold text-neutral-700 mb-4 text-center text-sm uppercase tracking-wide">Members of Governing Body</h4>
                        <table className="w-full min-w-[600px] border-collapse text-sm">
                            <thead>
                                <tr className="bg-[#0A0903] text-white">
                                    <th className="p-3 border border-neutral-700 font-semibold w-16 text-center">S. No.</th>
                                    <th className="p-3 border border-neutral-700 font-semibold text-left">Name & Affiliation</th>
                                    <th className="p-3 border border-neutral-700 font-semibold text-left w-1/3">Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {governingBodyMembers.map((m, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                        className={`${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} hover:bg-orange-50/50 transition-colors`}
                                    >
                                        <td className="p-3 border border-neutral-200 text-center font-medium text-[#FF5422]">{m.sNo}</td>
                                        <td className="p-3 border border-neutral-200">
                                            <span className="font-bold text-neutral-800">{m.name}</span>
                                            <span className="text-neutral-500 block mt-0.5 text-xs">{m.affiliation}</span>
                                        </td>
                                        <td className="p-3 border border-neutral-200 text-neutral-600">{m.designation}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </AccordionPanel>

                    <AccordionPanel
                        title="Minutes of Meeting"
                        isOpen={openTab === 'minutes'}
                        onToggle={() => setOpenTab(openTab === 'minutes' ? null : 'minutes')}
                    >
                        <h4 className="font-semibold text-neutral-700 mb-4 text-center text-sm uppercase tracking-wide">Minutes of Meeting of Governing Body</h4>
                        <table className="w-full min-w-[500px] border-collapse text-sm max-w-2xl mx-auto">
                            <thead>
                                <tr className="bg-[#0A0903] text-white">
                                    <th className="p-3 border border-neutral-700 font-semibold text-center">Meeting Number</th>
                                    <th className="p-3 border border-neutral-700 font-semibold text-center">Date</th>
                                    <th className="p-3 border border-neutral-700 font-semibold text-center">Minutes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {minutesOfMeeting.map((m, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.04 }}
                                        className={`${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} hover:bg-orange-50/50 transition-colors`}
                                    >
                                        <td className="p-3 border border-neutral-200 text-center font-bold text-neutral-800">{m.num}</td>
                                        <td className="p-3 border border-neutral-200 text-center text-neutral-600">{m.date}</td>
                                        <td className="p-3 border border-neutral-200 text-center">
                                            <span className="px-4 py-1.5 text-xs font-semibold text-[#FF5422] bg-orange-50 border border-orange-200 rounded-full">
                                                View
                                            </span>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </AccordionPanel>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default GoverningBodyPage;

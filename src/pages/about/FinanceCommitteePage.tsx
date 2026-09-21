import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';

const financeCommitteeMembers = [
    { sNo: 1, name: 'Dr. G. Balakrishna', designation: 'Chairman', category: 'Principal of SRIT' },
    { sNo: 2, name: 'Sri A. Sambasiva Reddy', designation: 'Member', category: 'Correspondent & Secretary' },
    { sNo: 3, name: 'Smt. J. Padmavathy', designation: 'Member', category: 'President' },
    { sNo: 4, name: 'Dr. M. Ranjit Reddy', designation: 'Member', category: 'Vice-President' },
    { sNo: 5, name: 'Sri E. S. Chakravarthy', designation: 'Member', category: 'Nominated by Management' },
    { sNo: 6, name: 'Prof. K. Rajanikanth', designation: 'Member', category: 'Former Principal, MSRIT' },
    { sNo: 7, name: 'Dr. U. Raghu Babu', designation: 'Member', category: 'Associate Professor, Civil Engineering, SRIT' },
    { sNo: 8, name: 'Dr. D. Sai Chaitanya Kishore', designation: 'Member Secretary', category: 'Professor, Mechanical Engineering, SRIT' },
];

const FinanceCommitteePage: React.FC = () => (
    <AboutUsLayout title="Finance Committee">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
            <motion.h2 variants={fadeUp} className="text-3xl font-serif font-bold text-[#0A0903] flex items-center gap-3">
                <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                Finance Committee
            </motion.h2>

            <motion.p variants={fadeUp} className="text-neutral-500 leading-relaxed">
                The Finance Committee of SRIT oversees the financial management, budget allocation, and audit of
                institutional funds, ensuring transparency and accountability in all financial matters.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {financeCommitteeMembers.map((m, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="flex items-center gap-4 p-5 bg-white border border-neutral-200 rounded-2xl hover:border-[#FF5422]/40 hover:shadow-lg transition-all group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A0903] to-neutral-700 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow group-hover:from-[#FF5422] group-hover:to-orange-400 transition-all">
                            {m.sNo}
                        </div>
                        <div className="min-w-0">
                            <p className="font-bold text-[#0A0903] truncate">{m.name}</p>
                            <p className="text-xs text-neutral-500 mt-0.5 truncate">{m.category}</p>
                            <span className={`mt-2 inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                m.designation === 'Chairman'
                                    ? 'bg-[#FF5422] text-white'
                                    : m.designation === 'Member Secretary'
                                    ? 'bg-amber-100 text-amber-700 border border-amber-200'
                                    : 'bg-neutral-100 text-neutral-600'
                            }`}>
                                {m.designation}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </AboutUsLayout>
);

export default FinanceCommitteePage;

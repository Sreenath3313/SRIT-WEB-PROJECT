import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger, scaleIn } from '../../features/about/animations';

const sopCategories = [
    {
        category: 'Academic Processes',
        color: 'from-blue-500 to-blue-600',
        items: [
            'SOP for Conduct of Theory Examinations',
            'SOP for Conduct of Laboratory Examinations',
            'SOP for Evaluation and Result Declaration',
            'SOP for Student Attendance Monitoring',
            'SOP for Course File Preparation and Maintenance',
            'SOP for Academic Audit',
            'SOP for Grievance Redressal (Academic)',
        ],
    },
    {
        category: 'Administrative Processes',
        color: 'from-emerald-500 to-emerald-600',
        items: [
            'SOP for Admission Process',
            'SOP for Faculty Recruitment and Selection',
            'SOP for Faculty Appraisal and Performance Review',
            'SOP for Library Operations and Management',
            'SOP for Hostel Administration',
            'SOP for Fee Collection and Refund',
        ],
    },
    {
        category: 'Research & Development',
        color: 'from-[#FF5422] to-orange-400',
        items: [
            'SOP for Research Project Proposals and Funding',
            'SOP for Publication and Intellectual Property',
            'SOP for Student Project Work and Viva',
            'SOP for Industry Collaboration and MOUs',
        ],
    },
    {
        category: 'Student Welfare & Safety',
        color: 'from-purple-500 to-purple-600',
        items: [
            'SOP for Anti-Ragging Committee',
            'SOP for Internal Complaints Committee (ICC)',
            'SOP for Students Grievance Redressal Committee (SGRC)',
            'SOP for Campus Safety and Security',
            'SOP for Health and Medical Emergency',
        ],
    },
];

const SopPage: React.FC = () => (
    <AboutUsLayout title="Standard Operating Procedures">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-10">
            <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                    <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                    SRIT Standard Operating Procedures
                </h2>
                <p className="text-neutral-500 mt-3 leading-relaxed">
                    SRIT has established SOPs to ensure consistency, transparency, and efficiency across all academic,
                    administrative, and student-welfare activities.
                </p>
            </motion.div>

            {sopCategories.map((cat, ci) => (
                <motion.div key={ci} variants={fadeUp}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${cat.color}`} />
                        <h3 className="text-lg font-bold text-[#0A0903]">{cat.category}</h3>
                        <span className="flex-1 h-px bg-neutral-200" />
                    </div>
                    <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {cat.items.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={scaleIn}
                                whileHover={{ x: 4, scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl hover:border-[#FF5422]/30 hover:shadow-sm transition-all group"
                            >
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${cat.color} text-white shrink-0`}>
                                    <FileText className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-neutral-700">{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            ))}

            <motion.div variants={fadeUp} className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
                <p className="text-neutral-500 text-sm leading-relaxed">
                    For detailed SOP documents, please contact the IQAC office at SRIT or visit the administrative office.
                    All SOPs are reviewed and updated periodically in accordance with regulatory requirements from AICTE, UGC, NAAC, and JNTUA.
                </p>
            </motion.div>
        </motion.div>
    </AboutUsLayout>
);

export default SopPage;

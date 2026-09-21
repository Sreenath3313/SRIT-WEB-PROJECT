import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';

type Member = { sNo?: number; name?: string; affiliation?: string; designation?: string; category?: string; categoryHeader?: string };

const academicCouncilMembers: Member[] = [
    { sNo: 1, name: 'Dr. G. Balakrishna', affiliation: 'Principal of SRIT', designation: 'Chairman' },
    { categoryHeader: 'Nominees of JNTUA, Ananthapuramu' },
    { sNo: 2, name: 'Prof. S. V. Satyanarayana', affiliation: 'Director, Academic & Planning, JNTUA, Ananthapuramu', designation: 'Member' },
    { sNo: 3, name: 'Prof. V. Naga Prasad Naidu', affiliation: 'Director of Evaluation, JNTUA, Ananthapuramu', designation: 'Member' },
    { sNo: 4, name: 'Prof. Sankara Sekhara Raju', affiliation: 'Additional Controller of Examinations, JNTUA', designation: 'Member' },
    { categoryHeader: 'Experts from outside college - Nominated by Governing Body' },
    { sNo: 5, name: 'Dr. D.V.L.N. Somayajulu', affiliation: 'Director, IIITDM, Kurnool', designation: 'Member' },
    { sNo: 6, name: 'Dr. P. Viswanath', affiliation: 'Associate Professor, IIIT Sricity', designation: 'Member' },
    { sNo: 7, name: 'Dr. P. Bangaru Babu', affiliation: 'Professor, Dean (Planning & Development), NIT Warangal', designation: 'Member' },
    { sNo: 8, name: 'Dr. K. Nagabhushana Raju', affiliation: 'Professor & Director – Centre for Skill Development, SKU, Ananthapuramu', designation: 'Member' },
    { sNo: 9, name: 'Dr. G. Vara Prasad', affiliation: 'Professor of CSE, BMS College of Engineering, Bangalore', designation: 'Member' },
    { sNo: 10, name: 'Mr. C. Richard King', affiliation: 'Senior Technocrat – TCS, Hyderabad', designation: 'Member' },
    { categoryHeader: 'Heads of the Departments' },
    { sNo: 11, name: 'Dr. T. Chinna Venkata Reddy', affiliation: 'Head, Department of Civil Engineering', designation: 'Member' },
    { sNo: 12, name: 'Dr. G. Meerimatha', affiliation: 'Head, Department of EEE', designation: 'Member' },
    { sNo: 13, name: 'Dr. L. Vamsi Krishna Reddy', affiliation: 'Head, Department of Mechanical Engineering', designation: 'Member' },
    { sNo: 14, name: 'Dr. M.L Ravichandra', affiliation: 'Head, Department of ECE', designation: 'Member' },
    { sNo: 15, name: 'Mr. P. Veera Prakash', affiliation: 'Head, Department of CSE', designation: 'Member' },
    { sNo: 16, name: 'Dr. P. Chitra Lingappa', affiliation: 'Head, Department of CSE (AI & ML) and (Data Science)', designation: 'Member' },
    { sNo: 17, name: 'Dr. J. Guru Siddappa', affiliation: 'Head, Department of H & S', designation: 'Member' },
    { categoryHeader: 'Teachers representing various categories' },
    { sNo: 18, name: 'Dr. U. Raghu Babu', affiliation: 'Associate Professor of CE, SRIT', designation: 'Member' },
    { sNo: 19, name: 'Dr. D. Sai Chaitanya Kishore', affiliation: 'Assoc. Professor of ME & Director-IQAC, SRIT', designation: 'Member' },
    { sNo: 20, name: 'Dr. U. Sreenivas', affiliation: 'Vice Principal, SRIT', designation: 'Member' },
    { sNo: 21, name: 'Mr. L. Suman', affiliation: 'Assistant Professor of CSE, SRIT', designation: 'Member' },
    { sNo: 22, name: 'Mr. K. Bharani Kumar Reddy', affiliation: 'Assistant Professor of ME, SRIT', designation: 'Member' },
    { sNo: 23, name: 'Mr. M. Rami Reddy', affiliation: 'Assistant Professor of ECE', designation: 'Member' },
    { categoryHeader: 'Faculty Nominated by Principal' },
    { sNo: 24, name: 'Dr. M. Ranjit Reddy', affiliation: 'Professor of CSE, SRIT', designation: 'Member Secretary' },
];

const AcademicCouncilPage: React.FC = () => (
    <AboutUsLayout title="Academic Council">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
            <motion.h2 variants={fadeUp} className="text-3xl font-serif font-bold text-[#0A0903] flex items-center gap-3">
                <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                Academic Council
            </motion.h2>

            <motion.div variants={fadeUp} className="rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] border-collapse text-sm">
                        <thead>
                            <tr className="bg-[#0A0903] text-white">
                                <th className="p-4 border border-neutral-700 font-semibold w-16 text-center">S. No.</th>
                                <th className="p-4 border border-neutral-700 font-semibold text-left">Name &amp; Affiliation</th>
                                <th className="p-4 border border-neutral-700 font-semibold text-left w-1/4">Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {academicCouncilMembers.map((member, idx) => {
                                if (member.categoryHeader) {
                                    return (
                                        <tr key={`h-${idx}`} className="bg-gradient-to-r from-orange-50 to-amber-50">
                                            <td colSpan={3} className="p-3 px-5 border border-orange-200 font-bold text-[#FF5422] text-xs uppercase tracking-wider">
                                                {member.categoryHeader}
                                            </td>
                                        </tr>
                                    );
                                }
                                return (
                                    <motion.tr
                                        key={idx}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.02 }}
                                        className="bg-white hover:bg-orange-50/40 transition-colors"
                                    >
                                        <td className="p-3 border border-neutral-200 text-center font-bold text-[#FF5422] align-top">{member.sNo}</td>
                                        <td className="p-3 border border-neutral-200 align-top">
                                            <span className="font-bold text-[#0A0903]">{member.name}</span>
                                            {member.affiliation && <span className="text-neutral-500 block mt-1 text-xs leading-relaxed">{member.affiliation}</span>}
                                        </td>
                                        <td className="p-3 border border-neutral-200 text-neutral-600 font-medium align-top">{member.designation}</td>
                                    </motion.tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </motion.div>
    </AboutUsLayout>
);

export default AcademicCouncilPage;

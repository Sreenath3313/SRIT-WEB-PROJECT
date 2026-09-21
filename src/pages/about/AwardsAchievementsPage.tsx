import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger, scaleIn } from '../../features/about/animations';

const awardsData = [
    { title: 'NAAC A Grade Accreditation', description: 'Accredited by National Assessment and Accreditation Council (NAAC) with A Grade, recognizing excellence in education.', icon: Award, year: '2023', color: 'from-amber-500 to-orange-500' },
    { title: 'NBA Accreditation', description: 'B.Tech programs in CSE, ECE, EEE, and MEC are accredited by the National Board of Accreditation.', icon: Trophy, year: '2022', color: 'from-[#FF5422] to-orange-400' },
    { title: 'NIRF Ranking', description: 'Consistently recognized and ranked in the top engineering colleges by the National Institutional Ranking Framework (NIRF).', icon: Star, year: '2023', color: 'from-purple-500 to-indigo-500' },
    { title: 'Best Engineering College Award', description: 'Awarded the Best Engineering College in the Rayalaseema region for outstanding academic performance and placements.', icon: Medal, year: '2021', color: 'from-emerald-500 to-teal-500' },
];

const AwardsAchievementsPage: React.FC = () => (
    <AboutUsLayout title="Awards and Achievements">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-10">
            <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                    <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                    Awards &amp; Achievements
                </h2>
                <p className="text-neutral-500 mt-3 leading-relaxed">
                    SRIT has been constantly striving for excellence in engineering education and research. Our commitment
                    to quality has been recognized by various national bodies through prestigious awards, accreditations, and rankings.
                </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awardsData.map((award, i) => (
                    <motion.div
                        key={i}
                        variants={scaleIn}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="relative bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden group hover:shadow-xl transition-shadow"
                    >
                        {/* Top gradient bar */}
                        <div className={`h-1.5 w-full bg-gradient-to-r ${award.color}`} />
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center text-white shadow-md`}>
                                    <award.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full">{award.year}</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#0A0903] mb-2 group-hover:text-[#FF5422] transition-colors">{award.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">{award.description}</p>
                        </div>
                        {/* Hover glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-[0.03] transition-opacity rounded-2xl`} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </AboutUsLayout>
);

export default AwardsAchievementsPage;

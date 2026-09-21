import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';

const VisionMissionPage: React.FC = () => {
    const missionPoints = [
        'Continually enhance the quality of physical infrastructure and human resources to evolve into a center of excellence in engineering education.',
        'Provide comprehensive learning experiences that are conducive for the students to acquire professional competences, ethical values, life-long learning abilities and understanding of the technology, environment and society.',
        'Strengthen industry institute interactions to enable the students work on realistic problems and acquire the ability to face the ever changing requirements of the industry.',
        'Continually enhance the quality of the relationship between students and faculty which is a key to the development of an exciting and rewarding learning environment in the college.',
    ];

    return (
        <AboutUsLayout title="Vision & Mission">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-10">
                {/* Vision */}
                <motion.div variants={fadeUp}>
                    <div className="relative bg-gradient-to-br from-[#0A0903] to-neutral-800 rounded-2xl p-8 overflow-hidden shadow-lg">
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FF5422]/10 rounded-full blur-2xl" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-full bg-[#FF5422] flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-white">Vision</h2>
                            </div>
                            <p className="text-neutral-300 leading-relaxed text-lg italic border-l-4 border-[#FF5422] pl-5">
                                "To become a premier Educational Institution in India offering the best teaching and learning
                                environment for our students that will enable them to become complete individuals with professional
                                competency, human touch, ethical values, service motto, and a strong sense of responsibility
                                towards environment and society at large."
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Mission */}
                <motion.div variants={fadeUp}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-[#FF5422]/10 border-2 border-[#FF5422] flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-[#FF5422]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-[#0A0903]">Mission</h2>
                    </div>
                    <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-4">
                        {missionPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ x: 4 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="flex gap-4 p-5 bg-white border border-neutral-200 rounded-xl hover:border-[#FF5422]/40 hover:shadow-md transition-all"
                            >
                                <span className="w-8 h-8 rounded-full bg-[#FF5422] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                                    {i + 1}
                                </span>
                                <p className="text-neutral-700 leading-relaxed">{point}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default VisionMissionPage;

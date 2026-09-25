import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';
import IframeWithLoader from '../../components/common/IframeWithLoader';

const StrategicPlanPage: React.FC = () => {
    const objectives = [
        'Enhance the quality of academic programs to meet national and global standards.',
        'Strengthen research, innovation, and entrepreneurship culture among faculty and students.',
        'Develop state-of-the-art infrastructure and laboratory facilities.',
        'Foster industry-academia collaboration for skill development and placement support.',
        'Promote inclusive education and equal opportunity for students from rural backgrounds.',
        'Achieve and maintain national accreditations (NAAC, NBA) and improve NIRF rankings.',
        'Institutionalize a culture of continuous quality improvement through IQAC.',
        'Expand MOUs and collaborations with leading national and international organizations.',
    ];

    return (
        <AboutUsLayout title="Institutional Strategic Plan">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-10">
                <motion.div variants={fadeUp}>
                    <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                        <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                        Institutional Strategic Plan
                    </h2>
                    <p className="text-neutral-500 mt-3 leading-relaxed">
                        The Institutional Strategic Plan of SRIT outlines the long-term vision, goals, and objectives
                        for achieving academic excellence, research promotion, and institutional development — a roadmap
                        towards becoming a premier technical institution in India.
                    </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                    <h3 className="text-xl font-bold text-[#0A0903] mb-5">Strategic Objectives</h3>
                    <motion.div variants={stagger} className="space-y-3">
                        {objectives.map((obj, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="flex gap-4 p-4 bg-white border border-neutral-200 rounded-xl hover:border-[#FF5422]/40 hover:shadow-md transition-all group"
                            >
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF5422] to-orange-400 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                    {i + 1}
                                </div>
                                <p className="text-neutral-700 leading-relaxed">{obj}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div variants={fadeUp}>
                    <h3 className="text-xl font-bold text-[#0A0903] mb-4">Strategic Plan Document</h3>
                    <p className="text-neutral-500 leading-relaxed mb-6">
                        The detailed plan is maintained and monitored by the IQAC (Internal Quality Assurance Cell)
                        of SRIT. The plan is reviewed periodically to align with the evolving needs of students,
                        industry, and regulatory bodies.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.005 }}
                        className="w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-md bg-white"
                    >
                        <div className="bg-gradient-to-r from-[#0A0903] to-neutral-700 px-6 py-3 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#FF5422]" />
                            <p className="text-sm font-semibold text-white">Institutional Strategic Plan — Live Document</p>
                        </div>
                        <div style={{ height: 'clamp(400px, 60vh, 640px)' }}>
                            <IframeWithLoader
                                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRdfyI3JPB1Fs32c0x6dV9jui4wTdbz_-1blmmh5sPDc8jGvP60GLMqN6aaQlUCBQ/pubhtml?widget=true&headers=false"
                                title="SRIT Institutional Strategic Plan"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default StrategicPlanPage;

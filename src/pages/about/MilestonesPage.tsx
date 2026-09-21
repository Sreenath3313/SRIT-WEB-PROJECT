import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';

const milestonesData = [
    { year: '2008', event: 'Establishment of Srinivasa Ramanujan Institute of Technology (SRIT).' },
    { year: '2012', event: 'First batch of B.Tech students successfully graduated.' },
    { year: '2015', event: 'Accredited by NAAC with A Grade.' },
    { year: '2017', event: 'Received NBA Accreditation for B.Tech CSE, ECE, EEE, and MEC programs.' },
    { year: '2018', event: 'Recognized under section 2(f) & 12(B) of the UGC Act, 1956.' },
    { year: '2019', event: 'Granted Autonomous Status by University Grants Commission (UGC).' },
    { year: '2020', event: 'Ranked in the 151–200 band by NIRF, Ministry of Education, Govt. of India.' },
    { year: '2021', event: 'Established AI & ML and Data Science departments.' },
    { year: '2023', event: 'Renewal of NAAC A Grade Accreditation.' },
];

const MilestonesPage: React.FC = () => (
    <AboutUsLayout title="Milestones">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-10">
            <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                    <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                    Our Journey
                </h2>
                <p className="text-neutral-500 mt-3 leading-relaxed">
                    Since its inception in 2008, SRIT has consistently achieved significant milestones in its journey
                    towards academic excellence. Our growth story is a testament to our dedication and commitment.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-6">
                {/* Vertical line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-[11px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#FF5422] via-orange-300 to-neutral-200 rounded-full origin-top"
                />

                <motion.div variants={stagger} className="space-y-8">
                    {milestonesData.map((m, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ x: 6 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="relative flex gap-5 group"
                        >
                            {/* Dot */}
                            <div className="absolute -left-6 top-3 w-5 h-5 rounded-full border-[3px] border-[#FF5422] bg-white group-hover:bg-[#FF5422] transition-colors shadow-md shadow-orange-100 z-10" />

                            {/* Card */}
                            <div className="flex-1 bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm group-hover:shadow-md group-hover:border-[#FF5422]/30 transition-all">
                                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#FF5422] to-orange-400 text-white text-xs font-bold rounded-full mb-3 shadow-sm">
                                    {m.year}
                                </span>
                                <p className="text-neutral-700 font-medium leading-relaxed">{m.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    </AboutUsLayout>
);

export default MilestonesPage;

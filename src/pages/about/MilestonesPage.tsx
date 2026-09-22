import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';

const milestonesData = [
    {
        year: '2007',
        event: 'The inception of SMT. ALURU NARAYANAMMA MEMORIAL EDUCATIONAL SOCIETY.',
    },
    {
        year: '2008',
        event: 'The emergence of Srinivasa Ramanujan Institute of Technology offering B.Tech in Computer Science & Engineering, Electronics & Communication Engineering, Electrical & Electronics Engineering and Information Technology.',
    },
    {
        year: '2009',
        event: 'Increase in the intake of B.Tech in Electronics & Communication Engineering from 60 to 120.\nStarting of PG courses in MBA.',
    },
    {
        year: '2010',
        event: 'Increase in the intake of B.Tech in Electrical & Electronics Engineering from 60 to 120.',
    },
    {
        year: '2011',
        event: 'Increase in the intake of B.Tech in Computer Science & Engineering from 60 to 120.\nStarting of PG course in M.Tech (VLSI Design).',
    },
    {
        year: '2012',
        event: 'Starting of B.Tech in Mechanical Engineering and Civil Engineering.\nStarting of PG course in M.Tech (Computer Science) and M.Tech (Electrical Power Systems).',
    },
    {
        year: '2015',
        event: 'JNTUA, Ananthapuramu has granted permanent affiliation for a period of three years.',
    },
    {
        year: '2016',
        event: 'Recognition of College under Section 2 (f) & 12 (B) of the UGC Act, 1956.',
    },
    {
        year: '2017',
        event: "The College has been Accredited by National Assessment and Accreditation Council (NAAC) with 'A' Grade for a period of 5 years upto 11-09-2022.",
    },
    {
        year: '2018',
        event: 'The departments of Computer Science & Engineering, Electronics & Communication Engineering and Electrical & Electronics Engineering got accredited by the National Board of Accreditation (NBA), New Delhi, for a period of three years upto 30-06-2021.\nJNTUA, Ananthapuramu has granted permanent affiliation for a period of five years.',
    },
    {
        year: '2019',
        event: 'Conferment of Autonomous Status by University Grants Commission, New Delhi for a period of 10 years.',
    },
    {
        year: '2020',
        event: 'Starting of Emerging Courses in B.Tech in Computer Science & Engineering (Artificial Intelligence and Machine Learning) and Computer Science and Engineering (Data Science).',
    },
    {
        year: '2021',
        event: 'Increase in the intake of B.Tech in Computer Science & Engineering (Artificial Intelligence and Machine Learning) from 60 to 120 and Computer Science and Engineering (Data Science) from 60 to 120.\nThe College has been further accredited by National Assessment and Accreditation Council (NAAC) with \'A\' Grade for a period of two years upto 31-12-2024.\nThe College has been further accredited by National Board of Accreditation (NBA) for a period of one year upto 30-06-2022 for 3 branches: Computer Science & Engineering, Electronics & Communication Engineering and Electrical & Electronics Engineering.',
    },
];

const MilestonesPage: React.FC = () => (
    <AboutUsLayout title="Milestones">
        <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-10"
        >
            {/* Heading */}
            <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                    <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                    Our Journey
                </h2>

                <p className="text-neutral-500 mt-3 leading-relaxed text-left sm:text-justify">
                    Since its inception, SRIT has continuously evolved through
                    academic expansion, new programmes, institutional
                    recognition, accreditation, and autonomous status. The
                    milestones below present the institution&apos;s journey
                    and major developments over the years.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-6">
                {/* Vertical Line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-[11px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#FF5422] via-orange-300 to-neutral-200 rounded-full origin-top"
                />

                <motion.div
                    variants={stagger}
                    className="space-y-8"
                >
                    {milestonesData.map((milestone, index) => (
                        <motion.div
                            key={`${milestone.year}-${index}`}
                            variants={fadeUp}
                            whileHover={{ x: 6 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                            }}
                            className="relative flex gap-5 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-6 top-3 w-5 h-5 rounded-full border-[3px] border-[#FF5422] bg-white group-hover:bg-[#FF5422] transition-colors shadow-md shadow-orange-100 z-10" />

                            {/* Milestone Card */}
                            <div className="flex-1 bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm group-hover:shadow-md group-hover:border-[#FF5422]/30 transition-all">
                                {/* Year */}
                                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#FF5422] to-orange-400 text-white text-xs font-bold rounded-full mb-3 shadow-sm">
                                    {milestone.year}
                                </span>

                                {/* Event */}
                                <div className="text-neutral-700 font-medium leading-relaxed text-left sm:text-justify">
                                    {milestone.event.split('\n').map((line, lineIndex) => (
                                        <p
                                            key={lineIndex}
                                            className={lineIndex > 0 ? 'mt-2' : ''}
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    </AboutUsLayout>
);

export default MilestonesPage;
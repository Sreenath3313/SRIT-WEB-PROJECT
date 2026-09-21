import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger, slideLeft } from '../../features/about/animations';

const PrincipalPage: React.FC = () => {
    const stats = [
        { label: 'Years Experience', value: '21+' },
        { label: 'Years Research', value: '13+' },
        { label: 'Journal Articles', value: '14' },
        { label: 'Conference Papers', value: '12' },
    ];

    return (
        <AboutUsLayout title="About Principal">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Image & stats */}
                <motion.div variants={slideLeft} className="w-full lg:w-[260px] shrink-0 space-y-4">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#FF5422] to-orange-300 blur-sm opacity-40" />
                        <img
                            src="https://www.srit.ac.in/wp-content/uploads/2021/07/princi-img.png"
                            alt="Dr. G. Balakrishna"
                            className="relative w-full rounded-2xl shadow-xl border-2 border-white object-cover"
                        />
                    </div>
                    <div className="bg-gradient-to-br from-[#0A0903] to-neutral-800 rounded-xl p-4 text-center shadow">
                        <p className="text-white font-bold text-lg">Dr. G. Balakrishna</p>
                        <p className="text-[#FF5422] text-sm font-semibold mt-1">Principal, SRIT</p>
                    </div>
                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-2">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ scale: 1.05 }}
                                className="bg-orange-50 border border-orange-100 rounded-xl p-3 text-center"
                            >
                                <div className="text-xl font-bold text-[#FF5422]">{s.value}</div>
                                <div className="text-[10px] text-neutral-500 mt-0.5 font-medium leading-tight">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    className="flex-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.18,
                                delayChildren: 0.25,
                            },
                        },
                    }}
                >
                    <motion.h2
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -50,
                                filter: "blur(6px)",
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)",
                                transition: {
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="text-3xl font-serif font-bold text-[#0A0903] mb-1"
                    >
                        Dr. G. Balakrishna
                    </motion.h2>

                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -35,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: 32 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-0.5 bg-[#FF5422] rounded-full"
                        />

                        <span className="text-[#FF5422] font-semibold">
                            Principal
                        </span>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.22,
                                    delayChildren: 0.75,
                                },
                            },
                        }}
                        className="space-y-4 text-neutral-600 leading-relaxed"
                    >
                        {[
                            "Dr. G. Balakrishna, the Principal of SRIT, is one of the most distinguished faculty members in any technology institute. Even before he received his Ph.D in the faculty of Electrical & Electronics Engineering from Jawaharlal Nehru Technological University, Kakinada in 2016, he has been one of the leading researchers pushing the frontiers in electrical engineering. He has more than 21 years of experience as a teacher and 13 years in research. He has published 14 research articles in various peer-reviewed national/international journals and has presented 12 papers at various conferences.",
                            "He also acted as a Program Chair as well as Session Chair for the Third International Conference on Emerging Trends in Electrical, Communications, and Information Technology (ICECIT-2018 — proceedings published in LNEE by Springer) for the Electrical Engineering stream.",
                            "He joined SRIT in 2016 and has worked as Professor of EEE, convener for Industry-Institute Interaction Cell, and Head of the EEE Department. He is a reviewer of i-Manager's Journal on Power Systems Engineering.",
                            "He is a Life Member of the Indian Society of Technology, Institute of Engineers (India), and the International Association of Engineers.",
                            "He is a compassionate human being, whose kindliness and gentleness shine through his intellectual aura. As principal, he is an ideal guide to those delicate minds that need firm direction but with a gentle hand. Under his stewardship, the institute has gone from strength to strength.",
                        ].map((para, i) => (
                            <motion.p
                                key={i}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        x: -45,
                                        filter: "blur(4px)",
                                    },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        filter: "blur(0px)",
                                        transition: {
                                            duration: 0.65,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    },
                                }}
                            >
                                {para}
                            </motion.p>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default PrincipalPage;

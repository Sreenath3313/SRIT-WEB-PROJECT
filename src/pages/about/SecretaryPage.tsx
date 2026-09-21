import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger, slideLeft } from '../../features/about/animations';

const SecretaryPage: React.FC = () => {
    const bullets = [
        'He believes that education to one member educates an entire family and provides them with an income, giving them pride and self-respect. The founder firmly believes that "EDUCATION IS SIMPLY THE SOUL OF A SOCIETY AS IT PASSES FROM ONE GENERATION TO ANOTHER". That was when Srinivasa Ramanujan Institute of Technology (SRIT) was born out of his feelings to serve. The name was chosen as the founder wanted to honor the achievements of the great mathematician, Sri Srinivasa Ramanujan.',
        'The role of an educator is to bring out the best in every individual and that of an educational institution to provide the best facilities and the right ambiance. With this motto and vision, Sri Aluru Sambasiva Reddy set out to fulfill his vision of providing "VALUE & SKILL-BASED EDUCATION" by establishing SRIT, a world-class technological institute.',
        'He leads from the front; his indomitable spirit and his unflagging energy providing the institute with focus and direction. He relentlessly mixes education and human values — great respect, love, and concern to his teachers, his family members, and parents in equal measure.',
        'Under his benign and pragmatic guidance, SRIT has grown in reputation and merit. Today, it is regarded among the best engineering institutes in India.',
    ];

    return (
        <AboutUsLayout title="About Secretary">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Image */}
                <motion.div variants={slideLeft} className="w-full lg:w-[260px] shrink-0">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#FF5422] to-orange-300 blur-sm opacity-40" />
                        <img
                            src="https://www.srit.ac.in/wp-content/uploads/2021/07/samba-siva.jpeg"
                            alt="Aluru Sambasiva Reddy"
                            className="relative w-full rounded-2xl shadow-xl border-2 border-white object-cover"
                        />
                    </div>
                    <motion.div variants={fadeUp} className="mt-4 bg-gradient-to-br from-[#0A0903] to-neutral-800 rounded-xl p-4 text-center shadow">
                        <p className="text-white font-bold text-lg">Aluru Sambasiva Reddy</p>
                        <p className="text-[#FF5422] text-sm font-semibold mt-1">Founder & Secretary</p>
                        <a href="mailto:correspondent@srit.ac.in" className="mt-3 inline-block text-xs text-neutral-400 hover:text-[#FF5422] transition-colors">
                            correspondent@srit.ac.in
                        </a>
                    </motion.div>
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
                            hidden: { opacity: 0, x: -50, filter: "blur(6px)" },
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
                        Aluru Sambasiva Reddy
                    </motion.h2>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -35 },
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
                            Founder & Secretary
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
                            "Aluru Sambasiva Reddy, the Founder Secretary of SRIT, is the youngest son of Sri. Aluru Sunki Reddy and Late Smt. Aluru Narayanamma. He completed his schooling at the local Govt. High School. His dream was to pursue an engineering degree at the university campus.",
                            "With that goal in mind, he obtained a graduate's degree in Mechanical Engineering from the prestigious JNTUCE, Anantapuramu, in the year 2000. He also completed his M. Tech in Refrigeration and Air Conditioning from JNTUA in 2004.",
                            "In his 7 years at the college, with his administrative and enormous organizing abilities, he managed admissions and later served as Training and Placement Officer.",
                            "It was at about this time that he began to firm up his beliefs in education into an actual service credo — to educate youth and help them stand on their own feet.",
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

                        {/* Existing bullet section — unchanged */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-6 space-y-3"
                        >
                            {bullets.map((b, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="flex gap-3 p-4 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-[#FF5422]/40 transition-all"
                                >
                                    <span className="w-5 h-5 rounded-full bg-[#FF5422] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                                        {i + 1}
                                    </span>
                                    <p className="text-sm leading-relaxed">{b}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default SecretaryPage;

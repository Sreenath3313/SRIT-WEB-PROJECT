import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';
import { ArrowRight } from 'lucide-react';

const societyMembers = [
    'Smt. J. Padmavathy, M. Tech - President',
    'Sri M. Ranjit Reddy, M. Tech - Vice President (Dr)',
    'Sri A. Sambasiva Reddy, M. Tech - Secretary',
    'Sri K. Jagan Mohan Reddy, M. Tech - Joint Secretary',
    'Sri A.V. Ramana Reddy - Treasurer',
    'Smt. J. Nirmala Devi - E.C. Member',
    'Sri A. Rajeswara Reddy - E.C. Member',
    'Sri A. Nagasesha Reddy - E.C. Member',
    'Sri A. Ramachandra Reddy - E.C. Member',
];

const OverviewPage: React.FC = () => {
    return (
        <AboutUsLayout title="Overview">
            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="space-y-8"
            >
                {/* === Campus Image + Orange Banner === */}
                <motion.div
                    variants={fadeUp}
                    className="relative rounded-xl overflow-hidden shadow-md"
                >
                    <img
                        src="https://www.srit.ac.in/wp-content/uploads/2021/12/grd-img.jpg"
                        alt="SRIT Campus"
                        className="w-full h-[240px] sm:h-[280px] object-cover"
                    />

                    <div className="absolute bottom-0 left-0 bg-[#FF5422] px-8 py-4">
                        <h2 className="text-white text-2xl font-bold font-serif">
                            Overview Of Campus
                        </h2>
                    </div>
                </motion.div>

                {/* === Campus Description === */}
                <motion.div
                    variants={fadeUp}
                    className="text-neutral-700 leading-[1.9] text-[15px] space-y-4"
                >
                    <p className="text-left sm:text-justify">
                        Established in the year 2008 and reputable as one of the
                        leading educational institutions in the technical and
                        engineering space. (Permanently) Affiliated to{' '}
                        <span className="text-[#FF5422] font-medium">
                            JNTU Ananthapuramu
                        </span>
                        , the institute has been approved by the AICTE New
                        Delhi, and has an enviable record of producing
                        Engineering graduates who have achieved success in
                        their chosen fields of endeavors. All this (is) in the
                        space of just 12 years.
                    </p>

                    <p className="text-left sm:text-justify">
                        Situated at the outskirts of Rotarypuram Village, B.K.
                        Samudram Mandal in the district of Ananthapuramu, (and)
                        is the brainchild of Sri Aluru Sambasiva Reddy. While he
                        was a professor in the field of engineering, he realised
                        that Ananthapuramu lacked a quality technical institute
                        that catered to students from rural areas and those
                        from the economically challenged strata of society.
                        Hence, he started a non-profit organisation which has a
                        focus on imparting the best technical education to these
                        students.
                    </p>

                    <p className="text-left sm:text-justify">
                        Managed under the Aegis of the Smt. Aluru Narayanamma
                        Memorial Educational Society, SRIT aims to become one of
                        the best technical institutes in the country.
                    </p>
                </motion.div>

                {/* === Divider === */}
                <motion.div
                    variants={fadeUp}
                    className="border-t border-neutral-200"
                />

                {/* === About Society === */}
                <motion.div
                    variants={fadeUp}
                    className="space-y-4"
                >
                    <p className="text-[#FF5422] font-bold tracking-[0.15em] text-sm uppercase text-center">
                        About
                    </p>

                    <h2 className="text-[1.75rem] font-bold text-[#0A0903] leading-snug">
                        Smt. Aluru Narayanamma Memorial Educational Society
                    </h2>

                    <p className="text-neutral-700 leading-[1.9] text-[15px] text-left sm:text-justify">
                        This Society was established by Founder-cum-Secretary{' '}
                        <strong>Sri Aluru Sambasiva Reddy</strong> in November
                        2007 in memory of his mother, Late Smt. Aluru
                        Narayanamma, to give shape to his firm belief that{' '}
                        <strong>
                            "EDUCATION IS A KEY ENABLER FOR PROGRESS"
                        </strong>
                        . This was a belief his late mother had instilled in
                        his mind at an early age. This belief has shaped his
                        entire life – he himself excelled in his scholastic
                        years and then became a tutor, teaching students not
                        only his subject but also imparting higher human values.
                        As his career progressed, he wanted to ensure that
                        maximum students from rural and developing areas could
                        derive benefit from this credo. And so, he started this
                        Society. The main objective of Society is to provide
                    </p>
                </motion.div>

                {/* === Big Quote === */}
                <motion.div
                    variants={fadeUp}
                    className="text-center text-[1.4rem] sm:text-[1.6rem] font-semibold text-neutral-800 leading-relaxed py-2"
                >
                    "value based{' '}
                    <span className="text-[#FF5422]">education</span>
                    {' '}&amp; employment{' '}
                    <span className="text-[#FF5422]">avenues</span>
                    {' '}for{' '}
                    <span className="text-[#FF5422]">rural students</span>"
                </motion.div>

                {/* === Members + Ramanujan Portrait === */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-col lg:flex-row gap-10 items-start"
                >
                    {/* Members list */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#0A0903] mb-6">
                            Members of the{' '}
                            <span className="text-[#FF5422]">
                                Society
                            </span>
                        </h3>

                        <motion.ul
                            variants={stagger}
                            className="space-y-3 mb-8"
                        >
                            {societyMembers.map((member, i) => (
                                <motion.li
                                    key={i}
                                    variants={fadeUp}
                                    className="flex items-center gap-3 text-neutral-700 text-[15px]"
                                >
                                    <span className="w-6 h-6 rounded bg-[#FF5422] text-white flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </span>

                                    <span>{member}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* View More button */}
                        <motion.button
                            variants={fadeUp}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                            }}
                            className="flex items-center gap-3 bg-[#FF5422] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-md"
                        >
                            View More

                            <span className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                                <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </motion.button>
                    </div>

                    {/* Srinivasa Ramanujan Portrait */}
                    <motion.div
                        variants={fadeUp}
                        whileHover={{ scale: 1.02 }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                        }}
                        className="w-full lg:w-[300px] shrink-0 rounded-xl overflow-hidden shadow-lg border border-neutral-200"
                    >
                        {/* Name banner */}
                        <div className="bg-neutral-100 text-[#0A0903] text-center py-2.5 font-bold tracking-[0.12em] text-sm border-b border-neutral-200">
                            SRINIVASA RAMANUJAN
                        </div>

                        <img
                            src="https://www.srit.ac.in/wp-content/uploads/2021/12/srini-ramanuj-img-main.jpeg"
                            alt="Srinivasa Ramanujan"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default OverviewPage;
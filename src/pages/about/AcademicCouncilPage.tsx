import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';

const ACADEMIC_COUNCIL_SHEET_1 =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQKllMwqutN74q-Fde4ZKetiJcLIo98grj6aDlKaa7PPfqnZ1cLPtPBuGOflBwsAWKoQoJt_4axNpHL/pubhtml?widget=true&headers=false';

const ACADEMIC_COUNCIL_SHEET_2 =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8kBQzE9NkhU2XzPxqqL9bCP_TJetD_8pnTzc4siqimi2BqHgOetQGUk-PLxhH0h0YPqOaCDHVkF7p/pubhtml?widget=true&headers=false';

const AcademicCouncilPage: React.FC = () => {
    return (
        <AboutUsLayout title="Academic Council">
            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="space-y-8"
            >
                {/* Page Heading */}
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl font-serif font-bold text-[#0A0903] flex items-center gap-3"
                >
                    <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                    Academic Council
                </motion.h2>

                {/* Academic Council Sheet 1 */}
                <motion.div
                    variants={fadeUp}
                    className="rounded-2xl border border-neutral-200 overflow-hidden shadow-sm bg-white"
                >
                    <div className="w-full overflow-hidden">
                        <iframe
                            src={ACADEMIC_COUNCIL_SHEET_1}
                            title="Academic Council - Sheet 1"
                            className="w-full border-0"
                            style={{
                                border: 'none',
                                display: 'block',
                                height: 'clamp(280px, 45vh, 600px)',
                            }}
                        />
                    </div>
                </motion.div>

                {/* Academic Council Sheet 2 */}
                <motion.div
                    variants={fadeUp}
                    className="rounded-2xl border border-neutral-200 overflow-hidden shadow-sm bg-white"
                >
                    <div className="w-full overflow-hidden">
                        <iframe
                            src={ACADEMIC_COUNCIL_SHEET_2}
                            title="Academic Council - Sheet 2"
                            className="w-full border-0"
                            style={{
                                border: 'none',
                                display: 'block',
                                height: 'clamp(280px, 45vh, 600px)',
                            }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default AcademicCouncilPage;
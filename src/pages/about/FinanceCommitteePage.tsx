import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';

const FINANCE_COMMITTEE_SHEET_1 =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSbYJW5HW-VyLUW_Yh9lr4DAcO6Nw2DxyHeeezJSwafyvFq3-mqnWKe8kP6KsFU0TGBYfU_9ex5N1gN/pubhtml?widget=true&chrome=false&headers=false';

const FINANCE_COMMITTEE_SHEET_2 =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSEWpHvWy6VCXYRp2HQV9hof1tEXUimCIiPOxyvVvDPGNgWiArINxoVbevMBsh_K8Z9lb1GBt4jzEth/pubhtml?widget=true&chrome=false&headers=false';

const FinanceCommitteePage: React.FC = () => {
    const [openSheet, setOpenSheet] = useState<number | null>(0);

    const toggleSheet = (sheet: number) => {
        setOpenSheet((current) => (current === sheet ? null : sheet));
    };

    return (
        <AboutUsLayout title="Finance Committee">
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
                    Finance Committee
                </motion.h2>

                {/* Dropdown Sections */}
                <motion.div
                    variants={fadeUp}
                    className="space-y-2"
                >
                    {/* Finance Committee Members */}
                    <div className="overflow-hidden rounded-xl">
                        <button
                            type="button"
                            onClick={() => toggleSheet(0)}
                            aria-expanded={openSheet === 0}
                            className="w-full flex items-center justify-between px-5 py-5 bg-[#0A0903] text-[#FF5422] hover:bg-[#15130D] transition-colors duration-200"
                        >
                            <span className="text-base font-medium">
                                Finance Committee Members
                            </span>

                            <ChevronDown
                                className={`w-5 h-5 text-[#FF5422] transition-transform duration-300 ${openSheet === 0 ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        <AnimatePresence initial={false}>
                            {openSheet === 0 && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    }}
                                    className="overflow-hidden bg-white"
                                >
                                    <div className="border border-t-0 border-neutral-200">
                                        <iframe
                                            src={FINANCE_COMMITTEE_SHEET_1}
                                            title="Finance Committee Members"
                                            width="100%"
                                            height="600"
                                            className="w-full border-0"
                                            style={{
                                                border: 'none',
                                                display: 'block',
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Additional Details */}
                    <div className="overflow-hidden rounded-xl">
                        <button
                            type="button"
                            onClick={() => toggleSheet(1)}
                            aria-expanded={openSheet === 1}
                            className="w-full flex items-center justify-between px-5 py-5 bg-[#0A0903] text-[#FF5422] hover:bg-[#15130D] transition-colors duration-200"
                        >
                            <span className="text-base font-medium">
                                Finance Committee — Additional Details
                            </span>

                            <ChevronDown
                                className={`w-5 h-5 text-[#FF5422] transition-transform duration-300 ${openSheet === 1 ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        <AnimatePresence initial={false}>
                            {openSheet === 1 && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    }}
                                    className="overflow-hidden bg-white"
                                >
                                    <div className="border border-t-0 border-neutral-200">
                                        <iframe
                                            src={FINANCE_COMMITTEE_SHEET_2}
                                            title="Finance Committee Additional Details"
                                            width="100%"
                                            height="600"
                                            className="w-full border-0"
                                            style={{
                                                border: 'none',
                                                display: 'block',
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default FinanceCommitteePage;
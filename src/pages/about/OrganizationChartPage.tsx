import React from 'react';
import { motion } from 'framer-motion';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';

interface ChartBoxProps {
    children: React.ReactNode;
    className?: string;
}

const ChartBox: React.FC<ChartBoxProps> = ({
    children,
    className = '',
}) => {
    return (
        <div
            className={`
                px-2 py-1.5 sm:px-3 sm:py-2
                bg-[#FF5422]
                border border-[#0A0903]
                rounded-md
                text-[#0A0903]
                text-[10px] sm:text-xs
                font-medium
                leading-tight
                shadow-[2px_2px_0px_#0A0903]
                ${className}
            `}
        >
            {children}
        </div>
    );
};

const VerticalArrow: React.FC = () => (
    <div className="flex flex-col items-center h-5 sm:h-6">
        <div className="w-px h-3 sm:h-4 bg-[#0A0903]" />
        <div
            className="
                w-0
                h-0
                border-l-[3px] sm:border-l-[4px]
                border-r-[3px] sm:border-r-[4px]
                border-t-[5px] sm:border-t-[6px]
                border-l-transparent
                border-r-transparent
                border-t-[#0A0903]
            "
        />
    </div>
);

const OrganizationChartPage: React.FC = () => {
    return (
        <AboutUsLayout title="Organization Chart">
            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="space-y-5 sm:space-y-6"
            >
                {/* Heading */}
                <motion.div variants={fadeUp}>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A0903] flex items-center gap-3">
                        <span className="w-1 h-6 sm:h-8 rounded-full bg-[#FF5422] inline-block" />
                        Organization Chart
                    </h2>

                    <p className="text-neutral-500 mt-2 sm:mt-3 leading-relaxed text-left sm:text-justify text-sm sm:text-base">
                        SRIT&apos;s contribution to the world of academia,
                        especially technical academia has been recognised by
                        the nation&apos;s finest empowering authorities.
                    </p>
                </motion.div>

                {/* Organization Chart */}
                <motion.div
                    variants={fadeUp}
                    className="w-full overflow-x-auto custom-scrollbar"
                >
                    <div className="min-w-[600px] sm:min-w-0 w-full max-w-5xl mx-auto">

                        {/* Top Level */}
                        <div className="flex flex-col items-center">

                            <ChartBox className="w-28 sm:w-32 font-semibold">
                                Governing Body
                            </ChartBox>

                            <VerticalArrow />

                            <ChartBox className="w-28 sm:w-32 font-semibold">
                                Academic Council
                            </ChartBox>

                            <VerticalArrow />

                            <ChartBox className="w-24 sm:w-28 font-bold">
                                PRINCIPAL
                            </ChartBox>

                            {/* Main Connector */}
                            <div className="relative w-full h-8 sm:h-10">
                                <div className="absolute top-4 sm:top-5 left-[5%] right-[5%] h-px bg-[#0A0903]" />

                                <div className="absolute top-4 sm:top-5 left-[5%] h-4 sm:h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[18px] sm:top-[23px] left-[5%] w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-4 sm:top-5 left-[25%] h-4 sm:h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[18px] sm:top-[23px] left-[25%] w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-4 sm:top-5 left-[45%] h-4 sm:h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[18px] sm:top-[23px] left-[45%] w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-4 sm:top-5 left-[60%] h-4 sm:h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[18px] sm:top-[23px] left-[60%] w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-4 sm:top-5 left-[76%] h-4 sm:h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[18px] sm:top-[23px] left-[76%] w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-4 sm:top-5 left-[95%] h-4 sm:h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[18px] sm:top-[23px] left-[95%] w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />
                            </div>

                            {/* Main Sections */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 sm:gap-2 md:gap-3 w-full items-start">

                                {/* Departments */}
                                <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                                    <ChartBox className="w-full text-center">
                                        Head of CE
                                    </ChartBox>

                                    <ChartBox className="w-full text-center">
                                        Head of EEE
                                    </ChartBox>

                                    <ChartBox className="w-full text-center">
                                        Head of ME
                                    </ChartBox>

                                    <ChartBox className="w-full text-center">
                                        Head of ECE
                                    </ChartBox>

                                    <ChartBox className="w-full text-center">
                                        Head of CSE
                                    </ChartBox>

                                    <ChartBox className="w-full text-center">
                                        Head of H &amp; S
                                    </ChartBox>
                                </div>

                                {/* Examination */}
                                <div className="flex flex-col items-center">
                                    <ChartBox className="w-full text-center">
                                        Controller of Exams
                                    </ChartBox>

                                    <VerticalArrow />

                                    <ChartBox className="w-full text-center">
                                        Deputy Controller
                                    </ChartBox>

                                    <VerticalArrow />

                                    <ChartBox className="w-full text-center">
                                        Additional Controllers
                                    </ChartBox>

                                    <VerticalArrow />

                                    <ChartBox className="w-full text-center">
                                        Examination Section
                                    </ChartBox>
                                </div>

                                {/* Training */}
                                <div className="flex flex-col items-center gap-2 sm:gap-3">
                                    <ChartBox className="w-full text-center">
                                        Training &amp; Placement
                                    </ChartBox>

                                    <ChartBox className="w-full text-center">
                                        Accounts Section
                                    </ChartBox>
                                </div>

                                {/* Academic */}
                                <div className="flex flex-col items-center gap-2 sm:gap-3">
                                    <ChartBox className="w-full text-center">
                                        Academic Section
                                    </ChartBox>

                                    <ChartBox className="w-full text-center">
                                        Physical Director
                                    </ChartBox>

                                    <ChartBox className="w-full text-center">
                                        Committees &amp; Student Support
                                    </ChartBox>

                                    <div className="flex gap-1.5 sm:gap-2 w-full">
                                        <ChartBox className="flex-1 text-center">
                                            NSS
                                        </ChartBox>

                                        <ChartBox className="flex-1 text-center">
                                            NCC
                                        </ChartBox>
                                    </div>
                                </div>

                                {/* IQAC */}
                                <div className="flex flex-col items-center gap-2 sm:gap-3">
                                    <ChartBox className="w-full text-center">
                                        IQAC
                                    </ChartBox>

                                    <ChartBox className="w-full text-center">
                                        Boys &amp; Girls Hostel
                                    </ChartBox>
                                </div>

                                {/* Library */}
                                <div className="flex flex-col items-center">
                                    <ChartBox className="w-full text-center">
                                        Library
                                    </ChartBox>
                                </div>
                            </div>

                            {/* Staff */}
                            <div className="relative w-full mt-6 sm:mt-10 pt-5 sm:pt-7">

                                <div className="absolute top-0 left-[25%] right-[25%] h-px bg-[#0A0903]" />

                                <div className="absolute top-0 left-[35%] h-5 sm:h-7 w-px bg-[#0A0903]" />
                                <div className="absolute top-[20px] sm:top-[25px] left-[35%] w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-0 left-[50%] h-5 sm:h-7 w-px bg-[#0A0903]" />
                                <div className="absolute top-[20px] sm:top-[25px] left-[50%] w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-0 left-[65%] h-5 sm:h-7 w-px bg-[#0A0903]" />
                                <div className="absolute top-[20px] sm:top-[25px] left-[65%] w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="flex justify-center gap-1.5 sm:gap-3 w-full">
                                    <ChartBox className="flex-1 text-center min-w-0">
                                        Teaching Staff
                                    </ChartBox>

                                    <ChartBox className="flex-1 text-center min-w-0">
                                        Technical Staff
                                    </ChartBox>

                                    <ChartBox className="flex-1 text-center min-w-0">
                                        Supporting Staff
                                    </ChartBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default OrganizationChartPage;

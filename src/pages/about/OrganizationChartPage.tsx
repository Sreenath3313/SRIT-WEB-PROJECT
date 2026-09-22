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
                px-3 py-2
                bg-[#FF5422]
                border border-[#0A0903]
                rounded-md
                text-[#0A0903]
                text-center
                text-[11px]
                sm:text-xs
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
    <div className="flex flex-col items-center h-6">
        <div className="w-px h-4 bg-[#0A0903]" />
        <div
            className="
                w-0
                h-0
                border-l-[4px]
                border-r-[4px]
                border-t-[6px]
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
                className="space-y-6"
            >
                {/* Heading */}
                <motion.div variants={fadeUp}>
                    <h2 className="text-3xl font-serif font-bold text-[#0A0903] flex items-center gap-3">
                        <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                        Organization Chart
                    </h2>

                    <p className="text-neutral-500 mt-3 leading-relaxed text-left sm:text-justify">
                        SRIT&apos;s contribution to the world of academia,
                        especially technical academia has been recognised by
                        the nation&apos;s finest empowering authorities.
                    </p>
                </motion.div>

                {/* Organization Chart */}
                <motion.div
                    variants={fadeUp}
                    className="w-full flex justify-center"
                >
                    <div className="w-full max-w-5xl">

                        {/* Top Level */}
                        <div className="flex flex-col items-center">

                            <ChartBox className="w-32 sm:w-36 font-semibold">
                                Governing Body
                            </ChartBox>

                            <VerticalArrow />

                            <ChartBox className="w-32 sm:w-36 font-semibold">
                                Academic Council
                            </ChartBox>

                            <VerticalArrow />

                            <ChartBox className="w-28 sm:w-32 font-bold">
                                PRINCIPAL
                            </ChartBox>

                            {/* Main Connector */}
                            <div className="relative w-full h-10">
                                <div className="absolute top-5 left-[5%] right-[5%] h-px bg-[#0A0903]" />

                                <div className="absolute top-5 left-[5%] h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[23px] left-[5%] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-5 left-[25%] h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[23px] left-[25%] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-5 left-[45%] h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[23px] left-[45%] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-5 left-[60%] h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[23px] left-[60%] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-5 left-[76%] h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[23px] left-[76%] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-5 left-[95%] h-5 w-px bg-[#0A0903]" />
                                <div className="absolute top-[23px] left-[95%] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />
                            </div>

                            {/* Main Sections */}
                            <div className="grid grid-cols-6 gap-2 sm:gap-3 w-full items-start">

                                {/* Departments */}
                                <div className="flex flex-col items-center gap-2">
                                    <ChartBox className="w-full">
                                        Head of CE
                                    </ChartBox>

                                    <ChartBox className="w-full">
                                        Head of EEE
                                    </ChartBox>

                                    <ChartBox className="w-full">
                                        Head of ME
                                    </ChartBox>

                                    <ChartBox className="w-full">
                                        Head of ECE
                                    </ChartBox>

                                    <ChartBox className="w-full">
                                        Head of CSE
                                    </ChartBox>

                                    <ChartBox className="w-full">
                                        Head of H &amp; S
                                    </ChartBox>
                                </div>

                                {/* Examination */}
                                <div className="flex flex-col items-center">
                                    <ChartBox className="w-full">
                                        Controller of Exams
                                    </ChartBox>

                                    <VerticalArrow />

                                    <ChartBox className="w-full">
                                        Deputy Controller
                                    </ChartBox>

                                    <VerticalArrow />

                                    <ChartBox className="w-full">
                                        Additional Controllers
                                    </ChartBox>

                                    <VerticalArrow />

                                    <ChartBox className="w-full">
                                        Examination Section
                                    </ChartBox>
                                </div>

                                {/* Training */}
                                <div className="flex flex-col items-center gap-3">
                                    <ChartBox className="w-full">
                                        Training &amp; Placement
                                    </ChartBox>

                                    <ChartBox className="w-full">
                                        Accounts Section
                                    </ChartBox>
                                </div>

                                {/* Academic */}
                                <div className="flex flex-col items-center gap-3">
                                    <ChartBox className="w-full">
                                        Academic Section
                                    </ChartBox>

                                    <ChartBox className="w-full">
                                        Physical Director
                                    </ChartBox>

                                    <ChartBox className="w-full">
                                        Committees &amp; Student Support
                                    </ChartBox>

                                    <div className="flex gap-2 w-full">
                                        <ChartBox className="flex-1">
                                            NSS
                                        </ChartBox>

                                        <ChartBox className="flex-1">
                                            NCC
                                        </ChartBox>
                                    </div>
                                </div>

                                {/* IQAC */}
                                <div className="flex flex-col items-center gap-3">
                                    <ChartBox className="w-full">
                                        IQAC
                                    </ChartBox>

                                    <ChartBox className="w-full">
                                        Boys &amp; Girls Hostel
                                    </ChartBox>
                                </div>

                                {/* Library */}
                                <div className="flex flex-col items-center">
                                    <ChartBox className="w-full">
                                        Library
                                    </ChartBox>
                                </div>
                            </div>

                            {/* Staff */}
                            <div className="relative w-full mt-10 pt-7">

                                <div className="absolute top-0 left-[25%] right-[25%] h-px bg-[#0A0903]" />

                                <div className="absolute top-0 left-[35%] h-7 w-px bg-[#0A0903]" />
                                <div className="absolute top-[25px] left-[35%] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-0 left-[50%] h-7 w-px bg-[#0A0903]" />
                                <div className="absolute top-[25px] left-[50%] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="absolute top-0 left-[65%] h-7 w-px bg-[#0A0903]" />
                                <div className="absolute top-[25px] left-[65%] w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0A0903]" />

                                <div className="flex justify-center gap-2 sm:gap-4">
                                    <ChartBox className="w-28 sm:w-32">
                                        Teaching Staff
                                    </ChartBox>

                                    <ChartBox className="w-28 sm:w-32">
                                        Technical Staff
                                    </ChartBox>

                                    <ChartBox className="w-28 sm:w-32">
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
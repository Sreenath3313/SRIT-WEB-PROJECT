import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger } from '../../features/about/animations';
import IframeWithLoader from '../../components/common/IframeWithLoader';

const AFFILIATIONS = [
    {
        title: 'AICTE',
        description: 'All India Council for Technical Education',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSmvh0HxCgaR8erghjyDiDnyII47CAt593DPl4XUDShtehS5hm8fyTzCjjVSDZuQByq8Rh-rtnDR8Ae/pubhtml?chrome=false&headers=false&widget=true',
    },
    {
        title: 'UGC',
        description: 'University Grants Commission',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRS80BJvVqCEvylLjWAjTsY5PrTCiU4R2PcldFAdHyy7hTQ5AhCMPmrs6PTd4OILavHD_eiKxcdPQqu/pubhtml?chrome=false&headers=false&widget=true',
    },
    {
        title: 'APSCHE',
        description: 'Andhra Pradesh State Council of Higher Education',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhPW8dxfFPC9sB3ViV1zqY42AdORY3AXJN0sdMhYU6BMT1ceT4tjCCZRPLi4t2Be8fFZ5Js7phZ5An/pubhtml?chrome=false&headers=false&widget=true',
    },
    {
        title: 'JNTUA',
        description: 'Jawaharlal Nehru Technological University Anantapur',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTgG2pdankMQCyKFhDsI1xlycpfLz5XCJaFqXx8fPG-4VUvFix57rE8GjXN03PfN9o0SjmiV9u2qMjs/pubhtml?chrome=false&headers=false&widget=true',
    },
    {
        title: 'NAAC',
        description: 'National Assessment and Accreditation Council',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQstfrrkTui60Uwp6rFSCpn4g68PQILdxZMe5O5sUVreqzk_ROdsltL5O_k8lOMD0eMqXweEdEybcN1/pubhtml?chrome=false&headers=false&widget=true',
    },
    {
        title: 'NBA',
        description: 'National Board of Accreditation',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTvXqqaiZGbo4BpI_RiQNuPBLFZHhP7LJDLdraOoBKw3Nl-spkrNmhAPoz1ebvEpU9ueAj7o8vaR3bL/pubhtml?chrome=false&headers=false&widget=true',
    },
    {
        title: 'NIRF',
        description: 'National Institutional Ranking Framework',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vToyudr-WqobaM0Sffri-wbjhb1Q8idhaMjkuUW3ws0p8-j5FSRZbxWNK66Wlhfau5fIcPgD4DHjjaq/pubhtml?+chrome=false&headers=false&widget=true',
    },
    {
        title: 'AISHE',
        description: 'All India Survey on Higher Education',
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4edeZID82oVyCLZ_wmpVmD7EIrtzV_Fd67RViYNR-Xg5pmWKp0cDPYAsZAn8UhmSWvwfhhhO1rksY/pubhtml?chrome=false&headers=false&widget=true',
    },
];

const AffiliationsAccreditationsPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleDropdown = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <AboutUsLayout title="Affiliations & Accreditations">
            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="space-y-7"
            >
                {/* Page Heading */}
                <motion.div variants={fadeUp}>
                    <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                        <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                        Affiliations &amp; Accreditations
                    </h2>

                    <p className="text-neutral-500 mt-3 leading-relaxed text-left sm:text-justify">
                        SRIT is recognized by top regulatory bodies in India,
                        ensuring the highest standards of technical education
                        and infrastructure.
                    </p>
                </motion.div>

                {/* Affiliation Dropdowns */}
                <motion.div
                    variants={stagger}
                    className="space-y-1.5"
                >
                    {AFFILIATIONS.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                className="overflow-hidden rounded-lg"
                            >
                                {/* Compact Dropdown Header */}
                                <button
                                    type="button"
                                    onClick={() => toggleDropdown(index)}
                                    aria-expanded={isOpen}
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        gap-3
                                        px-4
                                        py-2.5
                                        bg-[#0A0903]
                                        text-[#FF5422]
                                        hover:bg-[#15130D]
                                        transition-colors
                                        duration-200
                                    "
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span
                                            className="
                                                w-0.5
                                                h-5
                                                rounded-full
                                                bg-[#FF5422]
                                                shrink-0
                                            "
                                        />

                                        <div className="text-left min-w-0">
                                            <h3 className="text-sm font-semibold leading-tight">
                                                {item.title}
                                            </h3>

                                            <p className="text-[10px] text-neutral-400 mt-0.5 truncate leading-tight">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <ChevronDown
                                        className={`
                                            w-4
                                            h-4
                                            text-[#FF5422]
                                            shrink-0
                                            transition-transform
                                            duration-300
                                            ${isOpen ? 'rotate-180' : ''}
                                        `}
                                    />
                                </button>

                                {/* Google Sheet Content */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: 'easeInOut',
                                            }}
                                            className="overflow-hidden bg-white"
                                        >
                                            <div className="border border-t-0 border-neutral-200">
                                                <IframeWithLoader
                                                    src={item.url}
                                                    title={`${item.title} - Affiliations and Accreditations`}
                                                    style={{ height: 'clamp(280px, 45vh, 600px)' }}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Autonomous Status */}
                <motion.div
                    variants={fadeUp}
                    className="
                        relative
                        bg-gradient-to-br
                        from-[#0A0903]
                        to-neutral-800
                        rounded-2xl
                        p-8
                        overflow-hidden
                        shadow-lg
                    "
                >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF5422]/10 rounded-full blur-2xl" />

                    <div className="relative z-10">
                        <h3 className="text-2xl font-serif font-bold text-white mb-3">
                            Autonomous Status
                        </h3>

                        <p className="text-neutral-300 leading-relaxed text-left sm:text-justify">
                            SRIT has been conferred with Autonomous Status by
                            the University Grants Commission (UGC) and JNTUA,
                            empowering the institution to design its own
                            curriculum tailored to industry needs and conduct
                            its own examinations.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </AboutUsLayout>
    );
};

export default AffiliationsAccreditationsPage;
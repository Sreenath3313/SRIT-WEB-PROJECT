import React, { useState } from 'react';
import {
    Cpu, Monitor, Shield, Award, ChevronRight, ChevronLeft,
    ChevronUp, ChevronDown, Zap
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';

export const LaboratoriesPage: React.FC = () => {
    const [isLabsTableOpen, setIsLabsTableOpen] = useState(false);
    const [isLabsViewAll, setIsLabsViewAll] = useState(false);
    const [labsGalleryIndex, setLabsGalleryIndex] = useState(0);
    const [isCivilLabsOpen, setIsCivilLabsOpen] = useState(false);
    const [isCseLabsOpen, setIsCseLabsOpen] = useState(false);

    return (
        <CampusLifeLayout activeSectionId="labs">
            <>
                                {/* === 1. KEY STATISTICS CARDS (4 Cards with Warm Orange Shades & Hover Animations) === */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                                    {[
                                        {
                                            value: '8 Labs',
                                            label: 'Computing Labs',
                                            desc: 'C/DS, B-Block 1-3, ML, APSSDC, Research & Project',
                                            icon: Cpu,
                                        },
                                        {
                                            value: '16 GB RAM',
                                            label: 'High-Spec Nodes',
                                            desc: 'Intel i5 Acer TMP systems for AI & ML',
                                            icon: Zap,
                                        },
                                        {
                                            value: 'Full Stack',
                                            label: 'Software Suites',
                                            desc: 'TensorFlow, Keras, Hadoop, Oracle, MongoDB',
                                            icon: Monitor,
                                        },
                                        {
                                            value: '100% Backup',
                                            label: 'Power Continuity',
                                            desc: 'Dedicated NUMERIC industrial UPS protection',
                                            icon: Shield,
                                        },
                                    ].map((stat, idx) => {
                                        const StatIcon = stat.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="relative group rounded-xl border border-orange-200/90 bg-gradient-to-br from-white via-orange-50/40 to-orange-100/30 p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-[#FF5422] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                            >
                                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5422] via-orange-400 to-[#FF5422] opacity-70 group-hover:opacity-100 transition-opacity" />
                                                <div className="flex items-center gap-3.5">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF5422] to-[#FF7A45] text-white shadow-md shadow-orange-500/25 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                                        <StatIcon size={22} />
                                                    </div>
                                                    <div>
                                                        <div className="font-serif text-2xl sm:text-3xl font-black text-[#FF5422] group-hover:text-[#e04515] leading-none transition-colors">
                                                            {stat.value}
                                                        </div>
                                                        <div className="mt-1 text-xs sm:text-sm font-bold text-neutral-900">
                                                            {stat.label}
                                                        </div>
                                                        <div className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                                                            {stat.desc}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* === 2. ABOUT ADVANCED LABORATORIES (Side-by-Side: Text Left + Explore Button, Image Right) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        <div className="lg:col-span-7 space-y-3.5">
                                            <div className="flex items-center gap-2.5 pb-1">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                    About <span className="text-[#FF5422]">Advanced Engineering Laboratories</span>
                                                </h2>
                                            </div>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Laboratories at <strong className="text-[#FF5422] font-bold">Srinivasa Ramanujan Institute of Technology (SRIT)</strong> bridge academic theory with real-world engineering applications. The institution houses <strong className="text-[#FF5422] font-bold">8 specialized, fully computerized state-of-the-art laboratories</strong> designed for high-performance computing, artificial intelligence, research, and skill training.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The computing ecosystem includes the <span className="text-[#FF5422] font-semibold">C &amp; Data Structures Lab</span>, three <span className="text-[#FF5422] font-semibold">B-Block Computer Laboratories</span>, a dedicated <span className="text-[#FF5422] font-semibold">Research Lab</span>, a <span className="text-[#FF5422] font-semibold">Capstone Project Lab</span>, the <span className="text-[#FF5422] font-bold">APSSDC CM’s Skill Excellence Center</span>, and a dedicated <span className="text-[#FF5422] font-bold">Machine Learning Laboratory</span>.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                All facilities are powered by high-specification multi-core workstations with <strong className="text-[#FF5422] font-semibold">16GB RAM Intel Core i5 systems</strong>, backed by industry-standard suites (<span className="text-[#FF5422] font-semibold">TensorFlow, Keras, Scikit-learn, Hadoop, Oracle 11g, MongoDB, Selenium, and NS3</span>), gigabit networking, and continuous industrial <span className="text-[#FF5422] font-semibold">NUMERIC UPS power backup</span>.
                                            </p>

                                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsLabsTableOpen(!isLabsTableOpen)}
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5422] to-[#FF7A45] hover:from-[#e04515] hover:to-[#FF5422] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer"
                                                >
                                                    <span>{isLabsTableOpen ? 'Hide Lab Specs Table' : 'Explore Lab Specifications & Configurations'}</span>
                                                    <ChevronRight size={16} />
                                                </button>

                                                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600">
                                                    <span className="px-2.5 py-1 rounded-md bg-orange-50 text-[#FF5422] border border-orange-200">
                                                        8 Computing Labs
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                        16 GB RAM i5 Nodes
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                        APSSDC CM's Skill Center
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-5 self-stretch flex flex-col min-h-[280px]">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-orange-50/20 group relative flex-1 w-full min-h-[280px]">
                                                <img
                                                    src="/ComputerLab.JPG"
                                                    alt="SRIT Advanced Computing & Machine Learning Laboratories"
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 3. KEY HIGHLIGHTS & SPECIALIZED INFRASTRUCTURE (6 Cards in 3 Columns × 2 Rows) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                            Key Highlights &amp; Specialized Lab Infrastructure
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            {
                                                title: 'Machine Learning & AI Lab',
                                                desc: 'Equipped with 16GB RAM Intel i5 systems loaded with TensorFlow, Keras, Octave, and Scikit-learn for deep learning and neural networks.',
                                                icon: Cpu,
                                            },
                                            {
                                                title: 'APSSDC CM’s Skill Excellence Center',
                                                desc: 'State-sponsored skill development lab featuring Acer TMP 249 Intel Core i5 laptops for mobile app and Android development.',
                                                icon: Award,
                                            },
                                            {
                                                title: 'Specialized Research & Project Labs',
                                                desc: 'Dedicated environments supporting Python, JDK, Ubuntu, NS3 network simulator, Android Studio, and R programming.',
                                                icon: Cpu,
                                            },
                                            {
                                                title: 'Enterprise Database & Big Data Stack',
                                                desc: 'Configured with Oracle 11g Express, MongoDB, Hadoop (HDFS, PIG, HIVE), Tomcat Server, and WEKA for data engineering.',
                                                icon: Monitor,
                                            },
                                            {
                                                title: 'Software Testing & Cyber Security Hub',
                                                desc: 'Preloaded with Selenium, TestLink, Wireshark, OpenSSL, GNU PGP, NMAP, and Dev C/C++ for rigorous quality analysis.',
                                                icon: Shield,
                                            },
                                            {
                                                title: 'Industrial Power Backup & Gigabit LAN',
                                                desc: 'High-speed gigabit Ethernet and heavy-duty NUMERIC industrial UPS units ensuring uninterrupted experiment execution.',
                                                icon: Zap,
                                            },
                                        ].map((item, idx) => {
                                            const IconComp = item.icon;
                                            return (
                                                <div
                                                    key={idx}
                                                    className="rounded-xl border border-orange-100/90 bg-gradient-to-br from-white via-orange-50/20 to-orange-50/40 p-4 hover:border-orange-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-9 h-9 rounded-lg bg-[#FF5422]/10 text-[#FF5422] flex items-center justify-center shrink-0 group-hover:bg-[#FF5422] group-hover:text-white transition-colors duration-200">
                                                            <IconComp size={18} />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <h3 className="font-bold text-neutral-900 text-xs sm:text-sm group-hover:text-[#FF5422] transition-colors">
                                                                {item.title}
                                                            </h3>
                                                            <p className="text-[11.5px] text-neutral-600 leading-relaxed">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* === 4. COMPUTING LABS BREAKDOWN TABLE (Collapsible) === */}
                                {isLabsTableOpen && (
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm">
                                        <div className="bg-gradient-to-r from-[#111827] via-[#1c1412] to-[#2b1610] px-5 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-white border-b-2 border-[#FF5422]">
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422] shadow-[0_0_8px_#FF5422]" />
                                                <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-tight">
                                                    CSE Department Laboratories &amp; Computing Specifications (labs-1)
                                                </h3>
                                            </div>
                                            <span className="text-xs font-bold text-orange-300 bg-[#FF5422]/20 px-3 py-1 rounded-full border border-[#FF5422]/40">
                                                8 Specialized Labs
                                            </span>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-neutral-100 text-neutral-900 border-b border-neutral-200">
                                                        <th className="px-4 py-3.5 font-bold">Laboratory Name</th>
                                                        <th className="px-4 py-3.5 font-bold">Hardware Configuration</th>
                                                        <th className="px-4 py-3.5 font-bold">Installed Software &amp; Frameworks</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-orange-100/80 text-neutral-700">
                                                    {[
                                                        ['1. C & Data Structures Lab', 'HP Core 2 DUO Processor, 2 GB RAM, 160 GB HDD, 15.6" Monitor', 'GCC, Dev C/C++, Open Office, Ubuntu'],
                                                        ['2. B-Block Computer Lab-1', 'HP-3090 Pro / Dual Core 3.0, 6 GB RAM, 320 GB HDD, 18.5" LCD Monitor', 'Oracle 11g Express, JDK, GCC, DIA Tool, Dev C++, Xrunner, WAMP, Tomcat, WEKA, Wireshark, OpenSSL, GNU PGP, NMAP, Ethereal, J2ME, Android ADT, R, MongoDB, PIG, HIVE Hadoop, TestLink, Selenium, Ubuntu'],
                                                        ['3. B-Block Computer Lab-2', 'HP-3090 Pro / Dual Core 3.0, 6 GB RAM, 320 GB HDD, 18.5" LCD Monitor', 'JDK, GCC, DIA Tool, Dev C/C++, Xrunner, WAMP, Tomcat Server, WEKA Tool, Wireshark, Open SSL, GNU PGP, NMAP, Ethereal, J2ME Wireless Toolkit, Android ADT Bundle, Ubuntu'],
                                                        ['4. B-Block Computer Lab-3', 'HP-3090 Pro / Dual Core 3.0, 6 GB RAM, 320 GB HDD, 18.5" LCD Monitor', 'JDK, GCC, DIA Tool, Dev C/C++, Xrunner, WAMP, Tomcat Server, WEKA Tool, Wireshark, Open SSL, GNU PGP, NMAP, Ethereal, J2ME Toolkit, Android ADT Bundle, Ubuntu'],
                                                        ['5. Research Lab', 'Lenovo – Dual Core, 4 GB RAM, 320 GB HDD, 18.5" Monitor', 'Python, JDK, Ubuntu, NS3, Android Studio, R Programming, GNU Octave'],
                                                        ['6. Project Lab', 'Lenovo – Dual Core, 4 GB RAM, 320 GB HDD, 18.5" Monitor', 'Python, JDK, Ubuntu, NS3, Android Studio, R Programming, GNU Octave'],
                                                        ['7. APSSDC CM’s Skill Excellence Center', 'Acer TMP 249-G2-M Laptops, Intel Core i5, 16 GB RAM, 500 GB HDD, 14" Display', 'Android Studio, Java/Kotlin SDK, Cloud Toolchains'],
                                                        ['8. Machine Learning Lab', 'Acer TMP 249-G2-M Laptops, Intel Core i5, 16 GB RAM, 500 GB HDD, 14" Display', 'TensorFlow, Keras, Octave, Scikit-learn'],
                                                    ].map((row, ri) => (
                                                        <tr key={ri} className="hover:bg-orange-50/50 transition-colors odd:bg-white even:bg-orange-50/20">
                                                            <td className="px-4 py-3.5 font-bold text-neutral-900">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422]" />
                                                                    <span>{row[0]}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3.5 text-xs text-neutral-800 font-medium">
                                                                {row[1]}
                                                            </td>
                                                            <td className="px-4 py-3.5 text-xs text-neutral-600">
                                                                {row[2]}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {/* === 5. OFFICIAL DEPARTMENT ACCORDIONS (CIVIL & CSE) === */}
                                <div className="space-y-4">
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            type="button"
                                            onClick={() => setIsCivilLabsOpen(!isCivilLabsOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-[#111827] hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isCivilLabsOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    CIVIL Department Laboratories
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isCivilLabsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isCivilLabsOpen && (
                                            <div className="p-5 sm:p-6 bg-white space-y-3">
                                                <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70">
                                                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                                        Civil Engineering departmental laboratories including Surveying, Concrete Technology, Fluid Mechanics, and Environmental Engineering are housed in the Civil Block with specialized apparatus.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            type="button"
                                            onClick={() => setIsCseLabsOpen(!isCseLabsOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-[#111827] hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isCseLabsOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    CSE Department Laboratories &amp; Computing Specifications
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isCseLabsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isCseLabsOpen && (
                                            <div className="p-4 sm:p-6 bg-white space-y-3">
                                                <p className="text-xs text-neutral-600">
                                                    Complete breakdown of 8 high-performance computing labs, RAM configurations, system specs, and software environments is available in the specifications table above.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* === 6. PHOTO GALLERY === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                                        <div className="flex items-center gap-2.5">
                                            <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                            <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                Engineering Laboratories Gallery
                                            </h2>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsLabsViewAll(!isLabsViewAll)}
                                            className="px-3.5 py-1 rounded-full text-xs font-bold text-[#FF5422] bg-orange-50 border border-orange-200 hover:bg-[#FF5422] hover:text-white transition-all cursor-pointer"
                                        >
                                            {isLabsViewAll ? 'Show Carousel' : 'View All 6 Photos'}
                                        </button>
                                    </div>

                                    {isLabsViewAll ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { url: '/ComputerLab.JPG', caption: 'SRIT Advanced Computing & Machine Learning Center' },
                                                { url: '/cse_lab.png', caption: 'High-Performance Computer Science Laboratory' },
                                                { url: '/cad_lab.png', caption: 'CAD & Computational Simulation Hub' },
                                                { url: '/civ_lab.png', caption: 'Civil Engineering Materials & Surveying Lab' },
                                                { url: '/ece_lab.png', caption: 'ECE Digital Signal Processing & IoT Lab' },
                                                { url: '/eee_lab.png', caption: 'Electrical Machines & Simulation Center' },
                                            ].map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="group rounded-xl overflow-hidden border border-neutral-200/90 bg-orange-50/20 shadow-sm hover:shadow-md hover:border-[#FF5422]/60 transition-all duration-300"
                                                >
                                                    <div className="relative aspect-[16/11] w-full overflow-hidden">
                                                        <img
                                                            src={img.url}
                                                            alt={img.caption}
                                                            loading="lazy"
                                                            decoding="async"
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="relative px-2 py-1">
                                            <button
                                                type="button"
                                                onClick={() => setLabsGalleryIndex((prev) => (prev <= 0 ? 3 : prev - 1))}
                                                className="absolute -left-2.5 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#FF5422] hover:border-[#FF5422] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {[
                                                    { url: '/ComputerLab.JPG', caption: 'SRIT Advanced Computing & Machine Learning Center' },
                                                    { url: '/cse_lab.png', caption: 'High-Performance Computer Science Laboratory' },
                                                    { url: '/cad_lab.png', caption: 'CAD & Computational Simulation Hub' },
                                                    { url: '/civ_lab.png', caption: 'Civil Engineering Materials & Surveying Lab' },
                                                    { url: '/ece_lab.png', caption: 'ECE Digital Signal Processing & IoT Lab' },
                                                    { url: '/eee_lab.png', caption: 'Electrical Machines & Simulation Center' },
                                                ]
                                                    .slice(labsGalleryIndex, labsGalleryIndex + 3)
                                                    .map((img, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="group rounded-xl border-2 border-orange-200/90 overflow-hidden bg-orange-50/20 shadow-sm hover:shadow-lg hover:border-[#FF5422] transition-all duration-300 relative"
                                                        >
                                                            <div className="relative aspect-[16/11] w-full overflow-hidden">
                                                                <img
                                                                    src={img.url}
                                                                    alt={img.caption}
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                                    onError={(e) => {
                                                                        (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => setLabsGalleryIndex((prev) => (prev >= 3 ? 0 : prev + 1))}
                                                className="absolute -right-2.5 sm:-right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#FF5422] hover:border-[#FF5422] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                                                aria-label="Next image"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
        </CampusLifeLayout>
    );
};

export default LaboratoriesPage;

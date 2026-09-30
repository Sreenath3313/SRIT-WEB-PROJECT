import React, { useState } from 'react';
import {
    Briefcase, TrendingUp, Award, Users, ChevronRight, ChevronLeft,
    GraduationCap, Shield, Phone, ChevronUp, ChevronDown, Building2, Cpu
} from 'lucide-react';
import IframeWithLoader from '../../../components/common/IframeWithLoader';
import CampusLifeLayout from './CampusLifeLayout';

export const CampusDrivesPage: React.FC = () => {
    const [isDrivesTableOpen, setIsDrivesTableOpen] = useState(false);
    const [isDrivesAccordionOpen, setIsDrivesAccordionOpen] = useState(false);
    const [isDrivesViewAll, setIsDrivesViewAll] = useState(false);
    const [drivesGalleryIndex, setDrivesGalleryIndex] = useState(0);

    return (
        <CampusLifeLayout activeSectionId="campus-drives">
            <>
                                {/* === 1. KEY STATISTICS CARDS (4 Cards with Warm Orange Shades & Hover Animations) === */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                                    {[
                                        {
                                            value: '₹32 LPA',
                                            label: 'Highest CTC Package',
                                            desc: 'Top Product Tier Offer (Flipkart & Prime)',
                                            icon: Award,
                                        },
                                        {
                                            value: '370+',
                                            label: 'Placement Offers',
                                            desc: 'Across B.Tech Engineering Disciplines',
                                            icon: Briefcase,
                                        },
                                        {
                                            value: '70+',
                                            label: 'Visiting Recruiters',
                                            desc: 'Global MNCs & Core Industry Leaders',
                                            icon: Building2,
                                        },
                                        {
                                            value: '₹1.2L / mo',
                                            label: 'Highest Internship',
                                            desc: 'Pre-Placement Industrial Stipends',
                                            icon: TrendingUp,
                                        },
                                    ].map((stat, idx) => {
                                        const StatIcon = stat.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="relative group rounded-xl border border-orange-200/90 bg-gradient-to-br from-white via-orange-50/40 to-orange-100/30 p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-[#FF5422] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                            >
                                                {/* Top Animated Orange Glow Bar */}
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

                                {/* === 2. ABOUT CAMPUS DRIVES & ECOSYSTEM (Side-by-Side: Text Left + Explore Button, Image Right) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        {/* Left Column */}
                                        <div className="lg:col-span-7 space-y-3.5">
                                            <div className="flex items-center gap-2.5 pb-1">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                    About <span className="text-[#FF5422]">Campus Drives &amp; Training Ecosystem</span>
                                                </h2>
                                            </div>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The <strong className="text-[#FF5422] font-bold">Training &amp; Placement (T&amp;P) Cell</strong> at Srinivasa Ramanujan Institute of Technology acts as a pivotal interface connecting aspiring engineering students with <span className="text-[#FF5422] font-semibold">premier multinational corporations</span>, product engineering giants, and core manufacturing organizations.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                SRIT provides a structured <strong className="text-[#FF5422] font-semibold">360-degree Career Development program</strong> starting right from the second year of study. This includes rigorous <span className="text-[#FF5422] font-semibold">Campus Recruitment Training (CRT)</span> encompassing quantitative aptitude, logical reasoning, verbal communication, <span className="text-[#FF5422] font-semibold">full-stack programming bootcamps</span> (Data Structures, Algorithms, Cloud Computing, AI/ML), and corporate mock interview clinics.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Prominent global recruiters conducting regular on-campus and off-campus recruitment drives include <strong className="text-[#FF5422] font-bold">Tata Consultancy Services (78+ selects up to ₹9.08 LPA in TCS Prime)</strong>, Cognizant, Infosys, Tech Mahindra, Nokia, Virtusa, <strong className="text-[#FF5422] font-semibold">Contentstack (₹15 LPA)</strong>, DeltaX (₹7 LPA), SOTI (₹7.5 LPA), Autorabit (₹60k/mo), Enterpret (₹70k–1.2L/mo stipend), TVS Credit, Reliance Industries, Jindal Steel, and Asahi India Glass.
                                            </p>

                                            {/* Feature Badges & Action Button */}
                                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsDrivesTableOpen(!isDrivesTableOpen)}
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5422] to-[#FF7A45] hover:from-[#e04515] hover:to-[#FF5422] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer"
                                                >
                                                    <span>{isDrivesTableOpen ? 'Hide Placement Breakdown' : 'Explore Placement Records & Salary Bands'}</span>
                                                    <ChevronRight size={16} />
                                                </button>

                                                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600">
                                                    <span className="px-2.5 py-1 rounded-md bg-orange-50 text-[#FF5422] border border-orange-200">
                                                        TCS Prime Partner
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                        Multi-Tier CRT Training
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                        100% Placement Assistance
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column: SRIT Placement & Computing Facility Image Card */}
                                        <div className="lg:col-span-5 self-stretch flex flex-col min-h-[280px]">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-orange-50/20 group relative flex-1 w-full min-h-[280px]">
                                                <img
                                                    src="/ComputerLab.JPG"
                                                    alt="SRIT Campus Recruitment & Advanced Computing Center"
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 3. KEY HIGHLIGHTS & TRAINING PILLARS (6 Cards in 3 Columns × 2 Rows) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                            Key Placement &amp; Training Highlights
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            {
                                                title: 'Dedicated Campus Recruitment Training (CRT)',
                                                desc: 'Continuous quantitative aptitude, logical reasoning, verbal comprehension, and professional soft skills delivered by corporate industry mentors.',
                                                icon: Users,
                                            },
                                            {
                                                title: 'Full-Stack Coding & Technical Bootcamps',
                                                desc: 'Hands-on programming bootcamps covering Data Structures, Algorithms, Python, Java, Cloud Computing, and Artificial Intelligence.',
                                                icon: Cpu,
                                            },
                                            {
                                                title: 'Corporate Mock Drives & Interview Clinics',
                                                desc: 'Multi-stage mock technical rounds, HR simulation interviews, and personalized feedback sessions to build student confidence.',
                                                icon: Briefcase,
                                            },
                                            {
                                                title: 'Hackathons & National Coding Challenges',
                                                desc: 'Dedicated coaching and sponsorship for Smart India Hackathon (SIH), TCS CodeVita, Infosys HackWithInfy, and global open source challenges.',
                                                icon: Award,
                                            },
                                            {
                                                title: 'Pre-Placement Internships & Stipends',
                                                desc: 'High-value industry internships with stipends ranging from ₹25,000/mo up to ₹1,20,000/month with direct conversion to full-time career roles.',
                                                icon: TrendingUp,
                                            },
                                            {
                                                title: 'Multi-Disciplinary Core & Product Hiring',
                                                desc: 'Dedicated recruitment drives tailored for CSE, CSM, CAD, ECE, EEE, MEC, and CIV with leading manufacturing and IT firms.',
                                                icon: Building2,
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

                                {/* === 4. CAREER DEVELOPMENT PATHWAY & DRIVE METHODOLOGY (2-Column Schedule Box) === */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Left: 4-Year Structured CRT Pathway */}
                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <GraduationCap size={18} className="text-[#FF5422]" />
                                            <span>4-Year Structured Career Pathway</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Year 1 &amp; 2:</span>
                                                <span>Foundational English communication, quantitative reasoning, and basic C / Python programming.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Year 3 (S5-6):</span>
                                                <span>Advanced Data Structures, Algorithms, full-stack development, and national hackathon participation.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Year 4 (S7-8):</span>
                                                <span>On-campus recruitment drives, corporate mock technical clinics, and pre-placement paid internships.</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Drive Assessment & Eligibility Standards */}
                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <Shield size={18} className="text-[#FF5422]" />
                                            <span>Recruitment Assessment Infrastructure</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Testing Lab:</span>
                                                <span>300+ networked multimedia PCs in Central Computer Center for proctored online coding tests.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Interview Suites:</span>
                                                <span>Dedicated GD conference rooms and private video-conferencing cabins for corporate interview panels.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Offer Policy:</span>
                                                <span>Transparent recruitment guidelines enabling high achievers to secure Dream and Super Dream tier roles.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 5. 2024–2026 PLACEMENT PACKAGES & RECRUITER TIERS (Collapsible Table) === */}
                                {isDrivesTableOpen && (
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm">
                                        <div className="bg-gradient-to-r from-[#111827] via-[#1c1412] to-[#2b1610] px-5 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-white border-b-2 border-[#FF5422]">
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422] shadow-[0_0_8px_#FF5422]" />
                                                <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-tight">
                                                    SRIT Placement Salary Bands &amp; Recruiter Classification (2024–2026 Batches)
                                                </h3>
                                            </div>
                                            <span className="text-xs font-bold text-orange-300 bg-[#FF5422]/20 px-3 py-1 rounded-full border border-[#FF5422]/40">
                                                Official T&amp;P Record
                                            </span>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-neutral-100 text-neutral-900 border-b border-neutral-200">
                                                        <th className="px-4 py-3.5 font-bold">Placement Tier / Band</th>
                                                        <th className="px-4 py-3.5 font-bold">CTC / Stipend Range</th>
                                                        <th className="px-4 py-3.5 font-bold">Prominent Recruiting Partners</th>
                                                        <th className="px-4 py-3.5 font-bold">Eligible Disciplines</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-orange-100/80 text-neutral-700">
                                                    {[
                                                        ['Tier-1 Super Dream', '₹15.00 – 32.00 LPA', 'Flipkart, Contentstack, Walmart, Enterpret', 'CSE, CSM, CAD, ECE'],
                                                        ['Tier-2 Dream Offers', '₹7.00 – 14.99 LPA', 'TCS Prime, DeltaX, SOTI, Nokia, Virtusa', 'CSE, CSM, CAD, ECE, EEE'],
                                                        ['High-Quality IT Services', '₹4.00 – 6.99 LPA', 'TCS Digital, Cognizant, Infosys, Tech Mahindra', 'All B.Tech Branches'],
                                                        ['Core Industry Recruitment', '₹3.50 – 7.50 LPA', 'Reliance Industries, Jindal Steel, Asahi India Glass, TVS Credit', 'EEE, MEC, CIV'],
                                                        ['Pre-Placement Internships', '₹25,000 – ₹1,20,000 / mo', 'Enterpret, Autorabit, Contentstack, TCS', 'Final & Pre-Final Year Scholars'],
                                                    ].map((row, ri) => (
                                                        <tr key={ri} className="hover:bg-orange-50/50 transition-colors odd:bg-white even:bg-orange-50/20">
                                                            <td className="px-4 py-3.5 font-bold text-neutral-900">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422]" />
                                                                    <span>{row[0]}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3.5 font-bold text-[#FF5422] whitespace-nowrap">
                                                                {row[1]}
                                                            </td>
                                                            <td className="px-4 py-3.5 text-neutral-700">
                                                                {row[2]}
                                                            </td>
                                                            <td className="px-4 py-3.5 text-neutral-600 font-medium">
                                                                {row[3]}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="px-5 py-3 bg-orange-50/60 border-t border-orange-200/70 flex items-center justify-between text-xs text-neutral-600">
                                            <span>Comprehensive Placement Coverage across 100% Eligible Candidates</span>
                                            <span className="font-bold text-[#FF5422]">SRIT Training &amp; Placement Cell</span>
                                        </div>
                                    </div>
                                )}

                                {/* === 6. OFFICIAL SPREADSHEET ACCORDION (Interactive Embedded Google Spreadsheet) === */}
                                <div className="space-y-4">
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            type="button"
                                            onClick={() => setIsDrivesAccordionOpen(!isDrivesAccordionOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-[#111827] hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isDrivesAccordionOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Campus Drives (Official T&amp;P Complete Records)
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isDrivesAccordionOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isDrivesAccordionOpen && (
                                            <div className="p-3 sm:p-5 bg-white space-y-3">
                                                <div className="w-full h-[720px] sm:h-[820px] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                    <IframeWithLoader
                                                        title="SRIT Campus Drives Official Sheet"
                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSrEMEyriU1V7vBqzLIwvb9xstWfCC2VAhliaPpXSmvJI0-oF7-98Jerl9sRkidHy5DqIdtw3ZFSndF/pubhtml?widget=true&headers=false"
                                                        className="w-full h-full border-0"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* === 7. T&P CELL COORDINATION & CONTACT DIRECTORY === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-3">
                                    <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-900 flex items-center gap-2">
                                        <Phone size={16} className="text-[#FF5422]" />
                                        <span>Training &amp; Placement Coordination Cell</span>
                                    </h3>

                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {[
                                            { role: 'Head - Training & Placement', name: 'Dr. Placement Officer', phone: '+91-8554-255222', email: 'placements@srit.ac.in' },
                                            { role: 'Corporate Relations & CRT Coordinator', name: 'T&P Helpdesk', phone: '+91-9347053747', email: 'cr@srit.ac.in' },
                                        ].map((c, ci) => (
                                            <div
                                                key={ci}
                                                className="rounded-xl border border-orange-100 bg-orange-50/30 p-3.5 flex items-center justify-between"
                                            >
                                                <div>
                                                    <span className="text-[10px] font-bold text-[#FF5422] uppercase tracking-wider block">
                                                        {c.role}
                                                    </span>
                                                    <span className="text-xs sm:text-sm font-bold text-neutral-900">
                                                        {c.name}
                                                    </span>
                                                    {c.email && (
                                                        <span className="text-[11px] text-neutral-500 block mt-0.5">
                                                            {c.email}
                                                        </span>
                                                    )}
                                                </div>
                                                {c.phone && (
                                                    <a
                                                        href={`tel:${c.phone}`}
                                                        className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-neutral-200 hover:bg-[#FF5422] hover:text-white px-2.5 py-1 text-xs font-semibold text-neutral-800 transition shadow-2xs"
                                                    >
                                                        <Phone size={11} />
                                                        <span>{c.phone}</span>
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* === 8. PLACEMENT & RECRUITMENT PHOTO GALLERY (Slider & Modal) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                                        <div className="flex items-center gap-2.5">
                                            <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                            <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                Campus Recruitment &amp; Placement Gallery
                                            </h2>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsDrivesViewAll(!isDrivesViewAll)}
                                            className="px-3.5 py-1 rounded-full text-xs font-bold text-[#FF5422] bg-orange-50 border border-orange-200 hover:bg-[#FF5422] hover:text-white transition-all cursor-pointer"
                                        >
                                            {isDrivesViewAll ? 'Show Carousel' : 'View All 6 Photos'}
                                        </button>
                                    </div>

                                    {isDrivesViewAll ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { url: '/ComputerLab.JPG', caption: 'State-of-the-Art Online Assessment & Technical Labs' },
                                                { url: '/CollegeMain.jpg', caption: 'SRIT Main Block - Campus Recruitment Entrance' },
                                                { url: '/digital_library.jpg', caption: 'High-Speed Digital Evaluation & Coding Hub' },
                                                { url: '/Campus.JPG', caption: 'Vibrant 25+ Acre Academic Environment' },
                                                { url: '/College 1.jpg', caption: 'Administrative Block & Corporate Discussion Suites' },
                                                { url: '/cse_lab.png', caption: 'Advanced Computing & Project Development Center' },
                                            ].map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="group rounded-xl overflow-hidden border border-neutral-200/90 bg-orange-50/30 shadow-sm hover:shadow-md hover:border-[#FF5422]/60 transition-all duration-300"
                                                >
                                                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-orange-50/30">
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
                                                onClick={() => setDrivesGalleryIndex((prev) => (prev <= 0 ? 3 : prev - 1))}
                                                className="absolute -left-2.5 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#FF5422] hover:border-[#FF5422] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {[
                                                    { url: '/ComputerLab.JPG', caption: 'State-of-the-Art Online Assessment & Technical Labs' },
                                                    { url: '/CollegeMain.jpg', caption: 'SRIT Main Block - Campus Recruitment Entrance' },
                                                    { url: '/digital_library.jpg', caption: 'High-Speed Digital Evaluation & Coding Hub' },
                                                    { url: '/Campus.JPG', caption: 'Vibrant 25+ Acre Academic Environment' },
                                                    { url: '/College 1.jpg', caption: 'Administrative Block & Corporate Discussion Suites' },
                                                    { url: '/cse_lab.png', caption: 'Advanced Computing & Project Development Center' },
                                                ]
                                                    .slice(drivesGalleryIndex, drivesGalleryIndex + 3)
                                                    .map((img, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="group rounded-xl border-2 border-orange-200/90 overflow-hidden bg-orange-50/20 shadow-sm hover:shadow-lg hover:border-[#FF5422] transition-all duration-300 relative"
                                                        >
                                                            <div className="relative aspect-[16/11] w-full overflow-hidden bg-orange-50/20">
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
                                                onClick={() => setDrivesGalleryIndex((prev) => (prev >= 3 ? 0 : prev + 1))}
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

export default CampusDrivesPage;

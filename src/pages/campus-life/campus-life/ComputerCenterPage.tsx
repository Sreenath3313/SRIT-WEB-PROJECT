import React, { useState } from 'react';
import {
    Monitor, Cpu, Globe, Shield, Award, Briefcase
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';

export const ComputerCenterPage: React.FC = () => {
    const [isComputerCenterViewAll, setIsComputerCenterViewAll] = useState(false);

    return (
        <CampusLifeLayout activeSectionId="computer-center">
            <>
                                {/* === 1. KEY STATISTICS CARDS (4 Cards with Warm Orange Shades & Hover Animations) === */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                                    {[
                                        {
                                            value: '300+ Nodes',
                                            label: 'Computing Capacity',
                                            desc: 'High-speed networked PC terminals',
                                            icon: Monitor,
                                        },
                                        {
                                            value: 'Gigabit LAN',
                                            label: 'Fiber Backbone',
                                            desc: 'Ultra-fast gigabit local connectivity',
                                            icon: Cpu,
                                        },
                                        {
                                            value: 'Online Testing',
                                            label: 'Exam Venue',
                                            desc: 'Authorized venue for recruitment & NPTEL',
                                            icon: Award,
                                        },
                                        {
                                            value: '100% Uptime',
                                            label: 'Redundant Power',
                                            desc: 'Industrial online UPS & generator backup',
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

                                {/* === 2. ABOUT COMPUTER CENTER (Side-by-Side: Text Left, Image Right) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        <div className="lg:col-span-7 space-y-3.5">
                                            <div className="flex items-center gap-2.5 pb-1">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                    About <span className="text-[#FF5422]">Central Computer Center</span>
                                                </h2>
                                            </div>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The <strong className="text-[#FF5422] font-bold">Central Computer Center</strong> at SRIT serves as the core computational facility for the entire institution, supporting <span className="text-[#FF5422] font-semibold">campus-wide online examinations</span>, competitive programming, skill certifications, and faculty research.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Equipped with over <strong className="text-[#FF5422] font-bold">300+ high-performance desktop workstations</strong>, structured <span className="text-[#FF5422] font-semibold">gigabit fiber connectivity</span>, centralized server blades, and enterprise software licenses, the Center caters to all academic departments simultaneously.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The Computer Center is an authorized venue for national competitive exams, campus recruitment assessments (<span className="text-[#FF5422] font-semibold">TCS, Infosys, Cognizant</span>), <span className="text-[#FF5422] font-semibold">NPTEL online examinations</span>, and 24-hour collegiate hackathons.
                                            </p>

                                            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600">
                                                <span className="px-2.5 py-1 rounded-md bg-orange-50 text-[#FF5422] border border-orange-200">
                                                    300+ High-End PCs
                                                </span>
                                                <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                    Gigabit LAN Backbone
                                                </span>
                                                <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                    Authorized Exam Venue
                                                </span>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-5 self-stretch flex flex-col min-h-[280px]">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-orange-50/20 group relative flex-1 w-full min-h-[280px]">
                                                <img
                                                    src="/ComputerLab.webp"
                                                    alt="Central Computer Center & Online Examination Hub"
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 3. KEY HIGHLIGHTS (6 Cards in 3 Columns × 2 Rows) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                            Key Computing &amp; Examination Capabilities
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            {
                                                title: 'Campus Recruitment Drives',
                                                desc: 'Conducting seamless online technical assessments and coding evaluations for leading IT multinationals.',
                                                icon: Briefcase,
                                            },
                                            {
                                                title: 'National Certification Center',
                                                desc: 'NPTEL, SWAYAM, and industry-sponsored certification testing with high proctoring compliance.',
                                                icon: Award,
                                            },
                                            {
                                                title: 'Competitive Coding & Hackathons',
                                                desc: 'Host venue for 24-hour coding marathons, algorithmic challenges, and open-source project sprints.',
                                                icon: Cpu,
                                            },
                                            {
                                                title: 'Server Infrastructure & Storage',
                                                desc: 'Central server repository managing institutional portals, academic archives, and laboratory software.',
                                                icon: Monitor,
                                            },
                                            {
                                                title: 'High-Speed Gigabit LAN',
                                                desc: 'Full-duplex switching with structured Cat6/fiber cabling connecting every node with 80 Mbps leased line.',
                                                icon: Globe,
                                            },
                                            {
                                                title: '100% Industrial UPS Backup',
                                                desc: 'Continuous uninterrupted computing with dedicated heavy-duty NUMERIC industrial online UPS systems.',
                                                icon: Shield,
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

                                {/* === 4. COMPUTING GUIDELINES === */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <Monitor size={18} className="text-[#FF5422]" />
                                            <span>Computational Infrastructure</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Capacity:</span>
                                                <span>300+ high-performance networked desktop workstations with LCD monitors.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Networking:</span>
                                                <span>Gigabit backbone with 80 Mbps dedicated 1:1 optical fiber leased line.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Power:</span>
                                                <span>Continuous industrial online UPS protection preventing examination outage.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <Shield size={18} className="text-[#FF5422]" />
                                            <span>Examination &amp; Usage Protocol</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Exams:</span>
                                                <span>High proctoring compliance for TCS, Infosys, NPTEL and university tests.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Hackathons:</span>
                                                <span>24-hour round-the-clock computational access for national coding challenges.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Discipline:</span>
                                                <span>Strict silence, individual authentication, and authorized academic access.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 5. PHOTO GALLERY === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                                        <div className="flex items-center gap-2.5">
                                            <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                            <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                Central Computer Center Gallery
                                            </h2>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsComputerCenterViewAll(!isComputerCenterViewAll)}
                                            className="px-3.5 py-1 rounded-full text-xs font-bold text-[#FF5422] bg-orange-50 border border-orange-200 hover:bg-[#FF5422] hover:text-white transition-all cursor-pointer"
                                        >
                                            {isComputerCenterViewAll ? 'Show Carousel' : 'View All Photos'}
                                        </button>
                                    </div>

                                    {isComputerCenterViewAll ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { url: '/ComputerLab.webp', caption: 'Central Computer Center & Online Examination Hub' },
                                                { url: '/ComputerLab.JPG', caption: 'High-Performance Workstation Testing Nodes' },
                                                { url: '/digital_library.jpg', caption: 'Central Digital Computing Hub' },
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
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {[
                                                    { url: '/ComputerLab.webp', caption: 'Central Computer Center & Online Examination Hub' },
                                                    { url: '/ComputerLab.JPG', caption: 'High-Performance Workstation Testing Nodes' },
                                                    { url: '/digital_library.jpg', caption: 'Central Digital Computing Hub' },
                                                ].map((img, idx) => (
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
                                        </div>
                                    )}
                                </div>
                            </>
        </CampusLifeLayout>
    );
};

export default ComputerCenterPage;

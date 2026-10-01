import React, { useState } from 'react';
import {
    Home as HomeIcon, Users, Utensils, Shield, ChevronRight, ChevronLeft,
    Clock, Phone, Zap, Wifi, ChevronUp, ChevronDown
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';
import { campusLifeSections } from './types';
import IframeWithLoader from '../../../components/common/IframeWithLoader';

export const HostelsPage: React.FC = () => {
    const [isHostelTableOpen, setIsHostelTableOpen] = useState(false);
    const [isHostelViewAll, setIsHostelViewAll] = useState(false);
    const [hostelGalleryIndex, setHostelGalleryIndex] = useState(0);
    const [isGirlsHostelSheetOpen, setIsGirlsHostelSheetOpen] = useState(false);
    const [isBoysHostelSheetOpen, setIsBoysHostelSheetOpen] = useState(false);
    const [isHostelFeeOpen, setIsHostelFeeOpen] = useState(false);

    const activeSection = campusLifeSections.find((s) => s.id === 'hostels') || campusLifeSections[0];

    return (
        <CampusLifeLayout activeSectionId="hostels">
            <>
                                {/* === 1. KEY STATISTICS CARDS (4 Cards with Warm Orange Shades & Hover Animations) === */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                                    {[
                                        {
                                            value: '350',
                                            label: 'Boys Hostel Strength',
                                            desc: 'Occupied across 1st to 4th Year B.Tech',
                                            icon: Users,
                                        },
                                        {
                                            value: '410',
                                            label: 'Girls Hostel Strength',
                                            desc: 'Occupied across 1st to 4th Year B.Tech',
                                            icon: Users,
                                        },
                                        {
                                            value: '760',
                                            label: 'Total Residents',
                                            desc: 'Vibrant on-campus residential community',
                                            icon: HomeIcon,
                                        },
                                        {
                                            value: '24/7',
                                            label: 'Security & Care',
                                            desc: 'Resident warden supervision & CCTV',
                                            icon: Shield,
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

                                {/* === 2. ABOUT HOSTELS (Side-by-Side: Text Left + Explore Button, Image Right) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        {/* Left Column */}
                                        <div className="lg:col-span-7 space-y-3.5">
                                            <div className="flex items-center gap-2.5 pb-1">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                    About <span className="text-[#FF5422]">Student Hostels</span>
                                                </h2>
                                            </div>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The Institute runs <strong className="text-[#FF5422] font-bold">separate hostels for boys and girls</strong> on the campus itself with comfortable accommodation and a home-like stay feel. The Hostels are kept under <span className="text-[#FF5422] font-semibold">complete monitoring by Resident Wardens</span> and 24/7 CCTV surveillance for security and student welfare.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The residential facilities provide a secure, disciplined, and studious environment. Students enjoy <span className="text-[#FF5422] font-semibold">spacious ventilated rooms</span>, <span className="text-[#FF5422] font-semibold">hygienic dining mess facilities</span>, <span className="text-[#FF5422] font-semibold">high-speed Wi-Fi (5 PM - 9 PM)</span>, reading areas, <span className="text-[#FF5422] font-semibold">solar hot water systems</span>, and 24/7 power backup.
                                            </p>

                                            
                                        </div>

                                        {/* Right Column: Hostel Image */}
                                        <div className="lg:col-span-5 self-stretch flex flex-col justify-center min-h-[260px]">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-gradient-to-br from-white via-orange-50/40 to-orange-100/30 group relative flex-1 w-full min-h-[260px] flex items-center justify-center p-2">
                                                <img
                                                    src="/Hostel.jpg"
                                                    alt="SRIT On-Campus Student Hostels"
                                                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 3. KEY AMENITIES & FACILITIES (6 Cards in 3 Columns × 2 Rows) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                            Hostel Amenities &amp; Living Experience
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            {
                                                title: 'Hygienic Dining Mess',
                                                desc: 'Spacious dining halls serving freshly prepared, nutritious, and balanced South Indian and North Indian vegetarian meals.',
                                                icon: Utensils,
                                            },
                                            {
                                                title: 'Dedicated Evening Wi-Fi',
                                                desc: 'High-speed internet facility made available to hostel students from 5:00 PM to 9:00 PM for academic study and research.',
                                                icon: Wifi,
                                            },
                                            {
                                                title: 'Solar Water & Power Backup',
                                                desc: 'Environment-friendly solar thermal water heating systems and dedicated heavy-duty generator backup for 24/7 power supply.',
                                                icon: Zap,
                                            },
                                            {
                                                title: 'Active Student Hostel Club',
                                                desc: 'Student-led club organizing weekend cultural events, festive celebrations, indoor games tournaments, and recreational bonding.',
                                                icon: Shield,
                                            },
                                            {
                                                title: '24/7 Security & Care',
                                                desc: 'Round-the-clock physical security guards, full campus CCTV surveillance, and vigilant resident warden supervision.',
                                                icon: Shield,
                                            },
                                            {
                                                title: 'Comfortable Accommodation',
                                                desc: 'Spacious and well-ventilated rooms with personal study tables, wardrobes, comfortable beds, and study ambiance.',
                                                icon: HomeIcon,
                                            },
                                        ].map((item, idx) => {
                                            const ItemIcon = item.icon;
                                            return (
                                                <div
                                                    key={idx}
                                                    className="group relative rounded-xl border border-orange-200/80 bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20 p-4 sm:p-5 hover:border-[#FF5422] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                                                >
                                                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5422] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                    <div className="flex items-start gap-3">
                                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5422] to-[#FF7A45] text-white shadow-md shadow-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5">
                                                            <ItemIcon size={19} />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-sm text-neutral-900 group-hover:text-[#FF5422] transition-colors leading-snug">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* === 4. OPERATING SCHEDULE & KEY GUIDELINES === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <Clock size={20} className="text-[#FF5422]" />
                                        <h3 className="font-serif text-lg font-bold text-neutral-900">
                                            Hostel Schedules &amp; Living Guidelines
                                        </h3>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-neutral-700">
                                        <div className="space-y-2.5">
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Dining Mess Timings:</strong> Breakfast (7:30 - 8:30 AM), Lunch (12:45 - 1:45 PM), Dinner (7:30 - 8:45 PM).
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Evening Wi-Fi Access:</strong> Active from 5:00 PM to 9:00 PM daily for academic learning.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Hostel Reporting In-Time:</strong> All resident students must report by 6:30 PM in their hostel wings.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Mandatory Study Hours:</strong> Observed between 8:30 PM and 10:30 PM with silence maintained.
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Resident Warden Support:</strong> 24/7 dedicated wardens on-site for student assistance and health care.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Visitor Guidelines:</strong> Parents/guardians allowed with prior register entry during designated visiting hours.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Zero Tolerance Anti-Ragging:</strong> Strict compliance with anti-ragging policies on the premises.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Cleanliness &amp; Hygiene:</strong> Daily housekeeping of common facilities and hygienic dining standards.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 5. CURRENT HOSTEL OCCUPANCY BREAKDOWN TABLE === */}
                                {activeSection.tableData && isHostelTableOpen && (
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white shadow-md overflow-hidden animate-in fade-in duration-300">
                                        <div className="bg-gradient-to-r from-[#111827] via-[#1c1412] to-[#2b1610] px-5 py-4 sm:px-6 sm:py-4.5 flex flex-wrap items-center justify-between gap-3 text-white border-b-2 border-[#FF5422]">
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422] shadow-[0_0_10px_#FF5422]" />
                                                <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-tight">
                                                    {activeSection.tableData.title}
                                                </h3>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-300 bg-[#FF5422]/20 px-3 py-1 rounded-full border border-[#FF5422]/40 shadow-sm">
                                                Official Institutional Records
                                            </span>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-orange-100/90 via-orange-50 to-orange-100/90 text-neutral-900 font-bold border-b-2 border-orange-200">
                                                        {activeSection.tableData.headers.map((h, hi) => (
                                                            <th
                                                                key={hi}
                                                                className={`px-4 py-3.5 text-[11px] font-black uppercase tracking-wider text-orange-950 whitespace-nowrap ${hi === 0 ? 'pl-5 sm:pl-6' : hi === activeSection.tableData!.headers.length - 1 ? 'pr-5 sm:pr-6' : ''}`}
                                                            >
                                                                {h}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-orange-100/80 text-neutral-700">
                                                    {activeSection.tableData.rows.map((row, ri) => (
                                                        <tr
                                                            key={ri}
                                                            className="group hover:bg-orange-100/50 transition-colors duration-150 odd:bg-white even:bg-orange-50/30"
                                                        >
                                                            {row.map((cell, ci) => (
                                                                <td
                                                                    key={ci}
                                                                    className={`px-4 py-3.5 align-middle transition-colors ${ci === 0 ? 'pl-5 sm:pl-6 border-l-4 border-l-transparent group-hover:border-l-[#FF5422]' : ci === row.length - 1 ? 'pr-5 sm:pr-6' : ''}`}
                                                                >
                                                                    {ci === 0 ? (
                                                                        <div className="flex items-center gap-2.5 font-bold text-xs sm:text-[13px] text-neutral-900 group-hover:text-[#FF5422] transition-colors">
                                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] shadow-[0_0_4px_#FF5422] shrink-0" />
                                                                            <span>{cell}</span>
                                                                        </div>
                                                                    ) : ci === row.length - 1 ? (
                                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-[#FF5422]/10 text-[#FF5422] border border-[#FF5422]/30 shadow-2xs group-hover:bg-[#FF5422] group-hover:text-white group-hover:border-[#FF5422] transition-all duration-200 whitespace-nowrap">
                                                                            {cell}
                                                                        </span>
                                                                    ) : (
                                                                        <span className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                                                                            {cell}
                                                                        </span>
                                                                    )}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {/* === 6. OFFICIAL SPREADSHEETS (Girls & Boys Hostel Occupation Status + Fee) === */}
                                <div className="space-y-4">
                                    {/* 1. Girls Hostel Occupation Status 2025-26 Accordion */}
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white shadow-md overflow-hidden transition-all duration-300">
                                        <button
                                            type="button"
                                            onClick={() => setIsGirlsHostelSheetOpen(!isGirlsHostelSheetOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#111827] via-[#1c1412] to-[#2b1610] text-white hover:opacity-95 transition-all text-left select-none cursor-pointer border-b-2 border-[#FF5422]"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422] shadow-[0_0_10px_#FF5422]" />
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Girls Hostel — Occupation Status 2025–26 Official Records
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-300 bg-[#FF5422]/20 px-3 py-1 rounded-full border border-[#FF5422]/40 shadow-sm">
                                                    Official Institutional Records
                                                </span>
                                                <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                    {isGirlsHostelSheetOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </div>
                                            </div>
                                        </button>

                                        {isGirlsHostelSheetOpen && (
                                            <div className="p-3 sm:p-4 bg-white w-full animate-in fade-in duration-300">
                                                <div className="w-full h-[850px] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                    <IframeWithLoader
                                                        title="SRIT Girls Hostel Occupation Status Official Sheet"
                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTACl9d8n3XIv2VixPLnxicxKPXpoKpgZxvpVulWTjRb1nvwyXP81k-kxDIYvSsaA/pubhtml?widget=true&headers=false"
                                                        className="w-full h-full border-0"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* 2. Boys Hostel Occupation Status 2025-26 Accordion */}
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white shadow-md overflow-hidden transition-all duration-300">
                                        <button
                                            type="button"
                                            onClick={() => setIsBoysHostelSheetOpen(!isBoysHostelSheetOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#111827] via-[#1c1412] to-[#2b1610] text-white hover:opacity-95 transition-all text-left select-none cursor-pointer border-b-2 border-[#FF5422]"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422] shadow-[0_0_10px_#FF5422]" />
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Boys Hostel — Occupation Status 2025–26 Official Records
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-300 bg-[#FF5422]/20 px-3 py-1 rounded-full border border-[#FF5422]/40 shadow-sm">
                                                    Official Institutional Records
                                                </span>
                                                <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                    {isBoysHostelSheetOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </div>
                                            </div>
                                        </button>

                                        {isBoysHostelSheetOpen && (
                                            <div className="p-3 sm:p-4 bg-white w-full animate-in fade-in duration-300">
                                                <div className="w-full h-[850px] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                    <IframeWithLoader
                                                        title="SRIT Boys Hostel Occupation Status Official Sheet"
                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTllrdleVA99O1B5nHG4tLz2u9QiO9FnIe5MCdJUhK_cW2p7KK6haiUQiEwuo3csg/pubhtml?widget=true&headers=false"
                                                        className="w-full h-full border-0"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* 3. Hostel Fee Accordion */}
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white shadow-md overflow-hidden transition-all duration-300">
                                        <button
                                            type="button"
                                            onClick={() => setIsHostelFeeOpen(!isHostelFeeOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#111827] via-[#1c1412] to-[#2b1610] text-white hover:opacity-95 transition-all text-left select-none cursor-pointer border-b-2 border-[#FF5422]"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422] shadow-[0_0_10px_#FF5422]" />
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Hostel Fee Information
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                    {isHostelFeeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </div>
                                            </div>
                                        </button>

                                        {isHostelFeeOpen && (
                                            <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-neutral-700 leading-relaxed animate-in fade-in duration-300 space-y-2">
                                                <p>For detailed hostel room tariff, dining mess dues, installment options, and admission fee schedules, please visit the college administrative office or contact the respective hostel wardens directly.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* === 7. WARDENS CONTACT & CARE TEAM === */}
                                {activeSection.contacts && activeSection.contacts.length > 0 && (
                                    <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                        <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                            <Phone size={18} className="text-[#FF5422]" />
                                            <h3 className="font-serif text-lg font-bold text-neutral-900">
                                                Hostel Wardens &amp; Caretaker Contacts
                                            </h3>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-3.5">
                                            {activeSection.contacts.map((c, ci) => (
                                                <div
                                                    key={ci}
                                                    className="rounded-xl border border-orange-100 bg-orange-50/30 p-4 flex items-center justify-between hover:border-orange-300 hover:bg-orange-50/60 transition-colors"
                                                >
                                                    <div>
                                                        <span className="text-[10px] font-bold text-[#FF5422] uppercase tracking-wider block">
                                                            {c.role}
                                                        </span>
                                                        <span className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5 block">
                                                            {c.name}
                                                        </span>
                                                    </div>
                                                    {c.phone && (
                                                        <a
                                                            href={`tel:${c.phone}`}
                                                            className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-orange-200 hover:bg-[#FF5422] hover:text-white px-3 py-1.5 text-xs font-semibold text-neutral-800 transition shadow-2xs"
                                                        >
                                                            <Phone size={12} />
                                                            <span>{c.phone}</span>
                                                        </a>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* === 8. GALLERY (Horizontal Slider / Carousel with Left & Right Arrow Buttons) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                                        <div className="flex items-center gap-2.5">
                                            <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                            <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                Gallery
                                            </h2>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsHostelViewAll(!isHostelViewAll)}
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF5422] hover:text-[#d43d0e] transition-colors group cursor-pointer"
                                        >
                                            <span>{isHostelViewAll ? 'Show Carousel' : 'View All'}</span>
                                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>

                                    {isHostelViewAll ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { url: '/Hostel.jpg', caption: 'SRIT On-Campus Student Hostels' },
                                                { url: '/hostel_room.jpg', caption: 'Comfortable Student Accommodations' },
                                                { url: '/hostel_mess.jpg', caption: 'Spacious & Hygienic Dining Mess' },
                                                { url: '/hostel_study.jpg', caption: 'Common Study & Recreation Hall' },
                                                { url: '/CollegeMain.jpg', caption: 'Hostel Resident Campus Courtyard' },
                                                { url: '/BasketBall.JPG', caption: 'Evening Sports & Recreation Ground' },
                                            ].map((img, gi) => (
                                                <div
                                                    key={gi}
                                                    className="group rounded-xl overflow-hidden border border-orange-200/80 bg-white shadow-sm hover:shadow-lg hover:border-[#FF5422] hover:-translate-y-1 transition-all duration-300"
                                                >
                                                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-orange-50/30 flex items-center justify-center p-2">
                                                        <img
                                                            src={img.url}
                                                            alt={img.caption}
                                                            loading="lazy"
                                                            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="relative group/hostelslider px-1">
                                            <button
                                                type="button"
                                                onClick={() => setHostelGalleryIndex((prev) => (prev === 0 ? 3 : prev - 1))}
                                                className="absolute -left-2.5 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#FF5422] hover:border-[#FF5422] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {[
                                                    { url: '/Hostel.jpg', caption: 'SRIT On-Campus Student Hostels' },
                                                    { url: '/hostel_room.jpg', caption: 'Comfortable Student Accommodations' },
                                                    { url: '/hostel_mess.jpg', caption: 'Spacious & Hygienic Dining Mess' },
                                                    { url: '/hostel_study.jpg', caption: 'Common Study & Recreation Hall' },
                                                    { url: '/CollegeMain.jpg', caption: 'Hostel Resident Campus Courtyard' },
                                                    { url: '/BasketBall.JPG', caption: 'Evening Sports & Recreation Ground' },
                                                ]
                                                    .slice(hostelGalleryIndex, hostelGalleryIndex + 3)
                                                    .concat(
                                                        hostelGalleryIndex + 3 > 6
                                                            ? [
                                                                  { url: '/Hostel.jpg', caption: 'SRIT On-Campus Student Hostels' },
                                                                  { url: '/hostel_room.jpg', caption: 'Comfortable Student Accommodations' },
                                                                  { url: '/hostel_mess.jpg', caption: 'Spacious & Hygienic Dining Mess' },
                                                                  { url: '/hostel_study.jpg', caption: 'Common Study & Recreation Hall' },
                                                                  { url: '/CollegeMain.jpg', caption: 'Hostel Resident Campus Courtyard' },
                                                                  { url: '/BasketBall.JPG', caption: 'Evening Sports & Recreation Ground' },
                                                              ].slice(0, (hostelGalleryIndex + 3) % 6)
                                                            : []
                                                    )
                                                    .map((img, gi) => (
                                                        <div
                                                            key={gi}
                                                            className="group rounded-xl overflow-hidden border border-orange-200/80 bg-white shadow-sm hover:shadow-lg hover:border-[#FF5422] hover:-translate-y-1 transition-all duration-300"
                                                        >
                                                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-orange-50/30 flex items-center justify-center p-2">
                                                                <img
                                                                    src={img.url}
                                                                    alt={img.caption}
                                                                    loading="lazy"
                                                                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
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
                                                onClick={() => setHostelGalleryIndex((prev) => (prev >= 3 ? 0 : prev + 1))}
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

export default HostelsPage;

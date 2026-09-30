import React, { useState } from 'react';
import {
    Trophy, Users, Award, Shield, ChevronRight, Phone, ChevronUp, ChevronDown
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';
import { campusLifeSections } from './types';
import IframeWithLoader from '../../../components/common/IframeWithLoader';

export const SportsPage: React.FC = () => {
    const [isSportsVisionOpen, setIsSportsVisionOpen] = useState(false);
    const [isSportsCommitteeOpen, setIsSportsCommitteeOpen] = useState(false);
    const [isSportsTeamSheetOpen, setIsSportsTeamSheetOpen] = useState(false);
    const [isSportsAchievementsOpen, setIsSportsAchievementsOpen] = useState(false);
    const [isSportsContactOpen, setIsSportsContactOpen] = useState(false);
    const [isSportsViewAll, setIsSportsViewAll] = useState(false);

    const activeSection = campusLifeSections.find((s) => s.id === 'sports') || campusLifeSections[0];

    return (
        <CampusLifeLayout activeSectionId="sports">
            <>
                                {/* === 1. KEY STATISTICS CARDS (4 Cards with Warm Orange Shades & Hover Animations) === */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                                    {[
                                        {
                                            value: '25+ Acres',
                                            label: 'Sports Arena',
                                            desc: 'Spacious outdoor grounds & indoor courts',
                                            icon: Trophy,
                                        },
                                        {
                                            value: '10+ Sports',
                                            label: 'Active Disciplines',
                                            desc: 'Cricket, Basketball, Volleyball, Football, Badminton',
                                            icon: Award,
                                        },
                                        {
                                            value: 'JNTUA Meets',
                                            label: 'University Tournaments',
                                            desc: 'Regular participation in inter-collegiate meets',
                                            icon: Users,
                                        },
                                        {
                                            value: 'Medals & Cups',
                                            label: 'Annual Honors',
                                            desc: 'Trophies, cash incentives & certificates',
                                            icon: Trophy,
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

                                {/* === 2. ABOUT SPORTS ARENA (Side-by-Side: Text Left + Explore Button, Image Right) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        <div className="lg:col-span-7 space-y-3.5">
                                            <div className="flex items-center gap-2.5 pb-1">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                    About <span className="text-[#FF5422]">Sports Arena &amp; Physical Education</span>
                                                </h2>
                                            </div>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Sport is an integral part of the curriculum at <strong className="text-[#FF5422] font-bold">Srinivasa Ramanujan Institute of Technology</strong>, fostering a balanced environment of academic excellence, cultural vibrancy, and athletic spirit.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Comprehensive indoor and outdoor sports facilities span the expansive <strong className="text-[#FF5422] font-bold">25+ acre campus</strong>. Led by Physical Directors <span className="text-[#FF5422] font-semibold">Mr. R. Amaresh and Mr. B. Raja Reddy</span>, the Games &amp; Sports Cell prepares student-athletes for inter-collegiate and <span className="text-[#FF5422] font-bold">JNTUA inter-university tournaments</span>.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Engaging in regular athletic competitions builds leadership, endurance, and teamwork. Outstanding student achievers are honored with prestigious <span className="text-[#FF5422] font-semibold">medals, championship trophies, merit certificates, and cash incentives</span>.
                                            </p>

                                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsSportsCommitteeOpen(!isSportsCommitteeOpen)}
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5422] to-[#FF7A45] hover:from-[#e04515] hover:to-[#FF5422] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer"
                                                >
                                                    <span>{isSportsCommitteeOpen ? 'Hide Committee Sheet' : 'Explore Sports Committee & Records'}</span>
                                                    <ChevronRight size={16} />
                                                </button>

                                                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600">
                                                    <span className="px-2.5 py-1 rounded-md bg-orange-50 text-[#FF5422] border border-orange-200">
                                                        Floodlit Hardcourt
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                        25+ Acre Arena
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                        JNTUA Competitors
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-5 self-stretch flex flex-col min-h-[280px]">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-orange-50/20 group relative flex-1 w-full min-h-[280px]">
                                                <img
                                                    src="/sports_official_banner.jpg"
                                                    alt="SRIT Sports, Athletic Meets & Championship Grounds"
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/BasketBall.webp';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 3. KEY HIGHLIGHTS & DISCIPLINES (6 Cards in 3 Columns × 2 Rows) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                            Key Sports Disciplines &amp; Facilities
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            {
                                                title: 'Standard Basketball Hardcourt',
                                                desc: 'Full-dimension regulation court fitted with high-intensity LED floodlighting for evening practice and tournament fixtures.',
                                                icon: Trophy,
                                            },
                                            {
                                                title: 'Cricket Grounds & Practice Nets',
                                                desc: 'Natural grass cricket ground equipped with dedicated dual-pitch practice nets for batting and bowling drills.',
                                                icon: Award,
                                            },
                                            {
                                                title: 'Football Field & Volleyball Arena',
                                                desc: 'Expansive natural turf football field and dual clay volleyball courts hosting inter-departmental athletic leagues.',
                                                icon: Users,
                                            },
                                            {
                                                title: 'Indoor Games Complex & TT Arena',
                                                desc: 'Ventilated indoor arena featuring multiple Table Tennis tables, Badminton courts, Chess, and Carrom boards.',
                                                icon: Trophy,
                                            },
                                            {
                                                title: 'JNTUA & University Tournaments',
                                                desc: 'Structured coaching and full sponsorship for student representation in JNTUA University meets and state championships.',
                                                icon: Award,
                                            },
                                            {
                                                title: 'Fitness & Physical Education Cell',
                                                desc: 'Gymnasium facilities and regular physical training sessions promoting student wellness and active healthy lifestyles.',
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

                                {/* === 4. ATHLETIC PROGRAMS & COMPETITIONS === */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <Trophy size={18} className="text-[#FF5422]" />
                                            <span>Outdoor Athletics &amp; Grounds</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Outdoor:</span>
                                                <span>Full Cricket field, Football pitch, Volleyball courts, 400m running track.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Basketball:</span>
                                                <span>Floodlit regulation hardcourt with acrylic backboards and safety padding.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">University:</span>
                                                <span>Consistent championship victories in JNTUA zonal &amp; inter-university meets.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <Shield size={18} className="text-[#FF5422]" />
                                            <span>Indoor Arena &amp; Physical Training</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Indoor:</span>
                                                <span>Dedicated halls for Table Tennis, Badminton, Chess, and Carrom.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Sports Day:</span>
                                                <span>Annual Sports Meet featuring trophies, cash awards &amp; merit certificates.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Leadership:</span>
                                                <span>Physical Directors Mr. R. Amaresh and Mr. B. Raja Reddy mentoring students.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 5. OFFICIAL ACCORDIONS: VISION, MISSION, COMMITTEE, TEAM & ACHIEVEMENTS === */}
                                <div className="space-y-4">
                                    {/* 1. Vision & Mission Accordions */}
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            type="button"
                                            onClick={() => setIsSportsVisionOpen(!isSportsVisionOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-[#111827] hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isSportsVisionOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Our Vision &amp; Mission
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isSportsVisionOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isSportsVisionOpen && (
                                            <div className="p-5 sm:p-6 bg-white space-y-4">
                                                <div className="p-4 rounded-xl border border-orange-200/80 bg-orange-50/40">
                                                    <h4 className="font-bold text-sm text-[#FF5422] mb-1.5 uppercase tracking-wide">
                                                        Vision Statement
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                                                        We endeavor to become the leading voice at the intersection of athletics and academics. We hope to use this voice to unite, challenge and inspire the next generation of leaders to improve lives of athletes and to act as stewards of the best practices in the sports industry as a whole.
                                                    </p>
                                                </div>
                                                <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70">
                                                    <h4 className="font-bold text-sm text-[#FF5422] mb-1.5 uppercase tracking-wide">
                                                        Mission Statement
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                                                        Advance cutting-edge sports-specific research, educate current and future sports professionals, improve the physical and emotional lives of current and former athletes, and harness the power of sport to inspire positive social change.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>


                                    {/* 3. Team Live Spreadsheet Accordion */}
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            type="button"
                                            onClick={() => setIsSportsTeamSheetOpen(!isSportsTeamSheetOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-[#111827] hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isSportsTeamSheetOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Games &amp; Sports Cell Committee
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isSportsTeamSheetOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isSportsTeamSheetOpen && (
                                            <div className="p-3 sm:p-5 bg-white w-full">
                                                <div className="w-full h-[800px] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                    <IframeWithLoader
                                                        title="Games & Sports Cell Committee Official Sheet"
                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQZpbEuOe5scEiNw9980WFDkbNNMXDULWIW0FYSciGKSXolKmdHXBdCIp-Ijp1BoardaE-_F3-CGImR/pubhtml?widget=true&headers=false"
                                                        className="w-full h-full border-0"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* 4. Achievements Accordion */}
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            type="button"
                                            onClick={() => setIsSportsAchievementsOpen(!isSportsAchievementsOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-[#111827] hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isSportsAchievementsOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Achievements (Official Sheet)
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isSportsAchievementsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isSportsAchievementsOpen && (
                                            <div className="p-3 sm:p-5 bg-white space-y-4">
                                                <div className="w-full h-[800px] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                    <IframeWithLoader
                                                        title="SRIT Sports Achievements Official Sheet"
                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_leu0LTIB1htSZkwy7UnfP1sy8HKs3ebxgw4-GJoMdbc3h6rkVk_KEV5MYwHSmfTG8qXT9NEWByxu/pubhtml?widget=true&headers=false"
                                                        className="w-full h-full border-0"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <div className="p-3.5 rounded-xl border border-orange-200 bg-orange-50/50 flex flex-wrap items-center justify-between gap-3">
                                                    <div className="text-xs text-neutral-800">
                                                        <strong className="text-neutral-900 font-bold">Additional Academic Year Records:</strong> 2021-22 &amp; 2019-20 Annual Sports Achievement Spreadsheets.
                                                    </div>
                                                    <a
                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQmYv5J-bG5JOIIX67qNTefbaGJuVNSiHN9_XcNWb4bV7scDRBzEzUM5vBTgZYk1ykJcyBM2po2MEnI/pubhtml?gid=1036005032&single=true"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#FF5422] hover:bg-[#e04515] px-3.5 py-1.5 rounded-lg shadow-2xs transition-colors"
                                                    >
                                                        <span>Open 2021-22 Sheet</span>
                                                        <ChevronRight size={13} />
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* 5. Contact Us Accordion */}
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            type="button"
                                            onClick={() => setIsSportsContactOpen(!isSportsContactOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-[#111827] hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isSportsContactOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Contact Physical Directors
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isSportsContactOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isSportsContactOpen && activeSection.contacts && (
                                            <div className="p-5 sm:p-6 bg-white space-y-4">
                                                <div className="grid sm:grid-cols-2 gap-3.5">
                                                    {activeSection.contacts.map((c, ci) => (
                                                        <div
                                                            key={ci}
                                                            className="rounded-xl border border-orange-100 bg-orange-50/30 p-4 space-y-2 hover:border-orange-300 transition-colors"
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-[10px] font-bold text-[#FF5422] uppercase tracking-wider">
                                                                    {c.role}
                                                                </span>
                                                                <span className="text-[11px] font-semibold text-neutral-500">
                                                                    SRIT Ananthapuramu
                                                                </span>
                                                            </div>
                                                            <h5 className="font-bold text-sm text-neutral-900">
                                                                {c.name}
                                                            </h5>
                                                            <div className="pt-1 flex flex-wrap gap-2 text-xs">
                                                                {c.phone && (
                                                                    <a
                                                                        href={`tel:${c.phone}`}
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:bg-[#FF5422] hover:text-white transition-colors font-medium shadow-2xs"
                                                                    >
                                                                        <Phone size={12} />
                                                                        <span>{c.phone}</span>
                                                                    </a>
                                                                )}
                                                                {c.email && (
                                                                    <a
                                                                        href={`mailto:${c.email}`}
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:bg-[#FF5422] hover:text-white transition-colors font-medium shadow-2xs"
                                                                    >
                                                                        <span>{c.email}</span>
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
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
                                                Sports &amp; Athletics Gallery
                                            </h2>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsSportsViewAll(!isSportsViewAll)}
                                            className="px-3.5 py-1 rounded-full text-xs font-bold text-[#FF5422] bg-orange-50 border border-orange-200 hover:bg-[#FF5422] hover:text-white transition-all cursor-pointer"
                                        >
                                            {isSportsViewAll ? 'Show Carousel' : 'View All Photos'}
                                        </button>
                                    </div>

                                    {isSportsViewAll ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                            {[
                                                { url: '/BasketBall.webp', caption: 'SRIT Professional Basketball Hardcourt Arena' },
                                                { url: '/sportfacilites.jpg', caption: 'Inter-Collegiate Basketball Matches & Practice' },
                                                { url: '/sports.jpg', caption: 'Student-Athletes Competitive Match Action' },
                                                { url: '/Campus.JPG', caption: '25+ Acre Expansive Outdoor Grounds' },
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
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                {[
                                                    { url: '/BasketBall.webp', caption: 'SRIT Professional Basketball Hardcourt Arena' },
                                                    { url: '/sportfacilites.jpg', caption: 'Inter-Collegiate Basketball Matches & Practice' },
                                                    { url: '/sports.jpg', caption: 'Student-Athletes Competitive Match Action' },
                                                    { url: '/Campus.JPG', caption: '25+ Acre Expansive Outdoor Grounds' },
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

export default SportsPage;

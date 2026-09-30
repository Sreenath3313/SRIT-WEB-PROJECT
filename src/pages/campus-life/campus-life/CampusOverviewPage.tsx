import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Calendar, Landmark, TreePine, Monitor, Shield, Droplet, Zap, Award
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';
import { campusLifeSections } from './types';

export const CampusOverviewPage: React.FC = () => {
    const navigate = useNavigate();
    const activeSection = campusLifeSections.find((s) => s.id === 'campus') || campusLifeSections[0];

    return (
        <CampusLifeLayout activeSectionId="campus">
            <>
                                {/* === 1. KEY STATISTICS CARDS (Warm Orange Shades & Hover Animations) === */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                                    {[
                                        {
                                            value: '2008',
                                            label: 'Established Year',
                                            desc: 'Over 16 years of academic excellence',
                                            icon: Calendar,
                                        },
                                        {
                                            value: 'NAAC "A"',
                                            label: 'Accreditation',
                                            desc: 'Accredited with highest standards',
                                            icon: Award,
                                        },
                                        {
                                            value: 'JNTUA',
                                            label: 'Permanent Affiliation',
                                            desc: 'Affiliated to JNTU Ananthapuramu',
                                            icon: Landmark,
                                        },
                                        {
                                            value: '25+ Acres',
                                            label: 'Campus Area',
                                            desc: 'Sprawling eco-friendly campus',
                                            icon: TreePine,
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

                                {/* === 2. ABOUT CAMPUS OVERVIEW (Side-by-Side with Orange Accents & Badges) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        {/* Left Column: Descriptions & Highlights */}
                                        <div className="lg:col-span-7 space-y-3.5">
                                            <div className="flex items-center gap-2.5 pb-1">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                    About <span className="text-[#FF5422]">Campus Overview</span>
                                                </h2>
                                            </div>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Established in <strong className="text-[#FF5422] font-bold">2008</strong> under the visionary leadership of <span className="text-[#FF5422] font-semibold">Sri Aluru Sambasiva Reddy</span> and managed by the <span className="text-[#FF5422] font-semibold">Smt. Aluru Narayanamma Memorial Educational Society</span>, <span className="text-[#FF5422] font-bold">Srinivasa Ramanujan Institute of Technology (SRIT)</span> is one of the premier technical institutions in Andhra Pradesh.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Permanently affiliated to <span className="text-[#FF5422] font-semibold">JNTU Ananthapuramu</span> and approved by <span className="text-[#FF5422] font-semibold">AICTE, New Delhi</span>, SRIT has earned <span className="text-[#FF5422] font-bold">NAAC "A" Grade accreditation</span> and <span className="text-[#FF5422] font-bold">NBA accreditation</span> for its engineering programs. Located on the serene outskirts of <span className="text-[#FF5422] font-semibold">Rotarypuram Village, B.K. Samudram Mandal</span> in Ananthapuramu district, the campus offers a pristine, pollution-free atmosphere across <span className="text-[#FF5422] font-bold">25+ lush green acres</span> that is ideally conducive to higher learning, research, and innovation.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The campus features <span className="text-[#FF5422] font-semibold">state-of-the-art academic blocks</span>, <span className="text-[#FF5422] font-semibold">smart multimedia classrooms</span>, <span className="text-[#FF5422] font-semibold">advanced engineering laboratories</span>, <span className="text-[#FF5422] font-semibold">high-speed campus-wide Wi-Fi</span>, modern auditoriums, extensive sports facilities, hygienic dining, residential hostels, and dedicated student activity hubs.
                                            </p>

                                            {/* Feature Tags */}
                                            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600">
                                                <span className="px-2.5 py-1 rounded-md bg-orange-50 text-[#FF5422] border border-orange-200">
                                                    25+ Acres Green Campus
                                                </span>
                                                <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                    NAAC "A" Grade Accredited
                                                </span>
                                                <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                    NBA Accredited Programs
                                                </span>
                                                <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                    Permanent JNTUA Affiliation
                                                </span>
                                                <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                    AICTE Approved Institution
                                                </span>
                                                <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                    Autonomous Status
                                                </span>
                                            </div>
                                        </div>

                                        {/* Right Column: Campus Main Image with Orange Frame & Hover Effect */}
                                        <div className="lg:col-span-5 self-stretch flex flex-col min-h-[280px]">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-orange-50/20 group relative flex-1 w-full min-h-[280px]">
                                                <img
                                                    src="/CollegeMain.jpg"
                                                    alt="SRIT Main Campus Building"
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 3. KEY HIGHLIGHTS & FACILITIES (4 Cards with Rich Orange Shades & Lift Animation) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                            Key Highlights &amp; Facilities
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[
                                            {
                                                title: 'Smart Multimedia Classrooms',
                                                desc: 'Acoustically designed lecture halls equipped with modern LCD projectors, interactive smart boards, and high-speed audio-visual aids.',
                                                icon: Monitor,
                                            },
                                            {
                                                title: 'Safe & Secure Campus',
                                                desc: '24/7 campus-wide CCTV surveillance, gated security checkpoints, and vigilant round-the-clock physical security guards.',
                                                icon: Shield,
                                            },
                                            {
                                                title: 'Purified RO Drinking Water',
                                                desc: 'Centralized high-capacity Reverse Osmosis (RO) drinking water plants providing safe and cold drinking water across all blocks.',
                                                icon: Droplet,
                                            },
                                            {
                                                title: 'Continuous Power Backup',
                                                desc: 'High-capacity generator sets and heavy-duty UPS systems ensuring uninterrupted electricity supply to laboratories and classrooms.',
                                                icon: Zap,
                                            },
                                        ].map((item, idx) => {
                                            const ItemIcon = item.icon;
                                            return (
                                                <div
                                                    key={idx}
                                                    className="group relative rounded-xl border border-orange-200/80 bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20 p-4 sm:p-5 hover:border-[#FF5422] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                                                >
                                                    {/* Top Accent Line */}
                                                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5422] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                    <div>
                                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF5422] to-[#FF7A45] text-white shadow-md shadow-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 mb-3">
                                                            <ItemIcon size={20} />
                                                        </div>
                                                        <h4 className="font-bold text-sm sm:text-[14.5px] text-neutral-900 group-hover:text-[#FF5422] transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* === 4. CAMPUS FACILITIES & AMENITIES (8 Cards in 2 Rows × 4 Columns with Orange Hover & Glow) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                            Campus Facilities &amp; Amenities
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[
                                            {
                                                title: 'Academic Infrastructure',
                                                desc: 'Modern classrooms, labs and seminar halls.',
                                                img: '/College.JPG',
                                                link: '/campus-life/labs'
                                            },
                                            {
                                                title: 'Central Library',
                                                desc: 'Rich collection of books and digital resources.',
                                                img: '/library.webp',
                                                link: '/campus-life/library'
                                            },
                                            {
                                                title: 'Hostel Life',
                                                desc: 'Safe and comfortable hostel facilities.',
                                                img: '/Hostel.jpg',
                                                link: '/campus-life/hostel'
                                            },
                                            {
                                                title: 'Sports & Games',
                                                desc: 'Indoor and outdoor sports facilities.',
                                                img: '/BasketBall.JPG',
                                                link: '/campus-life/sports'
                                            },
                                            {
                                                title: 'Transport',
                                                desc: 'Well-connected transport facility.',
                                                img: '/Transport.jpg',
                                                link: '/campus-life/transport'
                                            },
                                            {
                                                title: 'Sustainable Campus',
                                                desc: 'Lush greenery and eco-friendly environment.',
                                                img: '/College 3.JPG',
                                                link: '/campus-life/sustainability'
                                            },
                                            {
                                                title: 'Cafeteria',
                                                desc: 'Hygienic and spacious dining facilities.',
                                                img: '/Campus.JPG',
                                                link: '/campus-life/canteen'
                                            },
                                            {
                                                title: 'Student Activities',
                                                desc: 'Platforms to showcase talent and creativity.',
                                                img: '/aarambh_orientation.jpg',
                                                link: '/campus-life/cultural'
                                            },
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => navigate(item.link)}
                                                className="group rounded-xl overflow-hidden border border-neutral-200/60 bg-white shadow-sm hover:shadow-xl hover:border-[#FF5422] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                                            >
                                                {/* Image */}
                                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-orange-50/20">
                                                    <img
                                                        src={item.img}
                                                        alt={item.title}
                                                        loading="lazy"
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                        }}
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="p-3.5 bg-gradient-to-b from-white to-orange-50/40 border-t border-orange-100/60">
                                                    <div className="min-w-0">
                                                        <h4 className="font-bold text-sm text-neutral-900 group-hover:text-[#FF5422] transition-colors truncate">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-[11.5px] text-neutral-500 mt-0.5 line-clamp-1">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* === 5. OPERATING SCHEDULES & GUIDELINES === */}
                                {activeSection.highlights && activeSection.highlights.length > 0 && (
                                    <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-sm space-y-3">
                                        <h3 className="font-serif text-lg font-bold text-neutral-900 flex items-center gap-2">
                                            <span className="h-4 w-1 rounded-full bg-[#FF5422]" />
                                            <span>Operating Schedules & Key Guidelines</span>
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-2.5">
                                            {activeSection.highlights.map((hl, hi) => (
                                                <div key={hi} className="flex items-start gap-2.5 p-3 rounded-lg bg-orange-50/40 border border-orange-100/70">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                    <span className="text-xs sm:text-[13px] text-neutral-800 leading-relaxed font-medium">
                                                        {hl}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
        </CampusLifeLayout>
    );
};

export default CampusOverviewPage;

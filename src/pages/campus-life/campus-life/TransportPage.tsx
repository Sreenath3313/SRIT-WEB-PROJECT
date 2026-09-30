import React, { useState } from 'react';
import {
    Bus, Users, Globe, Shield, ChevronRight, ChevronLeft,
    Clock, ChevronUp, ChevronDown, Briefcase, Zap
} from 'lucide-react';
import IframeWithLoader from '../../../components/common/IframeWithLoader';
import CampusLifeLayout from './CampusLifeLayout';

export const TransportPage: React.FC = () => {
    const [isTransportSpreadsheetOpen, setIsTransportSpreadsheetOpen] = useState(false);
    const [isTransportViewAll, setIsTransportViewAll] = useState(false);
    const [transportGalleryIndex, setTransportGalleryIndex] = useState(0);
    const [isBusFeeOpen, setIsBusFeeOpen] = useState(false);
    const [isBusSeatingOpen, setIsBusSeatingOpen] = useState(false);

    return (
        <CampusLifeLayout activeSectionId="transport">
            <>
                                {/* === 1. KEY STATISTICS CARDS (4 Cards with Warm Orange Shades & Hover Animations) === */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                                    {[
                                        {
                                            value: '30 Buses',
                                            label: 'Total Fleet Strength',
                                            desc: 'Modern GPS & Speed Governed Buses',
                                            icon: Bus,
                                        },
                                        {
                                            value: '1,528',
                                            label: 'Seating Capacity',
                                            desc: 'Dedicated seating for students & staff',
                                            icon: Users,
                                        },
                                        {
                                            value: '4 Towns',
                                            label: 'Regional Hubs',
                                            desc: 'Anantapur, Tadipatri, Dharmavaram, Pamidi',
                                            icon: Globe,
                                        },
                                        {
                                            value: '100% Safe',
                                            label: 'Safety Compliance',
                                            desc: 'Licensed drivers, First-Aid & Speed Governors',
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

                                {/* === 2. ABOUT TRANSPORT (Side-by-Side: Text Left + Explore Button, Image Right) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        {/* Left Column */}
                                        <div className="lg:col-span-7 space-y-3.5">
                                            <div className="flex items-center gap-2.5 pb-1">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                    About <span className="text-[#FF5422]">Transport Facilities</span>
                                                </h2>
                                            </div>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The institution runs <strong className="text-[#FF5422] font-bold">30 buses</strong> covering all important points in <span className="text-[#FF5422] font-semibold">Anantapur City, Tadipatri, Dharmavaram &amp; Pamidi</span> towns with a total seating capacity of <strong className="text-[#FF5422] font-bold">1,528 students</strong>.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                To ensure convenient, safe, and punctual transit for day-scholar students and faculty members, <span className="text-[#FF5422] font-bold">Srinivasa Ramanujan Institute of Technology</span> operates a dedicated fleet of modern buses synchronized with daily academic and laboratory schedules.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Every vehicle is maintained with stringent safety compliance, <span className="text-[#FF5422] font-semibold">speed governors</span>, first-aid equipment, and <span className="text-[#FF5422] font-semibold">experienced licensed drivers</span>. Clear route schedules and designated boarding points ensure students arrive and return safely every day.
                                            </p>

                                            
                                        </div>

                                        {/* Right Column: Transport Fleet Image */}
                                        <div className="lg:col-span-5 self-stretch flex flex-col justify-center min-h-[260px]">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-gradient-to-br from-white via-orange-50/40 to-orange-100/30 group relative flex-1 w-full min-h-[260px] flex items-center justify-center p-2">
                                                <img
                                                    src="/Transport.jpg"
                                                    alt="SRIT Transport Bus Fleet"
                                                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/Transport.webp';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 3. KEY HIGHLIGHTS & FACILITIES (6 Cards in 3 Columns × 2 Rows) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                            Key Highlights &amp; Facilities
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            {
                                                title: 'Wide Regional Town Coverage',
                                                desc: 'Extensive route network connecting all key nodal boarding points across Anantapur City, Tadipatri, Dharmavaram, and Pamidi.',
                                                icon: Globe,
                                            },
                                            {
                                                title: 'Synchronized Shift Operations',
                                                desc: 'Punctual morning pickup and evening drop-off schedules aligned seamlessly with lectures, practical labs, and library hours.',
                                                icon: Clock,
                                            },
                                            {
                                                title: 'Safety Norms & Speed Governors',
                                                desc: 'All vehicles fitted with certified speed limiters, emergency safety exits, first-aid medical kits, and fire extinguishers.',
                                                icon: Shield,
                                            },
                                            {
                                                title: 'Dedicated Faculty & Staff Buses',
                                                desc: 'Specialized transit routes and seating ensuring teaching faculty and administrative personnel arrive conveniently on campus.',
                                                icon: Briefcase,
                                            },
                                            {
                                                title: 'Experienced & Licensed Drivers',
                                                desc: 'Highly experienced, verified drivers accompanied by active route supervisors ensuring student safety and punctuality.',
                                                icon: Users,
                                            },
                                            {
                                                title: 'Rapid Emergency & Backup Support',
                                                desc: 'Standby breakdown vehicles and dedicated mechanical maintenance ensuring zero disruption to daily academic transit.',
                                                icon: Zap,
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
                                            Operating Schedule &amp; Key Guidelines
                                        </h3>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-[13px] text-neutral-700">
                                        <div className="space-y-2.5">
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Morning Pickup Timings:</strong> 7:30 AM to 8:45 AM across all town nodal points (Arrival on campus before 9:00 AM).
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Evening Departure Timings:</strong> 4:45 PM departure from campus to all routes following instructional hours.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Bus Pass Verification:</strong> Valid bus pass and institutional identity card must be carried daily.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Punctual Boarding:</strong> Students are requested to arrive at designated stops 5 minutes prior to scheduled departure.
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Safety &amp; Priority Seating:</strong> Priority seating reserved for girl students and faculty members.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Speed &amp; Transit Discipline:</strong> Strict compliance with speed limits; footboard travelling is strictly prohibited.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Route Coordination:</strong> Direct coordination with dedicated route supervisors for any assistance.
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-orange-50/50 border border-orange-100/70">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                <span className="leading-relaxed">
                                                    <strong>Clean &amp; Sanitized Fleet:</strong> Routine mechanical inspections and sanitized bus cabins.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 5. OFFICIAL SPREADSHEETS (Bus Fee & Bus Seating Plan Accordions) === */}
                                {(isTransportSpreadsheetOpen || true) && (
                                    <div className="space-y-4">
                                        {/* 1. Bus Fee Accordion */}
                                        <div className="rounded-xl border-2 border-orange-200/90 bg-white shadow-md overflow-hidden transition-all duration-300">
                                            <button
                                                type="button"
                                                onClick={() => setIsBusFeeOpen(!isBusFeeOpen)}
                                                className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#111827] via-[#1c1412] to-[#2b1610] text-white hover:opacity-95 transition-all text-left select-none cursor-pointer border-b-2 border-[#FF5422]"
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422] shadow-[0_0_10px_#FF5422]" />
                                                    <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                        SRIT Transport Bus Fee Official Schedule
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-300 bg-[#FF5422]/20 px-3 py-1 rounded-full border border-[#FF5422]/40 shadow-sm">
                                                        Official Institutional Records
                                                    </span>
                                                    <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                        {isBusFeeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                    </div>
                                                </div>
                                            </button>

                                            {isBusFeeOpen && (
                                                <div className="p-3 sm:p-4 bg-white w-full animate-in fade-in duration-300">
                                                    <div className="w-full h-[700px] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                        <IframeWithLoader
                                                            title="SRIT Transport Bus Fee Official Sheet"
                                                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQQyx-PWU8lPnhfDlDBL7YtpWohDx_UrqnmXUy85XKXHV5r8P00qMIJ2QSBZliNgg/pubhtml?widget=true&headers=false"
                                                            className="w-full h-full border-0"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* 2. Bus Seating Plan Accordion */}
                                        <div className="rounded-xl border-2 border-orange-200/90 bg-white shadow-md overflow-hidden transition-all duration-300">
                                            <button
                                                type="button"
                                                onClick={() => setIsBusSeatingOpen(!isBusSeatingOpen)}
                                                className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#111827] via-[#1c1412] to-[#2b1610] text-white hover:opacity-95 transition-all text-left select-none cursor-pointer border-b-2 border-[#FF5422]"
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422] shadow-[0_0_10px_#FF5422]" />
                                                    <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                        SRIT Transport Bus Seating Plan Official Records
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-300 bg-[#FF5422]/20 px-3 py-1 rounded-full border border-[#FF5422]/40 shadow-sm">
                                                        Official Institutional Records
                                                    </span>
                                                    <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                        {isBusSeatingOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                    </div>
                                                </div>
                                            </button>

                                            {isBusSeatingOpen && (
                                                <div className="p-3 sm:p-4 bg-white w-full animate-in fade-in duration-300">
                                                    <div className="w-full h-[800px] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                        <IframeWithLoader
                                                            title="SRIT Transport Bus Seating Plan Official Sheet"
                                                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHDtLoCshdquMnpnnnLp-PF4FGzB8qG_g4r3A8hriwD97YzdM2lQ-2sJ9J0mVEaQ/pubhtml?widget=true&headers=false"
                                                            className="w-full h-full border-0"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* === 6. GALLERY (Horizontal Slider / Carousel with Left & Right Arrow Buttons) === */}
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
                                            onClick={() => setIsTransportViewAll(!isTransportViewAll)}
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF5422] hover:text-[#d43d0e] transition-colors group cursor-pointer"
                                        >
                                            <span>{isTransportViewAll ? 'Show Carousel' : 'View All'}</span>
                                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>

                                    {isTransportViewAll ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { url: '/Transport.jpg', caption: 'SRIT 30-Bus Transit Fleet & Campus Parking' },
                                                { url: '/Transport.webp', caption: 'Punctual Daily Commute & Route Operations' },
                                                { url: '/CollegeMain.jpg', caption: 'Campus Terminal & Main Entrance Gate' },
                                                { url: '/Campus.JPG', caption: 'Sprawling 25+ Acre Campus Road Network' },
                                                { url: '/College 2.JPG', caption: 'Academic Block Drop-off Zone & Courtyard' },
                                                { url: '/College 3.JPG', caption: 'Scenic Landscaped Transit Pathways' },
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
                                                                (e.target as HTMLImageElement).src = '/Transport.jpg';
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="relative group/transportsilder px-1">
                                            <button
                                                type="button"
                                                onClick={() => setTransportGalleryIndex((prev) => (prev === 0 ? 3 : prev - 1))}
                                                className="absolute -left-2.5 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#FF5422] hover:border-[#FF5422] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {[
                                                    { url: '/Transport.jpg', caption: 'SRIT 30-Bus Transit Fleet & Campus Parking' },
                                                    { url: '/Transport.webp', caption: 'Punctual Daily Commute & Route Operations' },
                                                    { url: '/CollegeMain.jpg', caption: 'Campus Terminal & Main Entrance Gate' },
                                                    { url: '/Campus.JPG', caption: 'Sprawling 25+ Acre Campus Road Network' },
                                                    { url: '/College 2.JPG', caption: 'Academic Block Drop-off Zone & Courtyard' },
                                                    { url: '/College 3.JPG', caption: 'Scenic Landscaped Transit Pathways' },
                                                ]
                                                    .slice(transportGalleryIndex, transportGalleryIndex + 3)
                                                    .concat(
                                                        transportGalleryIndex + 3 > 6
                                                            ? [
                                                                  { url: '/Transport.jpg', caption: 'SRIT 30-Bus Transit Fleet & Campus Parking' },
                                                                  { url: '/Transport.webp', caption: 'Punctual Daily Commute & Route Operations' },
                                                                  { url: '/CollegeMain.jpg', caption: 'Campus Terminal & Main Entrance Gate' },
                                                                  { url: '/Campus.JPG', caption: 'Sprawling 25+ Acre Campus Road Network' },
                                                                  { url: '/College 2.JPG', caption: 'Academic Block Drop-off Zone & Courtyard' },
                                                                  { url: '/College 3.JPG', caption: 'Scenic Landscaped Transit Pathways' },
                                                              ].slice(0, (transportGalleryIndex + 3) % 6)
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
                                                                        (e.target as HTMLImageElement).src = '/Transport.jpg';
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => setTransportGalleryIndex((prev) => (prev >= 3 ? 0 : prev + 1))}
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

export default TransportPage;
// EOF

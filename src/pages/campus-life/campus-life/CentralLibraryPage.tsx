import React, { useState } from 'react';
import {
    BookOpen, FileText, Globe, Users, ChevronRight, ChevronLeft,
    Monitor, Printer, Shield, Clock, Phone
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';
import { campusLifeSections } from './types';

export const CentralLibraryPage: React.FC = () => {
    const [isLibraryTableOpen, setIsLibraryTableOpen] = useState(false);
    const [isLibraryViewAll, setIsLibraryViewAll] = useState(false);
    const [libraryGalleryIndex, setLibraryGalleryIndex] = useState(0);

    const activeSection = campusLifeSections.find((s) => s.id === 'library')!;

    return (
        <CampusLifeLayout activeSectionId="library">
            {/* === 1. KEY STATISTICS CARDS === */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {[
                    {
                        value: '50,000+',
                        label: 'Volumes Available',
                        desc: 'Extensive print collection',
                        icon: BookOpen,
                    },
                    {
                        value: '267',
                        label: 'Journals Subscribed',
                        desc: 'National & International',
                        icon: FileText,
                    },
                    {
                        value: 'Digital Hub',
                        label: 'IEEE & DELNET Access',
                        desc: 'Global digital repositories',
                        icon: Globe,
                    },
                    {
                        value: '400 Seats',
                        label: 'Reading Hall Capacity',
                        desc: 'Spacious air-conditioned halls',
                        icon: Users,
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

            {/* === 2. ABOUT LIBRARY (Side-by-Side: Text Left + Explore Button, Image Right) === */}
            <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-7 space-y-3.5">
                        <div className="flex items-center gap-2.5 pb-1">
                            <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                            <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                About <span className="text-[#FF5422]">Central Library</span>
                            </h2>
                        </div>

                        <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                            The Central Library of <strong className="text-[#FF5422] font-bold">Srinivasa Ramanujan Institute of Technology</strong> is a modern knowledge hub with a vast collection of textbooks, reference volumes, research journals, and extensive digital repositories.
                        </p>

                        <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                            Spanning an expansive area with a comfortable seating capacity of <strong className="text-[#FF5422] font-bold">400+ readers</strong>, the library is fully automated using <span className="text-[#FF5422] font-semibold">Integrated Library Management Software (ILMS)</span> with barcode scanning for rapid circulation.
                        </p>

                        <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                            Students and faculty enjoy high-speed digital connectivity with remote access to <span className="text-[#FF5422] font-semibold">IEEE Xplore, DELNET, NDLI, and NPTEL</span> local servers.
                        </p>

                        
                    </div>

                    {/* Right Column: Library Reading Hall Image */}
                    <div className="lg:col-span-5 self-stretch flex flex-col justify-center min-h-[260px]">
                        <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-gradient-to-br from-white via-orange-50/40 to-orange-100/30 group relative flex-1 w-full min-h-[260px] flex items-center justify-center p-2">
                            <img
                                src="/library.webp"
                                alt="SRIT Central Library Reading Hall"
                                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/digital_library.jpg';
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
                            title: 'Fully Computerized & Digital Facility',
                            desc: 'Automated using Integrated Library Management Software (ILMS) with barcode technology and remote accessible OPAC.',
                            icon: Monitor,
                        },
                        {
                            title: 'Extensive Print & Digital Collection',
                            desc: 'Vast repository of 50,000+ volumes across all engineering disciplines, along with 267 national and international journal subscriptions.',
                            icon: BookOpen,
                        },
                        {
                            title: 'Air-Conditioned Digital Library',
                            desc: 'Dedicated digital computing zone with 12 high-end multimedia workstations for accessing online e-journals, NPTEL videos, and research papers.',
                            icon: Globe,
                        },
                        {
                            title: 'Reprography & Printing Services',
                            desc: 'In-house high-speed photocopier and laser printing facility available for students and scholars at subsidized charges.',
                            icon: Printer,
                        },
                        {
                            title: 'Comprehensive CCTV Surveillance',
                            desc: 'Full security monitoring across stack areas, reference sections, and reading cubicles ensuring high safety and decorum.',
                            icon: Shield,
                        },
                        {
                            title: 'Extended Operating Hours',
                            desc: 'Open on all working days from 8:00 AM to 8:00 PM, with dedicated late-evening study permissions during semester examinations.',
                            icon: Clock,
                        },
                    ].map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative rounded-xl border border-orange-200/80 bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20 p-4 sm:p-5 hover:border-[#FF5422] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5422] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div>
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF5422] to-[#FF7A45] text-white shadow-md shadow-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 mb-3">
                                        <IconComp size={20} />
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

            {/* === 4. OPERATING SCHEDULES & KEY GUIDELINES === */}
            <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                    <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                        Operating Schedules &amp; Key Guidelines
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-[13px] text-neutral-700">
                    {[
                        'Working Days: Monday through Saturday from 8:00 AM to 8:00 PM.',
                        'Issue Counter Timings: 9:00 AM to 5:00 PM on all instructional days.',
                        'Digital Library Access: Available throughout library hours with high-speed Internet.',
                        'Strict silence and institutional dress code must be observed inside the reading halls.',
                        'Students must carry their valid SRIT ID cards for entry and book transactions.',
                        'Reference books and current periodicals are strictly meant for in-house consultation.',
                    ].map((rule, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-orange-50/40 border border-orange-100/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                            <span className="leading-relaxed font-medium text-neutral-800">{rule}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* === 5. RESOURCE SPECIFICATIONS TABLE (Collapsible) === */}
            {activeSection.tableData && (
                <div className="rounded-xl border-2 border-orange-200/90 bg-white shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-[#111827] via-[#1c1412] to-[#2b1610] px-5 py-4 sm:px-6 sm:py-4.5 flex flex-wrap items-center justify-between gap-3 text-white border-b-2 border-[#FF5422]">
                        <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422] shadow-[0_0_10px_#FF5422]" />
                            <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-tight">
                                {activeSection.tableData.title}
                            </h3>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-300 bg-[#FF5422]/20 px-3 py-1 rounded-full border border-[#FF5422]/40 shadow-sm">
                            Verified Institutional Records
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
                                                ) : ci === 1 && String(cell).length <= 25 ? (
                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-[#FF5422]/10 text-[#FF5422] border border-[#FF5422]/30 shadow-2xs group-hover:bg-[#FF5422] group-hover:text-white group-hover:border-[#FF5422] transition-all duration-200 whitespace-nowrap">
                                                        {cell}
                                                    </span>
                                                ) : ci === 1 ? (
                                                    <div className="text-xs text-neutral-800 font-medium bg-orange-50/60 p-2 rounded-lg border border-orange-200/60 leading-relaxed group-hover:bg-white group-hover:border-orange-300 transition-colors">
                                                        {cell}
                                                    </div>
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

            {/* === 6. GALLERY (Horizontal Slider / Carousel with Left & Right Arrow Buttons) === */}
            <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                    <div className="flex items-center gap-2.5">
                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                            Library Gallery
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsLibraryViewAll(!isLibraryViewAll)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF5422] hover:text-[#d43d0e] transition-colors group cursor-pointer"
                    >
                        <span>{isLibraryViewAll ? 'Show Carousel' : 'View All'}</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {isLibraryViewAll ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { url: '/digital_library.jpg', caption: 'Air-Conditioned Digital Library Lab' },
                            { url: '/library.webp', caption: 'Central Reading & Reference Section' },
                            { url: '/library_reading_hall.jpg', caption: 'Periodicals Research Hall' },
                            { url: '/Library 1.JPG', caption: 'Study Cubicles & Stack Area' },
                            { url: '/srit_library_main_banner.jpg', caption: 'Central Circulation & OPAC Search Desk' },
                            { url: '/srit_library_reference.jpg', caption: 'Engineering Reference Repository' },
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
                                            (e.target as HTMLImageElement).src = '/library.webp';
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="relative group/libslider px-1">
                        <button
                            type="button"
                            onClick={() => setLibraryGalleryIndex((prev) => (prev === 0 ? 3 : prev - 1))}
                            className="absolute -left-2.5 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#FF5422] hover:border-[#FF5422] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { url: '/digital_library.jpg', caption: 'Air-Conditioned Digital Library Lab' },
                                { url: '/library.webp', caption: 'Central Reading & Reference Section' },
                                { url: '/library_reading_hall.jpg', caption: 'Periodicals Research Hall' },
                                { url: '/Library 1.JPG', caption: 'Study Cubicles & Stack Area' },
                                { url: '/srit_library_main_banner.jpg', caption: 'Central Circulation & OPAC Search Desk' },
                                { url: '/srit_library_reference.jpg', caption: 'Engineering Reference Repository' },
                            ]
                                .slice(libraryGalleryIndex, libraryGalleryIndex + 3)
                                .concat(
                                    libraryGalleryIndex + 3 > 6
                                        ? [
                                              { url: '/digital_library.jpg', caption: 'Air-Conditioned Digital Library Lab' },
                                              { url: '/library.webp', caption: 'Central Reading & Reference Section' },
                                              { url: '/library_reading_hall.jpg', caption: 'Periodicals Research Hall' },
                                              { url: '/Library 1.JPG', caption: 'Study Cubicles & Stack Area' },
                                              { url: '/srit_library_main_banner.jpg', caption: 'Central Circulation & OPAC Search Desk' },
                                              { url: '/srit_library_reference.jpg', caption: 'Engineering Reference Repository' },
                                          ].slice(0, (libraryGalleryIndex + 3) % 6)
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
                                                    (e.target as HTMLImageElement).src = '/library.webp';
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => setLibraryGalleryIndex((prev) => (prev >= 3 ? 0 : prev + 1))}
                            className="absolute -right-2.5 sm:-right-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#FF5422] hover:border-[#FF5422] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                            aria-label="Next image"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>

            {/* === 7. CONTACTS === */}
            {activeSection.contacts && activeSection.contacts.length > 0 && (
                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-3">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-900 flex items-center gap-2">
                        <Phone size={16} className="text-[#FF5422]" />
                        <span>Library Administration &amp; Help Desk</span>
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-3">
                        {activeSection.contacts.map((c, ci) => (
                            <div
                                key={ci}
                                className="rounded-xl border border-orange-100 bg-gradient-to-br from-white to-orange-50/30 p-3.5 flex items-center justify-between"
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
                                        className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-orange-200 hover:bg-[#FF5422] hover:text-white hover:border-[#FF5422] px-2.5 py-1 text-xs font-semibold text-neutral-800 transition shadow-2xs"
                                    >
                                        <Phone size={11} />
                                        <span>{c.phone}</span>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </CampusLifeLayout>
    );
};

export default CentralLibraryPage;

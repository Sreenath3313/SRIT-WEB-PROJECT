import React, { useState } from 'react';
import {
    Utensils, Droplet, Users, Shield, Award, Clock
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';

export const CafeteriaPage: React.FC = () => {
    const [isCafeteriaViewAll, setIsCafeteriaViewAll] = useState(false);

    return (
        <CampusLifeLayout activeSectionId="cafeteria">
            <>
                                {/* === 1. KEY STATISTICS CARDS (4 Cards with Warm Orange Shades & Hover Animations) === */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                                    {[
                                        {
                                            value: '100% RO',
                                            label: 'Water Quality',
                                            desc: 'Purified RO water for cooking & drinking',
                                            icon: Droplet,
                                        },
                                        {
                                            value: 'Variety',
                                            label: 'Menu Options',
                                            desc: 'South Indian, North Indian & snacks',
                                            icon: Utensils,
                                        },
                                        {
                                            value: 'Affordable',
                                            label: 'Subsidized Pricing',
                                            desc: 'Student-friendly economical menu rates',
                                            icon: Award,
                                        },
                                        {
                                            value: 'Daily Fresh',
                                            label: 'Hygiene Standard',
                                            desc: 'Strict cleanliness & daily fresh food',
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

                                {/* === 2. ABOUT CAFETERIA (Side-by-Side: Text Left, Image Right) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        <div className="lg:col-span-7 space-y-3.5">
                                            <div className="flex items-center gap-2.5 pb-1">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                    About <span className="text-[#FF5422]">Cafeteria &amp; Student Food Court</span>
                                                </h2>
                                            </div>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The SRIT <strong className="text-[#FF5422] font-bold">Cafeteria and Food Court</strong> is a lively, welcoming hub where students, faculty, and campus visitors gather to relax, converse, and enjoy wholesome food throughout the day.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Maintained under strict standards of hygiene and quality, the cafeteria offers a wide variety of freshly prepared <span className="text-[#FF5422] font-semibold">South Indian breakfast items</span>, wholesome thali lunches, snacks, bakery items, hot tea/coffee, and <span className="text-[#FF5422] font-semibold">fresh fruit juices</span>.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                The kitchen utilizes <strong className="text-[#FF5422] font-bold">100% purified RO water</strong> for all cooking and washing, adhering to rigorous cleanliness inspections and providing an inviting ambiance at <span className="text-[#FF5422] font-semibold">subsidized, student-friendly prices</span>.
                                            </p>

                                            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600">
                                                <span className="px-2.5 py-1 rounded-md bg-orange-50 text-[#FF5422] border border-orange-200">
                                                    100% RO Water Purified
                                                </span>
                                                <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                    Nutritious Balanced Meals
                                                </span>
                                                <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                    Subsidized Pricing
                                                </span>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-5 self-stretch flex flex-col min-h-[280px]">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-orange-50/20 group relative flex-1 w-full min-h-[280px]">
                                                <img
                                                    src="/College 1.jpg"
                                                    alt="SRIT Campus Cafeteria & Student Refreshment Zone"
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 3. KEY HIGHLIGHTS & AMENITIES (6 Cards in 3 Columns × 2 Rows) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                            Key Dining &amp; Refreshment Highlights
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            {
                                                title: 'Nutritious Daily Meals',
                                                desc: 'Balanced breakfast, lunch, and snack menus providing wholesome nutrition to students and faculty members.',
                                                icon: Utensils,
                                            },
                                            {
                                                title: 'Spacious & Clean Dining Area',
                                                desc: 'Comfortable seating accommodating hundreds of diners simultaneously in a bright, well-ventilated space.',
                                                icon: Users,
                                            },
                                            {
                                                title: 'Refreshments & Fresh Juices',
                                                desc: 'Fresh fruit juices, milkshakes, hot filter coffee, tea, and healthy packaged snacks.',
                                                icon: Utensils,
                                            },
                                            {
                                                title: '100% Purified RO Water Cooking',
                                                desc: 'Centralized high-capacity RO plant water utilized exclusively for all culinary preparations and dish sterilization.',
                                                icon: Droplet,
                                            },
                                            {
                                                title: 'Special Event & Seminar Catering',
                                                desc: 'Full catering capabilities for college seminars, technical symposiums, hackathons, and guest dignitaries.',
                                                icon: Award,
                                            },
                                            {
                                                title: 'Strict Quality & Hygiene Audits',
                                                desc: 'Regular food quality inspections by the institutional committee ensuring fresh ingredients and supreme hygiene.',
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

                                {/* === 4. DINING TIMINGS & HYGIENE GUIDELINES === */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <Clock size={18} className="text-[#FF5422]" />
                                            <span>Daily Meal Timings</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Breakfast:</span>
                                                <span>7:30 AM – 9:00 AM (Idli, Dosa, Vada, Puri, Upma, Pongal & Tea/Coffee).</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Lunch:</span>
                                                <span>12:45 PM – 2:00 PM (Full South Indian & North Indian Meals, Biryani, Curd).</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Snacks:</span>
                                                <span>4:00 PM – 6:30 PM (Fresh Juices, Samosas, Biscuits, Hot Beverages).</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <Shield size={18} className="text-[#FF5422]" />
                                            <span>Quality &amp; Cleanliness Standards</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Water:</span>
                                                <span>100% multi-stage RO purified water used for all cooking and washing.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Inspections:</span>
                                                <span>Periodic hygiene audits conducted by the institutional Canteen Committee.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Eco-Policy:</span>
                                                <span>Single-use plastic prohibited; segregated organic waste disposal.</span>
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
                                                Cafeteria &amp; Dining Gallery
                                            </h2>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsCafeteriaViewAll(!isCafeteriaViewAll)}
                                            className="px-3.5 py-1 rounded-full text-xs font-bold text-[#FF5422] bg-orange-50 border border-orange-200 hover:bg-[#FF5422] hover:text-white transition-all cursor-pointer"
                                        >
                                            {isCafeteriaViewAll ? 'Show Carousel' : 'View All Photos'}
                                        </button>
                                    </div>

                                    {isCafeteriaViewAll ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { url: '/College 1.jpg', caption: 'SRIT Campus Cafeteria & Student Refreshment Zone' },
                                                { url: '/CollegeMain.jpg', caption: 'Main Campus Dining Hub' },
                                                { url: '/Campus.JPG', caption: 'Lush Campus Surroundings & Dining Walkway' },
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
                                                    { url: '/College 1.jpg', caption: 'SRIT Campus Cafeteria & Student Refreshment Zone' },
                                                    { url: '/CollegeMain.jpg', caption: 'Main Campus Dining Hub' },
                                                    { url: '/Campus.JPG', caption: 'Lush Campus Surroundings & Dining Walkway' },
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

export default CafeteriaPage;

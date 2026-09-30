import React, { useState } from 'react';
import {
    Leaf, Zap, Droplet, Shield, Award, ChevronRight, ChevronLeft,
    ChevronUp, ChevronDown
} from 'lucide-react';
import IframeWithLoader from '../../../components/common/IframeWithLoader';
import CampusLifeLayout from './CampusLifeLayout';

export const SustainableCampusPage: React.FC = () => {
    const [isSolarEnergyOpen, setIsSolarEnergyOpen] = useState(false);
    const [isSustainabilityReportsOpen, setIsSustainabilityReportsOpen] = useState(false);
    const [isSustainableViewAll, setIsSustainableViewAll] = useState(false);
    const [sustainableGalleryIndex, setSustainableGalleryIndex] = useState(0);

    return (
        <CampusLifeLayout activeSectionId="sustainable-campus">
            <>
                                {/* === 1. KEY STATISTICS CARDS (4 Cards with Warm Orange Shades & Hover Animations) === */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                                    {[
                                        {
                                            value: '100+ kWp',
                                            label: 'Solar Clean Energy',
                                            desc: 'Rooftop 50.40 kWp + 50.24 kWp solar systems',
                                            icon: Zap,
                                        },
                                        {
                                            value: '100% Green',
                                            label: 'Landscaped Grounds',
                                            desc: 'Lush tree canopy, gardens & rich biodiversity',
                                            icon: Leaf,
                                        },
                                        {
                                            value: 'Rainwater',
                                            label: 'Water Harvesting',
                                            desc: 'Recharge pits conserving groundwater levels',
                                            icon: Droplet,
                                        },
                                        {
                                            value: 'Zero Plastic',
                                            label: 'Eco Discipline',
                                            desc: 'Strict single-use plastic ban across campus',
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

                                {/* === 2. ABOUT SUSTAINABLE CAMPUS (Side-by-Side: Text Left + Explore Button, Image Right) === */}
                                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        <div className="lg:col-span-7 space-y-3.5">
                                            <div className="flex items-center gap-2.5 pb-1">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                                                    About <span className="text-[#FF5422]">Sustainable &amp; Green Campus</span>
                                                </h2>
                                            </div>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                <strong className="text-[#FF5422] font-bold">Srinivasa Ramanujan Institute of Technology</strong> is deeply committed to environmental conservation, renewable energy adoption, and sustainable development across its <strong className="text-[#FF5422] font-bold">25+ acre eco-friendly sanctuary</strong>.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                Key milestones include extensive rooftop <strong className="text-[#FF5422] font-bold">Solar Photovoltaic Energy (50.40 kWp + 50.24 kWp)</strong> systems supplying clean, green power and significantly reducing institutional carbon footprints.
                                            </p>

                                            <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 text-justify">
                                                SRIT conducts comprehensive <span className="text-[#FF5422] font-semibold">environmental &amp; green audits</span>, maintains hundreds of indigenous trees, practices <span className="text-[#FF5422] font-semibold">rainwater harvesting</span>, implements solid waste segregation, and enforces a strict <strong className="text-[#FF5422] font-bold">plastic-free campus policy</strong>.
                                            </p>

                                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsSolarEnergyOpen(!isSolarEnergyOpen)}
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5422] to-[#FF7A45] hover:from-[#e04515] hover:to-[#FF5422] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-102 active:scale-98 transition-all duration-200 cursor-pointer"
                                                >
                                                    <span>{isSolarEnergyOpen ? 'Hide Solar Sheets' : 'Explore Solar Energy Spreadsheets'}</span>
                                                    <ChevronRight size={16} />
                                                </button>

                                                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600">
                                                    <span className="px-2.5 py-1 rounded-md bg-orange-50 text-[#FF5422] border border-orange-200">
                                                        100+ kWp Solar Power
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                        Rainwater Harvesting
                                                    </span>
                                                    <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                        Zero Plastic Policy
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-5 self-stretch flex flex-col min-h-[280px]">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-orange-50/20 group relative flex-1 w-full min-h-[280px]">
                                                <img
                                                    src="/sustainable_hero.jpg"
                                                    alt="Eco-Friendly, Landscaped Green Campus & Solar Infrastructure at SRIT"
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
                                            Key Sustainability &amp; Clean Energy Highlights
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            {
                                                title: 'Rooftop Solar Photovoltaic Energy',
                                                desc: 'Capturing abundant solar radiation in Ananthapuramu to generate renewable electricity and feed clean green energy into the campus grid.',
                                                icon: Zap,
                                            },
                                            {
                                                title: 'Rainwater Harvesting Pits',
                                                desc: 'Strategically positioned reservoirs capturing monsoon runoff to recharge local aquifers and institutional borewells.',
                                                icon: Droplet,
                                            },
                                            {
                                                title: 'Green Landscaping & Tree Plantation',
                                                desc: 'Hundreds of shade-giving trees, flower beds, and medicinal plants nurtured across the 25+ acre serene campus.',
                                                icon: Leaf,
                                            },
                                            {
                                                title: 'Energy-Efficient LED Illumination',
                                                desc: 'Widespread deployment of low-power LED fixtures throughout administrative and academic blocks.',
                                                icon: Zap,
                                            },
                                            {
                                                title: 'Solid & Liquid Waste Segregation',
                                                desc: 'Systematic disposal and eco-friendly composting of organic waste to maintain pollution-free surroundings.',
                                                icon: Shield,
                                            },
                                            {
                                                title: 'Environmental & Green Audits',
                                                desc: 'Regular institutional audits evaluating energy conservation, carbon neutrality, and eco-friendly practices.',
                                                icon: Award,
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

                                {/* === 4. PRACTICES & FRAMEWORK GUIDELINES === */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <Zap size={18} className="text-[#FF5422]" />
                                            <span>Clean Energy &amp; Resource Conservation</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Solar Grid:</span>
                                                <span>50.40 kWp on Main Block Terrace + 50.24 kWp on Boys Hostel Terrace.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Water:</span>
                                                <span>Integrated rooftop and surface rainwater harvesting replenishment pits.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Lighting:</span>
                                                <span>100% LED deployment reducing institutional electric load significantly.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-orange-200/80 bg-gradient-to-br from-white to-orange-50/30 p-5 shadow-sm space-y-3">
                                        <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm sm:text-base border-b border-orange-100 pb-2">
                                            <Shield size={18} className="text-[#FF5422]" />
                                            <span>Environmental Policy &amp; Discipline</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-neutral-700">
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Plastic-Free:</span>
                                                <span>Strict institutional policy prohibiting single-use plastics across campus.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Green Cover:</span>
                                                <span>Rich botanical diversity with hundreds of shade-giving and fruit trees.</span>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-orange-100/70">
                                                <span className="font-bold text-[#FF5422] min-w-[75px]">Audits:</span>
                                                <span>Periodic environmental audits for carbon footprint and energy certification.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === 5. OFFICIAL ACCORDIONS: SOLAR ENERGY SPREADSHEET & AUDIT REPORTS === */}
                                <div className="space-y-4">
                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            type="button"
                                            onClick={() => setIsSolarEnergyOpen(!isSolarEnergyOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-[#111827] hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isSolarEnergyOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Solar Energy Data (Official Generation Sheet)
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isSolarEnergyOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isSolarEnergyOpen && (
                                            <div className="p-3 sm:p-5 bg-white w-full">
                                                <div className="w-full h-[750px] sm:h-[820px] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                    <IframeWithLoader
                                                        title="SRIT Solar Energy Data Official Sheet"
                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOYiWzEl6jy3tfGJuFG9_BN3gTOgiW-dNCc16_6jyLQk1DMdc9Ld8xSBKzyKSjXayy9JC07PWOCxf/pubhtml?widget=true&headers=false"
                                                        className="w-full h-full border-0"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="rounded-xl border-2 border-orange-200/90 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            type="button"
                                            onClick={() => setIsSustainabilityReportsOpen(!isSustainabilityReportsOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-[#111827] hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isSustainabilityReportsOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-white">
                                                    Institutional Audit Reports
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isSustainabilityReportsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isSustainabilityReportsOpen && (
                                            <div className="p-5 sm:p-6 bg-white space-y-4">
                                                <div className="grid sm:grid-cols-2 gap-3.5">
                                                    <div className="p-4 rounded-xl border border-orange-200/80 bg-orange-50/40">
                                                        <h4 className="font-bold text-sm text-neutral-900 mb-1 flex items-center gap-2">
                                                            <span className="w-2 h-2 rounded-full bg-[#FF5422] shrink-0" />
                                                            Institutional Green &amp; Energy Audit Report
                                                        </h4>
                                                        <p className="text-xs text-neutral-600 leading-relaxed">
                                                            Comprehensive institutional audit records certifying renewable energy generation, energy conservation parameters, and compliance with statutory green campus frameworks.
                                                        </p>
                                                    </div>
                                                    <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/70">
                                                        <h4 className="font-bold text-sm text-neutral-900 mb-1 flex items-center gap-2">
                                                            <span className="w-2 h-2 rounded-full bg-[#FF5422] shrink-0" />
                                                            Environment &amp; Water Conservation Audit
                                                        </h4>
                                                        <p className="text-xs text-neutral-600 leading-relaxed">
                                                            Institutional environmental evaluation confirming 100% surface rainwater recharging, zero hazardous emissions, and strict single-use plastic ban across campus.
                                                        </p>
                                                    </div>
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
                                                Solar Infrastructure &amp; Green Campus Gallery
                                            </h2>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsSustainableViewAll(!isSustainableViewAll)}
                                            className="px-3.5 py-1 rounded-full text-xs font-bold text-[#FF5422] bg-orange-50 border border-orange-200 hover:bg-[#FF5422] hover:text-white transition-all cursor-pointer"
                                        >
                                            {isSustainableViewAll ? 'Show Carousel' : 'View All 6 Photos'}
                                        </button>
                                    </div>

                                    {isSustainableViewAll ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { url: '/solar/solar_main_block.jpg', caption: 'SRIT Main Block Terrace Rooftop Solar Installation (50.40 kWp)' },
                                                { url: '/solar/solar_hostel_block.jpg', caption: 'SRIT Boys Hostel Terrace Solar Installation (50.24 kWp)' },
                                                { url: '/solar/solar_energy_production_chart.png', caption: 'Monthly Production Graph (2025)' },
                                                { url: '/solar/solar_yearly_production.png', caption: 'Daily Production Graph (July 2025)' },
                                                { url: '/solar/solar_canopy.jpg', caption: 'Rooftop Solar Photovoltaic Grid & Clean Energy Infrastructure' },
                                                { url: '/solar/sustainable_landscape.jpg', caption: 'Eco-Friendly Landscaped Botanical Grounds & Rainwater Catchment' },
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
                                                onClick={() => setSustainableGalleryIndex((prev) => (prev <= 0 ? 3 : prev - 1))}
                                                className="absolute -left-2.5 sm:-left-3.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-neutral-800 hover:text-white hover:bg-[#FF5422] hover:border-[#FF5422] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {[
                                                    { url: '/solar/solar_main_block.jpg', caption: 'SRIT Main Block Terrace Rooftop Solar Installation (50.40 kWp)' },
                                                    { url: '/solar/solar_hostel_block.jpg', caption: 'SRIT Boys Hostel Terrace Solar Installation (50.24 kWp)' },
                                                    { url: '/solar/solar_energy_production_chart.png', caption: 'Monthly Production Graph (2025)' },
                                                    { url: '/solar/solar_yearly_production.png', caption: 'Daily Production Graph (July 2025)' },
                                                    { url: '/solar/solar_canopy.jpg', caption: 'Rooftop Solar Photovoltaic Grid & Clean Energy Infrastructure' },
                                                    { url: '/solar/sustainable_landscape.jpg', caption: 'Eco-Friendly Landscaped Botanical Grounds & Rainwater Catchment' },
                                                ]
                                                    .slice(sustainableGalleryIndex, sustainableGalleryIndex + 3)
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
                                                onClick={() => setSustainableGalleryIndex((prev) => (prev >= 3 ? 0 : prev + 1))}
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

export default SustainableCampusPage;

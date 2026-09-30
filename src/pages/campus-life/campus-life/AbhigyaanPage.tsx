import React, { useState } from 'react';
import {
    ChevronUp, ChevronDown, ChevronRight
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';
import { campusLifeSections } from './types';
import IframeWithLoader from '../../../components/common/IframeWithLoader';

export const AbhigyaanPage: React.FC = () => {
    const [isStudentCategoriesOpen, setIsStudentCategoriesOpen] = useState(false);
    const [isStudentSlidesOpen, setIsStudentSlidesOpen] = useState(false);
    const [isFacultyCategoriesOpen, setIsFacultyCategoriesOpen] = useState(false);
    const [isFacultySlidesOpen, setIsFacultySlidesOpen] = useState(false);
    const [isAchieversReportsOpen, setIsAchieversReportsOpen] = useState(false);

    const activeSection = campusLifeSections.find((s) => s.id === 'abhigyaan') || campusLifeSections[0];

    return (
        <CampusLifeLayout activeSectionId="abhigyaan">
            <div className="space-y-6 w-full">
                                {/* === Key Statistics Cards === */}
                                {activeSection.keyStats && activeSection.keyStats.length > 0 && (
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                                        {activeSection.keyStats.map((stat, idx) => (
                                            <div
                                                key={idx}
                                                className="rounded-xl border border-neutral-200/80 bg-white p-4 shadow-sm hover:border-[#FF5422]/40 transition-colors"
                                            >
                                                <div className="font-serif text-2xl font-black text-[#FF5422]">
                                                    {stat.value}
                                                </div>
                                                <div className="mt-1 text-xs font-bold text-neutral-900">
                                                    {stat.label}
                                                </div>
                                                <div className="mt-0.5 text-[11px] text-neutral-500 leading-normal">
                                                    {stat.desc}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* === Detailed Overview: Exact Text from Official SRIT Achievers Day Page === */}
                                <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[26px] font-black text-neutral-900 tracking-tight">
                                            ABHIGYAAN (Achievers Day)
                                        </h2>
                                    </div>

                                    <div className="space-y-3 text-[14px] leading-relaxed text-neutral-700">
                                        {activeSection.overview && activeSection.overview.map((para, i) => (
                                            <p
                                                key={i}
                                                className={`text-left sm:text-justify ${
                                                    i === (activeSection.overview?.length || 1) - 1
                                                        ? 'p-3.5 rounded-xl border border-orange-200/80 bg-orange-50/50 text-neutral-900 font-medium'
                                                        : ''
                                                }`}
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* === Official Accordions Section (5 Interactive Items from SRIT) === */}
                                <div className="space-y-2 w-full">
                                    {/* --- 1. Student Reward Categories --- */}
                                    <div className="rounded-xl border border-neutral-900 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            onClick={() => setIsStudentCategoriesOpen(!isStudentCategoriesOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-black hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isStudentCategoriesOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-[#FF5422]">
                                                    Student Reward Categories
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isStudentCategoriesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isStudentCategoriesOpen && (
                                            <div className="p-5 sm:p-6 bg-white space-y-3">
                                                <p className="font-serif font-bold text-sm text-neutral-900">
                                                    Students who –
                                                </p>
                                                <div className="grid sm:grid-cols-2 gap-2.5">
                                                    {[
                                                        'Received placement offers with the highest pay package.',
                                                        'Secured placement in Reputed Companies.',
                                                        'Secured GATE Rank.',
                                                        'Admitted to various academic programmes in IITs or NITs.',
                                                        'Secured the highest CGPA and stood first in different branches.',
                                                        'Published their works in reputed journals.',
                                                        'Won the best paper award or presentation at conferences.',
                                                        'Won competitions in International, National and State level workshops, symposiums and technical fests.',
                                                        'Participated in International, National and State Level workshops, symposiums and technical fests.',
                                                        'Participated in NCC special drives and contributed directly or indirectly for society’s benefit.',
                                                        'Participated in NSS activities at National, Zonal and State Levels.',
                                                        'Won games and sports competitions at the National and University Levels.',
                                                        'Won prizes in cultural fests at the National, State or University Levels.',
                                                        'Completed NPTEL certificate courses with Elite Gold.',
                                                        'Innovation and Startups.',
                                                        'Won Hackathon competitions in various institutions at different levels.',
                                                        'Won Ideathon competitions in various institutes at different levels.',
                                                        'Secured Internship opportunities with reputed companies.',
                                                        'Students with exemplary performance in any other areas are also recognized.'
                                                    ].map((point, pIdx) => (
                                                        <div
                                                            key={pIdx}
                                                            className="flex items-start gap-2.5 p-3 rounded-lg border border-neutral-100 bg-neutral-50/70 hover:bg-orange-50/30 transition-colors"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                            <span className="text-xs sm:text-[13px] text-neutral-800 leading-relaxed">
                                                                {point}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>


                                    {/* --- 3. Faculty Reward Categories --- */}
                                    <div className="rounded-xl border border-neutral-900 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            onClick={() => setIsFacultyCategoriesOpen(!isFacultyCategoriesOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-black hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isFacultyCategoriesOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-[#FF5422]">
                                                    Faculty Reward Categories
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isFacultyCategoriesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isFacultyCategoriesOpen && (
                                            <div className="p-5 sm:p-6 bg-white space-y-3">
                                                <p className="font-serif font-bold text-sm text-neutral-900">
                                                    Faculty who —
                                                </p>
                                                <div className="grid sm:grid-cols-2 gap-2.5">
                                                    {[
                                                        'Received Project grants from International, National and State Level bodies.',
                                                        'Developed Product or Working Model.',
                                                        'Received Project work seed money grant.',
                                                        'Published and Received Patent grant.',
                                                        'Published their research work in reputed journals.',
                                                        'Published a book or chapters with a reputed publisher or Scopus index.',
                                                        'Won the best paper award or presentation at International, national, or university-level conferences.',
                                                        'Received any academic award or recognition from the Central or State governments or any recognized University or body.',
                                                        'Awarded Ph.D. from a University.',
                                                        'Acted as Chair or Co-chair in any International or National Conferences.',
                                                        'Invited as a Resource Person (offline/online) by any reputed national or international institutes.',
                                                        'Delivered talks (offline/online) in any reputed institutes.',
                                                        'Completed NPTEL certificate course with Elite Gold.',
                                                        'Faculty with exemplary performance in any other areas are also recognized.'
                                                    ].map((point, fIdx) => (
                                                        <div
                                                            key={fIdx}
                                                            className="flex items-start gap-2.5 p-3 rounded-lg border border-neutral-100 bg-neutral-50/70 hover:bg-orange-50/30 transition-colors"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] mt-1.5 shrink-0" />
                                                            <span className="text-xs sm:text-[13px] text-neutral-800 leading-relaxed">
                                                                {point}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>


                                    {/* --- 5. Year Wise Report (Google Spreadsheet Embed) --- */}
                                    <div className="rounded-xl border border-neutral-900 bg-white overflow-hidden shadow-sm w-full">
                                        <button
                                            onClick={() => setIsAchieversReportsOpen(!isAchieversReportsOpen)}
                                            className="w-full flex items-center justify-between px-5 py-4 bg-black hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                    {isAchieversReportsOpen ? '−' : '+'}
                                                </span>
                                                <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-[#FF5422]">
                                                    Year Wise Report
                                                </span>
                                            </div>
                                            <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                {isAchieversReportsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </div>
                                        </button>

                                        {isAchieversReportsOpen && (
                                            <div className="p-4 sm:p-6 bg-white space-y-4">
                                                <div className="rounded-lg bg-orange-50/80 border border-orange-200/80 p-3.5 flex flex-wrap items-center justify-between gap-3">
                                                    <div>
                                                        <h4 className="font-serif font-bold text-sm sm:text-base text-neutral-900">
                                                            Achievers Day – Year Wise Activity Reports
                                                        </h4>
                                                        <p className="text-xs text-neutral-600 mt-0.5">
                                                            Official consolidated reports and archives of student and faculty achievers.
                                                        </p>
                                                    </div>
                                                    <a
                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS1ucNyZAGkK7xRenY4hX-idp3r-soV79INzPtu26JWrIpoN-wBHgIPrWndilthHA/pubhtml"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-[#FF5422] text-white hover:bg-[#e04515] transition-colors shadow-sm"
                                                    >
                                                        <span>Open in Google Sheets</span>
                                                        <ChevronRight size={14} />
                                                    </a>
                                                </div>

                                                <div className="w-full h-[800px] rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                    <IframeWithLoader
                                                        title="Achievers Day Year Wise Reports Sheet"
                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS1ucNyZAGkK7xRenY4hX-idp3r-soV79INzPtu26JWrIpoN-wBHgIPrWndilthHA/pubhtml?widget=true&headers=false"
                                                        className="w-full h-full border-0"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* === Image Gallery (Authentic 10 Photos from Official SRIT Site) === */}
                                {activeSection.galleryImages && activeSection.galleryImages.length > 0 && (
                                    <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                        <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-4 rounded-full bg-[#FF5422]" />
                                                <h3 className="font-serif text-lg font-bold text-neutral-900">
                                                    IMAGE GALLERY
                                                </h3>
                                            </div>
                                            <span className="text-xs font-bold text-[#FF5422] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                                                {activeSection.galleryImages.length} Photographs
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {activeSection.galleryImages.map((img, gi) => (
                                                <div
                                                    key={gi}
                                                    className="group rounded-xl overflow-hidden border border-neutral-200/90 bg-neutral-100 shadow-sm hover:shadow-md hover:border-[#FF5422]/60 transition-all duration-300"
                                                >
                                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-orange-50/20">
                                                        <img
                                                            src={img.src || (img as any).url}
                                                            alt={img.caption || activeSection.title}
                                                            loading="lazy"
                                                            decoding="async"
                                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
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
        </CampusLifeLayout>
    );
};

export default AbhigyaanPage;

import React, { useState } from 'react';
import {
    ChevronUp, ChevronDown, ChevronRight
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';
import { campusLifeSections } from './types';
import IframeWithLoader from '../../../components/common/IframeWithLoader';

export const UdbhavaanPage: React.FC = () => {
    const [isGraduationReportsOpen, setIsGraduationReportsOpen] = useState(false);

    const activeSection = campusLifeSections.find((s) => s.id === 'udbhavaan') || campusLifeSections[0];

    return (
        <CampusLifeLayout activeSectionId="udbhavaan">
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

                                {/* === Detailed Overview: Exact Text from Official SRIT Graduation Day Page === */}
                                <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[26px] font-black text-neutral-900 tracking-tight">
                                            UDBHAVAAN (Graduation Day)
                                        </h2>
                                    </div>

                                    <div className="space-y-3.5 text-[14px] leading-relaxed text-neutral-700">
                                        {activeSection.overview && activeSection.overview.map((para, i) => (
                                            <p
                                                key={i}
                                                className={`text-left sm:text-justify ${
                                                    i === (activeSection.overview?.length || 1) - 1
                                                        ? 'p-4 rounded-xl border border-orange-200/80 bg-orange-50/50 text-neutral-900 font-medium'
                                                        : ''
                                                }`}
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* === Official Accordion: Reports (Official SRIT Graduation Day Excel Spreadsheet) === */}
                                <div className="rounded-xl border border-neutral-900 bg-white overflow-hidden shadow-sm w-full">
                                    <button
                                        onClick={() => setIsGraduationReportsOpen(!isGraduationReportsOpen)}
                                        className="w-full flex items-center justify-between px-5 py-4 bg-black hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                {isGraduationReportsOpen ? '−' : '+'}
                                            </span>
                                            <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-[#FF5422]">
                                                Reports
                                            </span>
                                        </div>
                                        <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                            {isGraduationReportsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </button>

                                    {/* Inside Accordion: Full-Width Excel Specification Sheet Table & Embed */}
                                    {isGraduationReportsOpen && (
                                        <div className="p-4 sm:p-6 bg-white w-full space-y-4">


                                            {/* Live Google Sheets Embed */}
                                            <div className="w-full h-[800px] rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                <IframeWithLoader
                                                    title="UDBHAVAAN Graduation Day Reports Sheet"
                                                    src="https://docs.google.com/spreadsheets/d/1k4vjz9HUkr85rK5v5ioH8WZXKi0P7CCbz-pIcUQCXDQ/pubhtml?widget=true&headers=false"
                                                    className="w-full h-full border-0"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
        </CampusLifeLayout>
    );
};

export default UdbhavaanPage;

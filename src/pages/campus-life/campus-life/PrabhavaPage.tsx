import React, { useState } from 'react';
import {
    ChevronUp, ChevronDown, ChevronRight
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';
import { campusLifeSections } from './types';
import IframeWithLoader from '../../../components/common/IframeWithLoader';

export const PrabhavaPage: React.FC = () => {
    const [isPrabhavaReportsOpen, setIsPrabhavaReportsOpen] = useState(false);

    const activeSection = campusLifeSections.find((s) => s.id === 'prabhava') || campusLifeSections[0];

    return (
        <CampusLifeLayout activeSectionId="prabhava">
            <div className="space-y-6 w-full">

                                {/* === Detailed Overview: Exact Text from Official SRIT Prabhava Page === */}
                                <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[26px] font-black text-neutral-900 tracking-tight">
                                            PRABHAVA (Freshers Day)
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

                                {/* === Official Accordion: Year Wise Event Reports (Live Google Spreadsheet Embed) === */}
                                <div className="rounded-xl border border-neutral-900 bg-white overflow-hidden shadow-sm w-full">
                                    <button
                                        onClick={() => setIsPrabhavaReportsOpen(!isPrabhavaReportsOpen)}
                                        className="w-full flex items-center justify-between px-5 py-4 bg-black hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                {isPrabhavaReportsOpen ? '−' : '+'}
                                            </span>
                                            <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-[#FF5422]">
                                                Year Wise Event Reports
                                            </span>
                                        </div>
                                        <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                            {isPrabhavaReportsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </button>

                                    {/* Inside Accordion: Full-Width Embedded Excel / Google Spreadsheet */}
                                    {isPrabhavaReportsOpen && (
                                        <div className="p-4 sm:p-6 bg-white w-full space-y-4">
                                            {/* Top Banner */}
                                            <div className="rounded-lg bg-orange-50/80 border border-orange-200/80 p-3.5 flex flex-wrap items-center justify-between gap-3">
                                                <div>
                                                    <h4 className="font-serif font-bold text-sm sm:text-base text-neutral-900">
                                                        Prabhava (Freshers Day) – Activity Reports
                                                    </h4>
                                                    <p className="text-xs text-neutral-600 mt-0.5">
                                                        Official annual freshers day archives and comprehensive event reports.
                                                    </p>
                                                </div>
                                                <a
                                                    href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSE33k0xRqXtvcdZErGoYQUN1taILxPEYXKVXvQEoUDUS08UaytBYucijczFkYYjKCTixtgnRtkzGdg/pubhtml"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-[#FF5422] text-white hover:bg-[#e04515] transition-colors shadow-sm"
                                                >
                                                    <span>Open in Google Sheets</span>
                                                    <ChevronRight size={14} />
                                                </a>
                                            </div>

                                            {/* Live Google Sheets Embed */}
                                            <div className="w-full h-[800px] rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                <IframeWithLoader
                                                    title="PRABHAVA Year Wise Event Reports Sheet"
                                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSE33k0xRqXtvcdZErGoYQUN1taILxPEYXKVXvQEoUDUS08UaytBYucijczFkYYjKCTixtgnRtkzGdg/pubhtml?widget=true&headers=false"
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

export default PrabhavaPage;
// EOF

import React, { useState } from 'react';
import {
    ChevronUp, ChevronDown, ChevronRight
} from 'lucide-react';
import CampusLifeLayout from './CampusLifeLayout';
import { campusLifeSections } from './types';
import IframeWithLoader from '../../../components/common/IframeWithLoader';

export const MathematicsDayPage: React.FC = () => {
    const [isMathPosterOpen, setIsMathPosterOpen] = useState(false);

    const activeSection = campusLifeSections.find((s) => s.id === 'mathematics-day') || campusLifeSections[0];

    return (
        <CampusLifeLayout activeSectionId="mathematics-day">
            <div className="space-y-6 w-full">

                                {/* === Detailed Overview: Exact Text from Official SRIT Mathematics Day Page === */}
                                <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                        {/* Left text */}
                                        <div className="lg:col-span-8 space-y-4">
                                            <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                                <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[26px] font-black text-neutral-900 tracking-tight">
                                                    MATHEMATICS DAY
                                                </h2>
                                            </div>

                                            <div className="space-y-3.5 text-[14px] leading-relaxed text-neutral-700">
                                                <p className="text-left sm:text-justify font-medium text-neutral-900">
                                                    We are thrilled to announce the upcoming <span className="text-[#FF5422] font-bold">Srinivasa Ramanujan Intelligence Test</span> at Srinivasa Ramanujan Institute of Technology. This annual event is a tribute to the legendary mathematician Srinivasa Ramanujan and is open to all Intermediate 2nd year students.
                                                </p>

                                                <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/70 space-y-1.5">
                                                    <h4 className="font-serif font-bold text-sm text-neutral-900 flex items-center gap-2">
                                                        <span className="w-1.5 h-3.5 rounded-full bg-[#FF5422]" />
                                                        About the Test:
                                                    </h4>
                                                    <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed pl-3.5">
                                                        The Srinivasa Ramanujan Intelligence Test is a platform for young minds to showcase their mathematical prowess and problem-solving skills. The test is designed to inspire and identify the brightest minds among the intermediate students.
                                                    </p>
                                                </div>

                                                <div className="p-4 rounded-xl border border-orange-200/80 bg-orange-50/50 space-y-1.5">
                                                    <h4 className="font-serif font-bold text-sm text-neutral-900 flex items-center gap-2">
                                                        <span className="w-1.5 h-3.5 rounded-full bg-[#FF5422]" />
                                                        Join us in Celebrating Mathematics:
                                                    </h4>
                                                    <p className="text-xs sm:text-[13px] text-neutral-800 leading-relaxed pl-3.5">
                                                        Let's celebrate the spirit of Srinivasa Ramanujan's legacy together. Join us in promoting and encouraging the pursuit of mathematical excellence. We look forward to witnessing the brilliance and innovation that our young mathematicians will bring to the Srinivasa Ramanujan Intelligence Test!
                                                    </p>
                                                </div>

                                                <p className="p-3.5 rounded-xl border border-neutral-200 bg-white text-xs sm:text-[13px] text-neutral-600 italic">
                                                    SRIT has a long tradition of conducting "Srinivasa Ramanujan Intelligence Test" every year to commemorate the great Mathematician of all times! Please find below the details on how to register for the competition.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right Image */}
                                        <div className="lg:col-span-4 self-stretch flex flex-col justify-center">
                                            <div className="rounded-xl overflow-hidden border-2 border-orange-200/90 shadow-md bg-orange-50/20 group relative w-full aspect-[3/4] flex items-center justify-center p-2">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Srinivasa_Ramanujan_-_OPC_-_1.jpg/220px-Srinivasa_Ramanujan_-_OPC_-_1.jpg"
                                                    alt="Srinivasa Ramanujan"
                                                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* === Official Notification & Registration Poster Viewer === */}
                                <div className="rounded-xl border border-neutral-900 bg-white overflow-hidden shadow-sm w-full">
                                    <button
                                        onClick={() => setIsMathPosterOpen(!isMathPosterOpen)}
                                        className="w-full flex items-center justify-between px-5 py-4 bg-black hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-[#FF5422] font-bold text-xl leading-none">
                                                {isMathPosterOpen ? '−' : '+'}
                                            </span>
                                            <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-[#FF5422]">
                                                Srinivasa Ramanujan Intelligence Test – Details &amp; Registration Poster
                                            </span>
                                        </div>
                                        <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                            {isMathPosterOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </button>

                                    {/* Inside Accordion: Full-Width Embedded Poster / Preview Document */}
                                    {isMathPosterOpen && (
                                        <div className="p-4 sm:p-6 bg-white w-full space-y-4">
                                            {/* Top Banner */}
                                            <div className="rounded-lg bg-orange-50/80 border border-orange-200/80 p-3.5 flex flex-wrap items-center justify-between gap-3">
                                                <div>
                                                    <h4 className="font-serif font-bold text-sm sm:text-base text-neutral-900">
                                                        Intelligence Test Notification &amp; Registration Guidelines
                                                    </h4>
                                                    <p className="text-xs text-neutral-600 mt-0.5">
                                                        Official event brochure, registration procedure, and competitive guidelines.
                                                    </p>
                                                </div>
                                                <a
                                                    href="https://drive.google.com/file/d/1k2BeTed_4LFiazGL_BE3cXoCq_1aQtDz/view?usp=sharing"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-[#FF5422] text-white hover:bg-[#e04515] transition-colors shadow-sm"
                                                >
                                                    <span>Open in Google Drive</span>
                                                    <ChevronRight size={14} />
                                                </a>
                                            </div>

                                            {/* Live Google Drive Document Iframe Embed */}
                                            <div className="w-full h-[800px] rounded-lg overflow-hidden border border-neutral-200 bg-neutral-900 shadow-inner">
                                                <IframeWithLoader
                                                    title="Srinivasa Ramanujan Intelligence Test Poster"
                                                    src="https://drive.google.com/file/d/1k2BeTed_4LFiazGL_BE3cXoCq_1aQtDz/preview"
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

export default MathematicsDayPage;

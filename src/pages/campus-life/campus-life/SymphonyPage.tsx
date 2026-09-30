import React from 'react';
import CampusLifeLayout from './CampusLifeLayout';
import { campusLifeSections } from './types';

export const SymphonyPage: React.FC = () => {
    const activeSection = campusLifeSections.find((s) => s.id === 'symphony') || campusLifeSections[0];

    return (
        <CampusLifeLayout activeSectionId="symphony">
            {/* Overview text */}
            <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                    <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                        About <span className="text-[#FF5422]">{activeSection.title}</span>
                    </h2>
                </div>
                <div className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-700 space-y-3 text-justify">
                    {activeSection.overview && activeSection.overview.map((p, pi) => (
                        <p key={pi}>{p}</p>
                    ))}
                </div>
            </div>

            {/* Features & Highlights */}
            {activeSection.features && activeSection.features.length > 0 && (
                <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                        <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                            Key Highlights &amp; Festivities
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeSection.features.map((feat, fi) => (
                            <div
                                key={fi}
                                className="rounded-xl border border-orange-100 bg-gradient-to-br from-white to-orange-50/20 p-4 hover:border-orange-300 transition-all duration-200"
                            >
                                <div className="font-bold text-sm text-neutral-900 mb-1 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422]" />
                                    <span>{typeof feat === 'string' ? feat : (feat as any).title}</span>
                                </div>
                                {typeof feat !== 'string' && (feat as any).desc && (
                                    <p className="text-xs text-neutral-600 leading-relaxed pl-3.5">
                                        {(feat as any).desc}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Symphony Live YouTube Video Embed */}
            <div className="rounded-xl border border-neutral-200/60 bg-white p-5 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                    <h2 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                        SYMPHONY Annual Celebrations Live Stream
                    </h2>
                </div>
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md border border-neutral-200">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/videoseries?list=PLr_y9Hh-c7X_j9zH1c_9G9L5U4oY-9m3y"
                        title="SRIT Symphony Annual Day Celebrations"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
        </CampusLifeLayout>
    );
};

export default SymphonyPage;

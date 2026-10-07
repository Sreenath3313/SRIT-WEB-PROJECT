import React from 'react';
import type { DepartmentData } from '../../index';

interface MECAboutProps {
    dept: DepartmentData;
}

const MECAbout: React.FC<MECAboutProps> = ({ dept }) => {
    return (
        /* ── MEC Layout — Contact Us, Featured Program & Achievements cards removed ── */
        <div className="space-y-10">
            <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-6 text-neutral-dark flex flex-wrap items-center gap-3 sm:gap-4 tracking-tight">
                    <span className="w-10 h-[3px] bg-primary rounded-full"></span>
                    ABOUT THE DEPARTMENT
                </h2>

                <div className="text-neutral-600 text-base lg:text-lg leading-[1.85] space-y-5 mt-8 text-justify">
                    {dept.description.map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))}
                </div>
            </div>

            <div className="bg-neutral-100 rounded-xl p-6 sm:p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-primary font-black text-sm lg:text-[15px] uppercase tracking-[0.2em] mb-5">Vision</h3>
                        <p className="text-neutral-600 text-[15px] lg:text-[17px] leading-[1.8] text-justify">{dept.vision}</p>
                    </div>
                    <div>
                        <h3 className="text-primary font-black text-sm lg:text-[15px] uppercase tracking-[0.2em] mb-5">Mission</h3>
                        <div className="text-neutral-600 text-[15px] lg:text-[17px] leading-[1.8] space-y-3 text-justify">
                            {dept.mission.map((m) => <p key={m.id}>{m.text}</p>)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100 flex flex-col sm:flex-row gap-8 lg:gap-10 items-center sm:items-start">
                {dept.hodMessage.image ? (
                    <img src={dept.hodMessage.image} alt={dept.hodMessage.name} className="w-32 h-32 lg:w-44 lg:h-44 rounded-full object-cover shrink-0 shadow-lg" loading="lazy" />
                ) : (
                    <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 shadow-inner">
                        <span className="text-6xl text-neutral-300 font-serif">{dept.hodMessage.name.charAt(0)}</span>
                    </div>
                )}
                <div className="flex-1 text-center sm:text-left pt-2">
                    <h3 className="font-serif text-3xl font-bold text-neutral-dark">{dept.hodMessage.name}</h3>
                    <p className="text-primary text-xs lg:text-[13px] font-bold uppercase tracking-[0.2em] mt-3 mb-6">{dept.hodMessage.designation}</p>
                    <p className="text-neutral-600 italic text-base lg:text-lg leading-[1.8] mb-8 font-serif text-justify">&ldquo;{dept.hodMessage.message}&rdquo;</p>
                    <p className="text-neutral-400 text-sm lg:text-[15px] font-semibold">Dept. of {dept.name}</p>
                </div>
            </div>
        </div>
    );
};

export default MECAbout;

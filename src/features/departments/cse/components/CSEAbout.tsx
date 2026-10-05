import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';
import type { DepartmentData } from '../../shared/types';

interface CSEAboutProps {
    dept: DepartmentData;
}

const CSEAbout: React.FC<CSEAboutProps> = ({ dept }) => {
    return (
        <div className="space-y-8">
            {/* Top Section: Image (Left) + Content (Right) */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 lg:gap-8">
                {/* Left Column: Image */}
                <div className="flex flex-col h-full space-y-6">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-neutral-dark flex flex-wrap items-center gap-3 sm:gap-4 tracking-tight">
                        <span className="w-10 h-[3px] bg-primary rounded-full"></span>
                        ABOUT THE DEPARTMENT
                    </h2>
                    <div className="relative flex-1 rounded-xl overflow-hidden shadow-md max-w-2xl min-h-[250px]">
                        <img src="/cse_image.jpg" alt={dept.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                        <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 text-[#FF5422] text-[11px] font-bold tracking-[0.18em] uppercase rounded shadow-sm">
                            FEATURED PROGRAM
                        </span>
                        <span className="absolute top-4 right-4 text-white/90 font-serif text-2xl font-bold drop-shadow-md">
                            {dept.code}
                        </span>
                    </div>
                </div>

                {/* Right Column: Description */}
                <div className="space-y-8 xl:pt-16">
                    {/* Department Description */}
                    <div className="space-y-5">
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-dark">{dept.name}</h3>
                        <div className="text-neutral-700 text-[15px] lg:text-[16px] font-medium leading-[1.8] text-justify space-y-4">
                            {dept.description.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                        <div className="pt-2">
                            <a
                                href=""
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 hover:opacity-90 bg-[#FF5422] text-white shadow-sm hover:shadow"
                            >
                                Know More
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M3 8H13M13 8L9 4M13 8L9 12"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: Vision, Mission & Achievements Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
                {/* Vision & Mission */}
                <div className="flex flex-col gap-3">
                    <div className="bg-white rounded-xl p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100">
                        <h3 className="text-[#FF5422] font-black text-base lg:text-lg uppercase tracking-[0.2em] mb-2">Vision</h3>
                        <p className="text-neutral-700 text-[15px] lg:text-[16px] leading-[1.7] text-justify">
                            {dept.vision}
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100">
                        <h3 className="text-[#FF5422] font-black text-base lg:text-lg uppercase tracking-[0.2em] mb-2">Mission</h3>
                        <div className="text-neutral-700 text-[15px] lg:text-[16px] leading-[1.7] space-y-4 text-justify">
                            {dept.mission.map((m) => (
                                <p key={m.id}>
                                    <strong className="text-neutral-900 font-bold">{m.id.replace('DM', 'DM ')}:</strong> {m.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100 h-full">
                    <h3 className="font-serif text-2xl lg:text-3xl font-black flex items-center gap-3 mb-6 text-neutral-dark">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        ACHIEVEMENTS
                    </h3>
                    <div className="space-y-4 lg:space-y-5">
                        {dept.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                                <p className="text-neutral-700 text-[15px] lg:text-[16px] font-medium leading-[1.7]">
                                    {highlight}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: HOD Profile & Contact Us Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-4 lg:gap-6">
                {/* HOD Profile */}
                <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start h-full">
                    {dept.hodMessage.image ? (
                        <img
                            src={dept.hodMessage.image}
                            alt={dept.hodMessage.name}
                            className="w-28 h-28 lg:w-40 lg:h-40 rounded-full object-cover shrink-0 shadow-lg"
                        loading="lazy" />
                    ) : (
                        <div className="w-28 h-28 lg:w-40 lg:h-40 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 shadow-inner">
                            <span className="text-5xl text-neutral-300 font-serif">{dept.hodMessage.name.charAt(0)}</span>
                        </div>
                    )}
                    <div className="flex-1 text-left pt-2">
                        <h3 className="font-serif text-3xl font-black text-neutral-dark">{dept.hodMessage.name}</h3>
                        <p className="text-primary text-sm font-black uppercase tracking-[0.2em] mt-2 mb-4">
                            {dept.hodMessage.designation}
                        </p>
                        <p className="text-neutral-700 italic text-[15px] lg:text-[16px] leading-[1.7] mb-5 font-serif text-left">
                            &ldquo;{dept.hodMessage.message}&rdquo;
                        </p>
                        <p className="text-neutral-400 text-xs lg:text-[13px] font-semibold">
                            Dept. of {dept.name}
                        </p>
                    </div>
                </div>

                {/* Contact Us Card */}
                <div className="bg-primary text-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-primary/20 flex flex-col h-full justify-between">
                    <div>
                        <h3 className="font-serif text-2xl lg:text-3xl font-black flex items-center gap-3 mb-8">
                            <span className="w-2 h-2 rounded-full bg-white"></span>
                            CONTACT US
                        </h3>
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-white/90 shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">Email</p>
                                    <p className="text-[14px] text-white font-semibold">{dept.slug}@srit.ac.in</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-white/90 shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">Phone</p>
                                    <p className="text-[14px] text-white font-semibold">+91 98765 43214</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-white/90 shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">Location</p>
                                    <p className="text-[14px] text-white font-semibold leading-relaxed">{dept.code} Block, SRIT Campus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-3.5 rounded-xl bg-white hover:bg-white/90 transition-colors text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                        View on Map
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CSEAbout;

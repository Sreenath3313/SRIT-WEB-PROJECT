import React from 'react';
import { Mail, Phone, MapPin, Award, Users, Microscope, GraduationCap, Briefcase } from 'lucide-react';
import type { DepartmentData } from '../../data/departments';

interface DepartmentAboutProps {
    dept: DepartmentData;
}

const DepartmentAbout: React.FC<DepartmentAboutProps> = ({ dept }) => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-10">
                {/* About Title & Description */}
                <div>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-6 text-neutral-dark flex flex-wrap items-center gap-3 sm:gap-4 tracking-tight">
                        <span className="w-10 h-[3px] bg-primary rounded-full"></span>
                        ABOUT THE DEPARTMENT
                    </h2>
                    {/* Featured Program Card */}
                    <div className="mt-6 mb-8 bg-white rounded-2xl shadow-md border border-neutral-100 overflow-hidden flex flex-col lg:flex-row">
                        {/* Image */}
                        <div className="lg:w-5/12 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                            <img
                                src={dept.image}
                                alt={dept.name}
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-md text-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded shadow-sm">
                                Featured Program
                            </span>
                            <span className="absolute top-4 right-4 text-white/80 font-serif text-2xl font-bold">
                                {dept.code}
                            </span>
                        </div>
                        {/* Content */}
                        <div className="lg:w-7/12 p-6 lg:p-10 flex flex-col justify-center">
                            <h3 className="font-serif text-xl lg:text-2xl font-bold text-neutral-dark mb-3">
                                {dept.name}
                            </h3>
                            <p className="text-neutral-600 text-[14px] leading-[1.8] mb-6 text-justify">
                                {dept.description[0]}
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 pb-6 border-b border-neutral-100">
                                <div>
                                    <div className="flex items-center gap-1.5 text-primary mb-1.5">
                                        <Users className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-neutral-500">Faculty</span>
                                    </div>
                                    <div className="text-lg font-bold text-neutral-dark">{dept.stats.faculty}</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 text-primary mb-1.5">
                                        <Microscope className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-neutral-500">Labs</span>
                                    </div>
                                    <div className="text-lg font-bold text-neutral-dark">{dept.stats.labs}</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 text-primary mb-1.5">
                                        <GraduationCap className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-neutral-500">Students</span>
                                    </div>
                                    <div className="text-lg font-bold text-neutral-dark">{dept.stats.students}</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 text-primary mb-1.5">
                                        <Briefcase className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-neutral-500">Placed</span>
                                    </div>
                                    <div className="text-lg font-bold text-neutral-dark">{dept.stats.placement}</div>
                                </div>
                            </div>

                            {/* Research Focus Areas */}
                            <div>
                                <span className="block text-[10px] font-bold tracking-[0.1em] uppercase text-neutral-400 mb-3">
                                    Research Focus Areas
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {dept.researchAreas.map(area => (
                                        <span key={area} className="px-3 py-1.5 bg-primary/5 border border-primary/20 text-neutral-700 text-[12px] font-medium rounded-full">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-neutral-600 text-base lg:text-lg leading-[1.85] space-y-5 mt-8 text-justify">
                        {dept.description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="bg-neutral-100 rounded-3xl p-6 sm:p-8 lg:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-primary font-black text-sm lg:text-[15px] uppercase tracking-[0.2em] mb-5">Vision</h3>
                            <p className="text-neutral-600 text-[15px] lg:text-[17px] leading-[1.8] text-justify">
                                {dept.vision}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-primary font-black text-sm lg:text-[15px] uppercase tracking-[0.2em] mb-5">Mission</h3>
                            <div className="text-neutral-600 text-[15px] lg:text-[17px] leading-[1.8] space-y-3 text-justify">
                                {dept.mission.map((m) => (
                                    <p key={m.id}>{m.text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* HOD Profile */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100 flex flex-col sm:flex-row gap-8 lg:gap-10 items-center sm:items-start">
                    {dept.hodMessage.image ? (
                        <img 
                            src={dept.hodMessage.image} 
                            alt={dept.hodMessage.name} 
                            className="w-32 h-32 lg:w-44 lg:h-44 rounded-full object-cover shrink-0 shadow-lg"
                        />
                    ) : (
                        <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 shadow-inner">
                            <span className="text-6xl text-neutral-300 font-serif">{dept.hodMessage.name.charAt(0)}</span>
                        </div>
                    )}
                    <div className="flex-1 text-center sm:text-left pt-2">
                        <h3 className="font-serif text-3xl font-bold text-neutral-dark">{dept.hodMessage.name}</h3>
                        <p className="text-primary text-xs lg:text-[13px] font-bold uppercase tracking-[0.2em] mt-3 mb-6">
                            {dept.hodMessage.designation}
                        </p>
                        <p className="text-neutral-600 italic text-base lg:text-lg leading-[1.8] mb-8 font-serif text-justify">
                            "{dept.hodMessage.message}"
                        </p>
                        <p className="text-neutral-400 text-sm lg:text-[15px] font-semibold">
                            Dept. of {dept.name}
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
                {/* Contact Us Card */}
                <div className="bg-primary text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-primary/30">
                    <h3 className="font-serif text-2xl font-bold flex items-center gap-3 mb-10">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        CONTACT US
                    </h3>
                    
                    <div className="space-y-8 mb-10">
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-white/90 shrink-0 mt-0.5" strokeWidth={1.5} />
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">Email</p>
                                <p className="text-base text-white font-semibold">{dept.slug}@srit.ac.in</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-white/90 shrink-0 mt-0.5" strokeWidth={1.5} />
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">Phone</p>
                                <p className="text-base text-white font-semibold">+91 98765 43214</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-white/90 shrink-0 mt-0.5" strokeWidth={1.5} />
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">Location</p>
                                <p className="text-base text-white font-semibold leading-relaxed">{dept.code} Block, SRIT Campus</p>
                            </div>
                        </div>
                    </div>
                    
                    <button className="w-full py-4 rounded-xl bg-white hover:bg-white/90 transition-colors text-xs font-black uppercase tracking-[0.2em] text-primary">
                        View on Map
                    </button>
                </div>

                {/* Achievements Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100">
                    <h3 className="font-serif text-2xl font-bold flex items-center gap-3 mb-8 text-neutral-dark">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        ACHIEVEMENTS
                    </h3>
                    
                    <div className="space-y-6">
                        {dept.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                                <p className="text-neutral-600 text-[15px] lg:text-[17px] font-medium leading-[1.7]">
                                    {highlight}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentAbout;

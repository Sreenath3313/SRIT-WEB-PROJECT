import React, { useState } from 'react';
import { GraduationCap, Calendar, Users, ArrowRight } from 'lucide-react';
import type { FacultyMember } from '../../data/departments';

interface FacultyProfilesProps {
    faculty: FacultyMember[];
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'csm';
}

const avatarPlaceholder = (name: string) => {
    // Filter out title tokens (Dr., Mr., Mrs., Ms., Prof.) and single-character initials with dots
    const cleanTokens = name
        .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Prof\.)\s*/i, '')
        .split(' ')
        .filter((n) => n.length > 1 && !n.endsWith('.'));

    const initials = cleanTokens
        .slice(0, 2)
        .map((n) => n[0])
        .join('');

    return initials || name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Prof\.)\s*/i, '').slice(0, 2).toUpperCase();
};

export const FacultyProfiles: React.FC<FacultyProfilesProps> = ({
    faculty,
    subtitle = 'Meet our experienced and dedicated faculty members who drive academic excellence in Artificial Intelligence and Machine Learning.',
    variant = 'default',
}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Categorization logic for filter pills
    const getCategory = (designation: string) => {
        const lower = designation.toLowerCase();
        if (lower.includes('associate')) return 'Associate Professor';
        if (lower.includes('assistant')) return 'Assistant Professor';
        if (lower.includes('professor')) return 'Professor';
        return 'Other';
    };

    const categories = [
        { label: 'All', count: faculty.length },
        { label: 'Professor', count: faculty.filter((f) => getCategory(f.designation) === 'Professor').length },
        { label: 'Associate Professor', count: faculty.filter((f) => getCategory(f.designation) === 'Associate Professor').length },
        { label: 'Assistant Professor', count: faculty.filter((f) => getCategory(f.designation) === 'Assistant Professor').length },
    ].filter((cat) => cat.label === 'All' || cat.count > 0);

    const filteredFaculty = selectedCategory === 'All'
        ? faculty
        : faculty.filter((f) => getCategory(f.designation) === selectedCategory);

    return (
        <div className="w-full space-y-10">
            {/* Header Area */}
            <div className="text-center max-w-3xl mx-auto pt-2">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF5422] mb-2">
                    OUR TEAM
                </span>
                
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                    Faculty <span className="text-[#FF5422]">Profiles</span>
                </h2>

                <div className="w-12 h-1 bg-[#FF5422] rounded-full mx-auto mt-3 mb-4" />

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
                    {subtitle}
                </p>

                {/* Filter Pills / Categories */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-7">
                    {categories.map((cat) => {
                        const isActive = selectedCategory === cat.label;
                        return (
                            <button
                                key={cat.label}
                                type="button"
                                onClick={() => setSelectedCategory(cat.label)}
                                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                                    isActive
                                        ? 'bg-[#FF5422] text-white shadow-md shadow-[#FF5422]/25 scale-105'
                                        : 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 hover:text-neutral-900'
                                }`}
                            >
                                {cat.label} ({cat.count})
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Responsive Faculty Grid - Spacious & High-Definition 3-Column Grid */}
            <div className={`grid gap-7 sm:gap-8 lg:gap-9 mx-auto ${
                variant === 'csm'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1240px]'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1240px]'
            }`}>
                {filteredFaculty.map((member, index) => {
                    if (variant === 'csm') {
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-[0_8px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(255,84,34,0.16)] overflow-hidden flex flex-col justify-between h-[480px] sm:h-[520px] md:h-[550px] transition-all duration-300 hover:-translate-y-2 group"
                            >
                                {/* Large Diamond-Cut Photo Container */}
                                <div className="relative w-full h-[240px] sm:h-[270px] md:h-[290px] bg-neutral-100 overflow-hidden shrink-0">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 via-orange-50/40 to-neutral-200 text-[#FF5422]">
                                            <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-serif font-bold text-[#FF5422] border-2 border-orange-200">
                                                {avatarPlaceholder(member.name)}
                                            </div>
                                        </div>
                                    )}

                                    {/* Balanced Orange Diamond Cut / Chevron Divider - cleanly framing chest/shoulders without cutting neck */}
                                    <svg
                                        className="absolute bottom-0 left-0 w-full h-10 sm:h-11 pointer-events-none drop-shadow-sm z-10"
                                        viewBox="0 0 400 60"
                                        preserveAspectRatio="none"
                                    >
                                        <path d="M 0,60 L 0,22 L 200,48 L 400,22 L 400,60 Z" fill="#ffffff" />
                                        <path d="M 0,22 L 200,48 L 400,22" fill="none" stroke="#FF5422" strokeWidth="3.2" strokeLinejoin="round" />
                                    </svg>

                                    {/* Center Orange Badge at the Diamond Apex */}
                                    <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#FF5422] border-2 border-white shadow-md flex items-center justify-center text-white">
                                        <GraduationCap className="w-4 h-4 text-white" strokeWidth={2.4} />
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="px-6 pt-5 pb-4 flex-1 flex flex-col justify-between text-center overflow-hidden">
                                    <div>
                                        {/* Faculty Name */}
                                        <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-neutral-900 group-hover:text-[#FF5422] transition-colors leading-snug mb-1 min-h-[46px] flex items-center justify-center">
                                            {member.name}
                                        </h3>

                                        {/* Designation */}
                                        <p className="text-[#FF5422] font-semibold text-sm sm:text-[14.5px] text-center mb-3.5 leading-tight tracking-wide">
                                            {member.designation}
                                        </p>
                                    </div>

                                    {/* Information List */}
                                    <div className="space-y-2.5 text-neutral-700 text-xs sm:text-[13.5px] text-left mx-auto w-full px-2 pb-1">
                                        {/* Qualification */}
                                        <div className="flex items-center gap-3">
                                            <GraduationCap className="w-4 h-4 text-neutral-600 shrink-0" strokeWidth={2.2} />
                                            <span className="font-medium text-neutral-800 truncate" title={member.qualification}>{member.qualification}</span>
                                        </div>

                                        {/* Date of Joining */}
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-4 h-4 text-neutral-600 shrink-0" strokeWidth={2.2} />
                                            <span className="font-medium text-neutral-800">{member.joiningDate || '01-06-2020'}</span>
                                        </div>

                                        {/* Association / Employment Status */}
                                        <div className="flex items-center gap-3">
                                            <Users className="w-4 h-4 text-neutral-600 shrink-0" strokeWidth={2.2} />
                                            <span className="font-medium text-neutral-800">{member.association || 'Regular'}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Full-Width Bottom Action Button */}
                                <div className="w-full shrink-0">
                                    {member.profileUrl ? (
                                        <a
                                            href={member.profileUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full h-12 sm:h-[50px] bg-[#FF5422] hover:bg-[#E04515] active:bg-[#c9390d] text-white font-semibold text-sm sm:text-[14.5px] flex items-center justify-center gap-2 transition-colors duration-200 shadow-inner group/btn"
                                        >
                                            <span>View Profile</span>
                                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth={2.2} />
                                        </a>
                                    ) : (
                                        <button
                                            type="button"
                                            className="w-full h-12 sm:h-[50px] bg-[#FF5422] hover:bg-[#E04515] active:bg-[#c9390d] text-white font-semibold text-sm sm:text-[14.5px] flex items-center justify-center gap-2 transition-colors duration-200 shadow-inner group/btn"
                                        >
                                            <span>View Profile</span>
                                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth={2.2} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    }

                    // Default Card Variant for other departments
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 hover:border-[#FF5422]/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(255,84,34,0.12)] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden group"
                        >
                            {/* Subtle Top Accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF5422]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div>
                                {/* Faculty Image / Avatar */}
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-neutral-100 group-hover:border-[#FF5422]/40 shadow-sm bg-neutral-50 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 relative">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-xl sm:text-2xl font-serif font-bold text-[#FF5422] bg-[#FDEEE9]">
                                            {avatarPlaceholder(member.name)}
                                        </div>
                                    )}
                                </div>

                                {/* Faculty Name */}
                                <h3 className="font-serif text-lg sm:text-[19px] font-bold text-neutral-900 group-hover:text-[#FF5422] transition-colors leading-snug text-center mb-1 min-h-[48px] flex items-center justify-center">
                                    {member.name}
                                </h3>

                                {/* Designation */}
                                <p className="text-[#FF5422] font-semibold text-sm sm:text-[14.5px] text-center mb-5">
                                    {member.designation}
                                </p>

                                {/* Faculty Information List */}
                                <div className="space-y-3 pt-4 border-t border-neutral-100/90 text-neutral-700 text-xs sm:text-[13.5px]">
                                    {/* Qualification */}
                                    <div className="flex items-center gap-3">
                                        <GraduationCap className="w-4 h-4 text-neutral-600 shrink-0" strokeWidth={2.2} />
                                        <span className="font-medium text-neutral-800">{member.qualification}</span>
                                    </div>

                                    {/* Date of Joining */}
                                    {member.joiningDate && (
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-4 h-4 text-neutral-600 shrink-0" strokeWidth={2.2} />
                                            <span className="font-medium text-neutral-800">{member.joiningDate}</span>
                                        </div>
                                    )}

                                    {/* Nature of Association */}
                                    <div className="flex items-center gap-3">
                                        <Users className="w-4 h-4 text-neutral-600 shrink-0" strokeWidth={2.2} />
                                        <span className="font-medium text-neutral-800">{member.association || 'Regular'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* View Profile Button */}
                            <div className="mt-6 pt-2">
                                {member.profileUrl ? (
                                    <a
                                        href={member.profileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[#FF5422] hover:bg-[#E04515] text-white font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-[#FF5422]/25 transition-all duration-200 group/btn"
                                    >
                                        <span>View Profile</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth={2.2} />
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        className="w-full bg-[#FF5422] hover:bg-[#E04515] text-white font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-[#FF5422]/25 transition-all duration-200 group/btn"
                                    >
                                        <span>View Profile</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth={2.2} />
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FacultyProfiles;

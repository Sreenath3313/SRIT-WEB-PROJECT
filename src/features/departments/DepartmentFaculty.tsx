import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { DepartmentData } from '../../data/departments';
import DepartmentAccordion from '../../components/common/DepartmentAccordion';
import FacultyProfiles from './FacultyProfiles';

interface DepartmentFacultyProps {
    dept: DepartmentData;
}

const avatarPlaceholder = (name: string) => {
    // Filter out single-character tokens (like 'K.') but keep meaningful words
    const initials = name
        .split(' ')
        .filter((n) => n.length > 1 && !n.endsWith('.'))
        .slice(0, 2)
        .map((n) => n[0])
        .join('');
    return initials || name.slice(0, 2).toUpperCase();
};

const DepartmentFaculty: React.FC<DepartmentFacultyProps> = ({ dept }) => {
    if (dept.slug === 'csm') {
        const items = [
            {
                title: 'Faculty Profiles',
                content: (
                    <FacultyProfiles
                        faculty={dept.faculty}
                        title="Faculty Profiles"
                        subtitle="Meet our experienced and dedicated faculty members who drive academic excellence in Artificial Intelligence and Machine Learning."
                        variant="csm"
                    />
                ),
            },
            { title: 'Publications' },
            { title: 'Patents' },
            { title: 'Book and Book Chapters' },
            { title: 'Faculty Certifications/NPTEL' },
        ];
        return <DepartmentAccordion title="FACULTY" items={items} defaultOpenIndex={0} />;
    }

    if (dept.slug === 'cse') {
        const items = [
            {
                title: 'Faculty Profiles',
                content: (
                    <FacultyProfiles
                        faculty={dept.faculty}
                        title="Faculty Profiles"
                        subtitle="Department of Computer Science & Engineering"
                    />
                ),
            },
            { title: 'Publications' },
            { title: 'Patents' },
            { title: 'Faculty Certifications' },
            { title: "Faculty Development Program's" },
            { title: 'Innovative Teaching Methods' },
        ];
        return <DepartmentAccordion title="FACULTY" items={items} defaultOpenIndex={0} />;
    }

    return (
        <div className="bg-white py-12 lg:py-16 rounded-3xl border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-16 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-dark mb-4 relative inline-block">
                    Our Faculty
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#FF5422] rounded-full"></span>
                </h2>
                <p className="text-neutral-600 text-[15px] max-w-2xl mx-auto mt-8 px-4">
                    The {dept.code} department is proud to be home to {dept.stats.faculty} highly qualified faculty members dedicated to academic excellence, research, and mentoring the next generation of engineers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-[1200px] mx-auto px-4 lg:px-8">
                {dept.faculty.map((faculty, i) => {
                    // Generate a fake email based on name to match the template reference
                    const email = `${faculty.name.split(' ').pop()?.toLowerCase() || 'faculty'}@srit.ac.in`;
                    
                    return (
                        <div key={i} className="flex flex-col items-center text-center group bg-white">
                            {/* Image Section */}
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-md bg-neutral-50 mb-4 sm:mb-6 flex items-center justify-center relative group-hover:shadow-lg transition-all duration-300 shrink-0">
                                {faculty.image ? (
                                    <img
                                        src={faculty.image}
                                        alt={faculty.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center text-4xl font-serif font-bold transition-transform duration-700 group-hover:scale-105"
                                        style={{
                                            background: '#FFF5EB',
                                            color: '#FF5422',
                                        }}
                                    >
                                        {avatarPlaceholder(faculty.name)}
                                    </div>
                                )}
                            </div>
                            
                            {/* Text Details */}
                            <h3 className="font-serif text-[18px] sm:text-[20px] md:text-[22px] font-bold italic text-neutral-dark mb-2">
                                {faculty.name}
                            </h3>
                            <p className="text-[15px] text-neutral-800 mb-1">
                                {faculty.designation}
                            </p>
                            <a href={`mailto:${email}`} className="text-[14px] text-[#FF5422] hover:underline mb-8 font-medium">
                                {email}
                            </a>
                            
                            {/* Read More Button */}
                            {faculty.profileUrl ? (
                                <a
                                    href={faculty.profileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white text-[13px] font-bold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20"
                                    style={{
                                        borderTopLeftRadius: '6px',
                                        borderTopRightRadius: '28px',
                                        borderBottomRightRadius: '6px',
                                        borderBottomLeftRadius: '28px',
                                    }}
                                >
                                    READ MORE
                                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                                </a>
                            ) : (
                                <button className="flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white text-[13px] font-bold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20"
                                    style={{
                                        borderTopLeftRadius: '6px',
                                        borderTopRightRadius: '28px',
                                        borderBottomRightRadius: '6px',
                                        borderBottomLeftRadius: '28px',
                                    }}>
                                    READ MORE
                                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="mt-20 text-center">
                <a
                    href="https://www.srit.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-neutral-200 rounded-full text-sm font-bold uppercase tracking-wider text-neutral-700 hover:border-[#FF5422] hover:text-[#FF5422] transition-colors duration-300"
                >
                    View Full Directory
                </a>
            </div>
        </div>
    );
};

export default DepartmentFaculty;


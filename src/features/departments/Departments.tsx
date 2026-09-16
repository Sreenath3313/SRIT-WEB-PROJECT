import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { departments } from '../../data/departments';

const deptImages: Record<string, string> = {
    CSE: '/CSEDept.jpg',
    CSM: '/CSMDept.JPG',
    ECE: '/ECE Dept.JPG',
    EEE: '/EEE Dept.JPG',
    MEC: '/MechDept.JPG',
    CAD: '/CSDDept.JPG',
    CIV: '/CIVILDept.JPG',
};

const Departments: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="departments" ref={ref} className="section-y-lg bg-warm-50 relative overflow-hidden">
            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-5">
                        Academics & Research
                    </p>
                    <h2 className="heading-lg text-neutral-dark">
                        Engineering Departments
                    </h2>
                </motion.div>

                {/* --- ALL DEPARTMENTS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {departments.map((dept, i) => (
                        <motion.div
                            key={dept.slug}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                        >
                            <Link
                                to={`/department/${dept.slug}`}
                                className="group block bg-white h-full rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 border border-neutral-100 relative"
                            >
                                {/* Bottom Hover Accent Line */}
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                                {/* Image Header */}
                                <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-900">
                                    <img
                                        src={deptImages[dept.code] || dept.image}
                                        alt={dept.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                                        <span className="text-white font-serif text-2xl font-bold tracking-wide">
                                            {dept.code}
                                        </span>
                                        <div className="flex gap-4">
                                            <div className="text-center">
                                                <div className="text-white/70 text-[10px] uppercase tracking-wider font-bold mb-0.5">Faculty</div>
                                                <div className="text-white font-semibold text-sm">{dept.stats.faculty}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-white/70 text-[10px] uppercase tracking-wider font-bold mb-0.5">Labs</div>
                                                <div className="text-white font-semibold text-sm">{dept.stats.labs}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div className="relative overflow-hidden bg-white md:h-56">
                                    {/* Default State */}
                                    <div className="p-5 sm:p-7 md:absolute md:inset-0 md:transition-transform md:duration-500 md:ease-[0.22,1,0.36,1] md:group-hover:-translate-y-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-serif text-[19px] font-bold text-neutral-dark mb-2.5 leading-snug">
                                                {dept.name}
                                            </h3>
                                            <p className="text-neutral-500 text-[13.5px] leading-relaxed line-clamp-3">
                                                {dept.tagline}
                                            </p>
                                        </div>

                                        <div className="mt-4 flex items-center gap-2 text-primary font-bold text-[13px] uppercase tracking-wide md:hidden">
                                            Explore full details <span>→</span>
                                        </div>
                                    </div>

                                    {/* Hover State */}
                                    <div className="hidden md:flex p-7 absolute inset-0 bg-warm-50 translate-y-full transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-y-0 flex-col justify-between">
                                        <div>
                                            <span className="text-primary text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                                                Research Focus
                                            </span>
                                            <ul className="space-y-2">
                                                {dept.researchAreas.slice(0, 3).map(area => (
                                                    <li key={area} className="flex items-start gap-2 text-[13px] text-neutral-700 font-medium">
                                                        <span className="text-primary mt-1 text-[10px]">■</span>
                                                        <span className="leading-tight">{area}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center gap-2 text-primary font-bold text-[13px] uppercase tracking-wide">
                                            Explore full details
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Departments;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { facultyProfiles } from '../../data/faculty';

const FacultySpotlight: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="faculty" ref={ref} className="section-y-lg bg-white text-neutral-900 relative overflow-hidden border-t border-neutral-100">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-primary/5 skew-x-[-15deg] origin-top opacity-30 pointer-events-none" />

            {/* Background Watermark */}
            <div className="absolute bottom-0 right-0 pointer-events-none select-none z-0 translate-y-1/4">
                <span className="font-sans font-bold text-[18vw] leading-none text-neutral-100 whitespace-nowrap">
                    FACULTY
                </span>
            </div>

            <div className="section-container relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left: Sticky Text Column */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 h-max">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-16 h-1 bg-primary mb-8" />
                            <p className="label-caps text-primary tracking-[0.25em] mb-4">
                                Academic Leadership
                            </p>
                            <h2 className="heading-lg text-neutral-900 mb-6">
                                World-Class<br />Educators &<br />Researchers
                            </h2>
                            <p className="text-neutral-600 text-[15px] leading-[1.8] mb-10 max-w-sm">
                                Our faculty comprises distinguished scholars and industry veterans dedicated to pushing the boundaries of engineering education and driving impactful research aligned with global standards.
                            </p>

                            <a href="/faculty" className="inline-flex items-center gap-3 px-6 py-3.5 border border-primary hover:bg-primary text-primary hover:text-white text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 group">
                                View Full Directory <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Faculty Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid sm:grid-cols-2 gap-8">
                            {facultyProfiles.map((faculty, i) => (
                                <motion.div
                                    key={faculty.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    className="group bg-white border border-neutral-200 rounded-3xl p-8 text-center flex flex-col items-center justify-between hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 shadow-sm"
                                >
                                    <div className="flex flex-col items-center w-full">
                                        {/* Circular Image wrapper */}
                                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg bg-neutral-100 mb-6 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500 shrink-0">
                                            <img
                                                src={faculty.image}
                                                alt={faculty.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-1">
                                            {faculty.name}
                                        </h3>
                                        <p className="text-primary text-[12px] font-bold tracking-widest uppercase mb-4">
                                            {faculty.department}
                                        </p>
                                    </div>
                                    <p className="text-neutral-500 text-sm leading-relaxed border-t border-neutral-200 pt-4 mt-2 text-center w-full">
                                        Specialization: {faculty.specialization}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacultySpotlight;

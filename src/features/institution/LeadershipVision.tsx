import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import OptimizedImage from '../../components/common/OptimizedImage';

const LeadershipVision: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-24 bg-[#f8f7f4] relative overflow-hidden">
            <div className="section-container max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                            Visionary Leadership
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">
                            Guiding <span className="text-primary">The Future</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Fanned Cards Showcase */}
                {/* Clean Leadership Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1300px] mx-auto">
                    
                    {/* Chairman Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-lg text-center flex flex-col items-center justify-between group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex flex-col items-center w-full">
                            {/* Circular Image wrapper */}
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-neutral-50 mb-6 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                                <OptimizedImage
                                    src="/sambasir.jpg"
                                    alt="Sri. A. Sambasiva Reddy"
                                    sizes="160px"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1 leading-tight">
                                Sri. A. Sambasiva Reddy
                            </h3>
                            <p className="text-primary font-bold text-[11px] tracking-wider uppercase mb-4">
                                FOUNDER & CHAIRMAN
                            </p>
                        </div>
                        <p className="text-neutral-600 italic text-[14px] leading-relaxed border-t border-neutral-100 pt-4 mt-2 text-center w-full">
                            "To provide value-based technical education and mold students into ethically strong and technologically competent professionals."
                        </p>
                    </motion.div>

                    {/* Smt. Jonnalagadda Padmavathy Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-lg text-center flex flex-col items-center justify-between group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex flex-col items-center w-full">
                            {/* Circular Image wrapper */}
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-neutral-50 mb-6 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                                <OptimizedImage
                                    src="/padmavathi.jpg"
                                    alt="Smt. Jonnalagadda Padmavathy"
                                    sizes="160px"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1 leading-tight text-center">
                                Smt. Jonnalagadda Padmavathy
                            </h3>
                            <p className="text-primary font-bold text-[11px] tracking-wider uppercase mb-4">
                                DIRECTOR
                            </p>
                        </div>
                        <p className="text-neutral-600 italic text-[14px] leading-relaxed border-t border-neutral-100 pt-4 mt-2 text-center w-full">
                            "Committed to nurturing holistic development and driving excellence across academics and administration."
                        </p>
                    </motion.div>

                    {/* Dr. M. Ranjit Reddy Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-lg text-center flex flex-col items-center justify-between group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex flex-col items-center w-full">
                            {/* Circular Image wrapper */}
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-neutral-50 mb-6 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                                <OptimizedImage
                                    src="/ranjit.jpg"
                                    alt="Dr. M. Ranjit Reddy"
                                    sizes="160px"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1 leading-tight text-center">
                                Dr. M. Ranjit Reddy
                            </h3>
                            <p className="text-primary font-bold text-[11px] tracking-wider uppercase mb-4">
                                VICE PRESIDENT
                            </p>
                        </div>
                        <p className="text-neutral-600 italic text-[14px] leading-relaxed border-t border-neutral-100 pt-4 mt-2 text-center w-full">
                            "Dedicated to bridging the gap between academia and industry to ensure successful and fulfilling careers for every student."
                        </p>
                    </motion.div>

                    {/* Principal Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-lg text-center flex flex-col items-center justify-between group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex flex-col items-center w-full">
                            {/* Circular Image wrapper */}
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-neutral-50 mb-6 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                                <OptimizedImage
                                    src="/principal.jpg"
                                    alt="Dr. G. Balakrishna"
                                    sizes="160px"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1 leading-tight">
                                Dr. G. Balakrishna
                            </h3>
                            <p className="text-primary font-bold text-[11px] tracking-wider uppercase mb-4">
                                PRINCIPAL
                            </p>
                        </div>
                        <p className="text-neutral-600 italic text-[14px] leading-relaxed border-t border-neutral-100 pt-4 mt-2 text-center w-full">
                            "Our mission is to foster innovation and academic excellence, empowering students to become global leaders."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipVision;

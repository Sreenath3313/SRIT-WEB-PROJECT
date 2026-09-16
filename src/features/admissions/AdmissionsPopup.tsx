import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, GraduationCap, Calendar, Award, Briefcase, Users, BookOpen } from 'lucide-react';

const AdmissionsPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden flex items-start md:items-center justify-center px-4 py-6 md:py-8 custom-scrollbar">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm"
                        onClick={closePopup}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-[1050px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-fit md:min-h-[600px] my-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-5 right-5 z-50 p-2.5 bg-white hover:bg-neutral-100 rounded-full text-neutral-500 hover:text-neutral-900 transition-all border border-neutral-200 shadow-sm flex items-center justify-center"
                            aria-label="Close popup"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* LEFT SIDE (55% width) */}
                        <div className="relative w-full md:w-[55%] flex flex-col bg-white overflow-hidden">
                            
                            {/* Text Header Over White Area */}
                            <div className="relative z-20 px-10 pt-10 pb-6 bg-white">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary text-white rounded-full text-sm font-bold shadow-sm shadow-primary/30 w-fit mb-6">
                                    <GraduationCap className="w-4 h-4" />
                                    Admissions 2026-27
                                </div>
                                <h2 className="text-[2.75rem] font-black leading-[1.1] text-slate-900 mb-3 tracking-tight">
                                    Shape Your Future <br/>
                                    <span className="text-primary">with SRIT</span>
                                </h2>
                                <p className="text-slate-700 text-lg font-medium">
                                    Srinivasa Ramanujan Institute <br/> of Technology
                                </p>
                                {/* Small orange divider */}
                                <div className="w-12 h-1 bg-primary mt-4 rounded-full" />
                            </div>

                            {/* Image & Wavy Overlays */}
                            <div className="relative flex-1 min-h-[350px]">
                                {/* College Image */}
                                <img 
                                    src="/CollegeMain.jpg" 
                                    alt="SRIT Campus" 
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                                {/* Gradient fade at top of image to blend with white */}
                                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent" />
                                
                                {/* Wavy Shapes - SVG Overlay */}
                                {/* Orange wave (sits behind dark blue) */}
                                <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute bottom-0 left-0 w-full h-[55%] text-primary transform translate-y-[10%]">
                                    <path d="M0,40 C30,70 70,10 100,50 L100,100 L0,100 Z" fill="currentColor" />
                                </svg>
                                {/* Dark Blue wave */}
                                <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="absolute bottom-0 left-0 w-full h-[50%] text-slate-900">
                                    <path d="M0,45 C40,80 80,20 100,60 L100,100 L0,100 Z" fill="currentColor" />
                                </svg>

                                {/* Features on Dark Blue Wave */}
                                <div className="absolute bottom-8 left-0 w-full px-10 flex justify-between items-end z-20">
                                    {/* Feature 1 */}
                                    <div className="flex flex-col items-center text-center max-w-[100px]">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 text-primary shadow-lg">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <p className="text-white text-xs font-semibold leading-snug">Legacy of<br/>Excellence</p>
                                    </div>
                                    {/* Feature 2 */}
                                    <div className="flex flex-col items-center text-center max-w-[100px]">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 text-primary shadow-lg">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <p className="text-white text-xs font-semibold leading-snug">Industry-Ready<br/>Education</p>
                                    </div>
                                    {/* Feature 3 */}
                                    <div className="flex flex-col items-center text-center max-w-[100px]">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 text-primary shadow-lg">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <p className="text-white text-xs font-semibold leading-snug">Holistic<br/>Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE (45% width) */}
                        <div className="relative w-full md:w-[45%] flex flex-col justify-between bg-white border-l border-neutral-100">
                            {/* Dot Pattern Background overlay */}
                            <div className="absolute top-10 right-10 opacity-30 pointer-events-none">
                                <div className="grid grid-cols-4 gap-2">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="w-1 h-1 bg-slate-300 rounded-full" />
                                    ))}
                                </div>
                            </div>
                            
                            {/* Decorative leaf branch (subtle) */}
                            <svg className="absolute right-0 bottom-32 w-32 h-64 text-orange-50 opacity-60 pointer-events-none" viewBox="0 0 100 200" fill="currentColor">
                                <path d="M100,50 C80,70 60,100 100,150 C70,120 50,80 100,50 Z" />
                                <path d="M100,80 C70,100 40,140 100,180 C60,150 40,110 100,80 Z" />
                            </svg>

                            {/* Content container */}
                            <div className="p-10 lg:p-12 flex-1 flex flex-col items-center text-center justify-center relative z-10 pt-16">
                                
                                {/* Section Title */}
                                <div className="flex items-center gap-3 mb-2 w-full justify-center">
                                    <div className="h-[1px] w-8 bg-primary/40" />
                                    <span className="text-primary font-bold tracking-widest text-sm uppercase">Admissions</span>
                                    <div className="h-[1px] w-8 bg-primary/40" />
                                </div>
                                <h3 className="text-4xl lg:text-[2.75rem] font-black text-slate-900 mb-6 tracking-tight">
                                    NOW OPEN!
                                </h3>

                                {/* Small divider with cap icon */}
                                <div className="flex items-center gap-4 mb-6 w-full justify-center">
                                    <div className="h-[1px] w-16 bg-neutral-200" />
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                    <div className="h-[1px] w-16 bg-neutral-200" />
                                </div>

                                <p className="text-slate-600 text-[15px] leading-relaxed mb-10 max-w-[280px]">
                                    Join the legacy of excellence at SRIT and take the first step towards a successful future.
                                </p>

                                {/* Choose Your Path Section */}
                                <div className="w-full">
                                    <div className="flex items-center gap-3 mb-6 w-full justify-center">
                                        <div className="h-[1px] flex-1 bg-neutral-200" />
                                        <span className="text-slate-800 font-bold text-sm">Choose Your Path</span>
                                        <div className="h-[1px] flex-1 bg-neutral-200" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {/* B.Tech Card */}
                                        <div className="bg-[#fff7ed] rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all border border-orange-100 group">
                                            <div className="w-12 h-12 bg-[#F95C03] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                                <GraduationCap className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="font-bold text-[#F95C03] text-lg mb-1">B.Tech</h4>
                                            <p className="text-xs text-slate-600 font-medium">4-Year<br/>Programs</p>
                                        </div>

                                        {/* M.Tech Card */}
                                        <div className="bg-[#eff6ff] rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all border border-blue-100 group">
                                            <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                                <BookOpen className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="font-bold text-[#1e3a8a] text-lg mb-1">M.Tech</h4>
                                            <p className="text-xs text-slate-600 font-medium">2-Year<br/>Programs</p>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full bg-slate-900 hover:bg-primary text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 group">
                                        Start Your Application
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                                    </button>
                                </div>
                            </div>

                            {/* Footer Bar */}
                            <div className="bg-slate-50 border-t border-slate-100 p-4 flex items-center justify-center gap-3 text-xs w-full mt-auto relative z-20">
                                <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    2026-27 INTAKE
                                </div>
                                <div className="w-[1px] h-3 bg-slate-300" />
                                <span className="text-slate-600 font-medium">Applications are open for all programs.</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdmissionsPopup;

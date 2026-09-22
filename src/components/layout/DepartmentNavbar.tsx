import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import CollegeBuildingOutline from "./CollegeBuildingOutline";

interface Department {
    slug: string;
    code: string;
    name: string;
    fullName?: string;
}

interface DepartmentNavItem {
    key: string;
    label: string;
    icon: React.ReactNode;
}

interface DepartmentNavbarProps {
    dept: Department;
    items: DepartmentNavItem[];
    activeTab: string;
    onTabChange: (tabKey: string) => void;
}

const DepartmentNavbar: React.FC<DepartmentNavbarProps> = ({
    dept,
    items,
    activeTab,
    onTabChange,
}) => {
    const isActive = (key: string) => {
        if (key === "about") {
            return activeTab === "about" || activeTab === "";
        }

        return activeTab === key;
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200">

            {/* =====================================================
                DEPARTMENT HEADER
            ===================================================== */}

            {dept.slug === 'cse' ? (
                /* ── CSE: Custom Header matching reference image ── */
                <div className="bg-white text-neutral-900 relative overflow-hidden border-b border-neutral-100">
                    
                    {/* Left geometric accents */}
                    <div 
                        className="absolute left-0 top-0 h-full w-[200px] pointer-events-none"
                        style={{
                            background: 'linear-gradient(135deg, #FF5422 0%, #FF764D 100%)',
                            clipPath: 'polygon(0 0, 80% 0, 40% 100%, 0 100%)',
                            opacity: 0.85
                        }}
                    />
                    <div 
                        className="absolute left-0 top-0 h-full w-[280px] pointer-events-none"
                        style={{
                            background: '#FF5422',
                            clipPath: 'polygon(0 0, 60% 0, 90% 100%, 0 100%)',
                            opacity: 0.15
                        }}
                    />

                    {/* Right geometric accents & watermark */}
                    <div className="absolute right-0 top-0 h-full w-[450px] pointer-events-none flex justify-end">
                        <CollegeBuildingOutline 
                            className="h-full w-[800px] object-cover object-right text-[#FF5422] mix-blend-multiply opacity-50"
                            style={{ 
                                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 100%)' 
                            }}
                        />
                        {/* Right orange angular shape */}
                        <div 
                            className="absolute right-0 top-0 h-full w-[120px]"
                            style={{
                                background: '#FF5422',
                                clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)',
                                opacity: 0.9
                            }}
                        />
                        <div 
                            className="absolute right-0 top-0 h-full w-[180px]"
                            style={{
                                background: '#FF5422',
                                clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 20% 100%)',
                                opacity: 0.15
                            }}
                        />
                    </div>

                    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                        <div className="h-[62px] flex items-center justify-between">
                            
                            {/* LEFT - IDENTITY */}
                            <motion.div
                                initial={{ opacity: 0, x: -24 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-center min-w-0"
                            >
                                {/* CIRCULAR BACK BUTTON */}
                                <Link
                                    to="/"
                                    title="Back to SRIT"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FF5422]/10 text-[#FF5422] border border-[#FF5422]/20 hover:bg-[#FF5422]/20 transition-all duration-200 shrink-0 group shadow-sm"
                                >
                                    <ArrowLeft size={18} strokeWidth={2} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
                                </Link>

                                {/* DIVIDER */}
                                <div className="h-7 w-[1px] bg-neutral-200 mx-5" />

                                {/* TITLE & SUBTITLE */}
                                <div className="min-w-0">
                                    <h1 className="text-[15px] sm:text-[16px] font-bold leading-tight truncate text-neutral-900 tracking-tight">
                                        CSE – Computer Science & Engineering
                                    </h1>
                                    <p className="text-[12px] sm:text-[13px] font-medium text-neutral-500 leading-tight mt-0.5 truncate max-w-[600px]">
                                        Department of Computer Science & Engineering
                                    </p>
                                </div>
                            </motion.div>

                            {/* INSTITUTE NAME */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="hidden lg:flex items-center shrink-0 ml-8"
                            >
                                <span className="text-[13px] font-semibold tracking-wide text-[#FF5422]">
                                    Srinivasa Ramanujan Institute of Technology
                                </span>
                            </motion.div>

                        </div>
                    </div>
                </div>
            ) : (
                /* ── OTHER DEPARTMENTS: Original Header ── */
                <div className="bg-[#FF5422] text-white relative overflow-hidden">
                    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                        <div className="h-[62px] flex items-center justify-between">
                            
                            {/* LEFT - DEPARTMENT IDENTITY */}
                            <motion.div
                                initial={{ opacity: 0, x: -24 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="flex items-center min-w-0"
                            >
                                {/* BACK BUTTON */}
                                <Link
                                    to="/"
                                    title="Back to SRIT"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-200 shrink-0 group"
                                >
                                    <ArrowLeft size={18} strokeWidth={2} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
                                </Link>

                                {/* DIVIDER */}
                                <div className="h-7 w-px bg-white/25 mx-4" />

                                {/* DEPARTMENT CODE */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="h-8 min-w-[56px] px-3 flex items-center justify-center rounded-full bg-white text-[#FF5422] text-[12px] font-bold tracking-wide shrink-0"
                                >
                                    {dept.code}
                                </motion.div>

                                {/* DEPARTMENT NAME */}
                                <motion.div
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className="ml-4 min-w-0"
                                >
                                    <h1 className="text-[14px] sm:text-[15px] font-medium leading-tight truncate">
                                        {dept.name}
                                    </h1>
                                    {dept.fullName && dept.fullName !== dept.name && (
                                        <p className="text-[11px] sm:text-[12px] font-normal text-white/80 leading-tight mt-0.5 truncate max-w-[500px]">
                                            {dept.fullName}
                                        </p>
                                    )}
                                </motion.div>
                            </motion.div>

                            {/* INSTITUTE NAME */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="hidden lg:flex items-center shrink-0 ml-8"
                            >
                                <span className="text-[12px] font-normal tracking-wide text-white/80">
                                    Srinivasa Ramanujan Institute of Technology
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}



            {/* =====================================================
                DEPARTMENT NAVIGATION
                Hidden for CSE — uses left sidebar in DepartmentPage
            ===================================================== */}

            {/* =====================================================
                DEPARTMENT NAVIGATION
            ===================================================== */}

            {dept.slug !== 'cse' && (
            <div className="bg-white border-b border-[#FF5422]/20 shadow-sm relative z-20">

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

                    <nav
                        className="
                            flex
                            items-center
                            justify-center
                            gap-1
                            sm:gap-2
                            lg:gap-6
                            min-h-[60px]
                            overflow-x-auto
                            scrollbar-hide
                        "
                    >

                        {items.map((item, index) => {
                            const active = isActive(item.key);

                            return (
                                <motion.button
                                    key={item.key}
                                    type="button"
                                    onClick={() => onTabChange(item.key)}
                                    initial={{
                                        opacity: 0,
                                        y: 8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.3 + index * 0.055,
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    whileHover={{
                                        y: -1,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className={`
                                        relative
                                        h-[60px]
                                        px-3
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        whitespace-nowrap
                                        shrink-0
                                        text-[13px]
                                        font-medium
                                        transition-colors
                                        duration-200
                                        group
                                        ${active
                                            ? "text-[#FF5422]"
                                            : "text-neutral-600 hover:text-[#FF5422]"
                                        }
                                    `}
                                >

                                    {/* ICON */}

                                    <motion.span
                                        animate={{
                                            y: active ? -0.5 : 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className={`
                                            flex
                                            items-center
                                            justify-center
                                            w-8
                                            h-8
                                            rounded-full
                                            shrink-0
                                            transition-colors
                                            duration-200
                                            ${active
                                                ? "bg-[#FF5422]/10 text-[#FF5422]"
                                                : "bg-transparent text-neutral-400 group-hover:text-[#FF5422]"
                                            }
                                        `}
                                    >
                                        {item.icon}
                                    </motion.span>


                                    {/* LABEL */}

                                    <span>
                                        {item.label}
                                    </span>


                                    {/* ACTIVE INDICATOR */}

                                    <motion.span
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-[3px]
                                            rounded-t-full
                                            bg-[#FF5422]
                                        "
                                        initial={false}
                                        animate={{
                                            width: active ? "100%" : "0%",
                                            opacity: active ? 1 : 0,
                                            left: active ? "0%" : "50%",
                                            x: active ? "0%" : "-50%",
                                        }}
                                        transition={{
                                            duration: 0.28,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    />

                                </motion.button>
                            );
                        })}

                    </nav>
                </div>
            </div>
            )}


            {/* MOBILE SCROLL INDICATOR */}
            {dept.slug !== 'cse' && (
            <div className="lg:hidden pointer-events-none absolute right-0 bottom-0 h-[60px] w-10 bg-gradient-to-l from-white to-transparent flex items-center justify-end pr-2 z-30">

                <ChevronRight
                    size={16}
                    className="text-neutral-300"
                />

            </div>
            )}

        </header>
    );
};

export default DepartmentNavbar;
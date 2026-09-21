import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    Phone,
    Mail,
    UserCheck,
    User,
    GraduationCap,
    Users,
    Download,
    Contact,
    Megaphone,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, type NavLink, type SubItem } from '../../data/navigation';

const NavItem = ({ link }: { link: NavLink }) => {
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();

    const isActive =
        location.pathname === link.href ||
        (link.href !== '/' && location.pathname.startsWith(link.href));

    return (
        <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                to={link.href}
                className={`relative flex items-center gap-0.5 whitespace-nowrap px-1.5 py-2 text-[13px] font-medium tracking-normal transition-colors duration-200 ${isActive || isHovered
                        ? 'text-primary'
                        : 'text-slate-700'
                    }`}
            >
                {link.label}

                {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 text-primary shrink-0" />
                )}

                <span
                    className={`absolute bottom-0 left-1.5 right-1.5 h-[1.5px] bg-primary rounded-full transition-transform duration-200 origin-center ${isActive || isHovered
                            ? 'scale-x-100'
                            : 'scale-x-0'
                        }`}
                />
            </Link>

            {link.hasDropdown && (
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{
                                duration: 0.15,
                                ease: 'easeOut',
                            }}
                            className={`absolute top-full left-0 ${link.subItems && link.subItems.length > 10 ? 'w-[560px] xl:w-[640px] grid grid-cols-2' : 'min-w-[220px]'} bg-white rounded-md shadow-lg border border-neutral-100 overflow-y-auto max-h-[75vh] py-1 z-50`}
                        >
                            {link.subItems?.map(
                                (sub: SubItem, idx: number) => (
                                    <Link
                                        key={idx}
                                        to={sub.href}
                                        className="block px-4 py-2 text-[13px] font-normal text-slate-700 hover:text-primary hover:bg-orange-50 transition-colors"
                                    >
                                        {sub.label}
                                    </Link>
                                )
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)]">

            {/* TOP UTILITY BAR */}
            <div className="hidden lg:flex w-full bg-[#FF5422] text-white h-[28px] items-center justify-center">
                <div className="flex items-center h-full px-4 gap-4 max-w-[1500px] w-full justify-center">

                    <div className="flex items-center h-full gap-2 xl:gap-3">

                        <a
                            href="tel:+919515611111"
                            className="flex items-center gap-1 text-[11px] font-normal whitespace-nowrap hover:text-white/80 transition-colors"
                        >
                            <Phone className="w-3 h-3" />
                            +91 951 561 1111
                        </a>

                        <span className="w-px h-3 bg-white/35" />

                        <a
                            href="mailto:hr@srit.ac.in"
                            className="flex items-center gap-1 text-[11px] font-normal whitespace-nowrap hover:text-white/80 transition-colors"
                        >
                            <Mail className="w-3 h-3" />
                            hr@srit.ac.in
                        </a>

                        <span className="w-px h-3 bg-white/35" />

                        <a
                            href="#"
                            className="flex items-center gap-1 text-[11px] font-normal whitespace-nowrap hover:text-white/80 transition-colors"
                        >
                            <UserCheck className="w-3 h-3" />
                            Faculty Login
                        </a>

                        <span className="w-px h-3 bg-white/35" />

                        <a
                            href="#"
                            className="flex items-center gap-1 text-[11px] font-normal whitespace-nowrap hover:text-white/80 transition-colors"
                        >
                            <User className="w-3 h-3" />
                            Student Login
                        </a>

                        <span className="w-px h-3 bg-white/35" />

                        <a
                            href="#"
                            className="flex items-center gap-1 text-[11px] font-normal whitespace-nowrap hover:text-white/80 transition-colors"
                        >
                            <GraduationCap className="w-3 h-3" />
                            Degree Verification
                        </a>

                        <span className="w-px h-3 bg-white/35" />

                        <a
                            href="#"
                            className="flex items-center gap-1 text-[11px] font-normal whitespace-nowrap hover:text-white/80 transition-colors"
                        >
                            <Users className="w-3 h-3" />
                            Alumni
                        </a>

                        <span className="w-px h-3 bg-white/35" />

                        <a
                            href="#"
                            className="flex items-center gap-1 text-[11px] font-normal whitespace-nowrap hover:text-white/80 transition-colors"
                        >
                            <Users className="w-3 h-3" />
                            EAPCET/ECET Ranks
                        </a>
                    </div>

                    <div className="flex items-center h-full gap-3 xl:gap-4">

                        <span className="w-px h-3 bg-white/35" />

                        <a
                            href="#"
                            className="flex items-center gap-1 text-[11px] font-normal whitespace-nowrap hover:text-white/80 transition-colors"
                        >
                            <Download className="w-3 h-3" />
                            Downloads
                        </a>

                        <span className="w-px h-3 bg-white/35" />

                        <a
                            href="/#contact"
                            className="flex items-center gap-1 text-[11px] font-normal whitespace-nowrap hover:text-white/80 transition-colors"
                        >
                            <Contact className="w-3 h-3" />
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* MAIN NAVIGATION */}
            <div className="w-full bg-white relative z-50 flex justify-center border-b border-neutral-100">
                <div className="flex items-center justify-between lg:justify-center w-full max-w-[1400px] px-3 md:px-4 h-[46px]">

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden lg:flex items-center justify-center h-full gap-0 xl:gap-0.5 2xl:gap-1">
                        {navLinks.map((link) => (
                            <NavItem
                                key={link.label}
                                link={link}
                            />
                        ))}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center text-slate-800 ml-auto"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`absolute left-1/2 -translate-x-1/2 w-6 h-[2px] transition-all duration-300 bg-slate-800 ${mobileOpen
                                    ? 'top-1/2 -translate-y-1/2 rotate-45'
                                    : 'top-3'
                                }`}
                        />

                        <span
                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[2px] transition-all duration-300 bg-slate-800 ${mobileOpen ? 'opacity-0' : ''
                                }`}
                        />

                        <span
                            className={`absolute left-1/2 -translate-x-1/2 w-6 h-[2px] transition-all duration-300 bg-slate-800 ${mobileOpen
                                    ? 'top-1/2 -translate-y-1/2 -rotate-45'
                                    : 'bottom-3'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* PLACEMENT TICKER */}
            <div className="w-full bg-[#FF5422] text-white overflow-hidden relative border-t border-white/10">
                <div className="max-w-[1400px] mx-auto w-full flex items-center h-[30px]">

                    <div className="bg-[#E54817] z-10 px-3 md:px-5 h-full flex items-center justify-center relative shrink-0">
                        <Megaphone className="w-3.5 h-3.5 text-white" />

                        <div className="absolute -right-[10px] top-0 bottom-0 w-[20px] bg-[#E54817] transform -skew-x-[25deg]" />
                    </div>

                    <div className="flex-1 h-full overflow-hidden relative group">
                        <div className="flex h-full items-center whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] gap-8">

                            {[1, 2, 3].map((group) => (
                                <div
                                    key={group}
                                    className="flex items-center h-full gap-8 shrink-0 text-[11px] xl:text-[12px] font-normal tracking-wide"
                                >

                                    <span className="flex items-center gap-1.5">
                                        <span className="text-white/90">
                                            2024-25:
                                        </span>

                                        <span className="font-semibold text-white">
                                            370+ Offers
                                        </span>
                                    </span>

                                    <span className="w-px h-3 bg-white/35" />

                                    <span className="flex items-center gap-1.5">
                                        <span className="text-white/90">
                                            Highest:
                                        </span>

                                        <span className="font-semibold text-white">
                                            9.08 LPA
                                        </span>

                                        <span className="text-white/75">
                                            (TCS Prime)
                                        </span>
                                    </span>

                                    <span className="w-px h-3 bg-white/35" />

                                    <span className="flex items-center gap-1.5">
                                        <span className="text-white/90">
                                            Placement Rate:
                                        </span>

                                        <span className="font-semibold text-white">
                                            80%
                                        </span>
                                    </span>

                                    <span className="w-px h-3 bg-white/35" />

                                    <span className="flex items-center gap-1.5">
                                        <span className="text-white/90">
                                            Top Recruiters:
                                        </span>

                                        <span className="font-semibold text-white">
                                            TCS, Cognizant, HCL, Infosys,
                                            Foxconn, Lumen Technologies
                                        </span>
                                    </span>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE DROPDOWN */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: 'auto',
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="lg:hidden overflow-hidden bg-white shadow-xl border-t border-neutral-100 absolute top-full left-0 right-0"
                    >
                        <div className="flex flex-col gap-1 pb-5 pt-2 px-4 max-h-[80vh] overflow-y-auto">

                            {navLinks.map((link) => (
                                <div
                                    key={link.label}
                                    className="border-b border-neutral-100 last:border-none"
                                >
                                    <div className="flex items-center justify-between py-2.5">

                                        <Link
                                            to={link.href}
                                            onClick={() =>
                                                !link.hasDropdown &&
                                                setMobileOpen(false)
                                            }
                                            className="text-[14px] font-medium text-slate-800"
                                        >
                                            {link.label}
                                        </Link>

                                        {link.hasDropdown && (
                                            <button
                                                className="p-2 -mr-2"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                aria-label={`Open ${link.label} submenu`}
                                            >
                                                <ChevronDown className="w-4 h-4 text-primary" />
                                            </button>
                                        )}
                                    </div>

                                    {link.hasDropdown && (
                                        <div className="grid grid-cols-1 gap-1 pb-3 pl-4">
                                            {link.subItems?.map((sub) => (
                                                <Link
                                                    key={sub.label}
                                                    to={sub.href}
                                                    onClick={() =>
                                                        setMobileOpen(false)
                                                    }
                                                    className="text-[13px] font-normal text-slate-600 hover:text-primary py-1.5 transition-colors"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;

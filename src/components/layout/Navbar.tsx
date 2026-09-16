import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, UserCheck, User, GraduationCap, Users, Download, Contact } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks, type NavLink, type SubItem } from '../../data/navigation';

const NavItem = ({ link, isSolid }: { link: NavLink, isSolid: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                to={link.href}
                className={`relative flex items-center gap-1 text-[13px] 2xl:text-[15px] font-semibold tracking-[0.02em] transition-colors duration-200 whitespace-nowrap py-6 ${isSolid ? 'text-neutral-700 hover:text-primary' : 'text-white/95 hover:text-white'}`}
            >
                {link.label}
                {link.hasDropdown && <ChevronDown className={`w-[14px] h-[14px] transition-transform duration-300 ${isHovered ? '-rotate-180' : ''}`} />}
                
                {/* Underline indicator */}
                <span className={`absolute bottom-4 left-0 right-0 h-[2px] rounded-full transition-transform duration-300 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'} ${isSolid ? 'bg-primary' : 'bg-white'}`} />
            </Link>

            {link.hasDropdown && (
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-[80%] left-0 min-w-[220px] bg-white rounded-xl shadow-2xl border border-neutral-100 overflow-hidden py-2 z-50"
                        >
                            {link.subItems?.map((sub: SubItem, idx: number) => (
                                <Link 
                                    key={idx} 
                                    to={sub.href}
                                    className="block px-5 py-3 text-[16px] font-medium text-neutral-700 hover:text-primary hover:bg-orange-50/50 transition-colors"
                                >
                                    {sub.label}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Always solid on all pages, no transparent background
    const isSolid = true;

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-500 ${isSolid
                ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
                : 'bg-transparent'
                }`}
        >
            {/* Top Bar */}
            <div className="hidden lg:block w-full bg-primary text-white text-[10px] xl:text-[11px] font-medium tracking-wide border-b-[1.5px] border-neutral-800/20">
                <div className="max-w-[1500px] mx-auto px-4 md:px-8 flex items-center justify-between py-0.5">
                    {/* Left side */}
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-neutral-900 fill-neutral-900" strokeWidth={1.5} /> 91-951 561 1111</span>
                        <span className="w-px h-2.5 bg-white/60" />
                        <span className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-neutral-900 fill-neutral-900" strokeWidth={1.5} /> hr@srit.ac.in</span>
                    </div>
                    {/* Right side */}
                    <div className="flex items-center gap-2 xl:gap-3">
                        <a href="#" className="flex items-center gap-1 xl:gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap"><UserCheck className="w-3 h-3 text-neutral-900 fill-neutral-900" strokeWidth={1.5} /> Faculty Login</a>
                        <span className="w-px h-2.5 bg-white/60" />
                        <a href="#" className="flex items-center gap-1 xl:gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap"><User className="w-3 h-3 text-neutral-900 fill-neutral-900" strokeWidth={1.5} /> Student Login</a>
                        <span className="w-px h-2.5 bg-white/60" />
                        <a href="#" className="flex items-center gap-1 xl:gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap"><GraduationCap className="w-3 h-3 text-neutral-900 fill-neutral-900" strokeWidth={1.5} /> Degree Verification</a>
                        <span className="w-px h-2.5 bg-white/60" />
                        <a href="#" className="flex items-center gap-1 xl:gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap"><Users className="w-3 h-3 text-neutral-900 fill-neutral-900" strokeWidth={1.5} /> Alumni</a>
                        <span className="w-px h-2.5 bg-white/60" />
                        <a href="#" className="flex items-center gap-1 xl:gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap"><Users className="w-3 h-3 text-neutral-900 fill-neutral-900" strokeWidth={1.5} /> EAPCET/ECET Ranks</a>
                        <span className="w-px h-2.5 bg-white/60" />
                        <a href="#" className="flex items-center gap-1 xl:gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap"><Download className="w-3 h-3 text-neutral-900 fill-neutral-900" strokeWidth={1.5} /> Downloads</a>
                        <span className="w-px h-2.5 bg-white/60" />
                        <a href="/#contact" className="flex items-center gap-1 xl:gap-1.5 hover:text-white/80 transition-colors whitespace-nowrap"><Contact className="w-3 h-3 text-neutral-900 fill-neutral-900" strokeWidth={1.5} /> Contact Us</a>
                    </div>
                </div>
            </div>

            <div className="max-w-[1500px] w-full mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-[72px] gap-8">
                    {/* Desktop links */}
                    <div className="hidden xl:flex items-center justify-center gap-2 xl:gap-3 2xl:gap-4 flex-1 min-w-0">
                        {navLinks.map((link) => (
                            <NavItem key={link.label} link={link} isSolid={isSolid} />
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="xl:hidden relative w-11 h-11 z-50 flex items-center justify-center -mr-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`absolute left-1/2 -translate-x-1/2 w-6 h-[1.5px] transition-all duration-300 ${(isSolid || mobileOpen) ? 'bg-neutral-dark' : 'bg-white'
                            } ${mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-2.5'}`} />
                        <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[1.5px] transition-all duration-300 ${(isSolid || mobileOpen) ? 'bg-neutral-dark' : 'bg-white'
                            } ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`absolute left-1/2 -translate-x-1/2 w-6 h-[1.5px] transition-all duration-300 ${(isSolid || mobileOpen) ? 'bg-neutral-dark' : 'bg-white'
                            } ${mobileOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-2.5'}`} />
                    </button>
                </div>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="xl:hidden overflow-hidden bg-white shadow-xl rounded-b-2xl border-t border-neutral-100"
                        >
                            <div className="flex flex-col gap-1 pb-6 pt-4 px-4 max-h-[80vh] overflow-y-auto">
                                {navLinks.map((link) => (
                                    <div key={link.label} className="border-b border-neutral-50 last:border-none">
                                        <div className="flex items-center justify-between py-4">
                                            <Link
                                                to={link.href}
                                                onClick={() => !link.hasDropdown && setMobileOpen(false)}
                                                className="text-[17px] font-semibold text-neutral-800"
                                            >
                                                {link.label}
                                            </Link>
                                            {link.hasDropdown && (
                                                <button 
                                                    className="p-2 -mr-2"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        // Toggle sub-items if we had state for it, 
                                                        // but for now let's just make it a link.
                                                    }}
                                                >
                                                    <ChevronDown className="w-5 h-5 opacity-40" />
                                                </button>
                                            )}
                                        </div>
                                        {link.hasDropdown && (
                                            <div className="grid grid-cols-1 gap-2 pb-4 pl-4">
                                                {link.subItems?.map((sub) => (
                                                    <Link 
                                                        key={sub.label}
                                                        to={sub.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="text-[16px] font-medium text-neutral-600 py-2"
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
            </div>

            {/* Placements Marquee Ticker */}
            <div className="w-full bg-primary text-white py-1 overflow-hidden border-t border-primary-dark/20 text-[10px] font-semibold select-none z-40 relative shadow-sm">
                <div className="flex gap-10 whitespace-nowrap animate-marquee">
                    {[1, 2].map((group) => (
                        <div key={group} className="flex gap-10 shrink-0 items-center min-w-full justify-around">
                            <span className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-neutral-900 animate-ping" />
                                <span className="text-white/80 font-medium">Placements 2024-25:</span>
                                <span className="text-neutral-900 font-extrabold">370+ Offers</span>
                            </span>
                            <span className="text-white/40">•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-white/80 font-medium">Highest:</span>
                                <span className="text-neutral-900 font-extrabold">9.08 LPA</span>
                                <span className="text-white/60 text-[9px] font-medium">(TCS Prime)</span>
                            </span>
                            <span className="text-white/40">•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-white/80 font-medium">Placement Rate:</span>
                                <span className="text-neutral-900 font-extrabold">80%</span>
                            </span>
                            <span className="text-white/40">•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-white/80 font-medium">Top Recruiters:</span>
                                <span className="text-white font-extrabold">TCS, Cognizant, HCL, Infosys, Foxconn, Lumen Technologies</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    BookOpen, 
    Users, 
    ExternalLink, 
    Layers, 
    TrendingUp, 
    Briefcase,
    Lightbulb,
    ChevronRight,
    Target,
    FileText,
    Award,
    Mail,
    Phone,
    Calendar,
    CheckCircle2,
    Globe,
    ArrowUpRight,
    Server,
    Info
} from 'lucide-react';
import OptimizedImage from '../components/common/OptimizedImage';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Objectives grid list
interface ObjectiveItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const objectives: ObjectiveItem[] = [
    {
        title: 'Skill Development',
        description: 'Organizing sessions to help students master digital research tools, literature reviews, and reference management.',
        icon: <TrendingUp className="w-5 h-5 text-primary" />
    },
    {
        title: 'Knowledge Enhancement',
        description: 'Providing structural guidance to access over 60 million digital learning resources across disciplines.',
        icon: <BookOpen className="w-5 h-5 text-primary" />
    },
    {
        title: 'Workshops & Seminars',
        description: 'Hosting expert lectures, hands-on user training, and webinars on utilizing digital repositories effectively.',
        icon: <Layers className="w-5 h-5 text-primary" />
    },
    {
        title: 'Innovation & Research',
        description: 'Encouraging academic research and patent searching through access to journals, theses, and conference papers.',
        icon: <Lightbulb className="w-5 h-5 text-primary" />
    },
    {
        title: 'Professional Growth',
        description: 'Helping students prepare for competitive examinations and careers by guiding them to relevant NDLI test-prep databases.',
        icon: <Briefcase className="w-5 h-5 text-primary" />
    },
    {
        title: 'Collaborative Learning',
        description: 'Creating a connected peer community that discusses, shares, and advances collective knowledge resources.',
        icon: <Users className="w-5 h-5 text-primary" />
    }
];

// Profile interfaces
interface ProfileMember {
    name: string;
    designation: string;
    role: string;
    department: string;
    email?: string;
    phone?: string;
    initials: string;
    bgGradient: string;
}

const executiveMembers: ProfileMember[] = [
    {
        name: 'Dr. G. Balakrishna',
        designation: 'Principal',
        role: 'Patron',
        department: 'College Administration',
        email: 'principal@srit.ac.in',
        phone: '7893005520',
        initials: 'GB',
        bgGradient: 'from-orange-500 to-amber-600'
    },
    {
        name: 'B Chandra kala',
        designation: 'Asst. Librarian',
        role: 'Convenor',
        department: 'Library Administration',
        email: 'chandrakala.hs@srit.ac.in',
        phone: '8341050076',
        initials: 'BC',
        bgGradient: 'from-blue-600 to-indigo-600'
    },
    {
        name: 'Ms. D. Lakshmi Shireesha',
        designation: 'Asst. Prof. Dept. of CE',
        role: 'Executive Member',
        department: 'Dept. of Civil Engineering',
        email: 'lakshmishireesha.civ@srit.ac.in',
        phone: '8790121600',
        initials: 'LS',
        bgGradient: 'from-teal-600 to-emerald-600'
    },
    {
        name: 'Ms. B. Shravani',
        designation: 'Asst. Prof. Dept. of E.E.E',
        role: 'Executive Member',
        department: 'Dept. of Electrical & Electronics Engineering',
        email: 'shravani.eee@srit.ac.in',
        phone: '9885233050',
        initials: 'BS',
        bgGradient: 'from-pink-600 to-rose-600'
    },
    {
        name: 'Mr. C. H. Joseph Sundar',
        designation: 'Asst. Prof. Dept. of M.E',
        role: 'Executive Member',
        department: 'Dept. of Mechanical Engineering',
        email: 'joseph.mec@srit.ac.in',
        phone: '9490743102',
        initials: 'JS',
        bgGradient: 'from-cyan-500 to-blue-600'
    },
    {
        name: 'Ms. C Rubina',
        designation: 'Asst. Prof. Dept. of E.C.E',
        role: 'Executive Member',
        department: 'Dept. of Electronics & Communication Engineering',
        email: 'rubina.ece@srit.ac.in',
        phone: '9398249575',
        initials: 'CR',
        bgGradient: 'from-purple-500 to-indigo-500'
    },
    {
        name: 'Mr. B. Vijaya Bhaskar Reddy',
        designation: 'Asst. Prof. Dept. of CSM',
        role: 'Executive Member',
        department: 'Dept. of CSM',
        email: 'bhaskar.cse@srit.ac.in',
        phone: '9866021424',
        initials: 'BR',
        bgGradient: 'from-violet-600 to-fuchsia-600'
    },
    {
        name: 'Ms. K. Bharathi',
        designation: 'Asst. Prof. Dept. of H&S(Physics)',
        role: 'Executive Member',
        department: 'Dept. of H&S (Physics)',
        email: 'kbharathi.hs@srit.ac.in',
        phone: '8555054135',
        initials: 'KB',
        bgGradient: 'from-amber-500 to-yellow-600'
    }
];

const NdliClubPage: React.FC = () => {
    // Spreadsheet Tab State
    const [sheetTab, setSheetTab] = useState<string>('membership');

    const sheets = [
        { 
            id: 'membership', 
            label: 'Member Registry', 
            src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxUQRYb-owPkDec-wvNlkNKrjUaWzEiaXoZnMfio-TQypZqXEEB45-FrTV7xU60fKwQo9AYvtPZV2n/pubhtml?widget=true&headers=false',
            icon: <Award className="w-3.5 h-3.5" />
        },
        { 
            id: 'events', 
            label: 'Events Organized', 
            src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRtGEf_IEOfv2qLQ1FSufGy-m-XW60jAjZ-dUNtcnIt0sTLt-5BHxcCuiIFlmD3U4MKdf6046jJKnhS/pubhtml?widget=true&chrome=false&headers=false',
            icon: <Calendar className="w-3.5 h-3.5" />
        },
        { 
            id: 'minutes', 
            label: 'Minutes of Meeting', 
            src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTjOgtErCNtSb0a05VVFu6KvMY3ZKX4p6iv6GECFZfxvPNxhtBYQUuOoaDa7aBzoWZ6DyxLvt2Po0cT/pubhtml?widget=true&chrome=false&headers=false',
            icon: <FileText className="w-3.5 h-3.5" />
        },
        { 
            id: 'team', 
            label: 'Committee Team', 
            src: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSNsNz9Np8sjT469J_d39FBuMwGOZ5nNI8J77-ZnuCIDaVqVuwNSUePLjpo8Efk2hiKGtZKZGpcx6N/pubhtml?widget=true&chrome=false&headers=false',
            icon: <Users className="w-3.5 h-3.5" />
        }
    ];

    const activeSheet = sheets.find(s => s.id === sheetTab) || sheets[0];

    const handleScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-neutral-100 flex flex-col font-sans relative overflow-hidden">
            
            {/* Background glowing blobs for high-end aesthetic */}
            <div className="absolute top-[8%] left-[-15%] w-[650px] h-[650px] bg-primary/5 rounded-full filter blur-[140px] opacity-70 pointer-events-none z-0" />
            <div className="absolute bottom-[25%] right-[-15%] w-[700px] h-[700px] bg-primary/5 rounded-full filter blur-[140px] opacity-60 pointer-events-none z-0" />

            <Navbar />

            {/* Main Content Wrapper */}
            <main className="flex-grow pt-24 lg:pt-32 pb-16 lg:pb-24 relative z-10">
                
                {/* 1. STUNNING BOARDROOM HERO SECTION */}
                <div className="section-container mb-12">
                    <div className="bg-neutral-dark text-white rounded-[32px] p-8 lg:p-14 border border-neutral-850 shadow-2xl relative overflow-hidden">
                        
                        {/* Background Subtle Tech-Grid overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />
                        
                        <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8 lg:gap-16 items-center relative z-10">
                            
                            {/* Left Column: Heading details */}
                            <div className="flex flex-col gap-5 text-left">
                                <div className="flex flex-wrap gap-2.5 items-center">
                                    <span className="bg-primary/20 text-primary-light border border-primary/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                                        IIT Kharagpur Chapter
                                    </span>
                                    <span className="bg-neutral-800 text-neutral-300 border border-neutral-750 rounded-full px-3 py-1 text-xs font-mono tracking-wide">
                                        Club Registration ID: INAPNC3YPFWR
                                    </span>
                                </div>
                                
                                <motion.h1
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
                                >
                                    National Digital Library of India <span className="text-primary">(NDLI) Club</span>
                                </motion.h1>
                                
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                    className="text-neutral-300 text-sm lg:text-base leading-relaxed text-justify max-w-2xl"
                                >
                                    Establishing an immersive learning environment within SRIT to access over 60 million academic materials, facilitating structural research methodologies, literature searches, and expert webinars.
                                </motion.p>
                                
                                <div className="flex flex-wrap gap-4 mt-2">
                                    <button 
                                        onClick={() => handleScrollToSection('data-center')}
                                        className="bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl text-xs md:text-sm font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group cursor-pointer"
                                    >
                                        <span>Explore Registry</span>
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                    <a 
                                        href="https://club.ndl.iitkgp.ac.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-neutral-800 hover:bg-neutral-750 text-neutral-200 border border-neutral-700 px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2"
                                    >
                                        <span>Official Portal</span>
                                        <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Smaller Framed Photo with double border & overlay coordinator badge */}
                            <div className="flex justify-center items-center">
                                <div className="relative group max-w-[340px] w-full">
                                    {/* Glowing background halo */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-primary to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-45 transition duration-700 pointer-events-none" />
                                    
                                    {/* Outer Border Frame */}
                                    <div className="relative rounded-2xl p-2 bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden">
                                        <OptimizedImage
                                            src="/library.jpg"
                                            webpSrc="/library.webp"
                                            alt="SRIT Central Library"
                                            sizes="(max-width: 1024px) 90vw, 340px"
                                            className="w-full h-auto object-cover rounded-xl aspect-[4/3] img-zoom shadow-inner"
                                        />
                                        
                                        {/* Floating Badge */}
                                        <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/85 backdrop-blur-md border border-neutral-755 rounded-xl p-3 flex items-center gap-3 shadow-lg">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-serif text-xs font-bold shrink-0">
                                                BC
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <p className="text-[10px] font-bold text-neutral-200 truncate leading-tight">B Chandra kala</p>
                                                <p className="text-[8px] text-neutral-400 uppercase tracking-widest truncate leading-none mt-0.5">Club Convenor</p>
                                            </div>
                                            <a href="mailto:chandrakala.hs@srit.ac.in" className="w-7 h-7 rounded-lg bg-neutral-800 hover:bg-primary hover:text-white text-neutral-400 flex items-center justify-center transition-colors">
                                                <Mail className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 2. ABOUT NDLI & STATS CARDS */}
                <div className="section-container mb-12">
                    <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 items-stretch">
                        
                        {/* Left: About Us Content */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-200/80 shadow-sm flex flex-col gap-5 justify-between">
                            <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
                                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/10">
                                    <Info className="w-5 h-5" />
                                </div>
                                <h2 className="font-serif text-lg md:text-xl font-bold text-neutral-900 tracking-tight">Executive Summary</h2>
                            </div>
                            <div className="text-neutral-600 text-justify text-xs md:text-sm leading-relaxed flex flex-col gap-4">
                                <p>
                                    The National Digital Library of India (NDLI) Club is a dynamic and vibrant community established within Srinivasa Ramanujan Institute of Technology. Rooted in the mission of the NDLI, these clubs are established within institutes and nodal bodies to create an immersive environment for students to expand their horizons beyond the confines of the traditional curriculum.
                                </p>
                                <p>
                                    NDLI Clubs are more than just spaces; they are nurturing hubs of exploration, innovation, and collaboration. These clubs provide a platform for students to engage in a diverse range of activities, events, and initiatives that foster the acquisition of knowledge, skills, and qualities essential for their professional and personal growth. Through a carefully curated blend of learning experiences, the NDLI Clubs empower students to become well-rounded individuals poised to excel in their chosen fields.
                                </p>
                            </div>
                        </div>

                        {/* Right: milestones and stats grids */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center border border-orange-100 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <BookOpen className="w-4.5 h-4.5" />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-xl md:text-2xl font-serif font-black text-neutral-950">6.0Cr+</h4>
                                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold mt-1">Digital Resources</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center border border-orange-100 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Users className="w-4.5 h-4.5" />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-xl md:text-2xl font-serif font-black text-neutral-950">400+</h4>
                                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold mt-1">Registered Members</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center border border-orange-100 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Calendar className="w-4.5 h-4.5" />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-xl md:text-2xl font-serif font-black text-neutral-950">20+</h4>
                                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold mt-1">Events Logged</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary flex items-center justify-center border border-orange-100 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <CheckCircle2 className="w-4.5 h-4.5" />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-xl md:text-2xl font-serif font-black text-neutral-950">Active</h4>
                                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold mt-1">Sync Status</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. CORE OBJECTIVES */}
                <div className="section-container mb-12">
                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-200/80 shadow-sm flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/10">
                                <Target className="w-5 h-5" />
                            </div>
                            <h2 className="font-serif text-lg md:text-xl font-bold text-neutral-900 tracking-tight">Academic Focus Areas</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {objectives.map((obj, idx) => (
                                <div
                                    key={idx}
                                    className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200/60 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-3 group"
                                >
                                    <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center border border-neutral-200/80 group-hover:bg-primary group-hover:border-primary transition-all shrink-0">
                                        <span className="group-hover:text-white transition-colors">
                                            {obj.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-sm md:text-base font-bold text-neutral-950 mb-1 group-hover:text-primary transition-colors">{obj.title}</h4>
                                        <p className="text-neutral-500 text-xs leading-relaxed text-justify">{obj.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. EXECUTIVE COMMITTEE PROFILE DIRECTORY */}
                <div className="section-container mb-12">
                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-200/80 shadow-sm flex flex-col gap-6">
                        
                        {/* Header */}
                        <div className="flex items-center gap-3 border-b border-neutral-100 pb-4 text-left">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/10">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-serif text-lg md:text-xl font-bold text-neutral-900 tracking-tight">Executive Roster</h2>
                                <p className="text-xs text-neutral-400">SRIT NDLI Club Committee Members</p>
                            </div>
                        </div>

                        {/* Profiles Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
                            <AnimatePresence mode="popLayout">
                                {executiveMembers.map((member) => (
                                    <motion.div
                                        layout
                                        key={member.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200/60 flex flex-col justify-between hover:border-primary/25 hover:shadow-md transition-all group relative overflow-hidden"
                                    >
                                        {/* Card Top Details */}
                                        <div className="flex flex-col gap-4">
                                            {/* Avatar Icon */}
                                            <div className="flex justify-between items-start">
                                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${member.bgGradient} flex items-center justify-center text-white font-serif text-sm font-extrabold shadow-sm border-2 border-white group-hover:scale-105 transition-transform`}>
                                                    {member.initials}
                                                </div>
                                                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border bg-orange-50 text-primary border-orange-100">
                                                    {member.role}
                                                </span>
                                            </div>
                                            
                                            <div className="text-left">
                                                <h4 className="font-serif text-sm md:text-base font-extrabold text-neutral-955 group-hover:text-primary transition-colors leading-snug truncate">
                                                    {member.name}
                                                </h4>
                                                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mt-0.5 truncate leading-none">
                                                    {member.designation}
                                                </p>
                                                <p className="text-[11px] text-neutral-450 leading-normal truncate mt-1">
                                                    {member.department}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Card Actions / Details */}
                                        <div className="mt-4 pt-3.5 border-t border-neutral-200/50 flex justify-between items-center">
                                            {member.email ? (
                                                <a 
                                                    href={`mailto:${member.email}`} 
                                                    className="flex items-center gap-1.5 text-neutral-500 hover:text-primary transition-colors text-[10px] font-mono leading-none"
                                                    title={member.email}
                                                >
                                                    <Mail className="w-3.5 h-3.5" />
                                                    <span className="max-w-[130px] truncate">{member.email}</span>
                                                </a>
                                            ) : (
                                                <span className="text-[10px] text-neutral-400 font-mono">No Email</span>
                                            )}
                                            
                                            {member.phone && (
                                                <a 
                                                    href={`tel:${member.phone}`}
                                                    className="flex items-center gap-1 text-[9px] text-neutral-450 hover:text-primary transition-colors font-mono" 
                                                    title={member.phone}
                                                >
                                                    <Phone className="w-3 h-3 text-neutral-400" />
                                                    <span>Call</span>
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                {/* 5. UNIFIED LIVE SPREADSHEET PORTAL TERMINAL */}
                <div id="data-center" className="section-container mb-12">
                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-200/80 shadow-sm flex flex-col gap-5">
                        
                        {/* Section Header */}
                        <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center border border-primary/10">
                                <Server className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-serif text-lg md:text-xl font-bold text-neutral-900 tracking-tight">Live Data Center</h2>
                                <p className="text-xs text-neutral-400">Institutional rosters and catalog ledgers synced in real-time</p>
                            </div>
                        </div>

                        {/* Top Switching Tabs bar */}
                        <div className="flex bg-neutral-100 rounded-xl p-1 gap-1 overflow-x-auto no-scrollbar border border-neutral-200/60">
                            {sheets.map(sheet => {
                                const isSelected = sheetTab === sheet.id;
                                return (
                                    <button
                                        key={sheet.id}
                                        onClick={() => setSheetTab(sheet.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                                            isSelected 
                                                ? 'bg-primary text-white shadow-sm' 
                                                : 'text-neutral-600 hover:text-neutral-950'
                                        }`}
                                    >
                                        {sheet.icon}
                                        <span>{sheet.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Terminal Container */}
                        <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-md flex flex-col">
                            
                            {/* Terminal Console Header */}
                            <div className="bg-neutral-900 px-5 py-4 flex items-center justify-between border-b border-neutral-800 flex-wrap gap-2">
                                <div className="flex items-center gap-4">
                                    {/* Mac-style Buttons */}
                                    <div className="flex gap-1.5 shrink-0">
                                        <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                                        <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                                    </div>
                                    
                                    {/* Division hairline */}
                                    <div className="w-px h-4 bg-neutral-800 hidden sm:block" />

                                    {/* Status Feed */}
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-300 font-bold">
                                            Syncing Google Sheet Database
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="hidden md:inline font-mono text-[9px] text-neutral-500">
                                        Active Log: {activeSheet.label}
                                    </span>
                                    <a 
                                        href={activeSheet.src.replace('&amp;', '&')} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-[10px] font-mono font-bold text-neutral-400 hover:text-white bg-neutral-850 hover:bg-neutral-800 rounded px-2.5 py-1 border border-neutral-800 transition-colors"
                                    >
                                        <span>Expand Fullscreen</span>
                                        <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>

                            {/* Spreadsheet Render Frame */}
                            <div className="relative bg-neutral-50 h-[480px] sm:h-[600px] w-full">
                                <AnimatePresence mode="wait">
                                    <motion.iframe 
                                        key={activeSheet.id}
                                        src={activeSheet.src}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="w-full h-full border-0 absolute inset-0"
                                        title={`${activeSheet.label} Frame`}
                                        loading="lazy"
                                    />
                                </AnimatePresence>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 6. EXTERNAL LINKS & PORTAL SUPPORTS */}
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                        
                        {/* Help Desk Details */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-200/80 shadow-sm flex flex-col justify-between text-left">
                            <div className="flex items-center gap-3 border-b border-neutral-100 pb-3 mb-4">
                                <div className="w-8.5 h-8.5 rounded-lg bg-orange-50 text-primary flex items-center justify-center border border-orange-100">
                                    <Phone className="w-4.5 h-4.5" />
                                </div>
                                <h3 className="font-serif text-base font-bold text-neutral-900 tracking-tight">Institutional Support</h3>
                            </div>
                            
                            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed mb-4">
                                If you require assistance regarding student registration credentials, local library memberships, or IIT KGP access keys, reach out directly to the coordinator.
                            </p>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-neutral-700 text-xs md:text-sm font-mono">
                                    <Users className="w-4 h-4 text-neutral-400 shrink-0" />
                                    <span>B Chandra kala, Asst. Librarian</span>
                                </div>
                                <a 
                                    href="mailto:chandrakala.hs@srit.ac.in" 
                                    className="flex items-center gap-3 text-neutral-600 hover:text-primary transition-colors text-xs md:text-sm font-mono"
                                >
                                    <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                                    <span className="underline">chandrakala.hs@srit.ac.in</span>
                                </a>
                                <div className="flex items-center gap-3 text-neutral-600 text-xs md:text-sm font-mono">
                                    <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                                    <span>+91 8341050076</span>
                                </div>
                            </div>
                        </div>

                        {/* Official Links */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 border border-neutral-200/80 shadow-sm flex flex-col justify-between text-left">
                            <div className="flex items-center gap-3 border-b border-neutral-100 pb-3 mb-4">
                                <div className="w-8.5 h-8.5 rounded-lg bg-orange-50 text-primary flex items-center justify-center border border-orange-100">
                                    <Globe className="w-4.5 h-4.5" />
                                </div>
                                <h3 className="font-serif text-base font-bold text-neutral-900 tracking-tight">External Links</h3>
                            </div>

                            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed mb-4">
                                Log in directly to the central National Digital Library repositories or check enrollments on the main academic portal.
                            </p>

                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://ndl.iitkgp.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3.5 bg-neutral-50 hover:bg-orange-50/15 rounded-xl border border-neutral-200/60 hover:border-primary/20 group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center border border-neutral-200 shrink-0">
                                            <BookOpen className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <span className="text-xs md:text-sm font-bold text-neutral-800 group-hover:text-primary transition-colors">National Digital Library</span>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-neutral-450 group-hover:text-primary transition-colors" />
                                </a>

                                <a
                                    href="https://club.ndl.iitkgp.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3.5 bg-neutral-50 hover:bg-orange-50/15 rounded-xl border border-neutral-200/60 hover:border-primary/20 group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center border border-neutral-200 shrink-0">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <span className="text-xs md:text-sm font-bold text-neutral-800 group-hover:text-primary transition-colors">NDLI Club Portal</span>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-neutral-450 group-hover:text-primary transition-colors" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default NdliClubPage;

import React from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { getDepartmentBySlug, type DepartmentData } from '../data/departments';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DepartmentAbout from '../features/departments/DepartmentAbout';
import DepartmentFaculty from '../features/departments/DepartmentFaculty';
import DepartmentStudents from '../features/departments/DepartmentStudents';
import DepartmentGallery from '../features/departments/DepartmentGallery';
import DepartmentCourseStructure from '../features/departments/DepartmentCourseStructure';
import DepartmentProjects from '../features/departments/DepartmentProjects';
import DepartmentOverview from '../features/departments/DepartmentOverview';
import { Info, BookOpen, Layers, GraduationCap, Users, Image as ImageIcon, FileText } from 'lucide-react';

const getSidebarItems = (dept: DepartmentData) => {
    const items = [
        { key: 'about', label: 'About Us', icon: <Info className="w-[18px] h-[18px]" strokeWidth={2.2} /> },
        { key: 'course', label: 'Course Structure', icon: <BookOpen className="w-[18px] h-[18px]" strokeWidth={2.2} /> },
        { key: 'program', label: 'Projects', icon: <Layers className="w-[18px] h-[18px]" strokeWidth={2.2} /> },
        { key: 'faculty', label: 'Faculty', icon: <GraduationCap className="w-[18px] h-[18px]" strokeWidth={2.2} /> },
        { key: 'students', label: 'Students', icon: <Users className="w-[18px] h-[18px]" strokeWidth={2.2} /> },
        { key: 'gallery', label: 'Gallery', icon: <ImageIcon className="w-[18px] h-[18px]" strokeWidth={2.2} /> },
    ];
    
    if (dept?.overview && dept.overview.length > 0) {
        items.splice(1, 0, { key: 'overview', label: 'Program Overview', icon: <FileText className="w-[18px] h-[18px]" strokeWidth={2.2} /> });
    }
    
    return items;
};

const DepartmentPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const dept = getDepartmentBySlug(slug || '');
    const location = useLocation();
    const navigate = useNavigate();

    const pathParts = location.pathname.split('/').filter(Boolean);
    const activeTab = pathParts.length > 2 ? pathParts[2] : 'about';

    const handleTabChange = (tabKey: string) => {
        document.documentElement.style.scrollBehavior = 'smooth';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/department/${slug}/${tabKey}`);
    };

    if (!dept) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="font-serif text-5xl font-semibold mb-4 text-neutral-dark">
                        Department Not Found
                    </h1>
                    <Link to="/" className="font-semibold text-primary">
                        ← Return to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return <DepartmentAbout dept={dept} />;
            case 'overview':
                return <DepartmentOverview dept={dept} />;
            case 'faculty':
                return <DepartmentFaculty dept={dept} />;
            case 'course':
                return <DepartmentCourseStructure dept={dept} />;
            case 'program':
                return <DepartmentProjects dept={dept} />;
            case 'students':
                return <DepartmentStudents />;
            case 'gallery':
                return <DepartmentGallery dept={dept} />;
            default:
                return <DepartmentAbout dept={dept} />;
        }
    };

    const currentSidebarItems = getSidebarItems(dept);

    return (
        <div className="min-h-screen bg-white">
            {/* Main Navbar */}
            <Navbar />

            <div className="pt-[114px] lg:pt-[130px] flex">
                {/* Sidebar */}
                <aside className="hidden lg:flex flex-col fixed top-[114px] lg:top-[130px] left-0 bottom-0 w-[270px] z-30 overflow-y-auto bg-white border-r border-primary/10">
                    <div className="px-6 pt-8 pb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-primary/15 text-neutral-dark">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {dept.code}
                        </div>

                        <h2 className="font-serif text-2xl font-semibold mt-4 text-neutral-dark leading-tight">
                            {dept.name}
                        </h2>
                    </div>

                    <div className="mx-6 mb-4 border-t border-neutral-dark/10" />

                    <nav className="px-4 flex-1">
                        <p className="px-3 text-[11px] font-bold uppercase tracking-widest mb-4 text-neutral-dark/40">
                            Menu
                        </p>

                        {currentSidebarItems.map((item) => {
                            const isActive = activeTab === item.key;
                            return (
                                <button
                                    key={item.key}
                                    onClick={() => handleTabChange(item.key)}
                                    className={`w-full text-left flex items-center gap-3.5 px-4 py-2.5 rounded-xl mb-1 transition-all duration-300 group ${
                                        isActive 
                                            ? 'bg-[#F85E00] text-white font-semibold shadow-md shadow-[#F85E00]/15 scale-[1.01]' 
                                            : 'bg-transparent text-neutral-600 hover:bg-neutral-50 hover:text-[#F85E00] font-medium'
                                    }`}
                                >
                                    <span className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-[#F85E00]'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="text-[14px] tracking-[0.01em]">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Bottom Stats */}
                    <div className="px-4 py-4 mt-auto border-t border-neutral-dark/10 bg-neutral-50/40">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-2xl p-2.5 bg-white border border-neutral-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                                <p className="text-[9.5px] font-bold uppercase tracking-wide text-neutral-400">Faculty</p>
                                <p className="text-lg font-bold text-[#F85E00] mt-1">{dept.stats.faculty}</p>
                            </div>
                            <div className="rounded-2xl p-2.5 bg-white border border-neutral-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                                <p className="text-[9.5px] font-bold uppercase tracking-wide text-neutral-400">Labs</p>
                                <p className="text-lg font-bold text-[#F85E00] mt-1">{dept.stats.labs}</p>
                            </div>
                            <div className="rounded-2xl p-2.5 bg-white border border-neutral-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                                <p className="text-[9.5px] font-bold uppercase tracking-wide text-neutral-400">Students</p>
                                <p className="text-lg font-bold text-[#F85E00] mt-1">{dept.stats.students}</p>
                            </div>
                            <div className="rounded-2xl p-2.5 bg-white border border-neutral-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between">
                                <p className="text-[9.5px] font-bold uppercase tracking-wide text-neutral-400">Placements</p>
                                <p className="text-lg font-bold text-[#F85E00] mt-1">{dept.stats.placement}</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0 lg:ml-[270px] min-h-screen">
                    <section className="relative overflow-hidden min-h-[300px] lg:min-h-[400px] flex items-end">
                        <div className="absolute inset-0">
                            <img src={dept.image} alt={dept.fullName} className="w-full h-full object-cover" />
                            {/* Replaced the harsh orange with a premium cinematic dark gradient for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>
                        <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 lg:px-12 lg:py-16 w-full">
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                                {dept.fullName}
                            </h1>
                            <p className="text-white/90 text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 max-w-3xl font-medium">
                                {dept.tagline}
                            </p>
                        </div>
                    </section>

                    <div className="lg:hidden px-4 sm:px-6 pt-5 sm:pt-6 -mb-2 sm:-mb-4 overflow-x-auto no-scrollbar">
                        <div className="flex gap-2 min-w-max pb-2">
                            {currentSidebarItems.map((item) => {
                                const isActive = activeTab === item.key;
                                return (
                                    <button
                                        key={item.key}
                                        onClick={() => handleTabChange(item.key)}
                                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-[14px] font-semibold whitespace-nowrap transition-all duration-300 ${
                                            isActive 
                                                ? 'bg-[#F85E00] text-white shadow-lg shadow-[#F85E00]/15' 
                                                : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50'
                                        }`}
                                    >
                                        <span className={isActive ? 'text-white' : 'text-neutral-400'}>
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="px-4 sm:px-6 py-8 sm:py-10">
                        {renderContent()}
                    </div>

                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default DepartmentPage;

import React, { useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { getDepartmentBySlug, type DepartmentData } from '../data/departments';
import DepartmentNavbar from '../components/layout/DepartmentNavbar';
import Footer from '../components/layout/Footer';
import DepartmentAbout from '../features/departments/DepartmentAbout';
import DepartmentFaculty from '../features/departments/DepartmentFaculty';
import DepartmentStudents from '../features/departments/DepartmentStudents';
import DepartmentGallery from '../features/departments/DepartmentGallery';
import DepartmentCourseStructure from '../features/departments/DepartmentCourseStructure';
import DepartmentProjects from '../features/departments/DepartmentProjects';
import DepartmentOverview from '../features/departments/DepartmentOverview';
import DepartmentOutcome from '../features/departments/DepartmentOutcome';
import DepartmentEContent from '../features/departments/DepartmentEContent';
import DepartmentStudentChapters from '../features/departments/DepartmentStudentChapters';
import DepartmentAccordion from '../components/common/DepartmentAccordion';
import {
    Info,
    BookOpen,
    Layers,
    GraduationCap,
    Users,
    Image as ImageIcon,
    FileText,
    Target,
    Monitor,
    Network
} from 'lucide-react';

const getSidebarItems = (dept: DepartmentData) => {
    if (dept.slug === 'cse') {
        return [
            {
                key: 'about',
                label: 'About Us',
                icon: <Info className="w-[18px] h-[18px]" strokeWidth={2.2} />
            },
            {
                key: 'overview',
                label: 'Program Overview',
                icon: <FileText className="w-[18px] h-[18px]" strokeWidth={2.2} />
            },
            {
                key: 'course',
                label: 'Course Structure',
                icon: <BookOpen className="w-[18px] h-[18px]" strokeWidth={2.2} />
            },
            {
                key: 'outcome',
                label: 'Outcome Based Education',
                icon: <Target className="w-[18px] h-[18px]" strokeWidth={2.2} />
            },
            {
                key: 'e-content',
                label: 'E-Content',
                icon: <Monitor className="w-[18px] h-[18px]" strokeWidth={2.2} />
            },
            {
                key: 'faculty',
                label: 'Faculty',
                icon: <GraduationCap className="w-[18px] h-[18px]" strokeWidth={2.2} />
            },
            {
                key: 'students',
                label: 'Students',
                icon: <Users className="w-[18px] h-[18px]" strokeWidth={2.2} />
            },
            {
                key: 'chapters',
                label: 'Students Chapters',
                icon: <Network className="w-[18px] h-[18px]" strokeWidth={2.2} />
            }
        ];
    }

    const items = [
        {
            key: 'about',
            label: 'About Us',
            icon: (
                <Info
                    className="w-[18px] h-[18px]"
                    strokeWidth={2.2}
                />
            ),
        },
        {
            key: 'course',
            label: 'Course Structure',
            icon: (
                <BookOpen
                    className="w-[18px] h-[18px]"
                    strokeWidth={2.2}
                />
            ),
        },
        {
            key: 'program',
            label: 'Projects',
            icon: (
                <Layers
                    className="w-[18px] h-[18px]"
                    strokeWidth={2.2}
                />
            ),
        },
        {
            key: 'faculty',
            label: 'Faculty',
            icon: (
                <GraduationCap
                    className="w-[18px] h-[18px]"
                    strokeWidth={2.2}
                />
            ),
        },
        {
            key: 'students',
            label: 'Students',
            icon: (
                <Users
                    className="w-[18px] h-[18px]"
                    strokeWidth={2.2}
                />
            ),
        },
        {
            key: 'gallery',
            label: 'Gallery',
            icon: (
                <ImageIcon
                    className="w-[18px] h-[18px]"
                    strokeWidth={2.2}
                />
            ),
        },
    ];

    if (dept?.overview && dept.overview.length > 0) {
        items.splice(1, 0, {
            key: 'overview',
            label: 'Program Overview',
            icon: (
                <FileText
                    className="w-[18px] h-[18px]"
                    strokeWidth={2.2}
                />
            ),
        });
    }

    return items;
};


const DepartmentPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const dept = getDepartmentBySlug(slug || '');

    const location = useLocation();
    const navigate = useNavigate();

    const pathParts = location.pathname
        .split('/')
        .filter(Boolean);

    const activeTab =
        pathParts.length > 2
            ? pathParts[2]
            : 'about';


    /*
     * Change department section.
     */
    const handleTabChange = (tabKey: string) => {
        navigate(`/department/${slug}/${tabKey}`);
    };


    /*
     * Smoothly return to the top whenever
     * the department section changes.
     */
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [activeTab]);


    /*
     * Department not found.
     */
    if (!dept) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">

                    <h1 className="font-serif text-5xl font-semibold mb-4 text-neutral-dark">
                        Department Not Found
                    </h1>

                    <Link
                        to="/"
                        className="font-semibold text-primary"
                    >
                        ← Return to Homepage
                    </Link>

                </div>
            </div>
        );
    }


    /*
     * Render the selected department section.
     */
    const renderContent = () => {
        switch (activeTab) {

            case 'about':
                return (
                    <DepartmentAbout
                        dept={dept}
                    />
                );

            case 'overview':
                return (
                    <DepartmentOverview
                        dept={dept}
                    />
                );

            case 'faculty':
                return (
                    <DepartmentFaculty
                        dept={dept}
                    />
                );

            case 'course':
                return (
                    <DepartmentCourseStructure
                        dept={dept}
                    />
                );

            case 'outcome':
                if (dept.slug === 'cse') {
                    return (
                        <DepartmentAccordion
                            title="OUTCOME BASED EDUCATION"
                            items={[
                                { title: 'Program Educational Objectives (PEOs)' },
                                { title: 'Program Outcomes (POs) & Program Specific Outcome (PSOs)' },
                                { title: 'Outcome Based Education Manual' },
                                { title: 'Attainment of Course Outcomes' },
                                { title: 'PO and PSO Attainment' },
                            ]}
                        />
                    );
                }
                return (
                    <DepartmentOutcome />
                );

            case 'e-content':
                return (
                    <DepartmentEContent
                        dept={dept}
                    />
                );

            case 'chapters':
                return (
                    <DepartmentStudentChapters
                        dept={dept}
                    />
                );

            case 'program':
                return (
                    <DepartmentProjects
                        dept={dept}
                    />
                );

            case 'students':
                if (dept.slug === 'cse') {
                    return (
                        <DepartmentAccordion
                            title="STUDENTS"
                            items={[
                                { title: 'Student Academic Activities' },
                                { title: 'Cocurricular and Extra Curricular Activities' },
                                { title: 'Students Internship' },
                                { title: 'Students Projects' },
                                { title: 'Placements' },
                                { title: 'Roll of Honors' },
                                { title: 'Logic of the Day' },
                            ]}
                        />
                    );
                }
                return (
                    <DepartmentStudents />
                );

            case 'gallery':
                return (
                    <DepartmentGallery
                        dept={dept}
                    />
                );

            default:
                return (
                    <DepartmentAbout
                        dept={dept}
                    />
                );
        }
    };


    /*
     * Department navigation items.
     */
    const currentSidebarItems = getSidebarItems(dept);


    return (
        <div className="min-h-screen bg-white">

            {/* =====================================================
                DEPARTMENT NAVBAR
            ===================================================== */}

            <DepartmentNavbar
                dept={dept}
                items={currentSidebarItems}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />


            {/* =====================================================
                DEPARTMENT PAGE CONTENT
            ===================================================== */}

            <main className="w-full min-h-screen">

                {dept.slug === 'cse' ? (
                    /* ── CSE: Sidebar + Content layout ── */
                    <div className="flex min-h-[calc(100vh-62px)] bg-neutral-50/30">

                        {/* LEFT SIDEBAR — CSE Reference Match */}
                        <aside
                            className="hidden lg:flex w-[280px] shrink-0 sticky top-[62px] self-start h-[calc(100vh-62px)] flex-col overflow-hidden"
                            style={{ background: '#1C2133', boxShadow: '4px 0 20px rgba(0,0,0,0.25)' }}
                        >

                            {/* ── HEADER: graduation cap + CSE / Department ── */}
                            <div
                                className="flex items-center gap-3 px-5 py-5 shrink-0"
                                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                            >
                                {/* Orange rounded icon container */}
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                    style={{
                                        background: 'linear-gradient(145deg, #FF8C42 0%, #F4511E 100%)',
                                        boxShadow: '0 4px 12px rgba(244,81,30,0.40)',
                                    }}
                                >
                                    <GraduationCap size={20} strokeWidth={2} color="#fff" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-[15px] leading-tight tracking-wide">CSE</p>
                                    <p className="text-[13px] leading-tight mt-[2px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Department</p>
                                </div>
                            </div>

                            {/* ── NAVIGATION ── */}
                            <nav className="flex-1 overflow-y-auto py-3 flex flex-col gap-[2px] scrollbar-hide px-3">
                                {currentSidebarItems.map((item, index) => {
                                    const active = activeTab === item.key || (item.key === 'about' && activeTab === '');
                                    return (
                                        <motion.button
                                            key={item.key}
                                            type="button"
                                            onClick={() => handleTabChange(item.key)}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + index * 0.04, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                                            className="w-full flex items-center gap-3 px-3 py-[10px] rounded-xl text-left transition-all duration-200"
                                            style={active ? {
                                                background: 'linear-gradient(135deg, #FF8C42 0%, #F4511E 100%)',
                                                boxShadow: '0 4px 18px rgba(244,81,30,0.38)',
                                            } : {
                                                background: 'transparent',
                                            }}
                                        >
                                            {/* Icon */}
                                            <span
                                                className="flex items-center justify-center w-[22px] h-[22px] shrink-0"
                                                style={{ color: active ? '#fff' : 'rgba(255,255,255,0.45)' }}
                                            >
                                                {item.icon}
                                            </span>

                                            {/* Label */}
                                            <span
                                                className="flex-1 text-[13.5px] font-semibold leading-snug"
                                                style={{ color: active ? '#fff' : 'rgba(255,255,255,0.65)' }}
                                            >
                                                {item.label}
                                            </span>

                                            {/* Chevron — active only */}
                                            {active && (
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
                                                    <path d="M5.5 3.5l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </nav>

                            {/* ── BOTTOM: CollegeMain.jpg + Learn/Innovate/Lead ── */}
                            <div className="relative shrink-0 overflow-hidden" style={{ height: '160px' }}>

                                {/* Image with top mask blend */}
                                <img
                                    src="/CollegeMain.jpg"
                                    alt="SRIT Campus"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 35%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 35%)',
                                    }}
                                />

                                {/* Dark + orange tint overlay */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(20,16,10,0.88) 0%, rgba(200,70,20,0.30) 55%, transparent 100%)',
                                    }}
                                />

                                {/* Learn / Innovate / Lead */}
                                <div className="absolute bottom-0 left-0 right-0 pb-5 px-5 flex items-stretch gap-[10px] z-10">
                                    {/* Vertical orange line */}
                                    <div
                                        className="w-[2.5px] rounded-full shrink-0 self-stretch"
                                        style={{ background: '#F4511E', minHeight: '46px' }}
                                    />
                                    <div className="flex flex-col gap-[1px]">
                                        <span className="text-white text-[13px] font-semibold leading-snug" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>Learn</span>
                                        <span className="text-[13px] font-bold leading-snug" style={{ color: '#FF8C42', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>Innovate</span>
                                        <span className="text-white text-[13px] font-semibold leading-snug" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>Lead</span>
                                    </div>
                                </div>
                            </div>

                        </aside>

                        {/* MAIN CONTENT */}
                        <div className="flex-1 min-w-0">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10 max-w-[1240px] mx-auto">
                                        {renderContent()}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                ) : (
                    /* ── All other depts: original full-width layout ── */
                    <AnimatePresence
                        mode="wait"
                        initial={false}
                    >

                        <motion.div
                            key={activeTab}

                            initial={{
                                opacity: 0,
                                y: 14,
                                filter: 'blur(6px)',
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                            }}

                            exit={{
                                opacity: 0,
                                y: -10,
                                filter: 'blur(4px)',
                            }}

                            transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            {/* =================================================
                                ABOUT PAGE HERO
                            ================================================= */}

                            {activeTab === 'about' && dept.slug !== 'cse' && (
                                <section className="relative overflow-hidden min-h-[300px] lg:min-h-[400px] flex items-end">

                                    {/* Background Image */}
                                    <div className="absolute inset-0">

                                        <img
                                            src={dept.image}
                                            alt={dept.fullName}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Cinematic Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                    </div>


                                    {/* Hero Content */}
                                    <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 lg:px-12 lg:py-16 w-full">

                                        <motion.h1
                                            initial={{
                                                opacity: 0,
                                                x: -25,
                                            }}

                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}

                                            transition={{
                                                delay: 0.12,
                                                duration: 0.55,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}

                                            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
                                        >
                                            {dept.fullName}
                                        </motion.h1>


                                        <motion.p
                                            initial={{
                                                opacity: 0,
                                                x: -20,
                                            }}

                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}

                                            transition={{
                                                delay: 0.2,
                                                duration: 0.5,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}

                                            className="text-white/90 text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 max-w-3xl font-medium"
                                        >
                                            {dept.tagline}
                                        </motion.p>

                                    </div>

                                </section>
                            )}


                            {/* =================================================
                                DEPARTMENT SECTION CONTENT
                            ================================================= */}

                            <div className="px-4 sm:px-6 py-8 sm:py-10">

                                {renderContent()}

                            </div>

                        </motion.div>

                    </AnimatePresence>
                )}

            </main>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <Footer />

        </div>
    );
};


export default DepartmentPage;
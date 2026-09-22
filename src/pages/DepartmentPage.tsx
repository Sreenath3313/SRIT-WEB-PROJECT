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
                return (
                    <DepartmentOutcome
                        dept={dept}
                    />
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

                        {/* LEFT SIDEBAR */}
                        <aside
                            className="w-[210px] shrink-0 bg-white border-r border-neutral-200 sticky top-[62px] self-start h-[calc(100vh-62px)] overflow-y-auto"
                            style={{ boxShadow: '4px 0 16px rgba(0,0,0,0.03)' }}
                        >
                            <nav className="py-5 flex flex-col gap-[2px]">
                                {currentSidebarItems.map((item, index) => {
                                    const active = activeTab === item.key || (item.key === 'about' && activeTab === '');
                                    return (
                                        <motion.button
                                            key={item.key}
                                            type="button"
                                            onClick={() => handleTabChange(item.key)}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + index * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            className={`w-full flex items-center gap-3 px-5 py-3 text-[13.5px] font-bold transition-all duration-200 relative group ${
                                                active
                                                    ? 'text-[#FF5422] bg-[#FF5422]/5'
                                                    : 'text-neutral-600 hover:text-[#FF5422] hover:bg-neutral-50'
                                            }`}
                                        >
                                            {/* Active left border */}
                                            {active && (
                                                <span className="absolute left-0 top-0 h-full w-[3px] bg-[#FF5422] rounded-r-full" />
                                            )}

                                            {/* Label */}
                                            <span className="leading-tight text-left">{item.label}</span>
                                        </motion.button>
                                    );
                                })}
                            </nav>
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
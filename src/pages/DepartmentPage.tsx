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
import {
    Info,
    BookOpen,
    Layers,
    GraduationCap,
    Users,
    Image as ImageIcon,
    FileText,
} from 'lucide-react';


const getSidebarItems = (dept: DepartmentData) => {
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

            case 'program':
                return (
                    <DepartmentProjects
                        dept={dept}
                    />
                );

            case 'students':
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

            <main className="w-full min-h-screen overflow-hidden">

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

                        {activeTab === 'about' && (
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

            </main>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <Footer />

        </div>
    );
};


export default DepartmentPage;
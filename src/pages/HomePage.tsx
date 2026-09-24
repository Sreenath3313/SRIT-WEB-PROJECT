import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../components/layout/Navbar';
import Hero from '../features/home/Hero';
import Stats from '../features/home/Stats';
import About from '../features/home/About';
import CampusLife from '../features/campus/CampusLife';
import AlumniSuccess from '../features/placements/AlumniSuccess';
import Placements from '../features/placements/Placements';
import UpcomingEvents from '../features/home/UpcomingEvents';
import Admissions from '../features/admissions/Admissions';
import Footer from '../components/layout/Footer';
import Accreditations from '../features/home/Accreditations';
import GlobalTieUps from '../features/institution/GlobalTieUps';
import LeadershipVision from '../features/institution/LeadershipVision';
import SocialMediaFeeds from '../features/home/SocialMediaFeeds';
import CSRActivities from '../features/institution/CSRActivities';
import StudentAchievements from '../features/campus/StudentAchievements';


const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-neutral-900">

            {/* =====================================================
                MAIN NAVBAR
            ===================================================== */}

            <Navbar />


            <main className="bg-white">

                {/* =================================================
                    HERO
                ================================================= */}

                <section className="relative bg-white">
                    <Hero />
                </section>


                {/* =================================================
                    ACCREDITATIONS + STATS
                ================================================= */}

                <section
                    className="
                        relative
                        overflow-hidden
                        bg-white
                        pt-12
                        pb-8
                        lg:pt-16
                        lg:pb-12
                    "
                >

                    {/* Very subtle dot grid */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-[0.035]
                            bg-[radial-gradient(#9ca3af_1px,transparent_1px)]
                            [background-size:28px_28px]
                        "
                    />

                    {/* Soft white fade */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-b
                            from-white
                            via-transparent
                            to-white
                        "
                    />

                    <div className="relative section-container">

                        <div
                            className="
                                grid
                                grid-cols-1
                                lg:grid-cols-2
                                gap-8
                                lg:gap-12
                                items-stretch
                            "
                        >

                            {/* Accreditations */}
                            <div className="flex min-w-0">
                                <Accreditations />
                            </div>


                            {/* Stats */}
                            <div className="flex min-w-0">
                                <Stats />
                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    ORANGE DIVIDER
                ================================================= */}

                <div
                    className="
                        w-full
                        bg-white
                        flex
                        justify-center
                        py-5
                        lg:py-7
                        relative
                        z-10
                    "
                >

                    <motion.div
                        initial={{
                            scaleX: 0.92,
                            opacity: 0.7,
                        }}

                        animate={{
                            scaleX: 1,
                            opacity: 1,
                        }}

                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}

                        className="
                            w-[92%]
                            max-w-[1400px]
                            h-[3px]
                            bg-primary
                            rounded-full
                            origin-center
                        "
                    />

                </div>


                {/* =================================================
                    MAIN CONTENT

                    IMPORTANT:
                    These sections are intentionally NOT wrapped
                    in whileInView animations.

                    This keeps scrolling completely fluid.
                ================================================= */}

                <About />

                <GlobalTieUps />

                <LeadershipVision />

                <CampusLife />

                <Placements />

                <AlumniSuccess />

                <StudentAchievements />

                <UpcomingEvents />

                <CSRActivities />

                <SocialMediaFeeds />

                <Admissions />

            </main>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <Footer />

        </div>
    );
};


export default HomePage;
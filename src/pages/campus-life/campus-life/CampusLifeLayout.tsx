import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import PageHeader from '../../../components/common/PageHeader';
import { campusLifeSections } from './types';

interface CampusLifeLayoutProps {
    activeSectionId: string;
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

export const CampusLifeLayout: React.FC<CampusLifeLayoutProps> = ({
    activeSectionId,
    children,
    title,
}) => {
    const navigate = useNavigate();
    const activeSection =
        campusLifeSections.find((s) => s.id === activeSectionId) ||
        campusLifeSections[0];

    const displayTitle = title || activeSection.title;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-primary/20">
            {/* Global Navigation */}
            <Navbar />

            {/* Standard SRIT Cover Page */}
            <PageHeader title={displayTitle} categoryTitle="Campus Life" />

            {/* Main Content */}
            <main className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1 relative z-10 -mt-8">
                <div className="flex flex-col gap-8 w-full">
                    {/* Main Content Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-8"
                    >
                        <motion.div variants={itemVariants}>
                            {children}
                        </motion.div>
                    </motion.div>

                    {/* Right Sidebar — matches existing website pattern */}
                    
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CampusLifeLayout;

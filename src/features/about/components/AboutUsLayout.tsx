import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import PageHeader from '../../../components/common/PageHeader';

interface AboutUsLayoutProps {
    children: React.ReactNode;
    title: string;
}

const AboutUsLayout: React.FC<AboutUsLayoutProps> = ({ children, title }) => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />

            <PageHeader title={title} categoryTitle="About Us" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[1100px] w-full mx-auto px-4 sm:px-5 md:px-6 py-8 lg:py-12 xl:py-16 flex-grow"
            >
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-12 prose prose-neutral max-w-none prose-headings:text-[#0A0903] prose-a:text-[#FF5422] hover:prose-a:text-[#FF5422]/80 prose-img:rounded-xl">
                    {children}
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default AboutUsLayout;

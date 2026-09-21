import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

interface AboutUsLayoutProps {
    children: React.ReactNode;
    title: string;
}

const AboutUsLayout: React.FC<AboutUsLayoutProps> = ({ children, title }) => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />

            {/* Hero Banner */}
            <div className="relative pt-[122px] pb-14 lg:pt-[140px] lg:pb-18 bg-[#0A0903] overflow-hidden">
                {/* Animated glowing orbs */}
                <motion.div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#FF5422]/20 blur-[140px]"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ translateX: '30%', translateY: '-30%' }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#FF5422]/15 blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    style={{ translateX: '-30%', translateY: '30%' }}
                />

                {/* Decorative grid lines */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'linear-gradient(#FF5422 1px, transparent 1px), linear-gradient(90deg, #FF5422 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />

                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 text-center">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center gap-2 text-xs text-neutral-500 font-semibold tracking-[0.15em] uppercase mb-5"
                    >
                        <Link to="/" className="hover:text-[#FF5422] transition-colors">Home</Link>
                        <span className="w-1 h-1 rounded-full bg-neutral-600" />
                        <span className="text-[#FF5422]">About Us</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white leading-tight mb-4"
                    >
                        {title}
                    </motion.h1>

                    {/* Animated underline */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#FF5422] to-orange-300 rounded-full origin-center"
                    />
                </div>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 py-12 lg:py-20 flex-grow"
            >
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-12 prose prose-neutral max-w-none prose-headings:text-[#0A0903] prose-a:text-[#FF5422] hover:prose-a:text-[#FF5422]/80 prose-img:rounded-xl">
                    {children}
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default AboutUsLayout;

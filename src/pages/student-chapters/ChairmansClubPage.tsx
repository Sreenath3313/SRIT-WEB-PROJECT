import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PageHeader from '../../components/common/PageHeader';
import { fadeUp, stagger } from '../../features/about/animations';

const ChairmansClubPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />
            <PageHeader title="Chairman's Club" categoryTitle="Student Chapters" />
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-[1300px] w-full mx-auto px-4 sm:px-5 md:px-6 py-8 lg:py-12 xl:py-16 flex-grow"
            >
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-12">
                    <motion.div variants={fadeUp} className="prose prose-neutral max-w-none">
                        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                            <img 
                                src="https://www.srit.ac.in/wp-content/uploads/2024/10/Chiarmansclub-logo-300x300.jpg" 
                                alt="Chairman's Club Logo" 
                                className="w-48 h-48 object-contain rounded-lg shadow-sm border border-neutral-100"
                            loading="lazy" />
                            <div>
                                <h2 className="text-[#0A0903] text-2xl md:text-3xl font-bold mb-4 mt-0">About Chairman's Club</h2>
                                <p className="text-neutral-700 leading-relaxed text-lg">
                                    Welcome to the Chairman's Club. Below you will find the details regarding our MOMs and members.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-bold text-[#0A0903] mb-6 border-b border-neutral-200 pb-3">MOM's and Members</h3>
                            <div className="w-full h-[800px] sm:h-[1200px] rounded-xl overflow-hidden shadow-sm border border-neutral-200">
                                <iframe 
                                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT8AJ2nW7q0yT4V78nqHfNpqLchDCFyg3w38WjRLWw_M5DIYWJVBzQFtOCDRClmjQ/pubhtml?widget=true&chrome=false&headers=false"
                                    className="w-full h-full border-0"
                                    title="Chairman's Club Data"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default ChairmansClubPage;

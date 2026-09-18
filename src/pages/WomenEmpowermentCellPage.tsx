import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const accordionData = [
    {
        title: 'Our Vision',
        content: `
            <h4 style="color: #ea580c; font-weight: 700; font-size: 18px; margin-bottom: 8px;">AIM:</h4>
            <p style="color: #374151; font-size: 15px; line-height: 1.8; text-align: justify; margin-bottom: 24px;">
                The Women Empowerment Cell aims to empower girl students and faculty, enhance their understanding of issues related to women and to make the college campus a safe place for girls and women and to address the practical issues related to the welfare and equal opportunities for Women faculty, staff and students. The cell aims at creating awareness of their rights and duties. Aiming at intellectual and social upliftment of the female students, the cell stands for facilitating women’s empowerment through guest lectures, seminars, awareness programs and other welfare activities.
            </p>
            <h4 style="color: #ea580c; font-weight: 700; font-size: 18px; margin-bottom: 8px;">VISION:</h4>
            <p style="color: #374151; font-size: 15px; line-height: 1.8; text-align: justify;">
                To promote general well-being of female students, teaching and non-teaching women staff of the College and to provide and maintain a dignified, congenial working environment for women and enable them to explore their imminent potential in all aspects.
            </p>
        `
    },
    {
        title: 'Our Mission',
        content: `
            <h4 style="color: #ea580c; font-weight: 700; font-size: 18px; margin-bottom: 8px;">MISSION:</h4>
            <p style="color: #374151; font-size: 15px; line-height: 1.8; text-align: justify;">
                To uplift the girls socially and intellectually, the cell conducts various awareness camps- health, legal, entrepreneurship, defense techniques, etc in order to equip them with the right knowledge for a life of equality, empowerment, personal enhancement and professional success.
            </p>
        `
    },
    {
        title: 'Objectives',
        content: `
            <p style="color: #ea580c; font-weight: 700; font-size: 16px; margin-bottom: 12px;"><strong>Broad Objectives:</strong></p>
            <ul style="list-style-type: disc; padding-left: 20px; color: #374151; font-size: 15px; line-height: 1.8;">
                <li style="margin-bottom: 8px;">To organize awareness programs on gender sensitization.</li>
                <li style="margin-bottom: 8px;">To motivate girl students to undertake activities that strengthen their confidence and make them believe in themselves.</li>
                <li style="margin-bottom: 8px;">Conducting various competitions to encourage their artistic talents for creative thinking.</li>
                <li style="margin-bottom: 8px;">Celebration of International Women’s Day on March 8th, every year.</li>
                <li style="margin-bottom: 8px;">To conduct workshops with a motive to train girls about self-defense, health benefits and skill development.</li>
                <li style="margin-bottom: 8px;">To provide a harassment free working atmosphere, by identifying and fixing responsibility on the concerned persons for ensuring equal treatment and participation by women in all areas.</li>
                <li style="margin-bottom: 8px;">To deal appropriately with reported cases of sexual harassment, abuse or discrimination, and initiate action against particular grievances in respect of unfair treatment due to gender bias.</li>
            </ul>
        `
    },
    {
        title: 'Team',
        content: `<p><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR7isFjzECoiKy5hlmRb4PwqrgCgFwYoZlPHH9pUZy3XBgjrWffpm-GdY2ZDVz-rrhu7rfMIVdd1go5/pubhtml?widget=true&amp;headers=false" width="100%" height="600" style="border: none; width: 100%; height: 600px; overflow: hidden;"></iframe></p>`
    },
    {
        title: 'Minutes of Meeting',
        content: `<p><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSo7_RQeABudRCQF1kxjmbqICYuYN11SVgLifTRC-qKoF_B_8WXe_2V2k0ZuN2KnqGFRqdtVDuw-mHo/pubhtml?widget=true&amp;headers=false" width="100%" height="800" style="border: none; width: 100%; height: 800px; overflow: hidden;"></iframe></p>`
    },
    {
        title: 'Activities',
        content: `<p><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRn36sCqqPKx0JXz7g4dVDgm-P2NpThC3_IojCKHaHG0c50DhIqrgsW70II9VXI3DLS4niNeGa_BjpB/pubhtml?widget=true&amp;headers=false" width="100%" height="600" style="border: none; width: 100%; height: 600px; overflow: hidden;"></iframe></p>`
    },
    {
        title: 'Contact',
        content: `
            <h4 style="color: #ea580c; font-weight: 700; font-size: 18px; margin-bottom: 12px;">Contact Us:</h4>
            <p style="color: #1f2937; font-size: 15px; line-height: 1.8; margin-bottom: 8px;">
                <strong style="color: #ea580c;">Dr. P. Vinatha</strong>, M.A, (English Lit), M.Sc (Psychology), Ph.D,<br />
                Associate Professor of English,<br />
                Srinivasa Ramanujan Institute of Technology,<br />
                Rotarypuram, Anantapuramu-515701.
            </p>
            <p style="color: #374151; font-size: 15px; line-height: 1.8;">
                <strong>Mail:</strong> <a href="mailto:wepcell@srit.ac.in" style="color: #ea580c; text-decoration: underline;">wepcell@srit.ac.in</a> &nbsp;|&nbsp; 
                <strong>Contact:</strong> <a href="tel:+919959803183" style="color: #ea580c; text-decoration: underline;">+91-9959803183</a>
            </p>
        `
    }
];

const WomenEmpowermentCellPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            {/* Top Campus Banner with Orange Title Bar */}
            <div className="pt-[114px] lg:pt-[130px] relative w-full">
                <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden">
                    <img 
                        src="/College 1.jpg" 
                        alt="SRIT Campus" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Centered Orange Banner */}
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                        <div className="w-full max-w-[1400px] bg-[#F85E00] py-4 sm:py-5 px-6 rounded-md shadow-lg text-center">
                            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
                                WOMEN EMPOWERMENT CELL
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empowering Women Emblem */}
            <div className="section-container flex flex-col items-center pt-8 pb-4">
                <img 
                    src="https://www.srit.ac.in/wp-content/uploads/2021/10/WOMEN-EMPOWERMENT-CELL.jpg" 
                    alt="Empowering Women Logo" 
                    className="w-[200px] sm:w-[240px] md:w-[260px] h-auto object-contain"
                />
            </div>

            {/* Content Container */}
            <div className="section-container pb-16">
                <div className="flex flex-col gap-8 w-full">
                    {accordionData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="w-full rounded-xl overflow-hidden transition-all duration-300 mb-4" style={{ border: isOpen ? '1px solid rgba(255, 84, 34, 0.25)' : '1px solid rgba(10, 9, 3, 0.06)', boxShadow: isOpen ? '0 4px 20px rgba(255, 84, 34, 0.12)' : '0 1px 4px rgba(0,0,0,0.06)' }}>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full p-4 sm:p-5 flex items-center justify-between transition-colors duration-300" style={{ background: '#0A0903' }} onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.background = '#1a1812'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#0A0903'; }}
                                >
                                    <h3 className="font-semibold text-[#FF5422] text-[18px] sm:text-[20px] text-left">
                                        {item.title}
                                    </h3>
                                    <ChevronDown
                                        className={`w-6 h-6 text-[#FF5422] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div
                                                className="p-6 sm:p-8 prose prose-neutral max-w-none w-full"
                                                dangerouslySetInnerHTML={{ __html: item.content }}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WomenEmpowermentCellPage;

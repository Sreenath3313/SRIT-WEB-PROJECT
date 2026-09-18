import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

interface AboutUsLayoutProps {
    children: React.ReactNode;
    title: string;
}

const sidebarLinks = [
    { label: 'Overview', href: '/about/overview' },
    { label: 'Vision & Mission', href: '/about/vision-mission' },
    { label: 'About Chairperson', href: '/about/chairperson' },
    { label: 'About Secretary', href: '/about/secretary' },
    { label: 'About Principal', href: '/about/principal' },
    { label: 'Governing Body', href: '/about/governing-body' },
    { label: 'SRIT Policies and Documents', href: '/about/policies-documents' },
    { label: 'Awards and Achievements', href: '/about/awards-achievements' },
    { label: 'Academic Council', href: '/about/academic-council' },
    { label: 'Finance Committee', href: '/about/finance-committee' },
    { label: 'Organization Chart', href: '/about/organization-chart' },
    { label: "MOU's", href: '/about/mous' },
    { label: 'Affiliations & Accreditations', href: '/about/affiliations-accreditations' },
    { label: 'Milestones', href: '/about/milestones' },
    { label: 'SRIT Standard Operating Procedures', href: '/about/standard-operating-procedures' },
    { label: 'Institutional Strategic Plan', href: '/about/institutional-strategic-plan' },
];

const AboutUsLayout: React.FC<AboutUsLayoutProps> = ({ children, title }) => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />

            {/* Banner Section */}
            <div className="relative pt-[120px] pb-12 lg:pt-[160px] lg:pb-16 bg-[#0A0903] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen -translate-x-1/3 translate-y-1/3" />
                </div>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm text-neutral-400 font-medium tracking-wider">
                        <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
                        <span>/</span>
                        <span className="text-primary">ABOUT US</span>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 py-12 lg:py-20 flex-grow">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    
                    {/* Sidebar */}
                    <aside className="w-full lg:w-[320px] shrink-0">
                        <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-neutral-200/60 overflow-hidden">
                            <div className="p-5 bg-neutral-50 border-b border-neutral-200/60">
                                <h3 className="font-serif text-xl font-bold text-[#0A0903]">
                                    About Us
                                </h3>
                            </div>
                            <nav className="flex flex-col p-2">
                                {sidebarLinks.map((link, index) => {
                                    const isActive = location.pathname === link.href;
                                    return (
                                        <Link
                                            key={index}
                                            to={link.href}
                                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                                isActive 
                                                    ? 'bg-primary/10 text-primary' 
                                                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary'
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="flex-1 min-w-0">
                        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/60 p-6 sm:p-8 lg:p-10 prose prose-neutral max-w-none prose-headings:text-[#0A0903] prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
                            {children}
                        </div>
                    </main>
                    
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUsLayout;

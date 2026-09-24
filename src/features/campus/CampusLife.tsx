import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const campusItems = [
    {
        id: '01',
        title: 'TECH_LABS',
        subtitle: 'Accessing secure facility imagery. High-resolution textures loaded.',
        image: '/ComputerLab.JPG',
        webp: '/ComputerLab.webp',
    },
    {
        id: '02',
        title: 'CLUB_HUBS',
        subtitle: 'Collaborative learning communities and innovation workspaces.',
        image: '/CollegeMain.jpg',
        webp: '/CollegeMain.webp',
    },
    {
        id: '03',
        title: 'SPORTS_ARENA',
        subtitle: 'Outdoor athletic grounds and professional indoor courts.',
        image: '/BasketBall.JPG',
        webp: '/BasketBall.webp',
    },
    {
        id: '04',
        title: 'CULTURAL_FEST',
        subtitle: 'Annual youth festivals and societal celebrations.',
        image: '/saro1.jpeg',
    },
    {
        id: '05',
        title: 'LIBRARY_ARCHIVES',
        subtitle: 'Vast collection of 51,477 Volumes and digital e-resources.',
        image: '/library.jpg',
        webp: '/library.webp',
    },
    {
        id: '06',
        title: 'TRANSIT_SYSTEM',
        subtitle: 'Fleet of 29 buses covering crucial routes for all scholars.',
        image: '/Transport.jpg',
        webp: '/Transport.webp',
    },
    {
        id: '07',
        title: 'INTERN_HOUSING',
        subtitle: 'Advanced programs handling student housing and skills integration.',
        image: '/Campus.JPG',
        webp: '/Campus.webp',
    },
];

import Notifications from '../notifications/Notifications';

const CampusLife: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section ref={ref} id="curriculum" className="scroll-mt-32 pt-20 md:pt-28 pb-12 md:pb-24 bg-neutral-50/50 relative overflow-hidden font-sans border-t border-neutral-200/60">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-60"></div>

            <div className="section-container relative z-10 w-full">
                {/* Notifications Section Added Before Gallery Interface */}
                <Notifications />
                
                {/* Header */}
                <div className="mb-8 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#FF5422] font-sans font-bold text-[10px] md:text-sm tracking-[0.25em] uppercase mb-3 md:mb-4 block">
                            GALLERY INTERFACE
                        </span>
                        <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 tracking-tighter uppercase leading-[1.0] md:leading-[0.9]">
                            CAMPUS <span className="text-neutral-300">ARCHIVE</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Accordion Gallery */}
                <div className="flex flex-col md:flex-row h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full gap-[3px]">
                    {campusItems.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={item.id}
                                onClick={() => setActiveIndex(index)}
                                className="relative overflow-hidden cursor-pointer rounded-sm"
                                style={{
                                    flex: isActive ? '5 1 0%' : '0.6 1 0%',
                                    transition: 'flex 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                                    minWidth: '0',
                                    minHeight: isActive ? '200px' : '60px',
                                    maxHeight: '100%',
                                }}
                            >
                                {/* Image — full vertical fill spanning top to bottom (9:16 vertical ratio) */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onError={(e) => { e.currentTarget.src = '/CollegeMain.jpg'; }}
                                    className="w-full h-full object-cover object-center"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        filter: isActive ? 'brightness(1) contrast(1)' : 'brightness(0.8) contrast(1.1)',
                                        transform: isActive ? 'scale(1.03)' : 'scale(1)',
                                        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                />

                                {/* Overlay — subtle gradient to let full vertical image shine through */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: isActive
                                            ? 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)'
                                            : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 100%)',
                                        transition: 'background 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                />

                                {/* Number */}
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                                    <span
                                        className="font-mono font-bold text-[10px] md:text-sm"
                                        style={{
                                            color: isActive ? '#FF5422' : '#a3a3a3',
                                            transition: 'color 0.5s ease',
                                        }}
                                    >
                                        /{item.id}
                                    </span>
                                </div>

                                {/* Active text content */}
                                <div
                                    className="absolute inset-x-4 bottom-6 md:inset-x-8 md:bottom-10 z-10 flex flex-col justify-end"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                                        transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
                                        pointerEvents: isActive ? 'auto' : 'none',
                                    }}
                                >
                                    <h3 className="font-sans text-2xl sm:text-3xl md:text-5xl lg:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-2 md:mb-5">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-[10px] md:text-sm lg:text-base max-w-sm md:max-w-xl font-sans leading-relaxed">
                                        {item.subtitle}
                                    </p>
                                </div>

                                {/* Collapsed label (vertical on desktop) */}
                                <div
                                    className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10 flex items-center justify-center"
                                    style={{
                                        opacity: isActive ? 0 : 1,
                                        transition: 'opacity 0.4s ease',
                                        pointerEvents: isActive ? 'none' : 'auto',
                                    }}
                                >
                                    <span className="md:hidden font-sans text-[11px] text-neutral-200 font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                                        {item.title.replace('_', ' ')}
                                    </span>
                                    <span
                                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                                        className="hidden md:block font-sans text-xs md:text-sm lg:text-base text-neutral-300 font-bold uppercase tracking-[0.2em] whitespace-nowrap"
                                    >
                                        {item.title}
                                    </span>
                                </div>

                                {/* Arrow icon on active */}
                                {isActive && (
                                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-white opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]">
                                        <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translate(-6px, 6px); }
                    to { opacity: 1; transform: translate(0, 0); }
                }
            `}} />
        </section>
    );
};

export default CampusLife;

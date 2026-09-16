import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import OptimizedImage from '../../components/common/OptimizedImage';

// Animation variants for staggered children
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
};

const HERO_IMAGES = [
    { src: "/CollegeMain.jpg", webpSrc: "/CollegeMain.webp", alt: "SRIT Main Building" },
    { src: "/BasketBall.JPG", webpSrc: "/BasketBall.webp", alt: "SRIT Basketball Court" },
    { src: "/Campus.JPG", webpSrc: "/Campus.webp", alt: "SRIT Campus Architecture" },
    { src: "/library.jpg", webpSrc: "/library.webp", alt: "SRIT Central Library" },
    { src: "/ComputerLab.JPG", webpSrc: "/ComputerLab.webp", alt: "SRIT Computer Lab" },
    { src: "/College 2.JPG", webpSrc: undefined, alt: "SRIT Campus View" }
];

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="flex flex-col lg:grid relative min-h-[100svh] w-full bg-neutral-dark overflow-hidden">
            
            {/* Background Image Carousel: 9:16 on mobile, Full Bleed on desktop */}
            <div className="relative w-full aspect-[9/16] shrink-0 lg:aspect-auto lg:h-auto lg:col-start-1 lg:row-start-1 lg:w-full lg:h-full z-0 overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <OptimizedImage
                            src={HERO_IMAGES[currentIndex].src}
                            webpSrc={HERO_IMAGES[currentIndex].webpSrc}
                            alt={HERO_IMAGES[currentIndex].alt}
                            eager={currentIndex === 0}
                            sizes="100vw"
                            className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                        />
                    </motion.div>
                </AnimatePresence>
                
                {/* Gradient fade to blend with bottom content on mobile (kept to prevent sharp cut-off on mobile text block) */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-dark to-transparent lg:hidden z-10 pointer-events-none" />
            </div>

            {/* Left Side Content: Solid block on mobile, overlay on desktop */}
            <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative flex-1 bg-neutral-dark lg:bg-transparent lg:bg-gradient-to-r lg:from-black/95 lg:via-black/75 lg:via-[55%] lg:to-transparent lg:col-start-1 lg:row-start-1 lg:absolute top-0 left-0 bottom-0 z-10 w-full lg:w-[80%] xl:w-[70%] flex flex-col justify-center py-12 lg:py-0 px-5 sm:px-12 xl:px-20 gpu-accelerated content-contained"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col max-w-xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                >
                    {/* Location Badge */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 lg:mb-10 mt-12 lg:mt-0">
                        <span className="w-12 h-1 bg-primary" />
                        <span className="text-white font-bold tracking-[0.25em] uppercase text-xs drop-shadow-sm">
                            Anantapur, AP
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-black text-white leading-[1.05] tracking-tight mb-4 lg:mb-8 drop-shadow-md">
                        Srinivasa Ramanujan Institute of Technology
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p variants={itemVariants} className="text-white/95 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 lg:mb-12 drop-shadow-md">
                        A center of excellence in engineering education, nurturing industry-ready professionals since 2007.
                    </motion.p>

                    {/* Button */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                        <a
                            href="#about"
                            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-5 bg-primary text-white text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-primary-dark transition-all duration-500 rounded shadow-xl shadow-primary/30"
                        >
                            Explore Programs
                            <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                        </a>
                    </motion.div>
                    
                    {/* Bottom Accreditation block */}
                    <motion.div variants={itemVariants} className="mt-10 lg:mt-16 pt-8 border-t border-white/30 flex flex-wrap gap-x-8 gap-y-4">
                        {['AICTE Approved', 'JNTUA Affiliated'].map((item) => (
                            <span key={item} className="text-white text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 drop-shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

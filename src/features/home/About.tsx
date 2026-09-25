import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import OptimizedImage from '../../components/common/OptimizedImage';

const About: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" ref={ref} className="bg-white relative overflow-hidden pt-2 pb-16 lg:pt-4 lg:pb-24">
            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left — text */}
                    <motion.div
                        className="lg:col-span-6 pr-0 lg:pr-8 xl:pr-12"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Accent bar */}
                        <div className="w-12 lg:w-20 h-[3px] bg-primary mb-4 lg:mb-5" />

                        <p className="label-caps text-primary text-xs lg:text-sm font-bold tracking-[0.25em] mb-3 lg:mb-5">
                            About SRIT
                        </p>

                        <h2 className="heading-lg text-neutral-dark text-2xl sm:text-3xl lg:text-5xl font-black mb-4 lg:mb-8 leading-tight">
                            Inspired by the Legacy of
                            <br />
                            Srinivasa Ramanujan
                        </h2>

                        <div className="space-y-4 lg:space-y-6 text-neutral-600 leading-[1.7] sm:leading-[1.8] text-sm lg:text-base text-justify">
                            <p>
                                This Society was established by Founder-cum-Secretary Sri Aluru Sambasiva Reddy in November 2007 in memory of his mother, Late Smt. Aluru Narayanamma, to give shape to his firm belief that
                            </p>
                            <blockquote className="border-l-4 border-primary/40 pl-4 sm:pl-6 italic text-neutral-800 font-medium text-base lg:text-xl text-left">
                                "EDUCATION IS A KEY ENABLER FOR PROGRESS."
                            </blockquote>
                            <p>
                                This belief has shaped his entire life – he himself excelled in his scholastic years and then became a tutor, teaching students not only his subject but also imparting higher human values. As his career progressed, he wanted to ensure that maximum students from rural and developing areas could derive benefit from this credo.
                            </p>
                        </div>

                        <div className="mt-6 lg:mt-8 flex items-center gap-4 lg:gap-6">
                            <a
                                href="#departments"
                                className="inline-flex items-center gap-2 text-primary text-sm font-semibold group"
                            >
                                <span>Explore Departments</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </a>
                            <span className="w-px h-4 bg-neutral-300" />
                            <a
                                href="https://www.srit.ac.in/overview/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-500 text-sm font-medium hover:text-primary transition-colors duration-300"
                            >
                                Read More
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — certificate scrolling column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-6 relative mt-10 lg:mt-0 content-contained"
                    >
                        {/* Gradient Fade Overlays */}
                        <div className="absolute top-0 left-0 w-full h-10 lg:h-12 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full h-10 lg:h-12 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

                        {/* Scrolling Container */}
                        <div className="flex flex-row lg:flex-col gap-3 lg:gap-6 h-auto lg:h-[600px] xl:h-[650px] overflow-x-auto lg:overflow-y-auto px-3 py-3 lg:py-6 custom-scrollbar w-full">
                            {[
                                { src: '/cert-iic.jpg', alt: 'IIC Certificate' },
                                { src: '/cert-salesforce.jpg', alt: 'Salesforce Award' },
                                { src: '/cert-eduskills.jpg', alt: 'EduSkills Certificate' },
                                { src: '/cert-nptel.jpg', alt: 'NPTEL Certificate' }
                            ].map((img, index) => (
                                <motion.div
                                    key={index}
                                    className="relative overflow-hidden rounded-2xl shadow-xl border border-neutral-100 bg-white group flex-shrink-0 cursor-pointer w-[260px] sm:w-[300px] md:w-[340px] lg:w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-full"
                                    whileHover={{
                                        scale: 1.05,
                                        zIndex: 50,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <OptimizedImage
                                        src={img.src}
                                        alt={img.alt}
                                        sizes="(max-width: 1024px) 80vw, 40vw"
                                        className="absolute inset-0 w-full h-full object-contain p-1 lg:p-2"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50 pointer-events-none">
                            <span className="w-1 h-1 rounded-full bg-neutral-400"></span>
                            <span className="w-1 h-1 rounded-full bg-neutral-400"></span>
                            <span className="w-1 h-2 rounded-full bg-neutral-500"></span>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 rotate-90 mt-6 whitespace-nowrap">Scroll</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

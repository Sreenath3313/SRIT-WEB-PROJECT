import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { upcomingEvents } from '../../data/events';

const UpcomingEvents: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="events" ref={ref} className="section-y-lg bg-neutral-50/50 border-t border-b border-neutral-200/60 text-neutral-800 relative overflow-hidden">


            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                    {/* Left side — Headers */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="label-caps text-primary tracking-[0.25em] mb-5">
                            Mark Your Calendar
                        </p>
                        <h2 className="heading-lg text-neutral-900 mb-6">
                            Upcoming
                            <br />
                            Events
                        </h2>
                        <p className="text-neutral-500 text-[15px] leading-relaxed mb-8 max-w-sm">
                            Join us for workshops, guest lectures, and annual festivals that foster creativity, networking, and technical excellence.
                        </p>
                        <a href="#events" className="inline-flex items-center px-8 py-3.5 border border-neutral-300 text-neutral-700 text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-neutral-100 hover:border-neutral-450 transition-all duration-300">
                            View Full Calendar
                        </a>
                    </motion.div>

                    {/* Right side — Events List */}
                    <div className="flex flex-col">
                        {upcomingEvents.map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`group flex flex-row items-center gap-4 sm:gap-6 py-6 sm:py-8 cursor-pointer ${i !== 0 ? 'border-t border-neutral-200' : ''
                                    }`}
                            >
                                {/* Date Box */}
                                <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 flex flex-col items-center justify-center bg-white border border-neutral-200/80 rounded-lg group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-400">
                                    <span className="text-neutral-400 text-[10px] sm:text-xs font-bold tracking-[0.2em] group-hover:text-white/80 transition-colors">
                                        {event.month}
                                    </span>
                                    <span className="font-serif text-2xl sm:text-4xl font-bold text-neutral-800 mt-0.5 sm:mt-1 group-hover:text-white transition-colors">
                                        {event.day}
                                    </span>
                                </div>

                                {/* Event Info */}
                                <div className="flex-1 min-w-0">
                                    <p className="label-caps text-primary/80 mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                                        {event.type}
                                    </p>
                                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm font-medium">
                                        {event.dateStr}
                                    </p>
                                </div>

                                {/* Arrow indicator */}
                                <div className="hidden sm:flex w-12 items-center justify-end text-neutral-300 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 text-2xl">
                                    →
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const accreditations = [
    { 
        title: 'NAAC A', 
        text: 'Accredited', 
        desc: "Accredited with Grade 'A' by National Assessment and Accreditation Council (NAAC)",
        logo: '/naac.jpg' 
    },
    { 
        title: 'UGC', 
        text: 'Autonomous Status', 
        desc: 'Granted Autonomous Status by University Grants Commission (UGC)',
        logo: '/UGC.jpg' 
    },
    { 
        title: 'NBA', 
        text: 'Accredited Programs', 
        desc: 'Programs Accredited by National Board of Accreditation (NBA)',
        logo: '/nba.jpg' 
    }
];

const Accreditations: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <div ref={ref} className="w-full h-full bg-white rounded-2xl border border-neutral-200/80 shadow-xl shadow-neutral-100/50 p-6 md:p-8 flex flex-col">
            {/* Title with decorative lines */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center mb-8 md:mb-10"
            >
                <div className="flex items-center w-full gap-4">
                    <div className="h-[1px] bg-neutral-200 flex-1" />
                    <h3 className="text-sm md:text-base font-extrabold tracking-[0.2em] text-neutral-800 uppercase text-center font-sans">
                        Recognized For Excellence
                    </h3>
                    <div className="h-[1px] bg-neutral-200 flex-1" />
                </div>
                <div className="w-12 h-[3px] bg-primary mt-3 rounded-full animate-pulse" />
            </motion.div>

            {/* Vertical List */}
            <div className="flex-1 flex flex-col divide-y divide-neutral-100">
                {accreditations.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -15 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="flex-1 flex items-center gap-6 md:gap-8 py-5 md:py-6 group"
                    >
                        {/* Logo wrapper */}
                        <div className="h-20 w-32 md:h-28 md:w-48 flex items-center justify-center shrink-0 bg-neutral-50/50 rounded-xl p-2 md:p-3 border border-neutral-100 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-white">
                            <motion.img
                                src={item.logo}
                                alt={item.title}
                                className="max-h-full max-w-full object-contain"
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 flex flex-col gap-1">
                            <h4 className="text-xs md:text-sm font-extrabold tracking-wider text-neutral-800 uppercase group-hover:text-primary transition-colors duration-300">
                                {item.text}
                            </h4>
                            <p className="text-[11px] md:text-xs text-neutral-400 font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Accreditations;
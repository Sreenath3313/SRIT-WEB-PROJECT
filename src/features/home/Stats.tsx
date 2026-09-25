import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItem {
    numericEnd: number;   // raw number to count up to
    suffix: string;       // e.g. '+', 'k+'
    label: string;
    display: (n: number) => string; // format the counter value for display
}

const stats: StatItem[] = [
    {
        numericEnd: 15,
        suffix: '+',
        label: 'Years of Excellence',
        display: (n) => `${n}+`,
    },
    {
        numericEnd: 10,
        suffix: 'k+',
        label: 'Global Alumni',
        display: (n) => `${n}k+`,
    },
    {
        numericEnd: 150,
        suffix: '+',
        label: 'Expert Faculty',
        display: (n) => `${n}+`,
    },
    {
        numericEnd: 50,
        suffix: '+',
        label: 'Advanced Labs',
        display: (n) => `${n}+`,
    },
    {
        numericEnd: 100,
        suffix: '+',
        label: 'Top Recruiters',
        display: (n) => `${n}+`,
    },
];

function useCounter(end: number, duration: number, start: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
        };

        const raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [start, end, duration]);

    return count;
}

interface CounterCardProps {
    stat: StatItem;
    index: number;
    isInView: boolean;
}

function CounterCard({ stat, index, isInView }: CounterCardProps) {
    const count = useCounter(stat.numericEnd, 800, isInView);

    return (
        <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="group flex-1 flex items-center gap-4 md:gap-6 py-4 md:py-[18px] text-left"
        >
            {/* Round Index Circle */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-xs md:text-sm font-bold text-neutral-500 tracking-wider shrink-0 transition-colors duration-300 group-hover:bg-primary/5 group-hover:border-primary/10 group-hover:text-primary">
                0{index + 1}
            </div>

            {/* Vertical separator */}
            <div className="w-[1px] h-8 bg-neutral-200/80 shrink-0" />

            {/* Numeric display container */}
            <div
                className="font-serif font-black leading-none tracking-tight shrink-0 w-20 md:w-28 cursor-default"
                style={{
                    fontSize: 'clamp(24px, 2.5vw, 36px)',
                    fontVariantNumeric: 'tabular-nums',
                }}
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-[#ff9e66]">
                    {stat.display(count)}
                </span>
            </div>

            {/* Label */}
            <div className="text-neutral-800 text-xs md:text-sm font-extrabold uppercase tracking-[0.1em] transition-colors duration-500 group-hover:text-primary leading-snug flex-1">
                {stat.label}
            </div>
        </motion.div>
    );
}

const Stats: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <div ref={ref} className="w-full h-full bg-white rounded-2xl border border-neutral-200/80 shadow-xl shadow-neutral-100/50 p-6 md:p-8 relative flex flex-col">
            <div className="flex-1 flex flex-col divide-y divide-neutral-100">
                {stats.map((stat, i) => (
                    <CounterCard
                        key={stat.label}
                        stat={stat}
                        index={i}
                        isInView={isInView}
                    />
                ))}
            </div>
        </div>
    );
};

export default Stats;
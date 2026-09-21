import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LeadershipVision: React.FC = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: '-100px',
    });

    const cardAnimation = (delay: number) => ({
        initial: {
            opacity: 0,
            y: 30,
        },
        animate: isInView
            ? {
                opacity: 1,
                y: 0,
            }
            : {},
        transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    });

    return (
        <section
            ref={ref}
            className="py-24 bg-[#f8f7f4] relative overflow-hidden"
        >
            <div className="section-container max-w-[1400px] mx-auto">

                {/* =====================================================
                    SECTION HEADER
                ===================================================== */}

                <div className="text-center mb-16 md:mb-24">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={
                            isInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                }
                                : {}
                        }
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                            Visionary Leadership
                        </span>

                        <h2 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">
                            Guiding{' '}
                            <span className="text-primary">
                                The Future
                            </span>
                        </h2>
                    </motion.div>

                </div>


                {/* =====================================================
                    LEADERSHIP CARDS
                ===================================================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-8
                        max-w-[1300px]
                        mx-auto
                    "
                >

                    {/* =================================================
                        ALURU SAMBASIVA REDDY
                    ================================================= */}

                    <motion.div
                        {...cardAnimation(0)}
                        className="
                            bg-white
                            rounded-3xl
                            p-6
                            sm:p-7
                            border
                            border-neutral-100
                            shadow-lg
                            text-center
                            flex
                            flex-col
                            items-center
                            justify-between
                            group
                            hover:-translate-y-1
                            hover:shadow-xl
                            transition-all
                            duration-300
                        "
                    >

                        <div className="flex flex-col items-center w-full">

                            {/* PHOTO */}

                            <div
                                className="
                                    w-40
                                    h-40
                                    sm:w-44
                                    sm:h-44
                                    rounded-2xl
                                    overflow-hidden
                                    border
                                    border-neutral-200
                                    shadow-md
                                    bg-neutral-100
                                    mb-7
                                    shrink-0
                                    group-hover:scale-[1.02]
                                    transition-transform
                                    duration-500
                                "
                            >
                                <img
                                    src="/sambasir.jpg"
                                    alt="Aluru Sambasiva Reddy"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-center
                                    "
                                />
                            </div>


                            {/* NAME — DOMINANT */}

                            <h3
                                className="
                                    text-[34px]
                                    sm:text-[35px]
                                    lg:text-[34px]
                                    xl:text-[36px]
                                    font-black
                                    text-neutral-950
                                    leading-[1.02]
                                    tracking-[-0.04em]
                                    mb-2
                                "
                            >
                                Aluru Sambasiva Reddy
                            </h3>


                            {/* ROLE — SECONDARY */}

                            <p
                                className="
        text-primary
        text-[13px]
        sm:text-[14px]
        font-semibold
        tracking-wide
        leading-[1.15]
        text-center
    "
                            >
                                <span className="block">Founder</span>
                                <span className="block">&amp;</span>
                                <span className="block">Secretary</span>
                            </p>

                        </div>


                        {/* QUOTE */}

                        <p
                            className="
                                text-neutral-600
                                italic
                                text-[14px]
                                leading-relaxed
                                border-t
                                border-neutral-100
                                pt-5
                                mt-7
                                text-center
                                w-full
                            "
                        >
                            "To provide value-based technical education and mold students into ethically strong and technologically competent professionals."
                        </p>

                    </motion.div>


                    {/* =================================================
                        SMT. JONNALAGADDA PADMAVATHY
                    ================================================= */}

                    <motion.div
                        {...cardAnimation(0.1)}
                        className="
                            bg-white
                            rounded-3xl
                            p-6
                            sm:p-7
                            border
                            border-neutral-100
                            shadow-lg
                            text-center
                            flex
                            flex-col
                            items-center
                            justify-between
                            group
                            hover:-translate-y-1
                            hover:shadow-xl
                            transition-all
                            duration-300
                        "
                    >

                        <div className="flex flex-col items-center w-full">

                            {/* CHAIRPERSON PHOTO */}

                            <div
                                className="
                                    w-40
                                    h-40
                                    sm:w-44
                                    sm:h-44
                                    rounded-2xl
                                    overflow-hidden
                                    border
                                    border-neutral-200
                                    shadow-md
                                    bg-neutral-100
                                    mb-7
                                    shrink-0
                                    group-hover:scale-[1.02]
                                    transition-transform
                                    duration-500
                                "
                            >
                                <img
                                    src="https://www.srit.ac.in/wp-content/uploads/2021/07/cp-srit-768x1154.jpeg"
                                    alt="Smt. Jonnalagadda Padmavathy"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-center
                                    "
                                />
                            </div>


                            {/* NAME — DOMINANT */}

                            <h3
                                className="
                                    text-[34px]
                                    sm:text-[35px]
                                    lg:text-[34px]
                                    xl:text-[36px]
                                    font-black
                                    text-neutral-950
                                    leading-[1.02]
                                    tracking-[-0.04em]
                                    mb-2
                                    text-center
                                "
                            >
                                Smt. Jonnalagadda Padmavathy
                            </h3>


                            {/* ROLE — SECONDARY */}

                            <p
                                className="
                                    text-primary
                                    text-[13px]
                                    sm:text-[14px]
                                    font-semibold
                                    tracking-wide
                                    leading-tight
                                "
                            >
                                Chairperson
                            </p>

                        </div>


                        {/* QUOTE */}

                        <p
                            className="
                                text-neutral-600
                                italic
                                text-[14px]
                                leading-relaxed
                                border-t
                                border-neutral-100
                                pt-5
                                mt-7
                                text-center
                                w-full
                            "
                        >
                            "Committed to nurturing holistic development and driving excellence across academics and administration."
                        </p>

                    </motion.div>


                    {/* =================================================
                        DR. M. RANJIT REDDY
                    ================================================= */}

                    <motion.div
                        {...cardAnimation(0.2)}
                        className="
                            bg-white
                            rounded-3xl
                            p-6
                            sm:p-7
                            border
                            border-neutral-100
                            shadow-lg
                            text-center
                            flex
                            flex-col
                            items-center
                            justify-between
                            group
                            hover:-translate-y-1
                            hover:shadow-xl
                            transition-all
                            duration-300
                        "
                    >

                        <div className="flex flex-col items-center w-full">

                            {/* PHOTO */}

                            <div
                                className="
                                    w-40
                                    h-40
                                    sm:w-44
                                    sm:h-44
                                    rounded-2xl
                                    overflow-hidden
                                    border
                                    border-neutral-200
                                    shadow-md
                                    bg-neutral-100
                                    mb-7
                                    shrink-0
                                    group-hover:scale-[1.02]
                                    transition-transform
                                    duration-500
                                "
                            >
                                <img
                                    src="/ranjit.jpg"
                                    alt="Dr. M. Ranjit Reddy"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-center
                                    "
                                />
                            </div>


                            {/* NAME — DOMINANT */}

                            <h3
                                className="
                                    text-[34px]
                                    sm:text-[35px]
                                    lg:text-[34px]
                                    xl:text-[36px]
                                    font-black
                                    text-neutral-950
                                    leading-[1.02]
                                    tracking-[-0.04em]
                                    mb-2
                                    text-center
                                "
                            >
                                Dr. M. Ranjit Reddy
                            </h3>


                            {/* ROLE — SECONDARY */}

                            <p
                                className="
                                    text-primary
                                    text-[13px]
                                    sm:text-[14px]
                                    font-semibold
                                    tracking-wide
                                    leading-tight
                                "
                            >
                                Vice President
                            </p>

                        </div>


                        {/* QUOTE */}

                        <p
                            className="
                                text-neutral-600
                                italic
                                text-[14px]
                                leading-relaxed
                                border-t
                                border-neutral-100
                                pt-5
                                mt-7
                                text-center
                                w-full
                            "
                        >
                            "Dedicated to bridging the gap between academia and industry to ensure successful and fulfilling careers for every student."
                        </p>

                    </motion.div>


                    {/* =================================================
                        DR. G. BALAKRISHNA
                    ================================================= */}

                    <motion.div
                        {...cardAnimation(0.3)}
                        className="
                            bg-white
                            rounded-3xl
                            p-6
                            sm:p-7
                            border
                            border-neutral-100
                            shadow-lg
                            text-center
                            flex
                            flex-col
                            items-center
                            justify-between
                            group
                            hover:-translate-y-1
                            hover:shadow-xl
                            transition-all
                            duration-300
                        "
                    >

                        <div className="flex flex-col items-center w-full">

                            {/* PHOTO */}

                            <div
                                className="
                                    w-40
                                    h-40
                                    sm:w-44
                                    sm:h-44
                                    rounded-2xl
                                    overflow-hidden
                                    border
                                    border-neutral-200
                                    shadow-md
                                    bg-neutral-100
                                    mb-7
                                    shrink-0
                                    group-hover:scale-[1.02]
                                    transition-transform
                                    duration-500
                                "
                            >
                                <img
                                    src="/principal.jpg"
                                    alt="Dr. G. Balakrishna"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-center
                                    "
                                />
                            </div>


                            {/* NAME — DOMINANT */}

                            <h3
                                className="
                                    text-[34px]
                                    sm:text-[35px]
                                    lg:text-[34px]
                                    xl:text-[36px]
                                    font-black
                                    text-neutral-950
                                    leading-[1.02]
                                    tracking-[-0.04em]
                                    mb-2
                                "
                            >
                                Dr. G. Balakrishna
                            </h3>


                            {/* ROLE — SECONDARY */}

                            <p
                                className="
                                    text-primary
                                    text-[13px]
                                    sm:text-[14px]
                                    font-semibold
                                    tracking-wide
                                    leading-tight
                                "
                            >
                                Principal
                            </p>

                        </div>


                        {/* QUOTE */}

                        <p
                            className="
                                text-neutral-600
                                italic
                                text-[14px]
                                leading-relaxed
                                border-t
                                border-neutral-100
                                pt-5
                                mt-7
                                text-center
                                w-full
                            "
                        >
                            "Our mission is to foster innovation and academic excellence, empowering students to become global leaders."
                        </p>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default LeadershipVision;
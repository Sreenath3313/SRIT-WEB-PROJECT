import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Mail, Phone } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MessageFromHead: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow pt-[114px] lg:pt-32 pb-16 lg:pb-24">
                <div className="section-container">

                    {/* Header */}
                    <div className="mb-12 lg:mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="label-caps text-primary tracking-[0.25em] mb-4"
                        >
                            Leadership Vision
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-serif text-3xl lg:text-5xl font-bold text-neutral-900 tracking-tight"
                        >
                            Message from the Principal
                        </motion.h1>
                    </div>

                    <div className="grid lg:grid-cols-[1fr,2fr] gap-10 lg:gap-20">
                        {/* Profile Section (Left Column) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex flex-col items-center text-center gap-6"
                        >
                            <div className="relative isolate w-64 h-64 md:w-72 md:h-72">
                                <div className="absolute inset-0 bg-primary/10 rounded-full -mx-2 -my-2 -z-10 rotate-[-2deg]"></div>
                                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 relative">
                                    <img
                                        src="/principal.jpg"
                                        alt="Principal Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl font-bold text-neutral-900">Dr. G. Balakrishna</h3>
                                <p className="text-primary font-semibold text-sm mt-1">Principal, SRIT</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                                <h4 className="font-bold text-neutral-900 mb-6 uppercase tracking-wider text-sm">Contact Information</h4>
                                <ul className="flex flex-col gap-4 text-neutral-600">
                                    <li className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <span>principal@srit.ac.in</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <span>+91 8554-200088</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Message Content (Right Column) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col gap-10"
                        >
                            {/* Quote highlight */}
                            <div className="relative">
                                <Quote className="absolute -top-6 -left-2 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 text-primary/10 rotate-180" />
                                <h3 className="font-serif text-2xl lg:text-3xl text-neutral-800 leading-snug relative z-10 italic text-center lg:text-left">
                                    "Education is not just about acquiring knowledge, but about developing the mindset to apply that knowledge for the betterment of society. At SRIT, we nurture innovators who lead with purpose."
                                </h3>
                            </div>

                            {/* Full text */}
                            <div className="prose prose-lg prose-neutral max-w-none text-neutral-600 text-justify">
                                <p>
                                    Welcome to Srinivasa Ramanujan Institute of Technology (SRIT), where excellence is a habit and innovation is an everyday pursuit. Since our inception, we have been committed to providing a transformative educational experience that extends far beyond the traditional classroom.
                                </p>
                                <p>
                                    In today's rapidly evolving technological landscape, the role of an engineer is more critical than ever. The challenges we face—from sustainable energy to advanced computing—require not just technical proficiency, but immense creativity, ethical grounding, and a global perspective. Our rigorous academic framework, deeply inspired by the pedagogy of premier institutions, is designed to instil these very qualities.
                                </p>
                                <p>
                                    We take immense pride in our state-of-the-art infrastructure, our dedicated faculty, and most importantly, our vibrant student community. With establishing dynamic Centers of Excellence and fostering industry-academia partnerships, we ensure that our students are not merely preparing for exactly what exists today, but are equipped to architect what will exist tomorrow.
                                </p>

                                <h4>A Commitment to Holistic Development</h4>
                                <p>
                                    Academic rigor must be balanced with holistic growth. We encourage our students to actively participate in research, sports, cultural activities, and social service. This comprehensive approach ensures that an SRIT graduate is a well-rounded individual, ready to take on leadership roles in society.
                                </p>

                                <p>
                                    I invite you to explore our campus, engage with our community, and discover the endless possibilities that await you at SRIT. Let us journey together towards a future defined by excellence, innovation, and positive impact.
                                </p>

                                <div className="mt-12 pt-8 border-t border-neutral-200">
                                    <p className="font-bold text-neutral-900 text-xl font-serif">Dr. G. Balakrishna</p>
                                    <p className="text-neutral-500 mt-1">Principal</p>
                                    <p className="text-neutral-500">Srinivasa Ramanujan Institute of Technology</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MessageFromHead;

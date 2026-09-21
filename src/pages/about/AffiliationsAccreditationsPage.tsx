import React from 'react';
import { motion } from 'framer-motion';
import { Building2, BookOpen, Award, BarChart3, GraduationCap, ShieldCheck, Star, FileCheck } from 'lucide-react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger, scaleIn } from '../../features/about/animations';

const affiliations = [
    { title: 'AICTE', desc: 'All India Council for Technical Education', icon: Building2, color: 'from-blue-500 to-blue-600' },
    { title: 'UGC', desc: 'University Grants Commission (2f & 12B Status)', icon: BookOpen, color: 'from-indigo-500 to-indigo-600' },
    { title: 'APSCHE', desc: 'Andhra Pradesh State Council of Higher Education', icon: GraduationCap, color: 'from-violet-500 to-violet-600' },
    { title: 'JNTUA', desc: 'Jawaharlal Nehru Technological University Anantapur', icon: ShieldCheck, color: 'from-emerald-500 to-emerald-600' },
    { title: 'NAAC', desc: 'National Assessment and Accreditation Council — A Grade', icon: Award, color: 'from-[#FF5422] to-orange-500' },
    { title: 'NBA', desc: 'National Board of Accreditation', icon: FileCheck, color: 'from-amber-500 to-amber-600' },
    { title: 'NIRF', desc: 'National Institutional Ranking Framework', icon: BarChart3, color: 'from-pink-500 to-rose-500' },
    { title: 'AISHE', desc: 'All India Survey on Higher Education', icon: Star, color: 'from-cyan-500 to-cyan-600' },
];

const AffiliationsAccreditationsPage: React.FC = () => (
    <AboutUsLayout title="Affiliations & Accreditations">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-10">
            <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                    <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                    Affiliations &amp; Accreditations
                </h2>
                <p className="text-neutral-500 mt-3 leading-relaxed">
                    SRIT is recognized by top regulatory bodies in India, ensuring the highest standards of technical
                    education and infrastructure.
                </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {affiliations.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={scaleIn}
                        whileHover={{ y: -6, scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="flex flex-col items-center text-center p-6 bg-white border border-neutral-200 rounded-2xl hover:shadow-xl transition-all group cursor-default"
                    >
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                            <item.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-1">{item.title}</h3>
                        <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                variants={fadeUp}
                className="relative bg-gradient-to-br from-[#0A0903] to-neutral-800 rounded-2xl p-8 overflow-hidden shadow-lg"
            >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF5422]/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">Autonomous Status</h3>
                    <p className="text-neutral-300 leading-relaxed">
                        SRIT has been conferred with Autonomous Status by the University Grants Commission (UGC) and JNTUA,
                        empowering the institution to design its own curriculum tailored to industry needs and conduct its
                        own examinations.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    </AboutUsLayout>
);

export default AffiliationsAccreditationsPage;

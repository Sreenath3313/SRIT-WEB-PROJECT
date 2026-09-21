import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger, scaleIn } from '../../features/about/animations';

const mousList = [
    { name: 'TCS (Tata Consultancy Services)', purpose: 'Student Training and Placements' },
    { name: 'Infosys Campus Connect', purpose: 'Faculty Enablement and Student Training' },
    { name: 'Wipro TalentNext', purpose: 'Digital Skills Training' },
    { name: 'AWS Academy', purpose: 'Cloud Computing Curriculum' },
    { name: 'Cisco Networking Academy', purpose: 'Networking and Cybersecurity Skills' },
    { name: 'Red Hat Academy', purpose: 'Open Source Technologies Training' },
    { name: 'Oracle Academy', purpose: 'Database and Java Training' },
    { name: 'APSSDC', purpose: 'Skill Development Programs' },
    { name: 'Quantum Learning', purpose: 'Academic Collaboration' },
    { name: 'KodNest', purpose: 'Industry Training and Placement Support' },
    { name: 'Ramaiah Institute (MArgadarshan - AICTE)', purpose: 'Mentorship & Institutional Development' },
];

const MousPage: React.FC = () => (
    <AboutUsLayout title="MOUs">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-10">
            <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                    <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                    Memorandums of Understanding
                </h2>
                <p className="text-neutral-500 mt-3 leading-relaxed">
                    SRIT strongly believes in bridging the gap between academia and industry. We have established MOUs
                    with several leading organizations to provide students with the best exposure to current industry trends.
                </p>
            </motion.div>

            <motion.div variants={stagger} className="space-y-3">
                {mousList.map((mou, i) => (
                    <motion.div
                        key={i}
                        variants={scaleIn}
                        whileHover={{ x: 6, scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl hover:border-[#FF5422]/40 hover:shadow-md transition-all group"
                    >
                        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF5422] group-hover:bg-[#FF5422] group-hover:text-white transition-colors shrink-0">
                            <Handshake className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-neutral-800 truncate">{mou.name}</p>
                            <p className="text-xs text-neutral-500 mt-0.5">{mou.purpose}</p>
                        </div>
                        <span className="text-xs font-semibold text-[#FF5422] bg-orange-50 border border-orange-100 px-3 py-1 rounded-full shrink-0">MOU</span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </AboutUsLayout>
);

export default MousPage;

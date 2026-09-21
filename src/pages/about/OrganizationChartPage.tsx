import React from 'react';
import { motion } from 'framer-motion';
import { Network, ChevronRight } from 'lucide-react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger, scaleIn } from '../../features/about/animations';

const hierarchy = [
    { level: 0, title: 'Governing Body', color: 'from-[#0A0903] to-neutral-700' },
    { level: 1, title: 'Chairperson', color: 'from-[#FF5422] to-orange-400' },
    { level: 1, title: 'Secretary', color: 'from-[#FF5422] to-orange-400' },
    { level: 2, title: 'Principal', color: 'from-amber-500 to-amber-600' },
    { level: 3, title: 'Vice Principal', color: 'from-blue-500 to-blue-600' },
    { level: 3, title: 'IQAC Director', color: 'from-blue-500 to-blue-600' },
    { level: 3, title: 'Dean (Academics)', color: 'from-blue-500 to-blue-600' },
    { level: 4, title: 'HOD – CSE', color: 'from-indigo-400 to-indigo-500' },
    { level: 4, title: 'HOD – ECE', color: 'from-indigo-400 to-indigo-500' },
    { level: 4, title: 'HOD – EEE', color: 'from-indigo-400 to-indigo-500' },
    { level: 4, title: 'HOD – MEC', color: 'from-indigo-400 to-indigo-500' },
    { level: 4, title: 'HOD – CIVIL', color: 'from-indigo-400 to-indigo-500' },
];

const OrganizationChartPage: React.FC = () => (
    <AboutUsLayout title="Organization Chart">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                    <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                    Organization Chart
                </h2>
                <p className="text-neutral-500 mt-3 leading-relaxed">
                    The organizational structure of SRIT defines the hierarchy of authority and the reporting
                    relationships across all functional areas of the institution.
                </p>
            </motion.div>

            {/* Visual hierarchy */}
            <motion.div variants={fadeUp} className="space-y-3">
                {hierarchy.map((node, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ x: 6 }}
                        style={{ marginLeft: `${node.level * 32}px` }}
                        className="flex items-center gap-3 group cursor-default"
                    >
                        {node.level > 0 && <ChevronRight className="w-4 h-4 text-neutral-300 shrink-0 group-hover:text-[#FF5422] transition-colors" />}
                        <div className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r ${node.color} text-white shadow-sm group-hover:shadow-md transition-shadow`}>
                            <Network className="w-4 h-4 opacity-70" />
                            <span className="font-semibold text-sm">{node.title}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                variants={scaleIn}
                className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl text-center text-sm text-neutral-500"
            >
                For the complete organizational chart document, please contact the administrative office of SRIT.
            </motion.div>
        </motion.div>
    </AboutUsLayout>
);

export default OrganizationChartPage;

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';
import { fadeUp, stagger, scaleIn } from '../../features/about/animations';

const policyDocuments = [
    { title: 'HR Policy', category: 'Administrative' },
    { title: 'IT Policy', category: 'Administrative' },
    { title: 'Research Policy', category: 'Academic' },
    { title: 'Code of Conduct for Students', category: 'Academic' },
    { title: 'Code of Conduct for Faculty', category: 'Administrative' },
    { title: 'Anti-Ragging Policy', category: 'Statutory' },
    { title: 'Grievance Redressal Policy', category: 'Statutory' },
    { title: 'E-Governance Policy', category: 'Administrative' },
    { title: 'Green Campus Policy', category: 'Campus' },
    { title: 'Divyangjan Policy', category: 'Campus' },
    { title: 'Maintenance Policy', category: 'Administrative' },
    { title: 'Financial Support Policy', category: 'Academic' },
];

const categoryColors: Record<string, string> = {
    Administrative: 'bg-blue-50 border-blue-200 text-blue-700',
    Academic: 'bg-green-50 border-green-200 text-green-700',
    Statutory: 'bg-purple-50 border-purple-200 text-purple-700',
    Campus: 'bg-orange-50 border-orange-200 text-orange-700',
};

const PoliciesDocumentsPage: React.FC = () => {
    const grouped = policyDocuments.reduce((acc, p) => {
        if (!acc[p.category]) acc[p.category] = [];
        acc[p.category].push(p);
        return acc;
    }, {} as Record<string, typeof policyDocuments>);

    return (
        <AboutUsLayout title="Policies and Documents">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-10">
                <motion.div variants={fadeUp}>
                    <h2 className="text-3xl font-serif font-bold text-[#0A0903] mb-1 flex items-center gap-3">
                        <span className="w-1 h-8 rounded-full bg-[#FF5422] inline-block" />
                        SRIT Policies and Documents
                    </h2>
                    <p className="text-neutral-500 mt-3 leading-relaxed">
                        SRIT operates with transparency and adheres strictly to its established policies and guidelines.
                        Below are the key policy documents governing academic, administrative, and statutory functions.
                    </p>
                </motion.div>

                {Object.entries(grouped).map(([category, policies]) => (
                    <motion.div key={category} variants={fadeUp}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 text-xs font-bold rounded-full border ${categoryColors[category] || 'bg-neutral-100 border-neutral-200 text-neutral-700'}`}>
                                {category}
                            </span>
                            <span className="flex-1 h-px bg-neutral-200" />
                        </div>
                        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {policies.map((policy, i) => (
                                <motion.div
                                    key={i}
                                    variants={scaleIn}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-xl hover:border-[#FF5422]/40 hover:shadow-md transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-50 rounded-lg text-[#FF5422] group-hover:bg-[#FF5422] group-hover:text-white transition-colors">
                                            <FileText className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-neutral-800 text-sm">{policy.title}</span>
                                    </div>
                                    <button className="p-2 text-neutral-300 hover:text-[#FF5422] transition-colors" title="Download">
                                        <Download className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </AboutUsLayout>
    );
};

export default PoliciesDocumentsPage;

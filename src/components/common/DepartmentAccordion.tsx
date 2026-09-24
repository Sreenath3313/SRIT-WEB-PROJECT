import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
    title: string;
    content?: React.ReactNode;
}

interface DepartmentAccordionProps {
    title: string;
    items: AccordionItem[];
    defaultOpenIndex?: number | null;
}

const DepartmentAccordion: React.FC<DepartmentAccordionProps> = ({ title, items, defaultOpenIndex = null }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h2 className="text-2xl font-bold font-serif mb-6 text-neutral-900 uppercase">
                    {title}
                </h2>

                <div className="divide-y divide-neutral-200/60 bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-4 lg:p-5 text-left transition-colors duration-300"
                                    style={{ background: '#0A0903' }}
                                    onMouseEnter={(e) => {
                                        if (!isOpen) e.currentTarget.style.background = '#1a1812';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#0A0903';
                                    }}
                                >
                                    <span className="font-bold text-[#FF5422]">{item.title}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#FF5422] transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden bg-white"
                                        >
                                            <div className="p-6 border-t border-neutral-100">
                                                {item.content || (
                                                    <p className="text-neutral-500 italic">
                                                        Content for {item.title} will be updated soon.
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DepartmentAccordion;

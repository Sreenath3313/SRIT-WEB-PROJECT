import React, { useState } from 'react';
import type { DepartmentData } from '../../data/departments';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpreadsheetTable from '../../components/common/SpreadsheetTable';

interface DepartmentOverviewProps {
    dept: DepartmentData;
}

const DepartmentOverview: React.FC<DepartmentOverviewProps> = ({ dept }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!dept.overview || dept.overview.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-sm text-center">
                <p className="text-neutral-500">Overview information is not available for this department yet.</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Program Overview</h2>

                <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden">
                    <div className="p-4 bg-neutral-50 border-b border-neutral-200/60">
                        <h3 className="text-center font-semibold text-[#FF5422]">
                            {dept.fullName} Program Overview
                        </h3>
                    </div>

                    <div className="divide-y divide-neutral-200/60">
                        {dept.overview.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index} className="rounded-xl overflow-hidden transition-all duration-300" style={{ border: isOpen ? '1px solid rgba(255, 84, 34, 0.25)' : '1px solid rgba(10, 9, 3, 0.06)', boxShadow: isOpen ? '0 4px 20px rgba(255, 84, 34, 0.12)' : '0 1px 4px rgba(0,0,0,0.06)' }}>
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between p-4 lg:p-5 text-left transition-colors duration-300" style={{ background: '#0A0903' }} onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.background = '#1a1812'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#0A0903'; }}
                                    >
                                        <span className="font-medium text-[#FF5422]">{item.title}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-[#FF5422] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
                                                {item.isSpreadsheet ? (
                                                    <div className="p-0 border-t border-primary/10">
                                                        <SpreadsheetTable 
                                                            sheetUrls={item.sheetUrls}
                                                            editUrls={item.editUrls}
                                                            availableYears={item.availableYears}
                                                            fallbackColumns={['News Letter', 'Date', 'Link']}
                                                            fallbackData={{}}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="p-6 prose prose-neutral max-w-none w-full
                                                        prose-h4:text-[#FF5422] prose-h4:font-bold prose-h4:mb-3 prose-h4:uppercase
                                                        prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-justify
                                                        prose-strong:text-neutral-900
                                                        prose-table:w-full prose-table:border-collapse prose-table:text-[16px]
                                                        prose-th:border prose-th:border-neutral-200 prose-th:p-3.5 prose-th:text-[16px] prose-th:font-bold prose-th:bg-neutral-50
                                                        prose-td:border prose-td:border-neutral-200 prose-td:p-3.5 prose-td:text-[16px]
                                                        prose-iframe:w-full prose-iframe:min-h-[500px] prose-iframe:rounded-xl prose-iframe:border prose-iframe:border-neutral-200
                                                        "
                                                        dangerouslySetInnerHTML={{ __html: item.content }}
                                                    />
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentOverview;

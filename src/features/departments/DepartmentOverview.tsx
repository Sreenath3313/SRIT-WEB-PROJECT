import React, { useState } from 'react';
import type { DepartmentData } from '../../data/departments';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpreadsheetTable from '../../components/common/SpreadsheetTable';

interface DepartmentOverviewProps {
    dept: DepartmentData;
}



const DepartmentOverview: React.FC<DepartmentOverviewProps> = ({ dept }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 uppercase">Program Overview</h2>

                {/* Peach/orange numbered accordion — matches reference image */}
                <div
                    className="rounded-2xl overflow-hidden shadow-sm"
                    style={{ background: '#fdf0e6', border: '1px solid rgba(255,120,50,0.18)' }}
                >
                    {dept.overview.map((item, index) => {
                        const isOpen = openIndex === index;
                        const num = String(index + 1).padStart(2, '0');

                        return (
                            <div
                                key={index}
                                style={{
                                    borderBottom: index < dept.overview!.length - 1
                                        ? '1px solid rgba(255,120,50,0.15)'
                                        : 'none',
                                }}
                            >
                                {/* Accordion header */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center gap-0 text-left transition-all duration-200 group"
                                    style={{
                                        background: isOpen
                                            ? 'rgba(255,120,50,0.08)'
                                            : 'transparent',
                                    }}
                                >
                                    {/* Orange number badge */}
                                    <span
                                        className="flex items-center justify-center shrink-0 font-bold text-white text-sm"
                                        style={{
                                            background: '#FF5422',
                                            width: '52px',
                                            minHeight: '52px',
                                            alignSelf: 'stretch',
                                        }}
                                    >
                                        {num}
                                    </span>

                                    {/* Vertical divider */}
                                    <span
                                        style={{
                                            width: '3px',
                                            alignSelf: 'stretch',
                                            background: 'rgba(255,84,34,0.25)',
                                        }}
                                    />

                                    {/* Title */}
                                    <span className="flex-1 px-5 py-3.5 font-bold text-[15px] text-neutral-800 group-hover:text-[#FF5422] transition-colors duration-200">
                                        {item.title}
                                    </span>

                                    {/* Faded number on right */}
                                    <span
                                        className="hidden sm:block px-4 font-bold text-sm shrink-0"
                                        style={{ color: 'rgba(255,84,34,0.35)' }}
                                    >
                                        {num}
                                    </span>

                                    {/* Circular chevron */}
                                    <span
                                        className="shrink-0 mr-4 flex items-center justify-center rounded-full transition-all duration-300"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            border: '1.5px solid #FF5422',
                                            color: '#FF5422',
                                        }}
                                    >
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        />
                                    </span>
                                </button>

                                {/* Accordion body */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                            style={{ background: '#fff8f3' }}
                                        >
                                            {item.isSpreadsheet ? (
                                                <div className="border-t border-orange-100">
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
    );
};

export default DepartmentOverview;

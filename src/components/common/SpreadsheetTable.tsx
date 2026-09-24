import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

export interface SpreadsheetTableProps {
    sheetUrls?: Record<string, string>;
    editUrls?: Record<string, string>;
    fallbackColumns: string[];
    fallbackData?: Record<string, Array<Record<string, string | number>>>;
    availableYears?: string[];
}

const SpreadsheetTable: React.FC<SpreadsheetTableProps> = ({
    sheetUrls,
    fallbackColumns,
    fallbackData = {},
    availableYears = [ '2025-26', '2024-25', '2023-24', '2022-23', '2021-22']
}) => {
    const [currentYear, setCurrentYear] = useState(availableYears[0]);
    const [fetchedData, setFetchedData] = useState<Record<string, { columns: string[], rows: string[][] }>>({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const url = sheetUrls?.[currentYear];
        if (url && !fetchedData[currentYear]) {
            // eslint-disable-next-line
            setIsLoading(true);
            fetch(url)
                .then(res => res.text())
                .then(csvText => {
                    Papa.parse(csvText, {
                        header: false,
                        skipEmptyLines: true,
                        complete: (results) => {
                            const rawRows = results.data as string[][];
                            if (rawRows.length > 0) {
                                const headers = rawRows[0];
                                const dataRows = rawRows.slice(1);
                                setFetchedData(prev => ({
                                    ...prev,
                                    [currentYear]: { columns: headers, rows: dataRows }
                                }));
                            } else {
                                setFetchedData(prev => ({
                                    ...prev,
                                    [currentYear]: { columns: [], rows: [] }
                                }));
                            }
                            setIsLoading(false);
                        },
                        error: (error: any) => {
                            console.error('Error parsing CSV:', error);
                            setIsLoading(false);
                        }
                    });
                })
                .catch(err => {
                    console.error('Error fetching CSV:', err);
                    setIsLoading(false);
                });
        }
    }, [currentYear, sheetUrls, fetchedData]);

    const isDynamic = !!sheetUrls?.[currentYear];
    const dynamicData = fetchedData[currentYear];

    let displayColumns = fallbackColumns;
    let displayRows: string[][] = [];
    const displayStaticRows = fallbackData[currentYear] || [];

    if (isDynamic && dynamicData) {
        displayColumns = dynamicData.columns.length > 0 ? dynamicData.columns : fallbackColumns;
        displayRows = dynamicData.rows;
    }

    const hasData = isDynamic ? displayRows.length > 0 : displayStaticRows.length > 0;

    return (
        <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
            <div className="flex items-center justify-end px-6 py-4 border-b border-primary/5 bg-neutral-50/50">
                {isDynamic && (
                    <span className="text-[10px] uppercase font-bold tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200">
                        Live Sheet Synced
                    </span>
                )}
            </div>

            <div className="px-4 lg:px-6 overflow-x-auto custom-scrollbar relative min-h-[100px]">
                {isLoading && (
                    <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

                <table className="w-full text-left border-collapse min-w-[500px] sm:min-w-full my-4">
                    <thead>
                        <tr>
                            {displayColumns.map((col, i) => (
                                <th key={i} className="px-4 py-3.5 text-[15px] font-bold text-white bg-primary uppercase tracking-wider border-r border-white/10 last:border-0 sticky top-0">
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                        {!hasData ? (
                            <tr>
                                <td colSpan={displayColumns.length} className="px-4 py-8 text-center text-neutral-500 text-[15px]">
                                    No records available for {currentYear}.
                                </td>
                            </tr>
                        ) : (
                            <>
                                {isDynamic ? displayRows.map((rowArr, ri) => (
                                    <tr key={`dyn-${ri}`} className={`transition-colors duration-200 hover:bg-primary/5 ${ri % 2 === 0 ? 'bg-[rgba(255,250,243,0.5)]' : 'bg-white'}`}>
                                        {rowArr.map((val, vi) => {
                                            const isLink = typeof val === 'string' && val.trim().startsWith('http');
                                            return (
                                                <td key={vi} className="px-4 py-3.5 text-[16px] text-neutral-700 whitespace-nowrap border-b border-primary/5">
                                                    {isLink ? (
                                                        <a href={val.trim()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#FF5422] hover:text-[#c2410c] hover:underline font-bold text-[14px] bg-[#FF5422]/5 hover:bg-[#FF5422]/10 px-3.5 py-1.5 rounded-md transition-colors">
                                                            View / Download
                                                        </a>
                                                    ) : (
                                                        val
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                )) : displayStaticRows.map((rowObj, ri) => (
                                    <tr key={`stat-${ri}`} className={`transition-colors duration-200 hover:bg-primary/5 ${ri % 2 === 0 ? 'bg-[rgba(255,250,243,0.5)]' : 'bg-white'}`}>
                                        {Object.values(rowObj).map((val, vi) => {
                                            const strVal = String(val);
                                            const isLink = strVal.trim().startsWith('http');
                                            return (
                                                <td key={vi} className="px-4 py-3.5 text-[16px] text-neutral-700 whitespace-nowrap border-b border-primary/5">
                                                    {isLink ? (
                                                        <a href={strVal.trim()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#FF5422] hover:text-[#c2410c] hover:underline font-bold text-[14px] bg-[#FF5422]/5 hover:bg-[#FF5422]/10 px-3.5 py-1.5 rounded-md transition-colors">
                                                            View / Download
                                                        </a>
                                                    ) : (
                                                        strVal
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="px-6 py-4 lg:px-8 flex items-center gap-1 overflow-x-auto border-t border-primary/5">
                {availableYears.map((year) => (
                    <button
                        key={year}
                        onClick={() => setCurrentYear(year)}
                        className={`px-4 py-2 text-[14px] font-medium rounded-md transition-all duration-200 shrink-0 border ${currentYear === year
                                ? 'bg-primary text-white border-primary opacity-100'
                                : 'bg-transparent text-[#0A0903] border-neutral-200 opacity-50 hover:border-primary/50 hover:text-primary hover:opacity-100'
                            }`}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SpreadsheetTable;

import React, { useState } from 'react';
import { FileText, Calendar, GraduationCap } from 'lucide-react';

const years = ['2026-27', '2025-26', '2024-25', '2023-24', '2022-23', '2021-22', '2020-21'];

// Base data for 2025-26 (extracted from main web screenshot)
const baseCirculars = [
  { id: 1, text: "Circular - 29/06/2024 - GRADUATION DAY 2024" },
  { id: 2, text: "Circular - 17/06/2024 - Holiday - BAKRID FESTIVAL" },
  { id: 3, text: "Circular - 17/04/2024 - Holiday - SRI RAMA NAVAMI FESTIVAL" },
  { id: 4, text: "Circular - 10/04/2024 - Holiday - RAMZAN FESTIVAL" },
  { id: 5, text: "Circular - 09/04/2024 - Holiday - UGADI FESTIVAL" },
  { id: 6, text: "Circular - 05/04/2024 - Holiday - BABU JAG JIVAN RAM JAYANTHI" },
  { id: 7, text: "Circular - 29/03/2024 - Holiday - GOOD FRIDAY" },
  { id: 8, text: "Circular - 25/03/2024 - Holiday - HOLI FESTIVAL" },
  { id: 9, text: "Circular - 08/03/2024 - Holiday - MAHA SHIVA RATRI FESTIVAL" },
];

const baseExams = [
  { id: 1, category: "Time Table\n(27-07-2026)", notification: "SEE- TIME TABLE - II M.TECH I SEM - SUPPLEMENTARY (SRIT R23) - AUG - 2026" },
  { id: 2, category: "Time Table\n(27-07-2026)", notification: "SEE- TIME TABLE - I M.TECH II SEM - SUPPLEMENTARY (SRIT R23) - AUG - 2026" },
  { id: 3, category: "Time Table\n(27-07-2026)", notification: "SEE- TIME TABLE - I M.TECH I SEM - SUPPLEMENTARY (SRIT R23) - AUG - 2026" },
  { id: 4, category: "Time Table\n(27-07-2026)", notification: "SEE- TIME TABLE - I M.TECH I SEM - SUPPLEMENTARY (SRIT R25) - AUG - 2026" },
  { id: 5, category: "Time Table\n(27-07-2026)", notification: "SEE- TIME TABLE - I M.TECH II SEM REGULAR (SRIT R25) - AUG - 2026" },
  { id: 6, category: "Time Table\n(27-08-2026)", notification: "SEE- TIME TABLE - I M.TECH II SEM - CIE-II - (SRIT R25) - AUG 2026" },
  { id: 7, category: "Revaluation\nNotification\n(30-06-2026)", notification: "REVALUATION NOTIFICATION - I B.TECH II SEM REGULAR & SUPPLEMENTARY AND I-1, II-1 & II-I - SUPPLEMENTARY (SRIT - R23) - SEE -" },
];

const basePlacements = [
  { id: 1, company: "Recruit CRM", offers: "1", ctc: "9.00 LPA" },
  { id: 2, company: "Tata Consultancy Services", offers: "43", ctc: "7.09 LPA" },
  { id: 3, company: "Reliance Industries Ltd.", offers: "1", ctc: "7.50 LPA" },
  { id: 4, company: "Lumen Technologies", offers: "3", ctc: "7.10 LPA" },
  { id: 5, company: "Capgemini", offers: "1", ctc: "6.00 LPA" },
  { id: 6, company: "Virtusa", offers: "4", ctc: "6.50 LPA" },
  { id: 7, company: "Invictus Defence Systems", offers: "4", ctc: "6.00 LPA" },
  { id: 8, company: "Absolute Composites", offers: "1", ctc: "6.00 LPA" },
  { id: 9, company: "Shnoor International", offers: "6", ctc: "6.00 LPA" },
  { id: 10, company: "Cognizant", offers: "2", ctc: "5.40 LPA" },
];

// Helper to generate dynamic mock data for other years based on the real data
const generateYearlyData = () => {
    const data: any = { circulars: {}, exams: {}, placements: {} };
    years.forEach((year, index) => {
        if (year === '2025-26') {
            data.circulars[year] = baseCirculars;
            data.exams[year] = baseExams;
            data.placements[year] = basePlacements;
        } else {
            // Generate slightly different data to prove the tabs are dynamic
            const yearStart = parseInt(year.split('-')[0]);
            
            data.circulars[year] = baseCirculars.slice(0, 7 - (index % 3)).map(c => ({
                ...c,
                text: c.text.replace(/2024/g, (yearStart - 1).toString())
            }));

            data.exams[year] = baseExams.slice(0, 6 - (index % 2)).map(e => ({
                ...e,
                category: e.category.replace(/2026/g, (yearStart + 1).toString()),
                notification: e.notification.replace(/2026/g, (yearStart + 1).toString()).replace(/R25/g, `R${(yearStart - 2000)}`)
            }));

            data.placements[year] = basePlacements.slice(index % 3, 10 - (index % 4)).map(p => ({
                ...p,
                offers: Math.max(1, parseInt(p.offers) - index).toString()
            }));
        }
    });
    return data;
};

const dynamicData = generateYearlyData();

const Notifications: React.FC = () => {
    const [activeCircularYear, setActiveCircularYear] = useState('2025-26');
    const [activeExamYear, setActiveExamYear] = useState('2025-26');
    const [activePlacementYear, setActivePlacementYear] = useState('2025-26');

    const currentCirculars = dynamicData.circulars[activeCircularYear] || [];
    const currentExams = dynamicData.exams[activeExamYear] || [];
    const currentPlacements = dynamicData.placements[activePlacementYear] || [];

    return (
        <div className="w-full pb-16">
            <h2 className="text-center font-sans text-3xl md:text-4xl font-black text-[#FF5422] uppercase tracking-wider mb-10">
                NOTIFICATIONS
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* Circulars Column */}
                <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-neutral-100 h-[600px]">
                    <div className="bg-[#f97316] text-white p-4 flex items-center gap-2">
                        <FileText size={20} />
                        <h3 className="font-bold text-lg tracking-wide">Circulars</h3>
                    </div>
                    


                    <div className="flex-1 overflow-y-auto">
                        <table className="w-full text-sm text-left text-neutral-700">
                            <thead className="bg-[#f97316] text-white font-semibold">
                                <tr>
                                    <th className="px-3 py-2 w-12 text-center border-r border-white/20">#</th>
                                    <th className="px-3 py-2 text-center">Circular</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCirculars.length > 0 ? (
                                    currentCirculars.map((item: any) => (
                                        <tr key={item.id} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                                            <td className="px-3 py-2.5 text-center font-medium border-r border-neutral-200">{item.id}</td>
                                            <td className="px-3 py-2.5 font-medium hover:text-[#FF5422] cursor-pointer underline-offset-2 hover:underline transition-all">
                                                {item.text}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr><td colSpan={2} className="px-3 py-6 text-center text-neutral-500">No circulars available for {activeCircularYear}</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Tabs */}
                    <div className="bg-neutral-50 p-2 border-t border-neutral-200 flex flex-wrap gap-1">
                        {years.map(year => (
                            <button
                                key={year}
                                onClick={() => setActiveCircularYear(year)}
                                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                                    activeCircularYear === year 
                                    ? 'text-[#FF5422] bg-white border border-neutral-200 shadow-sm' 
                                    : 'text-neutral-500 hover:text-neutral-800'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Examination Column */}
                <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-neutral-100 h-[600px]">
                    <div className="bg-[#f97316] text-white p-4 flex items-center gap-2">
                        <Calendar size={20} />
                        <h3 className="font-bold text-lg tracking-wide">Examination</h3>
                    </div>
                    


                    <div className="flex-1 overflow-y-auto">
                        <table className="w-full text-sm text-left text-neutral-700">
                            <thead className="bg-[#f97316] text-white font-semibold text-xs text-center">
                                <tr>
                                    <th colSpan={3} className="px-2 py-2">Examination Notifications: AY {activeExamYear}</th>
                                </tr>
                                <tr className="bg-white text-neutral-900 border-b-2 border-[#f97316]">
                                    <th className="px-2 py-2 w-10 text-center border-r border-neutral-200">#</th>
                                    <th className="px-2 py-2 w-28 text-center border-r border-neutral-200">Category</th>
                                    <th className="px-2 py-2 text-center">Notification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentExams.length > 0 ? (
                                    currentExams.map((item: any) => (
                                        <tr key={item.id} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                                            <td className="px-2 py-2 text-center font-medium border-r border-neutral-200 align-top">{item.id}</td>
                                            <td className="px-2 py-2 text-[11px] text-center font-medium border-r border-neutral-200 align-top whitespace-pre-line leading-tight">
                                                {item.category}
                                            </td>
                                            <td className="px-3 py-2 text-[12px] font-medium hover:text-[#FF5422] cursor-pointer underline-offset-2 hover:underline transition-all">
                                                {item.notification}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr><td colSpan={3} className="px-3 py-6 text-center text-neutral-500">No exams available for {activeExamYear}</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Tabs */}
                    <div className="bg-neutral-50 p-2 border-t border-neutral-200 flex flex-wrap gap-1">
                        {years.map(year => (
                            <button
                                key={year}
                                onClick={() => setActiveExamYear(year)}
                                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                                    activeExamYear === year 
                                    ? 'text-[#FF5422] bg-white border border-neutral-200 shadow-sm' 
                                    : 'text-neutral-500 hover:text-neutral-800'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Placements Column */}
                <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-neutral-100 h-[600px]">
                    <div className="bg-[#f97316] text-white p-4 flex items-center gap-2">
                        <GraduationCap size={20} />
                        <h3 className="font-bold text-lg tracking-wide">Placements</h3>
                    </div>
                    


                    <div className="flex-1 overflow-y-auto">
                        <table className="w-full text-sm text-left text-neutral-700">
                            <thead className="bg-[#f97316] text-white font-semibold text-center text-xs">
                                <tr>
                                    <th colSpan={4} className="px-2 py-2">Batch {activePlacementYear}</th>
                                </tr>
                                <tr className="bg-white text-neutral-900 border-b-2 border-[#f97316]">
                                    <th className="px-2 py-2 w-10 text-center border-r border-neutral-200">#</th>
                                    <th className="px-2 py-2 text-center border-r border-neutral-200">Company</th>
                                    <th className="px-2 py-2 w-16 text-center border-r border-neutral-200">No. of Offers</th>
                                    <th className="px-2 py-2 w-20 text-center">CTC</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPlacements.length > 0 ? (
                                    currentPlacements.map((item: any) => (
                                        <tr key={item.id} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                                            <td className="px-2 py-2.5 text-center font-medium border-r border-neutral-200">{item.id}</td>
                                            <td className="px-3 py-2.5 font-medium border-r border-neutral-200">{item.company}</td>
                                            <td className="px-2 py-2.5 text-center font-medium border-r border-neutral-200">{item.offers}</td>
                                            <td className="px-2 py-2.5 text-center font-medium">{item.ctc}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr><td colSpan={4} className="px-3 py-6 text-center text-neutral-500">No placement data for {activePlacementYear}</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Tabs */}
                    <div className="bg-neutral-50 p-2 border-t border-neutral-200 flex flex-wrap gap-1">
                        {years.map(year => (
                            <button
                                key={year}
                                onClick={() => setActivePlacementYear(year)}
                                className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                                    activePlacementYear === year 
                                    ? 'text-[#FF5422] bg-white border border-neutral-200 shadow-sm' 
                                    : 'text-neutral-500 hover:text-neutral-800'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;

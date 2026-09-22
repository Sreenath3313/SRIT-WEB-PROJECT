import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Papa from 'papaparse';

/* ── Year tabs ─────────────────────────────────────────── */
const years = ['2025-26', '2024-25', '2023-24', '2022-23', '2021-22'];

/* ── Section data ──────────────────────────────────────── */
interface TableRow {
    sno: number;
    [key: string]: string | number;
}

interface SectionData {
    key: string;
    title: string;
    subtitle: string;
    columns: string[];
    data: Record<string, TableRow[]>;
    // NEW: Dynamic Google Sheets Integration!
    // To use this, publish your Google Sheet to the web as a CSV and paste the link here for the specific year.
    // The component will automatically fetch the data, overriding the static `data` above.
    sheetUrls?: Record<string, string>;

    // To add a button in the UI that directly opens the Google Sheet to edit it, paste the normal URL here.
    editUrls?: Record<string, string>;
}

const sections: SectionData[] = [
    {
        key: 'academic',
        title: 'Student Academic Activities',
        subtitle: 'Participation of Students in Academic Events',
        columns: ['S. No', 'Student Name', 'Event Name', 'Event Type', 'College Name & Venue', 'Participation/Prizes Won'],

        // EXAMPLE OF HOW TO ADD SPREADSHEET LINKS:
        sheetUrls: {
            '2025-26': 'https://docs.google.com/spreadsheets/d/1rMzUi4DqMdUyWiWHjUW-TyYTjKp7DxWh6P5vZ4vsHy0/export?format=csv',
        },
        editUrls: {
            '2025-26': 'https://docs.google.com/spreadsheets/d/1rMzUi4DqMdUyWiWHjUW-TyYTjKp7DxWh6P5vZ4vsHy0/edit?usp=sharing',
        },

        data: {
            '2025-26': [
                { sno: 1, name: 'Bheemesh Ampe', event: 'Workshop', type: 'Full Stack Development', venue: 'Shaastra, IIT Madras', prize: 'Participation' },
                { sno: 2, name: 'Kiran Kumar Javaji', event: 'Google for Education', type: 'Workshop', venue: 'Virtual Google Platform', prize: 'Participation' },
                { sno: 3, name: 'Fouzia', event: 'CMR Hackfest 3.0', type: 'National Level Hackathon', venue: 'CMR College of Engineering', prize: 'Participation' },
                { sno: 4, name: 'Deepthi', event: 'CMR Hackfest 3.0', type: 'National Level Hackathon', venue: 'CMR College of Engineering', prize: 'Participation' },
                { sno: 5, name: 'Bindu', event: 'CMR Hackfest 3.0', type: 'National Level Hackathon', venue: 'CMR College of Engineering', prize: 'Participation' },
                { sno: 6, name: 'Hema', event: 'CMR Hackfest 3.0', type: 'National Level Hackathon', venue: 'CMR College of Engineering', prize: 'Participation' },
                { sno: 7, name: 'Bhavya', event: 'CMR Hackfest 3.0', type: 'National Level Hackathon', venue: 'CMR College of Engineering', prize: 'Participation' },
                { sno: 8, name: 'Shiva', event: 'CMR Hackfest 3.0', type: 'National Level Hackathon', venue: 'CMR College of Engineering', prize: 'Participation' },
                { sno: 9, name: 'Praneetha', event: 'CMR Hackfest 3.0', type: 'National Level Hackathon', venue: 'CMR College of Engineering', prize: 'Participation' },
            ],
            '2024-25': [
                { sno: 1, name: 'Ravi Kumar', event: 'Smart India Hackathon', type: 'National Hackathon', venue: 'IIT Bombay', prize: '1st Prize' },
                { sno: 2, name: 'Priya Sharma', event: 'IEEE Conference', type: 'Paper Presentation', venue: 'NIT Warangal', prize: 'Best Paper Award' },
                { sno: 3, name: 'Anil Reddy', event: 'Code Vita', type: 'Coding Competition', venue: 'TCS Virtual', prize: 'Top 100' },
                { sno: 4, name: 'Sravani M', event: 'Innovation Challenge', type: 'Project Expo', venue: 'JNTUA, Anantapur', prize: '2nd Prize' },
            ],
            '2023-24': [
                { sno: 1, name: 'Venkat Rao', event: 'ACM-ICPC', type: 'Coding Contest', venue: 'Amrita University', prize: 'Regional Finalist' },
                { sno: 2, name: 'Divya K', event: 'Microsoft Azure Challenge', type: 'Cloud Computing', venue: 'Virtual', prize: 'Top 10' },
            ],
            '2022-23': [
                { sno: 1, name: 'Suresh Babu', event: 'APSCHE Hackathon', type: 'State Level', venue: 'JNTUH, Hyderabad', prize: 'Winner' },
            ],
            '2021-22': [
                { sno: 1, name: 'Meena G', event: 'National Science Day', type: 'Science Exhibition', venue: 'SRIT Campus', prize: 'Best Exhibit' },
            ],
        },
    },
    {
        key: 'cocurricular',
        title: 'Cocurricular and Extra Curricular Activities',
        subtitle: 'Student Participation in Cocurricular & Extracurricular Events',
        columns: ['S. No', 'Student Name', 'Activity Name', 'Activity Type', 'Venue', 'Achievement'],
        data: {
            '2025-26': [
                { sno: 1, name: 'Ramya S', event: 'Inter-College Debate', type: 'Literary', venue: 'SVU, Tirupati', prize: '1st Prize' },
                { sno: 2, name: 'Harsha V', event: 'Robotics Championship', type: 'Technical Club', venue: 'IIT Hyderabad', prize: 'Runner Up' },
                { sno: 3, name: 'Kavya P', event: 'Cultural Fest Dancer', type: 'Cultural', venue: 'SRIT Annual Day', prize: 'Best Performer' },
                { sno: 4, name: 'Vishnu K', event: 'NSS Blood Donation Camp', type: 'Social Service', venue: 'SRIT Campus', prize: 'Organizer' },
                { sno: 5, name: 'Sai Teja', event: 'Cricket Tournament', type: 'Sports', venue: 'JNTUA Sports Meet', prize: 'Winner' },
            ],
            '2024-25': [
                { sno: 1, name: 'Lakshmi R', event: 'Techno Cultural Fest', type: 'Cultural', venue: 'SRIT Campus', prize: 'Best Organizer' },
                { sno: 2, name: 'Mahesh B', event: 'Chess Tournament', type: 'Sports', venue: 'State Championship', prize: '3rd Place' },
            ],
            '2023-24': [
                { sno: 1, name: 'Anjali M', event: 'Rangoli Competition', type: 'Cultural', venue: 'SRIT Annual Day', prize: '1st Prize' },
            ],
            '2022-23': [],
            '2021-22': [],
        },
    },
    {
        key: 'internships',
        title: 'Students Internships',
        subtitle: 'Student Internship Records',
        columns: ['S. No', 'Student Name', 'Company/Organization', 'Domain', 'Duration', 'Status'],
        data: {
            '2025-26': [
                { sno: 1, name: 'Akhil Reddy', event: 'TCS', type: 'Java Full Stack', venue: '6 Months', prize: 'Completed' },
                { sno: 2, name: 'Sneha K', event: 'Infosys', type: 'Data Science', venue: '3 Months', prize: 'Completed' },
                { sno: 3, name: 'Rakesh M', event: 'Wipro', type: 'Cloud Engineering', venue: '4 Months', prize: 'Ongoing' },
                { sno: 4, name: 'Pooja S', event: 'Amazon', type: 'SDE Intern', venue: '6 Months', prize: 'Completed' },
                { sno: 5, name: 'Naveen T', event: 'ISRO', type: 'Research Intern', venue: '2 Months', prize: 'Completed' },
                { sno: 6, name: 'Swathi G', event: 'Microsoft', type: 'AI/ML Intern', venue: '3 Months', prize: 'Ongoing' },
            ],
            '2024-25': [
                { sno: 1, name: 'Rahul D', event: 'Google', type: 'STEP Intern', venue: '3 Months', prize: 'Completed' },
                { sno: 2, name: 'Meghana V', event: 'Cognizant', type: 'Web Development', venue: '6 Months', prize: 'Completed' },
                { sno: 3, name: 'Karthik S', event: 'DRDO', type: 'Research', venue: '2 Months', prize: 'Completed' },
            ],
            '2023-24': [
                { sno: 1, name: 'Deepak R', event: 'HCL Technologies', type: 'Software Testing', venue: '4 Months', prize: 'Completed' },
            ],
            '2022-23': [],
            '2021-22': [],
        },
    },
    {
        key: 'placements',
        title: 'Student Placements',
        subtitle: 'Student Placement Records',
        columns: ['S. No', 'Student Name', 'Company', 'Role', 'Package (LPA)', 'Year'],
        data: {
            '2025-26': [
                { sno: 1, name: 'Arun Kumar', event: 'TCS', type: 'System Engineer', venue: '7.0 LPA', prize: '2025-26' },
                { sno: 2, name: 'Sravya M', event: 'Infosys', type: 'Systems Engineer', venue: '6.5 LPA', prize: '2025-26' },
                { sno: 3, name: 'Vamsi K', event: 'Wipro', type: 'Project Engineer', venue: '6.0 LPA', prize: '2025-26' },
                { sno: 4, name: 'Keerthi R', event: 'Amazon', type: 'SDE-1', venue: '24.0 LPA', prize: '2025-26' },
                { sno: 5, name: 'Charan S', event: 'Capgemini', type: 'Analyst', venue: '7.5 LPA', prize: '2025-26' },
                { sno: 6, name: 'Mounika G', event: 'Accenture', type: 'Associate SE', venue: '6.5 LPA', prize: '2025-26' },
                { sno: 7, name: 'Ravi Teja', event: 'Google', type: 'SDE Intern → FTE', venue: '32.0 LPA', prize: '2025-26' },
            ],
            '2024-25': [
                { sno: 1, name: 'Sunil M', event: 'TCS', type: 'Developer', venue: '7.0 LPA', prize: '2024-25' },
                { sno: 2, name: 'Lavanya P', event: 'Cognizant', type: 'Programmer Analyst', venue: '6.0 LPA', prize: '2024-25' },
                { sno: 3, name: 'Manish R', event: 'Microsoft', type: 'SDE', venue: '18.0 LPA', prize: '2024-25' },
            ],
            '2023-24': [
                { sno: 1, name: 'Prasad K', event: 'Infosys', type: 'SE', venue: '5.5 LPA', prize: '2023-24' },
                { sno: 2, name: 'Nandini S', event: 'HCL', type: 'Analyst', venue: '5.0 LPA', prize: '2023-24' },
            ],
            '2022-23': [
                { sno: 1, name: 'Srikanth V', event: 'TCS', type: 'ASE', venue: '4.5 LPA', prize: '2022-23' },
            ],
            '2021-22': [],
        },
    },
    {
        key: 'projects',
        title: 'Student Projects',
        subtitle: 'Student Project Details',
        columns: ['S. No', 'Student Name', 'Project Title', 'Domain', 'Guide', 'Status'],
        data: {
            '2025-26': [
                { sno: 1, name: 'Team Alpha', event: 'AI-Based Crop Disease Detection', type: 'Machine Learning', venue: 'Dr. K. Subba Rao', prize: 'Completed' },
                { sno: 2, name: 'Team Beta', event: 'Smart Campus IoT System', type: 'IoT', venue: 'Dr. P. Ramesh', prize: 'Ongoing' },
                { sno: 3, name: 'Team Gamma', event: 'Blockchain Voting System', type: 'Blockchain', venue: 'Dr. S. Kumar', prize: 'Completed' },
                { sno: 4, name: 'Team Delta', event: 'AR-based Lab Manual', type: 'Augmented Reality', venue: 'Dr. M. Rao', prize: 'Ongoing' },
                { sno: 5, name: 'Team Epsilon', event: 'NLP Chatbot for College', type: 'NLP', venue: 'Dr. K. Subba Rao', prize: 'Completed' },
            ],
            '2024-25': [
                { sno: 1, name: 'Team Omega', event: 'Fake News Detection System', type: 'NLP/ML', venue: 'Dr. P. Ramesh', prize: 'Completed' },
                { sno: 2, name: 'Team Sigma', event: 'E-Health Monitoring', type: 'IoT/Cloud', venue: 'Dr. S. Kumar', prize: 'Completed' },
            ],
            '2023-24': [
                { sno: 1, name: 'Team Phoenix', event: 'Online Exam Proctoring', type: 'Computer Vision', venue: 'Dr. M. Rao', prize: 'Completed' },
            ],
            '2022-23': [],
            '2021-22': [],
        },
    },
    {
        key: 'honors',
        title: 'Roll of Honors',
        subtitle: 'Distinguished Student Achievements',
        columns: ['S. No', 'Student Name', 'Achievement', 'Category', 'Year', 'Recognition'],
        data: {
            '2025-26': [
                { sno: 1, name: 'Keerthi R', event: '1st Rank – JNTUA', type: 'Academic Excellence', venue: '2025-26', prize: 'Gold Medal' },
                { sno: 2, name: 'Ravi Teja', event: 'Google SDE Offer – 32 LPA', type: 'Placement', venue: '2025-26', prize: 'Highest Package' },
                { sno: 3, name: 'Team Alpha', event: 'SIH 2025 Winner', type: 'Hackathon', venue: '2025-26', prize: '₹1,00,000 Prize' },
                { sno: 4, name: 'Bhavya S', event: 'IEEE Paper Published', type: 'Research', venue: '2025-26', prize: 'Best Paper' },
            ],
            '2024-25': [
                { sno: 1, name: 'Manish R', event: 'Microsoft SDE – 18 LPA', type: 'Placement', venue: '2024-25', prize: 'Top Recruiter' },
                { sno: 2, name: 'Priya S', event: 'University 2nd Rank', type: 'Academic', venue: '2024-25', prize: 'Silver Medal' },
            ],
            '2023-24': [
                { sno: 1, name: 'Venkat Rao', event: 'ACM-ICPC Regional Finalist', type: 'Competition', venue: '2023-24', prize: 'Certificate' },
            ],
            '2022-23': [],
            '2021-22': [],
        },
    },
];

/* ── Component ─────────────────────────────────────────── */

const DepartmentStudents: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>('academic');
    const [activeYears, setActiveYears] = useState<Record<string, string>>(
        Object.fromEntries(sections.map((s) => [s.key, '2025-26']))
    );

    // Dynamic Data State
    const [fetchedData, setFetchedData] = useState<Record<string, string[][]>>({});
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

    const toggleSection = (key: string) => {
        setOpenSection((prev) => (prev === key ? null : key));
    };

    const setYearForSection = (sectionKey: string, year: string) => {
        setActiveYears((prev) => ({ ...prev, [sectionKey]: year }));
    };

    // Effect to fetch CSV data when a section and year are active
    useEffect(() => {
        if (!openSection) return;

        const section = sections.find(s => s.key === openSection);
        if (!section || !section.sheetUrls) return;

        const currentYear = activeYears[openSection];
        const url = section.sheetUrls[currentYear];
        const cacheKey = `${openSection}-${currentYear}`;

        if (url && !fetchedData[cacheKey] && !loadingStates[cacheKey]) {
            Promise.resolve().then(() => {
                setLoadingStates(prev => ({ ...prev, [cacheKey]: true }));
            });

            fetch(url)
                .then(res => res.text())
                .then(csvText => {
                    Papa.parse(csvText, {
                        header: false, // We ignore headers so we just get an array of columns in order
                        skipEmptyLines: true,
                        complete: (results) => {
                            // results.data is string[][], we drop the first row (headers)
                            const rows = results.data.slice(1) as string[][];
                            setFetchedData(prev => ({ ...prev, [cacheKey]: rows }));
                            setLoadingStates(prev => ({ ...prev, [cacheKey]: false }));
                        },
                        error: (error: unknown) => {
                            console.error('Error parsing CSV:', error);
                            setLoadingStates(prev => ({ ...prev, [cacheKey]: false }));
                        }
                    });
                })
                .catch(err => {
                    console.error('Error fetching CSV:', err);
                    setLoadingStates(prev => ({ ...prev, [cacheKey]: false }));
                });
        }
    }, [openSection, activeYears, fetchedData, loadingStates]);

    return (
        <div className="space-y-3">
            {sections.map((section) => {
                const isOpen = openSection === section.key;
                const currentYear = activeYears[section.key];

                // Determine whether to use dynamic fetched data or static fallback
                const cacheKey = `${section.key}-${currentYear}`;
                const isDynamic = !!section.sheetUrls?.[currentYear];
                const isLoading = isDynamic && loadingStates[cacheKey];

                let dynamicRows: string[][] = [];
                let staticRows: TableRow[] = [];

                if (isDynamic) {
                    dynamicRows = fetchedData[cacheKey] || [];
                } else {
                    staticRows = section.data[currentYear] || [];
                }

                const hasData = isDynamic ? dynamicRows.length > 0 : staticRows.length > 0;

                return (
                    <div
                        key={section.key}
                        className="rounded-xl overflow-hidden transition-all duration-300"
                        style={{
                            border: isOpen ? '1px solid rgba(255, 84, 34, 0.25)' : '1px solid rgba(10, 9, 3, 0.06)',
                            boxShadow: isOpen ? '0 4px 20px rgba(255, 84, 34, 0.12)' : '0 1px 4px rgba(0,0,0,0.06)',
                        }}
                    >
                        {/* ── Accordion Header ─────────────────────── */}
                        <button
                            onClick={() => toggleSection(section.key)}
                            className="w-full flex items-center justify-between px-6 py-4 lg:px-8 lg:py-5 transition-colors duration-300"
                            style={{ background: '#0A0903' }}
                            onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.background = '#1a1812'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = '#0A0903'; }}
                        >
                            <h3 className="font-serif text-lg lg:text-xl font-bold text-[#FF5422]">
                                {section.title}
                            </h3>
                            <motion.span
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="shrink-0 ml-4"
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 8L10 13L15 8" stroke="#FF5422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.span>
                        </button>

                        {/* ── Accordion Content ────────────────────── */}
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden bg-white"
                                >
                                    <div className="px-6 pt-4 pb-2 lg:px-8 flex justify-between items-center">
                                        <p className="text-sm text-neutral-400">
                                            {section.subtitle}
                                        </p>
                                        <div className="flex items-center gap-4">

                                            {isDynamic && (
                                                <span className="text-[10px] uppercase font-bold tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200">
                                                    Live Sheet Synced
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* ── Data Table ────────────────────── */}
                                    <div className="px-4 lg:px-6 overflow-x-auto custom-scrollbar relative min-h-[100px]">

                                        {isLoading && (
                                            <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center">
                                                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                            </div>
                                        )}

                                        <table className="w-full min-w-[700px] text-left">
                                            <thead>
                                                <tr>
                                                    {section.columns.map((col, ci) => (
                                                        <th
                                                            key={ci}
                                                            className="px-4 py-3.5 text-[15px] font-bold uppercase tracking-wider whitespace-nowrap bg-primary text-white"
                                                            style={{ borderRight: ci < section.columns.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
                                                        >
                                                            {col}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {!hasData && !isLoading ? (
                                                    <tr>
                                                        <td colSpan={section.columns.length} className="px-4 py-8 text-center text-[15px] text-neutral-400 italic">
                                                            No records available for {currentYear}
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    <>
                                                        {isDynamic
                                                            // Render Dynamic Google Sheets Rows
                                                            ? dynamicRows.map((rowArr, ri) => (
                                                                <tr key={`dyn-${ri}`} className={`transition-colors duration-200 hover:bg-primary/5 ${ri % 2 === 0 ? 'bg-[rgba(255,250,243,0.5)]' : 'bg-white'}`}>
                                                                    {rowArr.map((val, vi) => (
                                                                        <td key={vi} className="px-4 py-3.5 text-[16px] text-neutral-700 whitespace-nowrap border-b border-primary/5">
                                                                            {val}
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            ))
                                                            // Render Static Fallback Rows
                                                            : staticRows.map((rowObj, ri) => {
                                                                const values = Object.values(rowObj);
                                                                return (
                                                                    <tr key={`stat-${ri}`} className={`transition-colors duration-200 hover:bg-primary/5 ${ri % 2 === 0 ? 'bg-[rgba(255,250,243,0.5)]' : 'bg-white'}`}>
                                                                        {values.map((val, vi) => (
                                                                            <td key={vi} className="px-3 py-3 text-[15px] text-neutral-700 whitespace-nowrap border-b border-primary/5">
                                                                                {String(val)}
                                                                            </td>
                                                                        ))}
                                                                    </tr>
                                                                );
                                                            })
                                                        }
                                                    </>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* ── Year Tabs ─────────────────────── */}
                                    <div className="px-6 py-4 lg:px-8 flex items-center gap-1 overflow-x-auto border-t border-primary/5">
                                        {years.map((year) => (
                                            <button
                                                key={year}
                                                onClick={() => setYearForSection(section.key, year)}
                                                className={`px-4 py-2 text-[14px] font-medium rounded-md transition-all duration-200 shrink-0 border ${currentYear === year
                                                        ? 'bg-primary text-white border-primary opacity-100'
                                                        : 'bg-transparent text-[#0A0903] border-neutral-200 opacity-50 hover:border-primary/50 hover:text-[#FF5422] hover:opacity-100'
                                                    }`}
                                            >
                                                {year}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

export default DepartmentStudents;

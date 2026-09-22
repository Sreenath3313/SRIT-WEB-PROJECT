import React from 'react';
import type { DepartmentData } from '../../data/departments';
import DepartmentAccordion from '../../components/common/DepartmentAccordion';

interface DepartmentStudentChaptersProps {
    dept: DepartmentData;
}

const DepartmentStudentChapters: React.FC<DepartmentStudentChaptersProps> = ({ dept }) => {
    if (dept.slug === 'cse') {
        const items = [
            { title: 'IEI' },
            { title: 'Internet Society' },
        ];
        return <DepartmentAccordion title="STUDENTS CHAPTERS" items={items} />;
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-bold font-serif mb-4 text-[#FF5422] uppercase">
                Students Chapters
            </h2>
            <p className="text-neutral-600">
                Information about Students Chapters in {dept.name} will be added here.
            </p>
        </div>
    );
};

export default DepartmentStudentChapters;

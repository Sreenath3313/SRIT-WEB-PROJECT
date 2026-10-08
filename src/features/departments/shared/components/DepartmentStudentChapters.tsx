import React from 'react';
import type { DepartmentData } from '../../index';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface DepartmentStudentChaptersProps {
    dept: DepartmentData;
}

const DepartmentStudentChapters: React.FC<DepartmentStudentChaptersProps> = ({ dept }) => {
    if ((dept.slug === 'csm' || dept.slug === 'civil') && dept.studentChapters) {
        const items = dept.studentChapters.map(chapter => ({
            title: chapter.title,
            content: chapter.content ? <ContentRenderer content={chapter.content} /> : null
        }));
        return <DepartmentAccordion title="STUDENT CHAPTERS" items={items} />;
    }

    if (dept.slug === 'cse') {
        const items = [
            { title: 'IEI' },
            { title: 'Internet Society' },
        ];
        return <DepartmentAccordion title="STUDENTS CHAPTERS" items={items} />;
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
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

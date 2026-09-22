import React from 'react';
import type { DepartmentData } from '../../data/departments';
import DepartmentAccordion from '../../components/common/DepartmentAccordion';

interface DepartmentEContentProps {
    dept: DepartmentData;
}

const DepartmentEContent: React.FC<DepartmentEContentProps> = ({ dept }) => {
    if (dept.slug === 'cse') {
        const items = [
            { title: 'CSE- 2025-29 Batch' },
            { title: 'CSE- 2024-28 Batch' },
            { title: 'CSE- 2023-27 Batch' },
            { title: 'CSE- 2022-26 Batch' },
            { title: 'CSE- 2021-25 Batch' },
            { title: 'CSE- 2020-24 Batch' },
            { title: 'CSE- 2019-23 Batch' },
        ];
        return <DepartmentAccordion title="E-CONTENT" items={items} />;
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-bold font-serif mb-4 text-[#FF5422] uppercase">
                E-Content
            </h2>
            <p className="text-neutral-600">
                E-Content for {dept.name} will be added here.
            </p>
        </div>
    );
};

export default DepartmentEContent;

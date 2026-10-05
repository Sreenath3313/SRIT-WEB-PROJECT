import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';

interface CSEStudentChaptersProps {
    dept: DepartmentData;
}

const CSEStudentChapters: React.FC<CSEStudentChaptersProps> = () => {
    const items = [
        { title: 'IEI' },
        { title: 'Internet Society' },
    ];
    return <DepartmentAccordion title="STUDENTS CHAPTERS" items={items} />;
};

export default CSEStudentChapters;

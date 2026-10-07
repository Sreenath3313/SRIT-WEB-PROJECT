import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface EEEStudentChaptersProps {
    dept: DepartmentData;
}

const EEEStudentChapters: React.FC<EEEStudentChaptersProps> = ({ dept }) => {
    const items = dept.studentChapters?.map(item => ({
        title: item.title,
        content: typeof item.content === 'string' ? (
            <ContentRenderer content={item.content} />
        ) : (
            item.content
        )
    })) || [];

    return (
        <DepartmentAccordion
            title="STUDENTS CHAPTERS"
            items={items}
        />
    );
};

export default EEEStudentChapters;

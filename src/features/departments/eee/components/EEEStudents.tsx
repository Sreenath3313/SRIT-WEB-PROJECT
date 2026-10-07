import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface EEEStudentsProps {
    dept: DepartmentData;
}

const EEEStudents: React.FC<EEEStudentsProps> = ({ dept }) => {
    const items = dept.students?.map(item => ({
        title: item.title,
        content: <ContentRenderer content={item.content} />
    })) || [];

    return (
        <DepartmentAccordion
            title="STUDENTS"
            items={items}
        />
    );
};

export default EEEStudents;

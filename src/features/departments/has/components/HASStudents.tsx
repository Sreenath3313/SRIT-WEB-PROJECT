import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface HASStudentsProps {
    dept: DepartmentData;
}

const HASStudents: React.FC<HASStudentsProps> = ({ dept }) => {
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

export default HASStudents;

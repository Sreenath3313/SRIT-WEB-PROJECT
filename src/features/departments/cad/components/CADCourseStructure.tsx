import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface CADCourseStructureProps {
    dept: DepartmentData;
}

const CADCourseStructure: React.FC<CADCourseStructureProps> = ({ dept }) => {
    const items = dept.courseStructureItems 
        ? dept.courseStructureItems.map(item => ({
            title: item.title,
            content: <ContentRenderer content={item.content} />
          }))
        : [];

    return (
        <DepartmentAccordion
            title={`${dept.fullName} Course Structure`}
            items={items}
        />
    );
};

export default CADCourseStructure;

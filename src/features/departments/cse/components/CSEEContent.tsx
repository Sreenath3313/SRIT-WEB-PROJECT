import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';

interface CSEEContentProps {
    dept: DepartmentData;
}

const CSEEContent: React.FC<CSEEContentProps> = () => {
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
};

export default CSEEContent;

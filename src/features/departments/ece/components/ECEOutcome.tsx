import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface ECEOutcomeProps {
    dept: DepartmentData;
}

const ECEOutcome: React.FC<ECEOutcomeProps> = ({ dept }) => {
    const items = dept.outcome?.map(item => ({
        title: item.title,
        content: <ContentRenderer content={item.content} />
    })) || [];

    return (
        <DepartmentAccordion
            title="OUTCOME BASED EDUCATION"
            items={items}
        />
    );
};

export default ECEOutcome;

import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface EEEOutcomeProps {
    dept: DepartmentData;
}

const EEEOutcome: React.FC<EEEOutcomeProps> = ({ dept }) => {
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

export default EEEOutcome;

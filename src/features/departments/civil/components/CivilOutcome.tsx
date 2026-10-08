import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface CivilOutcomeProps {
    dept: DepartmentData;
}

const CivilOutcome: React.FC<CivilOutcomeProps> = ({ dept }) => {
    const items = (dept.outcomeGroups ?? []).map(item => ({
        title: item.title,
        content: <ContentRenderer content={item.content} />,
    }));

    return (
        <DepartmentAccordion
            title="OUTCOME BASED EDUCATION"
            items={items}
            defaultOpenIndex={-1}
        />
    );
};

export default CivilOutcome;

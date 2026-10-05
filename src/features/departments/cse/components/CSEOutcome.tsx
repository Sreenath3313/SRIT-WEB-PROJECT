import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';

interface CSEOutcomeProps {
    dept: DepartmentData;
}

const CSEOutcome: React.FC<CSEOutcomeProps> = () => {
    return (
        <DepartmentAccordion
            title="OUTCOME BASED EDUCATION"
            items={[
                { title: 'Program Educational Objectives (PEOs)' },
                { title: 'Program Outcomes (POs) & Program Specific Outcome (PSOs)' },
                { title: 'Outcome Based Education Manual' },
                { title: 'Attainment of Course Outcomes' },
                { title: 'PO and PSO Attainment' },
            ]}
        />
    );
};

export default CSEOutcome;

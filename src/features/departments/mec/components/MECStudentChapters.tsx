import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface MECStudentChaptersProps {
    dept: DepartmentData;
}

const MECStudentChapters: React.FC<MECStudentChaptersProps> = ({ dept }) => {
    const items = [
        { 
            title: 'IEI',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS8oNKcQWIf6LtowdotweDDqn_MxEoMppcO257hRrHlKBVbQfxvWuc596OEZLMFBw/pubhtml?widget=true&chrome=false&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        }
    ];
    return <DepartmentAccordion title="STUDENTS CHAPTERS" items={items} defaultOpenIndex={-1} />;
};

export default MECStudentChapters;

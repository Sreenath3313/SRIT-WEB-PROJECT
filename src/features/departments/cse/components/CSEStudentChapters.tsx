import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface CSEStudentChaptersProps {
    dept: DepartmentData;
}

const CSEStudentChapters: React.FC<CSEStudentChaptersProps> = () => {
    const iframeStyle = { width: '100%', height: '800px', border: 'none', borderRadius: '8px' };
    const items = [
        { title: 'IEI', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRojfO2VW7WHTIp9bY3qPHjYjUcDmjhxq_j_ewflVvFC1pxClhIw3KjptARqApWtQ/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
        { title: 'Internet Society', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR2zBcMc36_LW32ZiyfnjCAEfV_uRkx6GNaeHfL0UQzzjLVtwfMyZoe1EMHrXjLPNsV4Zoab8WJeTlU/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
    ];
    return <DepartmentAccordion title="STUDENTS CHAPTERS" items={items} />;
};

export default CSEStudentChapters;

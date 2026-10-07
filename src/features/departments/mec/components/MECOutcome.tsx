import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface MECOutcomeProps {
    dept: DepartmentData;
}

const MECOutcome: React.FC<MECOutcomeProps> = ({ dept }) => {
    const items = [
        { 
            title: 'Outcome Based Education Manual',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPtEFsOOnkth6Ny1VengGrV2V9NxmCvN6KhZT9AiVmMV0l-S-I47ve42MeuACoXg/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Attainment of Course Outcomes',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9u_tQ30-IcRjkAlmTagAAmedBGhPtvxAVUJ8tow8bHN_hf72_BVJG4iaQxeDF1A/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'PO and PSO Attainment',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTSmO78ThOYcOOSFxq3F0BjjZasLCHfgRwDb-DxMoAIhddApkvVA3K95W2dX4Fjxg/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
    ];
    return <DepartmentAccordion title="OUTCOME BASED EDUCATION" items={items} defaultOpenIndex={-1} />;
};

export default MECOutcome;

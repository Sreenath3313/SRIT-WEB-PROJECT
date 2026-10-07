import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface CSEEContentProps {
    dept: DepartmentData;
}

const CSEEContent: React.FC<CSEEContentProps> = () => {
    const iframeStyle = { width: '100%', height: '800px', border: 'none', borderRadius: '8px' };
    const items = [
        { title: 'CSE- 2025-29 Batch', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR2NnnDEmh0mmp8hwHYOh2kOF_AExZtJ-QauNN9OHaV0vY-gd7RMqP7_KuzyZnz1w/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
        { title: 'CSE- 2024-28 Batch', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS-E-FRjR4LnZoLq2GdAvr60mpV-tCbXN-mgVpPrdMtCB6bxlzlFR7HFPTGWxHRig/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
        { title: 'CSE- 2023-27 Batch', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRCEzqrbWJetcwH3q3seYEzjWA9g2_5zpURfqcLK0Wm16zbCcA0kFYzZy5-nPegyQ/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
        { title: 'CSE- 2022-26 Batch', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRokSFulyAsJSwwq6WBbVE_TVy_EHU-o2qwu-XIfvFuk21z2rJj-1DTl37db0USIQ/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
        { title: 'CSE- 2021-25 Batch', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQnAuFe6uEzAXMn7AQkF3OnAZbi8HP1a4_4nWe47SoqxBQlPP3lCzLWGkjDJEsEtQ/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
        { title: 'CSE- 2020-24 Batch', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSd3r_CarJXDvnGW8YaweYn8SAeNyYBvTymn-31rzdE5Wodr9mxjjEsyUIDwdkdVA/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
        { title: 'CSE- 2019-23 Batch', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSccrb4aEkQ3BnWfuRB5FgsvTYgklhk4qSer6X1Nu9tJ8M81y4KUxi165_A_lonmw/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
    ];
    return <DepartmentAccordion title="E-CONTENT" items={items} />;
};

export default CSEEContent;

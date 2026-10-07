import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import FacultyProfiles from '../../shared/components/FacultyProfiles';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface MECFacultyProps {
    dept: DepartmentData;
}

const MECFaculty: React.FC<MECFacultyProps> = ({ dept }) => {
    const items = [
        {
            title: 'Faculty Profiles',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKcuTBhi-lGWPB2Jc0ImhZ6DIeqmMrwA0o_wGcCYadV8dYWWjZv45VsDg2QWSIHg/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />,
        },
        { 
            title: 'Publications',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRF0xOnSp0zhVbydf44nxzJBkNJ82h7hBLESUzB7Bzqw9MwABwOgaycCk3OrwiiKdARV_6Nb_Kb6ady/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Patents',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSh92md---4fBa6ogzVwgpkSejc8d5vHitNScfL2KUNwBcYTH8OytEm6nc5lVwfFg/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Faculty Certifications',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR5TEkSPHGQOkBfF3ksskJ2ElmlZNyc63hkY4vBIhQOxFqf_UDEYmbDAprAAsbrxQ/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: "Faculty Development Program's",
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0gmCLAdTdbRMXpPyRrFBa01X4l7kJgt3rvvlHrujVTvjSt0_TONq6KKxikZFlNSj-IwvRqiya5zhl/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Innovative Teaching Methodologies',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTLU-cbqFKHM1srVTNdpeTLeHiUV1ujfNYpBz-4E8yXLo2oMWcatDgZmn4L5-056A/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
    ];
    return <DepartmentAccordion title="FACULTY" items={items} defaultOpenIndex={0} />;
};

export default MECFaculty;

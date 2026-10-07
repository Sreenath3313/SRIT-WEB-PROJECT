import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface CSEStudentsProps {
    dept: DepartmentData;
}

const CSEStudents: React.FC<CSEStudentsProps> = () => {
    const iframeStyle = { width: '100%', height: '800px', border: 'none', borderRadius: '8px' };
    return (
        <DepartmentAccordion
            title="STUDENTS"
            items={[
                { title: 'Student Academic Activities', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRuAxZK1SH3XidaoqLqr5ofPUwSIUUcLjy73h6-MlrKUbysGphXgl1u73gGGotyqw/pubhtml?widget=true&headers=false" style={iframeStyle} /> },
                { title: 'Cocurricular and Extra Curricular Activities', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSW3yF_lWl9AhCohuLhjzwk7bO3A6G3aU-ZsJZ0SuxQNbrYxm4PvAYDOF4U8R8Oeg/pubhtml?widget=true&headers=false" style={iframeStyle} /> },
                { title: 'Students Internship', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQVxnCfNu3xR_uaiWjg8bhplDI6usHE-c_b-7A6v6eJqYB_L_V6AT-F9-_-kIoWTw/pubhtml?widget=true&headers=false" style={iframeStyle} /> },
                { title: 'Students Projects', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQwq4c_MzjlB4mS_6lmvKEiXIBiHOcuBxnOCdAx0J1A0d2aOW5ssa-0cPvf-NvwrQ/pubhtml?widget=true&headers=false" style={iframeStyle} /> },
                { title: 'Placements', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnxWSUvQhXgedg8glKcqarGp1W4EJZrUe_tAMy0nj4wD-59SKwyynofWeJ3xpVoxWkG_EMdvljrKIx/pubhtml?widget=true&headers=false" style={iframeStyle} /> },
                { title: 'Roll of Honors', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT28QducTr12dByTShdlxSk8Sggb0tC3m8ACAWoAhwAsR8I0L6tlqGn_guSyVlRZA/pubhtml?widget=true&headers=false" style={iframeStyle} /> },
                { title: 'Logic of the Day', content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTMF8L68MNu9RWZ8eDWMx8RqsKOK36gIpBLhAIRxLGd0sWMSMpKdgY4A-c81PzDCw/pubhtml?widget=true&chrome=false&headers=false" style={iframeStyle} /> },
            ]}
        />
    );
};

export default CSEStudents;

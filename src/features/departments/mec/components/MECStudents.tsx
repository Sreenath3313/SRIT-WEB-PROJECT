import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface MECStudentsProps {
    dept: DepartmentData;
}

const MECStudents: React.FC<MECStudentsProps> = ({ dept }) => {
    const items = [
        { 
            title: 'Student Academic Activities',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQzw9gW-R74TzT_jAVWRuI9HT2WAwmompNam83P1L1S0cADMvepUW70EsbAKOWZiw/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Cocurricular and Extra Curricular Activities',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRW2K-kUk4iuRHODlWwNfW7IWb9brzgeioBtma_aeQcR5eY_NmzUqHOegeTx-e8dA/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Students Internships',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQb1747WprqUDqaB7N8vX6emsRL2531WBA980tjo4yuYomqb9FnE9Uwp8hv85zXEw/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Students Projects / Field Work',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8DN_CcrjpKrkcPMZjy4Sthz_dDoqSNpxJ1AV024N8jiz4fVq2DsqH52vERwaIuA/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Placements',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTR_xDnLUjhhrdMzT0M53YrDp0iM18SnxOeCKbTQUmVqieAauXpl0q87ZwqH7Xg_4MijIlGvoZ2MXl9/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Roll of Honors',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQgcMnhQgmxVIzuXoWECUv-LptQpFB_QKkim63oikSRrinUqkrV46-sSNC4Sjo2WQ/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
    ];
    return <DepartmentAccordion title="STUDENTS" items={items} defaultOpenIndex={-1} />;
};

export default MECStudents;

import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import FacultyProfiles from '../../shared/components/FacultyProfiles';
import IframeWithLoader from '../../../../components/common/IframeWithLoader';

interface CSEFacultyProps {
    dept: DepartmentData;
}

const CSEFaculty: React.FC<CSEFacultyProps> = ({ dept }) => {
    const items = [
        {
            title: 'Faculty Profiles',
            content: (
                <FacultyProfiles
                    faculty={dept.faculty}
                    title="Faculty Profiles"
                    subtitle="Department of Computer Science & Engineering"
                />
            ),
        },
        { 
            title: 'Publications',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRAO26b3Sd03HTJ0RYOvtRGhnNmDk1FmB0VXav01mjKrBZssOchJDvvTekJ_KUwLJXPEWLfEEq8uWsR/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Patents',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRY0OghqaQCHTpNegm68cuv9jXRwyDQETp1VJ7uUaEtjJEZ0Bt1feHE92A-Pxgsdx9EBP3g5EIIOUwh/pubhtml?widget=true&chrome=false&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Faculty Certifications',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRrYU2pef2LM-i-sgBRkT7sOiCMnmWWKzaAs9yteRm7WYl-H5DUKAzjpYC_30GgUrIeiyJHukFjcutE/pubhtml?widget=true&chrome=false&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: "Faculty Development Program's",
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRrYU2pef2LM-i-sgBRkT7sOiCMnmWWKzaAs9yteRm7WYl-H5DUKAzjpYC_30GgUrIeiyJHukFjcutE/pubhtml?widget=true&chrome=false&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
        { 
            title: 'Innovative Teaching Methods',
            content: <IframeWithLoader src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS1mWSiAkQW9suPebGpK73m5sm0Be8-tnAiYUYcWZoLL42g41UpWnxwf0ggyUlGrA/pubhtml?widget=true&headers=false" style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }} />
        },
    ];
    return <DepartmentAccordion title="FACULTY" items={items} defaultOpenIndex={0} />;
};

export default CSEFaculty;

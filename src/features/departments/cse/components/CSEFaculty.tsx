import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import FacultyProfiles from '../../shared/components/FacultyProfiles';

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
        { title: 'Publications' },
        { title: 'Patents' },
        { title: 'Faculty Certifications' },
        { title: "Faculty Development Program's" },
        { title: 'Innovative Teaching Methods' },
    ];
    return <DepartmentAccordion title="FACULTY" items={items} defaultOpenIndex={0} />;
};

export default CSEFaculty;

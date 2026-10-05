import React from 'react';
import type { DepartmentData } from '../../shared/types';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';

interface CSEStudentsProps {
    dept: DepartmentData;
}

const CSEStudents: React.FC<CSEStudentsProps> = () => {
    return (
        <DepartmentAccordion
            title="STUDENTS"
            items={[
                { title: 'Student Academic Activities' },
                { title: 'Cocurricular and Extra Curricular Activities' },
                { title: 'Students Internship' },
                { title: 'Students Projects' },
                { title: 'Placements' },
                { title: 'Roll of Honors' },
                { title: 'Logic of the Day' },
            ]}
        />
    );
};

export default CSEStudents;

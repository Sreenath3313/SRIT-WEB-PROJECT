import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { DepartmentData } from '../../index';
import DepartmentAccordion from '../../../../components/common/DepartmentAccordion';
import FacultyProfiles from './FacultyProfiles';
import ContentRenderer from '../../../../components/common/ContentRenderer';

interface DepartmentFacultyProps {
    dept: DepartmentData;
}

const avatarPlaceholder = (name: string) => {
    // Filter out single-character tokens (like 'K.') but keep meaningful words
    const initials = name
        .split(' ')
        .filter((n) => n.length > 1 && !n.endsWith('.'))
        .slice(0, 2)
        .map((n) => n[0])
        .join('');
    return initials || name.slice(0, 2).toUpperCase();
};

const DepartmentFaculty: React.FC<DepartmentFacultyProps> = ({ dept }) => {
    if (dept.slug === 'csm') {
        const csmAccordions = (dept.facultyGroups || []).filter(acc => acc.title.toLowerCase() !== 'faculty profiles');
        const items = [
            {
                title: 'Faculty Profiles',
                content: (
                    <FacultyProfiles
                        faculty={dept.faculty}
                        title="Faculty Profiles"
                        subtitle="Meet our experienced and dedicated faculty members who drive academic excellence in Artificial Intelligence and Machine Learning."
                        variant="csm"
                    />
                ),
            },
            ...csmAccordions.map(acc => ({
                title: acc.title,
                content: <ContentRenderer content={acc.content} />
            }))
        ];
        return <DepartmentAccordion title="FACULTY" items={items} defaultOpenIndex={0} />;
    }

    if (dept.slug === 'cse') {
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
    }

    const accordions = (dept.facultyAccordions || dept.facultyGroups || []).filter(acc => acc.title.toLowerCase() !== 'faculty profiles');
    const defaultItems = [
        {
            title: 'Faculty Profiles',
            content: (
                <FacultyProfiles
                    faculty={dept.faculty}
                    title="Faculty Profiles"
                    subtitle={dept.fullName}
                    variant="default"
                />
            ),
        },
        ...accordions.map(acc => ({
            title: acc.title,
            content: <ContentRenderer content={acc.content} />
        }))
    ];

    return <DepartmentAccordion title="FACULTY" items={defaultItems} defaultOpenIndex={0} />;
};

export default DepartmentFaculty;

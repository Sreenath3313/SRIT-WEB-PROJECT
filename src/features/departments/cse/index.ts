import { cseDepartment as cseData } from './data/department';
import CSEAbout from './components/CSEAbout';
import CSEOutcome from './components/CSEOutcome';
import CSEStudents from './components/CSEStudents';
import CSEFaculty from './components/CSEFaculty';
import CSEEContent from './components/CSEEContent';
import CSEStudentChapters from './components/CSEStudentChapters';
import type { DepartmentData } from '../shared/types';

export const cseDepartment: DepartmentData = {
    ...cseData,
    layout: 'sidebar',
    components: {
        About: CSEAbout,
        Outcome: CSEOutcome,
        Students: CSEStudents,
        Faculty: CSEFaculty,
        EContent: CSEEContent,
        StudentChapters: CSEStudentChapters,
    }
};

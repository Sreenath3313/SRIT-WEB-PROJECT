import { cadDepartment as cadData } from './data/department';
import type { DepartmentData } from '../shared/types';
import CSEAbout from '../cse/components/CSEAbout';
import CSEOutcome from '../cse/components/CSEOutcome';
import CSEStudents from '../cse/components/CSEStudents';

export const cadDepartment: DepartmentData = {
    ...cadData,
    layout: 'sidebar',
    components: {
        About: CSEAbout,
        Outcome: CSEOutcome,
        Students: CSEStudents,
    }
};

import type { DepartmentData } from './shared/types';
import { cseDepartment } from './cse/index';
import { csmDepartment } from './csm/data/department';
import { eceDepartment } from './ece/data/department';
import { eeeDepartment } from './eee/data/department';
import { mecDepartment } from './mec/data/department';
import { cadDepartment } from './cad/index';
import { civilDepartment } from './civil/data/department';

export const departments: DepartmentData[] = [
    cseDepartment,
    csmDepartment,
    eceDepartment,
    eeeDepartment,
    mecDepartment,
    cadDepartment,
    civilDepartment
];

export const getDepartmentBySlug = (slug: string): DepartmentData | undefined => {
    return departments.find((d) => d.slug === slug);
};

export type { DepartmentData, MissionItem, HodMessage, FacultyMember } from './shared/types';

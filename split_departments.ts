import fs from 'fs';
import path from 'path';
import { departments } from './src/data/departments';

const baseDir = path.join(process.cwd(), 'src', 'features', 'departments');

const interfaces = `
export interface MissionItem {
    id: string;
    text: string;
}

export interface HodMessage {
    name: string;
    designation: string;
    message: string;
    image: string;
}

export interface FacultyMember {
    name: string;
    designation: string;
    specialization?: string;
    qualification: string;
    joiningDate?: string;
    association?: string;
    image?: string;
    profileUrl?: string;
    email?: string;
}

export interface DepartmentData {
    slug: string;
    code: string;
    name: string;
    fullName: string;
    tagline: string;
    description: string[];
    highlights: string[];
    image: string;
    researchAreas: string[];
    stats: {
        faculty: string;
        labs: string;
        students: string;
        placement: string;
    };
    intake: number;
    accreditation: string;
    eligibility: string;
    vision: string;
    mission: MissionItem[];
    goals: string;
    hodMessage: HodMessage;
    faculty: FacultyMember[];
    overview?: Array<{
        title: string;
        content: string;
        isSpreadsheet?: boolean;
        sheetUrls?: Record<string, string>;
        editUrls?: Record<string, string>;
        availableYears?: string[];
    }>;
}
`;

// Save the types in shared
const typesPath = path.join(baseDir, 'shared', 'types.ts');
if (!fs.existsSync(path.dirname(typesPath))) fs.mkdirSync(path.dirname(typesPath), { recursive: true });
fs.writeFileSync(typesPath, interfaces);

// Save individual department data
for (const dept of departments) {
    const slug = dept.slug;
    const deptDir = path.join(baseDir, slug, 'data');
    if (!fs.existsSync(deptDir)) {
        fs.mkdirSync(deptDir, { recursive: true });
    }
    
    // We need to write out the TS object representation.
    // JSON.stringify will work for most things, but we want it to be TS.
    let deptStr = JSON.stringify(dept, null, 4);
    
    // Clean up stringified HTML in overview to be readable? It's fine for now.
    
    const tsCode = `import { DepartmentData } from '../../shared/types';\n\nexport const ${slug}Department: DepartmentData = ${deptStr};\n`;
    fs.writeFileSync(path.join(deptDir, 'department.ts'), tsCode);
}

// Create the main registry
const registryCode = `import { DepartmentData } from './shared/types';
${departments.map(d => `import { ${d.slug}Department } from './${d.slug}/data/department';`).join('\n')}

export const departments: DepartmentData[] = [
    ${departments.map(d => `${d.slug}Department`).join(',\n    ')}
];

export const getDepartmentBySlug = (slug: string): DepartmentData | undefined => {
    return departments.find((d) => d.slug === slug);
};

export type { DepartmentData, MissionItem, HodMessage, FacultyMember } from './shared/types';
`;

fs.writeFileSync(path.join(baseDir, 'index.ts'), registryCode);
console.log('Department data splitting complete.');

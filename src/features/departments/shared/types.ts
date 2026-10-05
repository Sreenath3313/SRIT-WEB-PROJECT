import React from 'react';

export interface CourseDocument {
    description: string;
    link: string;
}

export interface CourseSection {
    key: string;
    title: string;
    subtitle?: string;
    documents: CourseDocument[];
}

export interface GalleryImage {
    src: string;
    caption: string;
    category: string;
}

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
    courses?: CourseSection[];
    gallery?: GalleryImage[];
    studentChapters?: { title: string, content?: any }[];
    eContent?: { title: string, content?: any }[];
    facultyGroups?: { title: string, content?: any }[];
    overview?: Array<{
        title: string;
        content: string;
        isSpreadsheet?: boolean;
        sheetUrls?: Record<string, string>;
        editUrls?: Record<string, string>;
        availableYears?: string[];
    }>;
    layout?: 'sidebar' | 'full-width';
    components?: {
        About?: React.FC<{dept: DepartmentData}>;
        Faculty?: React.FC<{dept: DepartmentData}>;
        CourseStructure?: React.FC<{dept: DepartmentData}>;
        Gallery?: React.FC<{dept: DepartmentData}>;
        Projects?: React.FC<{dept: DepartmentData}>;
        Overview?: React.FC<{dept: DepartmentData}>;
        Outcome?: React.FC<{dept: DepartmentData}>;
        EContent?: React.FC<{dept: DepartmentData}>;
        StudentChapters?: React.FC<{dept: DepartmentData}>;
        Students?: React.FC<{dept: DepartmentData}>;
    };
}

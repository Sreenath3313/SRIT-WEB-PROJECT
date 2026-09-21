export interface SubItem { label: string; href: string }
export interface NavLink { label: string; href: string; hasDropdown: boolean; subItems?: SubItem[] }

const items = (base: string, labels: string[]): SubItem[] => labels.map((label) => ({
    label,
    href: `${base}/${label.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
}))

export const navLinks: NavLink[] = [
    { label: 'Home', href: '/', hasDropdown: false },
    { 
        label: 'About Us', 
        href: '/about/overview', 
        hasDropdown: true,
        subItems: [
            { label: 'Overview', href: '/about/overview' },
            { label: 'Vision & Mission', href: '/about/vision-mission' },
            { label: 'About Chairperson', href: '/about/chairperson' },
            { label: 'About Secretary', href: '/about/secretary' },
            { label: 'About Principal', href: '/about/principal' },
            { label: 'Governing Body', href: '/about/governing-body' },
            { label: 'SRIT Policies and Documents', href: '/about/policies-documents' },
            { label: 'Awards and Achievements', href: '/about/awards-achievements' },
            { label: 'Academic Council', href: '/about/academic-council' },
            { label: 'Finance Committee', href: '/about/finance-committee' },
            { label: 'Organization Chart', href: '/about/organization-chart' },
            { label: 'MOUs', href: '/about/mous' },
            { label: 'Affiliations & Accreditations', href: '/about/affiliations-accreditations' },
            { label: 'Milestones', href: '/about/milestones' },
            { label: 'SRIT Standard Operating Procedures', href: '/about/standard-operating-procedures' },
            { label: 'Institutional Strategic Plan', href: '/about/institutional-strategic-plan' },
        ]
    },
    { label: 'Admissions', href: '/admissions/courses-offered', hasDropdown: true, subItems: items('/admissions', ['Courses Offered', 'Admission Procedure', 'Fee Structure', 'Online Fee Payment', 'Scholarships', 'EAMCET Ranks', 'ECET Ranks', 'Admissions Committee', 'Academic Calendars', 'Academic Regulations']) },
    { 
        label: 'Academics', 
        href: '/departments', 
        hasDropdown: true,
        subItems: [
            { label: 'All Departments', href: '/departments' },
            { label: 'Computer Science (CSE)', href: '/department/cse' },
            { label: 'CSE — AI & ML (CSM)', href: '/department/csm' },
            { label: 'CSE — AI & DS (CAD)', href: '/department/cad' },
            { label: 'Electronics & Communication (ECE)', href: '/department/ece' },
            { label: 'Electrical & Electronics (EEE)', href: '/department/eee' },
            { label: 'Mechanical Engineering (MEC)', href: '/department/mec' },
            { label: 'Civil Engineering (CIVIL)', href: '/department/civil' },
            { label: 'H&S', href: '/academics/h-and-s' }
        ]
    },
    { label: 'Campus Life', href: '/campus-life/campus', hasDropdown: true, subItems: items('/campus-life', ['Campus', 'Library', 'Transport', 'Hostel', 'Internet', 'Cafeteria', 'Labs', 'Sustainable Campus', 'Sports', 'Computer Center', 'AARAMBH (Orientation Day)', 'SYMPHONY (Annual Day)', 'UDBHAVAAN (Graduation Day)', 'ABHIGYAAN (Achievers Day)', 'Mathematics Day', 'Prabhava (Freshers Day)']) },
    { label: 'Student Chapters', href: '/student-chapters/chairman-s-club', hasDropdown: true, subItems: items('/student-chapters', ["CHAIRMAN'S CLUB", 'IEI', 'INTERNET SOCIETY', 'IETE', 'ICI', 'ISTE', 'SAE', 'TOASTMASTERS INTERNATIONAL CLUB', 'ENGLISH LANGUAGE CLUB', 'NDLI CLUB', 'PROGRAMMERS CLUB', 'MCCARTHY CLUB']) },
    { label: 'Examination', href: '/examination/team-members', hasDropdown: true, subItems: items('/examination', ['Team Members', 'Academic Regulations', 'Academic Calendars', 'Notifications & Results', 'Evaluation Procedure', 'Recounting & Re-Evaluation Procedure', 'Malpractice Rules', 'e-Services', 'Exam Committee', 'Results Committee', 'Annual Examination Reports', 'Graduation Day Reports', 'DigiLocker-Marks Memos', 'Previous Question Papers', 'Downloads']) },
    { label: 'Placements', href: '/placements/about-t-and-p', hasDropdown: true, subItems: items('/placements', ['About T & P', 'Team Members', 'T & P Annual Calendar', 'Training Programs', 'Campus Drives', 'MOUs & Collaborations', 'Placement Statistics', 'e-Learning', 'Internships']) },
    { label: 'Committees', href: '/committees/iqac', hasDropdown: true, subItems: items('/committees', ['IQAC', 'Anti-Ragging Committee', 'Students Grievance Redressal Committee (SGRC)', 'NPTEL- Local Chapter', 'SC & ST Cell', 'College Academic Committee', 'Research & Consultancy Cell', 'Innovations & Entrepreneurship Development Cell', 'Industry Institute Interaction Cell', 'Women Empowerment Cell', 'E-Content Development Cell', 'Internal Complaint Committee', 'Library Committee', 'Student Welfare Committee', 'Extra Curricular Activities Cell', 'Career Guidance and Higher Education Cell', 'Games and Sports Cell']) },
    { label: 'Community Services', href: '/community-services/srit-social-responsibility', hasDropdown: true, subItems: items('/community-services', ['SRIT Social Responsibility', 'NCC', 'NSS', 'Rotaract Club', 'Indian Redcross Society', 'Unnath Bharth Abhiyan', 'Ek Bharat Shreshtha Bharat', 'Viksit Bharat @2047']) },
];

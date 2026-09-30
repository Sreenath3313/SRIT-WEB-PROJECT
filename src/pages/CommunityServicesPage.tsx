import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
    HeartHandshake,
    Shield,
    Users,
    Flag,
    Award,
    Globe,
    Building2,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    Phone,
    Mail,
    ExternalLink,
    FileText,
    Calendar,
    Target,
    Compass,
    Download,
    Eye,
    Landmark,
    X,
    ZoomIn
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';

// === TypeScript Interfaces ===
export interface KeyStat {
    value: string;
    label: string;
    desc: string;
}

export interface CommitteeMember {
    sno: string;
    name: string;
    designation: string;
    role: string;
    dept?: string;
}

export interface SpreadsheetEmbed {
    title: string;
    sheetUrl: string;
    description?: string;
    badge?: string;
}

export interface GalleryPhoto {
    url: string;
    caption?: string;
}

export interface ContactPerson {
    name: string;
    role: string;
    dept?: string;
    phone?: string;
    email?: string;
}

export interface CommunityServiceSection {
    id: string;
    title: string;
    shortTitle: string;
    subtitle: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    category: string;
    stats: KeyStat[];
    aim?: React.ReactNode;
    vision: React.ReactNode;
    mission: React.ReactNode;
    objectives?: string[];
    goals?: string[];
    motto?: string;
    pledge?: string;
    principles?: string[];
    advisoryCommittee?: CommitteeMember[];
    executiveTeam?: CommitteeMember[];
    volunteersInfo?: {
        title: string;
        description: string;
        stats?: string;
    };
    spreadsheets?: SpreadsheetEmbed[];
    activityList?: {
        title: string;
        year?: string;
        desc: string;
    }[];
    gallery?: GalleryPhoto[];
    careerBenefits?: string[];
    sopPoints?: string[];
    registrationInfo?: {
        title: string;
        linkText: string;
        linkUrl: string;
        description: string;
        image?: string;
    };
    downloads?: {
        title: string;
        url: string;
        type: string;
    }[];
    contacts: ContactPerson[];
}

// === Comprehensive Community Services Data Dump Extracted Directly from SRIT Main Website ===
export const communityServicesData: CommunityServiceSection[] = [
    {
        id: 'srit-social-responsibility',
        title: 'Social Responsibility Cell',
        shortTitle: 'SRIT Social Responsibility',
        subtitle: 'Empowering Communities, Fostering Human Values & Uplifting Rural Society',
        icon: HeartHandshake,
        category: 'Institutional Cell',
        stats: [
            { value: '25+', label: 'Village Outreach Camps', desc: 'Rural community development & awareness' },
            { value: '1500+', label: 'Beneficiary Families', desc: 'Socioeconomic and healthcare support' },
            { value: '100%', label: 'Student Engagement', desc: 'Institutional social responsibility projects' },
            { value: '6+', label: 'Departmental Wings', desc: 'Multi-disciplinary faculty & student taskforces' }
        ],
        aim: (
            <div className="space-y-3">
                <p>
                    The term <strong className="text-[#FF5422] font-bold">College Social Responsibility (CSR)</strong> at Srinivasa Ramanujan Institute of Technology represents the proactive capacity of our higher education institution to disseminate and implement core ethical principles, human values, and practical initiatives aimed at addressing real-world educational, economic, and social challenges.
                </p>
                <p>
                    SRIT instills in every budding engineer a profound sense of civic duty, environmental stewardship, and compassionate social empathy. Through localized community interventions around <span className="text-[#FF5422] font-semibold">Rotarypuram, B.K. Samudram Mandal, and Ananthapuramu district</span>, our students transform technical knowledge into compassionate action.
                </p>
            </div>
        ),
        vision: (
            <p>
                Our Vision is to provide transformative opportunities to youth — the makers of the future — to inculcate healthy habits, humanitarian empathy, and civic responsibility towards society, promoting sustainable national growth and social harmony.
            </p>
        ),
        mission: (
            <div className="space-y-2.5">
                <p>
                    To actively engage engineering students and faculty in meaningful community service that bridges the urban-rural divide.
                </p>
                <p>
                    To conduct continuous health, literacy, sanitation, clean energy, and digital awareness drives across underprivileged rural hamlets in Andhra Pradesh.
                </p>
            </div>
        ),
        objectives: [
            'Inculcate social awareness and humanitarian values among students to develop them into socially conscious engineers.',
            'Identify grassroot developmental challenges in adopted villages and formulate sustainable, low-cost engineering solutions.',
            'Promote environmental protection, water conservation, plastic-free living, and renewable energy adoption.',
            'Conduct regular free medical camps, blood donation drives, eye checkup clinics, and hygiene awareness workshops.',
            'Empower rural school students through digital literacy bootcamps, science exhibitions, and competitive exam guidance.',
            'Strengthen institutional partnerships with local government bodies, NGOs, and community leaders for sustained societal impact.'
        ],
        advisoryCommittee: [
            { sno: '1', name: 'Dr. G. Balakrishna', designation: 'Principal, SRIT', role: 'Chairman / Patron' },
            { sno: '2', name: 'All Heads of Departments', designation: 'Department Heads (CSE, ECE, EEE, ME, CE, H&S)', role: 'Advisory Members' },
            { sno: '3', name: 'Mr. G. Chinna Pullaiah', designation: 'Assistant Professor in CSE', role: 'Convener & Cell Coordinator' }
        ],
        executiveTeam: [
            { sno: '1', name: 'Mr. T. Aravind Babu', designation: 'Assistant Professor, Dept. of EEE', role: 'Department Coordinator', dept: 'EEE' },
            { sno: '2', name: 'Mrs. M. Soumya', designation: 'Assistant Professor, Dept. of CSE', role: 'Department Coordinator', dept: 'CSE' },
            { sno: '3', name: 'Mr. P. Venkata Suneel', designation: 'Assistant Professor, Dept. of CE', role: 'Department Coordinator', dept: 'Civil' },
            { sno: '4', name: 'Mr. B. Subba Reddy', designation: 'Assistant Professor, Dept. of ME', role: 'Department Coordinator', dept: 'Mechanical' },
            { sno: '5', name: 'Mr. Raj Kullay Reddy', designation: 'Assistant Professor, Dept. of ECE', role: 'Department Coordinator', dept: 'ECE' },
            { sno: '6', name: 'Mr. K. Manjunath', designation: 'Assistant Professor, Dept. of H&S', role: 'Department Coordinator', dept: 'H&S' }
        ],
        activityList: [
            { title: 'Annual Rural Health & Eye Screening Camp', year: '2024-25', desc: 'Comprehensive medical diagnoses, free medication distribution, and eye checkups in Rotarypuram & Alamuru.' },
            { title: 'Swachh Bharat & Village Sanitation Drive', year: '2023-24', desc: 'Plastic-free campaign, drainage clearance, and waste segregation awareness in rural schools.' },
            { title: 'Digital Literacy for Government Schools', year: '2022-23', desc: 'Hands-on computer training for 300+ students from rural upper primary schools.' },
            { title: 'Mega Tree Plantation & Green Belt Creation', year: '2021-22', desc: 'Planting 1,000+ saplings along highway avenues and rural school premises.' }
        ],
        contacts: [
            {
                name: 'Mr. G. Chinna Pullaiah',
                role: 'Convener, Community Service & Social Responsibility Cell',
                dept: 'Assistant Professor, Dept. of CSE, SRIT',
                phone: '+91-9494371424',
                email: 'chinnapullaiah.cse@srit.ac.in'
            }
        ]
    },
    {
        id: 'ncc',
        title: 'National Cadet Corps (NCC)',
        shortTitle: 'NCC (6(A) Girls BN NCC)',
        subtitle: 'Unity and Discipline — 6 Andhra Girls Battalion NCC, Ananthapuramu',
        icon: Shield,
        category: 'Armed Forces Wing',
        stats: [
            { value: '40/A1', label: 'Company Designation', desc: '6 Andhra Girls Battalion NCC' },
            { value: '100%', label: 'B & C Certificate Pass Rate', desc: 'Exemplary performance in grading exams' },
            { value: '6(A) BN', label: 'Affiliated Battalion', desc: 'NCC Group Headquarter, Kurnool' },
            { value: '15+', label: 'Annual Camps & Treks', desc: 'ATC, CATC, RDC, TSC, EBSB & Army Attachment' }
        ],
        aim: (
            <div className="space-y-3">
                <p>
                    The <strong className="text-[#FF5422] font-bold">‘Aims’ of the NCC</strong> laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio–economic scenario of the country.
                </p>
                <p>
                    The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose. Needless to say, the NCC also provides an environment conducive to motivating young Indians to join the armed forces.
                </p>
            </div>
        ),
        pledge: `We the cadets of the National Cadet Corps, do solemnly pledge that we shall always uphold the unity of India. We resolve to be disciplined and responsible citizens of our nation. We shall undertake positive community service in the spirit of selflessness and concern for our fellow beings.`,
        motto: 'Unity and Discipline (एकता और अनुशासन)',
        vision: (
            <p>
                To empower cadet youth with dynamic leadership capabilities, unshakeable national patriotism, physical resilience, and moral character to serve India with distinction.
            </p>
        ),
        mission: (
            <p>
                To provide comprehensive institutional drill, weapon training, adventure expeditions, and community service camps that mold responsible citizens and future defense officers.
            </p>
        ),
        objectives: [
            'To Create a Human Resource of Organized, Trained and Motivated Youth.',
            'To Provide Leadership in all Walks of life and be Always Available for the Service of the Nation.',
            'To Provide a Suitable Environment to Motivate the Youth to Take Up a Career in the Armed Forces.',
            'To Develop Character, Comradeship, Discipline, Leadership, Secular Outlook, Spirit of Adventure, and Ideals of Selfless Service amongst the Youth of the Country.'
        ],
        advisoryCommittee: [
            { sno: '1', name: 'Dr. G. BalaKrishna', designation: 'Principal, SRIT College, Ananthapuramu', role: 'Head of Institution' },
            { sno: '2', name: 'Lieut. Sumitha Hari Krishnan', designation: 'Associate NCC Officer (ANO)', role: 'Associate NCC Officer' },
            { sno: '3', name: 'All HOD’s of SRIT College', designation: 'SRIT College, Ananthapuramu', role: 'Advisory Members' }
        ],
        executiveTeam: [
            { sno: '1', name: 'Mr. P. Venkata Suneel', designation: 'Assistant Professor in CE', role: 'Department In-Charge', dept: 'Civil' },
            { sno: '2', name: 'Mr. T. Aravind Babu', designation: 'Assistant Professor in EEE', role: 'Department In-Charge', dept: 'EEE' },
            { sno: '3', name: 'Mrs. M. Soumya', designation: 'Assistant Professor in CSE', role: 'Department In-Charge', dept: 'CSE' },
            { sno: '4', name: 'Mr. B. Subba Reddy', designation: 'Assistant Professor in ME', role: 'Department In-Charge', dept: 'Mechanical' },
            { sno: '5', name: 'Mr. Raj Kullay Reddy', designation: 'Assistant Professor in ECE', role: 'Department In-Charge', dept: 'ECE' },
            { sno: '6', name: 'Mr. K. Satish Kumar', designation: 'Assistant Professor in H & S', role: 'Department In-Charge', dept: 'H & S' }
        ],
        spreadsheets: [
            {
                title: 'NCC Cadets Enrollment & Nominal Roll (Official 28(A) BN Sheet)',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQbUWtbzg_7ZYbbbmkoa97uw1PEvp0gDYW4iTH7fjatcvntWupQJjtWQfLP59moYA/pubhtml?widget=true&headers=false',
                description: 'Official consolidated register of Senior Division & Senior Wing enrolled cadets, rank appointments, and regiment numbers.',
                badge: 'Live Nominal Roll'
            },
            {
                title: 'NCC Cadet Appointments & Rank Structure',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBm6g7J-sxtNLVJHf4ge2dWIHy60jjF3PNh10ZndY8f-vZfSyVsVauOSE-WyZ2BHS5bRKC8zYjvtKQ/pubhtml?widget=true&headers=false',
                description: 'Senior Under Officer (SUO), Junior Under Officer (JUO), CSM, CQMS, and Sergeant appointments.',
                badge: 'Cadet Hierarchy'
            },
            {
                title: 'Institutional Training & Parade Attendance Records',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRDwHVP5zB-bRDAXxfJuwaCcOY7s3qP2B8pNIVzqSQW6Lz6PR9Twz8xlJHMnXwoUSWsDQVAzApaahHm/pubhtml?widget=true&chrome=false&headers=false',
                description: 'Drill schedules, weapon handling sessions, map reading hours, and obstacle course records.',
                badge: 'Training Log'
            },
            {
                title: 'Annual Training Camp (ATC) & National Camp Participations',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRcNiG3aolCdEpc3Uv9vd79Q-LZUT0SZ4mi-FSSR_2iusDpVe-D_8g7K5JiLdFql_dly3G6UJYVTRcG/pubhtml?widget=true&headers=false',
                description: 'Combined Annual Training Camps (CATC), Republic Day Camp (RDC), Thal Sainik Camp (TSC), and EBSB national camps.',
                badge: 'Camp Deployment'
            },
            {
                title: 'B & C Certificate Examination Results Sheet',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRW9sSKOl_oWBy_RHNXCzohZeexmO76x9LWPSwn9_Gng5dIUSeHRt519JRCfTfWvkUinmEkq4HZDtvs/pubhtml?widget=true&headers=false',
                description: 'Official Ministry of Defence NCC Directorate B and C Certificate results and grading allocations.',
                badge: 'Exam Results'
            },
            {
                title: 'NCC Social Service & Community Development (SSCD) Activities',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2bkbv0azViJlotJZ6btgNtwgcLESengLCHVbjAV8Xx6-VKB0qbQgNIUrw_AeZelbdViYV4_djerHO/pubhtml?widget=true&headers=false',
                description: 'Blood donation drives, Puneet Sagar Abhiyan water body cleanups, and national integration rallies.',
                badge: 'SSCD Activities'
            },
            {
                title: 'Cadet Achievements & Best Cadet Awards Register',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0K4wqJWrzxT3IdDQyjQJsON9mpHdYTH5nHeFUldii-_bWWqL0mhXD03KAI2_ChQ/pubhtml?widget=true&headers=false',
                description: 'Medals in rifle shooting, guard of honor, cross-country marathons, and battalion honors.',
                badge: 'Honors & Laurels'
            }
        ],
        gallery: [
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/ncc1.jpeg', caption: 'SRIT NCC Cadets Guard of Honor & Independence Day Ceremonial Parade' },
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/ncc2.jpeg', caption: 'Weapon Training & Marksmanship Practice under 28(A) BN Instructors' },
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/ncc3.jpeg', caption: 'Puneet Sagar Abhiyan & Water Body Cleanliness Awareness Campaign' },
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/ncc4.jpeg', caption: 'International Day of Yoga & Physical Conditioning Demonstration' },
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/ncc5.jpeg', caption: 'Combined Annual Training Camp (CATC) Field Craft & Obstacle Course' },
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/ncc6.jpeg', caption: 'National Integration Rally & Traffic Safety Awareness Drive' }
        ],
        careerBenefits: [
            'Direct SSB Interview Entry without CDSE for Indian Army NCC Special Entry Scheme (Men & Women).',
            'Bonus Marks & Reserved Quotas in CAPF (BSF, CISF, CRPF, ITBP, SSB) recruitment examinations (5% bonus for C Cert, 3% for B Cert).',
            'Bonus percentage marks in state police sub-inspector and constable recruitments across Andhra Pradesh.',
            'Direct employment preference in corporate security, aviation management, logistics, and multinational defense suppliers.'
        ],
        downloads: [
            { title: 'NCC Cadet Enrollment Form (Form I)', url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/NCC_Enrollment_Form.pdf', type: 'PDF' },
            { title: 'NCC B & C Certificate Syllabus & Handbook', url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/NCC_Syllabus.pdf', type: 'PDF' }
        ],
        contacts: [
            {
                name: 'Lieut. Sumitha Hari Krishnan',
                role: 'Associate NCC Officer (ANO)',
                dept: 'COY. NO: 40/A1, 6 ANDHRA GIRLS BATTALION NCC, SRIT',
                phone: '+91-8309628254',
                email: 'nccsd@srit.ac.in'
            }
        ]
    },
    {
        id: 'nss',
        title: 'National Service Scheme (NSS)',
        shortTitle: 'NSS (Unit Code: 90214603)',
        subtitle: 'Not Me, But You — Developing Student Personality through Selfless Community Service',
        icon: Users,
        category: 'National Youth Scheme',
        stats: [
            { value: '100+', label: 'Registered Volunteers', desc: 'Active student volunteer corps' },
            { value: '7-Day', label: 'Annual Special Camp', desc: 'Intensive residential rural immersion' },
            { value: '250+ Units', label: 'Annual Blood Donation', desc: 'Regular mega blood donation drives' },
            { value: 'JNTUA', label: 'University Affiliation', desc: 'NSS Cell JNTU Ananthapuramu' }
        ],
        motto: 'Not Me But You',
        aim: (
            <div className="space-y-3">
                <p>
                    The <strong className="text-[#FF5422] font-bold">National Service Scheme (NSS)</strong> at SRIT operates under the aegis of the <span className="text-[#FF5422] font-semibold">Ministry of Youth Affairs & Sports, Government of India</span>, and NSS Cell, JNTUA. The primary objective is personality development through community engagement.
                </p>
                <p>
                    NSS volunteers participate in year-round regular activities and a dedicated <strong className="text-[#FF5422] font-bold">7-day Special Rural Camping Program</strong> in adopted villages, addressing issues like rural health, hygiene, literacy, environmental conservation, and social welfare.
                </p>
            </div>
        ),
        vision: (
            <p>
                To build youth with high moral values, civic consciousness, and selfless dedication to national integration and community upliftment.
            </p>
        ),
        mission: (
            <p>
                To enable students to understand the community in which they work, understand themselves in relation to their community, identify the needs and problems of the community, and involve them in problem-solving processes.
            </p>
        ),
        objectives: [
            'Understand the community in which they work and identify its pressing challenges.',
            'Develop among themselves a sense of social and civic responsibility.',
            'Apply their technological and engineering knowledge in finding practical solutions to individual and community problems.',
            'Develop competence required for group-living and sharing of responsibilities.',
            'Gain leadership qualities, democratic attitudes, and disaster management skills.'
        ],
        advisoryCommittee: [
            { sno: '1', name: 'Dr. G. Balakrishna', designation: 'Principal, SRIT', role: 'Chairman' },
            { sno: '2', name: 'NSS Programme Coordinator, JNTUA', designation: 'JNTU Ananthapuramu', role: 'University Representative' },
            { sno: '3', name: 'Mr. T. Aravind Babu', designation: 'Assistant Professor, Dept. of EEE', role: 'NSS Programme Officer' },
            { sno: '4', name: 'Village Sarpanch / Secretary', designation: 'Adopted Village (Rotarypuram / Alamuru)', role: 'Community Representative' }
        ],
        spreadsheets: [
            {
                title: 'NSS Enrolled Volunteers Register (Official JNTUA Nominal Sheet)',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vREWsKRpcDvIOVTe_afyMyitprCQoemULazBhdWPrFETBuxcKHCCeFUT6G-vIqRfA/pubhtml?widget=true&headers=false',
                description: 'Official roster of male and female NSS volunteers registered under JNTUA NSS Cell.',
                badge: 'Volunteer Roster'
            },
            {
                title: 'NSS Annual Regular & Special Camp Activities Log',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTank5SpJkVjrsc63JcqLlgU6PNoLFbBiIF4_P2Pz0M13ERsn7coBqF1z51Nc1D-cvtFkxPIjR7lg9c/pubhtml?widget=true&chrome=false&headers=false',
                description: 'Event-wise documentation of blood donation, tree planting, voter awareness, and health camps.',
                badge: 'Activity Log'
            },
            {
                title: 'NSS Special Camping Program Reports (Adopted Village)',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwSx9hXGvxsT0Mo0oVuZCqvg616WS0AHOHlExjlGs8Q6XruodiaiEfFfoyuNgaTw/pubhtml?widget=true&headers=false',
                description: 'Comprehensive 7-day village immersion reports including socio-economic surveys and veterinary camps.',
                badge: 'Special Camp'
            },
            {
                title: 'NSS Audited Expenditure & Financial Records Sheet',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTbKhXYZ2v7aAKsVxArWp_dqa6RvZJprI-NN8pVPj6DC5LmYgbA-NeGS6CrjYemCRsyvG7jUMF6SiTP/pubhtml?widget=true&chrome=false&headers=false',
                description: 'Grant allocations, audited statements of expenditure, and utilization certificates.',
                badge: 'Audit Reports'
            }
        ],
        gallery: [
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/nss1.jpeg', caption: 'Mega Blood Donation Camp organized in association with Indian Red Cross Society' },
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/nss2.jpeg', caption: '7-Day Residential Special Camp in Rotarypuram Village — Socio-economic Survey' },
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/nss3.jpeg', caption: 'National Voter Day Awareness Rally and Electoral Registration Helpdesk' },
            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/nss4.jpeg', caption: 'Haritha Haram / Vana Mahotsavam Green Plantation across Campus & Village' }
        ],
        contacts: [
            {
                name: 'Mr. T. Aravind Babu',
                role: 'NSS Programme Officer',
                dept: 'Assistant Professor, Dept. of EEE, SRIT',
                phone: '+91-9989599581',
                email: 'nss@srit.ac.in'
            }
        ]
    },
    {
        id: 'rotaract-club',
        title: 'Rotaract Club of SRIT',
        shortTitle: 'Rotaract Club (RID 3160)',
        subtitle: 'Self Development — Fellowship Through Service & Global Community Leadership',
        icon: Award,
        category: 'Youth Leadership Club',
        stats: [
            { value: 'RID 3160', label: 'Rotary International District', desc: 'Zone 5, Anantapur Central' },
            { value: '120+', label: 'Active Rotaractors', desc: 'Student leaders & directors' },
            { value: '30+', label: 'Signature Community Projects', desc: 'Youth leadership, literacy & health' },
            { value: '100%', label: 'Youth Leadership Training', desc: 'RYLA & District Conferences' }
        ],
        aim: (
            <div className="space-y-3">
                <p>
                    The <strong className="text-[#FF5422] font-bold">Rotaract Club of SRIT</strong> (sponsored by Rotary Club of Anantapur Central, RID 3160) provides an international platform for university students to enhance knowledge and skills that assist them in personal development, address the physical and social needs of their communities, and promote better relations between all people worldwide through a framework of friendship and service.
                </p>
            </div>
        ),
        vision: (
            <p>
                To develop visionary young leaders who combine professional excellence with selfless community service to make an enduring global impact.
            </p>
        ),
        mission: (
            <p>
                To provide opportunities for young men and women to acquire leadership skills, build life-long networks of fellowship, and execute high-impact community and international service projects.
            </p>
        ),
        goals: [
            'To develop professional and leadership skills through hands-on event organization and team governance.',
            'To emphasize respect for the rights of others, based on recognition of the worth of each individual.',
            'To recognize the dignity and value of all useful occupations as opportunities to serve society.',
            'To recognize, practice, and promote ethical standards as leadership qualities and professional responsibilities.',
            'To develop knowledge and understanding of community needs, problems, and opportunities for service.'
        ],
        advisoryCommittee: [
            { sno: '1', name: 'Dr. G. Balakrishna', designation: 'Principal, SRIT', role: 'Chief Patron' },
            { sno: '2', name: 'President / Secretary, Rotary Club of Anantapur Central', designation: 'Sponsoring Rotary Club', role: 'Rotary Counselors' },
            { sno: '3', name: 'Mr. Raj Kullay Reddy', designation: 'Assistant Professor in ECE', role: 'Faculty Advisor, Rotaract Club' }
        ],
        executiveTeam: [
            { sno: '1', name: 'Student President', designation: 'Final Year B.Tech Student', role: 'Club President', dept: 'Rotaract SRIT' },
            { sno: '2', name: 'Student Secretary', designation: 'Third Year B.Tech Student', role: 'Club Secretary', dept: 'Rotaract SRIT' },
            { sno: '3', name: 'Student Treasurer', designation: 'Third Year B.Tech Student', role: 'Treasurer', dept: 'Rotaract SRIT' },
            { sno: '4', name: 'Community Service Director', designation: 'Student Representative', role: 'Director - Community Service', dept: 'Rotaract SRIT' },
            { sno: '5', name: 'Club Service Director', designation: 'Student Representative', role: 'Director - Club Service', dept: 'Rotaract SRIT' },
            { sno: '6', name: 'International Service Director', designation: 'Student Representative', role: 'Director - International Service', dept: 'Rotaract SRIT' },
            { sno: '7', name: 'Professional Development Director', designation: 'Student Representative', role: 'Director - Professional Development', dept: 'Rotaract SRIT' }
        ],
        spreadsheets: [
            {
                title: 'Rotaract Club Activity Log & Projects Register',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOD56Tpg9Tlk7XU_e-0F1CAvY6ohcktSoMTnTaOSHF-YVTwUP1BUxEjq7aRqFEAQ_4eXlYY7APsjVw/pubhtml?widget=true&headers=false',
                description: 'Comprehensive record of community projects, RYLA youth camps, blood drives, and orphanage visits.',
                badge: 'Projects Log'
            },
            {
                title: 'Rotaract Board of Directors & Members Nominal Roll',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRJruzfGdjBseLB9K7tbACYpy4na6yCSMjt_7wV780B1bS90ML0WfULJIa504FxtrrSNEd7QO9z-UW4/pubhtml?widget=true&headers=false',
                description: 'Official member roster, committee assignments, and district recognition records.',
                badge: 'Members Roll'
            }
        ],
        contacts: [
            {
                name: 'Mr. Raj Kullay Reddy',
                role: 'Faculty Advisor, Rotaract Club of SRIT',
                dept: 'Assistant Professor, Dept. of ECE, SRIT',
                phone: '+91-9441113264',
                email: 'rotaract@srit.ac.in'
            }
        ]
    },
    {
        id: 'indian-redcross-society',
        title: 'Youth Red Cross (YRC) & Indian Red Cross Society',
        shortTitle: 'Indian Red Cross Society',
        subtitle: 'Humanity, Impartiality, Neutrality & Voluntary Service — Protecting Health and Alleviating Suffering',
        icon: Flag,
        category: 'Humanitarian Body',
        stats: [
            { value: '350+ Units', label: 'Blood Units Donated / Yr', desc: 'To District Red Cross Blood Bank' },
            { value: '150+', label: 'Certified First Aiders', desc: 'Trained in disaster & medical response' },
            { value: '100%', label: 'Voluntary Humanitarian Work', desc: 'Disaster relief & health camps' },
            { value: 'District', label: 'Red Cross Chapter Partner', desc: 'Ananthapuramu District Branch' }
        ],
        aim: (
            <div className="space-y-3">
                <p>
                    The <strong className="text-[#FF5422] font-bold">Indian Red Cross Society</strong> aims to inspire, encourage and initiate at all times, all forms of humanitarian activities so that human suffering can be minimized, alleviated and even prevented, thus contribute to creating a more congenial climate for peace.
                </p>
                <p>
                    Youth Red Cross (YRC) at Srinivasa Ramanujan Institute of Technology provides structured training in <span className="text-[#FF5422] font-semibold">First Aid, Emergency Life Support, Disaster Relief Management</span>, and voluntary non-remunerated blood donation to serve the marginalized during medical emergencies.
                </p>
            </div>
        ),
        vision: (
            <p>
                Our Vision is to provide opportunities to the youth — the makers of the future, to include healthy living habits and to contribute their values to uplift our society.
            </p>
        ),
        mission: (
            <p>
                To inspire, encourage community service through training and education and initiate all forms of humanitarian activities at all times so that human sufferings can be minimized and even prevented and this contribute to create climate for peace.
            </p>
        ),
        principles: [
            'Humanity: The International Red Cross and Red Crescent Movement, born of a desire to bring assistance without discrimination to the wounded on the battlefield, endeavors, in its international and national capacity, to prevent and alleviate human suffering wherever it may be found. Its purpose is to protect life and health and to ensure respect for the human being. It promotes mutual understanding, friendship, cooperation and lasting peace amongst all peoples.',
            'Impartiality: It makes no discrimination as to nationally, race, religious beliefs, class or political opinions. It endeavors to relieve the suffering of individuals, being solely by their needs, and to give priority to the most urgent cases of distress.',
            'Neutrality: In orders to enjoy the confidence of all, the Movement may not take sides in hostilities or engage in controversies of a political, racial, religious or ideological nature.',
            'Independence: The Movement is independent. The National Societies, while auxiliaries in the humanitarian services of their governments and subject to the laws of their respective countries, must always maintain their autonomy so that they may be able at all times to act in accordance with the principles of the Movement.',
            'Voluntary Service: It is voluntary relief movement not prompted in any manner by desire for gain.',
            'Unity: There can be only one Red Cross Or Red Crescent in any one country. It must be open to all. It must carry on its humanitarian work throughout its territory.',
            'Universality: The International Red Cross and Red Crescent Movement, in which all societies have equal status and share equal responsibilities and duties in helping each other, is worldwide.'
        ],
        objectives: [
            'Promotion and protection of health and life',
            'Selfless services to the sick and suffering',
            'Promotion of national and international friendship',
            'Disaster relief to the victims',
            'Donate Blood & Save Life'
        ],
        spreadsheets: [
            {
                title: 'Youth Red Cross Committee & Team Members Sheet (Team.xlsx)',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_M97ail37t1n8_VpbsmI_6J87GlMxQkTdnDW6zBxdYtdJzADlvIwuklbLXw5AhA/pubhtml?widget=true&chrome=false&headers=false',
                description: 'Official roster of faculty coordinators and student executive members.',
                badge: 'Team Roll'
            },
            {
                title: 'Youth Red Cross Registered Student Volunteers (Volunteers.xlsx)',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRzL0s0CVER0OP8RI1QoipeyA2MUePCipWXPPze88jKAN-1FA8DfdRRyQk0_EBQbQ/pubhtml?widget=true&chrome=false&headers=false',
                description: 'Annual records of certified student volunteers and first aid response teams.',
                badge: 'Volunteers'
            },
            {
                title: 'IRCS Health, Blood Donation & Disaster Relief Activities (Events.xlsx)',
                sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRietrKW8242B4O_oCmgp44rYbr_Oq3aLFBRM3gAQdDkp5SjGDJZVeJV3Tb2nd_jg/pubhtml?widget=true&chrome=false&headers=false',
                description: 'Complete documentation of blood donation camps, CPR clinics, and humanitarian relief drives.',
                badge: 'Event Reports'
            }
        ],
        gallery: [
            { url: '/saro4.jpeg', caption: 'Voluntary Blood Donation Drive in Association with Indian Red Cross Society Blood Bank' },
            { url: '/saro1.jpeg', caption: 'First Aid, CPR & Emergency Response Demonstration for Volunteers' },
            { url: '/saro2.jpeg', caption: 'Humanitarian Awareness Assembly & Health Kit Distribution' },
            { url: '/saro3.jpeg', caption: 'District Red Cross Society Outreach & Youth Volunteering Campaign' }
        ],
        contacts: [
            {
                name: 'Mr. Aravind Babu',
                role: 'Coordinator, Indian Red Cross Society & Youth Red Cross Unit',
                dept: 'Assistant Professor, Department of EEE, SRIT',
                phone: '+91-7893333008',
                email: 'ircs.youth@srit.ac.in'
            }
        ]
    },
    {
        id: 'unnath-bharth-abhiyan',
        title: 'Unnat Bharat Abhiyan (UBA)',
        shortTitle: 'Unnat Bharat Abhiyan',
        subtitle: 'Connecting Higher Education with Rural India for Sustainable Village Transformation',
        icon: Building2,
        category: 'MoE Flagship Scheme',
        stats: [
            { value: '5', label: 'Adopted Rural Villages', desc: 'Rotarypuram, Alamuru, B.K. Samudram, etc.' },
            { value: '1200+', label: 'Household Baseline Surveys', desc: 'Digital socioeconomic mapping completed' },
            { value: 'IIT Delhi', label: 'National Coordinating Institute', desc: 'Ministry of Education flagship initiative' },
            { value: '10+', label: 'Rural Technology Projects', desc: 'Solar lighting, water recharging, bio-waste' }
        ],
        aim: (
            <div className="space-y-3">
                <p>
                    <strong className="text-[#FF5422] font-bold">Unnat Bharat Abhiyan (UBA)</strong> is a flagship national program of the <span className="text-[#FF5422] font-semibold">Ministry of Education (MoE), Government of India</span>, with Indian Institute of Technology (IIT) Delhi as the National Coordinating Institute.
                </p>
                <p>
                    The initiative conceptualizes higher educational institutions working directly with rural communities to identify local development challenges and evolve appropriate, eco-friendly technological solutions for accelerating sustainable socioeconomic growth.
                </p>
            </div>
        ),
        vision: (
            <p>
                To enable higher educational institutions to work with the people of rural India in identifying development challenges and evolving appropriate solutions for accelerating sustainable growth, creating a virtuous cycle between society and an inclusive academic system.
            </p>
        ),
        mission: (
            <p>
                To leverage the knowledge base and technical resources of SRIT engineering faculty and students to upgrade village infrastructure, drinking water availability, renewable energy usage, and livelihoods in adopted rural clusters.
            </p>
        ),
        goals: [
            'To build an understanding of the development agenda within institutes of higher education and build institutional capacity relevant to national needs, especially rural India.',
            'To re-emphasize the need for field work, stakeholder interactions, and design for societal objectives in engineering curricula.',
            'To provide rural India with access to professional resources from technical and scientific institutions.',
            'To improve the development outcomes of government welfare and infrastructure schemes in rural areas.'
        ],
        advisoryCommittee: [
            { sno: '1', name: 'Dr. G. Balakrishna', designation: 'Principal, SRIT', role: 'Chairman / Institutional Head' },
            { sno: '2', name: 'All Heads of Departments', designation: 'SRIT College, Ananthapuramu', role: 'Advisory Members' },
            { sno: '3', name: 'Mr. G. Chinna Pullaiah', designation: 'Assistant Professor in CSE', role: 'Convener for Community Service Cell' }
        ],
        executiveTeam: [
            { sno: '1', name: 'Mr. B. Subba Reddy', designation: 'Assistant Professor in ME', role: 'UBA Institutional Coordinator', dept: 'Mechanical' },
            { sno: '2', name: 'Mr. T. Aravind Babu', designation: 'Assistant Professor in EEE', role: 'UBA Department Co-Coordinator', dept: 'EEE' },
            { sno: '3', name: 'Mrs. M. Soumya', designation: 'Assistant Professor in CSE', role: 'UBA Department Co-Coordinator', dept: 'CSE' },
            { sno: '4', name: 'Mr. P. Venkata Suneel', designation: 'Assistant Professor in CE', role: 'UBA Department Co-Coordinator', dept: 'Civil' },
            { sno: '5', name: 'Mr. Raj Kullay Reddy', designation: 'Assistant Professor in ECE', role: 'UBA Department Co-Coordinator', dept: 'ECE' },
            { sno: '6', name: 'Mr. K. Manjunath', designation: 'Assistant Professor in H&S', role: 'UBA Department Co-Coordinator', dept: 'H&S' }
        ],
        activityList: [
            { title: 'Baseline Household & Village Survey (5 Adopted Villages)', year: '2023-24', desc: 'Complete demographic, water, electricity, sanitation, and livelihood survey uploaded to UBA national portal.' },
            { title: 'Solar Street Lighting & Energy Conservation Drive', year: '2022-23', desc: 'Technical guidance on solar micro-grids and energy-efficient LED installations in community centers.' },
            { title: 'Water Quality Testing & Rainwater Harvesting Workshop', year: '2021-22', desc: 'Testing fluoride and TDS levels in village borewells; designing groundwater recharge pits.' },
            { title: 'Organic Farming & Biomass Composting Awareness', year: '2020-21', desc: 'Educating farmers on agricultural waste recycling and reduction of synthetic chemical fertilizers.' }
        ],
        contacts: [
            {
                name: 'Mr. B. Subba Reddy',
                role: 'Institutional Coordinator, Unnat Bharat Abhiyan (UBA)',
                dept: 'Assistant Professor, Dept. of Mechanical Engineering, SRIT',
                phone: '+91-9989441990',
                email: 'uba@srit.ac.in'
            }
        ]
    },
    {
        id: 'ek-bharat-shreshtha-bharat',
        title: 'Ek Bharat Shreshtha Bharat (EBSB)',
        shortTitle: 'Ek Bharat Shreshtha Bharat',
        subtitle: 'Celebrating Unity in Diversity — Fostering National Integration & Cultural Cohesion',
        icon: Globe,
        category: 'National Integration',
        stats: [
            { value: '28 States', label: 'Cultural Immersion Scope', desc: 'Promoting national linguistic diversity' },
            { value: '20+', label: 'Cultural & Linguistic Events', desc: 'Webinars, folk arts & language learning' },
            { value: 'JNTUA', label: 'University Nodal Guidance', desc: 'Under Directorate of Academic & Planning' },
            { value: '100%', label: 'Active Student Participation', desc: 'Cross-state heritage celebration' }
        ],
        aim: (
            <div className="space-y-3">
                <p>
                    <strong className="text-[#FF5422] font-bold">Ek Bharat Shreshtha Bharat (EBSB)</strong> was announced by the Hon’ble Prime Minister on the occasion of the 140th birth anniversary of Sardar Vallabhbhai Patel. At SRIT, the EBSB Club organizes structured cultural and linguistic engagement between Andhra Pradesh and partner states across India.
                </p>
                <p>
                    The cell aims to enhance interaction and mutual understanding between people of diverse cultures, showcasing the rich heritage, languages, cuisine, handicrafts, and traditions of our country.
                </p>
            </div>
        ),
        vision: (
            <p>
                To celebrate the idea of India as a nation wherein different cultural units across varied geographies coalesce and interact with each other, manifesting glorious diversity in languages, cuisine, music, dance, theatre, films, handicrafts, and literature.
            </p>
        ),
        mission: (
            <p>
                To celebrate the Unity in Diversity of our nation, maintain and strengthen the fabric of traditionally existing emotional bonds, and promote the spirit of national integration through structured cross-state academic and cultural exchanges.
            </p>
        ),
        objectives: [
            'To CELEBRATE the Unity in Diversity of our Nation and strengthen the fabric of emotional bonds between citizens.',
            'To PROMOTE the spirit of national integration through structured engagements between states.',
            'To SHOWCASE the rich heritage and culture, customs, and traditions of either state for enabling people to understand and appreciate diversity.',
            'To CREATE an environment that promotes learning between states through sharing best practices and experiences.'
        ],
        advisoryCommittee: [
            { sno: '1', name: 'Prof. S. Vasundra', designation: 'DIRAP, JNTUA Ananthapuramu', role: 'University Mentor' },
            { sno: '2', name: 'Dr. G. Balakrishna', designation: 'Principal, SRIT', role: 'Institutional Head' },
            { sno: '3', name: 'All Heads of Departments', designation: 'SRIT College, Ananthapuramu', role: 'Advisory Members' },
            { sno: '4', name: 'Mr. G. Chinna Pullaiah', designation: 'Assistant Professor in CSE', role: 'Convener for Community Service Cell' }
        ],
        executiveTeam: [
            { sno: '1', name: 'Mrs. M. Soumya', designation: 'Assistant Professor in CSE', role: 'EBSB Nodal Officer / Coordinator', dept: 'CSE' },
            { sno: '2', name: 'Mr. T. Aravind Babu', designation: 'Assistant Professor in EEE', role: 'EBSB Department Co-Coordinator', dept: 'EEE' },
            { sno: '3', name: 'Mr. P. Venkata Suneel', designation: 'Assistant Professor in CE', role: 'EBSB Department Co-Coordinator', dept: 'Civil' },
            { sno: '4', name: 'Mr. B. Subba Reddy', designation: 'Assistant Professor in ME', role: 'EBSB Department Co-Coordinator', dept: 'Mechanical' },
            { sno: '5', name: 'Mr. Raj Kullay Reddy', designation: 'Assistant Professor in ECE', role: 'EBSB Department Co-Coordinator', dept: 'ECE' },
            { sno: '6', name: 'Mr. K. Manjunath', designation: 'Assistant Professor in H&S', role: 'EBSB Department Co-Coordinator', dept: 'H&S' }
        ],
        activityList: [
            { title: 'National Unity Day (Rashtriya Ekta Diwas)', year: '2023-24', desc: 'Unity pledge, marathon run, and national integration exhibition commemorating Sardar Patel.' },
            { title: 'Bhasha Sangam Linguistic Learning Workshop', year: '2022-23', desc: 'Teaching basic conversational sentences in paired state languages (Hindi, Punjabi, Bengali).' },
            { title: 'Traditional Cuisine & Folk Heritage Showcase', year: '2021-22', desc: 'Inter-state culinary exhibition and virtual cultural exchange sessions with partner institutes.' },
            { title: 'EBSB National Integration Online Quiz & Essay Competitions', year: '2020-21', desc: 'Competitive events celebrating India’s freedom movement and regional heritage.' }
        ],
        contacts: [
            {
                name: 'Mrs. M. Soumya',
                role: 'Nodal Officer & Coordinator, Ek Bharat Shreshtha Bharat (EBSB)',
                dept: 'Assistant Professor, Dept. of Computer Science & Engineering, SRIT',
                phone: '+91-8985086080',
                email: 'soumya.cse@srit.ac.in'
            }
        ]
    },
    {
        id: 'viksit-bharat-2047',
        title: 'Viksit Bharat @2047',
        shortTitle: 'Viksit Bharat @2047',
        subtitle: 'Voice of Youth — Empowering Young Minds to Architect a Fully Developed India by 2047',
        icon: Landmark,
        category: 'National Vision',
        stats: [
            { value: '2047', label: 'Target Centenary Year', desc: '100th year of Indian Independence' },
            { value: '1000+', label: 'Student Ideas Submitted', desc: 'Uploaded to MyGov official portal' },
            { value: '4 Key', label: 'Strategic Pillars', desc: 'Economy, Social, Environment & Governance' },
            { value: 'IIC & MoE', label: 'Institutional Body', desc: 'Institutional Innovation Council' }
        ],
        aim: (
            <div className="space-y-3">
                <p>
                    <strong className="text-[#FF5422] font-bold">Viksit Bharat @2047</strong> is the vision of the Government of India to transform the nation into a fully developed country by the year 2047, marking the centenary of its independence.
                </p>
                <p>
                    At SRIT, students and faculty actively engage in the <span className="text-[#FF5422] font-semibold">"Ideas for the Vision of Viksit Bharat @2047"</span> national consultation, contributing groundbreaking ideas in technological innovation, economic growth, social progress, and environmental sustainability.
                </p>
            </div>
        ),
        vision: (
            <p>
                The Government of India aspires to transform the nation into a developed entity by the year 2047, marking the commemoration of its 100th year of independence. This visionary goal encapsulates multifaceted dimensions of advancement, spanning economic prosperity, social development, environmental sustainability, good governance, and global leadership.
            </p>
        ),
        mission: (
            <p>
                To empower the youth of SRIT with innovative thinking, problem-solving skills, and a forward-looking mindset to generate actionable policy ideas and engineering innovations that directly drive India towards developed nation status.
            </p>
        ),
        goals: [
            'Economic Prosperity: Foster sustained and inclusive economic growth, ensuring job creation and entrepreneurship across high-tech domains.',
            'Social Progress: Promote equitable access to quality education, healthcare, gender equality, and social justice for all sections of society.',
            'Environmental Sustainability: Implement aggressive renewable energy transition, circular economy models, and climate change resilience.',
            'Good Governance: Enhance transparency, digital public infrastructure, rule of law, and citizen-centric administrative mechanisms.'
        ],
        sopPoints: [
            'Step 1: Visit the MyGov Portal (innovateindia.mygov.in/viksitbharat2047) and register using Student / Faculty credentials.',
            'Step 2: Choose your designated thematic area: (1) Empowered Indians, (2) Thriving and Sustainable Economy, (3) Innovation, Science & Tech, (4) Good Governance and Security, (5) India in the World.',
            'Step 3: Answer the two core questions: (a) How should a Viksit Bharat look like in 2047? (b) What do we need to do to reach this goal?',
            'Step 4: Submit your response, upload a selfie at the SRIT Viksit Bharat Selfie Booth, and share on social media with #Ideas4ViksitBharat.'
        ],
        registrationInfo: {
            title: 'Voice of Youth – Ideas for Viksit Bharat @2047 Registration',
            linkText: 'Submit Ideas on MyGov Official Portal',
            linkUrl: 'https://innovateindia.mygov.in/viksitbharat2047/',
            description: 'Participate in the nationwide ideation challenge initiated by the Prime Minister of India to architect the blueprint for a developed India.',
            image: 'https://www.srit.ac.in/wp-content/uploads/2023/12/Viksit-Bharat-2047-share-ideas-240x300.jpeg'
        },
        advisoryCommittee: [
            { sno: '1', name: 'Dr. U. Srinivas', designation: 'Vice Principal, SRIT', role: 'Institutional Coordinator' },
            { sno: '2', name: 'Dr. B. Anjaneyulu', designation: 'Convener, Institution Innovation Council (IIC)', role: 'Co-Coordinator' }
        ],
        contacts: [
            {
                name: 'Dr. U. Srinivas',
                role: 'Vice Principal & Coordinator, Viksit Bharat @2047',
                dept: 'Srinivasa Ramanujan Institute of Technology',
                phone: '+91-7780333537',
                email: 'viceprincipal@srit.ac.in'
            },
            {
                name: 'Dr. B. Anjaneyulu',
                role: 'Convener, IIC & Co-Coordinator',
                dept: 'Srinivasa Ramanujan Institute of Technology',
                phone: '+91-9441113264',
                email: 'iic@srit.ac.in'
            }
        ]
    }
];

export default function CommunityServicesPage({ defaultPage }: { defaultPage?: string }) {
    const { page } = useParams<{ page?: string }>();
    const navigate = useNavigate();

    // Determine active section from URL param or default
    const activeSectionId = page || defaultPage || 'srit-social-responsibility';
    const activeSection = communityServicesData.find(
        (s) => s.id === activeSectionId || s.id.replace(/-/g, '') === activeSectionId.replace(/-/g, '')
    ) || communityServicesData[0];

    // Active tab state for the exact main website tab view
    const [activeMainTab, setActiveMainTab] = useState<'vision' | 'mission' | 'objectives' | 'team' | 'activities' | 'contact'>('vision');

    // Accordion expansion states
    const [openSpreadsheets, setOpenSpreadsheets] = useState<Record<string, boolean>>({
        '0': true // Open first spreadsheet by default
    });

    const toggleSpreadsheet = (idx: number) => {
        setOpenSpreadsheets((prev) => ({
            ...prev,
            [idx]: !prev[idx]
        }));
    };

    // State for NCC Accordions matching official SRIT portal
    const [openNccAccordions, setOpenNccAccordions] = useState<Record<string, boolean>>({
        aim: true // First accordion open by default
    });

    const toggleNccAccordion = (id: string) => {
        setOpenNccAccordions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const [nccSliderIndex, setNccSliderIndex] = useState<number>(0);
    const [selectedNccImage, setSelectedNccImage] = useState<{ url: string; title: string } | null>(null);

    // State for NSS Accordions matching official SRIT portal
    const [openNssAccordions, setOpenNssAccordions] = useState<Record<string, boolean>>({
        vision: true // First accordion open by default
    });

    const toggleNssAccordion = (id: string) => {
        setOpenNssAccordions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const [nssSliderIndex, setNssSliderIndex] = useState<number>(0);
    const [selectedNssImage, setSelectedNssImage] = useState<{ url: string; title: string } | null>(null);

    // State for Rotaract Accordions matching official SRIT portal
    const [openRotaractAccordions, setOpenRotaractAccordions] = useState<Record<string, boolean>>({
        vision: true // First accordion open by default
    });

    const toggleRotaractAccordion = (id: string) => {
        setOpenRotaractAccordions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const [rotaractSliderIndex, setRotaractSliderIndex] = useState<number>(0);
    const [selectedRotaractImage, setSelectedRotaractImage] = useState<{ url: string; title: string } | null>(null);

    // State for Indian Red Cross Society Accordions matching official SRIT portal
    const [openIrcsAccordions, setOpenIrcsAccordions] = useState<Record<string, boolean>>({
        vision: true // First accordion open by default
    });

    const toggleIrcsAccordion = (id: string) => {
        setOpenIrcsAccordions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const [ircsSliderIndex, setIrcsSliderIndex] = useState<number>(0);
    const [selectedIrcsImage, setSelectedIrcsImage] = useState<{ url: string; title: string } | null>(null);

    // State for Unnat Bharat Abhiyan Accordions matching official SRIT portal
    const [openUbaAccordions, setOpenUbaAccordions] = useState<Record<string, boolean>>({
        vision: true // First accordion open by default
    });

    const toggleUbaAccordion = (id: string) => {
        setOpenUbaAccordions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const [ubaSliderIndex, setUbaSliderIndex] = useState<number>(0);
    const [selectedUbaImage, setSelectedUbaImage] = useState<{ url: string; title: string } | null>(null);

    // State for Ek Bharat Shreshtha Bharat Accordions matching official SRIT portal
    const [openEbsbAccordions, setOpenEbsbAccordions] = useState<Record<string, boolean>>({
        vision: true // First accordion open by default
    });

    const toggleEbsbAccordion = (id: string) => {
        setOpenEbsbAccordions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const [ebsbSliderIndex, setEbsbSliderIndex] = useState<number>(0);
    const [selectedEbsbImage, setSelectedEbsbImage] = useState<{ url: string; title: string } | null>(null);

    // State for Viksit Bharat @2047 Accordions matching official SRIT portal
    const [openViksitAccordions, setOpenViksitAccordions] = useState<Record<string, boolean>>({
        vision: true // First accordion open by default
    });

    const toggleViksitAccordion = (id: string) => {
        setOpenViksitAccordions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Update document title and meta description dynamically
    useEffect(() => {
        document.title = `${activeSection.title} | Community Services | SRIT`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', `Official SRIT Community Services - ${activeSection.title}. ${activeSection.subtitle}`);
        }
    }, [activeSection]);

    const IconComponent = activeSection.icon;

    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-[#FF5422] selection:text-white">
            <Navbar />

            <PageHeader title={activeSection.title} categoryTitle="Community Services" />

            {/* === Main Content Area with Left Sidebar === */}
            <main className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1">
                <div className="flex justify-center w-full max-w-[1200px] mx-auto items-start">
                    {/* === Main Content Area === */}
                    <div className="space-y-6 sm:space-y-8 w-full min-w-0 max-w-full">
                        {/* === EXACT MAIN WEBSITE VIEW FOR SOCIAL RESPONSIBILITY CELL === */}
                        {activeSection.id === 'srit-social-responsibility' ? (
                            <div className="space-y-6 w-full">
                                {/* Centered Official SRIT Autonomous Logo */}
                                <div className="flex flex-col items-center justify-center pt-2 pb-1 sm:pb-3">
                                    <img
                                        src="/srit_logo_autonomous.jpeg"
                                        alt="Srinivasa Ramanujan Institute of Technology (AUTONOMOUS)"
                                        className="max-w-[240px] sm:max-w-[280px] w-full h-auto object-contain rounded-lg drop-shadow-xs"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://www.srit.ac.in/wp-content/uploads/2021/08/srit-logo.jpeg';
                                        }}
                                    />
                                </div>

                                {/* Exact 6 Tab Buttons from Main Website */}
                                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4.5 pt-2">
                                    {/* 1. Our Vision */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveMainTab('vision')}
                                        className={`group relative flex flex-col items-center justify-center px-5 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm min-w-[110px] sm:min-w-[130px] transition-all duration-200 cursor-pointer shadow-xs ${
                                            activeMainTab === 'vision'
                                                ? 'bg-[#1e293b] text-white shadow-md'
                                                : 'bg-white text-[#f67437] border-2 border-[#f67437] hover:bg-orange-50/60'
                                        }`}
                                    >
                                        <div className={`mb-1.5 transition-transform group-hover:scale-110 ${activeMainTab === 'vision' ? 'text-white' : 'text-[#f67437]'}`}>
                                            <Eye size={22} className="stroke-[2.5]" />
                                        </div>
                                        <span className="tracking-wide">Our Vision</span>
                                        {activeMainTab === 'vision' && (
                                            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#1e293b]" />
                                        )}
                                    </button>

                                    {/* 2. Our Mission */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveMainTab('mission')}
                                        className={`group relative flex flex-col items-center justify-center px-5 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm min-w-[110px] sm:min-w-[130px] transition-all duration-200 cursor-pointer shadow-xs ${
                                            activeMainTab === 'mission'
                                                ? 'bg-[#1e293b] text-white shadow-md'
                                                : 'bg-white text-[#f67437] border-2 border-[#f67437] hover:bg-orange-50/60'
                                        }`}
                                    >
                                        <div className={`mb-1.5 transition-transform group-hover:scale-110 ${activeMainTab === 'mission' ? 'text-white' : 'text-[#f67437]'}`}>
                                            <Target size={22} className="stroke-[2.5]" />
                                        </div>
                                        <span className="tracking-wide">Our Mission</span>
                                        {activeMainTab === 'mission' && (
                                            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#1e293b]" />
                                        )}
                                    </button>

                                    {/* 3. Objectives */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveMainTab('objectives')}
                                        className={`group relative flex flex-col items-center justify-center px-5 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm min-w-[110px] sm:min-w-[130px] transition-all duration-200 cursor-pointer shadow-xs ${
                                            activeMainTab === 'objectives'
                                                ? 'bg-[#1e293b] text-white shadow-md'
                                                : 'bg-white text-[#f67437] border-2 border-[#f67437] hover:bg-orange-50/60'
                                        }`}
                                    >
                                        <div className={`mb-1.5 transition-transform group-hover:scale-110 ${activeMainTab === 'objectives' ? 'text-white' : 'text-[#f67437]'}`}>
                                            <Flag size={22} className="stroke-[2.5]" />
                                        </div>
                                        <span className="tracking-wide">Objectives</span>
                                        {activeMainTab === 'objectives' && (
                                            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#1e293b]" />
                                        )}
                                    </button>

                                    {/* 4. Team */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveMainTab('team')}
                                        className={`group relative flex flex-col items-center justify-center px-5 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm min-w-[110px] sm:min-w-[130px] transition-all duration-200 cursor-pointer shadow-xs ${
                                            activeMainTab === 'team'
                                                ? 'bg-[#1e293b] text-white shadow-md'
                                                : 'bg-white text-[#f67437] border-2 border-[#f67437] hover:bg-orange-50/60'
                                        }`}
                                    >
                                        <div className={`mb-1.5 transition-transform group-hover:scale-110 ${activeMainTab === 'team' ? 'text-white' : 'text-[#f67437]'}`}>
                                            <Users size={22} className="stroke-[2.5]" />
                                        </div>
                                        <span className="tracking-wide">Team</span>
                                        {activeMainTab === 'team' && (
                                            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#1e293b]" />
                                        )}
                                    </button>

                                    {/* 5. Activities */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveMainTab('activities')}
                                        className={`group relative flex flex-col items-center justify-center px-5 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm min-w-[110px] sm:min-w-[130px] transition-all duration-200 cursor-pointer shadow-xs ${
                                            activeMainTab === 'activities'
                                                ? 'bg-[#1e293b] text-white shadow-md'
                                                : 'bg-white text-[#f67437] border-2 border-[#f67437] hover:bg-orange-50/60'
                                        }`}
                                    >
                                        <div className={`mb-1.5 transition-transform group-hover:scale-110 ${activeMainTab === 'activities' ? 'text-white' : 'text-[#f67437]'}`}>
                                            <Calendar size={22} className="stroke-[2.5]" />
                                        </div>
                                        <span className="tracking-wide">Activities</span>
                                        {activeMainTab === 'activities' && (
                                            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#1e293b]" />
                                        )}
                                    </button>

                                    {/* 6. Contact Us */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveMainTab('contact')}
                                        className={`group relative flex flex-col items-center justify-center px-5 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm min-w-[110px] sm:min-w-[130px] transition-all duration-200 cursor-pointer shadow-xs ${
                                            activeMainTab === 'contact'
                                                ? 'bg-[#1e293b] text-white shadow-md'
                                                : 'bg-[#1e293b] text-[#f67437] hover:text-white hover:bg-slate-900'
                                        }`}
                                    >
                                        <div className="mb-1.5 transition-transform group-hover:scale-110 text-[#f67437]">
                                            <Phone size={22} className="stroke-[2.5]" />
                                        </div>
                                        <span className="tracking-wide text-white">Contact Us</span>
                                        {activeMainTab === 'contact' && (
                                            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#1e293b]" />
                                        )}
                                    </button>
                                </div>

                                {/* Active Tab Content Box - Matching Live Website */}
                                <div className="rounded-xl border border-neutral-200/90 bg-white p-6 sm:p-9 shadow-sm">
                                    {/* --- 1. Our Vision Tab --- */}
                                    {activeMainTab === 'vision' && (
                                        <div className="space-y-6 text-neutral-700 leading-relaxed animate-fadeIn">
                                            <div>
                                                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f67437] mb-2 tracking-wide">
                                                    AIM:
                                                </h3>
                                                <p className="text-[15px] sm:text-base leading-relaxed text-neutral-800">
                                                    The term College Social Responsibility, is explained as the capacity of higher Education Institution to disseminate and implement a set of Principles, general &amp; specific values aimed at enhancing the education and social challenges of the society.
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f67437] mb-2 tracking-wide">
                                                    Vision:
                                                </h3>
                                                <p className="text-[15px] sm:text-base leading-relaxed text-neutral-800">
                                                    The Vision is to build the youth with the mind and Spirit to serve the Society &amp; work for the Social Uplift of the down-trodden masses of our Nation as a movement.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* --- 2. Our Mission Tab --- */}
                                    {activeMainTab === 'mission' && (
                                        <div className="space-y-4 text-neutral-700 leading-relaxed animate-fadeIn">
                                            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f67437] mb-2 tracking-wide uppercase">
                                                OUR MISSION:
                                            </h3>
                                            <p className="text-[15px] sm:text-base leading-relaxed text-neutral-800">
                                                The Program aims to instilling the idea of social welfare in students &amp; to provide service to society without bias. NSS volunteers work to ensure that everyone who is needy gets help to enhance their standard living &amp; lead life of dignity.
                                            </p>
                                        </div>
                                    )}

                                    {/* --- 3. Objectives Tab --- */}
                                    {activeMainTab === 'objectives' && (
                                        <div className="space-y-4 text-neutral-700 leading-relaxed animate-fadeIn">
                                            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f67437] mb-3 tracking-wide uppercase">
                                                Objectives:
                                            </h3>
                                            <ol className="list-decimal pl-6 space-y-3 text-[14.5px] sm:text-[15px] text-neutral-800 leading-relaxed font-normal">
                                                <li>To inculcate social awareness, values, &amp; Environmentally responsible behavior amongst the students.</li>
                                                <li>To Nurture students as Socially, responsible Citizens by inculcating Moral&amp; Ethical Values.</li>
                                                <li>To motivate students towards Community service &amp; make them, to discharge their duties towards the society.</li>
                                                <li>To develop among themselves a sense of Social Responsibility towards Society.</li>
                                                <li>To develop and initiate collaborations with Stakeholders for strategic inventions in the community in the area of Health, Education, Community development and Environment.</li>
                                                <li>To encourage Philanthropy, amongst the student’s body including volunteering, students-led-charity fundraisers &amp; Community projects.</li>
                                                <li>To conceptualize policies &amp; initiatives, in order to commit Social Responsibility Values.</li>
                                                <li>To motivate students to work in teams and take the responsibilities, to develop personally and professionally, in their carriers.</li>
                                            </ol>
                                        </div>
                                    )}

                                    {/* --- 4. Team Tab --- */}
                                    {activeMainTab === 'team' && (
                                        <div className="space-y-8 animate-fadeIn">
                                            <div>
                                                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f67437] mb-3 tracking-wide uppercase">
                                                    Team:
                                                </h3>
                                                <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs">
                                                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                        <tbody className="divide-y divide-neutral-200">
                                                            <tr className="hover:bg-orange-50/30 transition-colors">
                                                                <td className="w-14 px-4 py-3.5 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">1</td>
                                                                <td className="px-5 py-3.5 text-neutral-800">
                                                                    <strong className="text-[#f67437] font-bold">Dr. G. BalaKrishna</strong>, Principal, SRIT College, Ananthapuramu.
                                                                </td>
                                                            </tr>
                                                            <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                <td className="w-14 px-4 py-3.5 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">2</td>
                                                                <td className="px-5 py-3.5 text-neutral-800">
                                                                    <strong className="text-[#f67437] font-bold">All HOD’s of SRIT College</strong>, Ananthapuramu.
                                                                </td>
                                                            </tr>
                                                            <tr className="hover:bg-orange-50/30 transition-colors">
                                                                <td className="w-14 px-4 py-3.5 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">3</td>
                                                                <td className="px-5 py-3.5 text-neutral-800">
                                                                    <strong className="text-[#f67437] font-bold">Mr. G.Chinna Pullaiah</strong>, <strong>Assistant Professor in CSE &amp; Convener for Community Service Cell, SRIT College, Ananthapuramu.</strong>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f67437] mb-3 tracking-wide">
                                                    Department In-Charges:
                                                </h3>
                                                <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs">
                                                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                        <tbody className="divide-y divide-neutral-200">
                                                            <tr className="hover:bg-orange-50/30 transition-colors">
                                                                <td className="w-14 px-4 py-3.5 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">1</td>
                                                                <td className="px-5 py-3.5 text-neutral-800">
                                                                    <span className="text-[#f67437] font-bold">Mr. Raj Kullay Reddy</span>, <strong>Coordinator, Social Responsibility Cell, SRIT, Anantapuramu.</strong>
                                                                </td>
                                                            </tr>
                                                            <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                <td className="w-14 px-4 py-3.5 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">2</td>
                                                                <td className="px-5 py-3.5 text-neutral-800">
                                                                    <span className="text-[#f67437] font-bold">Mr. K. Satish Kumar</span>, <strong>Co- coordinator, Social Responsibility Cell, SRIT, Anantapuramu.</strong>
                                                                </td>
                                                            </tr>
                                                            <tr className="hover:bg-orange-50/30 transition-colors">
                                                                <td className="w-14 px-4 py-3.5 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">3</td>
                                                                <td className="px-5 py-3.5 text-neutral-800">
                                                                    <strong className="text-[#f67437]">Mr. B.Subba Reddy</strong>, Assistant Professor in MEC, SRIT College, Ananthapuramu.
                                                                </td>
                                                            </tr>
                                                            <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                <td className="w-14 px-4 py-3.5 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">4</td>
                                                                <td className="px-5 py-3.5 text-neutral-800">
                                                                    <strong className="text-[#f67437]">Mr. T.Aravind Babu</strong>, Assistant Professor in EEE, SRIT College, Ananthapuramu.
                                                                </td>
                                                            </tr>
                                                            <tr className="hover:bg-orange-50/30 transition-colors">
                                                                <td className="w-14 px-4 py-3.5 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">5</td>
                                                                <td className="px-5 py-3.5 text-neutral-800">
                                                                    <strong className="text-[#f67437]">Mrs. M. Soumya</strong>, Assistant Professor in CSE, SRIT College, Ananthapuramu.
                                                                </td>
                                                            </tr>
                                                            <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                <td className="w-14 px-4 py-3.5 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">6</td>
                                                                <td className="px-5 py-3.5 text-neutral-800">
                                                                    <strong className="text-[#f67437]">Mr. P.Venkata Suneel</strong>, Assistant Professor in CE, SRIT College, Ananthapuramu.
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* --- 5. Activities Tab --- */}
                                    {activeMainTab === 'activities' && (
                                        <div className="space-y-5 animate-fadeIn">
                                            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f67437] mb-2 tracking-wide uppercase">
                                                Activities:
                                            </h3>
                                            <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="space-y-1">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-[#f67437]">
                                                        Official Cell Records
                                                    </span>
                                                    <h4 className="text-base font-bold text-neutral-900">
                                                        Social Responsibility Cell Activities (2021 – 2022)
                                                    </h4>
                                                </div>
                                                <a
                                                    href="https://docs.google.com/document/d/1cAatLeUmtuJxlDXpGb877SA9132UR6uj/edit?usp=sharing&ouid=117112998805419292302&rtpof=true&sd=true"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f67437] hover:bg-[#e04515] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors shrink-0"
                                                >
                                                    <FileText size={16} />
                                                    <span>Open 2021 – 2022 Report</span>
                                                    <ExternalLink size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {/* --- 6. Contact Us Tab --- */}
                                    {activeMainTab === 'contact' && (
                                        <div className="space-y-6 animate-fadeIn text-neutral-800">
                                            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f67437] mb-3 tracking-wide uppercase">
                                                CONTACT US:
                                            </h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/60 space-y-2 hover:border-[#f67437]/50 transition-colors">
                                                    <h4 className="font-bold text-base text-neutral-900">
                                                        Mr. Raj KullayReddy
                                                    </h4>
                                                    <p className="text-xs font-semibold text-neutral-600">
                                                        Coordinator, Social Responsibility Cell
                                                    </p>
                                                    <div className="pt-2">
                                                        <a
                                                            href="tel:9182877497"
                                                            className="inline-flex items-center gap-2 text-sm font-bold text-[#f67437] hover:underline"
                                                        >
                                                            <Phone size={14} />
                                                            <span>9182877497</span>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/60 space-y-2 hover:border-[#f67437]/50 transition-colors">
                                                    <h4 className="font-bold text-base text-neutral-900">
                                                        Mr. K. Satish Kumar
                                                    </h4>
                                                    <p className="text-xs font-semibold text-neutral-600">
                                                        Coordinator, Social Responsibility Cell
                                                    </p>
                                                    <div className="pt-2">
                                                        <a
                                                            href="tel:9908658920"
                                                            className="inline-flex items-center gap-2 text-sm font-bold text-[#f67437] hover:underline"
                                                        >
                                                            <Phone size={14} />
                                                            <span>9908658920</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : activeSection.id === 'ncc' ? (
                            <div className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full overflow-hidden">
                                {/* === Centered Official Header with Small Crest === */}
                                <div className="w-full bg-white border border-neutral-200/90 rounded-xl overflow-hidden shadow-2xs">
                                    <div className="w-full bg-[#f05a22] text-white py-2 px-4 text-center font-bold text-sm sm:text-base font-serif tracking-wide">
                                        National Cadet Corps
                                    </div>
                                    <div className="flex flex-col items-center justify-center py-2 px-4 bg-white">
                                        <img
                                            src="/ncc_logo.png"
                                            alt="National Cadet Corps (NCC)"
                                            className="h-8 sm:h-9 w-auto max-w-[34px] sm:max-w-[38px] object-contain drop-shadow-2xs transition-transform hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://www.srit.ac.in/wp-content/uploads/2021/10/ncc-logo-768x725.png';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* === 15 Dark Collapsible Accordions (Matching Official Website Layout) === */}
                                <div className="w-full max-w-full rounded-xl sm:rounded-xl border border-[#1e2c3f] bg-[#121c2d] overflow-hidden shadow-xs divide-y divide-[#1e2c3f]">
                                    {[
                                        { id: 'aim', label: 'Aim of NCC' },
                                        { id: 'pledge', label: 'Pledge' },
                                        { id: 'objectives', label: 'Objectives' },
                                        { id: 'team', label: 'Team' },
                                        { id: 'cadets', label: 'Cadets' },
                                        { id: 'appointments', label: 'Cadets Appointments' },
                                        { id: 'institutional', label: 'Institutional Training' },
                                        { id: 'camp', label: 'Camp Training' },
                                        { id: 'exam', label: 'B & C Examination' },
                                        { id: 'activities', label: 'Activities' },
                                        { id: 'gallery', label: 'Gallery' },
                                        { id: 'achievements', label: 'Achievements' },
                                        { id: 'career', label: 'Career Opportunities' },
                                        { id: 'downloads', label: 'Downloads' },
                                        { id: 'contact', label: 'Contact' },
                                    ].map((item) => {
                                        const isOpen = !!openNccAccordions[item.id];
                                        return (
                                            <div key={item.id} className="w-full max-w-full">
                                                {/* Accordion Row Header */}
                                                <button
                                                    type="button"
                                                    onClick={() => toggleNccAccordion(item.id)}
                                                    className="w-full bg-[#121c2d] hover:bg-[#18253a] text-[#f05a22] hover:text-[#ff7a45] px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm md:text-base font-bold transition-colors cursor-pointer select-none text-left tracking-wide"
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-[#f05a22] transition-transform duration-200 shrink-0 ${
                                                            isOpen ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>

                                                {/* Accordion Content Body */}
                                                {isOpen && (
                                                    <div className="p-3 sm:p-5 md:p-6 bg-white text-neutral-800 animate-fadeIn border-t border-neutral-200 w-full max-w-full overflow-hidden">
                                                        {/* 1. Aim of NCC */}
                                                        {item.id === 'aim' && (
                                                            <div className="space-y-4">
                                                                <div className="text-neutral-700 text-xs sm:text-sm leading-relaxed space-y-3 text-justify">
                                                                    <p>
                                                                        The <strong className="text-[#FF5422] font-bold">‘Aims’ of the NCC</strong> laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio–economic scenario of the country.
                                                                    </p>
                                                                    <p>
                                                                        The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose. Needless to say, the NCC also provides an environment conducive to motivating young Indians to join the armed forces.
                                                                    </p>
                                                                </div>
                                                                <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 text-[#ea580c] font-bold text-xs sm:text-sm flex items-center gap-2">
                                                                    
                                                                    <span>Motto: Unity and Discipline (एकता और अनुशासन)</span>
                                                                </div>
                                                                <div className="pt-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 mb-3">
                                                                        4 Cardinal Principles of NCC Discipline:
                                                                    </h4>
                                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                                                        {[
                                                                            { rule: '1. Obey with a Smile', desc: 'Respect authority and duty with cheerfulness.' },
                                                                            { rule: '2. Be Punctual', desc: 'Time management is the cornerstone of discipline.' },
                                                                            { rule: '3. Work Hard & Without Fuss', desc: 'Devote yourself to duty without complaint.' },
                                                                            { rule: '4. Make No Excuses & Tell No Lies', desc: 'Uphold complete integrity and honesty.' }
                                                                        ].map((cp, idx) => (
                                                                            <div key={idx} className="p-3.5 rounded-xl bg-orange-50/40 border border-orange-200/60 flex flex-col justify-between">
                                                                                <span className="text-xs font-bold text-[#ea580c]">{cp.rule}</span>
                                                                                <span className="text-[11px] text-neutral-600 mt-1">{cp.desc}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 2. Pledge */}
                                                        {item.id === 'pledge' && (
                                                            <div className="border-l-4 border-[#FF5422] bg-orange-50/50 p-4 sm:p-5 rounded-r-2xl italic text-neutral-800 font-serif text-sm sm:text-base leading-relaxed">
                                                                “We the cadets of the National Cadet Corps, do solemnly pledge that we shall always uphold the unity of India. We resolve to be disciplined and responsible citizens of our nation. We shall undertake positive community service in the spirit of selflessness and concern for our fellow beings.”
                                                            </div>
                                                        )}

                                                        {/* 3. Objectives */}
                                                        {item.id === 'objectives' && (
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                {[
                                                                    { num: '01', title: 'Character & Comradeship', desc: 'To create a human resource of organized, trained and motivated youth.' },
                                                                    { num: '02', title: 'Leadership Qualities', desc: 'To provide leadership in all walks of life and always be available for the service of the nation.' },
                                                                    { num: '03', title: 'Armed Forces Motivation', desc: 'To provide a suitable environment to motivate the youth to take up a career in the Armed Forces.' },
                                                                    { num: '04', title: 'Selfless National Service', desc: 'To develop character, discipline, secular outlook, and spirit of adventure.' }
                                                                ].map((obj, i) => (
                                                                    <div key={i} className="p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/80 flex items-start gap-3 hover:border-orange-200 transition-colors">
                                                                        <span className="text-sm font-black text-[#FF5422] bg-orange-100 px-2 py-1 rounded-md shrink-0">{obj.num}</span>
                                                                        <div className="space-y-0.5">
                                                                            <h4 className="text-xs sm:text-sm font-bold text-neutral-900">{obj.title}</h4>
                                                                            <p className="text-xs text-neutral-600 leading-relaxed">{obj.desc}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {/* 4. Team */}
                                                        {item.id === 'team' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NCC Team Members & Faculty In-Charges (NCC-Team Members.xlsx)
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQbUWtbzg_7ZYbbbmkoa97uw1PEvp0gDYW4iTH7fjatcvntWupQJjtWQfLP59moYA/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NCC-Team Members"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQbUWtbzg_7ZYbbbmkoa97uw1PEvp0gDYW4iTH7fjatcvntWupQJjtWQfLP59moYA/pubhtml?widget=true&headers=false"
                                                                        className="w-full min-w-full h-[450px] sm:h-[520px] lg:h-[600px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 5. Cadets */}
                                                        {item.id === 'cadets' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NCC Cadets Enrolment & Master Strength
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBm6g7J-sxtNLVJHf4ge2dWIHy60jjF3PNh10ZndY8f-vZfSyVsVauOSE-WyZ2BHS5bRKC8zYjvtKQ/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NCC Cadets List"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBm6g7J-sxtNLVJHf4ge2dWIHy60jjF3PNh10ZndY8f-vZfSyVsVauOSE-WyZ2BHS5bRKC8zYjvtKQ/pubhtml?widget=true&headers=false"
                                                                        className="w-full min-w-full h-[650px] sm:h-[720px] lg:h-[780px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 6. Cadets Appointments */}
                                                        {item.id === 'appointments' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NCC Cadet Appointments & Rank Holders
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRDwHVP5zB-bRDAXxfJuwaCcOY7s3qP2B8pNIVzqSQW6Lz6PR9Twz8xlJHMnXwoUSWsDQVAzApaahHm/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NCC Appointments"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRDwHVP5zB-bRDAXxfJuwaCcOY7s3qP2B8pNIVzqSQW6Lz6PR9Twz8xlJHMnXwoUSWsDQVAzApaahHm/pubhtml?widget=true&chrome=false&headers=false"
                                                                        className="w-full min-w-full h-[650px] sm:h-[720px] lg:h-[780px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 7. Institutional Training */}
                                                        {item.id === 'institutional' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        Institutional Training Modules & Drill Routine
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcNiG3aolCdEpc3Uv9vd79Q-LZUT0SZ4mi-FSSR_2iusDpVe-D_8g7K5JiLdFql_dly3G6UJYVTRcG/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="Institutional Training Spreadsheet"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcNiG3aolCdEpc3Uv9vd79Q-LZUT0SZ4mi-FSSR_2iusDpVe-D_8g7K5JiLdFql_dly3G6UJYVTRcG/pubhtml?widget=true&headers=false"
                                                                        className="w-full min-w-full h-[650px] sm:h-[720px] lg:h-[780px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 8. Camp Training */}
                                                        {item.id === 'camp' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        Annual Training Camps (ATC) & Combined Annual Training (CATC)
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRW9sSKOl_oWBy_RHNXCzohZeexmO76x9LWPSwn9_Gng5dIUSeHRt519JRCfTfWvkUinmEkq4HZDtvs/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="Camp Training Spreadsheet"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRW9sSKOl_oWBy_RHNXCzohZeexmO76x9LWPSwn9_Gng5dIUSeHRt519JRCfTfWvkUinmEkq4HZDtvs/pubhtml?widget=true&headers=false"
                                                                        className="w-full min-w-full h-[650px] sm:h-[720px] lg:h-[780px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 9. B & C Examination */}
                                                        {item.id === 'exam' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NCC ‘B’ & ‘C’ Certificate Examinations & Grading
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2bkbv0azViJlotJZ6btgNtwgcLESengLCHVbjAV8Xx6-VKB0qbQgNIUrw_AeZelbdViYV4_djerHO/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NCC Examination Spreadsheet"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2bkbv0azViJlotJZ6btgNtwgcLESengLCHVbjAV8Xx6-VKB0qbQgNIUrw_AeZelbdViYV4_djerHO/pubhtml?widget=true&headers=false"
                                                                        className="w-full min-w-full h-[650px] sm:h-[720px] lg:h-[780px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 10. Activities */}
                                                        {item.id === 'activities' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        Community Drives, Rallies & Cleanliness Campaigns
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0K4wqJWrzxT3IdDQyjQJsON9mpHdYTH5nHeFUldii-_bWWqL0mhXD03KAI2_ChQ/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NCC Activities Spreadsheet"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0K4wqJWrzxT3IdDQyjQJsON9mpHdYTH5nHeFUldii-_bWWqL0mhXD03KAI2_ChQ/pubhtml?widget=true&headers=false"
                                                                        className="w-full min-w-full h-[650px] sm:h-[720px] lg:h-[780px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 11. Gallery */}
                                                        {item.id === 'gallery' && (
                                                            <div className="space-y-4 w-full">
                                                                <div className="flex items-center justify-between">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NCC Field Action & Event Gallery
                                                                    </h4>
                                                                    <span className="text-xs font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                                                                        10 Photographs
                                                                    </span>
                                                                </div>
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 w-full">
                                                                    {[
                                                                        { url: '/ncc/ncc_img_1.jpg', title: 'NCC Plantation Drive' },
                                                                        { url: '/ncc/ncc_img_2.jpg', title: 'Cadet Guard of Honour' },
                                                                        { url: '/ncc/ncc_img_3.jpg', title: 'Ceremonial March Past' },
                                                                        { url: '/ncc/ncc_img_4.jpg', title: 'International Yoga Day' },
                                                                        { url: '/ncc/ncc_img_5.jpg', title: 'Annual Training Camp (ATC)' },
                                                                        { url: '/ncc/ncc_img_6.jpg', title: 'Cadet Tree Planting Activity' },
                                                                        { url: '/ncc/ncc_img_7.jpg', title: 'Swachh Bharat Cleanliness Drive' },
                                                                        { url: '/ncc/ncc_img_8.jpg', title: 'Weapon Training & Drill' },
                                                                        { url: '/ncc/ncc_img_9.webp', title: 'Cadet Trophies & Felicitations' },
                                                                        { url: '/ncc/ncc_img_10.jpeg', title: 'Ceremonial Flag March' },
                                                                    ].map((gPhoto, idx) => (
                                                                        <div
                                                                            key={idx}
                                                                            onClick={() => setSelectedNccImage(gPhoto)}
                                                                            className="group rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-xs hover:shadow-lg hover:border-[#FF5422]/60 transition-all duration-300 flex flex-col cursor-pointer w-full"
                                                                        >
                                                                            <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-neutral-100">
                                                                                <img
                                                                                    src={gPhoto.url}
                                                                                    alt={gPhoto.title}
                                                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                                                    loading="lazy"
                                                                                />
                                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                                                                                    <span className="text-xs font-bold text-white flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                                                                                        <ZoomIn size={13} className="text-orange-400" /> Enlarge Photo
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="p-3 bg-white border-t border-neutral-100 text-xs sm:text-sm font-bold text-neutral-800 text-center truncate">
                                                                                {gPhoto.title}
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 12. Achievements */}
                                                        {item.id === 'achievements' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        Merit Awards, Guard of Honour & Competition Victories
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSjigY1-FnB4-DBWhnRsz2ghqeAU9Et5Jstyce14IPWwG0QMIVnKcvWMyS7o3qK2pNTiSHdqNKkmSHy/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="Achievements Spreadsheet"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSjigY1-FnB4-DBWhnRsz2ghqeAU9Et5Jstyce14IPWwG0QMIVnKcvWMyS7o3qK2pNTiSHdqNKkmSHy/pubhtml?widget=true&chrome=false&headers=false"
                                                                        className="w-full min-w-full h-[650px] sm:h-[720px] lg:h-[780px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 13. Career Opportunities */}
                                                        {item.id === 'career' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        Defence Forces, CAPF & PSU Recruitment Perks for NCC ‘C’ Holders
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR-m8nb8kTGVA183fOVVVOwAiPVV0Jh6A5y7L1TN1-DHTSVMkuTVXmNsgvHAmrJWbGfit-a_duiLqvA/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="Career Opportunities Spreadsheet"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR-m8nb8kTGVA183fOVVVOwAiPVV0Jh6A5y7L1TN1-DHTSVMkuTVXmNsgvHAmrJWbGfit-a_duiLqvA/pubhtml?widget=true&chrome=false&headers=false"
                                                                        className="w-full min-w-full h-[650px] sm:h-[720px] lg:h-[780px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 14. Downloads */}
                                                        {item.id === 'downloads' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NCC Enrolment Forms, Handbook & Circular Downloads
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQmEnVT7o8H-M9VKNL170uSGjZ0TundirbS9Mu8NSeDYI_Mk88oqPeZHkyUnVAsrdAIKMjOCp4RDMzh/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NCC Downloads Sheet"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQmEnVT7o8H-M9VKNL170uSGjZ0TundirbS9Mu8NSeDYI_Mk88oqPeZHkyUnVAsrdAIKMjOCp4RDMzh/pubhtml?widget=true&chrome=false&headers=false"
                                                                        className="w-full min-w-full h-[650px] sm:h-[720px] lg:h-[780px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 15. Contact */}
                                                        {item.id === 'contact' && (
                                                            <div className="p-4 sm:p-5 rounded-xl sm:rounded-xl border border-neutral-200 bg-neutral-50/70 w-full space-y-3">
                                                                <div>
                                                                    <h4 className="font-bold text-base text-[#ea580c]">
                                                                        Lieut. Sumitha Hari Krishnan
                                                                    </h4>
                                                                    <p className="text-xs font-semibold text-neutral-600">
                                                                        Associate NCC Officer (ANO)
                                                                    </p>
                                                                </div>
                                                                <div className="text-xs sm:text-sm text-neutral-700 space-y-1">
                                                                    <p><strong>COY. NO:</strong> 40/A1</p>
                                                                    <p><strong>6 ANDHRA GIRLS BATTALION NCC</strong></p>
                                                                    <p>Srinivasa Ramanujan Institute of Technology,</p>
                                                                    <p>Rotarypuram, Anantapuramu-515701.</p>
                                                                </div>
                                                                <div className="pt-3 border-t border-neutral-200 flex flex-wrap gap-4 text-xs sm:text-sm">
                                                                    <a
                                                                        href="mailto:nccsd@srit.ac.in"
                                                                        className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#ea580c] transition-colors font-medium"
                                                                    >
                                                                        <Mail size={14} className="text-[#ea580c]" />
                                                                        <span>nccsd@srit.ac.in</span>
                                                                    </a>
                                                                    <a
                                                                        href="tel:918309628254"
                                                                        className="inline-flex items-center gap-1.5 text-[#ea580c] font-bold hover:underline"
                                                                    >
                                                                        <Phone size={14} />
                                                                        <span>+91-8309628254</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* === Bottom NCC Visual Carousel Slider (3 Wide Cards on Desktop, Fully Contained) === */}
                                <div className="pt-4 pb-2 space-y-3 w-full max-w-full overflow-hidden">
                                    {(() => {
                                        const galleryList = [
                                            { url: '/ncc/ncc_img_1.jpg', title: 'NCC Plantation Drive' },
                                            { url: '/ncc/ncc_img_2.jpg', title: 'Cadet Guard of Honour' },
                                            { url: '/ncc/ncc_img_3.jpg', title: 'Ceremonial March Past' },
                                            { url: '/ncc/ncc_img_4.jpg', title: 'International Yoga Day' },
                                            { url: '/ncc/ncc_img_5.jpg', title: 'Annual Training Camp (ATC)' },
                                            { url: '/ncc/ncc_img_6.jpg', title: 'Cadet Tree Planting Activity' },
                                            { url: '/ncc/ncc_img_7.jpg', title: 'Swachh Bharat Cleanliness Drive' },
                                            { url: '/ncc/ncc_img_8.jpg', title: 'Weapon Training & Drill' },
                                            { url: '/ncc/ncc_img_9.webp', title: 'Cadet Trophies & Felicitations' },
                                            { url: '/ncc/ncc_img_10.jpeg', title: 'Ceremonial Flag March' },
                                        ];

                                        const maxVisible = 3;
                                        const totalSlides = galleryList.length - maxVisible + 1;

                                        return (
                                            <div className="space-y-3 w-full max-w-full overflow-hidden">
                                                <div className="flex items-center justify-between px-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="h-4 w-1.5 rounded-full bg-[#FF5422]" />
                                                        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-black text-neutral-900">
                                                            NCC Visual Gallery & Field Highlights
                                                        </h3>
                                                    </div>
                                                    <span className="text-xs font-bold text-[#FF5422] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                                                        {galleryList.length} Photographs
                                                    </span>
                                                </div>

                                                {/* Contained Slider Viewport with Internal Controls */}
                                                <div className="relative overflow-hidden rounded-xl sm:rounded-xl border border-neutral-200 bg-white p-2.5 sm:p-4 shadow-xs w-full">
                                                    <div
                                                        className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out w-full"
                                                        style={{
                                                            transform: `translateX(-${nccSliderIndex * (100 / maxVisible)}%)`
                                                        }}
                                                    >
                                                        {galleryList.map((item, gIdx) => (
                                                            <div
                                                                key={gIdx}
                                                                onClick={() => setSelectedNccImage(item)}
                                                                className="shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-xs hover:shadow-md hover:border-[#FF5422]/60 transition-all duration-300 group/img flex flex-col cursor-pointer"
                                                            >
                                                                <div className="relative h-52 sm:h-56 md:h-60 w-full overflow-hidden bg-neutral-100">
                                                                    <img
                                                                        src={item.url}
                                                                        alt={item.title}
                                                                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out brightness-100 contrast-105"
                                                                        loading="lazy"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-3">
                                                                        <span className="text-xs font-bold text-white flex items-center gap-1.5 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                                                                            <ZoomIn size={13} className="text-orange-400" /> Enlarge
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="p-3 bg-white border-t border-neutral-100 text-xs sm:text-sm font-bold text-neutral-800 text-center truncate">
                                                                    {item.title}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Internal Previous Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setNccSliderIndex((prev) => Math.max(0, prev - 1))}
                                                        disabled={nccSliderIndex === 0}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Previous Slide"
                                                    >
                                                        <ChevronLeft size={18} />
                                                    </button>

                                                    {/* Internal Next Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setNccSliderIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
                                                        disabled={nccSliderIndex >= totalSlides - 1}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Next Slide"
                                                    >
                                                        <ChevronRight size={18} />
                                                    </button>
                                                </div>

                                                {/* Pagination Dots */}
                                                <div className="flex items-center justify-center gap-1.5 pt-1">
                                                    {Array.from({ length: totalSlides }).map((_, dotIdx) => (
                                                        <button
                                                            key={dotIdx}
                                                            type="button"
                                                            onClick={() => setNccSliderIndex(dotIdx)}
                                                            className={`h-2 rounded-full transition-all cursor-pointer ${
                                                                nccSliderIndex === dotIdx
                                                                    ? 'w-6 bg-[#FF5422]'
                                                                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                                                            }`}
                                                            aria-label={`Go to slide ${dotIdx + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Full Image High-Res Lightbox Modal */}
                                {selectedNccImage && (
                                    <div
                                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
                                        onClick={() => setSelectedNccImage(null)}
                                    >
                                        <div
                                            className="relative w-full w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 border-b border-neutral-800">
                                                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                                                    {selectedNccImage.title}
                                                </h4>
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedNccImage(null)}
                                                    className="w-8 h-8 grid place-items-center rounded-lg bg-white/10 hover:bg-[#FF5422] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                                                    aria-label="Close Preview"
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                            <div className="relative w-full max-h-[75vh] flex items-center justify-center p-2 bg-black/60 overflow-hidden">
                                                <img
                                                    src={selectedNccImage.url}
                                                    alt={selectedNccImage.title}
                                                    className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-lg shadow-lg"
                                                loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : activeSection.id === 'nss' ? (
                            <div className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full overflow-hidden">
                                {/* === Centered Official Header with Small NSS Crest === */}
                                <div className="w-full bg-white border border-neutral-200/90 rounded-xl overflow-hidden shadow-2xs">
                                    <div className="w-full bg-[#f05a22] text-white py-2 px-4 text-center font-bold text-sm sm:text-base font-serif tracking-wide">
                                        National Service Scheme
                                    </div>
                                    <div className="flex flex-col items-center justify-center py-2 px-4 bg-white">
                                        <img
                                            src="/nss_logo.jpg"
                                            alt="National Service Scheme (NSS)"
                                            className="h-9 sm:h-10 w-auto max-w-[40px] sm:max-w-[46px] object-contain drop-shadow-2xs transition-transform hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://www.srit.ac.in/wp-content/uploads/2021/08/NSS-img-300x300.jpg';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* === 8 Dark Collapsible Accordions (Matching Official Website Layout) === */}
                                <div className="w-full max-w-full rounded-xl sm:rounded-xl border border-[#1e2c3f] bg-[#121c2d] overflow-hidden shadow-xs divide-y divide-[#1e2c3f]">
                                    {[
                                        { id: 'vision', label: 'Our Vision' },
                                        { id: 'mission', label: 'Our Mission' },
                                        { id: 'objectives', label: 'Objectives' },
                                        { id: 'team', label: 'Team' },
                                        { id: 'volunteers', label: 'NSS Volunteers' },
                                        { id: 'activities', label: 'Activities' },
                                        { id: 'expenditure', label: 'NSS Expenditure Reports' },
                                        { id: 'contact', label: 'Contact Us' },
                                    ].map((item) => {
                                        const isOpen = !!openNssAccordions[item.id];
                                        return (
                                            <div key={item.id} className="w-full max-w-full">
                                                {/* Accordion Row Header */}
                                                <button
                                                    type="button"
                                                    onClick={() => toggleNssAccordion(item.id)}
                                                    className="w-full bg-[#121c2d] hover:bg-[#18253a] text-[#f05a22] hover:text-[#ff7a45] px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm md:text-base font-bold transition-colors cursor-pointer select-none text-left tracking-wide"
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-[#f05a22] transition-transform duration-200 shrink-0 ${
                                                            isOpen ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>

                                                {/* Accordion Content Body */}
                                                {isOpen && (
                                                    <div className="p-3 sm:p-5 md:p-6 bg-white text-neutral-800 animate-fadeIn border-t border-neutral-200 w-full max-w-full overflow-hidden">
                                                        {/* 1. Our Vision */}
                                                        {item.id === 'vision' && (
                                                            <div className="space-y-4">
                                                                <div>
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-1">
                                                                        AIM:
                                                                    </h4>
                                                                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed text-justify">
                                                                        NSS is part of our academic, social and personal life as it is the third dimension of education, it allows the students to actively contribute their services for the cause of community and the nation, thus helping them develop their personally. Service and attain the traits of a leader of the nation. As such it is the right platform, where the student – youth of the nation may get to involve with real-life social activities, and there by become responsible citizen of India.
                                                                    </p>
                                                                </div>
                                                                <div className="pt-2 border-t border-neutral-100">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-1">
                                                                        VISION:
                                                                    </h4>
                                                                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed text-justify">
                                                                        The vision is to build the youth with the mind and spirit to serve the society and work for the social uplift of the down-trodden masses of our nation as a movement.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 2. Our Mission */}
                                                        {item.id === 'mission' && (
                                                            <div className="space-y-3">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    MISSION:
                                                                </h4>
                                                                <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 text-neutral-800 text-xs sm:text-sm leading-relaxed">
                                                                    The National Service Scheme has been functioning with the motto <strong className="text-[#f05a22] font-bold">“NOT ME BUT YOU”</strong> in view of making the youth inspired in service of the people and hence NSS Aims Education through Community Service and Community Service through Education.
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 3. Objectives */}
                                                        {item.id === 'objectives' && (
                                                            <div className="space-y-4">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    OBJECTIVES:
                                                                </h4>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                                                    {[
                                                                        'Understand the community in which they work',
                                                                        'Understand themselves in relation to their community',
                                                                        'Identify the needs and problems of the community and involve them in problem solving process',
                                                                        'Develop among themselves a sense of social and civic responsibility',
                                                                        'Utilize their knowledge in finding practical solution to individual and community problems',
                                                                        'Develop competence required for group living and sharing of responsibilities',
                                                                        'Gain skills in mobilizing community participation',
                                                                        'Acquire leadership qualities and democratic attitude',
                                                                        'Develop capacity to meet emergencies and natural disasters',
                                                                        'Practice national integration and social harmony'
                                                                    ].map((obj, i) => (
                                                                        <div key={i} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 flex items-start gap-2.5 hover:border-orange-200 transition-colors">
                                                                            <span className="text-xs font-bold text-[#FF5422] bg-orange-100 px-2 py-0.5 rounded shrink-0">
                                                                                {(i + 1).toString().padStart(2, '0')}
                                                                            </span>
                                                                            <p className="text-xs text-neutral-700 leading-relaxed font-medium">{obj}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-center">
                                                                    <span className="text-xs font-bold text-neutral-600 uppercase tracking-wider block mb-0.5">Motto of NSS :</span>
                                                                    <span className="text-sm sm:text-base font-black text-[#f05a22] tracking-wide">
                                                                        “NOT ME BUT YOU”
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 4. Team */}
                                                        {item.id === 'team' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NSS Team Members & Faculty In-Charges (Team.xlsx)
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vREWsKRpcDvIOVTe_afyMyitprCQoemULazBhdWPrFETBuxcKHCCeFUT6G-vIqRfA/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NSS-Team Members"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vREWsKRpcDvIOVTe_afyMyitprCQoemULazBhdWPrFETBuxcKHCCeFUT6G-vIqRfA/pubhtml?widget=true&headers=false"
                                                                        className="w-full min-w-full h-[450px] sm:h-[520px] lg:h-[600px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 5. NSS Volunteers */}
                                                        {item.id === 'volunteers' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NSS Enrolled Volunteers Register (Volunteers.xlsx)
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTank5SpJkVjrsc63JcqLlgU6PNoLFbBiIF4_P2Pz0M13ERsn7coBqF1z51Nc1D-cvtFkxPIjR7lg9c/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NSS Volunteers"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTank5SpJkVjrsc63JcqLlgU6PNoLFbBiIF4_P2Pz0M13ERsn7coBqF1z51Nc1D-cvtFkxPIjR7lg9c/pubhtml?widget=true&chrome=false&headers=false"
                                                                        className="w-full min-w-full h-[500px] sm:h-[600px] lg:h-[700px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 6. Activities */}
                                                        {item.id === 'activities' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NSS Regular & Special Camp Activities (Activities.xlsx)
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQwSx9hXGvxsT0Mo0oVuZCqvg616WS0AHOHlExjlGs8Q6XruodiaiEfFfoyuNgaTw/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NSS Activities"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQwSx9hXGvxsT0Mo0oVuZCqvg616WS0AHOHlExjlGs8Q6XruodiaiEfFfoyuNgaTw/pubhtml?widget=true&headers=false"
                                                                        className="w-full min-w-full h-[450px] sm:h-[520px] lg:h-[600px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 7. NSS Expenditure Reports */}
                                                        {item.id === 'expenditure' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        NSS Expenditure & Financial Audit Reports (Expenditure.xlsx)
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTbKhXYZ2v7aAKsVxArWp_dqa6RvZJprI-NN8pVPj6DC5LmYgbA-NeGS6CrjYemCRsyvG7jUMF6SiTP/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="NSS Expenditure Reports"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTbKhXYZ2v7aAKsVxArWp_dqa6RvZJprI-NN8pVPj6DC5LmYgbA-NeGS6CrjYemCRsyvG7jUMF6SiTP/pubhtml?widget=true&chrome=false&headers=false"
                                                                        className="w-full min-w-full h-[500px] sm:h-[600px] lg:h-[700px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 8. Contact Us */}
                                                        {item.id === 'contact' && (
                                                            <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 w-full space-y-3">
                                                                <div>
                                                                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ea580c] font-bold text-[11px] uppercase mb-1">
                                                                        NSS Programme Officer
                                                                    </div>
                                                                    <h4 className="font-bold text-base sm:text-lg text-neutral-900">
                                                                        Mr. G. Chinna Pullaiah, <span className="text-xs sm:text-sm font-normal text-neutral-600">M.Tech, (PhD)</span>
                                                                    </h4>
                                                                    <p className="text-xs font-semibold text-[#f05a22]">
                                                                        President Awardee • Assistant Professor in CSE
                                                                    </p>
                                                                </div>
                                                                <div className="text-xs sm:text-sm text-neutral-700 space-y-1">
                                                                    <p>Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                                                                </div>
                                                                <div className="pt-3 border-t border-neutral-200 flex flex-wrap gap-4 text-xs sm:text-sm">
                                                                    <a
                                                                        href="mailto:nsspo@srit.ac.in"
                                                                        className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#ea580c] transition-colors font-medium"
                                                                    >
                                                                        <Mail size={14} className="text-[#ea580c]" />
                                                                        <span>nsspo@srit.ac.in</span>
                                                                    </a>
                                                                    <a
                                                                        href="tel:919505004112"
                                                                        className="inline-flex items-center gap-1.5 text-[#ea580c] font-bold hover:underline"
                                                                    >
                                                                        <Phone size={14} />
                                                                        <span>+91-9505004112</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* === Bottom NSS Visual Carousel Slider === */}
                                <div className="pt-4 pb-2 space-y-3 w-full max-w-full overflow-hidden">
                                    {(() => {
                                        const nssGalleryList = [
                                            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/nss1.jpeg', title: 'Mega Blood Donation Camp organized with Indian Red Cross Society' },
                                            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/nss2.jpeg', title: '7-Day Residential Special Camp in Rotarypuram Village — Socio-Economic Survey' },
                                            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/nss3.jpeg', title: 'National Voter Day Awareness Rally and Electoral Registration Helpdesk' },
                                            { url: 'https://www.srit.ac.in/wp-content/uploads/2021/08/nss4.jpeg', title: 'Haritha Haram / Vana Mahotsavam Green Plantation across Campus & Village' },
                                        ];

                                        const maxVisible = 3;
                                        const totalSlides = Math.max(1, nssGalleryList.length - maxVisible + 1);

                                        return (
                                            <div className="space-y-3 w-full max-w-full overflow-hidden">
                                                <div className="flex items-center justify-between px-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="h-4 w-1.5 rounded-full bg-[#FF5422]" />
                                                        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-black text-neutral-900">
                                                            NSS Visual Highlights & Field Activities
                                                        </h3>
                                                    </div>
                                                    <span className="text-xs font-bold text-[#FF5422] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                                                        {nssGalleryList.length} Photographs
                                                    </span>
                                                </div>

                                                {/* Contained Slider Viewport with Internal Controls */}
                                                <div className="relative overflow-hidden rounded-xl sm:rounded-xl border border-neutral-200 bg-white p-2.5 sm:p-4 shadow-xs w-full">
                                                    <div
                                                        className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out w-full"
                                                        style={{
                                                            transform: `translateX(-${nssSliderIndex * (100 / maxVisible)}%)`
                                                        }}
                                                    >
                                                        {nssGalleryList.map((item, gIdx) => (
                                                            <div
                                                                key={gIdx}
                                                                onClick={() => setSelectedNssImage(item)}
                                                                className="shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-xs hover:shadow-md hover:border-[#FF5422]/60 transition-all duration-300 group/img flex flex-col cursor-pointer"
                                                            >
                                                                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                                                                    <img
                                                                        src={item.url}
                                                                        alt={item.title}
                                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                                                        loading="lazy"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
                                                                        <span className="text-white text-xs font-medium line-clamp-2">
                                                                            {item.title}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="p-3 bg-white flex-1 flex flex-col justify-between">
                                                                    <p className="text-xs font-bold text-neutral-800 line-clamp-2 leading-snug">
                                                                        {item.title}
                                                                    </p>
                                                                    <span className="text-[11px] text-[#FF5422] font-semibold mt-2 flex items-center gap-1">
                                                                        Click to expand <ExternalLink size={11} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Internal Previous Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setNssSliderIndex((prev) => Math.max(0, prev - 1))}
                                                        disabled={nssSliderIndex === 0}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Previous Slide"
                                                    >
                                                        <ChevronLeft size={18} />
                                                    </button>

                                                    {/* Internal Next Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setNssSliderIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
                                                        disabled={nssSliderIndex >= totalSlides - 1}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Next Slide"
                                                    >
                                                        <ChevronRight size={18} />
                                                    </button>
                                                </div>

                                                {/* Pagination Dots */}
                                                {totalSlides > 1 && (
                                                    <div className="flex items-center justify-center gap-1.5 pt-1">
                                                        {Array.from({ length: totalSlides }).map((_, dotIdx) => (
                                                            <button
                                                                key={dotIdx}
                                                                type="button"
                                                                onClick={() => setNssSliderIndex(dotIdx)}
                                                                className={`h-2 rounded-full transition-all cursor-pointer ${
                                                                    nssSliderIndex === dotIdx
                                                                        ? 'w-6 bg-[#FF5422]'
                                                                        : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                                                                }`}
                                                                aria-label={`Go to slide ${dotIdx + 1}`}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Full Image High-Res Lightbox Modal */}
                                {selectedNssImage && (
                                    <div
                                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
                                        onClick={() => setSelectedNssImage(null)}
                                    >
                                        <div
                                            className="relative w-full w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 border-b border-neutral-800">
                                                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                                                    {selectedNssImage.title}
                                                </h4>
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedNssImage(null)}
                                                    className="w-8 h-8 grid place-items-center rounded-lg bg-white/10 hover:bg-[#FF5422] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                                                    aria-label="Close Preview"
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                            <div className="relative w-full max-h-[75vh] flex items-center justify-center p-2 bg-black/60 overflow-hidden">
                                                <img
                                                    src={selectedNssImage.url}
                                                    alt={selectedNssImage.title}
                                                    className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-lg shadow-lg"
                                                loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : activeSection.id === 'rotaract-club' ? (
                            <div className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full overflow-hidden">
                                {/* === Centered Official Header with Small Crest === */}
                                <div className="w-full bg-white border border-neutral-200/90 rounded-xl overflow-hidden shadow-2xs">
                                    <div className="w-full bg-[#f05a22] text-white py-2 px-4 text-center font-bold text-sm sm:text-base font-serif tracking-wide">
                                        Rotaract Club of SRIT
                                    </div>
                                    <div className="flex flex-col items-center justify-center py-2 px-4 bg-white">
                                        <img
                                            src="/rotaract_logo.jpg"
                                            alt="Rotaract Club of SRIT"
                                            className="h-9 sm:h-10 w-auto max-w-[42px] sm:max-w-[48px] object-contain drop-shadow-2xs transition-transform hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://www.srit.ac.in/wp-content/uploads/2023/02/rotaract-e1676441890818.jpg';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* === 6 Dark Collapsible Accordions (Matching Official Website Layout) === */}
                                <div className="w-full max-w-full rounded-xl sm:rounded-xl border border-[#1e2c3f] bg-[#121c2d] overflow-hidden shadow-xs divide-y divide-[#1e2c3f]">
                                    {[
                                        { id: 'vision', label: 'Our Vision' },
                                        { id: 'mission', label: 'Our Mission' },
                                        { id: 'goals', label: 'Goals' },
                                        { id: 'team', label: 'Team' },
                                        { id: 'activities', label: 'Activities' },
                                        { id: 'contact', label: 'Contact Us' },
                                    ].map((item) => {
                                        const isOpen = !!openRotaractAccordions[item.id];
                                        return (
                                            <div key={item.id} className="w-full max-w-full">
                                                {/* Accordion Row Header */}
                                                <button
                                                    type="button"
                                                    onClick={() => toggleRotaractAccordion(item.id)}
                                                    className="w-full bg-[#121c2d] hover:bg-[#18253a] text-[#f05a22] hover:text-[#ff7a45] px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm md:text-base font-bold transition-colors cursor-pointer select-none text-left tracking-wide"
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-[#f05a22] transition-transform duration-200 shrink-0 ${
                                                            isOpen ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>

                                                {/* Accordion Content Body */}
                                                {isOpen && (
                                                    <div className="p-3 sm:p-5 md:p-6 bg-white text-neutral-800 animate-fadeIn border-t border-neutral-200 w-full max-w-full overflow-hidden">
                                                        {/* 1. Our Vision */}
                                                        {item.id === 'vision' && (
                                                            <div className="space-y-4">
                                                                <div>
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-1">
                                                                        Aim:
                                                                    </h4>
                                                                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed text-justify">
                                                                        The purpose of Rotaract is to provide an opportunity for young men and women to enhance the knowledge and skills that will assist them in personal development, to address the physical and social needs of their communities, and to promote better relations between all people worldwide through a framework of friendship and service.
                                                                    </p>
                                                                </div>
                                                                <div className="pt-2 border-t border-neutral-100">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-1">
                                                                        Our Vision:
                                                                    </h4>
                                                                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed text-justify">
                                                                        Rotaract District Anantapuram envisions itself as an international youth organization promoting ‘youth as partners’ and leading the agendas of youth development in the region.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 2. Our Mission */}
                                                        {item.id === 'mission' && (
                                                            <div className="space-y-3">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    Our Mission:
                                                                </h4>
                                                                <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 text-neutral-800 text-xs sm:text-sm leading-relaxed">
                                                                    Our mission is to create opportunities and provide support for our members, enabling them to become community and professional leaders.
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 3. Goals */}
                                                        {item.id === 'goals' && (
                                                            <div className="space-y-4">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    Goals:
                                                                </h4>
                                                                <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                                                                    The goals of rotaract are:
                                                                </p>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                                                    {[
                                                                        'To develop professional and leadership skills;',
                                                                        'To emphasize respect for the rights of others, based on recognition of the worth of each individual;',
                                                                        'To recognize the dignity and value of all useful occupations as opportunities to serve;',
                                                                        'To recognize, practice, and promote ethical standards as leadership qualities and vocational responsibilities;',
                                                                        'To develop knowledge and understanding of the needs, problems and opportunities in the community and worldwide;',
                                                                        'To provide opportunities for personal and group activities to serve the community and promote international understanding and goodwill toward all people.'
                                                                    ].map((goal, i) => (
                                                                        <div key={i} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 flex items-start gap-2.5 hover:border-orange-200 transition-colors">
                                                                            <span className="text-xs font-bold text-[#FF5422] bg-orange-100 px-2 py-0.5 rounded shrink-0">
                                                                                {(i + 1).toString().padStart(2, '0')}
                                                                            </span>
                                                                            <p className="text-xs text-neutral-700 leading-relaxed font-medium">{goal}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 4. Team */}
                                                        {item.id === 'team' && (
                                                            <div className="space-y-5 w-full">
                                                                <div className="space-y-3">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                        Team:
                                                                    </h4>
                                                                    <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs w-full">
                                                                        <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                                            <tbody className="divide-y divide-neutral-200">
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">1</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">Dr. G. BalaKrishna</strong>, Principal, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">2</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">All HOD’s of SRIT College</strong>, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">3</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">Mr. G. Chinna Pullaiah</strong>, Assistant Professor in CSE & Convener for Community Service Cell, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-3">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                        Department In-Charges:
                                                                    </h4>
                                                                    <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs w-full">
                                                                        <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                                            <tbody className="divide-y divide-neutral-200">
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">1</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. P. Venkata Suneel</strong>, Assistant Professor in CE & Coordinator, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">2</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. T. Aravind Babu</strong>, Assistant Professor in EEE, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">3</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mrs. M. Soumya</strong>, Assistant Professor in CSE, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">4</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. B. Subba Reddy</strong>, Assistant Professor in ME, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">5</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. Raj Kullay Reddy</strong>, Assistant Professor in ECE, SRIT College, Anantapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">6</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. K. Satish Kumar</strong>, Assistant Professor in H & S, SRIT College, Anantapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>

                                                                {/* Official Excel Sheet Embed */}
                                                                <div className="space-y-3 pt-2">
                                                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                                                        <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                            Rotaract Club Executive Board & Team Members (Team.xlsx)
                                                                        </h4>
                                                                        <a
                                                                            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOD56Tpg9Tlk7XU_e-0F1CAvY6ohcktSoMTnTaOSHF-YVTwUP1BUxEjq7aRqFEAQ_4eXlYY7APsjVw/pubhtml"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                        >
                                                                            <ExternalLink size={13} />
                                                                            <span>Open Full Sheet</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                        <iframe
                                                                            title="Rotaract Team Members"
                                                                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOD56Tpg9Tlk7XU_e-0F1CAvY6ohcktSoMTnTaOSHF-YVTwUP1BUxEjq7aRqFEAQ_4eXlYY7APsjVw/pubhtml?widget=true&headers=false"
                                                                            className="w-full min-w-full h-[400px] sm:h-[480px] lg:h-[550px] border-0 bg-white block"
                                                                            loading="lazy"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 5. Activities */}
                                                        {item.id === 'activities' && (
                                                            <div className="space-y-4 w-full">
                                                                {/* Document Links */}
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                    <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200/80 space-y-2">
                                                                        <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                            Activities Reports:
                                                                        </h4>
                                                                        <div className="flex flex-wrap gap-2">
                                                                            <a
                                                                                href="https://docs.google.com/document/d/1gyHnZ2p8zf9vgXgtjwGtTNjRcuDJFfOa/edit?usp=sharing&ouid=117112998805419292302&rtpof=true&sd=true"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-orange-200 text-[#f05a22] font-bold text-xs hover:bg-[#f05a22] hover:text-white transition-colors"
                                                                            >
                                                                                <FileText size={13} />
                                                                                <span>2021 – 2022 (Doc)</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>

                                                                    <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200/80 space-y-2">
                                                                        <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                            Rotaract Volunteers:
                                                                        </h4>
                                                                        <div className="flex flex-wrap gap-2">
                                                                            <a
                                                                                href="https://docs.google.com/document/d/1V03WsBcJ9oyf5Z1wLRHDJEfPzUBukOl_/edit?usp=sharing&ouid=117112998805419292302&rtpof=true&sd=true"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-orange-200 text-[#f05a22] font-bold text-xs hover:bg-[#f05a22] hover:text-white transition-colors"
                                                                            >
                                                                                <FileText size={13} />
                                                                                <span>2021 – 2022 (Doc)</span>
                                                                            </a>
                                                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-orange-200 text-[#f05a22] font-bold text-xs">
                                                                                <span>2022 – 2023</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Official Excel Sheet Embed */}
                                                                <div className="space-y-3 pt-2">
                                                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                                                        <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                            Rotaract Club Annual Activities & Project Records (Activities.xlsx)
                                                                        </h4>
                                                                        <a
                                                                            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRJruzfGdjBseLB9K7tbACYpy4na6yCSMjt_7wV780B1bS90ML0WfULJIa504FxtrrSNEd7QO9z-UW4/pubhtml"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                        >
                                                                            <ExternalLink size={13} />
                                                                            <span>Open Full Sheet</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                        <iframe
                                                                            title="Rotaract Activities"
                                                                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRJruzfGdjBseLB9K7tbACYpy4na6yCSMjt_7wV780B1bS90ML0WfULJIa504FxtrrSNEd7QO9z-UW4/pubhtml?widget=true&headers=false"
                                                                            className="w-full min-w-full h-[400px] sm:h-[480px] lg:h-[550px] border-0 bg-white block"
                                                                            loading="lazy"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 6. Contact Us */}
                                                        {item.id === 'contact' && (
                                                            <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 w-full space-y-3">
                                                                <div>
                                                                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ea580c] font-bold text-[11px] uppercase mb-1">
                                                                        Rotaract Coordinator
                                                                    </div>
                                                                    <h4 className="font-bold text-base sm:text-lg text-neutral-900">
                                                                        Mr. P. Venkata Suneel, <span className="text-xs sm:text-sm font-normal text-neutral-600">M.Tech</span>
                                                                    </h4>
                                                                    <p className="text-xs font-semibold text-[#f05a22]">
                                                                        Assistant Professor, Department of Civil Engineering
                                                                    </p>
                                                                </div>
                                                                <div className="text-xs sm:text-sm text-neutral-700 space-y-1">
                                                                    <p>Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                                                                </div>
                                                                <div className="pt-3 border-t border-neutral-200 flex flex-wrap gap-4 text-xs sm:text-sm">
                                                                    <a
                                                                        href="mailto:rotaractclub@srit.ac.in"
                                                                        className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#ea580c] transition-colors font-medium"
                                                                    >
                                                                        <Mail size={14} className="text-[#ea580c]" />
                                                                        <span>rotaractclub@srit.ac.in</span>
                                                                    </a>
                                                                    <a
                                                                        href="mailto:venkatasuneel.civ@srit.ac.in"
                                                                        className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#ea580c] transition-colors font-medium"
                                                                    >
                                                                        <Mail size={14} className="text-[#ea580c]" />
                                                                        <span>venkatasuneel.civ@srit.ac.in</span>
                                                                    </a>
                                                                    <a
                                                                        href="tel:8919226326"
                                                                        className="inline-flex items-center gap-1.5 text-[#ea580c] font-bold hover:underline"
                                                                    >
                                                                        <Phone size={14} />
                                                                        <span>+91-8919226326</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* === Bottom Rotaract Visual Carousel Slider === */}
                                <div className="pt-4 pb-2 space-y-3 w-full max-w-full overflow-hidden">
                                    {(() => {
                                        const rotaractGalleryList = [
                                            { url: '/saro1.jpeg', title: 'Rotaract Youth Leadership & Community Service' },
                                            { url: '/saro2.jpeg', title: 'Fellowship & Professional Development Assembly' },
                                            { url: '/saro3.jpeg', title: 'District Conference & Social Welfare Campaigns' },
                                            { url: '/saro4.jpeg', title: 'Mega Blood Donation Drive & Health Checkup' },
                                        ];

                                        const maxVisible = 3;
                                        const totalSlides = Math.max(1, rotaractGalleryList.length - maxVisible + 1);

                                        return (
                                            <div className="space-y-3 w-full max-w-full overflow-hidden">
                                                <div className="flex items-center justify-between px-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="h-4 w-1.5 rounded-full bg-[#FF5422]" />
                                                        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-black text-neutral-900">
                                                            Rotaract Club Visual Gallery & Highlights
                                                        </h3>
                                                    </div>
                                                    <span className="text-xs font-bold text-[#FF5422] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                                                        {rotaractGalleryList.length} Photographs
                                                    </span>
                                                </div>

                                                {/* Contained Slider Viewport with Internal Controls */}
                                                <div className="relative overflow-hidden rounded-xl sm:rounded-xl border border-neutral-200 bg-white p-2.5 sm:p-4 shadow-xs w-full">
                                                    <div
                                                        className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out w-full"
                                                        style={{
                                                            transform: `translateX(-${rotaractSliderIndex * (100 / maxVisible)}%)`
                                                        }}
                                                    >
                                                        {rotaractGalleryList.map((item, gIdx) => (
                                                            <div
                                                                key={gIdx}
                                                                onClick={() => setSelectedRotaractImage(item)}
                                                                className="shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-xs hover:shadow-md hover:border-[#FF5422]/60 transition-all duration-300 group/img flex flex-col cursor-pointer"
                                                            >
                                                                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                                                                    <img
                                                                        src={item.url}
                                                                        alt={item.title}
                                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                                                        loading="lazy"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
                                                                        <span className="text-white text-xs font-medium line-clamp-2">
                                                                            {item.title}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="p-3 bg-white flex-1 flex flex-col justify-between">
                                                                    <p className="text-xs font-bold text-neutral-800 line-clamp-2 leading-snug">
                                                                        {item.title}
                                                                    </p>
                                                                    <span className="text-[11px] text-[#FF5422] font-semibold mt-2 flex items-center gap-1">
                                                                        Click to expand <ExternalLink size={11} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Internal Previous Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setRotaractSliderIndex((prev) => Math.max(0, prev - 1))}
                                                        disabled={rotaractSliderIndex === 0}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Previous Slide"
                                                    >
                                                        <ChevronLeft size={18} />
                                                    </button>

                                                    {/* Internal Next Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setRotaractSliderIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
                                                        disabled={rotaractSliderIndex >= totalSlides - 1}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Next Slide"
                                                    >
                                                        <ChevronRight size={18} />
                                                    </button>
                                                </div>

                                                {/* Pagination Dots */}
                                                {totalSlides > 1 && (
                                                    <div className="flex items-center justify-center gap-1.5 pt-1">
                                                        {Array.from({ length: totalSlides }).map((_, dotIdx) => (
                                                            <button
                                                                key={dotIdx}
                                                                type="button"
                                                                onClick={() => setRotaractSliderIndex(dotIdx)}
                                                                className={`h-2 rounded-full transition-all cursor-pointer ${
                                                                    rotaractSliderIndex === dotIdx
                                                                        ? 'w-6 bg-[#FF5422]'
                                                                        : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                                                                }`}
                                                                aria-label={`Go to slide ${dotIdx + 1}`}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Full Image High-Res Lightbox Modal */}
                                {selectedRotaractImage && (
                                    <div
                                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
                                        onClick={() => setSelectedRotaractImage(null)}
                                    >
                                        <div
                                            className="relative w-full w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 border-b border-neutral-800">
                                                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                                                    {selectedRotaractImage.title}
                                                </h4>
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedRotaractImage(null)}
                                                    className="w-8 h-8 grid place-items-center rounded-lg bg-white/10 hover:bg-[#FF5422] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                                                    aria-label="Close Preview"
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                            <div className="relative w-full max-h-[75vh] flex items-center justify-center p-2 bg-black/60 overflow-hidden">
                                                <img
                                                    src={selectedRotaractImage.url}
                                                    alt={selectedRotaractImage.title}
                                                    className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-lg shadow-lg"
                                                loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : activeSection.id === 'indian-redcross-society' ? (
                            <div className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full overflow-hidden">
                                {/* === Centered Official Header with Crest === */}
                                <div className="w-full bg-white border border-neutral-200/90 rounded-xl overflow-hidden shadow-2xs">
                                    <div className="w-full bg-[#f05a22] text-white py-2 px-4 text-center font-bold text-sm sm:text-base font-serif tracking-wide">
                                        Indian Red Cross Society
                                    </div>
                                    <div className="flex flex-col items-center justify-center py-2.5 px-4 bg-white">
                                        <img
                                            src="/ircs_logo.png"
                                            alt="Indian Red Cross Society"
                                            className="h-10 sm:h-12 w-auto max-w-[60px] sm:max-w-[70px] object-contain drop-shadow-2xs transition-transform hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://www.srit.ac.in/wp-content/uploads/2021/08/IRCS-img-300x245.png';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* === 7 Dark Collapsible Accordions (Matching Official Website Layout) === */}
                                <div className="w-full max-w-full rounded-xl sm:rounded-xl border border-[#1e2c3f] bg-[#121c2d] overflow-hidden shadow-xs divide-y divide-[#1e2c3f]">
                                    {[
                                        { id: 'vision', label: 'Our Vision' },
                                        { id: 'mission', label: 'Our Mission' },
                                        { id: 'objectives', label: 'Objectives' },
                                        { id: 'team', label: 'Team Members' },
                                        { id: 'volunteers', label: 'Student Volunteers' },
                                        { id: 'reports', label: 'Event Reports' },
                                        { id: 'contact', label: 'Contact' },
                                    ].map((item) => {
                                        const isOpen = !!openIrcsAccordions[item.id];
                                        return (
                                            <div key={item.id} className="w-full max-w-full">
                                                {/* Accordion Row Header */}
                                                <button
                                                    type="button"
                                                    onClick={() => toggleIrcsAccordion(item.id)}
                                                    className="w-full bg-[#121c2d] hover:bg-[#18253a] text-[#f05a22] hover:text-[#ff7a45] px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm md:text-base font-bold transition-colors cursor-pointer select-none text-left tracking-wide"
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-[#f05a22] transition-transform duration-200 shrink-0 ${
                                                            isOpen ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>

                                                {/* Accordion Content Body */}
                                                {isOpen && (
                                                    <div className="p-3 sm:p-5 md:p-6 bg-white text-neutral-800 animate-fadeIn border-t border-neutral-200 w-full max-w-full overflow-hidden">
                                                        {/* 1. Our Vision */}
                                                        {item.id === 'vision' && (
                                                            <div className="space-y-4">
                                                                <div>
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-1">
                                                                        AIM:
                                                                    </h4>
                                                                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed text-justify">
                                                                        The Indian Red Cross Society aims to inspire, encourage and initiate at all times, all forms of humanitarian activities so that human suffering can be minimized, alleviated and even prevented, thus contribute to creating a more congenial climate for peace.
                                                                    </p>
                                                                </div>
                                                                <div className="pt-2 border-t border-neutral-100">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-1">
                                                                        VISION:
                                                                    </h4>
                                                                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed text-justify">
                                                                        Our Vision is to provide opportunities to the youth-the makers of the future, to include healthy living habits and to contribute their values to uplift our society.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 2. Our Mission */}
                                                        {item.id === 'mission' && (
                                                            <div className="space-y-3">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    MISSION:
                                                                </h4>
                                                                <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 text-neutral-800 text-xs sm:text-sm leading-relaxed text-justify">
                                                                    To inspire, encourage community service through training and education and initiate all forms of humanitarian activities at all times so that human sufferings can be minimized and even prevented and this contribute to create climate for peace.
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 3. Objectives & 7 Fundamental Principles */}
                                                        {item.id === 'objectives' && (
                                                            <div className="space-y-6">
                                                                <div>
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-3">
                                                                        OBJECTIVES:
                                                                    </h4>
                                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                                                                        {[
                                                                            'Promotion and protection of health and life',
                                                                            'Selfless services to the sick and suffering',
                                                                            'Promotion of national and international friendship',
                                                                            'Disaster relief to the victims',
                                                                            'Donate Blood & Save Life'
                                                                        ].map((obj, oIdx) => (
                                                                            <div
                                                                                key={oIdx}
                                                                                className="p-3 rounded-lg bg-orange-50/40 border border-orange-200/70 flex items-center gap-2.5"
                                                                            >
                                                                                <span className="w-2 h-2 rounded-full bg-[#FF5422] shrink-0" />
                                                                                <span className="text-xs font-semibold text-neutral-800 leading-tight">
                                                                                    {obj}
                                                                                </span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                <div className="pt-2 border-t border-neutral-200">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                                                                        <span className="h-4 w-1.5 rounded-full bg-[#FF5422]" />
                                                                        <span>Seven Fundamental Principles of Red Cross:</span>
                                                                    </h4>

                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                        {[
                                                                            {
                                                                                name: 'Humanity',
                                                                                img: '/ircs_img1.png',
                                                                                remoteImg: 'https://www.srit.ac.in/wp-content/uploads/2021/08/ircs-img1.png',
                                                                                desc: 'The International Red Cross and Red Crescent Movement, born of a desire to bring assistance without discrimination to the wounded on the battlefield, endeavors, in its international and national capacity, to prevent and alleviate human suffering wherever it may be found. Its purpose is to protect life and health and to ensure respect for the human being. It promotes mutual understanding, friendship, cooperation and lasting peace amongst all peoples.'
                                                                            },
                                                                            {
                                                                                name: 'Impartiality',
                                                                                img: '/ircs_img2.png',
                                                                                remoteImg: 'https://www.srit.ac.in/wp-content/uploads/2021/08/IRCS-img2.png',
                                                                                desc: 'It makes no discrimination as to nationally, race, religious beliefs, class or political opinions. It endeavors to relieve the suffering of individuals, being solely by their needs, and to give priority to the most urgent cases of distress.'
                                                                            },
                                                                            {
                                                                                name: 'Neutrality',
                                                                                img: '/ircs_img3.png',
                                                                                remoteImg: 'https://www.srit.ac.in/wp-content/uploads/2021/08/IRCS-img3.png',
                                                                                desc: 'In orders to enjoy the confidence of all, the Movement may not take sides in hostilities or engage in controversies of a political, racial, religious or ideological nature.'
                                                                            },
                                                                            {
                                                                                name: 'Independence',
                                                                                img: '/ircs_img4.png',
                                                                                remoteImg: 'https://www.srit.ac.in/wp-content/uploads/2021/08/IRCS-img4.png',
                                                                                desc: 'The Movement is independent. The National Societies, while auxiliaries in the humanitarian services of their governments and subject to the laws of their respective countries, must always maintain their autonomy so that they may be able at all times to act in accordance with the principles of the Movement.'
                                                                            },
                                                                            {
                                                                                name: 'Voluntary Service',
                                                                                img: '/ircs_img5.png',
                                                                                remoteImg: 'https://www.srit.ac.in/wp-content/uploads/2021/08/IRCS-img5.png',
                                                                                desc: 'It is voluntary relief movement not prompted in any manner by desire for gain.'
                                                                            },
                                                                            {
                                                                                name: 'Unity',
                                                                                img: '/ircs_img6.png',
                                                                                remoteImg: 'https://www.srit.ac.in/wp-content/uploads/2021/08/IRCS-img6.png',
                                                                                desc: 'There can be only one Red Cross Or Red Crescent in any one country. It must be open to all. It must carry on its humanitarian work throughout its territory.'
                                                                            },
                                                                            {
                                                                                name: 'Universality',
                                                                                img: '/ircs_img7.png',
                                                                                remoteImg: 'https://www.srit.ac.in/wp-content/uploads/2021/08/IRCS-img7.png',
                                                                                desc: 'The International Red Cross and Red Crescent Movement, in which all societies have equal status and share equal responsibilities and duties in helping each other, is worldwide.'
                                                                            }
                                                                        ].map((principle, pIdx) => (
                                                                            <div
                                                                                key={pIdx}
                                                                                className={`p-4 rounded-xl border border-neutral-200/90 bg-neutral-50/50 hover:bg-orange-50/30 hover:border-orange-200 transition-all duration-200 flex flex-col justify-between ${
                                                                                    pIdx === 6 ? 'md:col-span-2' : ''
                                                                                }`}
                                                                            >
                                                                                <div className="space-y-3">
                                                                                    <div className="flex items-center gap-3">
                                                                                        <div className="h-10 w-10 shrink-0 rounded-lg bg-white border border-neutral-200 grid place-items-center overflow-hidden p-1 shadow-2xs">
                                                                                            <img
                                                                                                src={principle.img}
                                                                                                alt={principle.name}
                                                                                                className="h-full w-full object-contain"
                                                                                                onError={(e) => {
                                                                                                    (e.target as HTMLImageElement).src = principle.remoteImg;
                                                                                                }}
                                                                                            />
                                                                                        </div>
                                                                                        <div>
                                                                                            <span className="text-[11px] font-bold text-[#f05a22] uppercase tracking-wider block">
                                                                                                Principle #{pIdx + 1}
                                                                                            </span>
                                                                                            <h5 className="font-bold text-sm sm:text-base text-neutral-900">
                                                                                                {principle.name}
                                                                                            </h5>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="text-xs text-neutral-700 leading-relaxed text-justify">
                                                                                        {principle.desc}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 4. Team Members Spreadsheet */}
                                                        {item.id === 'team' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        Youth Red Cross Committee & Team Members (Team.xlsx)
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_M97ail37t1n8_VpbsmI_6J87GlMxQkTdnDW6zBxdYtdJzADlvIwuklbLXw5AhA/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="Youth Red Cross Team Members"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_M97ail37t1n8_VpbsmI_6J87GlMxQkTdnDW6zBxdYtdJzADlvIwuklbLXw5AhA/pubhtml?widget=true&chrome=false&headers=false"
                                                                        className="w-full min-w-full h-[400px] sm:h-[480px] lg:h-[550px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 5. Student Volunteers Spreadsheet */}
                                                        {item.id === 'volunteers' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        Youth Red Cross Registered Student Volunteers (Volunteers.xlsx)
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRzL0s0CVER0OP8RI1QoipeyA2MUePCipWXPPze88jKAN-1FA8DfdRRyQk0_EBQbQ/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="Youth Red Cross Volunteers"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRzL0s0CVER0OP8RI1QoipeyA2MUePCipWXPPze88jKAN-1FA8DfdRRyQk0_EBQbQ/pubhtml?widget=true&chrome=false&headers=false"
                                                                        className="w-full min-w-full h-[400px] sm:h-[480px] lg:h-[550px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 6. Event Reports Spreadsheet */}
                                                        {item.id === 'reports' && (
                                                            <div className="space-y-3 w-full">
                                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900">
                                                                        IRCS Health, Blood Donation & Disaster Relief Activities (Events.xlsx)
                                                                    </h4>
                                                                    <a
                                                                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRietrKW8242B4O_oCmgp44rYbr_Oq3aLFBRM3gAQdDkp5SjGDJZVeJV3Tb2nd_jg/pubhtml"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#ea580c] hover:bg-orange-100 text-xs font-bold transition-colors"
                                                                    >
                                                                        <ExternalLink size={13} />
                                                                        <span>Open Full Sheet</span>
                                                                    </a>
                                                                </div>
                                                                <div className="w-full min-w-full rounded-xl border border-neutral-300 bg-white overflow-hidden shadow-xs">
                                                                    <iframe
                                                                        title="Youth Red Cross Event Reports"
                                                                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRietrKW8242B4O_oCmgp44rYbr_Oq3aLFBRM3gAQdDkp5SjGDJZVeJV3Tb2nd_jg/pubhtml?widget=true&chrome=false&headers=false"
                                                                        className="w-full min-w-full h-[400px] sm:h-[480px] lg:h-[550px] border-0 bg-white block"
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 7. Contact */}
                                                        {item.id === 'contact' && (
                                                            <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 w-full space-y-3">
                                                                <div>
                                                                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ea580c] font-bold text-[11px] uppercase mb-1">
                                                                        Coordinator
                                                                    </div>
                                                                    <h4 className="font-bold text-base sm:text-lg text-neutral-900">
                                                                        Mr. Aravind Babu, <span className="text-xs sm:text-sm font-normal text-neutral-600">M.Tech, (PhD)</span>
                                                                    </h4>
                                                                    <p className="text-xs font-semibold text-[#f05a22]">
                                                                        Assistant Professor, Department of EEE
                                                                    </p>
                                                                </div>
                                                                <div className="text-xs sm:text-sm text-neutral-700 space-y-1">
                                                                    <p>Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                                                                </div>
                                                                <div className="pt-3 border-t border-neutral-200 flex flex-wrap gap-4 text-xs sm:text-sm">
                                                                    <a
                                                                        href="mailto:ircs.youth@srit.ac.in"
                                                                        className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#ea580c] transition-colors font-medium"
                                                                    >
                                                                        <Mail size={14} className="text-[#ea580c]" />
                                                                        <span>ircs.youth@srit.ac.in</span>
                                                                    </a>
                                                                    <a
                                                                        href="mailto:aravind.eee@srit.ac.in"
                                                                        className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#ea580c] transition-colors font-medium"
                                                                    >
                                                                        <Mail size={14} className="text-[#ea580c]" />
                                                                        <span>aravind.eee@srit.ac.in</span>
                                                                    </a>
                                                                    <a
                                                                        href="tel:917893333008"
                                                                        className="inline-flex items-center gap-1.5 text-[#ea580c] font-bold hover:underline"
                                                                    >
                                                                        <Phone size={14} />
                                                                        <span>+91-7893333008</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* === Bottom IRCS Visual Carousel Slider === */}
                                <div className="pt-4 pb-2 space-y-3 w-full max-w-full overflow-hidden">
                                    {(() => {
                                        const ircsGalleryList = [
                                            { url: '/saro4.jpeg', title: 'Voluntary Blood Donation Drive in Association with Indian Red Cross Society Blood Bank' },
                                            { url: '/saro1.jpeg', title: 'First Aid, CPR & Emergency Response Demonstration for Students' },
                                            { url: '/saro2.jpeg', title: 'Humanitarian Awareness Assembly & Relief Kit Distribution' },
                                            { url: '/saro3.jpeg', title: 'District Red Cross Society Outreach & Youth Volunteering Campaign' },
                                        ];

                                        const maxVisible = 3;
                                        const totalSlides = Math.max(1, ircsGalleryList.length - maxVisible + 1);

                                        return (
                                            <div className="space-y-3 w-full max-w-full overflow-hidden">
                                                <div className="flex items-center justify-between px-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="h-4 w-1.5 rounded-full bg-[#FF5422]" />
                                                        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-black text-neutral-900">
                                                            Indian Red Cross Society Visual Gallery & Activities
                                                        </h3>
                                                    </div>
                                                    <span className="text-xs font-bold text-[#FF5422] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                                                        {ircsGalleryList.length} Photographs
                                                    </span>
                                                </div>

                                                {/* Contained Slider Viewport with Internal Controls */}
                                                <div className="relative overflow-hidden rounded-xl sm:rounded-xl border border-neutral-200 bg-white p-2.5 sm:p-4 shadow-xs w-full">
                                                    <div
                                                        className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out w-full"
                                                        style={{
                                                            transform: `translateX(-${ircsSliderIndex * (100 / maxVisible)}%)`
                                                        }}
                                                    >
                                                        {ircsGalleryList.map((item, gIdx) => (
                                                            <div
                                                                key={gIdx}
                                                                onClick={() => setSelectedIrcsImage(item)}
                                                                className="shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-xs hover:shadow-md hover:border-[#FF5422]/60 transition-all duration-300 group/img flex flex-col cursor-pointer"
                                                            >
                                                                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                                                                    <img
                                                                        src={item.url}
                                                                        alt={item.title}
                                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                                                        loading="lazy"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
                                                                        <span className="text-white text-xs font-medium line-clamp-2">
                                                                            {item.title}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="p-3 bg-white flex-1 flex flex-col justify-between">
                                                                    <p className="text-xs font-bold text-neutral-800 line-clamp-2 leading-snug">
                                                                        {item.title}
                                                                    </p>
                                                                    <span className="text-[11px] text-[#FF5422] font-semibold mt-2 flex items-center gap-1">
                                                                        Click to expand <ExternalLink size={11} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Internal Previous Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setIrcsSliderIndex((prev) => Math.max(0, prev - 1))}
                                                        disabled={ircsSliderIndex === 0}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Previous Slide"
                                                    >
                                                        <ChevronLeft size={18} />
                                                    </button>

                                                    {/* Internal Next Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setIrcsSliderIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
                                                        disabled={ircsSliderIndex >= totalSlides - 1}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Next Slide"
                                                    >
                                                        <ChevronRight size={18} />
                                                    </button>
                                                </div>

                                                {/* Pagination Dots */}
                                                {totalSlides > 1 && (
                                                    <div className="flex items-center justify-center gap-1.5 pt-1">
                                                        {Array.from({ length: totalSlides }).map((_, dotIdx) => (
                                                            <button
                                                                key={dotIdx}
                                                                type="button"
                                                                onClick={() => setIrcsSliderIndex(dotIdx)}
                                                                className={`h-2 rounded-full transition-all cursor-pointer ${
                                                                    ircsSliderIndex === dotIdx
                                                                        ? 'w-6 bg-[#FF5422]'
                                                                        : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                                                                }`}
                                                                aria-label={`Go to slide ${dotIdx + 1}`}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Full Image High-Res Lightbox Modal */}
                                {selectedIrcsImage && (
                                    <div
                                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
                                        onClick={() => setSelectedIrcsImage(null)}
                                    >
                                        <div
                                            className="relative w-full w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 border-b border-neutral-800">
                                                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                                                    {selectedIrcsImage.title}
                                                </h4>
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedIrcsImage(null)}
                                                    className="w-8 h-8 grid place-items-center rounded-lg bg-white/10 hover:bg-[#FF5422] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                                                    aria-label="Close Preview"
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                            <div className="relative w-full max-h-[75vh] flex items-center justify-center p-2 bg-black/60 overflow-hidden">
                                                <img
                                                    src={selectedIrcsImage.url}
                                                    alt={selectedIrcsImage.title}
                                                    className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-lg shadow-lg"
                                                loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : activeSection.id === 'unnath-bharth-abhiyan' || activeSection.id === 'unnat-bharat-abhiyan' ? (
                            <div className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full overflow-hidden">
                                {/* === Centered Official Header with Small Crest === */}
                                <div className="w-full bg-white border border-neutral-200/90 rounded-xl overflow-hidden shadow-2xs">
                                    <div className="w-full bg-[#f05a22] text-white py-2 px-4 text-center font-bold text-sm sm:text-base font-serif tracking-wide">
                                        Unnat Bharat Abhiyan
                                    </div>
                                    <div className="flex flex-col items-center justify-center py-2.5 px-4 bg-white">
                                        <img
                                            src="/uba_logo.jpg"
                                            alt="Unnat Bharat Abhiyan"
                                            className="h-10 sm:h-12 w-auto max-w-[80px] sm:max-w-[90px] object-contain drop-shadow-2xs transition-transform hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://www.srit.ac.in/wp-content/uploads/2021/08/unnat-bhrt-abhiyn.jpg';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* === 6 Dark Collapsible Accordions (Matching Official Website Layout) === */}
                                <div className="w-full max-w-full rounded-xl sm:rounded-xl border border-[#1e2c3f] bg-[#121c2d] overflow-hidden shadow-xs divide-y divide-[#1e2c3f]">
                                    {[
                                        { id: 'vision', label: 'Our Vision' },
                                        { id: 'mission', label: 'Our Mission' },
                                        { id: 'goals', label: 'Goals' },
                                        { id: 'team', label: 'Team' },
                                        { id: 'activities', label: 'Activities' },
                                        { id: 'contact', label: 'Contact' },
                                    ].map((item) => {
                                        const isOpen = !!openUbaAccordions[item.id];
                                        return (
                                            <div key={item.id} className="w-full max-w-full">
                                                {/* Accordion Row Header */}
                                                <button
                                                    type="button"
                                                    onClick={() => toggleUbaAccordion(item.id)}
                                                    className="w-full bg-[#121c2d] hover:bg-[#18253a] text-[#f05a22] hover:text-[#ff7a45] px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm md:text-base font-bold transition-colors cursor-pointer select-none text-left tracking-wide"
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-[#f05a22] transition-transform duration-200 shrink-0 ${
                                                            isOpen ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>

                                                {/* Accordion Content Body */}
                                                {isOpen && (
                                                    <div className="p-3 sm:p-5 md:p-6 bg-white text-neutral-800 animate-fadeIn border-t border-neutral-200 w-full max-w-full overflow-hidden">
                                                        {/* 1. Our Vision */}
                                                        {item.id === 'vision' && (
                                                            <div className="space-y-4">
                                                                <div>
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-1">
                                                                        HISTORY:
                                                                    </h4>
                                                                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed text-justify">
                                                                        The conceptualization of Unnat Bharat Abhiyan started with the initiative of a group of dedicated faculty members of Indian Institute of Technology (IIT) Delhi working for long in the area of rural development and appropriate technology. The concept was nurtured through wide consultation with the representatives of a number of technical institutions, Rural Technology Action Group (RuTAG) coordinators, voluntary organizations and government agencies, actively involved in rural development work, during a National workshop held at IIT Delhi in September, 2014. The workshop was sponsored by Council for Advancement of People’s Action and Rural Technology (CAPART), Ministry of Rural Development, Govt. of India. The program was formally launched by the Ministry of Education (MoE) (formerly Ministry Human Resource Development (MHRD)) in presence of The President of India on 11th November, 2014.
                                                                    </p>
                                                                </div>
                                                                <div className="pt-2 border-t border-neutral-100">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-1">
                                                                        VISION:
                                                                    </h4>
                                                                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed text-justify">
                                                                        Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 2. Our Mission */}
                                                        {item.id === 'mission' && (
                                                            <div className="space-y-3">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    MISSION:
                                                                </h4>
                                                                <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-200/80 text-neutral-800 text-xs sm:text-sm leading-relaxed text-justify">
                                                                    The Mission of Unnat Bharat Abhiyan is to enable higher educational institutions to work with the people of rural India in identifying development challenges and evolving appropriate solutions for accelerating sustainable growth. It also aims to create a virtuous cycle between society and an inclusive academic system by providing knowledge and practices for emerging professions and to upgrade the capabilities of both the public and the private sectors in responding to the development needs of rural India.
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 3. Goals */}
                                                        {item.id === 'goals' && (
                                                            <div className="space-y-5">
                                                                <div>
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide mb-3">
                                                                        GOALS:
                                                                    </h4>
                                                                    <div className="space-y-2.5">
                                                                        {[
                                                                            'To build an understanding of the development agenda within institutes of Higher Education and an institutional capacity and training relevant to national needs, especially those of rural India.',
                                                                            'To re-emphasize the need for field work, stake-holder interactions and design for societal objectives as the basis of higher education.',
                                                                            'To stress on rigorous reporting and useful outputs as central to developing new professions.',
                                                                            'To provide rural India and regional agencies with access to the professional resources of the institutes of higher education, especially those that have acquired academic excellence in the field of science, engineering and technology, and management.',
                                                                            'To improve development outcomes as a consequence of this research. To develop new professions and new processes to sustain and absorb the outcomes of research.',
                                                                            'To foster a new dialogue within the larger community on science, society and the environment and to develop a sense of dignity and collective destiny.'
                                                                        ].map((goal, gIdx) => (
                                                                            <div
                                                                                key={gIdx}
                                                                                className="p-3 rounded-lg bg-orange-50/40 border border-orange-200/70 flex items-start gap-3"
                                                                            >
                                                                                <span className="text-xs font-bold text-[#FF5422] bg-orange-100 px-2 py-0.5 rounded shrink-0">
                                                                                    {(gIdx + 1).toString().padStart(2, '0')}
                                                                                </span>
                                                                                <span className="text-xs font-medium text-neutral-800 leading-relaxed">
                                                                                    {goal}
                                                                                </span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                <div className="pt-3 border-t border-neutral-200 space-y-3">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wide flex items-center gap-2">
                                                                        <span className="h-4 w-1.5 rounded-full bg-[#FF5422]" />
                                                                        <span>How You Can Participate in UBA?</span>
                                                                    </h4>
                                                                    <p className="text-xs text-neutral-600 font-medium">
                                                                        You are welcome to participate in the Unnat Bharat Abhiyan in any of the following capacity as per your present status, competence and interest:
                                                                    </p>
                                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                                                                        {[
                                                                            'As a prospective Mentoring Institute',
                                                                            'As a Participating Institute',
                                                                            'As a Subject Expert',
                                                                            'As a Voluntary Organization',
                                                                            'As a Developmental Agency',
                                                                            'As a Philanthropist or a CSR Promoter',
                                                                            'As NSS Member',
                                                                            'As an Enthusiastic Volunteer'
                                                                        ].map((part, pIdx) => (
                                                                            <div
                                                                                key={pIdx}
                                                                                className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center gap-2 text-xs font-semibold text-neutral-800"
                                                                            >
                                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5422] shrink-0" />
                                                                                <span>{part}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                    <p className="text-[11px] text-neutral-500 italic pt-1">
                                                                        For more information in this regard, you may please visit the UBA national portal and contact National Coordinator or Regional Coordinators (Mentoring Institutions).
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 4. Team & Adopted Villages */}
                                                        {item.id === 'team' && (
                                                            <div className="space-y-5 w-full">
                                                                <div className="space-y-3">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                        TEAM:
                                                                    </h4>
                                                                    <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs w-full">
                                                                        <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                                            <tbody className="divide-y divide-neutral-200">
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">1</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">Dr. G. BalaKrishna</strong>, Principal, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">2</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">All HOD’s of SRIT College</strong>, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">3</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">Mr. G. Chinna Pullaiah</strong>, Assistant Professor in CSE & Convener for Community Service Cell, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-3">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                        Department In Charges:
                                                                    </h4>
                                                                    <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs w-full">
                                                                        <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                                            <tbody className="divide-y divide-neutral-200">
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">1</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. B. Subba Reddy</strong>, Assistant Professor in ME & UBA Coordinator, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">2</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. T. Aravind Babu</strong>, Assistant Professor in EEE, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">3</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mrs. M. Soumya</strong>, Assistant Professor in CSE, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">4</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. P. Venkata Suneel</strong>, Assistant Professor in CE, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">5</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. Raj Kullay Reddy</strong>, Assistant Professor in ECE, SRIT College, Anantapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">6</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. K. Satish Kumar</strong>, Assistant Professor in H & S, SRIT College, Anantapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>

                                                                {/* Adopted Village Clusters */}
                                                                <div className="pt-2">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                                                                        <span className="h-4 w-1.5 rounded-full bg-[#FF5422]" />
                                                                        <span>Adopted Villages under SRIT UBA Cluster:</span>
                                                                    </h4>
                                                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                                                        {[
                                                                            { name: 'Rotarypuram', desc: 'BK Samudram Mandal' },
                                                                            { name: 'Alamuru', desc: 'Anantapuramu Rural' },
                                                                            { name: 'BK Samudram', desc: 'Anantapuramu District' },
                                                                            { name: 'Siddarampuram', desc: 'BK Samudram Mandal' },
                                                                            { name: 'Garladinne', desc: 'Garladinne Mandal' }
                                                                        ].map((vil, vIdx) => (
                                                                            <div key={vIdx} className="p-3 rounded-xl bg-orange-50/50 border border-orange-200/80 text-center">
                                                                                <span className="text-xs font-bold text-[#ea580c] block">{vil.name}</span>
                                                                                <span className="text-[10px] text-neutral-600 mt-0.5 block">{vil.desc}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 5. Activities */}
                                                        {item.id === 'activities' && (
                                                            <div className="space-y-4 w-full">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    Activities:
                                                                </h4>
                                                                <div className="space-y-3">
                                                                    {[
                                                                        { year: '2023 - 2024', title: 'Comprehensive Village & Household Baseline Mapping', desc: 'Carried out digital socio-economic mapping and baseline household surveys across the adopted villages, uploading primary demographic and infrastructure data onto the UBA National Portal.' },
                                                                        { year: '2022 - 2023', title: 'Rural Clean Energy & Solar Micro-Grid Technical Assistance', desc: 'Faculty and student engineering taskforces provided technical feasibility assessments and implemented LED lighting and solar energy setups for local primary schools and community centers.' },
                                                                        { year: '2021 - 2022', title: 'Drinking Water Quality Testing & Rainwater Harvesting Guidance', desc: 'Conducted field testing for fluoride and TDS concentrations in village borewells; designed low-cost recharge pits for groundwater conservation.' },
                                                                        { year: '2020 - 2021', title: 'Organic Farming & Biomass Composting Workshops', desc: 'Educated rural farming communities on converting agricultural residues into bio-fertilizers and minimizing the reliance on synthetic chemicals.' },
                                                                        { year: '2019 - 2020', title: 'Village Cleanliness, Sanitation & Open Defecation Free (ODF) Campaign', desc: 'Organized Swachhata awareness rallies, plastic waste segregation clinics, and hygienic sanitation awareness across schools.' },
                                                                        { year: '2018 - 2019', title: 'Participatory Rural Appraisal (PRA) & Initial Village Engagement', desc: 'Launched UBA initiatives at SRIT through village Gram Sabha interactions, identifying key regional developmental challenges with local panchayats.' }
                                                                    ].map((act, aIdx) => (
                                                                        <div key={aIdx} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-orange-50/30 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                                                            <div className="space-y-1">
                                                                                <div className="flex items-center gap-2">
                                                                                    <span className="text-xs font-bold text-[#FF5422] bg-orange-100 px-2.5 py-0.5 rounded-full">
                                                                                        {act.year}
                                                                                    </span>
                                                                                    <h5 className="font-bold text-xs sm:text-sm text-neutral-900">
                                                                                        {act.title}
                                                                                    </h5>
                                                                                </div>
                                                                                <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                                                                                    {act.desc}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 6. Contact */}
                                                        {item.id === 'contact' && (
                                                            <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 w-full space-y-3">
                                                                <div>
                                                                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ea580c] font-bold text-[11px] uppercase mb-1">
                                                                        UBA Coordinator
                                                                    </div>
                                                                    <h4 className="font-bold text-base sm:text-lg text-neutral-900">
                                                                        Mr. B. Subba Reddy, <span className="text-xs sm:text-sm font-normal text-neutral-600">M.Tech</span>
                                                                    </h4>
                                                                    <p className="text-xs font-semibold text-[#f05a22]">
                                                                        Assistant Professor in ME
                                                                    </p>
                                                                </div>
                                                                <div className="text-xs sm:text-sm text-neutral-700 space-y-1">
                                                                    <p>Srinivasa Ramanujan Institute of Technology, Rotarypuram, Anantapuramu-515701.</p>
                                                                </div>
                                                                <div className="pt-3 border-t border-neutral-200 flex flex-wrap gap-4 text-xs sm:text-sm">
                                                                    <a
                                                                        href="mailto:uba@srit.ac.in"
                                                                        className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#ea580c] transition-colors font-medium"
                                                                    >
                                                                        <Mail size={14} className="text-[#ea580c]" />
                                                                        <span>uba@srit.ac.in</span>
                                                                    </a>
                                                                    <a
                                                                        href="tel:919989441990"
                                                                        className="inline-flex items-center gap-1.5 text-[#ea580c] font-bold hover:underline"
                                                                    >
                                                                        <Phone size={14} />
                                                                        <span>+91-9989441990</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* === Bottom UBA Visual Carousel Slider === */}
                                <div className="pt-4 pb-2 space-y-3 w-full max-w-full overflow-hidden">
                                    {(() => {
                                        const ubaGalleryList = [
                                            { url: '/saro2.jpeg', title: 'Village Community Interaction & Baseline Survey in Adopted Villages' },
                                            { url: '/saro3.jpeg', title: 'Solar Energy & Renewable Technology Demonstration Workshop' },
                                            { url: '/saro1.jpeg', title: 'Participatory Rural Appraisal (PRA) with Village Elders & Youth' },
                                            { url: '/saro4.jpeg', title: 'Rural Cleanliness, Water Quality & Health Awareness Camp' },
                                        ];

                                        const maxVisible = 3;
                                        const totalSlides = Math.max(1, ubaGalleryList.length - maxVisible + 1);

                                        return (
                                            <div className="space-y-3 w-full max-w-full overflow-hidden">
                                                <div className="flex items-center justify-between px-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="h-4 w-1.5 rounded-full bg-[#FF5422]" />
                                                        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-black text-neutral-900">
                                                            Unnat Bharat Abhiyan Visual Highlights & Field Activities
                                                        </h3>
                                                    </div>
                                                    <span className="text-xs font-bold text-[#FF5422] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                                                        {ubaGalleryList.length} Photographs
                                                    </span>
                                                </div>

                                                {/* Contained Slider Viewport with Internal Controls */}
                                                <div className="relative overflow-hidden rounded-xl sm:rounded-xl border border-neutral-200 bg-white p-2.5 sm:p-4 shadow-xs w-full">
                                                    <div
                                                        className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out w-full"
                                                        style={{
                                                            transform: `translateX(-${ubaSliderIndex * (100 / maxVisible)}%)`
                                                        }}
                                                    >
                                                        {ubaGalleryList.map((item, gIdx) => (
                                                            <div
                                                                key={gIdx}
                                                                onClick={() => setSelectedUbaImage(item)}
                                                                className="shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-xs hover:shadow-md hover:border-[#FF5422]/60 transition-all duration-300 group/img flex flex-col cursor-pointer"
                                                            >
                                                                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                                                                    <img
                                                                        src={item.url}
                                                                        alt={item.title}
                                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                                                        loading="lazy"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
                                                                        <span className="text-white text-xs font-medium line-clamp-2">
                                                                            {item.title}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="p-3 bg-white flex-1 flex flex-col justify-between">
                                                                    <p className="text-xs font-bold text-neutral-800 line-clamp-2 leading-snug">
                                                                        {item.title}
                                                                    </p>
                                                                    <span className="text-[11px] text-[#FF5422] font-semibold mt-2 flex items-center gap-1">
                                                                        Click to expand <ExternalLink size={11} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Internal Previous Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setUbaSliderIndex((prev) => Math.max(0, prev - 1))}
                                                        disabled={ubaSliderIndex === 0}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Previous Slide"
                                                    >
                                                        <ChevronLeft size={18} />
                                                    </button>

                                                    {/* Internal Next Arrow Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setUbaSliderIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
                                                        disabled={ubaSliderIndex >= totalSlides - 1}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 grid place-items-center bg-white/95 hover:bg-[#FF5422] text-neutral-800 hover:text-white disabled:opacity-0 disabled:pointer-events-none rounded-full border border-neutral-200 shadow-md transition-all cursor-pointer z-10"
                                                        aria-label="Next Slide"
                                                    >
                                                        <ChevronRight size={18} />
                                                    </button>
                                                </div>

                                                {/* Pagination Dots */}
                                                {totalSlides > 1 && (
                                                    <div className="flex items-center justify-center gap-1.5 pt-1">
                                                        {Array.from({ length: totalSlides }).map((_, dotIdx) => (
                                                            <button
                                                                key={dotIdx}
                                                                type="button"
                                                                onClick={() => setUbaSliderIndex(dotIdx)}
                                                                className={`h-2 rounded-full transition-all cursor-pointer ${
                                                                    ubaSliderIndex === dotIdx
                                                                        ? 'w-6 bg-[#FF5422]'
                                                                        : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                                                                }`}
                                                                aria-label={`Go to slide ${dotIdx + 1}`}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Full Image High-Res Lightbox Modal */}
                                {selectedUbaImage && (
                                    <div
                                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
                                        onClick={() => setSelectedUbaImage(null)}
                                    >
                                        <div
                                            className="relative w-full w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 border-b border-neutral-800">
                                                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                                                    {selectedUbaImage.title}
                                                </h4>
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedUbaImage(null)}
                                                    className="w-8 h-8 grid place-items-center rounded-lg bg-white/10 hover:bg-[#FF5422] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                                                    aria-label="Close Preview"
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                            <div className="relative w-full max-h-[75vh] flex items-center justify-center p-2 bg-black/60 overflow-hidden">
                                                <img
                                                    src={selectedUbaImage.url}
                                                    alt={selectedUbaImage.title}
                                                    className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-lg shadow-lg"
                                                loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (activeSection.id === 'ek-bharat-shreshtha-bharat' || activeSection.id === 'ebsb') ? (
                            <div className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full overflow-hidden">
                                {/* === Centered Official Header with Small Crest Container === */}
                                <div className="w-full bg-white border border-neutral-200/90 rounded-xl overflow-hidden shadow-2xs">
                                    <div className="w-full bg-[#f05a22] text-white py-2 px-4 text-center font-bold text-sm sm:text-base font-serif tracking-wide">
                                        Ek Bharat Shreshtha Bharat
                                    </div>
                                    <div className="flex flex-col items-center justify-center py-2 px-4 bg-white">
                                        <img
                                            src="/ebsb_logo.png"
                                            alt="Ek Bharat Shreshtha Bharat - SRIT"
                                            className="h-10 sm:h-12 w-auto max-w-[220px] sm:max-w-[280px] object-contain drop-shadow-2xs transition-transform hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://www.srit.ac.in/wp-content/uploads/2021/08/Ekbarath-SRIT.png';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* === 6 Dark Collapsible Accordions (Matching Official Website Layout) === */}
                                <div className="w-full max-w-full rounded-xl sm:rounded-xl border border-[#1e2c3f] bg-[#121c2d] overflow-hidden shadow-xs divide-y divide-[#1e2c3f]">
                                    {[
                                        { id: 'vision', label: 'Our Vision' },
                                        { id: 'mission', label: 'Our Mission' },
                                        { id: 'objectives', label: 'Objectivies' },
                                        { id: 'team', label: 'Team' },
                                        { id: 'events', label: 'Events Report' },
                                        { id: 'contact', label: 'Contact' },
                                    ].map((item) => {
                                        const isOpen = !!openEbsbAccordions[item.id];
                                        return (
                                            <div key={item.id} className="w-full max-w-full">
                                                {/* Accordion Row Header */}
                                                <button
                                                    type="button"
                                                    onClick={() => toggleEbsbAccordion(item.id)}
                                                    className="w-full bg-[#121c2d] hover:bg-[#18253a] text-[#f05a22] hover:text-[#ff7a45] px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm md:text-base font-bold transition-colors cursor-pointer select-none text-left tracking-wide"
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-[#f05a22] transition-transform duration-200 shrink-0 ${
                                                            isOpen ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>

                                                {/* Accordion Content Body */}
                                                {isOpen && (
                                                    <div className="p-3 sm:p-5 md:p-6 bg-white text-neutral-800 animate-fadeIn border-t border-neutral-200 w-full max-w-full overflow-hidden">
                                                        {/* 1. Our Vision */}
                                                        {item.id === 'vision' && (
                                                            <div className="space-y-4">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    VISION:
                                                                </h4>
                                                                <ul className="space-y-3 text-neutral-700 text-xs sm:text-sm leading-relaxed list-disc list-outside pl-5 text-justify">
                                                                    <li>
                                                                        To celebrate the idea of India as a nation wherein different cultural units across varied geographies coalesce and interact with each other, this glorious manifestation of diverse languages, cuisine, music, dance, theatre, movies & films, handicrafts, sports, literature, festivals, painting, sculpture etc. Will enable people to imbibe the innate chord of binding and brotherhood.
                                                                    </li>
                                                                    <li>
                                                                        To make our people aware about the seamless integral hull of the Modern Indian State spread across a vast landmass on whose firm foundations, the geo-political strength of the country is ensured to benefit one and all.
                                                                    </li>
                                                                    <li>
                                                                        To impress upon people at large about the increasing inter-connectedness between the constituents of various cultures and traditions, which is so vital for the spirit of nation building.
                                                                    </li>
                                                                    <li>
                                                                        To ease out the feeling of ‘stranger in a strange land’ among the people of different states, cultures and traditions living in various states of India.
                                                                    </li>
                                                                    <li>
                                                                        To induce a sense of responsibility & ownership for the nation as a whole through these close cross-cultural interactions as it intends to build up the inter-dependence matrix unequivocally.
                                                                    </li>
                                                                    <li>
                                                                        To celebrate the diversity as well as unity of the Nation at the same time.
                                                                    </li>
                                                                    <li>
                                                                        To generate the vibrance of understanding & appreciation amongst the people and forge mutual bonding to securing an enriched value system of unity in the nation.
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {/* 2. Our Mission */}
                                                        {item.id === 'mission' && (
                                                            <div className="space-y-4">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    MISSION:
                                                                </h4>
                                                                <ul className="space-y-3 text-neutral-700 text-xs sm:text-sm leading-relaxed list-disc list-outside pl-5 text-justify">
                                                                    <li>
                                                                        <strong className="text-neutral-900">To CELEBRATE</strong> the Unity in Diversity of our Nation and to maintain and strengthen the fabric of traditionally existing emotional bonds between the people of our Country;
                                                                    </li>
                                                                    <li>
                                                                        <strong className="text-neutral-900">To PROMOTE</strong> the spirit of national integration through a deep and structured engagement between all Indian States and Union Territories through a year-long planned engagement between States;
                                                                    </li>
                                                                    <li>
                                                                        <strong className="text-neutral-900">To SHOWCASE</strong> the rich heritage and culture, customs and traditions of either State for enabling people to understand and appreciate the diversity that is India, thus fostering a sense of common identity.
                                                                    </li>
                                                                    <li>
                                                                        <strong className="text-neutral-900">TO ESTABLISH</strong> long-term engagements and,
                                                                    </li>
                                                                    <li>
                                                                        <strong className="text-neutral-900">TO CREATE</strong> an environment which promotes learning between States by sharing best practices and experiences.
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {/* 3. Objectivies */}
                                                        {item.id === 'objectives' && (
                                                            <div className="space-y-4">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    OBJECTIVES:
                                                                </h4>
                                                                <ul className="space-y-3 text-neutral-700 text-xs sm:text-sm leading-relaxed list-disc list-outside pl-5 text-justify">
                                                                    <li>
                                                                        To celebrate the unity in diversity of our nation and to maintain and strengthen the fabric of traditionally existing emotional bonds between the people of our country;
                                                                    </li>
                                                                    <li>
                                                                        To promote the spirit of national integration through a deep and structured engagement between all states and union territories through a year-long planned engagement between states;
                                                                    </li>
                                                                    <li>
                                                                        To showcase the rich heritage and culture, customs and traditions of either state for enabling people to understand and appreciate the diversity that is India, thus fostering a sense of common identity;
                                                                    </li>
                                                                    <li>
                                                                        To establish long term engagements;
                                                                    </li>
                                                                    <li>
                                                                        To create an environment this promotes learning between states by sharing best practices and experiences.
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {/* 4. Team */}
                                                        {item.id === 'team' && (
                                                            <div className="space-y-5 w-full">
                                                                <div className="space-y-3">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                        TEAM:
                                                                    </h4>
                                                                    <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs w-full">
                                                                        <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                                            <tbody className="divide-y divide-neutral-200">
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">1</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">Prof. S.Vasundra</strong>, DIRAP , JNTUA, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">2</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">Dr. G. BalaKrishna</strong>, Principal, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">3</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">All HOD’s of SRIT College</strong>, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">4</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22] font-bold">Mr. G.Chinna Pullaiah</strong>, Assistant Professor in CSE & Convener for Community Service Cell, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-3">
                                                                    <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                        Department In-Charges:
                                                                    </h4>
                                                                    <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs w-full">
                                                                        <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                                            <tbody className="divide-y divide-neutral-200">
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">1</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mrs. M. Soumya</strong>, Assistant Professor in CSE & Co-Coordinator, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">2</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. T.Aravind Babu</strong>, Assistant Professor in EEE, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">3</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. P.Venkata Suneel</strong>, Assistant Professor in CE, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">4</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. B.Subba Reddy</strong>, Assistant Professor in ME, SRIT College, Ananthapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">5</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. Raj Kullay Reddy</strong>, Assistant Professor in ECE, SRIT College, Anantapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                    <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">6</td>
                                                                                    <td className="px-5 py-3 text-neutral-800">
                                                                                        <strong className="text-[#f05a22]">Mr. K. Satish Kumar</strong>, Assistant Professor in H & S, SRIT College, Anantapuramu.
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 5. Events Report */}
                                                        {item.id === 'events' && (
                                                            <div className="space-y-4 w-full">
                                                                <h4 className="text-xs sm:text-sm font-bold text-[#f05a22] uppercase tracking-wide">
                                                                    EVENTS REPORT:
                                                                </h4>
                                                                <div className="space-y-3">
                                                                    {[
                                                                        { year: '2023 – 2024', title: 'Unity in Diversity Cultural Festival & Inter-State Heritage Showcase', desc: 'Organized state-wide heritage exhibits, patriotic cultural programs, and regional language engagement celebrating national cohesion.' },
                                                                        { year: '2022 – 2023', title: 'Bhasha Sangam & Cross-State Folk Art Demonstrations', desc: 'Interactive language learning bootcamps introducing students to diverse Indian dialects, literature, and regional artistic expressions.' },
                                                                        { year: '2021 – 2022', title: 'Azadi Ka Amrit Mahotsav EBSB Special Cultural Conclave', desc: 'Virtual webinars and presentation series exploring shared cultural bonds, historical monuments, and folk customs of paired states.' },
                                                                        { year: '2020 – 2021', title: 'National Integration Online Quiz & Essay Series', desc: 'Academic and cultural competitions highlighting India’s diverse geographical landmarks, traditions, and freedom struggle heritage.' },
                                                                        { year: '2019 – 2020', title: 'Inaugural EBSB State Exchange & Cultural Harmony Activities', desc: 'Conducted inaugural state-pairing cultural seminars, student art workshops, and traditional music/dance celebrations.' }
                                                                    ].map((evt, eIdx) => (
                                                                        <div key={eIdx} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-orange-50/30 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                                                            <div className="space-y-1">
                                                                                <div className="flex items-center gap-2">
                                                                                    <span className="text-xs font-bold text-[#FF5422] bg-orange-100 px-2.5 py-0.5 rounded-full">
                                                                                        {evt.year}
                                                                                    </span>
                                                                                    <h5 className="font-bold text-xs sm:text-sm text-neutral-900">
                                                                                        {evt.title}
                                                                                    </h5>
                                                                                </div>
                                                                                <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                                                                                    {evt.desc}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 6. Contact */}
                                                        {item.id === 'contact' && (
                                                            <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 w-full space-y-3">
                                                                <div>
                                                                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ea580c] font-bold text-[11px] uppercase mb-1">
                                                                        EBSB Coordinator
                                                                    </div>
                                                                    <h4 className="font-bold text-base sm:text-lg text-neutral-900">
                                                                        Mrs. Soumya, <span className="text-xs sm:text-sm font-normal text-neutral-600">M.Tech</span>
                                                                    </h4>
                                                                    <p className="text-xs font-semibold text-[#f05a22]">
                                                                        Assistant Professor, Department of CSE
                                                                    </p>
                                                                </div>
                                                                <div className="text-xs sm:text-sm text-neutral-700 space-y-1">
                                                                    <p>Srinivasa Ramanujan Institute of Technology,</p>
                                                                    <p>Rotarypuram, Anantapuramu-515701.</p>
                                                                </div>
                                                                <div className="pt-3 border-t border-neutral-200 flex flex-wrap gap-4 text-xs sm:text-sm">
                                                                    <a
                                                                        href="mailto:soumya.cse@srit.ac.in"
                                                                        className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-[#ea580c] transition-colors font-medium"
                                                                    >
                                                                        <Mail size={14} className="text-[#ea580c]" />
                                                                        <span>soumya.cse@srit.ac.in</span>
                                                                    </a>
                                                                    <a
                                                                        href="tel:918985086080"
                                                                        className="inline-flex items-center gap-1.5 text-[#ea580c] font-bold hover:underline"
                                                                    >
                                                                        <Phone size={14} />
                                                                        <span>91-8985086080</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* === Bottom EBSB Visual Carousel Slider === */}
                                <div className="pt-4 pb-2 space-y-3 w-full max-w-full overflow-hidden">
                                    {(() => {
                                        const ebsbGalleryList = [
                                            { url: '/saro1.jpeg', title: 'Ek Bharat Shreshtha Bharat Cultural Harmony Assembly' },
                                            { url: '/saro2.jpeg', title: 'Traditional Attire & Paired State Heritage Presentation' },
                                            { url: '/saro3.jpeg', title: 'National Integration Day Unity Celebrations' },
                                            { url: '/saro4.jpeg', title: 'Bhasha Sangam Inter-State Linguistic Workshop' }
                                        ];
                                        return (
                                            <>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <span className="h-4 w-1.5 rounded-full bg-[#f05a22]" />
                                                        <h3 className="font-serif text-sm sm:text-base font-bold text-neutral-900 tracking-wide">
                                                            EBSB Cultural Events & Celebrations Gallery
                                                        </h3>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <button
                                                            type="button"
                                                            onClick={() => setEbsbSliderIndex((prev) => Math.max(0, prev - 1))}
                                                            disabled={ebsbSliderIndex === 0}
                                                            className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-[#f05a22] hover:text-white disabled:opacity-30 disabled:hover:bg-neutral-100 disabled:hover:text-neutral-600 grid place-items-center transition-colors cursor-pointer"
                                                            aria-label="Previous Slide"
                                                        >
                                                            <ChevronLeft size={16} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setEbsbSliderIndex((prev) => Math.min(ebsbGalleryList.length - 1, prev + 1))}
                                                            disabled={ebsbSliderIndex >= ebsbGalleryList.length - 1}
                                                            className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-[#f05a22] hover:text-white disabled:opacity-30 disabled:hover:bg-neutral-100 disabled:hover:text-neutral-600 grid place-items-center transition-colors cursor-pointer"
                                                            aria-label="Next Slide"
                                                        >
                                                            <ChevronRight size={16} />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                                    {ebsbGalleryList.map((photo, pIdx) => (
                                                        <div
                                                            key={pIdx}
                                                            onClick={() => setSelectedEbsbImage(photo)}
                                                            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/90 shadow-2xs hover:shadow-md hover:border-[#f05a22] transition-all cursor-pointer"
                                                        >
                                                            <img
                                                                src={photo.url}
                                                                alt={photo.title}
                                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                                                onError={(e) => {
                                                                    (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                                }}
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                                                                <div className="flex items-center justify-between text-white">
                                                                    <span className="text-[11px] font-bold truncate pr-2">{photo.title}</span>
                                                                    <ZoomIn size={14} className="text-orange-400 shrink-0" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>

                                {/* Full Image Lightbox Modal */}
                                {selectedEbsbImage && (
                                    <div
                                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
                                        onClick={() => setSelectedEbsbImage(null)}
                                    >
                                        <div
                                            className="relative w-full w-full bg-[#121c2d] rounded-xl border border-[#1e2c3f] overflow-hidden shadow-2xl animate-scaleUp"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="p-3 sm:p-4 bg-[#18253a] border-b border-[#1e2c3f] flex items-center justify-between text-white">
                                                <h4 className="font-bold text-xs sm:text-sm text-neutral-200">
                                                    {selectedEbsbImage.title}
                                                </h4>
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedEbsbImage(null)}
                                                    className="w-8 h-8 grid place-items-center rounded-lg bg-white/10 hover:bg-[#FF5422] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                                                    aria-label="Close Preview"
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                            <div className="relative w-full max-h-[75vh] flex items-center justify-center p-2 bg-black/60 overflow-hidden">
                                                <img
                                                    src={selectedEbsbImage.url}
                                                    alt={selectedEbsbImage.title}
                                                    className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-lg shadow-lg"
                                                loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (activeSection.id === 'viksit-bharat-2047' || activeSection.id === 'viksit-bharat') ? (
                            <div className="space-y-4 sm:space-y-5 w-full min-w-0 max-w-full overflow-hidden">
                                {/* === Centered Official Header with Banner Image === */}
                                <div className="w-full bg-white border border-neutral-200/90 rounded-xl overflow-hidden shadow-2xs">
                                    <div className="w-full bg-[#f05a22] text-white py-2 px-4 text-center font-bold text-sm sm:text-base font-serif tracking-wide">
                                        Viksit Bharat @2047
                                    </div>
                                    <div className="flex flex-col items-center justify-center py-2 px-4 bg-white">
                                        <img
                                            src="/viksit_bharat_2047.jpg"
                                            alt="Viksit Bharat @2047 - SRIT"
                                            className="h-12 sm:h-14 w-auto max-w-[280px] sm:max-w-[340px] object-contain drop-shadow-2xs transition-transform hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://www.srit.ac.in/wp-content/uploads/2023/12/viksit-bharat-2047.jpg';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* === 7 Dark Collapsible Accordions (Matching Official Website Layout) === */}
                                <div className="w-full max-w-full rounded-xl sm:rounded-xl border border-[#1e2c3f] bg-[#121c2d] overflow-hidden shadow-xs divide-y divide-[#1e2c3f]">
                                    {[
                                        { id: 'vision', label: 'Vision' },
                                        { id: 'mission', label: 'Mission' },
                                        { id: 'goals', label: 'Goals' },
                                        { id: 'sop', label: 'Standard Operating Procedure' },
                                        { id: 'registration', label: 'Registration' },
                                        { id: 'team', label: 'Team' },
                                        { id: 'contact', label: 'Contact' },
                                    ].map((item) => {
                                        const isOpen = !!openViksitAccordions[item.id];
                                        return (
                                            <div key={item.id} className="w-full max-w-full">
                                                {/* Accordion Row Header */}
                                                <button
                                                    type="button"
                                                    onClick={() => toggleViksitAccordion(item.id)}
                                                    className="w-full bg-[#121c2d] hover:bg-[#18253a] text-[#f05a22] hover:text-[#ff7a45] px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm md:text-base font-bold transition-colors cursor-pointer select-none text-left tracking-wide"
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={18}
                                                        className={`text-[#f05a22] transition-transform duration-200 shrink-0 ${
                                                            isOpen ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>

                                                {/* Accordion Content Body */}
                                                {isOpen && (
                                                    <div className="p-3 sm:p-5 md:p-6 bg-white text-neutral-800 animate-fadeIn border-t border-neutral-200 w-full max-w-full overflow-hidden">
                                                        {/* 1. Vision */}
                                                        {item.id === 'vision' && (
                                                            <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed text-justify">
                                                                <h4 className="font-bold text-xs sm:text-sm text-[#f05a22] uppercase tracking-wide">
                                                                    VISION:
                                                                </h4>
                                                                <p>
                                                                    <strong className="text-neutral-900 font-bold">Viksit Bharat @2047:</strong> The Government of India aspires to transform the nation into a developed entity by the year 2047, marking the commemoration of its 100th year of independence. This visionary goal encapsulates multifaceted dimensions of advancement, spanning economic prosperity, social development, environmental sustainability, and the promotion of effective governance.
                                                                </p>
                                                            </div>
                                                        )}

                                                        {/* 2. Mission */}
                                                        {item.id === 'mission' && (
                                                            <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed text-justify">
                                                                <h4 className="font-bold text-xs sm:text-sm text-[#f05a22] uppercase tracking-wide">
                                                                    MISSION:
                                                                </h4>
                                                                <p>
                                                                    Viksit Bharat @2047 mission is to lead India to full development by 2047, the centenary of independence. We strive for economic growth, social progress, environmental sustainability, and effective governance. Empowering the youth, fostering innovation, and building a resilient, sustainable nation — together, let’s shape a developed India for generations to come.
                                                                </p>
                                                            </div>
                                                        )}

                                                        {/* 3. Goals */}
                                                        {item.id === 'goals' && (
                                                            <div className="space-y-4">
                                                                <h4 className="font-bold text-xs sm:text-sm text-[#f05a22] uppercase tracking-wide">
                                                                    GOALS of Viksit Bharat @2047:
                                                                </h4>
                                                                <div className="grid sm:grid-cols-2 gap-4">
                                                                    {[
                                                                        {
                                                                            title: 'Economic Prosperity',
                                                                            points: [
                                                                                'Foster sustained and inclusive economic growth, ensuring job creation and entrepreneurship opportunities across diverse sectors.',
                                                                                'Develop a robust and competitive economic framework that positions India as a global leader in innovation and industry.'
                                                                            ]
                                                                        },
                                                                        {
                                                                            title: 'Social Advancement',
                                                                            points: [
                                                                                'Enhance education and skill development to empower every individual, fostering a knowledgeable and skilled workforce.',
                                                                                'Promote social inclusivity, gender equality, and diversity, creating a harmonious and equitable society.'
                                                                            ]
                                                                        },
                                                                        {
                                                                            title: 'Environmental Sustainability',
                                                                            points: [
                                                                                'Implement sustainable practices to conserve natural resources and protect the environment.',
                                                                                'Encourage the adoption of green technologies and eco-friendly initiatives for a cleaner, greener India.'
                                                                            ]
                                                                        },
                                                                        {
                                                                            title: 'Effective Governance',
                                                                            points: [
                                                                                'Strengthen governance mechanisms, emphasizing transparency, accountability, and citizen participation.',
                                                                                'Utilize technology for efficient and citizen-centric public services, ensuring a responsive and accountable government.'
                                                                            ]
                                                                        },
                                                                        {
                                                                            title: 'Youth Empowerment',
                                                                            points: [
                                                                                'Engage and empower the youth through educational initiatives, skill development programs, and opportunities for active participation in nation-building.',
                                                                                'Foster a culture of innovation, creativity, and critical thinking, preparing the youth to meet the challenges of the future.'
                                                                            ]
                                                                        },
                                                                        {
                                                                            title: 'Global Recognition',
                                                                            points: [
                                                                                'Position India as a respected global player through diplomatic initiatives, international collaborations, and contributions to global problem-solving.',
                                                                                'Enhance India’s standing in areas such as science, technology, culture, and sports, showcasing our nation’s diverse strengths on the world stage.'
                                                                            ]
                                                                        }
                                                                    ].map((goal, gIdx) => (
                                                                        <div key={gIdx} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/60 space-y-2">
                                                                            <h5 className="font-bold text-xs sm:text-sm text-neutral-900 flex items-center gap-2">
                                                                                <span className="w-2 h-2 rounded-full bg-[#f05a22]" />
                                                                                <span>{goal.title}</span>
                                                                            </h5>
                                                                            <ul className="space-y-1.5 text-neutral-600 text-xs leading-relaxed list-disc list-outside pl-5">
                                                                                {goal.points.map((pt, pIdx) => (
                                                                                    <li key={pIdx}>{pt}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 4. Standard Operating Procedure */}
                                                        {item.id === 'sop' && (
                                                            <div className="space-y-4">
                                                                <h4 className="font-bold text-xs sm:text-sm text-[#f05a22] uppercase tracking-wide">
                                                                    Standard Operating Procedure:
                                                                </h4>
                                                                <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                                                                    <div className="space-y-1">
                                                                        <span className="text-xs font-bold uppercase tracking-wider text-[#f05a22]">
                                                                            Official Guideline Document
                                                                        </span>
                                                                        <h5 className="text-sm sm:text-base font-bold text-neutral-900">
                                                                            SOP for Viksit Bharat @2047
                                                                        </h5>
                                                                        <p className="text-xs text-neutral-600">
                                                                            Step-by-step institutional standard operating procedure for student participation and idea submission.
                                                                        </p>
                                                                    </div>
                                                                    <a
                                                                        href="https://drive.google.com/file/d/1gz3y3CGyCKJ5LRQI7zC6vwYgDd8DB57T/view?usp=sharing"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f05a22] hover:bg-[#d04515] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors shrink-0"
                                                                    >
                                                                        <FileText size={16} />
                                                                        <span>Open SOP Document</span>
                                                                        <ExternalLink size={14} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 5. Registration & Idea Sharing */}
                                                        {item.id === 'registration' && (
                                                            <div className="space-y-4">
                                                                <h4 className="font-bold text-xs sm:text-sm text-[#f05a22] uppercase tracking-wide">
                                                                    Registration & Idea Submission:
                                                                </h4>
                                                                <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/60 w-full space-y-3">
                                                                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                                                                        <span className="font-bold text-neutral-900">Register:</span>
                                                                        <span className="text-neutral-400">→</span>
                                                                        <a
                                                                            href="https://auth.mygov.in/user/login?destination=oauth2/authorize"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="font-bold text-[#f05a22] hover:underline inline-flex items-center gap-1.5"
                                                                        >
                                                                            <span>Registration with Viksit Bharat @2047</span>
                                                                            <ExternalLink size={13} />
                                                                        </a>
                                                                    </div>
                                                                    <div className="pt-2">
                                                                        <span className="block font-bold text-neutral-900 text-xs sm:text-sm mb-2">
                                                                            Share your ideas: →
                                                                        </span>
                                                                        <a
                                                                            href="https://auth.mygov.in/user/login?destination=oauth2/authorize"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="inline-block group rounded-xl overflow-hidden border border-neutral-200 shadow-2xs hover:shadow-md transition-shadow"
                                                                        >
                                                                            <img
                                                                                src="/viksit_bharat_share_ideas.jpeg"
                                                                                alt="Viksit Bharat @2047 Share Ideas"
                                                                                className="max-w-[260px] sm:max-w-[300px] w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                                                                                onError={(e) => {
                                                                                    (e.target as HTMLImageElement).src = 'https://www.srit.ac.in/wp-content/uploads/2023/12/Viksit-Bharat-2047-share-ideas.jpeg';
                                                                                }}
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 6. Team */}
                                                        {item.id === 'team' && (
                                                            <div className="space-y-4">
                                                                <h4 className="font-bold text-xs sm:text-sm text-[#f05a22] uppercase tracking-wide">
                                                                    TEAM:
                                                                </h4>
                                                                <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-2xs w-full">
                                                                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                                        <tbody className="divide-y divide-neutral-200">
                                                                            <tr className="hover:bg-orange-50/30 transition-colors">
                                                                                <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">1</td>
                                                                                <td className="px-5 py-3 text-neutral-800">
                                                                                    <strong className="text-[#f05a22] font-bold">Dr. U. Srinivas</strong>, Vice Principal, SRIT College, Ananthapuramu.
                                                                                </td>
                                                                            </tr>
                                                                            <tr className="hover:bg-orange-50/30 transition-colors bg-neutral-50/30">
                                                                                <td className="w-14 px-4 py-3 font-bold text-neutral-900 border-r border-neutral-200 text-center bg-neutral-50/50">2</td>
                                                                                <td className="px-5 py-3 text-neutral-800">
                                                                                    <strong className="text-[#f05a22] font-bold">Dr. B. Anjaneyulu</strong>, Convener of IIC, SRIT College, Ananthapuramu.
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* 7. Contact */}
                                                        {item.id === 'contact' && (
                                                            <div className="space-y-4">
                                                                <h4 className="font-bold text-xs sm:text-sm text-[#f05a22] uppercase tracking-wide">
                                                                    Contact Us:
                                                                </h4>
                                                                <div className="grid sm:grid-cols-2 gap-4 w-full">
                                                                    <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 space-y-2">
                                                                        <div>
                                                                            <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ea580c] font-bold text-[11px] uppercase mb-1">
                                                                                Vice Principal
                                                                            </div>
                                                                            <h5 className="font-bold text-base text-neutral-900">
                                                                                Dr. U. Srinivas, <span className="text-xs text-neutral-600 font-normal">M.Tech, Ph.D</span>
                                                                            </h5>
                                                                        </div>
                                                                        <div className="text-xs text-neutral-600 space-y-0.5">
                                                                            <p>Vice Principal</p>
                                                                            <p>Srinivasa Ramanujan Institute of Technology,</p>
                                                                            <p>Rotarypuram, Anantapuramu-515701.</p>
                                                                        </div>
                                                                        <div className="pt-2 border-t border-neutral-200">
                                                                            <a
                                                                                href="tel:917780333537"
                                                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f05a22] hover:underline"
                                                                            >
                                                                                <Phone size={13} />
                                                                                <span>+91-7780333537</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>

                                                                    <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 space-y-2">
                                                                        <div>
                                                                            <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ea580c] font-bold text-[11px] uppercase mb-1">
                                                                                Convener, IIC
                                                                            </div>
                                                                            <h5 className="font-bold text-base text-neutral-900">
                                                                                Dr. B. Anjaneyulu, <span className="text-xs text-neutral-600 font-normal">M.Tech, Ph.D</span>
                                                                            </h5>
                                                                        </div>
                                                                        <div className="text-xs text-neutral-600 space-y-0.5">
                                                                            <p>Convener, IIC</p>
                                                                            <p>Srinivasa Ramanujan Institute of Technology,</p>
                                                                            <p>Rotarypuram, Anantapuramu-515701.</p>
                                                                        </div>
                                                                        <div className="pt-2 border-t border-neutral-200">
                                                                            <a
                                                                                href="tel:919440845546"
                                                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f05a22] hover:underline"
                                                                            >
                                                                                <Phone size={13} />
                                                                                <span>+91-9440845546</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* === Key Statistics Cards === */}
                                {activeSection.stats && activeSection.stats.length > 0 && (
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                                        {activeSection.stats.map((st, idx) => (
                                            <div
                                                key={idx}
                                                className="rounded-xl border border-neutral-200/80 bg-white p-4 shadow-xs hover:border-[#FF5422]/40 transition-colors"
                                            >
                                                <div className="font-serif text-2xl font-black text-[#FF5422]">
                                                    {st.value}
                                                </div>
                                                <div className="mt-1 text-xs font-bold text-neutral-900">
                                                    {st.label}
                                                </div>
                                                <div className="mt-0.5 text-[11px] text-neutral-500 leading-normal">
                                                    {st.desc}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* === Aim / Overview Description Card === */}
                                <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-xs space-y-3">
                                    <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-black text-neutral-900 tracking-tight">
                                            About {activeSection.title}
                                        </h2>
                                    </div>

                                    <div className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-neutral-700 space-y-3">
                                        {activeSection.aim || (
                                            <p className="text-left sm:text-justify">
                                                The <strong className="text-[#FF5422] font-bold">{activeSection.title}</strong> at Srinivasa Ramanujan Institute of Technology is dedicated to community welfare, active student volunteering, and national development.
                                            </p>
                                        )}
                                    </div>

                                    {activeSection.motto && (
                                        <div className="mt-4 p-3.5 rounded-xl bg-orange-50/80 border border-orange-200 flex items-center gap-3">
                                            <span className="text-xs font-black uppercase tracking-wider text-[#FF5422]">Motto:</span>
                                            <span className="font-serif font-black text-sm sm:text-base text-neutral-900">
                                                "{activeSection.motto}"
                                            </span>
                                        </div>
                                    )}

                                    {activeSection.pledge && (
                                        <div className="mt-3 p-4 rounded-xl bg-neutral-900 text-white border border-neutral-800 space-y-2">
                                            <div className="flex items-center gap-2 text-orange-400 text-xs font-black uppercase tracking-wider">
                                                <Shield size={14} />
                                                <span>Official NCC Cadet Pledge</span>
                                            </div>
                                            <p className="text-xs sm:text-[13px] text-neutral-300 italic leading-relaxed">
                                                "{activeSection.pledge}"
                                            </p>
                                        </div>
                                    )}
                                </div>

                        {/* === Vision & Mission Two-Column Cards === */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Vision Card */}
                            <div className="rounded-xl border border-neutral-200/80 bg-white p-5 shadow-xs space-y-2.5">
                                <div className="flex items-center gap-2 text-[#FF5422]">
                                    <Eye size={18} />
                                    <h3 className="font-serif text-base sm:text-lg font-black text-neutral-900">
                                        Our Vision
                                    </h3>
                                </div>
                                <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    {activeSection.vision}
                                </div>
                            </div>

                            {/* Mission Card */}
                            <div className="rounded-xl border border-neutral-200/80 bg-white p-5 shadow-xs space-y-2.5">
                                <div className="flex items-center gap-2 text-[#FF5422]">
                                    <Target size={18} />
                                    <h3 className="font-serif text-base sm:text-lg font-black text-neutral-900">
                                        Our Mission
                                    </h3>
                                </div>
                                <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                                    {activeSection.mission}
                                </div>
                            </div>
                        </div>

                        {/* === Objectives / Goals / Cardinal Principles === */}
                        {(activeSection.objectives || activeSection.goals || activeSection.principles) && (
                            <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-xs space-y-4">
                                <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                    <h2 className="font-serif text-xl sm:text-2xl font-black text-neutral-900 flex items-center gap-2">
                                        <Compass size={20} className="text-[#FF5422]" />
                                        <span>
                                            {activeSection.principles ? 'Fundamental Principles & Objectives' : activeSection.goals ? 'Strategic Goals & Objectives' : 'Core Objectives'}
                                        </span>
                                    </h2>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {(activeSection.principles || activeSection.goals || activeSection.objectives || []).map((point, pIdx) => (
                                        <div
                                            key={pIdx}
                                            className="flex items-start gap-3 p-3.5 rounded-lg border border-neutral-100 bg-neutral-50/70 hover:bg-orange-50/30 transition-colors"
                                        >
                                            <CheckCircle2 size={16} className="text-[#FF5422] shrink-0 mt-0.5" />
                                            <span className="text-xs sm:text-[13.5px] text-neutral-800 leading-relaxed font-medium">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* === Standard Operating Procedure (For Viksit Bharat / Specific Cells) === */}
                        {activeSection.sopPoints && (
                            <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-xs space-y-4">
                                <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                    <h2 className="font-serif text-xl sm:text-2xl font-black text-neutral-900 flex items-center gap-2">
                                        <FileText size={20} className="text-[#FF5422]" />
                                        <span>Standard Operating Procedure (SOP)</span>
                                    </h2>
                                </div>

                                <div className="space-y-2.5">
                                    {activeSection.sopPoints.map((step, sIdx) => (
                                        <div
                                            key={sIdx}
                                            className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/60 flex items-start gap-3"
                                        >
                                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#FF5422] text-white text-xs font-black">
                                                {sIdx + 1}
                                            </span>
                                            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* === Registration Card (For Viksit Bharat / Portal Links) === */}
                        {activeSection.registrationInfo && (
                            <div className="rounded-xl border-2 border-orange-200 bg-white p-5 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="space-y-2">
                                    <span className="text-[11px] font-bold text-[#FF5422] uppercase tracking-wider block">
                                        Official Portal Registration
                                    </span>
                                    <h3 className="font-serif text-lg sm:text-xl font-black text-neutral-900">
                                        {activeSection.registrationInfo.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-neutral-600 w-full leading-relaxed">
                                        {activeSection.registrationInfo.description}
                                    </p>
                                </div>
                                <a
                                    href={activeSection.registrationInfo.linkUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF5422] hover:bg-[#e04515] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/30 transition-all hover:scale-[1.02]"
                                >
                                    <span>{activeSection.registrationInfo.linkText}</span>
                                    <ExternalLink size={15} />
                                </a>
                            </div>
                        )}

                        {/* === Advisory & Executive Committee Members (Exact Table from SRIT) === */}
                        {(activeSection.advisoryCommittee || activeSection.executiveTeam) && (
                            <div className="space-y-4">
                                {activeSection.advisoryCommittee && (
                                    <div className="rounded-xl border border-neutral-900 bg-white overflow-hidden shadow-xs w-full">
                                        <div className="px-5 py-4 bg-black text-white flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422]" />
                                                <span className="font-serif font-black text-base sm:text-lg tracking-wide text-white">
                                                    Advisory Committee & Institutional Leadership
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-bold text-orange-300 bg-[#FF5422]/20 px-2.5 py-0.5 rounded-full border border-[#FF5422]/40">
                                                {activeSection.advisoryCommittee.length} Members
                                            </span>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-orange-50/90 text-neutral-900 font-bold border-b border-orange-200">
                                                        <th className="px-4 py-3 text-[11px] font-black uppercase tracking-wider text-orange-950 pl-5 sm:pl-6 w-16 text-center">
                                                            S.No
                                                        </th>
                                                        <th className="px-4 py-3 text-[11px] font-black uppercase tracking-wider text-orange-950">
                                                            Name & Affiliation
                                                        </th>
                                                        <th className="px-4 py-3 text-[11px] font-black uppercase tracking-wider text-orange-950">
                                                            Designation
                                                        </th>
                                                        <th className="px-4 py-3 text-[11px] font-black uppercase tracking-wider text-orange-950 pr-5 sm:pr-6">
                                                            Role in Cell
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-orange-100 text-neutral-700">
                                                    {activeSection.advisoryCommittee.map((m, mIdx) => (
                                                        <tr key={mIdx} className="hover:bg-orange-50/40 transition-colors odd:bg-white even:bg-neutral-50/40">
                                                            <td className="px-4 py-3.5 pl-5 sm:pl-6 text-center font-bold text-neutral-900 w-16">
                                                                {m.sno}
                                                            </td>
                                                            <td className="px-4 py-3.5 font-bold text-neutral-900">
                                                                <span className="text-[#FF5422]">{m.name}</span>
                                                            </td>
                                                            <td className="px-4 py-3.5 text-neutral-700 font-medium">
                                                                {m.designation}
                                                            </td>
                                                            <td className="px-4 py-3.5 pr-5 sm:pr-6 font-semibold text-neutral-900">
                                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800 border border-neutral-200">
                                                                    {m.role}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeSection.executiveTeam && (
                                    <div className="rounded-xl border border-neutral-900 bg-white overflow-hidden shadow-xs w-full">
                                        <div className="px-5 py-4 bg-[#111827] text-white flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5422]" />
                                                <span className="font-serif font-black text-base sm:text-lg tracking-wide text-white">
                                                    Departmental Coordinators & Executive Team
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-bold text-orange-300 bg-[#FF5422]/20 px-2.5 py-0.5 rounded-full border border-[#FF5422]/40">
                                                {activeSection.executiveTeam.length} Coordinators
                                            </span>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-xs sm:text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-orange-50/90 text-neutral-900 font-bold border-b border-orange-200">
                                                        <th className="px-4 py-3 text-[11px] font-black uppercase tracking-wider text-orange-950 pl-5 sm:pl-6 w-16 text-center">
                                                            S.No
                                                        </th>
                                                        <th className="px-4 py-3 text-[11px] font-black uppercase tracking-wider text-orange-950">
                                                            Coordinator Name
                                                        </th>
                                                        <th className="px-4 py-3 text-[11px] font-black uppercase tracking-wider text-orange-950">
                                                            Designation
                                                        </th>
                                                        <th className="px-4 py-3 text-[11px] font-black uppercase tracking-wider text-orange-950 pr-5 sm:pr-6">
                                                            Department
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-orange-100 text-neutral-700">
                                                    {activeSection.executiveTeam.map((m, mIdx) => (
                                                        <tr key={mIdx} className="hover:bg-orange-50/40 transition-colors odd:bg-white even:bg-neutral-50/40">
                                                            <td className="px-4 py-3.5 pl-5 sm:pl-6 text-center font-bold text-neutral-900 w-16">
                                                                {m.sno}
                                                            </td>
                                                            <td className="px-4 py-3.5 font-bold text-neutral-900">
                                                                <span className="text-[#FF5422]">{m.name}</span>
                                                            </td>
                                                            <td className="px-4 py-3.5 text-neutral-700 font-medium">
                                                                {m.designation}
                                                            </td>
                                                            <td className="px-4 py-3.5 pr-5 sm:pr-6 font-semibold text-neutral-900">
                                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-50 text-[#FF5422] border border-orange-200">
                                                                    {m.dept || m.role}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* === Official Live Spreadsheets & Data Accordions (Matching SRIT Portal) === */}
                        {activeSection.spreadsheets && activeSection.spreadsheets.length > 0 && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100">
                                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                    <h2 className="font-serif text-xl sm:text-2xl font-black text-neutral-900">
                                        Official Records & Live Spreadsheets
                                    </h2>
                                </div>

                                {activeSection.spreadsheets.map((sheet, sIdx) => {
                                    const isOpen = !!openSpreadsheets[sIdx];
                                    return (
                                        <div
                                            key={sIdx}
                                            className="rounded-xl border border-neutral-900 bg-white overflow-hidden shadow-xs w-full"
                                        >
                                            <button
                                                onClick={() => toggleSpreadsheet(sIdx)}
                                                className="w-full flex items-center justify-between px-5 py-4 bg-black hover:bg-neutral-900 text-white transition-colors text-left select-none cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[#FF5422] font-black text-xl leading-none">
                                                        {isOpen ? '−' : '+'}
                                                    </span>
                                                    <span className="font-serif font-black text-base sm:text-lg tracking-wide text-[#FF5422]">
                                                        {sheet.title}
                                                    </span>
                                                </div>
                                                <div className="text-neutral-400 hover:text-white p-1 transition-transform duration-200">
                                                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <div className="p-3 sm:p-5 bg-white space-y-3">
                                                    {sheet.description && (
                                                        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-orange-50/70 border border-orange-200/70 text-xs">
                                                            <span className="text-neutral-700 font-medium">
                                                                {sheet.description}
                                                            </span>
                                                            <a
                                                                href={sheet.sheetUrl.replace('&amp;', '&')}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="inline-flex items-center gap-1.5 font-bold text-white bg-[#FF5422] hover:bg-[#e04515] px-3 py-1 rounded-md transition-colors"
                                                            >
                                                                <span>Open Full Screen</span>
                                                                <ExternalLink size={12} />
                                                            </a>
                                                        </div>
                                                    )}

                                                    <div className="w-full h-[540px] sm:h-[620px] rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-inner">
                                                        <iframe
                                                            title={sheet.title}
                                                            src={sheet.sheetUrl.replace('&amp;', '&')}
                                                            className="w-full h-full border-0"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* === Activity Highlights (For UBA, EBSB, Social Responsibility) === */}
                        {activeSection.activityList && activeSection.activityList.length > 0 && (
                            <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-xs space-y-4">
                                <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                    <h2 className="font-serif text-xl sm:text-2xl font-black text-neutral-900 flex items-center gap-2">
                                        <Calendar size={20} className="text-[#FF5422]" />
                                        <span>Key Community & Field Activities</span>
                                    </h2>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3.5">
                                    {activeSection.activityList.map((act, aIdx) => (
                                        <div
                                            key={aIdx}
                                            className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/70 hover:bg-neutral-50 hover:border-[#FF5422]/30 transition-all duration-200 space-y-1.5"
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <h4 className="font-bold text-sm sm:text-[15px] text-neutral-900 flex items-center gap-2">
                                                    <CheckCircle2 size={15} className="text-[#FF5422] shrink-0" />
                                                    <span>{act.title}</span>
                                                </h4>
                                                {act.year && (
                                                    <span className="text-[10px] font-bold text-[#FF5422] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200 shrink-0">
                                                        {act.year}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed pl-6">
                                                {act.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* === Career Opportunities & Defense Incentives (For NCC) === */}
                        {activeSection.careerBenefits && (
                            <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-xs space-y-4">
                                <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                    <h2 className="font-serif text-xl sm:text-2xl font-black text-neutral-900 flex items-center gap-2">
                                        <Award size={20} className="text-[#FF5422]" />
                                        <span>Career Incentives & Defense Opportunities</span>
                                    </h2>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {activeSection.careerBenefits.map((ben, bIdx) => (
                                        <div
                                            key={bIdx}
                                            className="p-3.5 rounded-xl border border-orange-200/80 bg-orange-50/40 space-y-1"
                                        >
                                            <div className="font-bold text-xs sm:text-sm text-neutral-900 flex items-center gap-2">
                                                <CheckCircle2 size={15} className="text-[#FF5422] shrink-0" />
                                                <span>Incentive #{bIdx + 1}</span>
                                            </div>
                                            <p className="text-xs text-neutral-700 leading-relaxed pl-5">
                                                {ben}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* === Visual Gallery === */}
                        {activeSection.gallery && activeSection.gallery.length > 0 && (
                            <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-xs space-y-4">
                                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                                    <div className="flex items-center gap-2.5">
                                        <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                        <h2 className="font-serif text-xl sm:text-2xl font-black text-neutral-900">
                                            Visual Gallery & Photographic Highlights
                                        </h2>
                                    </div>
                                    <span className="text-xs font-bold text-[#FF5422] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                                        {activeSection.gallery.length} Photographs
                                    </span>
                                </div>

                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {activeSection.gallery.map((img, gi) => (
                                        <div
                                            key={gi}
                                            className="group rounded-xl overflow-hidden border border-neutral-200/90 bg-neutral-100 shadow-xs hover:shadow-md hover:border-[#FF5422]/60 transition-all duration-300"
                                        >
                                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                                                <img
                                                    src={img.url}
                                                    alt={img.caption || activeSection.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/Campus.JPG';
                                                    }}
                                                />
                                            </div>
                                            {img.caption && (
                                                <div className="p-3 bg-white text-[11px] font-semibold text-neutral-700 leading-snug border-t border-neutral-100">
                                                    {img.caption}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* === Official Downloads === */}
                        {activeSection.downloads && activeSection.downloads.length > 0 && (
                            <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-xs space-y-4">
                                <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                    <h2 className="font-serif text-xl sm:text-2xl font-black text-neutral-900 flex items-center gap-2">
                                        <Download size={20} className="text-[#FF5422]" />
                                        <span>Official Documents & Handbooks</span>
                                    </h2>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {activeSection.downloads.map((doc, dIdx) => (
                                        <a
                                            key={dIdx}
                                            href={doc.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/60 hover:bg-orange-50/40 hover:border-orange-300 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <FileText size={18} className="text-[#FF5422]" />
                                                <span className="text-xs sm:text-sm font-bold text-neutral-900">{doc.title}</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-neutral-600 bg-white border border-neutral-200 px-2 py-0.5 rounded">
                                                {doc.type}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* === Contact Us Information Cards === */}
                        {activeSection.contacts && activeSection.contacts.length > 0 && (
                            <div className="rounded-xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-xs space-y-4">
                                <div className="flex items-center gap-2.5 pb-2.5 border-b border-neutral-100">
                                    <span className="h-5 w-1.5 rounded-full bg-[#FF5422]" />
                                    <h2 className="font-serif text-xl sm:text-2xl font-black text-neutral-900 flex items-center gap-2">
                                        <Phone size={20} className="text-[#FF5422]" />
                                        <span>Contact & Coordination Cell</span>
                                    </h2>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {activeSection.contacts.map((c, ci) => (
                                        <div
                                            key={ci}
                                            className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5 space-y-2.5 hover:border-orange-300 transition-colors"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-bold text-[#FF5422] uppercase tracking-wider">
                                                    {c.role}
                                                </span>
                                                <span className="text-[11px] font-semibold text-neutral-500">
                                                    SRIT Ananthapuramu
                                                </span>
                                            </div>
                                            <h4 className="font-serif font-bold text-sm sm:text-base text-neutral-900">
                                                {c.name}
                                            </h4>
                                            {c.dept && (
                                                <p className="text-xs text-neutral-600 font-medium">
                                                    {c.dept}
                                                </p>
                                            )}

                                            <div className="pt-2 border-t border-neutral-200/70 flex flex-wrap gap-2 text-xs">
                                                {c.phone && (
                                                    <a
                                                        href={`tel:${c.phone}`}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:bg-[#FF5422] hover:text-white transition-colors font-medium shadow-2xs"
                                                    >
                                                        <Phone size={12} />
                                                        <span>{c.phone}</span>
                                                    </a>
                                                )}
                                                {c.email && (
                                                    <a
                                                        href={`mailto:${c.email}`}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:bg-[#FF5422] hover:text-white transition-colors font-medium shadow-2xs"
                                                    >
                                                        <Mail size={12} />
                                                        <span>{c.email}</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        </>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

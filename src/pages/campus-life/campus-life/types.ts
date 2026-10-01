import React from 'react';
import {
    Building2,
    BookOpen,
    Bus,
    Home as HomeIcon,
    Wifi,
    Utensils,
    Cpu,
    Leaf,
    Trophy,
    Monitor,
    Briefcase,
    PartyPopper,
    GraduationCap,
    Award,
    Calculator,
    HeartHandshake,
} from 'lucide-react';

export interface KeyStat {
    value: string;
    label: string;
    desc?: string;
    icon?: any;
}

export interface ContactPerson {
    name: string;
    role: string;
    phone?: string;
    email?: string;
    location?: string;
}

export interface TableData {
    title: string;
    headers: string[];
    rows: (string | number)[][];
}

export interface GalleryImage {
    src: string;
    caption?: string;
}

export interface SubSection {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;
    path: string;
    overview?: string[];
    keyStats?: KeyStat[];
    features?: string[];
    highlights?: string[];
    tableData?: TableData;
    contacts?: ContactPerson[];
    galleryImages?: GalleryImage[];
}

export const campusLifeSections: SubSection[] = [
    {
        id: 'campus',
        title: 'Campus',
        subtitle: 'Overview & Infrastructure',
        icon: Building2,
        path: '/campus-life/campus',
        overview: [
            'Established in the year 2008, Srinivasa Ramanujan Institute of Technology (SRIT) is one of the premier technical institutions permanently affiliated with JNTU Ananthapuramu and accredited by NAAC with "A" Grade.',
            'Spread over 25+ lush green acres at Rotarypuram Village, the campus features state-of-the-art academic complexes, advanced computing labs, high-tech seminar halls, and world-class sports facilities.',
        ],
        highlights: [
            '25+ Acres lush green, eco-friendly Wi-Fi enabled campus',
            'Permanent Affiliation to JNTU Ananthapuramu & NAAC "A" Accredited',
            'Modern multimedia classrooms with smart digital podiums and projectors',
            'Comprehensive student amenities including cafeteria, hostels, and sports complex',
        ],
    },
    {
        id: 'library',
        title: 'Library',
        subtitle: 'Central & Digital Library',
        icon: BookOpen,
        path: '/campus-life/library',
        overview: [
            'The Central Library at SRIT is an intellectual hub housing an extensive collection of textbooks, reference materials, national & international journals, and e-resources.',
            'Equipped with digital library terminals, automated barcoded circulation, DELNET, and IEEE Xplore access, it fosters in-depth technical research and lifelong learning.',
        ],
    },
    {
        id: 'transport',
        title: 'Transport',
        subtitle: 'Fleet & Route Network',
        icon: Bus,
        path: '/campus-life/transport',
        overview: [
            'SRIT operates a massive dedicated fleet of 30+ GPS-tracked, speed-governed modern buses serving over 1,528 daily commuters across 4 major regional hubs: Anantapur, Tadipatri, Dharmavaram, and Pamidi.',
            'Ensuring student safety, punctuality, and comfort with well-maintained vehicles and experienced, licensed drivers.',
        ],
    },
    {
        id: 'hostels',
        title: 'Hostels',
        subtitle: 'Boys & Girls Accommodation',
        icon: HomeIcon,
        path: '/campus-life/hostels',
        overview: [
            'Separate, secure, and modern residential hostels for boys and girls provide a safe, home-like environment with round-the-clock security, CCTV surveillance, Wi-Fi, and nutritious dining.',
            'Equipped with RO purified water, study halls, recreation spaces, and resident wardens.',
        ],
    },
    {
        id: 'internet',
        title: 'Internet',
        subtitle: 'Campus-wide High Speed Wi-Fi',
        icon: Wifi,
        path: '/campus-life/internet',
        overview: [
            'SRIT campus is fully interconnected with a redundant high-speed 1 Gbps fiber-optic backbone and enterprise-grade secure Wi-Fi access points across all academic, administrative, and residential blocks.',
        ],
    },
    {
        id: 'cafeteria',
        title: 'Cafeteria',
        subtitle: 'Hygienic & Nutritious Dining',
        icon: Utensils,
        path: '/campus-life/cafeteria',
        overview: [
            'The campus cafeteria provides a vibrant, clean, and spacious dining area offering wholesome vegetarian and multi-cuisine delicacies, fresh juices, and refreshments at subsidized rates.',
        ],
    },
    {
        id: 'labs',
        title: 'Labs',
        subtitle: 'Cutting-Edge Laboratories',
        icon: Cpu,
        path: '/campus-life/labs',
        overview: [
            'Over 45+ specialized engineering and research laboratories equipped with modern industry-standard hardware, testbeds, and licensed software packages to cultivate hands-on innovation.',
        ],
    },
    {
        id: 'sustainable-campus',
        title: 'Sustainable Campus',
        subtitle: 'Eco-Friendly & Green Energy',
        icon: Leaf,
        path: '/campus-life/sustainable-campus',
        overview: [
            'SRIT is committed to environmental sustainability with a 150 kW rooftop solar energy plant, comprehensive rainwater harvesting, sewage treatment & water recycling plant, and expansive green canopy.',
        ],
    },
    {
        id: 'sports',
        title: 'Sports',
        subtitle: 'Athletics, Courts & Tournaments',
        icon: Trophy,
        path: '/campus-life/sports',
        overview: [
            'Promoting physical fitness, leadership, and teamwork through multi-acre athletic tracks, cricket grounds, volleyball & basketball courts, gymnasium, and indoor sports facilities.',
        ],
        contacts: [
            {
                role: 'Physical Director',
                name: 'Mr. R. Amaresha',
                phone: '+91-9704493901'
            }
        ]
    },
    {
        id: 'computer-center',
        title: 'Computer Center',
        subtitle: 'Centralized Computing Facilities',
        icon: Monitor,
        path: '/campus-life/computer-center',
        overview: [
            'The Central Computer Center houses 600+ high-end workstations configured with high-speed internet, developer toolchains, AI/ML clusters, and enterprise server infrastructures.',
        ],
    },
    {
        id: 'campus-drives',
        title: 'Campus Drives',
        subtitle: 'Placements & Career Opportunities',
        icon: Briefcase,
        path: '/campus-life/campus-drives',
        overview: [
            'The Training & Placement Cell actively collaborates with leading multinational tech giants and core engineering firms to organize rigorous training and prestigious on-campus recruitment drives.',
        ],
    },
    {
        id: 'aarambh',
        title: 'AARAMBH (Orientation Day)',
        subtitle: 'Freshers Induction & Onboarding',
        icon: Award,
        path: '/campus-life/aarambh',
        overview: [
            'Orientation Day is an important event that is designed to help new students get acquainted with the campus, the academic programs, and the various resources available to them during their time here.',
            'The Orientation Day is typically held a few days before the start of the academic term. During this event, new students will have the opportunity to meet the professors and other staff members, who will be providing essential information and guidance about your academic program. They will also be introduced to the campus facilities, such as the library, the computer labs, and the student support systems.',
            'The Orientation Day is not just about academics, though. Students will also learn about the various clubs and organizations on campus, which offer opportunities to get involved in extracurricular activities and meet new people who share their interests. Representatives from the College will be present to answer your questions and provide information about their activities.',
            'Overall, the Orientation Day is a great way to get started on the right foot at the college. It is an opportunity to meet new people, learn about the resources available, and get excited about the academic program and the college community.',
            'It is a tradition at SRIT to conduct Aarambh (Orientation Day) every year for the new joinees to the College and create awareness for both Students and Parents on Engineering education and how SRIT creates ease learning environment by catering the needs for the Students to become a complete Graduate with human and ethical values.',
        ],

    },
    {
        id: 'symphony',
        title: 'SYMPHONY (Annual Day)',
        subtitle: 'Flagship Cultural Extravaganza',
        icon: PartyPopper,
        path: '/campus-life/symphony',
        overview: [
            'SYMPHONY is the grand annual cultural festival celebrating music, dance, theatrical performances, literary arts, and student talent from across the region.',
            'Renowned for electrifying performances, celebrity guests, and vibrant showcase of student creativity and cultural unity.',
        ],
        features: [
            'Inter-college cultural competitions with attractive cash prizes',
            'Celebrity performances, musical night & live pro-shows',
            'Choreography, battle of bands, fashion showcase, and drama',
            'Grand awards ceremony honoring academic & co-curricular champions',
        ],
    },
    {
        id: 'udbhavaan',
        title: 'UDBHAVAAN (Graduation Day)',
        subtitle: 'Celebrating Academic Milestones',
        icon: GraduationCap,
        path: '/campus-life/udbhavaan',
        overview: [
            'Graduation Day is one of the most significant and exciting events in a student’s academic journey. It is a day that marks the culmination of years of hard work, dedication, and perseverance. At SRIT, we take pride in celebrating the achievements of our students on this day and acknowledging their contributions to the academic community which is named as Udbhavaan.',
            'At SRIT, we believe that Graduation Day is not just an end to the academic journey, but also the beginning of a new chapter in the graduates’ lives. We strive to prepare our students for success in their chosen fields, and we are proud to see them go on to achieve great things.',
            'We congratulate our graduating class and wish them all the best for their future endeavors. We also extend our heartfelt thanks to the faculty members, staff, and the entire college community for their dedication and commitment to our students’ success.',
        ],

    },
    {
        id: 'abhigyaan',
        title: 'ABHIGYAAN (Achievers Day)',
        subtitle: 'Honoring Student Excellence',
        icon: Award,
        path: '/campus-life/abhigyaan',
        overview: [
            'ABHIGYAAN (Achievers Day) is celebrated to honour and acknowledge students\' exemplary performance and significant contributions in various fields during the academic year 2023-24. Students who bring laurels to the college are honoured and rewarded. Faculty performance in various areas is also identified and appreciated.',
            'Students and faculty who participated, competed, and won prizes in State, National, and International Level competitions are appreciated during this special event.',
            'A committee headed by the principal has been appointed to finalize the list of achievers for the academic year 2023-24.'
        ],

    },
    {
        id: 'mathematics-day',
        title: 'Mathematics Day',
        subtitle: 'Celebrating Srinivasa Ramanujan',
        icon: Calculator,
        path: '/campus-life/mathematics-day',
        overview: [
            'SRIT proudly celebrates National Mathematics Day on December 22nd, commemorating the birth anniversary of our institution\'s namesake, the legendary mathematical genius Srinivasa Ramanujan.',
            'Events include mathematical Olympiads, poster presentations, quantitative aptitude contests, and guest lectures by distinguished mathematicians.',
        ],
        keyStats: [
            { value: 'Dec 22', label: 'Annual Celebration', desc: 'Commemorating Ramanujan\'s birthday' },
            { value: '500+', label: 'Participants', desc: 'Across collegiate Math Olympiads' },
            { value: '10+', label: 'Competitions', desc: 'Sudoku, quizzes, coding math algorithms' },
            { value: 'Keynote', label: 'Eminent Mathematicians', desc: 'Sharing cutting-edge mathematical insights' },
        ],
    },
    {
        id: 'prabhava',
        title: 'Prabhava (Freshers Day)',
        subtitle: 'Welcoming the New Batch',
        icon: HeartHandshake,
        path: '/campus-life/prabhava',
        overview: [
            'Prabhava, our annual Freshers Day celebration, is a vibrant event that marks the commencement of a new academic year with a warm welcome from Seniors to Freshers. It’s a day filled with excitement, laughter, and the spirit of togetherness as we warmly welcome our newest members to the college family.'
        ],

    },
];

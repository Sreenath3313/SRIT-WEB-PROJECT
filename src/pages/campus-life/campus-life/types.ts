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
            'AARAMBH is the formal inaugural induction program welcoming newly admitted engineering students and their families to the vibrant SRIT family.',
            'Features inspirational addresses by management, industry leaders, academic mentors, and peer orientation to set students on the path of lifelong success.',
        ],
        keyStats: [
            { value: '1,000+', label: 'New Entrants', desc: 'Inducted every academic year' },
            { value: '100%', label: 'Mentorship', desc: 'Faculty mentor assigned to every student' },
            { value: '15+', label: 'Interactive Sessions', desc: 'Spanning ethics, engineering, and clubs' },
            { value: 'Day 1', label: 'Tech Immersion', desc: 'Lab visits & innovation center tours' },
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
            'UDBHAVAAN marks the ceremonial graduation convocation honoring outgoing engineering graduates as they receive their provisional certificates and embark on illustrious career journeys.',
            'Dignitaries, distinguished alumni, and proud parents gather to celebrate years of dedication, research, and technical accomplishment.',
        ],
        keyStats: [
            { value: '800+', label: 'Graduates Annually', desc: 'Conferred with engineering degrees' },
            { value: '90%+', label: 'Placement Record', desc: 'Graduating with top corporate offers' },
            { value: 'Gold Medals', label: 'Academic Honors', desc: 'Conferred upon branch toppers' },
            { value: 'Global Alumni', label: 'Network', desc: 'Connecting SRIT alumni worldwide' },
        ],
    },
    {
        id: 'abhigyaan',
        title: 'ABHIGYAAN (Achievers Day)',
        subtitle: 'Honoring Student Excellence',
        icon: Award,
        path: '/campus-life/abhigyaan',
        overview: [
            'ABHIGYAAN is the prestigious annual award ceremony honoring university rank holders, hackathon winners, sports champions, patent holders, and exceptional student leaders.',
        ],
        keyStats: [
            { value: '250+', label: 'Awards Conferred', desc: 'Across academics, sports, and research' },
            { value: '₹10L+', label: 'Merit Scholarships', desc: 'Awarded to top ranking scholars' },
            { value: '50+', label: 'Hackathon Wins', desc: 'At state, national, and global stages' },
            { value: '100%', label: 'Recognition', desc: 'For dedicated community & club leaders' },
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
            'Prabhava is the spirited Freshers Day event organized by senior students to welcome their junior peers with warmth, camaraderie, talent shows, and joyful interactive games.',
            'Fosters strong friendships, breaks ice across diverse student backgrounds, and sparks lifelong bonds in the SRIT campus community.',
        ],
        keyStats: [
            { value: '1,000+', label: 'Attendees', desc: 'Freshers and seniors uniting together' },
            { value: 'Mr & Ms Fresher', label: 'Pageant', desc: 'Celebrating poise, intellect, and talent' },
            { value: 'Non-stop', label: 'Entertainment', desc: 'Dance, music, skits, and fun games' },
            { value: '100%', label: 'Ragging-Free', desc: 'Safe, warm, and inclusive environment' },
        ],
    },
];

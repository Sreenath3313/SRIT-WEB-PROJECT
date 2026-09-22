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
    specialization: string;
    qualification: string;
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

export const departments: DepartmentData[] = [
    {
        slug: 'cse',
        code: 'CSE',
        name: 'Computer Science & Engineering',
        fullName: 'Department of Computer Science & Engineering',

        tagline:
            'Knowledge creation and innovation driving every aspect of modern life.',

        description: [
            'Computer Science and Engineering animates our world, driving knowledge creation and innovation that touches every aspect of our lives, from communications devices to the latest medical technology. The Department of Computer Science and Engineering embodies the college tradition of excellence in engineering education.',

            'The B. Tech program in Computer Science and Engineering was started in 2008 with an intake of 60, increased to 120 in 2011, and increased to 420 in 2024. The department encourages students to use problem-solving skills and creativity as they become familiar with scientific engineering and computer programming principles.',
        ],

        highlights: [
            'CSE department started in 2008 with an intake of 60 students',
            'Intake increased to 120 in 2011',
            'Intake increased to 420 in 2024',
            'Industry-Institute interaction and real-time problem solving',
            'Focus on professional ethics and social responsibility',
        ],

        image: 'https://www.srit.ac.in/wp-content/uploads/2022/07/Computer-Science-and-Engineering-2.jpg',

        researchAreas: [],

        stats: {
            faculty: '32',
            labs: 'Not specified',
            students: 'Not specified',
            placement: 'Not specified',
        },

        intake: 420,

        accreditation: 'See official CSE department information',

        eligibility:
            'See the official SRIT admissions information for current eligibility requirements.',

        vision:
            'To evolve as a leading department by offering best comprehensive teaching and learning practices for students to be self-competent technocrats with professional ethics and social responsibilities.',

        mission: [
            {
                id: 'DM1',
                text: 'Continuous enhancement of teaching-learning practices for theoretical and practical computer science knowledge.',
            },
            {
                id: 'DM2',
                text: 'Training on emerging technologies, self-learning, ethics and social consciousness.',
            },
            {
                id: 'DM3',
                text: 'Industry-Institute interaction and real-time problems for society.',
            },
        ],

        goals:
            'The department aims to prepare CSE graduates for successful professional careers with ethical values, communication and leadership skills, lifelong learning, and relevant professional competencies.',

        hodMessage: {
            name: 'Dr. P. Veera Prakash',
            designation: 'Assistant Professor & HOD, CSE',
            message:
                'The Department of Computer Science & Engineering works to provide comprehensive teaching and learning practices, exposure to emerging technologies, industry interaction, and opportunities to work on real-time problems while developing professional ethics and social responsibility.',
            image: '',
        },

        faculty: [
            {
                name: 'Dr. P. Veera Prakash',
                designation: 'Assistant Professor & HOD (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Dr. G Venkata Narasimha Reddy',
                designation: 'Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., Ph.D.',
            },
            {
                name: 'Dr. B. Lakshmi Narayana',
                designation: 'Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., Ph.D.',
            },
            {
                name: 'Dr. M. Ranjit Reddy',
                designation: 'Professor & TPO (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., Ph.D.',
            },
            {
                name: 'Dr. G. Anil Kumar Reddy',
                designation: 'Senior Director/General Manager',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., (Ph.D)',
            },
            {
                name: 'M. Rama Krishna',
                designation: 'Associated Developer, JP Morgan Services Pvt. Ltd.',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Dr. C. Sasikala',
                designation: 'Associate Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., Ph.D.',
            },
            {
                name: 'Dr. T. Venkata Naga Jayudu',
                designation: 'Associate Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., Ph.D.',
            },
            {
                name: 'Dr. G. Hemanth Kumar Yadav',
                designation: 'Associate Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., Ph.D.',
            },
            {
                name: 'Dr. P. Chitralingappa',
                designation: 'Associate Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., Ph.D.',
            },
            {
                name: 'Dr. B. Harichandana',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., Ph.D.',
            },
            {
                name: 'Mr. T. Murali Krishna',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., (Ph.D)',
            },
            {
                name: 'Mr. M. Narasimhulu',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., (Ph.D)',
            },
            {
                name: 'Mr. Suman Lingam',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., (Ph.D)',
            },
            {
                name: 'Mr. G. Chinnapullaiah',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., (Ph.D)',
            },
            {
                name: 'Mr. C. Sudheer Kumar',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., (Ph.D)',
            },
            {
                name: 'Mrs. M. Soumya',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., (Ph.D)',
            },
            {
                name: 'Mr. K. Kondanna',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., (Ph.D)',
            },
            {
                name: 'Mr. Nazeer Shaik',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech., (Ph.D)',
            },
            {
                name: 'Mr. Sreedhar Boya',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mrs. P Manjeera Reddy',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mr. K. Venkatesh',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mrs. T. Kavitha',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mrs. T. Rohini',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mrs. G. Shabana',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mrs. N. Ushasree',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Ms. K. Shruthi',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mrs. V. Sujatha',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mr. B. Lokeshnath',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mrs. K. Umadevi',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mr. A. Bala Ankanna',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
            {
                name: 'Mr. A. Erriswamy Reddy',
                designation: 'Assistant Professor (Regular)',
                specialization: 'Computer Science & Engineering',
                qualification: 'M.Tech.',
            },
        ],

        overview: [
            {
                title: 'Vision & Mission',
                content: `
                <h4>VISION</h4>
                <p>
                    To evolve as a leading department by offering best comprehensive
                    teaching and learning practices for students to be self-competent
                    technocrats with professional ethics and social responsibilities.
                </p>

                <h4>MISSION</h4>

                <p>
                    <strong>DM1:</strong>
                    Continuous enhancement of teaching-learning practices for theoretical
                    and practical computer science knowledge.
                </p>

                <p>
                    <strong>DM2:</strong>
                    Training on emerging technologies, self-learning, ethics and social
                    consciousness.
                </p>

                <p>
                    <strong>DM3:</strong>
                    Industry-Institute interaction and real-time problems for society.
                </p>
            `,
            },

            {
                title: 'Course Expert Team',
                content: `
                <p>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTd4THt-4X8lQQOHCsYDfWwEqHnQprnlWObI0es7f_BB8dN4u8HBqJ3oZlfI8okNQ/pubhtml?widget=true&amp;headers=false"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Official CSE Course Expert Team
                    </a>
                </p>
            `,
            },

            {
                title: 'Department Academic Committee (DAC)',
                content: `
                <p>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9vFpYZrBacVzn03s8YQXd5R3H9Fwe-zJhbvb7eadRAqP5SBZG_bJS4aIhoCvW5A/pubhtml?widget=true&amp;headers=false"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Official CSE DAC
                    </a>
                </p>
            `,
            },

            {
                title: 'Program Assessment Committee (PAC)',
                content: `
                <p>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6pFHH0H0hnlusqpmVmLq5Wxus_9NcdDGw-awBax7A4Momus12uVzEBZ8Kfes29VCIAnkHfn9mc9SP/pubhtml?widget=true&amp;chrome=false&amp;headers=false"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Official CSE PAC
                    </a>
                </p>
            `,
            },

            {
                title: 'Academic Audit',
                content: `
                <p>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQHPLZtZvyqQ6jvr_D8KrmLd4ZG81HJktdzwNt4okRPnT6gtmlg_aRrHmNPvYBKIw/pubhtml?widget=true&amp;chrome=false&amp;headers=false"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Official CSE Academic Audit
                    </a>
                </p>
            `,
            },

            {
                title: 'Board Of Studies',
                content: `
                <p>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBIeJOA8XXpWY8ZzFF-lq2tu1vp_OPyLUrvqsqfhqsgZDBXm55qof3MeW2swITNA/pubhtml?widget=true&amp;headers=false"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Official CSE Board of Studies
                    </a>
                </p>
            `,
            },

            {
                title: 'Achievements',
                content: `
                <p>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTAbkdqHIMRvBWJAzzrrSqNuquO6i9pyEBLBFfIDrKb8EV3s8c3-BHM-LeRnGMibWzv94zzEQAAZDbx/pubhtml?widget=true&amp;chrome=false&amp;headers=false"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Official CSE Achievements
                    </a>
                </p>
            `,
            },

            {
                title: 'News Letters',
                content: `
                <p>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTM8jIMbscJj8GZZrdzmXbA7WsUo4a_I0KfUjsV8ZRlg7jB-mxl8FigXaO4FPpWSQ/pubhtml?widget=true&amp;headers=false"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Official CSE News Letters
                    </a>
                </p>
            `,
            },

            {
                title: 'Technical Magazine',
                content: `
                <p>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRqeJceBjIc-OBRJOGPRxtztNhfWMqwPQIwjlsQgaxnP9C7R-H1HpAydVQmng5Suw/pubhtml?widget=true&amp;headers=false"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Official CSE Technical Magazine
                    </a>
                </p>
            `,
            },

        ],
    },
    {
        slug: 'csm',
        code: 'CSM',
        name: 'CSE — AI & Machine Learning',
        fullName: 'Department of CSE (Artificial Intelligence & Machine Learning)',
        tagline: 'Preparing students for the future of intelligent computing and automation.',
        description: [
            'The CSE — AI & Machine Learning specialization prepares students for the rapidly evolving landscape of intelligent systems. The program covers core computer science fundamentals alongside specialized courses in machine learning, neural networks, natural language processing, and computer vision.',
            'The B.Tech CSE (AI & ML) programme (4 years / 8 semesters) is affiliated to JNTU Anantapur and approved by AICTE. Students gain deep expertise in AI frameworks, autonomous systems, and data engineering, equipping them for roles in AI research, product development, and intelligent automation.',
            'Core subjects include Python Programming, Statistics for AI, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, and AI Ethics. Practical exposure is provided through dedicated AI/ML labs with GPU-enabled computing infrastructure.',
        ],
        highlights: [
            'AICTE-approved B.Tech CSE (AI & ML) specialization',
            'Hands-on experience with modern AI frameworks (TensorFlow, PyTorch, Scikit-learn)',
            'GPU-enabled AI/ML computing laboratories',
            'Industry exposure through partner organizations (TCS, Infosys, Wipro)',
            'Project-based learning with real-world datasets',
        ],
        image: '/CSMDept.JPG',
        researchAreas: [
            'Deep Learning',
            'Computer Vision',
            'Natural Language Processing',
            'Autonomous Systems',
        ],
        stats: {
            faculty: '20',
            labs: '3',
            students: '240+',
            placement: '98%',
        },
        intake: 60,
        accreditation: 'AICTE Approved',
        eligibility: '10+2 with Physics, Chemistry & Mathematics (min. 45% marks; 40% for reserved categories). Admission through AP EAPCET / EAMCET. Lateral entry (20% seats) via AP ECET for Diploma holders.',
        vision: 'To become a center of excellence in AI & Machine Learning education, fostering innovation and producing industry-ready professionals capable of solving complex real-world problems.',
        mission: [
            {
                id: 'M1',
                text: 'To provide quality education in AI & ML with emphasis on practical application and industry readiness.',
            },
            {
                id: 'M2',
                text: 'To foster research and innovation in cutting-edge areas of artificial intelligence and machine learning.',
            },
            {
                id: 'M3',
                text: 'To develop ethical AI practitioners who understand the societal impact of intelligent systems.',
            },
            {
                id: 'M4',
                text: 'To build industry partnerships that provide students with real-world exposure and career opportunities.',
            },
        ],
        goals: 'To produce competent AI & ML engineers who can design, develop, and deploy intelligent systems that address real-world challenges across diverse domains.',
        hodMessage: {
            name: 'Dr. P. Chitralingappa',
            designation: 'Head of the Department, CSM',
            message: 'The AI & Machine Learning department is at the forefront of technological innovation. We are committed to providing our students with the skills and knowledge needed to excel in this rapidly evolving field. Our curriculum, combined with industry collaborations and research opportunities, ensures that our graduates are well-prepared to drive the AI revolution.',
            image: '/csmhod.jpg',
        },
        faculty: [
            {
                name: 'Dr. P. CHITRALINGAPPA',
                designation: 'Associate Professor & Head',
                specialization: 'Machine Learning & Pattern Recognition',
                qualification: 'M.Tech, Ph.D.',
                image: '/csmhod.jpg',
                profileUrl: 'https://sites.google.com/view/drpcl/home',
            },
            {
                name: 'Dr. G. HEMANTH KUMAR YADAV',
                designation: 'Associate Professor',
                specialization: 'Deep Learning & Computer Vision',
                qualification: 'M.Tech, Ph.D.',
                image: '/Hemanth.png',
                profileUrl: 'https://sites.google.com/srit.ac.in/hemanthkumaryadav-cse/profile',
            },
            {
                name: 'Dr. G. KRISHNA PRIYA',
                designation: 'Associate Professor',
                specialization: 'Natural Language Processing',
                qualification: 'M.Tech, Ph.D.',
            },
            {
                name: 'Mr. P. RAMA BAYAPA REDDY',
                designation: 'Assistant Professor',
                specialization: 'Data Structures & Algorithms',
                qualification: 'M.Tech, (Ph.D.)',
            },
            {
                name: 'Mr. A. KIRAN KUMAR',
                designation: 'Assistant Professor',
                specialization: 'Machine Learning & Data Mining',
                qualification: 'M.Tech, (Ph.D.)',
            },
            {
                name: 'Mr. K. VENKATESH',
                designation: 'Assistant Professor',
                specialization: 'Internet of Things (IoT) & Embedded Systems',
                qualification: 'M.Tech, (Ph.D.)',
                image: '/venkatesh.png',
                profileUrl: 'https://sites.google.com/view/venkateshk/home',
            },
            {
                name: 'Mr. B. VIJAYA BHASKAR REDDY',
                designation: 'Assistant Professor',
                specialization: 'Cloud Computing & Virtualization',
                qualification: 'M.Tech',
                image: '/vijay bhaskar.png',
                profileUrl: 'https://sites.google.com/view/vijayareddy/about',
            },
            {
                name: 'Ms. P. SIRISHA',
                designation: 'Assistant Professor',
                specialization: 'Python Programming & AI Frameworks',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. SHAIK BABA FAKRUDDIN',
                designation: 'Assistant Professor',
                specialization: 'Computer Networks & Security',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. E. KISHORE KUMAR GOUD',
                designation: 'Assistant Professor',
                specialization: 'Software Engineering & DevOps',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. R. ANAND REDDY',
                designation: 'Assistant Professor',
                specialization: 'Database Management Systems',
                qualification: 'M.Tech',
            },
            {
                name: 'Mrs. C. S. DEEPTHI',
                designation: 'Assistant Professor',
                specialization: 'Web Technologies & UI/UX',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. T. NARENDRA',
                designation: 'Assistant Professor',
                specialization: 'Operating Systems & Systems Programming',
                qualification: 'M.Tech',
            },
            {
                name: 'Mrs. P. MANASA',
                designation: 'Assistant Professor',
                specialization: 'AI Ethics & Data Science',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. K. NALINI PRIYANKA',
                designation: 'Assistant Professor',
                specialization: 'Neural Networks & Fuzzy Logic',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. R. JAHNAVI RAM',
                designation: 'Assistant Professor',
                specialization: 'Reinforcement Learning',
                qualification: 'M.Tech',
            },
            {
                name: 'Mrs. G. SHARMILA',
                designation: 'Assistant Professor',
                specialization: 'Object-Oriented Programming',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. K. RUBIYA ALAM',
                designation: 'Assistant Professor',
                specialization: 'Big Data Analytics',
                qualification: 'M.Tech',
            },
            {
                name: 'Mrs. G. GAYATHRI',
                designation: 'Assistant Professor',
                specialization: 'Information Security',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. D. MUMTAZ',
                designation: 'Assistant Professor',
                specialization: 'Robotics & Intelligent Systems',
                qualification: 'M.Tech',
            },
        ],
        overview: [
            {
                title: 'Vision & Mission',
                content: `<h4>VISION:</h4><p>To evolve as a leading department by offering best comprehensive teaching and learning practices for students to be self-competent technocrats with professional ethics and social responsibilities.</p><h4>MISSION:</h4><p><strong>DM 1:</strong> Continuous enhancement of the teaching-learning practices to gain profound knowledge in theoretical &amp; practical aspects of computer science applications.</p><p><strong>DM 2: </strong>Administer training on emerging technologies and motivate the students to inculcate self-learning abilities, ethical values and social consciousness to become competent professionals.</p><p><strong>DM 3:</strong> Perpetual elevation of Industry-Institute interactions to facilitate the students to work on real-time problems to serve the needs of the society.</p>`
            },
            {
                title: 'Course Expert Team',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQRflcUX0ksbLO_t9dgka0oVRWyC0oKLeFeJczwc-Yseu6St6NGZelMiwW3Z3n5iQ/pubhtml?widget=true&amp;headers=false" width="100%" height="700" style="border: none; width: 100%; height: 700px; zoom: 1.25; -moz-transform: scale(1.25); -moz-transform-origin: 0 0; overflow: hidden;"></iframe>`
            },
            {
                title: 'Department Academic Committee(DAC)',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS_d7Rxurc1ewHmbxzk4HgNQK2Gn1v6ec33dtCkLSv_E1vB8irPjwNn-2a0_jneEQ/pubhtml?widget=true&amp;chrome=false&amp;headers=false" width="100%" height="500" style="border: none; width: 100%; height: 500px; zoom: 1.25; -moz-transform: scale(1.25); -moz-transform-origin: 0 0; overflow: hidden;"></iframe>`
            },
            {
                title: 'Program Assessment Committee( PAC)',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQqAZWhdonrvkrx-nojgi2q1XbpNU7VA6ERUkx5OpkcMGCZt9wm6bkSLKMQEy5ODF13LqPf_2I-rTnH/pubhtml?widget=true&amp;chrome=false&amp;headers=false" width="100%" height="800" style="border: none; width: 100%; height: 800px; zoom: 1.25; -moz-transform: scale(1.25); -moz-transform-origin: 0 0; overflow: hidden;"></iframe>`
            },
            {
                title: 'Academic Audit',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSdQqh_DS7Jti2Y4LZaZk-tx8Ii-ypw6dogO4OPsYKHx54NpEm3OAwdREGMcughMw/pubhtml?widget=true&amp;chrome=false&amp;headers=false" width="100%" height="700" style="border: none; width: 100%; height: 700px; zoom: 1.25; -moz-transform: scale(1.25); -moz-transform-origin: 0 0; overflow: hidden;"></iframe>`
            },
            {
                title: 'Board Of Studies',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQCZyN60n4zE15DmNxi_L4OUYA3hevJqwHDeLz-q5kOoqk-6B-yqVBt4KC6963Iqg/pubhtml?widget=true&amp;headers=false" width="100%" height="580" style="border: none; width: 100%; height: 580px; zoom: 1.25; -moz-transform: scale(1.25); -moz-transform-origin: 0 0; overflow: hidden;"></iframe>`
            },
            {
                title: 'News Letters',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSuncvMspFdjszzrsI_sB1P1KW5qdGW2yKOFWnY6tcCOWrVZ6ak02VSEKXVdKdXqg/pubhtml?widget=true&amp;headers=false" width="100%" height="400" style="border: none; width: 100%; height: 400px; zoom: 1.25; -moz-transform: scale(1.25); -moz-transform-origin: 0 0; overflow: hidden;"></iframe>`
            },
            {
                title: 'Achievements',
                content: `<h4>Achievements:</h4><table class="w-full"><tbody><tr><td class="w-16">1</td><td>Department of CSE Accredited by NBA in 2018.</td></tr><tr><td class="w-16">2</td><td>Department of CSE has been Permanently Affiliated by JNTUA in 2018.</td></tr></tbody></table>`
            },
            {
                title: 'Technical Magazine',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR2x7AVUfandKG_vKVFdtD0hF_zFbsM_602jvJH2rR-mtTIubtdR3148kx7wdEE_Q/pubhtml?widget=true&amp;headers=false" width="100%" height="500" style="border: none; overflow: hidden;"></iframe>`
            }
        ],
    },
    {
        slug: 'ece',
        code: 'ECE',
        name: 'Electronics & Communication',
        fullName: 'Department of Electronics & Communications Engineering',
        tagline: 'Embedded systems, signal processing, VLSI design, and telecommunications.',
        description: [
            'Electronics and Communications Engineering at SRIT drives knowledge creation and innovation in communications devices, embedded systems, signal processing, and VLSI design. The department provides a comprehensive curriculum that spans analog and digital electronics, microprocessors, and communication systems.',
            'The B.Tech ECE programme (4 years / 8 semesters) is affiliated to JNTU Anantapur and approved by AICTE. The programme is NBA-accredited. Students are trained in advanced areas including IoT, wireless communications, RF engineering, and VLSI design through industry-standard laboratory infrastructure.',
            'Core subjects include Electronic Devices & Circuits, Signals & Systems, Digital Communications, Microprocessors & Microcontrollers, Antenna & Wave Propagation, VLSI Design, Embedded Systems, and Digital Signal Processing.',
        ],
        highlights: [
            'NBA-accredited B.Tech (ECE) programme — AICTE approved',
            'Modern communication systems curriculum with IoT & VLSI focus',
            'Industry-standard laboratory equipment (10 labs)',
            'Active technical competitions and research participation',
            'Top recruiters: Qualcomm, Texas Instruments, BEL, ECIL, Infosys, Wipro',
        ],
        image: '/College 3.JPG',
        researchAreas: [
            'VLSI Design',
            'Signal Processing',
            'Embedded Systems',
            'Communication Networks',
        ],
        stats: {
            faculty: '35+',
            labs: '10',
            students: '600+',
            placement: '92%',
        },
        intake: 120,
        accreditation: 'NBA Accredited',
        eligibility: '10+2 with Physics, Chemistry & Mathematics (min. 45% marks; 40% for reserved categories). Admission through AP EAPCET / EAMCET. Lateral entry (20% seats) via AP ECET for Diploma holders.',
        vision: 'To become a department of excellence in Electronics and Communication and allied areas of engineering by empowering rural students with latest technological updates and human values.',
        mission: [
            {
                id: 'DM1',
                text: 'Continually improve the teaching learning and associated processes to prepare the students with problem solving skills.',
            },
            {
                id: 'DM2',
                text: 'Provide comprehensive learning experiences to imbibe industry based technical knowledge and encourage students to pursue higher studies with awareness on ethical values.',
            },
            {
                id: 'DM3',
                text: 'Nurture a strong research eco-system that facilitates quality research by faculty and students.',
            },
        ],
        goals: 'ECE graduates will work in multi-disciplinary environments with ethical & social responsibilities, acquire the latest technological skills by pursuing higher education and research, and lead teams with good leadership traits for a successful professional career.',
        hodMessage: {
            name: 'Dr. M. Venkata Rao',
            designation: 'Head of the Department, ECE',
            message: 'The ECE department is dedicated to providing an enriching learning experience that combines theoretical knowledge with practical skills in electronics and communication engineering. We continuously update our curriculum to match the rapid advancements in the field, ensuring our graduates are industry-ready and capable of contributing to cutting-edge technologies in VLSI, IoT, and wireless communications.',
            image: '/College.JPG',
        },
        faculty: [
            {
                name: 'Dr. M. Venkata Rao',
                designation: 'Professor & Head',
                specialization: 'Signal Processing & Communication Systems',
                qualification: 'Ph.D.',
            },
            {
                name: 'Dr. K. Madhavi Latha',
                designation: 'Professor',
                specialization: 'VLSI Design & Digital Circuits',
                qualification: 'Ph.D.',
            },
            {
                name: 'Dr. S. Ramakrishna',
                designation: 'Associate Professor',
                specialization: 'Wireless Communication & RF Engineering',
                qualification: 'Ph.D.',
            },
            {
                name: 'Mr. P. Srinivasulu',
                designation: 'Associate Professor',
                specialization: 'Embedded Systems & Microcontrollers',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. J. Bhavani',
                designation: 'Assistant Professor',
                specialization: 'Digital Signal Processing',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. D. Naresh Babu',
                designation: 'Assistant Professor',
                specialization: 'Internet of Things & Antenna Design',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. V. Padmaja',
                designation: 'Assistant Professor',
                specialization: 'Electronic Devices & Circuits',
                qualification: 'M.Tech',
            },
        ],
        overview: [
            { title: 'Vision & Mission', content: '<p>Content coming soon.</p>' },
            { title: 'Course Expert Team', content: '<p>Content coming soon.</p>' },
            { title: 'Department Academic Committee(DAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Program Assessment Committee( PAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Academic Audit', content: '<p>Content coming soon.</p>' },
            { title: 'Board Of Studies', content: '<p>Content coming soon.</p>' },
            { title: 'Achievements', content: '<p>Content coming soon.</p>' },
            {
                title: 'News Letters',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/pubhtml?widget=true&amp;headers=false" width="100%" height="500" style="border: none; overflow: hidden;"></iframe>`
            },
            { title: 'Technical Magazine', content: '<p>Content coming soon.</p>' }
        ],
    },
    {
        slug: 'eee',
        code: 'EEE',
        name: 'Electrical & Electronics',
        fullName: 'Department of Electrical & Electronics Engineering',
        tagline: 'Electrical circuits, machines, power systems, and control engineering.',
        description: [
            'The Electrical & Electronics Engineering department provides students with a wide range of fundamental knowledge in core disciplines such as Electrical Circuits, Electrical Machines, Power Systems, Control Systems, and Power Electronics.',
            'The B.Tech EEE programme (4 years / 8 semesters) is affiliated to JNTU Anantapur and approved by AICTE. The programme is NBA-accredited. Students develop skills in power generation, transmission, distribution, and automation, preparing them for roles in the energy sector and industrial automation.',
            'Core subjects include Electrical Circuit Analysis, Electrical Machines, Power Systems, Control Systems, Power Electronics, Renewable Energy Systems, Smart Grid Technologies, and Industrial Drives.',
        ],
        highlights: [
            'NBA-accredited B.Tech (EEE) programme — AICTE approved',
            'Power electronics and control systems focus',
            'Practical lab sessions with modern equipment (7 labs)',
            'Renewable energy and smart grid technologies exposure',
            'Career preparation in power and automation engineering',
        ],
        image: '/ComputerLab.JPG',
        researchAreas: [
            'Power Systems & Smart Grids',
            'Renewable Energy Integration',
            'Power Electronics',
            'Control & Automation',
        ],
        stats: {
            faculty: '28+',
            labs: '7',
            students: '450+',
            placement: '88%',
        },
        intake: 60,
        accreditation: 'NBA Accredited',
        eligibility: '10+2 with Physics, Chemistry & Mathematics (min. 45% marks; 40% for reserved categories). Admission through AP EAPCET / EAMCET. Lateral entry (20% seats) via AP ECET for Diploma holders.',
        vision: 'To emerge as a premier center of learning in Electrical & Electronics Engineering with scientific quest having focus on professional ethics and human values.',
        mission: [
            {
                id: 'DM1',
                text: 'Provide academic environment conducive for high quality learning in Electrical and Electronics Engineering to ensure our graduates have successful careers.',
            },
            {
                id: 'DM2',
                text: 'Strengthen industry institute interaction to enable the students work on real time problems and encourage them to engage in lifelong learning.',
            },
            {
                id: 'DM3',
                text: 'Ensure that our students are well trained to work in a team with professional ethics and apply latest tools for the solution of engineering problems.',
            },
        ],
        goals: 'EEE graduates will have successful careers in any organization or excel in higher education programs, be successful professionals with ethical values capable of working in multi-disciplinary areas, and practice lifelong learning to comprehend, analyze and design solutions for real life problems.',
        hodMessage: {
            name: 'Dr. S. Nagaraj',
            designation: 'Head of the Department, EEE',
            message: 'The EEE department strives to provide a comprehensive education that prepares students for successful careers in electrical engineering and related fields. We emphasize both theoretical foundations and practical skills, enabling our graduates to contribute effectively to power sector, automation, and the growing renewable energy industry.',
            image: '/Library 1.JPG',
        },
        faculty: [
            {
                name: 'Dr. S. Nagaraj',
                designation: 'Professor & Head',
                specialization: 'Power Systems & Smart Grid Technologies',
                qualification: 'Ph.D.',
            },
            {
                name: 'Dr. M. Lakshmi Prasad',
                designation: 'Professor',
                specialization: 'Control Systems & Automation',
                qualification: 'Ph.D.',
            },
            {
                name: 'Dr. B. Venkata Subbaiah',
                designation: 'Associate Professor',
                specialization: 'Renewable Energy Systems',
                qualification: 'Ph.D.',
            },
            {
                name: 'Mr. K. Ravi',
                designation: 'Associate Professor',
                specialization: 'Power Electronics & Industrial Drives',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. B. Aruna',
                designation: 'Assistant Professor',
                specialization: 'Electrical Machines & Transformers',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. P. Nagaraju',
                designation: 'Assistant Professor',
                specialization: 'High Voltage Engineering',
                qualification: 'M.Tech',
            },
        ],
        overview: [
            { title: 'Vision & Mission', content: '<p>Content coming soon.</p>' },
            { title: 'Course Expert Team', content: '<p>Content coming soon.</p>' },
            { title: 'Department Academic Committee(DAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Program Assessment Committee( PAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Academic Audit', content: '<p>Content coming soon.</p>' },
            { title: 'Board Of Studies', content: '<p>Content coming soon.</p>' },
            { title: 'Achievements', content: '<p>Content coming soon.</p>' },
            {
                title: 'News Letters',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/pubhtml?widget=true&amp;headers=false" width="100%" height="500" style="border: none; overflow: hidden;"></iframe>`
            },
            { title: 'Technical Magazine', content: '<p>Content coming soon.</p>' }
        ],
    },
    {
        slug: 'mec',
        code: 'MEC',
        name: 'Mechanical Engineering',
        fullName: 'Department of Mechanical Engineering',
        tagline: 'The most diverse discipline, spanning aerospace, thermal, and manufacturing.',
        description: [
            'The department at SRIT provides a comprehensive education covering thermodynamics, fluid mechanics, manufacturing processes, machine design, and automobile engineering. Students develop both theoretical knowledge and practical skills through well-equipped workshops and laboratories.',
            'The B.Tech Mechanical Engineering programme (4 years / 8 semesters) is affiliated to JNTU Anantapur and approved by AICTE. The programme covers a broad spectrum of mechanical engineering disciplines, preparing students for careers in manufacturing, design, automotive, aerospace, and energy sectors.',
            'Core subjects include Engineering Mechanics, Thermodynamics, Fluid Mechanics & Hydraulic Machinery, Manufacturing Technology, Theory of Machines, Machine Design, Heat Transfer, Metrology & Instrumentation, CAD/CAM, and Industrial Engineering.',
        ],
        highlights: [
            'AICTE-approved B.Tech Mechanical Engineering programme',
            'Manufacturing processes and machine design focus',
            'Well-equipped workshops and 12 laboratories (machining, welding, fluid mechanics, thermal)',
            'CAD/CAM software training (AutoCAD, ANSYS, SolidWorks, CATIA)',
            'Diverse career paths across manufacturing, automotive, aerospace, and energy sectors',
        ],
        image: '/Library.JPG',
        researchAreas: [
            'Thermal Sciences',
            'Advanced Manufacturing',
            'Robotics & Kinematics',
            'Materials Engineering',
        ],
        stats: {
            faculty: '30+',
            labs: '12',
            students: '500+',
            placement: '85%',
        },
        intake: 60,
        accreditation: 'AICTE Approved',
        eligibility: '10+2 with Physics, Chemistry & Mathematics (min. 45% marks; 40% for reserved categories). Admission through AP EAPCET / EAMCET. Lateral entry (20% seats) via AP ECET for Diploma holders.',
        vision: 'To become a quality department in Mechanical Engineering that makes its students well qualified, innovative contributors to their profession and society.',
        mission: [
            {
                id: 'DM1',
                text: 'Educate and prepare the students to acquire good technical skills.',
            },
            {
                id: 'DM2',
                text: 'Provide better exposure to cutting edge technologies and strengthening Institute-Industry interaction to solve realistic problems.',
            },
            {
                id: 'DM3',
                text: 'To pursue higher studies inculcating lifelong learning capabilities and encouraging students to become an Entrepreneur.',
            },
            {
                id: 'DM4',
                text: 'To motivate quality research by both faculty and students addressing the core issues in Mechanical Engineering.',
            },
        ],
        goals: 'MEC graduates will work as practicing Mechanical Engineers in public & private sectors, pursue higher education with lifelong learning skills, and participate as leaders accepting professional & social responsibilities with value addition to the nation.',
        hodMessage: {
            name: 'Dr. V. Krishna Reddy',
            designation: 'Head of the Department, MEC',
            message: 'The Mechanical Engineering department is committed to producing engineers who are well-versed in both traditional and modern manufacturing technologies. Our curriculum integrates classical mechanical engineering fundamentals with modern tools like CAD/CAM, FEA, and automation to produce industry-ready engineers. We encourage students to take up challenging projects, internships, and research activities to become innovative contributors to the nation.',
            image: '/BasketBall.JPG',
        },
        faculty: [
            {
                name: 'Dr. V. Krishna Reddy',
                designation: 'Professor & Head',
                specialization: 'Manufacturing Technology & CAD/CAM',
                qualification: 'Ph.D.',
            },
            {
                name: 'Dr. S. Narasimha Rao',
                designation: 'Professor',
                specialization: 'Thermal Engineering & Heat Transfer',
                qualification: 'Ph.D.',
            },
            {
                name: 'Dr. P. Ravi Shankar',
                designation: 'Associate Professor',
                specialization: 'Machine Design & FEA',
                qualification: 'Ph.D.',
            },
            {
                name: 'Mr. G. Durga Prasad',
                designation: 'Associate Professor',
                specialization: 'Fluid Mechanics & Hydraulic Machinery',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. A. Sridevi',
                designation: 'Assistant Professor',
                specialization: 'Materials Science & Metallurgy',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. K. Satish Kumar',
                designation: 'Assistant Professor',
                specialization: 'Robotics & Industrial Automation',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. M. Suresh',
                designation: 'Assistant Professor',
                specialization: 'Automobile Engineering & Dynamics',
                qualification: 'M.Tech',
            },
        ],
        overview: [
            { title: 'Vision & Mission', content: '<p>Content coming soon.</p>' },
            { title: 'Course Expert Team', content: '<p>Content coming soon.</p>' },
            { title: 'Department Academic Committee(DAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Program Assessment Committee( PAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Academic Audit', content: '<p>Content coming soon.</p>' },
            { title: 'Board Of Studies', content: '<p>Content coming soon.</p>' },
            { title: 'Achievements', content: '<p>Content coming soon.</p>' },
            {
                title: 'News Letters',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/pubhtml?widget=true&amp;headers=false" width="100%" height="500" style="border: none; overflow: hidden;"></iframe>`
            },
            { title: 'Technical Magazine', content: '<p>Content coming soon.</p>' }
        ],
    },
    {
        slug: 'cad',
        code: 'CAD',
        name: 'CSE — AI & Data Science',
        fullName: 'Department of CSE (Artificial Intelligence & Data Science)',
        tagline: 'Big data analytics, statistical inference, and AI-driven decision systems.',
        description: [
            'The CSE — AI & Data Science program equips students with cutting-edge skills in big data analytics, artificial intelligence, and data-driven decision-making. The curriculum combines core computer science fundamentals with specialized courses in data mining, statistical modeling, and predictive analytics.',
            'The B.Tech CSE (AI & Data Science) programme (4 years / 8 semesters) is affiliated to JNTU Anantapur and approved by AICTE. Students develop expertise in data engineering, cloud platforms, and business intelligence, preparing them for high-demand roles as data scientists, ML engineers, and analytics professionals.',
            'Core subjects include Statistics & Probability, Python for Data Science, Database Technologies, Big Data Analytics, Data Visualization, Machine Learning, Deep Learning, Business Intelligence, and Cloud Data Engineering.',
        ],
        highlights: [
            'AICTE-approved B.Tech CSE (AI & Data Science) specialization',
            'Cloud computing and data engineering skills (AWS, GCP, Azure)',
            'Industry collaboration and project-based learning',
            'Preparation for data science and ML engineering careers',
            'Big data tools: Hadoop, Spark, Kafka, Tableau',
        ],
        image: '/Transport.jpg',
        researchAreas: [
            'Big Data Analytics',
            'Predictive Modeling',
            'Machine Learning',
            'Business Intelligence',
        ],
        stats: {
            faculty: '15+',
            labs: '2',
            students: '180+',
            placement: '97%',
        },
        intake: 60,
        accreditation: 'AICTE Approved',
        eligibility: '10+2 with Physics, Chemistry & Mathematics (min. 45% marks; 40% for reserved categories). Admission through AP EAPCET / EAMCET. Lateral entry (20% seats) via AP ECET for Diploma holders.',
        vision: 'To be a pioneering department in AI & Data Science education, producing professionals who can harness data for intelligent decision-making and innovation.',
        mission: [
            {
                id: 'M1',
                text: 'To provide quality education in data science, analytics, and artificial intelligence with practical orientation.',
            },
            {
                id: 'M2',
                text: 'To develop expertise in big data technologies, cloud computing, and statistical modeling.',
            },
            {
                id: 'M3',
                text: 'To foster industry partnerships for real-world data science project experience.',
            },
            {
                id: 'M4',
                text: 'To produce ethical data scientists committed to responsible use of AI and data technologies.',
            },
        ],
        goals: 'To produce competent data scientists and AI engineers who can leverage data-driven approaches to solve complex business and societal challenges.',
        hodMessage: {
            name: 'Dr. A. Srinivas',
            designation: 'Head of the Department, CAD',
            message: 'The AI & Data Science department is focused on building a new generation of data professionals who can drive innovation through intelligent data analysis. With industry-aligned curriculum, cloud computing labs, and real-world project exposure, we ensure our graduates are equipped with the skills demanded by top employers in AI and data analytics.',
            image: '/culturalevent.jpg',
        },
        faculty: [
            {
                name: 'Dr. A. Srinivas',
                designation: 'Professor & Head',
                specialization: 'Data Science & Statistical Learning',
                qualification: 'Ph.D.',
            },
            {
                name: 'Dr. K. Ravindra',
                designation: 'Associate Professor',
                specialization: 'Big Data Analytics & Cloud Engineering',
                qualification: 'Ph.D.',
            },
            {
                name: 'Ms. P. Tejaswi',
                designation: 'Assistant Professor',
                specialization: 'Statistical Modeling & Data Visualization',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. G. Naresh',
                designation: 'Assistant Professor',
                specialization: 'Machine Learning & Predictive Modeling',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. T. Lakshmi Devi',
                designation: 'Assistant Professor',
                specialization: 'Business Intelligence & Data Warehousing',
                qualification: 'M.Tech',
            },
        ],
        overview: [
            { title: 'Vision & Mission', content: '<p>Content coming soon.</p>' },
            { title: 'Course Expert Team', content: '<p>Content coming soon.</p>' },
            { title: 'Department Academic Committee(DAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Program Assessment Committee( PAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Academic Audit', content: '<p>Content coming soon.</p>' },
            { title: 'Board Of Studies', content: '<p>Content coming soon.</p>' },
            { title: 'Achievements', content: '<p>Content coming soon.</p>' },
            {
                title: 'News Letters',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/pubhtml?widget=true&amp;headers=false" width="100%" height="500" style="border: none; overflow: hidden;"></iframe>`
            },
            { title: 'Technical Magazine', content: '<p>Content coming soon.</p>' }
        ],
    },
    {
        slug: 'civil',
        code: 'CIV',
        name: 'Civil Engineering',
        fullName: 'Department of Civil Engineering',
        tagline: 'Enhancing the standard of living through infrastructural development.',
        description: [
            'Students develop skills in design, analysis, and construction of infrastructure — from buildings and bridges to highways and water systems. The curriculum includes both theoretical knowledge and practical exposure through site visits and laboratory work.',
            'The B.Tech Civil Engineering programme (4 years / 8 semesters) is affiliated to JNTU Anantapur and approved by AICTE. The programme prepares students for careers in construction, urban planning, environmental engineering, and government infrastructure projects.',
            'Core subjects include Surveying, Engineering Geology, Structural Analysis, Concrete Technology, Fluid Mechanics, Geotechnical Engineering, Transportation Engineering, Environmental Engineering, Design of Steel Structures, and Project Management.',
        ],
        highlights: [
            'AICTE-approved B.Tech Civil Engineering programme',
            'Environmental engineering and sustainable development focus',
            'Design and analysis of infrastructure systems',
            'Practical exposure through site visits, labs (6 labs), and CAD software',
            'Career opportunities in construction, urban planning, and government agencies',
        ],
        image: '/labs.jpg',
        researchAreas: [
            'Structural Engineering',
            'Geotechnical Engineering',
            'Transportation Planning',
            'Sustainable Infrastructure',
        ],
        stats: {
            faculty: '22+',
            labs: '6',
            students: '380+',
            placement: '82%',
        },
        intake: 60,
        accreditation: 'AICTE Approved',
        eligibility: '10+2 with Physics, Chemistry & Mathematics (min. 45% marks; 40% for reserved categories). Admission through AP EAPCET / EAMCET. Lateral entry (20% seats) via AP ECET for Diploma holders.',
        vision: 'To become a premier department of learning in Civil Engineering that empowers its students to be technically sound, ethical and sensitive to environmental sustainability.',
        mission: [
            {
                id: 'DM1',
                text: 'Provide comprehensive learning experience to the students in designing Civil Engineering structures.',
            },
            {
                id: 'DM2',
                text: 'Nurture a strong research eco system that facilitates research and life-long learning.',
            },
            {
                id: 'DM3',
                text: 'Provide opportunities for students to work in contexts that make them ethical and useful to the society.',
            },
        ],
        goals: 'Civil Engineering graduates will become successful professionals in Government agencies/companies or entrepreneurs, responsible Civil Engineers with good leadership qualities, and engage in lifelong learning with good computational skills and multi-disciplinary approach.',
        hodMessage: {
            name: 'Dr. R. Suresh Kumar',
            designation: 'Head of the Department, Civil',
            message: 'The Civil Engineering department is dedicated to developing infrastructure professionals who can contribute to the nation\'s growth through sustainable construction practices. Our curriculum covers the entire spectrum of civil engineering disciplines, from surveying and structural design to environmental and transportation engineering. We prepare students to meet the challenges of modern infrastructure development with technical excellence and ethical responsibility.',
            image: '/sportfacilites.jpg',
        },
        faculty: [
            {
                name: 'Dr. R. Suresh Kumar',
                designation: 'Professor & Head',
                specialization: 'Structural Engineering & Concrete Technology',
                qualification: 'Ph.D.',
            },
            {
                name: 'Dr. P. Venkata Ramana',
                designation: 'Professor',
                specialization: 'Geotechnical Engineering & Foundation Design',
                qualification: 'Ph.D.',
            },
            {
                name: 'Dr. M. Narayana Rao',
                designation: 'Associate Professor',
                specialization: 'Transportation Engineering & Highway Design',
                qualification: 'Ph.D.',
            },
            {
                name: 'Mr. K. Srinivasa Rao',
                designation: 'Associate Professor',
                specialization: 'Construction Management & Project Planning',
                qualification: 'M.Tech',
            },
            {
                name: 'Ms. V. Lalitha',
                designation: 'Assistant Professor',
                specialization: 'Environmental Engineering & Water Resources',
                qualification: 'M.Tech',
            },
            {
                name: 'Mr. S. Ramana Reddy',
                designation: 'Assistant Professor',
                specialization: 'Surveying & Remote Sensing',
                qualification: 'M.Tech',
            },
        ],
        overview: [
            { title: 'Vision & Mission', content: '<p>Content coming soon.</p>' },
            { title: 'Course Expert Team', content: '<p>Content coming soon.</p>' },
            { title: 'Department Academic Committee(DAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Program Assessment Committee( PAC)', content: '<p>Content coming soon.</p>' },
            { title: 'Academic Audit', content: '<p>Content coming soon.</p>' },
            { title: 'Board Of Studies', content: '<p>Content coming soon.</p>' },
            { title: 'Achievements', content: '<p>Content coming soon.</p>' },
            {
                title: 'News Letters',
                content: `<iframe src="https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/pubhtml?widget=true&amp;headers=false" width="100%" height="500" style="border: none; overflow: hidden;"></iframe>`
            },
            { title: 'Technical Magazine', content: '<p>Content coming soon.</p>' }
        ],
    },
];

export function getDepartmentBySlug(slug: string): DepartmentData | undefined {
    return departments.find((d) => d.slug === slug);
}

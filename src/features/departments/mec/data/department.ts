import { gallery } from './gallery';

import type { DepartmentData } from '../../shared/types';

import MECOutcome from '../components/MECOutcome';
import MECEContent from '../components/MECEContent';
import MECFaculty from '../components/MECFaculty';
import MECStudents from '../components/MECStudents';
import MECStudentChapters from '../components/MECStudentChapters';


export const mecDepartment: DepartmentData = {
    "slug": "mec",
    "layout": "sidebar",
    "code": "MEC",
    "name": "Mechanical Engineering",
    "fullName": "Department of Mechanical Engineering",
    "tagline": "The most diverse discipline, spanning aerospace, thermal, and manufacturing.",
    "description": [
        "Mechanical Engineering, is perhaps the most diverse and versatile of the engineering disciplines. In addition to physics and mathematics, it encompasses key elements of aerospace, electrical, civil, chemical and even materials science and bio-engineering. Mechanical engineering touches virtually every aspect of modern life, from mobile phones and biomedical devices, to aircrafts and power plants. Not only engineering, mechanical engineers deal with economic issues, from the cost of a single component, to the economic impact of a manufacturing plant. Besides this, mechanical engineers can also be found in sales, engineering management, and corporate management. Versatility is another unique advantage in a world that is undergoing constant economic, political, industrial, and social change. Mechanical engineers are educated and positioned, not only to adapt, but to define and direct change.",
        "The Department of Mechanical Engineering was started in the year 2012 with a B. Tech. program in Mechanical Engineering with an intake of 60, the intake was increased to 120 in the year 2013. The department has competent and committed faculty members drawn from industry, practicing professionals and academicians to enhance the delivery of academic programs. The department has evolved a comprehensive student-centric learning approach, designed to add significant value to the learner’s understanding in an integrated manner through workshops, lab sessions, assignments, training, seminars, projects, and independent study. The hands-on training offered by our CAD/CAM and CAE laboratory in latest design and analysis software brings in a formal method of familiarizing with the industrial practices helps the students to apply their classroom knowledge to live industrial problems."
    ],
    "highlights": [
        "AICTE-approved B.Tech Mechanical Engineering programme",
        "Manufacturing processes and machine design focus",
        "Well-equipped workshops and 12 laboratories (machining, welding, fluid mechanics, thermal)",
        "CAD/CAM software training (AutoCAD, ANSYS, SolidWorks, CATIA)",
        "Diverse career paths across manufacturing, automotive, aerospace, and energy sectors"
    ],
    "image": "/departments/dept about us coverpages/mec.jpg",
    "researchAreas": [
        "Thermal Sciences",
        "Advanced Manufacturing",
        "Robotics & Kinematics",
        "Materials Engineering"
    ],
    "stats": {
        "faculty": "30+",
        "labs": "12",
        "students": "500+",
        "placement": "85%"
    },
    "intake": 60,
    "accreditation": "AICTE Approved",
    "eligibility": "10+2 with Physics, Chemistry & Mathematics (min. 45% marks; 40% for reserved categories). Admission through AP EAPCET / EAMCET. Lateral entry (20% seats) via AP ECET for Diploma holders.",
    "vision": "To become a quality department in Mechanical Engineering that makes its students well qualified, innovative contributors to their profession and society.",
    "mission": [
        {
            "id": "DM1",
            "text": "Educate and prepare the students to acquire good technical skills."
        },
        {
            "id": "DM2",
            "text": "Provide better exposure to cutting edge technologies and strengthening Institute-Industry interaction to solve realistic problems."
        },
        {
            "id": "DM3",
            "text": "To pursue higher studies inculcating lifelong learning capabilities and encouraging students to become an Entrepreneur."
        },
        {
            "id": "DM4",
            "text": "To motivate quality research by both faculty and students addressing the core issues in Mechanical Engineering."
        }
    ],
    "goals": "MEC graduates will work as practicing Mechanical Engineers in public & private sectors, pursue higher education with lifelong learning skills, and participate as leaders accepting professional & social responsibilities with value addition to the nation.",
    "hodMessage": {
        "name": "Dr. K. JOHN SAMUEL",
        "designation": "Associate Professor & Head",
        "message": "The Mechanical Engineering department is committed to producing engineers who are well-versed in both traditional and modern manufacturing technologies. Our curriculum integrates classical mechanical engineering fundamentals with modern tools like CAD/CAM, FEA, and automation to produce industry-ready engineers. We encourage students to take up challenging projects, internships, and research activities to become innovative contributors to the nation.",
        "image": ""
    },
    "faculty": [
        {
            "name": "Dr. K. JOHN SAMUEL",
            "designation": "Associate Professor & Head",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "19-06-2017",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/view/johnsamuel/"
        },
        {
            "name": "Dr. D. SAI CHAITANYA KISHORE",
            "designation": "Professor & Director IQAC",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "12-06-2017",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/srit.ac.in/me-dsck/"
        },
        {
            "name": "Dr. Y. RAMAMOHAN REDDY",
            "designation": "Professor",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "14-07-2014",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/srit.ac.in/ramamohan/home"
        },
        {
            "name": "Dr. B. ANJANEULU",
            "designation": "Professor",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "28-03-2022",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/srit.ac.in/anji/international-journals"
        },
        {
            "name": "Dr. S. SHARMAS VALI",
            "designation": "Associate Professor",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "18-04-2023",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/srit.ac.in/shaik-sharmas-vali/home"
        },
        {
            "name": "Dr. M. PEERU NAIK",
            "designation": "Associate Professor",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "09-12-2019",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/srit.ac.in/m-peeru-naik/home"
        },
        {
            "name": "Mr. A. VENKATA DHANUNJAYA REDDY",
            "designation": "Assistant Professor",
            "qualification": "M. Tech., (Ph. D.)",
            "joiningDate": "01-06-2012",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/srit.ac.in/a-venkata-dhanunjaya-reddy/home"
        },
        {
            "name": "Mr. K. BHARANI KUMAR REDDY",
            "designation": "Assistant Professor",
            "qualification": "M. Tech.",
            "joiningDate": "01-10-2008",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/d/1UD7k-A4ucbpo1auoBAA6GXrXqzyT7APc/p/1FC5NREjt0zvkyTXlOpv5PpvLol4kr6p7/edit"
        },
        {
            "name": "Mr. C. H. JOSEPH SUNDAR",
            "designation": "Assistant Professor",
            "qualification": "M. Tech.",
            "joiningDate": "21-06-2017",
            "association": "Regular"
        },
        {
            "name": "Mr. D. BALAJI",
            "designation": "Assistant Professor",
            "qualification": "M. Tech.",
            "joiningDate": "03-11-2021",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/view/dbalaji"
        },
        {
            "name": "Mrs. T KIRANMAYEE",
            "designation": "Assistant Professor",
            "qualification": "M. Tech.",
            "joiningDate": "18-01-2021",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/view/kiranmait/home"
        },
        {
            "name": "Mr. B. SREENIVASULU",
            "designation": "Assistant Professor",
            "qualification": "M. Tech.",
            "joiningDate": "07-08-2025",
            "association": "Regular"
        },
        {
            "name": "Mr. N. PAVAN KUMAR",
            "designation": "Assistant Professor",
            "qualification": "M. Tech.",
            "joiningDate": "27-02-2023",
            "association": "Regular"
        },
        {
            "name": "Mr. B. RAMESH",
            "designation": "Assistant Professor",
            "qualification": "M. Tech.",
            "joiningDate": "02-06-2025",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/view/bramesh/"
        }
    ],
    "overview": [
        {
            "title": "Vision & Mission",
            "content": "\n                <h4>VISION</h4>\n                <p>To become a quality department in Mechanical Engineering that makes its students well qualified, innovative contributors to their profession and society.</p>\n                <h4>MISSION</h4>\n                <p><strong>DM1:</strong> Educate and prepare the students to acquire good technical skills.</p>\n                <p><strong>DM2:</strong> Provide better exposure to cutting edge technologies and strengthening Institute-Industry interaction to solve realistic problems.</p>\n                <p><strong>DM3:</strong> To pursue higher studies inculcating lifelong learning capabilities and encouraging students to become an Entrepreneur.</p>\n                <p><strong>DM4:</strong> To motivate quality research by both faculty and students addressing the core issues in Mechanical Engineering.</p>\n            "
        },
        {
            "title": "Course Expert Team",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vRptJa4ikrz3hA8Kl4_FeAG-NLOzXp_K57Lx-nAlhG7HjB6UWA3S9kM-bD16oYlbw/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"800px\" style=\"border: none; border-radius: 8px;\"></iframe>"
        },
        {
            "title": "Department Academic Committee (DAC)",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTHowlVBYio6IxkKttGFTcJPkPVcta0f3y9OoGvckAs-meIwryuq-GcB-Getjb2lw/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"800px\" style=\"border: none; border-radius: 8px;\"></iframe>"
        },
        {
            "title": "Program Assessment Committee (PAC)",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vR-oSWjodV5T6qz0DUWqbO-mUrqn1S9E_cLGnOiYHWnv44ijgeePvJ1nTsMKvvjEoRWoTgMDjkLD0UU/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"800px\" style=\"border: none; border-radius: 8px;\"></iframe>"
        },
        {
            "title": "Academic Audit",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vSSANxiJAcgeeJ0xDTclcnaTi2rBbxtSkROMOPVnYWcNaW_NcLWhSH0_mdMgEyYTA/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"800px\" style=\"border: none; border-radius: 8px;\"></iframe>"
        },
        {
            "title": "Board Of Studies",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vSCO7YSydaAbQoWal13q1hYhoy3eGALr_e1kyZAVA7uHKxoygHyu1_S8qxkVQoCkA/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"800px\" style=\"border: none; border-radius: 8px;\"></iframe>"
        },
        {
            "title": "Achievements",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vSNMs1QGxjOoNhw4O6aNyyK633bm2e7RZELf_6qEaTNobQc2Xy3kBd2H6pS0-VAOg/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"800px\" style=\"border: none; border-radius: 8px;\"></iframe>"
        },
        {
            "title": "Newsletters",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vSnzyKAI9tgdYLmH5EX9eGYPGn5K_DiiBLS208DsyaEM97fPCGsrtkXkJGhp6dbnA/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"800px\" style=\"border: none; border-radius: 8px;\"></iframe>"
        },
        {
            "title": "Technical Magazine",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vRTCpRi1z2s1krljOS0BPAwBTJbgSlzUwLpZ4Gw7Z9PZ-l_VGr0AGIFxUAAAqMj3w/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"800px\" style=\"border: none; border-radius: 8px;\"></iframe>"
        }
    ],
    "courses": [
        {
            "key": "regulations",
            "title": "Academic Regulations & Syllabus",
            "iframeSrc": "https://docs.google.com/spreadsheets/d/e/2PACX-1vQE1ihp70Vqr32v6-IqOOTuBSCBauuLWWFj-05Q2xjwPFGe8B7sQMHRImkdkBQQ2w/pubhtml?widget=true&headers=false"
        },
        {
            "key": "calendar",
            "title": "Academic Calendar",
            "iframeSrc": "https://docs.google.com/spreadsheets/d/e/2PACX-1vQBfwrf1XbHYCUOb0GYVmeOCT6CM-WzxpNYK9wzmFuZqDpEF7iKRLjNqBZ5fFGMEA/pubhtml?widget=true&headers=false"
        },
        {
            "key": "outcomes",
            "title": "Course Outcomes",
            "iframeSrc": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS0BUpS2U0gw2WPbiTkdU4N0FxyzLgtgZ3fAFRb86TcTDGRSpRouhGjRvw8q3V4jQ/pubhtml?widget=true&headers=false"
        },
        {
            "key": "timetables",
            "title": "Time Tables",
            "iframeSrc": "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3Uqb_oH_i2aKiNCKdKl6FuSYcmD3V5vFdLkzrAi3EWA85lYPU-4i661_Ju3iZ0A/pubhtml?widget=true&headers=false"
        },
        {
            "key": "lessonplans",
            "title": "Lesson Plans",
            "iframeSrc": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS3okWKpTx7uA5-3mPgkWq0zj8Uq8FD9tGHraqUBb1h2J-AINW3ulrWTKzIaIzUrg/pubhtml?widget=true&headers=false"
        }
    ],

    components: {
        
        Outcome: MECOutcome,
        EContent: MECEContent,
        Faculty: MECFaculty,
        Students: MECStudents,
        StudentChapters: MECStudentChapters,
    },
    gallery,
};

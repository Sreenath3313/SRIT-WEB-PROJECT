export interface Faculty {
    id: string;
    name: string;
    department: string;
    specialization: string;
    image: string;
}

export const facultyProfiles: Faculty[] = [
    {
        id: 'fac-1',
        name: 'Dr. Anand Raman',
        department: 'Computer Science',
        specialization: 'Artificial Intelligence & Deep Learning',
        image: '/padmavathi.jpg'
    },
    {
        id: 'fac-2',
        name: 'Dr. Sarah Mathews',
        department: 'Electronics & Comm.',
        specialization: 'VLSI Design & Embedded Systems',
        image: '/principal.jpg'
    },
    {
        id: 'fac-3',
        name: 'Dr. Rajesh Kumar',
        department: 'Mechanical Engineering',
        specialization: 'Thermal Sciences & Robotics',
        image: '/ranjit.jpg'
    },
    {
        id: 'fac-4',
        name: 'Dr. Priya Reddy',
        department: 'Data Science',
        specialization: 'Big Data Analytics & NLP',
        image: '/sambasir.jpg'
    }
];

export interface ResearchLab {
    id: string;
    name: string;
    description: string;
    image: string;
}

export const researchLabs: ResearchLab[] = [
    {
        id: 'ai-lab',
        name: 'Artificial Intelligence Lab',
        description: 'Advanced computing facility focused on machine learning algorithms, natural language processing, and computer vision research.',
        image: '/srit.jpg'
    },
    {
        id: 'robotics-lab',
        name: 'Robotics & Automation Lab',
        description: 'State-of-the-art facility for developing autonomous systems, industrial robotic arms, and drone technologies.',
        image: '/srit1.jpg'
    },
    {
        id: 'embedded-systems-lab',
        name: 'Embedded Systems Lab',
        description: 'Equipped with cutting-edge microcontrollers, DSP kits, and FPGA development boards for IoT and edge computing solutions.',
        image: '/Campus.JPG'
    },
    {
        id: 'data-science-lab',
        name: 'Data Science Research Lab',
        description: 'High-performance computing cluster dedicated to big data analytics, statistical modeling, and predictive systems.',
        image: '/College 1.jpg'
    }
];

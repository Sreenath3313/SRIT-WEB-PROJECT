export interface Alumni {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    batch: string;
}

export const alumniStories: Alumni[] = [
    {
        id: 'al-1',
        name: 'Karthik Reddy',
        role: 'Senior Software Engineer',
        company: 'Google',
        batch: '2016',
        image: '/Hemanth.png'
    },
    {
        id: 'al-2',
        name: 'Sneha Verma',
        role: 'Data Scientist',
        company: 'Microsoft',
        batch: '2018',
        image: '/venkatesh.png'
    },
    {
        id: 'al-3',
        name: 'Arjun Desai',
        role: 'Lead Cloud Architect',
        company: 'Amazon Web Services',
        batch: '2015',
        image: '/vijay bhaskar.png'
    },
    {
        id: 'al-4',
        name: 'Meenakshi Iyer',
        role: 'Product Manager',
        company: 'Atlassian',
        batch: '2017',
        image: '/csmhod.jpg'
    }
];

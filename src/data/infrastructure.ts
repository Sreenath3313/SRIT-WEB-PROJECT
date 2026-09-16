export interface Infrastructure {
    id: string;
    name: string;
    description: string;
    image: string;
    span?: string;
}

export const infrastructureData: Infrastructure[] = [
    {
        id: 'infra-1',
        name: 'Modern Books & Library',
        description: 'Vast collection of 51,477 Volumes, 36+ National & International Journals, and a Digital library with 12 systems to access E-resources.',
        image: 'library.jpg',
        span: 'md:col-span-2'
    },
    {
        id: 'infra-2',
        name: 'Transportation Facilities',
        description: 'The institution runs 29 buses covering important points in Anantapur City and nearby towns, seating 4000 students in two shifts.',
        image: 'Transport.jpg'
    },
    {
        id: 'infra-3',
        name: 'Sports Complex',
        description: 'Indoor stadium, modern gymnasium, and expansive outdoor courts for all major athletic activities.',
        image: 'sports.jpg'
    },
    {
        id: 'infra-4',
        name: 'Advance Internship Programs',
        description: 'Programs for all streams with personal development to integrate skills as per market level so they can inherit performance.',
        image: '/sports.jpg',
        span: 'md:col-span-2'
    }
];

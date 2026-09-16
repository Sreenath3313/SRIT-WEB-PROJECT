export interface EventItem {
    id: string;
    title: string;
    dateStr: string;
    month: string;
    day: string;
    type: string;
}

export const upcomingEvents: EventItem[] = [
    {
        id: 'ev-1',
        title: 'SURGETHON2K26 #InnovationMarathon',
        dateStr: 'June 18, 2026',
        month: 'JUN',
        day: '18',
        type: 'Hackathon'
    },
    {
        id: 'ev-2',
        title: 'FPGA Webinar #CloudComputing #EdgeComputing',
        dateStr: 'June 24, 2026',
        month: 'JUN',
        day: '24',
        type: 'Webinar'
    },
    {
        id: 'ev-3',
        title: 'Generative AI Expert Talk',
        dateStr: 'July 05, 2026',
        month: 'JUL',
        day: '05',
        type: 'Expert Talk'
    },
    {
        id: 'ev-4',
        title: 'SRIT Hackathon - Ignite70',
        dateStr: 'July 12, 2026',
        month: 'JUL',
        day: '12',
        type: 'Competition'
    }
];

export interface NewsItem {
    id: string;
    headline: string;
    date: string;
    summary: string;
    category: string;
}

export const newsUpdates: NewsItem[] = [
    {
        id: 'news-1',
        category: 'Examinations',
        headline: 'JNTUA B.Tech Regular & Supplementary Exams Registration Schedule Released',
        date: 'May 2026',
        summary: 'Official registration links for JNTU Anantapur B.Tech IV Year II Semester (R20) Regular & Supplementary examinations are active. Students must apply before the deadline.'
    },
    {
        id: 'news-2',
        category: 'Symposium',
        headline: 'National Level Technical Symposium (IGNITE-2026) Set for June 12th',
        date: 'April 2026',
        summary: 'The Department of CSE will host its annual national-level technical symposium, IGNITE-2026. Activities include paper presentation, coding battle, and model display.'
    },
    {
        id: 'news-3',
        category: 'Guest Lectures',
        headline: 'Expert Talk on Big Data Analytics & Cloud Infrastructure Architectures',
        date: 'March 2026',
        summary: 'Dr. Anand Raman, Principal Research Scientist, will deliver an offline guest lecture on distributed file systems and cloud analytics architectures for CSE students.'
    }
];

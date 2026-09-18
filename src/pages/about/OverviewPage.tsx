import React from 'react';
import AboutUsLayout from '../../features/about/components/AboutUsLayout';

const OverviewPage: React.FC = () => {
    return (
        <AboutUsLayout title="Overview">
            <div className="mb-8">
                <img 
                    src="https://www.srit.ac.in/wp-content/uploads/2021/12/srini-ramanuj-img-main.jpeg" 
                    alt="SRIT Campus Overview" 
                    className="w-full h-auto rounded-xl shadow-sm object-cover"
                />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#0A0903] mb-6">Overview Of Campus</h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                    Established in the year 2008 and reputable as one of the leading educational institutions in the technical and engineering space. (Permanently) Affiliated to JNTU Ananthapuramu, the institute has been approved by the AICTE New Delhi, and has an enviable record of producing Engineering graduates who have achieved success in their chosen fields of endeavors. All this (is) in the space of just 12 years.
                </p>
                <p>
                    Situated at the outskirts of Rotarypuram Village, B.K. Samudram Mandal in the district of Ananthapuramu, (and) is the brainchild of Sri Aluru Sambasiva Reddy. While he was a professor in the field of engineering, he realised that Ananthapuramu lacked a quality technical institute that catered to students from rural areas and those from the economically challenged strata of society. Hence, he started a non-profit organisation which has a focus on imparting the best technical education to these students.
                </p>
                <p>
                    Managed under the Aegis of the Smt. Aluru Narayanamma Memorial Educational Society, SRIT aims to become one of the best technical institutes in the country.
                </p>
            </div>

            <hr className="my-10 border-neutral-200" />

            <h2 className="text-2xl font-serif font-bold text-[#0A0903] mb-6">Smt. Aluru Narayanamma Memorial Educational Society</h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                    This Society was established by Founder-cum-Secretary Sri Aluru Sambasiva Reddy in November 2007 in memory of his mother, Late Smt. Aluru Narayanamma, to give shape to his firm belief that "EDUCATION IS A KEY ENABLER FOR PROGRESS". This was a belief his late mother had instilled in his mind at an early age. This belief has shaped his entire life – he himself excelled in his scholastic years and then became a tutor, teaching students not only his subject but also imparting higher human values. As his career progressed, he wanted to ensure that maximum students from rural and developing areas could derive benefit from this credo. And so, he started this Society. The main objective of Society is to provide:
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-neutral-50 rounded-r-lg italic text-lg font-medium text-neutral-800">
                    "value based education & employment avenues for rural students"
                </blockquote>
            </div>

            <hr className="my-10 border-neutral-200" />

            <h2 className="text-2xl font-serif font-bold text-[#0A0903] mb-6">Vision</h2>
            <p className="text-neutral-600 leading-relaxed">
                To become a premier Educational Institution in India offering the best teaching and learning environment for our students that will enable them to become complete individuals with professional competency, human touch, ethical values, service motto, and a strong sense of responsibility towards environment and society at large.
            </p>
        </AboutUsLayout>
    );
};

export default OverviewPage;

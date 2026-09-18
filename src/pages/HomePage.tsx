import Navbar from '../components/layout/Navbar';
import Hero from '../features/home/Hero';
import Stats from '../features/home/Stats';
import About from '../features/home/About';
import CampusLife from '../features/campus/CampusLife';
import AlumniSuccess from '../features/placements/AlumniSuccess';
import Placements from '../features/placements/Placements';
import UpcomingEvents from '../features/home/UpcomingEvents';
import Admissions from '../features/admissions/Admissions';
import Footer from '../components/layout/Footer';
import Accreditations from '../features/home/Accreditations';
import GlobalTieUps from '../features/institution/GlobalTieUps';
import LeadershipVision from '../features/institution/LeadershipVision';
import SocialMediaFeeds from '../features/home/SocialMediaFeeds';
import CSRActivities from '../features/institution/CSRActivities';
import StudentAchievements from '../features/campus/StudentAchievements';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <section className="bg-white relative overflow-hidden pt-12 pb-2 lg:pt-16 lg:pb-4">
                    {/* Subtle dot-grid background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
                    
                    <div className="relative section-container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                            {/* Left Column: Accreditations */}
                            <div className="flex">
                                <Accreditations />
                            </div>
                            
                            {/* Right Column: Stats */}
                            <div className="flex">
                                <Stats />
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Aesthetic Dark Horizontal Divider */}
                <div className="w-full bg-white flex justify-center py-6 lg:py-8 relative z-10">
                    <div className="w-[92%] max-w-[1400px] h-[3px] bg-primary rounded-full" />
                </div>

                <About />
                <GlobalTieUps />
                <LeadershipVision />
                <CampusLife />
                <Placements />
                <AlumniSuccess />
                <StudentAchievements />
                <UpcomingEvents />
                <CSRActivities />
                <SocialMediaFeeds />
                <Admissions />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;

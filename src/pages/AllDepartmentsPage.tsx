import React from 'react';
import Navbar from '../components/layout/Navbar';
import Departments from '../features/departments/Departments';
import Footer from '../components/layout/Footer';

const AllDepartmentsPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col pt-[114px] bg-warm-50">
            <Navbar />
            <main className="flex-1 py-8 sm:py-12">
                <Departments />
            </main>
            <Footer />
        </div>
    );
};

export default AllDepartmentsPage;

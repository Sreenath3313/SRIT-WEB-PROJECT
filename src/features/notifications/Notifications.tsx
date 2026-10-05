import React from 'react';
import { FileText, Calendar, GraduationCap } from 'lucide-react';

const Notifications: React.FC = () => {
    return (
        <div className="w-full pb-16">

            {/* Main Heading */}
            <h2
                className="text-center font-sans font-black text-[#FF5422] uppercase tracking-wider mb-10"
                style={{
                    fontSize: 'clamp(1.5rem, 2.2vw, 2.5rem)',
                    lineHeight: '1',
                }}
            >
                NOTIFICATIONS
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

                {/* Circulars */}
                <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-neutral-100 h-[600px]">
                    <div className="bg-[#f97316] text-white p-4 flex items-center gap-2">
                        <FileText size={20} />
                        <h3 className="font-bold text-lg tracking-wide">
                            Circulars
                        </h3>
                    </div>

                    <div className="flex-1 w-full">
                        <iframe
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT6-1d8VToVqcw7MOziEPqvvJty0mNYfLI0RnZB_AkaAD9-ki525FVfbUYJXwisdQ/pubhtml?widget=true&headers=false"
                            className="w-full h-full border-0"
                            title="Circulars"
                        />
                    </div>
                </div>

                {/* Examination */}
                <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-neutral-100 h-[600px]">
                    <div className="bg-[#f97316] text-white p-4 flex items-center gap-2">
                        <Calendar size={20} />
                        <h3 className="font-bold text-lg tracking-wide">
                            Examination
                        </h3>
                    </div>

                    <div className="flex-1 w-full">
                        <iframe
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQbUoa40R0QfaHVVE10uNK6hqKmpNhA5Lx5n4-cvw8Pl5WqWq9vdsjHscJJjeFP4Q/pubhtml?widget=true&headers=false"
                            className="w-full h-full border-0"
                            title="Examination"
                        />
                    </div>
                </div>

                {/* Placements */}
                <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-neutral-100 h-[600px]">
                    <div className="bg-[#f97316] text-white p-4 flex items-center gap-2">
                        <GraduationCap size={20} />
                        <h3 className="font-bold text-lg tracking-wide">
                            Placements
                        </h3>
                    </div>

                    <div className="flex-1 w-full">
                        <iframe
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQTZd0sE4NNfuBvjbukFstbZlMTx5Nb8lTjScfA7w8wJgYUuM9RGY3c1DFDvqFYAg/pubhtml?widget=true&headers=false"
                            className="w-full h-full border-0"
                            title="Placements"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Notifications;
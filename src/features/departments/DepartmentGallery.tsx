import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DepartmentData } from '../../data/departments';

interface DepartmentGalleryProps {
    dept: DepartmentData;
}

interface GalleryImage {
    src: string;
    caption: string;
    category: string;
}

/* ── Gallery data per department ───────────────────────── */

const galleryData: Record<string, GalleryImage[]> = {
    cse: [
        { src: '/culturalevent.jpg', caption: 'Annual Hackathon 2025', category: 'Events' },
        { src: '/labs.jpg', caption: 'Coding Lab Session', category: 'Labs' },
        { src: '/sportfacilites.jpg', caption: 'Team Project Discussion', category: 'Students' },
        { src: '/sports.jpg', caption: 'Workshop on Cloud Computing', category: 'Events' },
        { src: '/srit.jpg', caption: 'Coding Club Meet', category: 'Clubs' },
        { src: '/srit1.jpg', caption: 'Student Seminar Presentation', category: 'Students' },
        { src: '/Campus.JPG', caption: 'Tech Fest Opening Ceremony', category: 'Events' },
        { src: '/College 1.jpg', caption: 'Placement Training Session', category: 'Students' },
        { src: '/College 2.JPG', caption: 'AI & ML Workshop', category: 'Events' },
        { src: '/College 3.JPG', caption: 'Computer Lab Infrastructure', category: 'Labs' },
        { src: '/College.JPG', caption: 'Innovation Club Brainstorm', category: 'Clubs' },
        { src: '/ComputerLab.JPG', caption: 'Annual Day Celebration', category: 'Events' },
    ],
    csm: [
        { src: '/Library 1.JPG', caption: 'AI Research Lab', category: 'Labs' },
        { src: '/Library.JPG', caption: 'Robotics Club Demo', category: 'Clubs' },
        { src: '/BasketBall.JPG', caption: 'ML Project Showcase', category: 'Students' },
        { src: '/Transport.jpg', caption: 'Deep Learning Workshop', category: 'Events' },
        { src: '/culturalevent.jpg', caption: 'Neural Networks Seminar', category: 'Events' },
        { src: '/labs.jpg', caption: 'AI Club Meeting', category: 'Clubs' },
        { src: '/sportfacilites.jpg', caption: 'Hackathon Participants', category: 'Students' },
        { src: '/sports.jpg', caption: 'Tech Symposium', category: 'Events' },
    ],
    ece: [
        { src: '/srit.jpg', caption: 'Circuit Design Lab', category: 'Labs' },
        { src: '/srit1.jpg', caption: 'Electronics Workshop', category: 'Events' },
        { src: '/Campus.JPG', caption: 'VLSI Design Session', category: 'Labs' },
        { src: '/College 1.jpg', caption: 'ECE Student Group', category: 'Students' },
        { src: '/College 2.JPG', caption: 'IoT Project Expo', category: 'Events' },
        { src: '/College 3.JPG', caption: 'Embedded Systems Club', category: 'Clubs' },
        { src: '/College.JPG', caption: 'Signal Processing Seminar', category: 'Events' },
        { src: '/ComputerLab.JPG', caption: 'Industry Visit', category: 'Students' },
    ],
    eee: [
        { src: '/Library 1.JPG', caption: 'Power Systems Lab', category: 'Labs' },
        { src: '/Library.JPG', caption: 'Renewable Energy Workshop', category: 'Events' },
        { src: '/BasketBall.JPG', caption: 'EEE Students Team', category: 'Students' },
        { src: '/Transport.jpg', caption: 'Electrical Machines Demo', category: 'Events' },
        { src: '/culturalevent.jpg', caption: 'Energy Club Meet', category: 'Clubs' },
        { src: '/labs.jpg', caption: 'Annual Tech Fest', category: 'Events' },
    ],
    mec: [
        { src: '/sportfacilites.jpg', caption: 'Workshop Practical Session', category: 'Labs' },
        { src: '/sports.jpg', caption: 'CAD/CAM Lab', category: 'Labs' },
        { src: '/srit.jpg', caption: 'Design Competition', category: 'Events' },
        { src: '/srit1.jpg', caption: 'Mechanical Students', category: 'Students' },
        { src: '/Campus.JPG', caption: 'SAE Club Activities', category: 'Clubs' },
        { src: '/College 1.jpg', caption: 'Industrial Visit', category: 'Events' },
    ],
    cad: [
        { src: '/College 2.JPG', caption: 'Data Analytics Lab', category: 'Labs' },
        { src: '/College 3.JPG', caption: 'Data Science Workshop', category: 'Events' },
        { src: '/College.JPG', caption: 'AI&DS Student Team', category: 'Students' },
        { src: '/ComputerLab.JPG', caption: 'Kaggle Club Meetup', category: 'Clubs' },
        { src: '/Library 1.JPG', caption: 'Data Hackathon', category: 'Events' },
        { src: '/Library.JPG', caption: 'Guest Lecture on Big Data', category: 'Students' },
    ],
    civil: [
        { src: '/BasketBall.JPG', caption: 'Construction Site Visit', category: 'Events' },
        { src: '/Transport.jpg', caption: 'Surveying Practical', category: 'Labs' },
        { src: '/culturalevent.jpg', caption: 'Civil Engineering Students', category: 'Students' },
        { src: '/labs.jpg', caption: 'Bridge Model Competition', category: 'Events' },
        { src: '/sportfacilites.jpg', caption: 'ASCE Student Chapter', category: 'Clubs' },
        { src: '/sports.jpg', caption: 'Geo-Technical Seminar', category: 'Events' },
    ],
};

const categories = ['All', 'Events', 'Students', 'Clubs', 'Labs'];

const DepartmentGallery: React.FC<DepartmentGalleryProps> = ({ dept }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const images = galleryData[dept.slug] || galleryData['cse'];
    const filtered = activeCategory === 'All'
        ? images
        : images.filter((img) => img.category === activeCategory);

    return (
        <div className="space-y-8">
            {/* ── Header ───────────────────────────────────── */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] rounded-full" style={{ background: '#F85E00' }} />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#F85E00' }}>
                        {dept.code} · Gallery
                    </span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-3" style={{ color: '#0A0903' }}>
                    Photo Gallery
                </h2>
                <p className="text-neutral-600 text-base max-w-2xl leading-relaxed">
                    A glimpse into the vibrant life of the {dept.name} department — events, student activities, clubs, and laboratories.
                </p>
            </div>

            {/* ── Category Filter ──────────────────────────── */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="px-5 py-2.5 text-[15px] font-medium rounded-full transition-all duration-300 shrink-0"
                        style={{
                            background: activeCategory === cat ? '#F85E00' : 'white',
                            color: activeCategory === cat ? 'white' : '#0A0903',
                            border: `1px solid ${activeCategory === cat ? '#F85E00' : 'rgba(248, 94, 0, 0.12)'}`,
                            boxShadow: activeCategory === cat ? '0 4px 12px rgba(248, 94, 0, 0.25)' : '0 1px 4px rgba(0,0,0,0.03)',
                        }}
                        onMouseEnter={(e) => {
                            if (activeCategory !== cat) {
                                e.currentTarget.style.borderColor = '#FFB563';
                                e.currentTarget.style.background = 'rgba(255, 210, 157, 0.15)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeCategory !== cat) {
                                e.currentTarget.style.borderColor = 'rgba(248, 94, 0, 0.12)';
                                e.currentTarget.style.background = 'white';
                            }
                        }}
                    >
                        {cat}
                    </button>
                ))}
                <span className="text-sm text-neutral-400 ml-2 shrink-0">
                    {filtered.length} photos
                </span>
            </div>

            {/* ── Image Grid ──────────────────────────────── */}
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <AnimatePresence mode="popLayout">
                    {filtered.map((img, index) => (
                        <motion.div
                            key={img.src + img.caption}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.35, delay: index * 0.04 }}
                            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                            style={{
                                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                            }}
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay on hover */}
                            <div
                                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(to top, rgba(10, 9, 3, 0.85) 0%, transparent 60%)',
                                }}
                            >
                                <p className="text-white text-base font-medium leading-snug">
                                    {img.caption}
                                </p>
                                <span
                                    className="inline-block mt-1.5 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full w-fit"
                                    style={{ background: 'rgba(248, 94, 0, 0.8)', color: 'white' }}
                                >
                                    {img.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* ── Lightbox Modal ───────────────────────────── */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6"
                        style={{ background: 'rgba(10, 9, 3, 0.9)', backdropFilter: 'blur(8px)' }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
                            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.caption}
                                className="w-full h-full object-contain"
                                style={{ maxHeight: '75vh' }}
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 px-6 py-4"
                                style={{ background: 'linear-gradient(to top, rgba(10, 9, 3, 0.9) 0%, transparent 100%)' }}
                            >
                                <p className="text-white font-serif text-xl font-semibold">
                                    {selectedImage.caption}
                                </p>
                                <span
                                    className="inline-block mt-1 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                                    style={{ background: '#F85E00', color: 'white' }}
                                >
                                    {selectedImage.category}
                                </span>
                            </div>
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                                style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = '#F85E00'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DepartmentGallery;

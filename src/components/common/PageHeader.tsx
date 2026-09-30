import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  categoryTitle?: string;
  icon?: React.ReactNode;
}

export default function PageHeader({ title, categoryTitle }: PageHeaderProps) {
  const coverImage = '/coverpage.png';

  return (
    <div className="relative mb-12 lg:mb-16">
      {/* Top Banner Image Area */}
      <div className="relative h-[45vh] lg:h-[55vh] min-h-[400px] w-full overflow-hidden bg-[#0A0903] mt-[90px] lg:mt-[110px]">
        {/* Main Banner Image */}
        <motion.img
          src={coverImage}
          alt="SRIT Cover"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Sleek Bottom Gradient to blend into the title */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0903] via-[#0A0903]/60 to-transparent pointer-events-none" />

        {/* Premium Glassmorphism Title Card */}
        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 pb-8 lg:pb-12 z-10 pointer-events-none flex justify-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-[1100px] w-full"
          >
            <div className="inline-block bg-neutral-900/90 border-t-4 border-t-primary border-x border-b border-neutral-800 shadow-md rounded-xl p-6 sm:p-8 lg:px-12 lg:py-8 pointer-events-auto overflow-hidden relative group">
              
              {categoryTitle && (
                <p className="text-primary text-sm sm:text-base font-bold tracking-[.2em] uppercase mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-primary rounded-full"></span>
                  {categoryTitle}
                </p>
              )}
              <h1 className="relative font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide leading-tight drop-shadow-lg">
                {title}
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

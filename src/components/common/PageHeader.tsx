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
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0903] via-[#0A0903]/40 to-transparent opacity-80" />

        {/* Centered Premium Title Card */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-8 lg:pb-12 z-10 flex justify-center pointer-events-none">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="pointer-events-auto w-full max-w-2xl px-4"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
              {/* Subtle accent glow behind the text */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-primary/80 blur-sm rounded-full" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-primary rounded-full" />

              {categoryTitle && (
                <p className="text-primary text-sm sm:text-base font-bold tracking-[.25em] uppercase mb-4 flex items-center justify-center gap-3">
                  <span className="w-8 h-[2px] bg-primary/60 rounded-full"></span>
                  {categoryTitle}
                  <span className="w-8 h-[2px] bg-primary/60 rounded-full"></span>
                </p>
              )}
              
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide leading-tight drop-shadow-md">
                {title}
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

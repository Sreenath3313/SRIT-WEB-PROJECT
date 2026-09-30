{/* LEFT SIDEBAR — CSE Reference Match */}
                        <aside
                            className="hidden lg:flex w-[280px] shrink-0 sticky top-[62px] self-start h-[calc(100vh-62px)] flex-col overflow-hidden"
                            style={{ background: '#1C2133', boxShadow: '4px 0 20px rgba(0,0,0,0.25)' }}
                        >

                            {/* ── HEADER: graduation cap + CSE / Department ── */}
                            <div
                                className="flex items-center gap-3 px-5 py-5 shrink-0"
                                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                            >
                                {/* Orange rounded icon container */}
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                    style={{
                                        background: 'linear-gradient(145deg, #FF8C42 0%, #F4511E 100%)',
                                        boxShadow: '0 4px 12px rgba(244,81,30,0.40)',
                                    }}
                                >
                                    <GraduationCap size={20} strokeWidth={2} color="#fff" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-[15px] leading-tight tracking-wide">CSE</p>
                                    <p className="text-[13px] leading-tight mt-[2px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Department</p>
                                </div>
                            </div>

                            {/* ── NAVIGATION ── */}
                            <nav className="flex-1 overflow-y-auto py-3 flex flex-col gap-[2px] scrollbar-hide px-3">
                                {currentSidebarItems.map((item, index) => {
                                    const active = activeTab === item.key || (item.key === 'about' && activeTab === '');
                                    return (
                                        <motion.button
                                            key={item.key}
                                            type="button"
                                            onClick={() => handleTabChange(item.key)}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + index * 0.04, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                                            className="w-full flex items-center gap-3 px-3 py-[10px] rounded-xl text-left transition-all duration-200"
                                            style={active ? {
                                                background: 'linear-gradient(135deg, #FF8C42 0%, #F4511E 100%)',
                                                boxShadow: '0 4px 18px rgba(244,81,30,0.38)',
                                            } : {
                                                background: 'transparent',
                                            }}
                                        >
                                            {/* Icon */}
                                            <span
                                                className="flex items-center justify-center w-[22px] h-[22px] shrink-0"
                                                style={{ color: active ? '#fff' : 'rgba(255,255,255,0.45)' }}
                                            >
                                                {item.icon}
                                            </span>

                                            {/* Label */}
                                            <span
                                                className="flex-1 text-[13.5px] font-semibold leading-snug"
                                                style={{ color: active ? '#fff' : 'rgba(255,255,255,0.65)' }}
                                            >
                                                {item.label}
                                            </span>

                                            {/* Chevron — active only */}
                                            {active && (
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
                                                    <path d="M5.5 3.5l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </nav>

                            {/* ── BOTTOM: CollegeMain.jpg + Learn/Innovate/Lead ── */}
                            <div className="relative shrink-0 overflow-hidden" style={{ height: '160px' }}>

                                {/* Image with top mask blend */}
                                <img
                                    src="/CollegeMain.jpg"
                                    alt="SRIT Campus"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 35%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 35%)',
                                    }}
                                />

                                {/* Dark + orange tint overlay */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(20,16,10,0.88) 0%, rgba(200,70,20,0.30) 55%, transparent 100%)',
                                    }}
                                />

                                {/* Learn / Innovate / Lead */}
                                <div className="absolute bottom-0 left-0 right-0 pb-5 px-5 flex items-stretch gap-[10px] z-10">
                                    {/* Vertical orange line */}
                                    <div
                                        className="w-[2.5px] rounded-full shrink-0 self-stretch"
                                        style={{ background: '#F4511E', minHeight: '46px' }}
                                    />
                                    <div className="flex flex-col gap-[1px]">
                                        <span className="text-white text-[13px] font-semibold leading-snug" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>Learn</span>
                                        <span className="text-[13px] font-bold leading-snug" style={{ color: '#FF8C42', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>Innovate</span>
                                        <span className="text-white text-[13px] font-semibold leading-snug" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>Lead</span>
                                    </div>
                                </div>
                            </div>

                        </aside>

                        
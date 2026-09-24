import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

// To display a live Instagram feed without complex backend authentication or paid third-party tools, 
// a free customized widget must be created by the account owner on platforms like Curator.io, Elfsight, or Taggbox.
// For this template, we are using a placeholder iframe that perfectly mimics a live feed widget 
// until an actual Widget ID is provided by the SRIT admin.


const SocialMediaFeeds: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Load Elfsight Script dynamically for Instagram
    useEffect(() => {
        const scriptId = 'elfsight-platform';
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }

        const twScriptId = 'twitter-wjs';
        let twScript = document.getElementById(twScriptId) as HTMLScriptElement;
        if (!twScript) {
            twScript = document.createElement('script');
            twScript.id = twScriptId;
            twScript.src = "https://platform.twitter.com/widgets.js";
            twScript.async = true;
            twScript.charset = 'utf-8';
            document.body.appendChild(twScript);
        }
    }, []);

    return (
        <section ref={ref} className="pt-10 lg:pt-20 pb-4 lg:pb-8 bg-neutral-50 relative overflow-hidden">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-4">
                        Campus Life & Updates
                    </p>
                    <h2 className="font-serif text-3xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
                        Connect With SRIT
                    </h2>
                    <p className="mt-6 text-neutral-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
                        Stay updated with the latest news, events, and everyday life at our vibrant campus through our official digital channels.
                    </p>
                </motion.div>

                {/* Feeds Container */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1300px] mx-auto justify-items-center">

                    {/* 1. Instagram Feed (Live Elfsight Widget) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col w-full max-w-[420px] overflow-hidden h-[500px] md:h-[600px] relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col pt-4 overflow-hidden bg-neutral-50">
                            <div className="flex justify-center mb-2 shrink-0 z-10 w-full px-4">
                                <a href="https://instagram.com/sritatp" target="_blank" rel="noreferrer" className="text-[13px] md:text-[14px] font-bold text-neutral-900 border border-neutral-200 bg-white px-4 py-1.5 rounded-full hover:bg-neutral-50 transition-colors shadow-sm text-center truncate">
                                    View @sritatp on Instagram
                                </a>
                            </div>
                            <div className="flex-1 w-full bg-white relative overflow-y-auto custom-scrollbar mt-2 flex justify-center pt-2">
                                {/* Live Elfsight Widget */}
                                <div className="elfsight-app-6e1a9c1a-2f8e-405a-808a-92f57c6cdbde w-full max-w-full" data-elfsight-app-lazy></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Facebook Feed */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col w-full max-w-[420px] overflow-hidden h-[500px] md:h-[600px] relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col pt-4 overflow-hidden bg-neutral-50">
                            <div className="flex justify-center mb-2 shrink-0 z-10 w-full px-4">
                                <a href="https://www.facebook.com/sritatp/" target="_blank" rel="noreferrer" className="text-[13px] md:text-[14px] font-bold text-neutral-900 border border-neutral-200 bg-white px-4 py-1.5 rounded-full hover:bg-neutral-50 transition-colors shadow-sm text-center truncate">
                                    View SRIT on Facebook
                                </a>
                            </div>
                            <div className="flex-1 w-full bg-white relative overflow-hidden mt-2 flex justify-center items-start pt-2">
                                <iframe
                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsritatp%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                                    width="340"
                                    height="500"
                                    style={{ border: "none", overflow: "hidden", minHeight: "500px", width: "100%", maxWidth: "340px" }}
                                    scrolling="no"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    className="max-w-full"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. X (Twitter) Feed */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col w-full max-w-[420px] overflow-hidden h-[500px] md:h-[600px] relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col pt-4 overflow-hidden bg-neutral-50">
                            <div className="flex justify-center mb-2 shrink-0 z-10 w-full px-4">
                                <a href="https://x.com/sritatp" target="_blank" rel="noreferrer" className="text-[13px] md:text-[14px] font-bold text-neutral-900 border border-neutral-200 bg-white px-4 py-1.5 rounded-full hover:bg-neutral-50 transition-colors shadow-sm text-center truncate">
                                    View @sritatp on X
                                </a>
                            </div>
                            <div className="flex-1 w-full bg-white relative overflow-hidden mt-2">
                                <div id="twitter-feed-container" className="absolute top-0 left-0 w-full h-full overflow-y-auto custom-scrollbar bg-white p-2 flex justify-center">
                                    <a
                                        className="twitter-timeline"
                                        data-height="550"
                                        href="https://twitter.com/sritatp"
                                    >
                                        Tweets by @sritatp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SocialMediaFeeds;

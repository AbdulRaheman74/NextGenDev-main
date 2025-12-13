import React from 'react';
import { motion } from 'framer-motion';

// --- Data Section ---
// Content tailored for NextGenDev
const philosophyContent = {
    heading: "Our Philosophy",
    description1: "At NextGenDev, we bridge the gap between visionary design and robust engineering. We reject generic, one-size-fits-all approaches in favor of tailored digital solutions.",
    description2: "We believe in authentic digital craftsmanship. Every pixel is purposeful, and every line of code is optimized for scale, security, and performance.",
    description3: "Our mission is to propel your business forward with next-generation technology. We don't just deliver projects; we engineer lasting digital impact that drives real growth."
};

// --- Main Component ---
export const Philosophy: React.FC = () => {
    return (
        <section id="philosophy" className="py-24 bg-bg relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Main Title - Centered for impact */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        {philosophyContent.heading}
                    </h2>
                </motion.div>

                {/* Content Layout: Image (Left) - Text (Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Left Side: Abstract 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* 3D Visual Container */}
                        <div className="aspect-square rounded-3xl overflow-hidden relative border border-white/5 bg-white/5 backdrop-blur-sm">

                            {/* Glow Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />

                            {/* 
                  VIDEO SOURCE: 
                  This video is loaded from Pixabay (Free Stock Video).
                  You can replace this URL with your own local video file (e.g., imported from assets).
                */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-80 mix-blend-screen transform scale-125"
                            >
                                <source src="https://cdn.pixabay.com/video/2022/09/28/132809-754938470_tiny.mp4" type="video/mp4" />
                            </video>

                            {/* Glass Overlay for Texture */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Right Side: Philosophy Text */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                            {philosophyContent.description1}
                        </p>

                        <p className="text-lg text-text/60 leading-relaxed">
                            {philosophyContent.description2}
                        </p>

                        <div className="h-px w-24 bg-primary/50" /> {/* Green Separator Line */}

                        <p className="text-lg text-text/60 leading-relaxed">
                            {philosophyContent.description3}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

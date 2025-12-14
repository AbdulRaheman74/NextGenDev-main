import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../ui/Button';
import { HeroVideo } from '../ui/HeroVideo';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Background Gradient Removed for Pure Black */}

      <div className="container mx-auto px-4 z-10 flex flex-col items-center justify-center text-center pt-20">

        {/* Main Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-5xl mx-auto mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase mb-6 max-w-xs mx-auto md:max-w-none"
          >
            AI + Design + Development: Creating The Future, Today.
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-text mb-8 leading-tight tracking-tight px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transforming Ideas Into <br className="hidden md:block" />
            <span className="text-white">Intelligent Products With AI.</span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-text/80 mb-12 max-w-3xl mx-auto uppercase tracking-wide font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Empowering businesses with <span className="text-primary">AI-Driven</span> design and cutting-edge <span className="text-primary">Software Development</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Only keeping social links or minimal actions here if needed, 
                 but keeping clean as per reference image usually just has text or scroll.
                 User's reference had "Let's Talk" in header. We can keep View Work button here if they want.
             */}
          </motion.div>
        </motion.div>

        {/* Centered 3D Scene */}
        <motion.div
          className="w-full max-w-7xl mx-auto h-[400px] md:h-[600px] relative z-20 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <HeroVideo className="w-full h-full" />

          {/* Optional: Add a subtle overlay text or 'system status' to look techy */}
          <div className="absolute bottom-4 right-6 font-mono text-xs text-primary/50 tracking-widest uppercase">
            System Online • v2.0
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center text-text/40 hover:text-primary transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section >
  );
};
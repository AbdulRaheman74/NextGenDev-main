import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Company } from './components/sections/Company';
import { Projects } from './components/sections/Projects';
import { Philosophy } from './components/sections/Philosophy';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

import { smoothScroll } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = smoothScroll();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-text overflow-x-hidden">
        <Navigation />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Company />
          <Projects />
          <Philosophy />
          <Contact />
        </motion.main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
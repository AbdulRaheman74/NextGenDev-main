import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Globe, Database, Cpu, Layout, Layers, ArrowUpRight } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '5+', icon: Code2 },
  { label: 'Projects Completed', value: '50+', icon: Layers },
  { label: 'Clients Worldwide', value: '20+', icon: Globe },
  { label: 'Tech Stack', value: '15+', icon: Database },
];

const features = [
  {
    title: 'Precision Engineering',
    description: 'Writing clean, scalable code that powers complex applications with ease.',
    icon: Cpu
  },
  {
    title: 'System Architecture',
    description: 'Designing robust digital ecosystems that grow with your business.',
    icon: Layers
  },
  {
    title: 'Interface Design',
    description: 'Creating intuitive, pixel-perfect experiences for users across all devices.',
    icon: Layout
  }
];

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-bg relative border-t border-white/5">
      {/* Minimalist Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-gradient-b pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Who We Are
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 tracking-tight leading-tight">
            We build <span className="text-primary">intelligent digital solutions</span> for forward-thinking brands.
          </h2>
          <p className="text-base md:text-lg text-text/60 max-w-2xl mx-auto leading-relaxed">
            NextGenDev is a premier digital agency focused on delivering high-performance web applications,
            seamless user interfaces, and scalable backend infrastructures.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <stat.icon className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-text/50 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Split Feature Section */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
              Engineering Excellence <br />
              <span className="text-text/40">From Core to Edge.</span>
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-sm text-text/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Abstract Tech Visual - Improved Video Container */}
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-2 relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="h-full w-full rounded-2xl bg-black overflow-hidden relative border border-white/5 z-10 flex items-center justify-center">

                {/* Fallback Static Code UI (Visible if video delayed) */}
                <div className="absolute inset-0 p-6 flex flex-col opacity-50">
                  <div className="flex gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 w-3/4 bg-white/10 rounded" />
                    <div className="h-1 w-1/2 bg-white/10 rounded" />
                    <div className="h-1 w-full bg-white/10 rounded" />
                  </div>
                </div>

                {/* The Video Element */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen"
                >
                  <source src="https://cdn.pixabay.com/video/2022/07/16/124333-730771399_tiny.mp4" type="video/mp4" />
                </video>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
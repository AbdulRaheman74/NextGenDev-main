import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Zap,
  Briefcase,
  Calendar,
  Layers,
  Code2
} from 'lucide-react';

const services = [
  {
    title: 'Web Developement',
    description: 'Modern, responsive websites built with the latest technologies.',
    icon: Globe,
    tags: ['Next.js', 'React', 'TypeScript']
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    tags: ['React Native', 'Flutter', 'Expo']
  },
  {
    title: 'Backend Architecture',
    description: 'Scalable APIs and robust database solutions.',
    icon: Database,
    tags: ['Node.js', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure deployment and automated infrastructure.',
    icon: Cloud,
    tags: ['AWS', 'Docker', 'CI/CD']
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interface design systems.',
    icon: Palette,
    tags: ['Figma', 'Prototyping', 'Systems']
  },
  {
    title: 'Performance',
    description: 'Speed optimization and technical SEO auditing.',
    icon: Zap,
    tags: ['Vitals', 'SEO', 'Analytics']
  }
];

const experiences = [
  {
    id: '1',
    company: 'Shopcardd',
    position: 'Senior Full-Stack Developer',
    duration: '2025 – Present',
    description: 'Leading architecture and full-stack development of scalable internal office management tools.',
  },
  {
    id: '2',
    company: 'Freelance',
    position: 'Full-Stack Developer',
    duration: '2022 – 2024',
    description: 'Built and deployed responsive web apps and mobile-first platforms for startups.',
  },
  {
    id: '3',
    company: 'Tekisky Pvt Ltd',
    position: 'Full-Stack Developer',
    duration: '2020 – 2022',
    description: 'Worked on internal projects including Tekisky Mart, a digital shopping platform.',
  }
];

const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-white/10 bg-black overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 201, 80, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export const Company: React.FC = () => {
  return (
    <section id="company" className="py-32 bg-bg relative border-t border-white/5">

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Expertise & Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            We craft <span className="text-primary">digital excellence.</span>
          </h2>
          <p className="text-text/60 text-lg">
            From concept to code, we deliver high-performance solutions tailored to your business needs.
          </p>
        </div>

        {/* Spotlight Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <SpotlightCard key={index} className="group">
              <div className="relative h-full p-6 pl-10 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-text/60 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-1 rounded border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Vertical Glass Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-text mb-12 flex items-center gap-3">
            <Briefcase className="text-primary" />
            Professional Journey
          </h3>

          <div className="relative space-y-8">
            {/* Connecting Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-16 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full border border-white/10 bg-black flex items-center justify-center z-10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,201,80,0.3)] transition-all duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>

                {/* Glass Card */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300 group-hover:translate-x-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.company}</h4>
                      <div className="text-primary/80 font-mono text-sm">{exp.position}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono whitespace-nowrap">
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-text/60 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
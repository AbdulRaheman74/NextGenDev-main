import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'School Website',
    description: 'A comprehensive school portal featuring student management, event tracking, and academic resource distribution.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://i.postimg.cc/90smQzW0/Screenshot-2025-08-05-075820.png',
    liveUrl: 'https://neiea-ngo-frontend.vercel.app/',
    featured: true
  },
  {
    id: '2',
    title: 'College Dashboard',
    description: 'Integrated admin dashboard for college management, handling admissions, grading, and faculty rosters.',
    technologies: ['Next.js', 'Express', 'Node.js', 'MongoDB'],
    image: 'https://i.postimg.cc/c1BGKg63/Screenshot-2025-08-05-075139.png',
    liveUrl: 'https://mpgi.ac.in/',
    featured: true
  },
  {
    id: '3',
    title: 'Tekisky Corporate',
    description: 'Official corporate presence for Tekisky Pvt Ltd, showcasing services and company portfolio.',
    technologies: ['React', 'React Native', 'AWS'],
    image: 'https://i.postimg.cc/cJDrNx8g/Screenshot-2025-08-05-080003.png',
    liveUrl: 'https://tekisky.com/',
    featured: false
  },
  {
    id: '4',
    title: 'Tekisky Mart',
    description: 'Full-featured e-commerce platform with cart management, payment gateways, and order tracking.',
    technologies: ['React', 'Express', 'Node', 'MongoDB'],
    image: 'https://i.postimg.cc/8CCLvnRv/Screenshot-2025-08-05-081209.png',
    liveUrl: 'https://tekiskymart.com/',
    featured: false
  },
  {
    id: '5',
    title: 'Muskan Beauty',
    description: 'Appointment booking system and service showcase for a premier beauty parlour.',
    technologies: ['TypeScript', 'React', 'Tailwind', 'GSAP'],
    image: 'https://i.postimg.cc/pTzbJkxW/Screenshot-2025-08-05-080346.png',
    liveUrl: 'https://www.muskanbeautyparlour.com/',
    featured: false
  },
  {
    id: '6',
    title: 'Asmak Trade',
    description: 'International business portal designed for a fish trading enterprise in Muscat.',
    technologies: ['Next.js', 'TypeScript', 'GSAP'],
    image: 'https://i.postimg.cc/pLD7my27/Screenshot-2025-08-05-075505.png',
    liveUrl: 'https://asmak-muscat-int-l-llc.vercel.app/',
    featured: true
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const sheenGradient = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["linear-gradient(115deg, transparent, rgba(255,255,255,0) 100%)", "linear-gradient(115deg, transparent, rgba(255,255,255,0.1) 100%)"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate relative mouse position
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    // Normalize to [-0.5, 0.5] range
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-full perspective-1000 mb-12 md:mb-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_50px_rgba(0,201,80,0.15)] transition-shadow duration-300"
      >
        {/* Dynamic Sheen/Glare */}
        <motion.div
          style={{ background: sheenGradient }}
          className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Image Container */}
        <div
          className="relative h-64 overflow-hidden bg-black/50 transform-style-3d"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
            style={{ translateZ: "20px" }}
          />

          {/* Links Overlay - Pushed forward in 3D space */}
          <div
            className="absolute top-4 right-4 z-30 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0"
            style={{ transform: "translateZ(40px)" }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/80 backdrop-blur text-white rounded-full border border-white/20 hover:border-primary hover:text-primary transition-colors"
                title="Visit Site"
              >
                <ArrowUpRight size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/80 backdrop-blur text-white rounded-full border border-white/20 hover:border-primary hover:text-primary transition-colors"
                title="View Code"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div
          className="p-6 flex flex-col flex-grow bg-[#050505] relative z-10"
          style={{ transform: "translateZ(15px)" }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-text/60 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.technologies.slice(0, 4).map(tech => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono rounded bg-white/5 text-text/60 border border-white/5 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-bg relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text">
              Selected <span className="text-primary">Works</span>
            </h2>
          </div>
          <p className="text-text/60 max-w-md text-right md:text-left">
            Explore our latest projects showcasing technical expertise and creative design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mohammedmerajqureshi-9075', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nexgen-dev-b237a8364/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/dev_vibes_world/', label: 'Instagram' }
  ];

  const footerLinks = [
    {
      title: "Sitemap", links: [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#company" },
        { name: "Projects", href: "#projects" }
      ]
    },
    {
      title: "Legal", links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-bg relative pt-24 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Top Section: Links & Info */}
        <div className="grid md:grid-cols-4 gap-12 mb-24">

          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">NextGenDev.</h3>
            <p className="text-text/60 max-w-sm leading-relaxed">
              Crafting digital experiences that merge art with engineering.
              Based in Maharashtra, India, working globally.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text/60 hover:text-black hover:bg-primary transition-all duration-300 group"
                >
                  <link.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-mono text-text/40 uppercase tracking-widest mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text/80 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      {link.name}
                      <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-white/5 text-sm text-text/40">
          <p>© {currentYear} NextGenDev. All rights reserved.</p>
          <p className="flex items-center gap-2 mt-2 md:mt-0">
            Made with <Heart size={12} className="text-red-500 fill-current" /> in India
          </p>
        </div>

      </div>

      {/* Massive Watermark Text */}
      <div className="opacity-5 pointer-events-none select-none overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-10%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[15vw] md:text-[20vw] font-bold text-white whitespace-nowrap leading-[0.8] tracking-tighter"
        >
          NEXTGENDEV CREATIVE
        </motion.h1>
      </div>
    </footer>
  );
};
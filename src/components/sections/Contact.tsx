import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Send, Mail, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp Integration
    const phone = "919075254327";
    const text = `Name: ${formState.name}%0AEmail: ${formState.email}%0AMessage: ${formState.message}`;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setIsSubmitted(true);
  };

  const socialLinks = [
    { icon: Mail, label: 'Email Us', value: 'mohammedmerajqureshi9075@gmail.com', href: 'mailto:mohammedmerajqureshi9075@gmail.com' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+91 9075254327', href: 'https://wa.me/919075254327' },
  ];

  return (
    <section id="contact" className="py-32 bg-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Side: Typography & Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6">
                Let's start a <br />
                <span className="text-primary">conversation.</span>
              </h2>
              <p className="text-xl text-text/60 max-w-md leading-relaxed">
                Ready to transform your digital presence? We're here to help you build the future.
              </p>
            </motion.div>

            {/* Magnetic Contact Chips */}
            <div className="flex flex-col gap-4">
              {socialLinks.map((link, idx) => (
                <MagneticButton key={idx} href={link.href}>
                  <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full group">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <link.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-text/40 font-mono tracking-wider mb-1">{link.label}</p>
                      <p className="text-lg text-white font-medium">{link.value}</p>
                    </div>
                    <ArrowRight className="ml-auto text-text/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Right Side: Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="h-96 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                <p className="text-text/60">We'll get back to you shortly via WhatsApp.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary hover:text-white transition-colors underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-text/40 uppercase tracking-widest pl-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/10 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-text/40 uppercase tracking-widest pl-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/10 focus:outline-none focus:border-primary transition-colors"
                    placeholder="hello@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-text/40 uppercase tracking-widest pl-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-white/10 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold py-5 rounded-xl hover:bg-[#00ff66] transition-colors flex items-center justify-center gap-3 text-lg group mt-4"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- Helper Component for Magnetic Effect ---
const MagneticButton: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xVal = e.clientX - rect.left - width / 2;
    const yVal = e.clientY - rect.top - height / 2;
    x.set(xVal / 2); // Divide by 2 to dampen the movement
    y.set(yVal / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="block cursor-none-target"
    >
      {children}
    </motion.a>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Send, Copy, Check } from 'lucide-react';
import { profile } from '../data/projects';

const CopyButton = ({ value }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <button
      onClick={handleCopy}
      className={`p-1.5 rounded-lg transition-all ${
        copied 
          ? 'bg-emerald-500/20 text-emerald-400' 
          : 'bg-white/5 text-gray-500 hover:text-white hover:bg-white/10'
      }`}
      title="Copy"
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
    </button>
  );
};

const Contact = () => {
  const contactItems = [
    { icon: Mail, label: 'Email', value: profile.contact.email, href: `mailto:${profile.contact.email}`, color: 'from-cyan-500 to-blue-500' },
    { icon: Phone, label: 'Phone', value: profile.contact.phone, href: `tel:${profile.contact.phone}`, color: 'from-emerald-500 to-teal-500' },
    { icon: Globe, label: 'Website', value: 'mallikarjunreddy.com', href: profile.contact.website, color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950"></div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Send className="w-4 h-4" />
            Let's Connect
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's discuss new projects or opportunities to collaborate.
          </motion.p>
        </div>

        {/* Contact cards - Compact horizontal layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="group relative"
              >
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300`}></div>
                
                <div className="relative flex items-center gap-3 p-4 bg-slate-900/80 border border-white/10 rounded-xl group-hover:border-transparent transition-all backdrop-blur-xl">
                  <a 
                    href={item.href}
                    target={item.icon === Globe ? "_blank" : undefined}
                    rel={item.icon === Globe ? "noopener noreferrer" : undefined}
                    className={`p-2.5 rounded-lg bg-gradient-to-br ${item.color} hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="text-white text-sm font-medium truncate">
                      {item.value}
                    </p>
                  </div>
                  <CopyButton value={item.value} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

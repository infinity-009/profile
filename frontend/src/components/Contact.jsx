import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Globe, Send, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/projects';

const Contact = () => {
  const contactItems = [
    { icon: Mail, label: 'Email', value: profile.contact.email, href: `mailto:${profile.contact.email}`, color: 'from-cyan-500 to-blue-500' },
    { icon: Mail, label: 'Alternate', value: profile.contact.alternate, href: `mailto:${profile.contact.alternate}`, color: 'from-emerald-500 to-teal-500' },
    { icon: Phone, label: 'Phone', value: profile.contact.phone, href: `tel:${profile.contact.phone}`, color: 'from-amber-500 to-orange-500' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: profile.contact.github, username: '@infinity-009' },
    { icon: Linkedin, label: 'LinkedIn', href: profile.contact.linkedin, username: 'Mallikarjun Reddy' },
    { icon: Globe, label: 'Website', href: profile.contact.website, username: 'mallikarjunreddy.com' },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Open to discussing new projects, creative ideas, or opportunities to collaborate on innovative AI solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative block"
                >
                  {/* Hover glow */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300`}></div>
                  
                  <div className="relative flex items-center gap-5 p-5 bg-slate-900/80 border border-white/10 rounded-2xl group-hover:border-transparent transition-all backdrop-blur-xl">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      <p className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.a>
              );
            })}
            
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl"
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-emerald-500 animate-ping"></div>
              </div>
              <div>
                <p className="text-emerald-400 font-semibold">Available for opportunities</p>
                <p className="text-gray-500 text-sm">Freelance & Full-time roles</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Social links & Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Social cards */}
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -10, scale: 1.02 }}
                  className="group relative block"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                  
                  <div className="relative flex items-center gap-5 p-5 bg-slate-900/80 border border-white/10 rounded-2xl group-hover:border-transparent transition-all backdrop-blur-xl">
                    <div className="p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">{social.label}</p>
                      <p className="text-white font-semibold">{social.username}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.a>
              );
            })}
            
            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 bg-slate-900/50 border border-white/10 rounded-2xl"
            >
              <div className="p-4 rounded-xl bg-white/5">
                <MapPin className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="text-white font-semibold">India</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>IST</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

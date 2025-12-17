import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-black py-12 border-t border-white/10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <p className="text-gray-500 text-sm mb-4">
            © {new Date().getFullYear()} Mallikarjun Reddy. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with React, Vite, and Tailwind CSS
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;

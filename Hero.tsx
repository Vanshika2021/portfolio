
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-48 pb-32 px-4 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ x: mousePos.x, y: mousePos.y }}
        className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        animate={{ x: -mousePos.x, y: -mousePos.y }}
        className="absolute bottom-40 right-[10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] -z-10"
      />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center px-6 py-2 mb-12 text-[9px] font-black uppercase tracking-[0.5em] text-white bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
        >
          <span className="relative flex h-2 w-2 mr-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Summer 2026 Internship Candidate
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-8"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-tight">
            Hi, I am <span className="text-gradient font-black italic">Vanshika</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
        >
          Computer Engineering Graduate Student at <span className="text-white font-semibold">NYU</span>. 
          Building resilient <span className="text-indigo-400 font-medium">ML Infrastructure</span> and high-performance systems.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a 
            whileHover={{ y: -3, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.3)" }}
            href="#projects" 
            onClick={handleScrollToProjects}
            className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all cursor-pointer relative z-20 shadow-lg"
          >
            Explore My Work
          </motion.a>

          <motion.a 
            whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.08)" }}
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all cursor-pointer relative z-20 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Resume
          </motion.a>
          
          <div className="flex items-center space-x-2 relative z-20 ml-2">
             <motion.a 
               whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
               href="https://linkedin.com/in/vanshikaagrawal021" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-white transition-all cursor-pointer"
               aria-label="LinkedIn Profile"
             >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </motion.a>
             <motion.a 
               whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
               href="https://github.com/Vanshika2021" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-white transition-all cursor-pointer"
               aria-label="GitHub Profile"
             >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
             </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 pointer-events-none"
      >
        <span className="text-[7px] font-bold uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

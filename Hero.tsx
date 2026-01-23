
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative pt-48 pb-32 px-4 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Interactive Background Blobs */}
      <motion.div 
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', damping: 30, stiffness: 50 }}
        className="absolute top-40 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] -z-10"
      />
      <motion.div 
        animate={{ x: -mousePos.x * 1.5, y: -mousePos.y * 1.5 }}
        transition={{ type: 'spring', damping: 30, stiffness: 50 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -z-10"
      />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 mb-10 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 bg-indigo-500/5 backdrop-blur-md rounded-full border border-indigo-500/20"
        >
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Summer 2026 Internship Candidate
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-2xl md:text-3xl font-light text-slate-400 mb-4 tracking-tight">Hi, I'm</span>
          <h1 className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none">
            Vanshika <br />
            <span className="text-gradient">Agrawal</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Computer Engineering at <span className="text-white font-semibold">NYU</span>. 
          Pioneering <span className="text-indigo-400 font-medium italic underline underline-offset-4 decoration-indigo-500/20">Applied ML Engineering</span> and intelligent systems.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="group relative px-12 py-5 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all shadow-2xl shadow-indigo-500/10"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-indigo-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.a>
          
          <div className="flex items-center space-x-6">
             {/* Social Links */}
             <a href="#" className="p-3 bg-slate-900/50 border border-white/10 rounded-2xl hover:text-indigo-400 transition-colors">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
             </a>
             <a href="#" className="p-3 bg-slate-900/50 border border-white/10 rounded-2xl hover:text-indigo-400 transition-colors">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

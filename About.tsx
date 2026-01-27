
import React from 'react';
import { motion } from 'framer-motion';
import { BIO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative px-4 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex flex-col items-center mb-12">
            <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Philosophy</span>
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none"
            >
              Engineering <span className="text-gradient">Resilience</span> <br />
              & Machine Intelligence
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-400 leading-snug font-light mb-16"
          >
            {BIO}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-white/5 pt-16">
            <div className="group text-left sm:text-center">
              <div className="text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-3 opacity-60">
                Current Base
              </div>
              <div className="text-white text-xl font-bold tracking-tight">New York, NY</div>
              <div className="text-slate-500 text-sm font-light mt-1">Graduate Student @ NYU</div>
            </div>
            <div className="group text-left sm:text-center">
              <div className="text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-3 opacity-60">
                Core Focus
              </div>
              <div className="text-white text-xl font-bold tracking-tight">Applied ML & Intelligent Systems</div>
              <div className="text-slate-500 text-sm font-light mt-1">Design, Development & Scalability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

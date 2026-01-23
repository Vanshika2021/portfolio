
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white mb-20 tracking-tight flex items-center"
        >
          <span className="bg-indigo-500 w-16 h-1 mr-8 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)]"></span>
          Professional Trajectory
        </motion.h2>
        
        <div className="space-y-24">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative pl-16 border-l-2 border-slate-800/50 last:border-0 pb-4"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] z-20"
              />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tight group cursor-default">
                    {exp.role}
                  </h3>
                  <div className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs mb-4">
                    {exp.company}
                  </div>
                  {exp.subrole && (
                    <div className="text-xs text-slate-400 font-bold bg-white/5 px-4 py-1.5 rounded-xl border border-white/5 inline-block">
                      {exp.subrole}
                    </div>
                  )}
                </div>
                <div className="text-[10px] font-black text-slate-500 bg-slate-900/60 px-5 py-2 rounded-full border border-white/5 whitespace-nowrap self-start">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-6">
                {exp.description.map((bullet, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="text-slate-400 text-base leading-relaxed flex items-start group"
                  >
                    <span className="w-2 h-2 bg-indigo-500/30 rounded-full mr-6 mt-2 group-hover:bg-indigo-400 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.2)]"></span>
                    <span className="group-hover:text-slate-200 transition-colors">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

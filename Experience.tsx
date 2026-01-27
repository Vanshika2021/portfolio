
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex flex-col mb-20">
          <span className="text-indigo-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4">Chronology</span>
          <h2 className="text-6xl font-black text-white tracking-normal uppercase leading-[0.9]">
            Professional <br/><span className="text-gradient italic">Trajectory</span>
          </h2>
        </div>
        
        <div className="space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-white/10 last:border-0 pb-12"
            >
              {/* Timeline Indicator */}
              <motion.div 
                className="absolute -left-[5.5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1] z-20"
              />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
                <div className="max-w-xl">
                  {/* Fixed: Removed tracking-tight to ensure proper word/letter spacing in titles */}
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-normal uppercase leading-tight">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-[11px]">
                      {exp.company}
                    </span>
                    {exp.subrole && (
                      <>
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span className="text-[10px] text-indigo-300/70 font-bold uppercase tracking-widest italic">{exp.subrole}</span>
                      </>
                    )}
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{exp.location}</span>
                  </div>
                </div>
                <div className="text-[10px] font-black text-white bg-white/5 px-4 py-2 rounded-lg border border-white/10 whitespace-nowrap self-start tracking-widest uppercase">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-4">
                {exp.description.map((bullet, i) => (
                  <motion.li 
                    key={i} 
                    className="text-slate-400 text-base leading-relaxed flex items-start group"
                  >
                    <span className="w-2 h-[1px] bg-indigo-500 mt-3 mr-4 shrink-0 group-hover:w-5 transition-all"></span>
                    <span className="group-hover:text-slate-200 transition-colors tracking-tight font-light">{bullet}</span>
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

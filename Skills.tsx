
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative mx-4 rounded-[5rem] overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-[5rem] -z-10 shadow-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-8 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-28"
        >
          <div className="text-indigo-500 text-xs font-black tracking-[0.5em] uppercase mb-6">Expertise</div>
          <h2 className="text-6xl font-black text-white mb-8 tracking-tight">Technical <span className="text-indigo-500 italic">Core</span></h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full opacity-40"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SKILLS.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 rounded-[3rem] bg-black/40 border border-white/5 hover:border-indigo-500/40 transition-all duration-500 group"
            >
              <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em] mb-14 flex items-center">
                <span className="w-8 h-[1px] bg-indigo-500/30 mr-6"></span>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {skillGroup.items.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(79, 70, 229, 0.1)',
                      borderColor: 'rgba(79, 70, 229, 0.4)',
                      color: '#fff'
                    }}
                    className="text-sm font-bold text-slate-400 bg-slate-900/80 border border-white/10 px-6 py-3 rounded-2xl transition-all cursor-default shadow-lg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

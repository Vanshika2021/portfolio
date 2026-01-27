
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative mx-4 rounded-[5rem] overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1e]/80 backdrop-blur-3xl border border-white/5 rounded-[5rem] -z-10 shadow-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-28"
        >
          <div className="text-indigo-500 text-[10px] font-black tracking-[0.5em] uppercase mb-6">Capabilities</div>
          <h2 className="text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">Technical <br/><span className="text-gradient italic">Stack</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[3rem] bg-black/40 border border-white/5 hover:border-indigo-500/40 transition-all duration-500 group glow-card"
            >
              <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em] mb-12 flex items-center">
                <span className="w-8 h-[1px] bg-indigo-500/30 mr-6 group-hover:w-12 transition-all"></span>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ 
                      y: -2,
                      scale: 1.02, 
                      backgroundColor: 'rgba(79, 70, 229, 0.1)',
                      borderColor: 'rgba(79, 70, 229, 0.4)',
                      color: '#fff'
                    }}
                    className="text-[11px] font-black uppercase tracking-wider text-slate-400 bg-slate-900/80 border border-white/5 px-5 py-2.5 rounded-xl transition-all cursor-default shadow-lg"
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

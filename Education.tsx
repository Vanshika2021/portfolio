
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 relative px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-white mb-16 tracking-tight flex items-center"
        >
          <span className="bg-indigo-500 w-12 h-1 mr-6 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></span>
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-indigo-500/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{edu.school}</h3>
                  <div className="text-indigo-400 font-black uppercase tracking-widest text-[10px]">{edu.degree}</div>
                </div>
                <div className="text-[10px] font-black text-slate-500 bg-white/5 px-4 py-1 rounded-full border border-white/5 whitespace-nowrap">
                  {edu.period}
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{edu.description}</p>
              <div className="mt-6 text-xs text-slate-500 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {edu.location}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

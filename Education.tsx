
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 relative px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-indigo-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4">Academic Background</span>
          <h2 className="text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            Education <br/><span className="text-gradient italic">& Awards</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-[#0a0f1e]/60 backdrop-blur-2xl border border-white/5 hover:border-indigo-500/30 transition-all group glow-card"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors">
                    {edu.school}
                  </h3>
                  <div className="text-indigo-400 font-black uppercase tracking-widest text-[10px] mb-2 italic">
                    {edu.degree}
                  </div>
                  {edu.gpa && (
                    <div className="inline-flex items-center px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-indigo-300 text-[10px] font-black tracking-widest uppercase">
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
                <div className="text-[10px] font-black text-white bg-white/5 px-4 py-2 rounded-lg border border-white/10 whitespace-nowrap self-start tracking-widest uppercase">
                  {edu.period}
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-light mb-6 border-l border-indigo-500/30 pl-4">{edu.description}</p>
              <div className="mt-auto text-[10px] text-slate-500 flex items-center font-black uppercase tracking-widest">
                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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

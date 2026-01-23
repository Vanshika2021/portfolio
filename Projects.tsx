
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[3rem] p-10 flex flex-col h-full hover:border-indigo-500/30 transition-all duration-500"
    >
      <div className="mb-8 overflow-hidden rounded-[2rem] aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-black text-white group-hover:text-indigo-400 transition-colors tracking-tight">
            {project.title}
          </h3>
          <span className="text-[10px] font-black text-slate-500 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 uppercase tracking-widest">
            {project.period}
          </span>
        </div>
        
        <p className="text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-6 italic">
          // {project.tagline}
        </p>

        <div className="space-y-4 mb-8">
          {project.description.map((desc: string, i: number) => (
            <p key={i} className="text-slate-400 text-base font-light leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5 mt-auto">
        {project.tags.map((tag: string, i: number) => (
          <span key={i} className="text-[9px] font-black text-slate-500 uppercase tracking-widest border border-white/5 px-3 py-1 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="text-indigo-500 text-xs font-black tracking-[0.5em] uppercase mb-6">Portfolio</span>
          <h2 className="text-6xl font-black text-white tracking-tighter">Selected <span className="text-gradient">Projects</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

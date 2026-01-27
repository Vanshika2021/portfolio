import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0a1020] border border-white/5 rounded-[2.5rem] p-8 flex flex-col h-full glow-card transition-all duration-500 overflow-hidden"
    >
      <div className="mb-8 overflow-hidden rounded-[1.8rem] aspect-video border border-white/10 relative bg-slate-900/50 group-hover:border-indigo-500/30 transition-colors">
        {/* Loading Skeleton */}
        {imgStatus === 'loading' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skeleton-shimmer animate-[shimmer_2s_infinite] z-10" />
        )}

        {/* Achievement Badge for Hackathon Winner */}
        {project.title === 'PeptideGo' && (
          <div className="absolute top-4 right-4 z-30 pointer-events-none">
            <div className="bg-indigo-600/90 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-white/20 shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              NYC Hackathon Winner
            </div>
          </div>
        )}

        {/* The Image with zoom effect */}
        {imgStatus !== 'error' ? (
          <img 
            src={project.image} 
            alt={project.title}
            onLoad={() => setImgStatus('loaded')}
            onError={() => setImgStatus('error')}
            className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
              imgStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-center p-4">
            <svg className="w-10 h-10 text-indigo-500/20 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="text-[10px] font-black text-indigo-300/20 uppercase tracking-[0.4em]">Artifact Preview</span>
          </div>
        )}
        
        {/* Project Links Overlay */}
        <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
          <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex gap-4">
            {project.github && project.github !== '#' && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 p-3 rounded-xl hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-110 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-110 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-black text-white group-hover:text-indigo-400 transition-colors tracking-tighter uppercase leading-none">
            {project.title}
          </h3>
          <span className="text-[9px] font-black text-slate-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 uppercase tracking-widest whitespace-nowrap ml-4">
            {project.period}
          </span>
        </div>
        
        <p className="text-indigo-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6 italic opacity-80 flex items-center gap-2">
          <span className="w-4 h-[1px] bg-indigo-500/30"></span>
          {project.tagline}
        </p>

        <div className="space-y-4 mb-8">
          {project.description.map((desc: string, i: number) => (
            <p key={i} className="text-slate-400 text-[15px] font-light leading-relaxed tracking-tight group-hover:text-slate-300 transition-colors">
              {desc}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
        {project.tags.map((tag: string, i: number) => (
          <span key={i} className="text-[9px] font-black text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 px-3 py-1.5 rounded-lg uppercase tracking-widest hover:bg-indigo-500/20 hover:text-white transition-all cursor-default">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5"
          >
            <span className="text-indigo-500 text-[10px] font-black tracking-[0.5em] uppercase">Engineering Artifacts</span>
          </motion.div>
          <h2 className="text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Selected <br/>
            <span className="text-gradient font-black">Development</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
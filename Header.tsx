
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Bio' },
    { id: 'experience', label: 'Exp' },
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Stack' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header className="fixed top-8 left-0 w-full z-50 px-4 pointer-events-none">
      <div className="max-w-4xl mx-auto h-16 flex items-center justify-between bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full px-8 shadow-2xl pointer-events-auto">
        <div 
          className="text-white font-black tracking-tighter text-2xl cursor-pointer" 
          onClick={(e) => scrollToSection(e as any, 'home')}
        >
          VA
        </div>
        
        <nav className="flex items-center space-x-6 md:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeSection === item.id 
                  ? 'text-indigo-400' 
                  : 'text-slate-500 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-400 transition-all cursor-pointer border-l border-white/10 pl-6"
          >
            CV
          </a>
        </nav>

        <div className="hidden sm:block">
           <a 
            href="mailto:agrawalvanshika021@gmail.com"
            className="text-[10px] font-black text-slate-950 bg-white px-5 py-2.5 rounded-full hover:bg-indigo-500 hover:text-white transition-all cursor-pointer"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

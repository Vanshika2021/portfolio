
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

  return (
    <header className="fixed top-8 left-0 w-full z-50 px-4">
      <div className="max-w-4xl mx-auto h-16 flex items-center justify-between bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full px-8 shadow-2xl">
        <div className="text-white font-black tracking-tighter text-2xl">VA</div>
        
        <nav className="flex items-center space-x-6 md:space-x-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[10px] font-black uppercase tracking-widest transition-all ${
                activeSection === item.id 
                  ? 'text-indigo-400' 
                  : 'text-slate-500 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
           <a 
            href="mailto:agrawalvanshika021@gmail.com"
            className="text-[10px] font-black text-slate-950 bg-white px-5 py-2.5 rounded-full hover:bg-indigo-500 hover:text-white transition-all"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

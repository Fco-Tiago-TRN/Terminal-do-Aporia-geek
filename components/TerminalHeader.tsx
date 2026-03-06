import React, { useState, useEffect } from 'react';
import { Wifi, Youtube, Twitter, Instagram, Cloud, Hash, ArrowDownCircle, Users, Cpu } from 'lucide-react';

export const TerminalHeader: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('pt-BR', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToScripts = () => {
    const element = document.getElementById('repository-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full border-b-2 border-aporia-purple/50 bg-aporia-bg/95 backdrop-blur-md sticky top-0 z-40 shadow-[0_4px_20px_rgba(119,0,166,0.3)]">
      {/* Top Social & Status Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-2 text-xs font-tech bg-black text-gray-400 border-b border-aporia-purple/20 gap-2">
        
        {/* Social Links */}
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <a href="https://youtube.com/@aporiageek" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors flex items-center gap-1">
            <Youtube size={14} /> <span className="hidden sm:inline">YOUTUBE</span>
          </a>
          <a href="https://discord.gg/TqymjEUA" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
            <Users size={14} /> <span className="hidden sm:inline">DISCORD</span>
          </a>
          <a href="https://x.com/aporiageek" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <Twitter size={14} /> <span className="hidden sm:inline">X</span>
          </a>
          <a href="https://instagram.com/aporiageek" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors flex items-center gap-1">
            <Instagram size={14} /> <span className="hidden sm:inline">INSTAGRAM</span>
          </a>
          <a href="https://tiktok.com/@aporiageek" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Hash size={14} /> <span className="hidden sm:inline">TIKTOK</span>
          </a>
          <a href="https://bsky.app/profile/aporiageek.bsky.social" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors flex items-center gap-1">
            <Cloud size={14} /> <span className="hidden sm:inline">BLUESKY</span>
          </a>
        </div>

        <div className="flex items-center gap-4 hidden sm:flex">
          <span className="flex items-center gap-1 text-aporia-lime">
             ONLINE
          </span>
          <span className="text-aporia-dark">|</span>
          <div className="flex items-center gap-2 font-mono">
            <Wifi size={12} />
            <span>{time}</span>
          </div>
        </div>
      </div>

      {/* Main Brand Area */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-start">
          {/* LOGO AREA */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-aporia-cyan blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
            {/* Logo Image with Fallback */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-aporia-dark relative z-10 shadow-lg bg-aporia-bg overflow-hidden flex items-center justify-center">
              <img 
                src="logo/logo.png" 
                onError={(e) => {
                   e.currentTarget.style.display = 'none'; // Hide image if broken
                   e.currentTarget.parentElement?.classList.add('fallback-icon'); // Signal parent to show fallback
                }}
                className="w-full h-full object-contain pixelated relative z-20"
              />
              {/* Fallback Icon (Visible if image fails) */}
              <div className="absolute inset-0 flex items-center justify-center z-10 text-aporia-cyan">
                 <Cpu size={48} />
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-wide text-white leading-none uppercase text-shadow-glow">
              APORIA <span className="text-aporia-magenta">GEEK</span>
            </h1>
            <p className="text-aporia-cyan font-tech text-xs tracking-[0.2em] uppercase mt-1">
              Investigações de Cultura Pop & Roteiros
            </p>
          </div>
        </div>
        
        {/* Navigation Actions */}
        <div className="flex flex-col items-end gap-2 w-full md:w-auto mt-4 md:mt-0">
           <button 
             onClick={scrollToScripts}
             className="flex items-center gap-2 px-6 py-3 bg-aporia-purple/20 hover:bg-aporia-purple border border-aporia-purple hover:border-aporia-magenta text-aporia-cyan hover:text-white transition-all duration-300 rounded font-tech text-sm uppercase tracking-wider group w-full md:w-auto justify-center"
           >
             <span className="group-hover:translate-x-1 transition-transform">Acessar Roteiros</span>
             <ArrowDownCircle size={18} className="animate-bounce" />
           </button>
           
           <div className="hidden md:flex gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              <span>SYS.VER: 2.0.4</span>
              <span>LOC: BR-SÃO_PAULO</span>
           </div>
        </div>
      </div>
    </header>
  );
};
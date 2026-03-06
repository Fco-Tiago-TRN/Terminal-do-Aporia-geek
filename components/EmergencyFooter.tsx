import React from 'react';
import { Zap } from 'lucide-react';

export const EmergencyFooter: React.FC = () => {
  return (
    <footer className="w-full bg-aporia-panel border-t-4 border-aporia-dark mt-auto relative">
      {/* Caution Striping */}
      <div className="h-2 w-full bg-[repeating-linear-gradient(45deg,#2F3070,#2F3070_10px,#0a0a12_10px,#0a0a12_20px)]"></div>
      
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        
        <div className="mb-8 max-w-2xl">
          <h3 className="text-2xl font-heading tracking-wide text-white mb-2">Manutenção do Sistema</h3>
          <p className="font-body text-gray-400 text-sm">
            O Terminal Aporia opera independentemente. Para garantir que as investigações continuem e os servidores permaneçam online, considere apoiar a iniciativa.
          </p>
        </div>

        {/* CTA Button */}
        <a 
          href="https://apoia.se/aporiageek" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-5 font-tech font-bold text-white transition-all duration-200 bg-transparent border-2 border-aporia-magenta hover:bg-aporia-magenta hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aporia-magenta"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="relative flex items-center gap-3 text-lg tracking-wider uppercase">
            <Zap className="animate-pulse" /> APOIE O PROJETO/CANAL
          </span>
          {/* Glitch effect elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-aporia-magenta/20 transform skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-100 -z-10"></div>
        </a>

        <div className="mt-8 pt-8 border-t border-gray-800 w-full text-center">
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} APORIA GEEK. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
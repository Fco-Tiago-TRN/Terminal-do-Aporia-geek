import React from 'react';
import { PlayCircle, Tv, Twitch, Users, Radio, MessageCircle, Youtube } from 'lucide-react';

export const VideoEvidence: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      
      {/* Grid Layout: Video takes 2/3, Social Sidebar takes 1/3 on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
        
        {/* === LEFT COLUMN: VIDEO === */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-start gap-2 mb-4">
            <Tv className="text-aporia-magenta" />
            <h2 className="text-2xl md:text-3xl font-heading text-white tracking-wide uppercase">
              Última Transmissão
            </h2>
          </div>

          <div className="border-2 border-aporia-dark bg-aporia-bg rounded-xl p-1 relative overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.5)] h-fit">
            
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-aporia-cyan rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-aporia-cyan rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-aporia-cyan rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-aporia-cyan rounded-br-lg"></div>

            {/* Video Player Container */}
            <div className="relative aspect-video bg-black rounded-lg border border-aporia-panel overflow-hidden">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
              
              <iframe 
                className="w-full h-full object-cover z-0"
                // Using a static playlist or video ID is more reliable than 'user_uploads' which is deprecated/flakey.
                // REPLACE 'Pj_1o31d3l8' WITH YOUR SPECIFIC FEATURED VIDEO ID
                src="https://www.youtube.com/embed/Pj_1o31d3l8" 
                title="Vídeo Mais Recente" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>

              {/* Overlay UI elements */}
              <div className="absolute top-4 right-4 z-20 font-tech text-[10px] text-white bg-red-600 px-2 py-0.5 rounded shadow animate-pulse pointer-events-none">
                EM DESTAQUE
              </div>
            </div>

            <div className="mt-4 px-2 pb-2">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <p className="font-tech text-aporia-cyan text-xs mb-1 tracking-wider">> SISTEMA: MONITORAMENTO_ATIVO</p>
                  <h3 className="text-xl font-heading text-white">Canal Aporia Geek</h3>
                </div>
                <a href="https://youtube.com/@aporiageek" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-black bg-aporia-cyan hover:bg-white transition-colors px-6 py-2 rounded font-bold uppercase tracking-wider text-sm font-tech">
                  <PlayCircle size={18} /> Ver Canal
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN: COMMS SIDEBAR === */}
        <div className="flex flex-col gap-6 lg:mt-12">
          
          {/* TWITCH CARD */}
          <a href="https://www.twitch.tv/aporiageek" target="_blank" rel="noreferrer" className="group block relative">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-aporia-magenta rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
             <div className="relative bg-aporia-panel border border-aporia-purple rounded-lg p-5 flex flex-col items-center text-center">
                <div className="absolute top-2 right-2 flex gap-1">
                   <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                </div>
                <Twitch size={40} className="text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-1">
                  APORIA NA TWITCH
                </h3>
                <p className="text-xs font-tech text-gray-400 mb-3">
                  Transmissões, Reacts e Gameplay
                </p>
                <div className="flex items-center gap-2 text-aporia-magenta text-sm font-bold font-tech border border-aporia-magenta/30 px-4 py-1 rounded bg-aporia-magenta/10 group-hover:bg-aporia-magenta group-hover:text-black transition-colors">
                   <Radio size={14} /> ACESSAR CANAL
                </div>
             </div>
          </a>

          {/* DISCORD CARD */}
          <a href="https://discord.gg/TqymjEUA" target="_blank" rel="noreferrer" className="group block relative">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
             <div className="relative bg-aporia-panel border border-indigo-500/50 rounded-lg p-5 flex flex-col items-center text-center">
                <Users size={40} className="text-indigo-400 mb-2 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-1">
                  COMUNIDADE DISCORD
                </h3>
                <p className="text-xs font-tech text-gray-400 mb-3">
                  Teorias, Debates e Bastidores
                </p>
                <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold font-tech border border-indigo-500/30 px-4 py-1 rounded bg-indigo-500/10 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                   <MessageCircle size={14} /> ENTRAR NO SERVIDOR
                </div>
             </div>
          </a>

          {/* YOUTUBE CARD */}
          <a href="https://youtube.com/@aporiageek" target="_blank" rel="noreferrer" className="group block relative">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
             <div className="relative bg-aporia-panel border border-red-500/50 rounded-lg p-5 flex flex-col items-center text-center">
                <Youtube size={40} className="text-red-500 mb-2 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-1">
                  CANAL PRINCIPAL
                </h3>
                <p className="text-xs font-tech text-gray-400 mb-3">
                  Ensaios, Lore e Análises
                </p>
                <div className="flex items-center gap-2 text-red-500 text-sm font-bold font-tech border border-red-500/30 px-4 py-1 rounded bg-red-500/10 group-hover:bg-red-500 group-hover:text-white transition-colors">
                   <PlayCircle size={14} /> INSCREVER-SE
                </div>
             </div>
          </a>

        </div>

      </div>
    </section>
  );
};
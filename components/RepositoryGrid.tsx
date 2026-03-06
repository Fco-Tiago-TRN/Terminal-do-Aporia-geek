import React, { useState } from 'react';
import { FolderOpen, FolderClosed, FileText, ChevronRight, Lock, BookOpen } from 'lucide-react';
import { FolderData } from '../types';

// Updated data: Single active folder with specific file
const REPOSITORY_DATA: FolderData[] = [
  {
    id: 'folder-scripts',
    name: 'Roteiros do Canal',
    description: 'Roteiros completos, notas de produção e pesquisas originais.',
    icon: 'book',
    color: 'purple',
    files: [
      { 
        id: 'script-1', 
        title: 'Lord of Mysteries: 001 Futuro e o MMORPG', 
        url: 'https://www.canva.com/design/DAHAND7nnRQ/8tX-NYjvgsXXQrwtUMeY7Q/view?utm_content=DAHAND7nnRQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2a50909d18', 
        date: '2024-05-20' 
      },
    ]
  },
  // Empty placeholders
  { id: 'p2', name: '', description: '', icon: 'archive', color: 'cyan', files: [] },
  { id: 'p3', name: '', description: '', icon: 'archive', color: 'lime', files: [] },
  { id: 'p4', name: '', description: '', icon: 'archive', color: 'magenta', files: [] },
];

const FolderCard: React.FC<{ folder: FolderData; isPlaceholder?: boolean }> = ({ folder, isPlaceholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isPlaceholder) {
    return (
      <div className="h-full min-h-[180px] border border-gray-800 bg-aporia-bg/30 rounded-lg p-6 flex flex-col items-center justify-center opacity-40 grayscale select-none">
        <Lock className="text-gray-600 mb-2" size={32} />
        <span className="font-tech text-xs text-gray-600 uppercase tracking-widest">Slot Vazio</span>
        <div className="w-full h-1 bg-gray-900 mt-4 rounded overflow-hidden">
           <div className="h-full bg-gray-800 w-1/3 animate-pulse"></div>
        </div>
      </div>
    );
  }

  const getColorClass = (type: 'text' | 'bg' | 'border') => {
    const map = {
      purple: { text: 'text-aporia-purple', bg: 'bg-aporia-purple', border: 'border-aporia-purple' },
      cyan: { text: 'text-aporia-cyan', bg: 'bg-aporia-cyan', border: 'border-aporia-cyan' },
      lime: { text: 'text-aporia-lime', bg: 'bg-aporia-lime', border: 'border-aporia-lime' },
      magenta: { text: 'text-aporia-magenta', bg: 'bg-aporia-magenta', border: 'border-aporia-magenta' },
    };
    return map[folder.color][type];
  };

  return (
    <div className={`
      relative group transition-all duration-300
      ${isOpen ? 'col-span-1 row-span-auto' : 'col-span-1'}
    `}>
      {/* Folder Tab Visual */}
      <div className={`
        absolute -top-3 left-0 w-32 h-4 rounded-t-md border-t-2 border-l-2 border-r-2
        ${getColorClass('border')} 
        ${getColorClass('bg')}/10
        bg-aporia-bg z-0
        flex items-center justify-center
      `}>
         <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-aporia-purple">ACESSO PÚBLICO</span>
      </div>

      {/* Main Folder Body */}
      <div className={`
        relative z-10 h-full border-2 rounded-br-lg rounded-bl-lg rounded-tr-lg p-5
        bg-aporia-bg/90 backdrop-blur-sm shadow-[0_0_20px_rgba(119,0,166,0.1)]
        hover:shadow-[0_0_25px_rgba(119,0,166,0.3)]
        transition-all duration-300
        ${getColorClass('border')}
      `}>
        {/* Header (Clickable) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left focus:outline-none"
        >
          <div className="flex justify-between items-start mb-4">
            <div className={`
              p-3 rounded bg-aporia-panel border 
              ${getColorClass('border')} 
              ${getColorClass('text')}
            `}>
              {isOpen ? <FolderOpen size={32} /> : <FolderClosed size={32} />}
            </div>
            <div className={`
              ${getColorClass('text')} 
              opacity-50 group-hover:opacity-100 transition-opacity
            `}>
              <BookOpen size={28} />
            </div>
          </div>

          <h3 className={`text-3xl font-heading mb-2 ${getColorClass('text')} uppercase tracking-wide`}>
            {folder.name}
          </h3>
          <p className="text-gray-400 font-body text-sm mb-4 leading-relaxed">
            {folder.description}
          </p>
          
          <div className="w-full h-px bg-gradient-to-r from-aporia-purple via-aporia-magenta to-transparent mb-4 opacity-30"></div>
        </button>

        {/* File List (Conditional Rendering) */}
        <div className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <ul className="space-y-3">
            {folder.files.map((file) => (
              <li key={file.id} className="group/file">
                <a href={file.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded border border-white/5 hover:border-aporia-cyan/50 transition-all cursor-pointer">
                  <FileText size={18} className="text-aporia-cyan" />
                  <div className="flex flex-col text-left">
                    <span className="font-heading text-xl text-gray-200 group-hover/file:text-white tracking-wide leading-tight">
                      {file.title}
                    </span>
                    <span className="text-[10px] text-gray-500 font-tech">{file.date}</span>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-aporia-magenta opacity-0 group-hover/file:opacity-100 transition-opacity -translate-x-2 group-hover/file:translate-x-0" />
                </a>
              </li>
            ))}
            <li className="pt-2">
               <div className="text-center">
                 <button className="text-xs font-tech uppercase tracking-widest text-aporia-purple hover:text-white transition-colors border-b border-dashed border-aporia-purple pb-0.5">
                   + Solicitar Acesso
                 </button>
               </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const RepositoryGrid: React.FC = () => {
    return (
    <section id="repository-grid" className="container mx-auto px-4 py-8 mb-20 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-4">
        <div className="w-2 h-8 bg-aporia-magenta animate-pulse shadow-[0_0_10px_#FE00FE]"></div>
        <div>
           <h2 className="text-4xl font-heading text-white tracking-wide uppercase leading-none">
             Banco de Dados
           </h2>
           <span className="text-xs font-tech text-gray-500 uppercase tracking-widest">/root/public/scripts</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {REPOSITORY_DATA.map((folder, index) => (
          <FolderCard key={folder.id} folder={folder} isPlaceholder={index > 0} />
        ))}
      </div>
    </section>
  );
};

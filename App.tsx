import React from 'react';
import { TerminalHeader } from './components/TerminalHeader';
import { VideoEvidence } from './components/VideoEvidence';
import { RepositoryGrid } from './components/RepositoryGrid';
import { EmergencyFooter } from './components/EmergencyFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-aporia-bg text-gray-200 selection:bg-aporia-magenta selection:text-white">
      {/* Background Grid Pattern (Subtle) */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(#2F3070 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }}>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <TerminalHeader />
        
        <main className="flex-grow">
          <VideoEvidence />
          <RepositoryGrid />
        </main>
        
        <EmergencyFooter />
      </div>
    </div>
  );
};

export default App;
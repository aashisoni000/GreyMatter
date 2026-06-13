import React from 'react';

export default function DecisionPanel() {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)] flex justify-between">
        <span>Decision Operations</span>
        <span className="text-[var(--warning)] animate-pulse">AWAITING INPUT</span>
      </div>
      <div className="p-4 grid grid-cols-1 gap-3 flex-1 content-start">
        
        <button className="bg-[var(--surface)] text-[var(--foreground)] font-mono uppercase tracking-widest text-sm py-3 px-2 border-2 border-[var(--border-color)] hover:border-[var(--foreground)] transition-none text-left flex justify-between items-center group">
          <span>FULL CLEAN</span>
          <span className="text-[10px] text-[var(--secondary)] group-hover:text-[var(--foreground)]">EST: 12.5 Wh</span>
        </button>
        
        <button className="bg-[var(--primary)] text-white font-mono uppercase tracking-widest text-sm py-3 px-4 border-2 border-[var(--primary)] ring-2 ring-offset-2 ring-[var(--primary)] shadow-[0_0_10px_rgba(2,132,199,0.5)] transition-none text-left flex justify-between items-center group relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]"></div>
          <span className="relative z-10 flex items-center gap-2">
            <span className="bg-white text-[var(--primary)] px-1 py-0.5 text-[10px] font-bold">REC</span>
            PARTIAL CLEAN
          </span>
          <span className="relative z-10 text-[10px] font-bold">EST: 1.3 Wh</span>
        </button>

        <button className="bg-[var(--surface)] text-[var(--secondary)] font-mono uppercase tracking-widest text-sm py-3 px-2 border-2 border-[var(--border-color)] hover:border-[var(--secondary)] transition-none text-left flex justify-between items-center group">
          <span>WAIT</span>
          <span className="text-[10px] group-hover:text-[var(--secondary)]">EST: 0.0 Wh</span>
        </button>

        <button className="bg-[var(--surface)] text-[var(--secondary)] font-mono uppercase tracking-widest text-sm py-3 px-2 border-2 border-[var(--border-color)] hover:border-[var(--secondary)] transition-none text-left flex justify-between items-center group">
          <span>TARGETED CLEAN</span>
          <span className="text-[10px] group-hover:text-[var(--secondary)]">MANUAL INPUT</span>
        </button>

      </div>
    </div>
  );
}

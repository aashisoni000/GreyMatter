import React from 'react';

export default function MissionActionReport() {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--primary)] shadow-[0_0_20px_rgba(2,132,199,0.2)]">
      <div className="bg-[var(--primary)] text-white px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)] flex justify-between items-center">
        <span>Recommended Action</span>
        <span className="bg-white text-[var(--primary)] px-2 py-0.5 text-[8px] animate-pulse">ACTION REQUIRED</span>
      </div>
      
      <div className="p-4 flex flex-col gap-4 font-mono text-sm">
        
        {/* Core Recommendation */}
        <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-2">
          <span className="text-xl font-bold text-[var(--primary)] uppercase tracking-wider">PARTIAL CLEAN</span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Target Zones</span>
            <span className="text-xl font-bold text-[var(--critical)]">F G K</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
          <div className="flex justify-between items-center border-b border-[var(--background)] pb-1">
            <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Power Recovery</span>
            <span className="font-bold text-[var(--success)]">+8.2 W</span>
          </div>
          <div className="flex justify-between items-center border-b border-[var(--background)] pb-1">
            <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Energy Cost</span>
            <span className="font-bold text-[var(--warning)]">1.3 Wh</span>
          </div>
          <div className="flex justify-between items-center border-b border-[var(--background)] pb-1">
            <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Mission Value</span>
            <span className="font-bold text-[var(--primary)]">92</span>
          </div>
          <div className="flex justify-between items-center border-b border-[var(--background)] pb-1">
            <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Life Extension</span>
            <span className="font-bold text-[var(--success)]">+14 Days</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center bg-[var(--background)] p-2 border border-[var(--border-color)]">
          <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Risk Level</span>
          <span className="bg-[var(--success)] text-white px-2 py-0.5 text-xs font-bold uppercase">Low</span>
        </div>

      </div>
    </div>
  );
}

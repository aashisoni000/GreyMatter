import React from 'react';

export default function DecisionReasoning() {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--primary)] shadow-[0_0_15px_rgba(2,132,199,0.15)] relative">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--primary)]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--primary)]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--primary)]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--primary)]"></div>

      <div className="bg-[var(--primary)] text-white px-3 py-2 text-xs font-bold uppercase tracking-widest flex justify-between items-center">
        <span>Decision Reasoning</span>
        <span className="animate-pulse">SYS_RECOMMENDATION</span>
      </div>
      <div className="p-4 flex flex-col gap-3 font-mono text-sm">
        
        <div className="flex justify-between border-b border-[var(--border-color)] pb-1">
          <span className="text-[var(--secondary)] uppercase text-xs">Selected Action</span>
          <span className="font-bold text-[var(--primary)]">PARTIAL CLEAN</span>
        </div>

        <div className="flex justify-between border-b border-[var(--border-color)] pb-1">
          <span className="text-[var(--secondary)] uppercase text-xs">Target Zones</span>
          <span className="font-bold text-[var(--critical)] tracking-widest">F, G, K</span>
        </div>

        <div className="flex flex-col gap-1 border-b border-[var(--border-color)] pb-2">
          <span className="text-[var(--secondary)] uppercase text-xs">Reasoning</span>
          <p className="text-xs leading-tight">
            Dust concentrated in high-value regions. High priority zones selected to maximize power delta while minimizing HV budget utilization.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 border-b border-[var(--border-color)] pb-2">
          <div className="flex flex-col">
            <span className="text-[var(--secondary)] uppercase text-[10px]">Expected Recovery</span>
            <span className="text-[var(--success)] font-bold">+8.2 W</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[var(--secondary)] uppercase text-[10px]">Energy Cost</span>
            <span className="font-bold">1.3 Wh</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[var(--success)] uppercase text-xs font-bold flex items-center gap-2 before:content-['>'] before:text-[var(--success)]">
            No science-operation conflict.
          </span>
          <span className="text-[var(--success)] uppercase text-xs font-bold flex items-center gap-2 before:content-['>'] before:text-[var(--success)]">
            Highest projected net benefit.
          </span>
        </div>

      </div>
    </div>
  );
}

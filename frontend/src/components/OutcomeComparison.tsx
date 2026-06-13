import React from 'react';

export default function OutcomeComparison() {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        48-Hour Outcome Comparison
      </div>
      <div className="p-4 grid grid-cols-3 gap-3 font-mono text-[9px] uppercase">
        
        {/* Partial Clean (Recommended) */}
        <div className="flex flex-col border border-[var(--primary)] bg-[rgba(2,132,199,0.05)] relative">
          <div className="bg-[var(--primary)] text-white text-center py-1 font-bold tracking-widest">
            Partial Clean
          </div>
          <div className="p-2 flex flex-col gap-2">
            <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-1">
              <span>Power</span>
              <span className="text-[var(--success)] font-bold">Stable</span>
            </div>
            <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-1">
              <span>Battery</span>
              <span className="text-[var(--success)] font-bold">Stable</span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="text-[var(--secondary)]">Mission Value</span>
              <span className="text-[var(--primary)] font-bold text-lg">High</span>
            </div>
          </div>
        </div>

        {/* Wait */}
        <div className="flex flex-col border border-[var(--border-color)] bg-[var(--background)]">
          <div className="bg-[var(--foreground)] text-[var(--surface)] text-center py-1 font-bold tracking-widest">
            Wait
          </div>
          <div className="p-2 flex flex-col gap-2 opacity-70">
            <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-1">
              <span>Power</span>
              <span className="text-[var(--warning)] font-bold">Declines</span>
            </div>
            <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-1">
              <span>Battery</span>
              <span className="text-[var(--critical)] font-bold">Critical</span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="text-[var(--secondary)]">Mission Value</span>
              <span className="text-[var(--critical)] font-bold text-lg">Low</span>
            </div>
          </div>
        </div>

        {/* Full Clean */}
        <div className="flex flex-col border border-[var(--border-color)] bg-[var(--background)]">
          <div className="bg-[var(--foreground)] text-[var(--surface)] text-center py-1 font-bold tracking-widest">
            Full Clean
          </div>
          <div className="p-2 flex flex-col gap-2 opacity-70">
            <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-1">
              <span>Power</span>
              <span className="text-[var(--success)] font-bold">Highest</span>
            </div>
            <div className="flex justify-between items-center border-b border-[var(--border-color)] pb-1">
              <span>Energy Cost</span>
              <span className="text-[var(--warning)] font-bold">High</span>
            </div>
            <div className="flex flex-col pt-1">
              <span className="text-[var(--secondary)]">Mission Value</span>
              <span className="text-[var(--warning)] font-bold text-lg">Medium</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

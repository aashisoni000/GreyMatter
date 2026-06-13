import React from 'react';

export default function ResourceUtilization() {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        Cleaning Resource Status
      </div>
      <div className="p-3 grid grid-cols-2 gap-y-3 gap-x-4 font-mono text-[10px]">
        
        <div className="flex flex-col">
          <span className="text-[var(--secondary)] uppercase tracking-widest mb-0.5">HV Budget Remaining</span>
          <span className="font-bold text-base text-[var(--warning)]">3.7 Wh</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[var(--secondary)] uppercase tracking-widest mb-0.5">Electrode Lifetime</span>
          <span className="font-bold text-base text-[var(--success)]">82%</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[var(--secondary)] uppercase tracking-widest mb-0.5">Cleaning Cycles Rem.</span>
          <span className="font-bold text-base text-[var(--foreground)]">412</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[var(--secondary)] uppercase tracking-widest mb-0.5">Zone Availability</span>
          <span className="font-bold text-base text-[var(--primary)]">16/16</span>
        </div>

      </div>
    </div>
  );
}

import React from 'react';

export default function MissionContext() {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        Mission Context
      </div>
      <div className="p-3 grid grid-cols-2 gap-3 text-xs font-mono">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Platform</span>
          <span className="font-bold text-[var(--primary)]">Lunar Surface Asset</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Location</span>
          <span className="font-bold text-[var(--foreground)]">Region 4</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Lunar Day</span>
          <span className="font-bold text-[var(--foreground)]">11</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Mission Phase</span>
          <span className="font-bold text-[var(--warning)]">Power Preservation</span>
        </div>
      </div>
    </div>
  );
}

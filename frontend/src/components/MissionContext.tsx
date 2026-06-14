import React from 'react';

export default function MissionContext() {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl p-5 flex flex-col justify-between">
      <h3 className="text-sm font-bold text-white tracking-tight border-b border-[var(--border-color)] pb-2.5 mb-4 font-sans">
        Platform Context
      </h3>
      <div className="flex flex-col gap-3 text-sm font-sans">
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <span className="text-xs text-[var(--text-secondary)] font-medium">Platform</span>
          <span className="font-semibold text-white">Lunar Surface Asset</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <span className="text-xs text-[var(--text-secondary)] font-medium">Location</span>
          <span className="font-semibold text-white font-mono text-xs">Region 4</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <span className="text-xs text-[var(--text-secondary)] font-medium">Lunar Day</span>
          <span className="font-semibold text-white font-mono text-xs">Day 11</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-[var(--text-secondary)] font-medium">Mission Phase</span>
          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Power Preservation
          </span>
        </div>
      </div>
    </div>
  );
}

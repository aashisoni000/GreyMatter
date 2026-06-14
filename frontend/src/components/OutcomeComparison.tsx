import React from 'react';

export default function OutcomeComparison() {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl p-5 flex flex-col justify-between">
      <h3 className="text-sm font-bold text-white tracking-tight border-b border-[var(--border-color)] pb-2.5 mb-4 font-sans">
        48-Hour Outcome Comparison
      </h3>
      <div className="grid grid-cols-3 gap-3 font-sans">
        
        {/* Partial Clean (Recommended) */}
        <div className="flex flex-col rounded-lg border border-blue-500/30 bg-blue-500/[0.02] overflow-hidden">
          <div className="bg-blue-500/10 text-blue-400 text-center py-1.5 font-bold tracking-tight text-xs border-b border-blue-500/20">
            Partial Clean
          </div>
          <div className="p-3.5 flex flex-col gap-3 text-xs">
            <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
              <span className="text-[var(--text-muted)] font-medium">Power</span>
              <span className="text-emerald-400 font-semibold">Stable</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
              <span className="text-[var(--text-muted)] font-medium">Battery</span>
              <span className="text-emerald-400 font-semibold">Stable</span>
            </div>
            <div className="flex flex-col pt-0.5">
              <span className="text-[var(--text-muted)] text-[10px] font-medium uppercase tracking-wider mb-0.5">Value</span>
              <span className="text-blue-400 font-bold text-base font-sans leading-none">High</span>
            </div>
          </div>
        </div>

        {/* Wait */}
        <div className="flex flex-col rounded-lg border border-[var(--border-color)] bg-[var(--surface-secondary)] overflow-hidden">
          <div className="bg-white/5 text-[var(--text-secondary)] text-center py-1.5 font-semibold text-xs border-b border-[var(--border-color)]">
            Wait
          </div>
          <div className="p-3.5 flex flex-col gap-3 text-xs opacity-75">
            <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
              <span className="text-[var(--text-muted)] font-medium">Power</span>
              <span className="text-amber-400 font-semibold">Declines</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
              <span className="text-[var(--text-muted)] font-medium">Battery</span>
              <span className="text-rose-400 font-semibold">Critical</span>
            </div>
            <div className="flex flex-col pt-0.5">
              <span className="text-[var(--text-muted)] text-[10px] font-medium uppercase tracking-wider mb-0.5">Value</span>
              <span className="text-rose-400 font-bold text-base font-sans leading-none">Low</span>
            </div>
          </div>
        </div>

        {/* Full Clean */}
        <div className="flex flex-col rounded-lg border border-[var(--border-color)] bg-[var(--surface-secondary)] overflow-hidden">
          <div className="bg-white/5 text-[var(--text-secondary)] text-center py-1.5 font-semibold text-xs border-b border-[var(--border-color)]">
            Full Clean
          </div>
          <div className="p-3.5 flex flex-col gap-3 text-xs opacity-75">
            <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
              <span className="text-[var(--text-muted)] font-medium">Power</span>
              <span className="text-emerald-400 font-semibold">Highest</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
              <span className="text-[var(--text-muted)] font-medium">Cost</span>
              <span className="text-amber-400 font-semibold">High</span>
            </div>
            <div className="flex flex-col pt-0.5">
              <span className="text-[var(--text-muted)] text-[10px] font-medium uppercase tracking-wider mb-0.5">Value</span>
              <span className="text-amber-400 font-bold text-base font-sans leading-none">Medium</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

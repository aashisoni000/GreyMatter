import React from 'react';

export default function MissionActionReport() {
  return (
    <div className="bg-gradient-to-b from-[#1c2230] to-[#171A21] border border-blue-500/20 shadow-[0_4px_20px_rgba(59,130,246,0.05)] rounded-xl p-5 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-4">
          <span className="text-xs text-blue-400 font-bold tracking-wider uppercase font-sans">
            Recommended Action
          </span>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase font-sans tracking-wide">
            Optimal
          </span>
        </div>

        {/* Action Title & Targets */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-white tracking-tight font-sans">
            Partial Clean
          </h2>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[var(--text-muted)] font-medium">Targets:</span>
            <span className="font-mono text-xs font-bold text-white bg-white/5 px-2 py-1 rounded border border-white/10">
              F, G, K
            </span>
          </div>
        </div>

        {/* Large Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Expected Recovery */}
          <div className="flex flex-col bg-white/[0.02] border border-white/5 p-3.5 rounded-lg">
            <span className="text-2xl font-semibold text-emerald-400 font-sans tracking-tight">
              +8.2 W
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-medium mt-1">
              Expected Recovery
            </span>
          </div>

          {/* Energy Cost */}
          <div className="flex flex-col bg-white/[0.02] border border-white/5 p-3.5 rounded-lg">
            <span className="text-2xl font-semibold text-amber-400 font-sans tracking-tight">
              1.3 Wh
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-medium mt-1">
              Energy Cost
            </span>
          </div>

          {/* Life Extension */}
          <div className="flex flex-col bg-white/[0.02] border border-white/5 p-3.5 rounded-lg">
            <span className="text-2xl font-semibold text-emerald-400 font-sans tracking-tight">
              +14 Days
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-medium mt-1">
              Life Extension
            </span>
          </div>

          {/* Mission Value */}
          <div className="flex flex-col bg-white/[0.02] border border-white/5 p-3.5 rounded-lg">
            <span className="text-2xl font-semibold text-blue-400 font-sans tracking-tight">
              92
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-medium mt-1">
              Mission Value
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-[var(--text-muted)] font-medium">Risk Assessment: <strong className="text-emerald-400 font-semibold uppercase">Low</strong></span>
        <span className="text-[10px] font-bold px-2.5 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded uppercase tracking-wider animate-pulse">
          Action Req
        </span>
      </div>
    </div>
  );
}

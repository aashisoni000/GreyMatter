import React from 'react';

export default function RecommendedActionCard() {
  return (
    <div className="bg-[#141517] border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-full font-sans shadow-lg">
      {/* Header */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-[#6b7280] text-xs font-bold uppercase tracking-wider">Recommended Action</h3>
          <span className="text-[10px] bg-[#f0522f]/10 text-[#f0522f] border border-[#f0522f]/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
            Optimal Decision
          </span>
        </div>
        <p className="text-white text-xs font-medium opacity-80">Autonomous Planner Command Output</p>
      </div>

      {/* Hero Selection Block */}
      <div className="my-5 bg-[#291714] border border-[#f0522f]/25 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-inner">
        <span className="text-[#f0522f] text-sm font-extrabold uppercase tracking-widest leading-none mb-1.5">
          Execute Plan
        </span>
        <span className="text-white text-3xl sm:text-4xl font-black tracking-tight uppercase leading-none drop-shadow-[0_0_15px_rgba(240,82,47,0.3)]">
          Partial Clean
        </span>
        <span className="text-xs text-[#9ca3af] mt-2 font-medium">
          Targets: <strong className="text-white font-mono font-bold">F • G • K</strong>
        </span>
      </div>

      {/* Grid Highlights */}
      <div className="grid grid-cols-2 gap-3.5 mb-5 text-center">
        {/* Mission Value */}
        <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col justify-center">
          <span className="text-[#6b7280] text-[9px] uppercase font-bold tracking-wider mb-0.5">Mission Value</span>
          <span className="text-white text-2xl font-black font-mono">92</span>
        </div>
        {/* Power Recovery */}
        <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col justify-center">
          <span className="text-[#6b7280] text-[9px] uppercase font-bold tracking-wider mb-0.5">Power Recovery</span>
          <span className="text-emerald-400 text-lg font-black font-mono">+8.2 W</span>
        </div>
        {/* Days Preserved */}
        <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col justify-center">
          <span className="text-[#6b7280] text-[9px] uppercase font-bold tracking-wider mb-0.5">Life Preserved</span>
          <span className="text-blue-400 text-lg font-black font-mono">+14 Days</span>
        </div>
        {/* Cost */}
        <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col justify-center">
          <span className="text-[#6b7280] text-[9px] uppercase font-bold tracking-wider mb-0.5">Energy Cost</span>
          <span className="text-[#9ca3af] text-lg font-bold font-mono">1.3 Wh</span>
        </div>
      </div>

      {/* Confidence & Science Conflict Indicators */}
      <div className="flex flex-col gap-2.5 border-t border-white/5 pt-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-[#9ca3af] font-medium">Science Conflict Check</span>
          <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px]">No Conflict</span>
        </div>
        
        <div className="flex flex-col gap-1.5 mt-1">
          <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-[#6b7280]">
            <span>Model Predictors Confidence</span>
            <span className="text-white font-mono">88.3% Average</span>
          </div>
          {/* Gridded Confidence Scores */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold">
            <div className="bg-[#1a1b1e] border border-white/5 py-1.5 rounded-lg flex flex-col">
              <span className="text-[#6b7280] text-[8px] uppercase">Dust Model</span>
              <span className="text-white font-bold font-mono mt-0.5">92%</span>
            </div>
            <div className="bg-[#1a1b1e] border border-white/5 py-1.5 rounded-lg flex flex-col">
              <span className="text-[#6b7280] text-[8px] uppercase">Power Est</span>
              <span className="text-white font-bold font-mono mt-0.5">88%</span>
            </div>
            <div className="bg-[#1a1b1e] border border-white/5 py-1.5 rounded-lg flex flex-col">
              <span className="text-[#6b7280] text-[8px] uppercase">Scenario</span>
              <span className="text-white font-bold font-mono mt-0.5">85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

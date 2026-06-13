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
          <span className="text-[var(--secondary)] uppercase text-[10px] tracking-widest">Engineering Reasoning</span>
          <p className="text-[10px] leading-relaxed uppercase text-[var(--foreground)] font-bold">
            Projected recovery exceeds minimum operational threshold.
            <br />
            Battery reserve remains within constraint bounds.
            <br />
            Targeted mitigation maximizes watt-per-Wh return.
            <br />
            Science schedule unaffected.
            <br />
            Expected net mission value highest among evaluated actions.
          </p>
        </div>

        <div className="flex flex-col gap-2 border-b border-[var(--border-color)] pb-2">
          <span className="text-[var(--secondary)] uppercase text-[10px] tracking-widest">Decision Factors (Mission Value Weights)</span>
          <div className="flex flex-col gap-1 text-[10px]">
            <div className="flex justify-between items-center">
              <span className="uppercase">Power Recovery</span>
              <span className="font-bold">40%</span>
            </div>
            <div className="w-full bg-[var(--background)] h-1 mb-1">
              <div className="bg-[var(--primary)] h-full" style={{ width: '40%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="uppercase">Energy Cost</span>
              <span className="font-bold">30%</span>
            </div>
            <div className="w-full bg-[var(--background)] h-1 mb-1">
              <div className="bg-[var(--primary)] h-full" style={{ width: '30%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="uppercase">System Health</span>
              <span className="font-bold">20%</span>
            </div>
            <div className="w-full bg-[var(--background)] h-1 mb-1">
              <div className="bg-[var(--primary)] h-full" style={{ width: '20%' }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="uppercase">Mission Constraints</span>
              <span className="font-bold">10%</span>
            </div>
            <div className="w-full bg-[var(--background)] h-1">
              <div className="bg-[var(--primary)] h-full" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

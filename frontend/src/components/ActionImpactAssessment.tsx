import React from 'react';

export default function ActionImpactAssessment() {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        Action Impact Assessment
      </div>
      <div className="p-4 flex flex-col gap-3 font-mono text-sm">
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Power Recovery</span>
            <span className="font-bold text-[var(--success)] text-lg">+8.2 W</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Energy Consumed</span>
            <span className="font-bold text-[var(--foreground)] text-lg">1.3 Wh</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Affected Surface</span>
            <span className="font-bold text-[var(--primary)] text-lg">18%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Mission Life Ext.</span>
            <span className="font-bold text-[var(--success)] text-lg">+14 Days</span>
          </div>
        </div>
        
        <div className="mt-2 pt-3 border-t border-[var(--border-color)] flex justify-between items-center">
          <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Risk Level</span>
          <span className="bg-[var(--success)] text-white px-2 py-0.5 text-[10px] font-bold uppercase">Low</span>
        </div>
      </div>
    </div>
  );
}

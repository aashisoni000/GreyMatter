import React from 'react';

export default function MissionValueEngine() {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--primary)] shadow-[0_0_15px_rgba(2,132,199,0.15)] relative mb-4">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--primary)]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--primary)]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--primary)]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--primary)]"></div>

      <div className="bg-[var(--primary)] text-white px-3 py-2 text-xs font-bold uppercase tracking-widest flex justify-between items-center">
        <span>Mission Value Engine</span>
        <span className="text-[10px] animate-pulse">OPTIMIZATION ACTIVE</span>
      </div>
      
      <div className="p-4 flex items-center justify-between font-mono text-[10px] uppercase text-center overflow-x-auto">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="border border-[var(--border-color)] bg-[var(--background)] p-2 w-full max-w-[120px]">
            Dust Distribution
          </div>
        </div>

        <div className="text-[var(--secondary)] font-bold px-2">→</div>

        {/* Step 2 */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="border border-[var(--border-color)] bg-[var(--background)] p-2 w-full max-w-[120px]">
            Power Recovery Potential
          </div>
        </div>

        <div className="text-[var(--secondary)] font-bold px-2">→</div>

        {/* Step 3: Constraints Array */}
        <div className="flex flex-col items-center gap-1 flex-1 relative border border-[var(--secondary)] p-2 border-dashed">
          <span className="absolute -top-2 bg-[var(--surface)] px-1 text-[8px] text-[var(--secondary)] tracking-widest">Constraint Eval</span>
          <div className="border border-[var(--border-color)] bg-[var(--background)] p-1 w-full text-[8px]">Battery Margin</div>
          <div className="border border-[var(--border-color)] bg-[var(--background)] p-1 w-full text-[8px]">Science Schedule</div>
          <div className="border border-[var(--border-color)] bg-[var(--background)] p-1 w-full text-[8px]">Thermal State</div>
          <div className="border border-[var(--border-color)] bg-[var(--background)] p-1 w-full text-[8px]">HV Budget</div>
        </div>

        <div className="text-[var(--secondary)] font-bold px-2">→</div>

        {/* Step 4 */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="border border-[var(--border-color)] bg-[var(--background)] p-2 w-full max-w-[120px]">
            Net Mission Value Score
          </div>
        </div>

        <div className="text-[var(--primary)] font-bold px-2">→</div>

        {/* Step 5 */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="border-2 border-[var(--primary)] bg-[rgba(2,132,199,0.1)] text-[var(--primary)] p-2 w-full max-w-[120px] font-bold">
            Recommended Action
          </div>
        </div>

      </div>
    </div>
  );
}

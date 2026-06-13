import React from 'react';

export default function ForecastConfidence() {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        Forecast Confidence
      </div>
      <div className="p-3 flex flex-col gap-2 font-mono text-[10px] uppercase">
        
        <div className="flex justify-between items-center">
          <span className="text-[var(--secondary)]">Dust Model Confidence</span>
          <span className="font-bold">92%</span>
        </div>
        <div className="w-full bg-[var(--background)] h-1 mb-1">
          <div className="bg-[var(--primary)] h-full" style={{ width: '92%' }}></div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[var(--secondary)]">Power Prediction Confidence</span>
          <span className="font-bold">89%</span>
        </div>
        <div className="w-full bg-[var(--background)] h-1 mb-1">
          <div className="bg-[var(--primary)] h-full" style={{ width: '89%' }}></div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[var(--secondary)]">Scenario Confidence</span>
          <span className="font-bold">87%</span>
        </div>
        <div className="w-full bg-[var(--background)] h-1">
          <div className="bg-[var(--warning)] h-full" style={{ width: '87%' }}></div>
        </div>

      </div>
    </div>
  );
}

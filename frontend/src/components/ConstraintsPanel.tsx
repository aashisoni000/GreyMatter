import React from 'react';
import { MissionConstraint } from '../types';

interface ConstraintsPanelProps {
  constraints: MissionConstraint[];
}

export default function ConstraintsPanel({ constraints }: ConstraintsPanelProps) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl p-5 flex flex-col justify-between">
      <h3 className="text-sm font-bold text-white tracking-tight border-b border-[var(--border-color)] pb-2.5 mb-4 font-sans">
        Safety Constraints
      </h3>
      <div className="flex flex-col gap-4">
        {constraints.map((c) => (
          <div key={c.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-white font-sans">{c.parameter}</span>
              {c.isViolated ? (
                <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded uppercase tracking-wider animate-pulse">
                  Violated
                </span>
              ) : (
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded uppercase tracking-wider">
                  Nominal
                </span>
              )}
            </div>
            
            <div className="flex justify-between text-xs text-[var(--text-secondary)] font-medium">
              <span>Current: <strong className="text-white font-semibold">{c.currentValue} {c.unit}</strong></span>
              <span>Limit: <strong className="text-[var(--text-muted)] font-semibold">{c.limit} {c.unit}</strong></span>
            </div>
            
            {/* Progress track */}
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  c.isViolated ? 'bg-rose-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'bg-blue-500'
                }`} 
                style={{ width: `${Math.min((c.currentValue / c.limit) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

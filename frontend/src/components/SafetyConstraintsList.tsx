import React from 'react';
import { MissionConstraint } from '../types';

interface SafetyConstraintsListProps {
  constraints: MissionConstraint[];
}

export default function SafetyConstraintsList({ constraints }: SafetyConstraintsListProps) {
  return (
    <div className="bg-[#141517] border border-white/5 rounded-2xl p-5 flex flex-col justify-between h-full font-sans">
      {/* Widget Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-white text-base font-semibold leading-none mb-1">Safety Constraints</h3>
          <p className="text-[#6b7280] text-xs font-medium">Platform Engineering Thresholds</p>
        </div>
        <button className="text-[#f0522f] hover:underline text-xs font-semibold cursor-pointer">
          View All
        </button>
      </div>

      {/* Constraints List */}
      <div className="flex flex-col gap-4">
        {constraints.map((c) => {
          return (
            <div key={c.id} className="flex items-center justify-between border-b border-white/5 last:border-b-0 pb-3 last:pb-0">
              <div className="flex items-center gap-3">
                {/* Left visual indicator - replaces the country flag */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                    c.isViolated
                      ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                      : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                  }`}
                >
                  {c.isViolated ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>

                {/* Constraint info */}
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold leading-tight">{c.parameter}</span>
                  <span className="text-[#6b7280] text-xs font-medium mt-0.5">
                    Limit: {c.limit}
                    {c.unit}
                  </span>
                </div>
              </div>

              {/* Right current values & status badge */}
              <div className="flex flex-col items-end">
                <span className="text-white text-sm font-bold font-mono">
                  {c.currentValue} {c.unit}
                </span>
                <span
                  className={`text-[9px] font-bold uppercase tracking-wider mt-0.5 ${
                    c.isViolated ? 'text-[#ef4444]' : 'text-[#9ca3af]'
                  }`}
                >
                  {c.isViolated ? 'Violated' : 'Nominal'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

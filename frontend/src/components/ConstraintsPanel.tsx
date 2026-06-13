import React from 'react';
import { MissionConstraint } from '../types';

interface ConstraintsPanelProps {
  constraints: MissionConstraint[];
}

export default function ConstraintsPanel({ constraints }: ConstraintsPanelProps) {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        Mission Constraints
      </div>
      <div className="p-0 overflow-auto">
        <ul className="flex flex-col w-full text-sm font-mono m-0 p-0">
          {constraints.map((c) => (
            <li key={c.id} className="flex flex-col border-b border-[var(--border-color)] last:border-b-0 p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="uppercase text-xs font-bold tracking-wider">{c.parameter}</span>
                {c.isViolated ? (
                  <span className="bg-[var(--critical)] text-white px-2 py-0.5 text-[10px] uppercase">Violated</span>
                ) : (
                  <span className="bg-[var(--success)] text-white px-2 py-0.5 text-[10px] uppercase">Nominal</span>
                )}
              </div>
              <div className="flex justify-between text-xs text-[var(--secondary)] mb-1">
                <span>VAL: {c.currentValue} {c.unit}</span>
                <span>LIM: {c.limit} {c.unit}</span>
              </div>
              <div className="w-full bg-[var(--background)] h-1.5 border border-[var(--border-color)] overflow-hidden">
                <div 
                  className={`h-full ${c.isViolated ? 'bg-[var(--critical)]' : 'bg-[var(--primary)]'}`} 
                  style={{ width: `${Math.min((c.currentValue / c.limit) * 100, 100)}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

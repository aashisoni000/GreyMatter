import React from 'react';
import { MitigationScenario } from '../types';

interface ScenarioMatrixProps {
  scenarios: MitigationScenario[];
}

export default function ScenarioMatrix({ scenarios }: ScenarioMatrixProps) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl p-5 flex flex-col justify-between">
      <h3 className="text-sm font-bold text-white tracking-tight border-b border-[var(--border-color)] pb-2.5 mb-4 font-sans">
        Mitigation Scenario Matrix
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-sans border-collapse min-w-[350px]">
          <thead>
            <tr className="border-b border-white/5 text-[var(--text-muted)] font-semibold text-[10px] uppercase tracking-wider">
              <th className="py-2.5 px-3">Action</th>
              <th className="py-2.5 px-3 text-right">Cost</th>
              <th className="py-2.5 px-3 text-right text-emerald-400">Pwr Rec</th>
              <th className="py-2.5 px-3 text-center">Risk</th>
              <th className="py-2.5 px-3 text-center">Preserved</th>
              <th className="py-2.5 px-3 text-right text-blue-400">Val</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((s, idx) => (
              <tr 
                key={s.id} 
                className={`border-b border-white/5 last:border-b-0 transition-colors ${
                  s.isRecommended 
                    ? 'bg-blue-500/[0.04] font-semibold border-l-2 border-l-blue-500' 
                    : idx % 2 === 0 ? 'bg-white/[0.01]' : 'hover:bg-white/[0.02]'
                }`}
              >
                <td className="py-3 px-3 font-semibold text-white">
                  <div className="flex items-center gap-1.5">
                    <span>{s.action}</span>
                    {s.isRecommended && (
                      <span className="text-[9px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20 font-medium">
                        Rec
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-3 text-right text-[var(--text-secondary)] font-mono text-xs">
                  {s.energyCost.toFixed(1)} Wh
                </td>
                <td className="py-3 px-3 text-right text-emerald-400 font-mono text-xs">
                  +{s.powerRecovery.toFixed(1)} W
                </td>
                <td className="py-3 px-3 text-center">
                  <span className={`px-2 py-0.5 text-[10px] font-semibold rounded uppercase ${
                    s.risk === 'HIGH' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/15' : 
                    s.risk === 'MEDIUM' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/15' : 
                    'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15'
                  }`}>
                    {s.risk}
                  </span>
                </td>
                <td className={`py-3 px-3 text-center font-semibold text-xs ${
                  s.daysPreserved > 0 ? 'text-emerald-400' : 
                  s.daysPreserved < 0 ? 'text-rose-400' : 'text-[var(--text-muted)]'
                }`}>
                  {s.daysPreserved > 0 ? '+' : ''}{s.daysPreserved}d
                </td>
                <td className="py-3 px-3 text-right font-bold text-blue-400 text-xs font-mono">
                  {s.missionValue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

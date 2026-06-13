import React from 'react';
import { MitigationScenario } from '../types';

interface ScenarioMatrixProps {
  scenarios: MitigationScenario[];
}

export default function ScenarioMatrix({ scenarios }: ScenarioMatrixProps) {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        Mitigation Scenario Matrix
      </div>
      <div className="p-0 overflow-auto">
        <table className="w-full text-left text-sm font-mono border-collapse">
          <thead className="bg-[var(--background)] text-[var(--secondary)] text-[10px] uppercase sticky top-0 border-b border-[var(--border-color)]">
            <tr>
              <th className="p-2 border-r border-[var(--border-color)]">Action</th>
              <th className="p-2 border-r border-[var(--border-color)]">Energy Cost</th>
              <th className="p-2 border-r border-[var(--border-color)]">Power Rec.</th>
              <th className="p-2 border-r border-[var(--border-color)]">Risk</th>
              <th className="p-2 border-r border-[var(--border-color)]">Days Preserved</th>
              <th className="p-2">Mission Value</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((s) => (
              <tr 
                key={s.id} 
                className={`border-b border-[var(--border-color)] last:border-b-0 ${s.isRecommended ? 'bg-[rgba(2,132,199,0.1)] border-l-4 border-l-[var(--primary)]' : 'hover:bg-[var(--surface-hover)] border-l-4 border-l-transparent'}`}
              >
                <td className={`p-2 border-r border-[var(--border-color)] font-bold ${s.isRecommended ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}>
                  {s.action}
                  {s.isRecommended && <span className="ml-2 text-[10px] bg-[var(--primary)] text-white px-1 py-0.5 rounded-none">REC</span>}
                </td>
                <td className="p-2 border-r border-[var(--border-color)]">{s.energyCost.toFixed(1)} Wh</td>
                <td className="p-2 border-r border-[var(--border-color)] text-[var(--success)]">{s.powerRecovery > 0 ? '+' : ''}{s.powerRecovery.toFixed(1)} W</td>
                <td className="p-2 border-r border-[var(--border-color)]">
                  <span className={`px-1 py-0.5 text-[10px] font-bold ${s.risk === 'HIGH' ? 'bg-[var(--critical)] text-white' : s.risk === 'MEDIUM' ? 'bg-[var(--warning)] text-white' : 'bg-[var(--success)] text-white'}`}>
                    {s.risk}
                  </span>
                </td>
                <td className={`p-2 border-r border-[var(--border-color)] font-bold ${s.daysPreserved > 0 ? 'text-[var(--success)]' : s.daysPreserved < 0 ? 'text-[var(--critical)]' : 'text-[var(--secondary)]'}`}>
                  {s.daysPreserved > 0 ? '+' : ''}{s.daysPreserved}
                </td>
                <td className="p-2 font-bold text-lg text-[var(--primary)]">
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

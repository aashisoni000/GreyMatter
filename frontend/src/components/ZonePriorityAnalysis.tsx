import React from 'react';
import { SolarPanelZone } from '../types';

interface ZonePriorityAnalysisProps {
  zones: SolarPanelZone[];
}

export default function ZonePriorityAnalysis({ zones }: ZonePriorityAnalysisProps) {
  // Helper to generate mock cleaning cost / mission value / recovery for the UI
  const getDerivedStats = (zone: SolarPanelZone) => {
    if (zone.id === 'F') return { cost: 1.1, value: 95, recovery: 4.5 };
    if (zone.id === 'G') return { cost: 1.0, value: 93, recovery: 4.1 };
    if (zone.id === 'K') return { cost: 1.0, value: 90, recovery: 3.8 };
    return { cost: 1.3, value: Math.floor(zone.dustPercent * 0.9), recovery: Math.max(0, zone.powerContributionPercent - 2) };
  };

  // Sort zones descending by mission value
  const sortedZones = [...zones].map(z => ({ ...z, stats: getDerivedStats(z) })).sort((a, b) => {
    return b.stats.value - a.stats.value;
  }).slice(0, 6); // Keep it compact

  return (
    <div className="bg-[var(--surface)] border border-[var(--border-color)] p-2.5 flex flex-col justify-between">
      <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[var(--secondary)] border-b border-[var(--border-color)] pb-1 mb-2">
        // Zone Priority Analysis (Sorted by Mission Value)
      </h3>
      <div className="overflow-auto">
        <table className="w-full text-left text-[11px] font-mono border-collapse">
          <thead>
            <tr className="border-b border-slate-350 text-slate-500 uppercase text-[9px] tracking-wider">
              <th className="py-1 px-2 text-center w-12 font-bold font-heading">Zone</th>
              <th className="py-1 px-2 font-heading">Dust %</th>
              <th className="py-1 px-2 font-heading">Power Loss (W)</th>
              <th className="py-1 px-2 text-[var(--success)] font-heading">Recovery Pot.</th>
              <th className="py-1 px-2 text-[var(--warning)] font-heading">Cost (Wh)</th>
              <th className="py-1 px-2 text-right text-[var(--primary)] font-heading">Mission Value</th>
            </tr>
          </thead>
          <tbody>
            {sortedZones.map((z) => {
              const isTarget = ['F', 'G', 'K'].includes(z.id);
              return (
                <tr 
                  key={z.id} 
                  className={`border-b border-slate-100 last:border-b-0 hover:bg-slate-50 ${isTarget ? 'bg-red-50/50 font-bold border-l-2 border-l-red-500' : ''}`}
                >
                  <td className="py-1.5 px-2 text-center font-heading text-slate-900 font-bold">
                    {z.id}
                  </td>
                  <td className={`py-1.5 px-2 ${isTarget ? 'text-red-600' : 'text-slate-700'}`}>
                    {z.dustPercent}%
                  </td>
                  <td className="py-1.5 px-2 text-slate-600">
                    {z.powerContributionPercent}W
                  </td>
                  <td className="py-1.5 px-2 text-[var(--success)]">
                    +{z.stats.recovery.toFixed(1)}W
                  </td>
                  <td className="py-1.5 px-2 text-[var(--warning)]">
                    {z.stats.cost.toFixed(1)}
                  </td>
                  <td className={`py-1.5 px-2 text-right ${isTarget ? 'text-[var(--primary)] font-bold font-heading text-sm' : 'text-slate-500'}`}>
                    {z.stats.value}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

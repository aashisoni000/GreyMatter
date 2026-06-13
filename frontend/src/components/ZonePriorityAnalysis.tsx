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
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        Zone Priority Analysis
      </div>
      <div className="p-0 overflow-auto">
        <table className="w-full text-left text-sm font-mono border-collapse">
          <thead className="bg-[var(--background)] text-[var(--secondary)] text-[10px] uppercase sticky top-0 border-b border-[var(--border-color)]">
            <tr>
              <th className="p-2 border-r border-[var(--border-color)] text-center w-12">Zone</th>
              <th className="p-2 border-r border-[var(--border-color)]">Dust %</th>
              <th className="p-2 border-r border-[var(--border-color)]">Power Loss (W)</th>
              <th className="p-2 border-r border-[var(--border-color)] text-[var(--success)]">Recovery Potential (W)</th>
              <th className="p-2 border-r border-[var(--border-color)] text-[var(--warning)]">Cleaning Cost (Wh)</th>
              <th className="p-2 text-[var(--primary)]">Mission Value</th>
            </tr>
          </thead>
          <tbody>
            {sortedZones.map((z) => {
              const isTarget = ['F', 'G', 'K'].includes(z.id);
              return (
                <tr 
                  key={z.id} 
                  className={`border-b border-[var(--border-color)] last:border-b-0 ${isTarget ? 'bg-[rgba(220,38,38,0.05)] border-l-4 border-l-[var(--critical)]' : 'hover:bg-[var(--surface-hover)] border-l-4 border-l-transparent'}`}
                >
                  <td className="p-2 border-r border-[var(--border-color)] text-center font-bold text-[var(--foreground)]">
                    {z.id}
                  </td>
                  <td className={`p-2 border-r border-[var(--border-color)] ${isTarget ? 'text-[var(--critical)] font-bold' : ''}`}>
                    {z.dustPercent}%
                  </td>
                  <td className="p-2 border-r border-[var(--border-color)]">
                    {z.powerContributionPercent}
                  </td>
                  <td className="p-2 border-r border-[var(--border-color)] text-[var(--success)] font-bold">
                    +{z.stats.recovery.toFixed(1)}
                  </td>
                  <td className="p-2 border-r border-[var(--border-color)] text-[var(--warning)]">
                    {z.stats.cost.toFixed(1)}
                  </td>
                  <td className={`p-2 font-bold ${isTarget ? 'text-[var(--primary)] text-lg' : 'text-[var(--secondary)]'}`}>
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

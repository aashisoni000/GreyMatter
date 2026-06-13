import React from 'react';
import { SolarPanelZone } from '../types';

interface SurfaceMapProps {
  zones: SolarPanelZone[];
}

export default function SurfaceMap({ zones }: SurfaceMapProps) {
  // Helpers for summary
  const totalDust = zones.reduce((acc, zone) => acc + zone.dustPercent, 0) / zones.length;
  const powerLoss = zones.reduce((acc, zone) => acc + (zone.dustPercent > 50 ? 5 : 0), 0); // arbitrary calc for UI display
  const highPriorityCount = zones.filter(z => z.priority === 'HIGH' || z.priority === 'CRITICAL').length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'CRITICAL': return 'border-[var(--critical)] text-[var(--critical)] bg-[rgba(220,38,38,0.1)]';
      case 'HIGH': return 'border-[var(--warning)] text-[var(--warning)] bg-[rgba(217,119,6,0.1)]';
      case 'MONITOR': return 'border-[#eab308] text-[#eab308]'; // yellow
      default: return 'border-[var(--success)] text-[var(--success)]';
    }
  };

  const getPriorityBgColor = (priority: string) => {
    switch (priority) {
      case 'CRITICAL': return 'bg-[var(--critical)]';
      case 'HIGH': return 'bg-[var(--warning)]';
      case 'MONITOR': return 'bg-[#eab308]';
      default: return 'bg-[var(--success)]';
    }
  };

  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)] h-full">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)] flex justify-between">
        <span>Surface Intelligence Map: Solar Array Alpha</span>
        <span className="text-[var(--primary)] font-mono">LUNAR REGION 4</span>
      </div>
      
      {/* Map Grid */}
      <div className="flex-1 p-4 bg-[var(--background)] flex flex-col justify-center items-center relative overflow-hidden min-h-[300px]">
        <div className="grid grid-cols-4 gap-2 w-full max-w-lg h-full max-h-lg relative z-10">
          {zones.map((zone) => {
            const isTarget = ['F', 'G', 'K'].includes(zone.id);
            return (
              <div 
                key={zone.id} 
                className={`relative flex flex-col justify-between border-2 p-1.5 font-mono text-[10px] uppercase tracking-wider ${getPriorityColor(zone.priority)} ${isTarget ? 'ring-2 ring-offset-2 ring-[var(--critical)] ring-offset-[var(--background)] z-20 shadow-[0_0_15px_rgba(220,38,38,0.5)] bg-[rgba(220,38,38,0.15)]' : 'bg-[var(--surface)]'}`}
              >
                {isTarget && (
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[var(--critical)] text-white flex items-center justify-center font-bold text-xs rounded-none z-30 animate-pulse">
                    TGT
                  </div>
                )}
                <div className="flex justify-between items-start font-bold">
                  <span className="text-lg">{zone.id}</span>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-1 py-0.5 text-white ${getPriorityBgColor(zone.priority)}`}>
                      {zone.priority.substring(0, 4)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mt-2 border-t border-current pt-1">
                  <div className="flex justify-between">
                    <span>Dust</span>
                    <span>{zone.dustPercent}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Power</span>
                    <span>{zone.powerContributionPercent}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Footer */}
      <div className="bg-[var(--surface)] border-t border-[var(--border-color)] px-4 py-3 grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Total Dust Coverage</span>
          <span className="font-mono text-lg">{totalDust.toFixed(1)}%</span>
        </div>
        <div className="flex flex-col border-l border-[var(--border-color)] pl-4">
          <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">Projected Power Loss</span>
          <span className="font-mono text-lg text-[var(--warning)]">{powerLoss.toFixed(1)} W</span>
        </div>
        <div className="flex flex-col border-l border-[var(--border-color)] pl-4">
          <span className="text-[10px] text-[var(--secondary)] uppercase tracking-widest">High Priority Zones</span>
          <span className="font-mono text-lg text-[var(--critical)]">{highPriorityCount}</span>
        </div>
      </div>
    </div>
  );
}

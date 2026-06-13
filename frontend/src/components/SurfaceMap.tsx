import React from 'react';
import { SolarPanelZone } from '../types';

interface SurfaceMapProps {
  zones: SolarPanelZone[];
}

export default function SurfaceMap({ zones }: SurfaceMapProps) {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)] h-full flex-1">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)] flex justify-between">
        <span>Surface Intelligence Map: Solar Array Alpha</span>
        <span className="text-[var(--primary)] font-mono">LUNAR REGION 4</span>
      </div>
      
      {/* Map Grid */}
      <div className="flex-1 p-4 bg-[var(--background)] flex flex-col justify-center items-center relative overflow-hidden min-h-[450px]">
        
        {/* Dust Migration Overlay Indicator */}
        <div className="absolute top-2 left-2 text-[var(--secondary)] flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest z-0 opacity-50">
          <span>Migration Vector</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="19 19 19 5 5 5"></polyline></svg>
        </div>

        <div className="grid grid-cols-4 gap-3 w-full h-full relative z-10 p-2">
          {zones.map((zone) => {
            const isTarget = ['F', 'G', 'K'].includes(zone.id);
            const getPriorityColor = (priority: string) => {
              switch (priority) {
                case 'CRITICAL': return 'border-[var(--critical)] text-[var(--critical)] bg-[rgba(220,38,38,0.1)]';
                case 'HIGH': return 'border-[var(--warning)] text-[var(--warning)] bg-[rgba(217,119,6,0.1)]';
                case 'MONITOR': return 'border-[#eab308] text-[#eab308]'; 
                default: return 'border-[var(--border-color)] text-[var(--secondary)]';
              }
            };
            const getPriorityBgColor = (priority: string) => {
              switch (priority) {
                case 'CRITICAL': return 'bg-[var(--critical)] text-white';
                case 'HIGH': return 'bg-[var(--warning)] text-white';
                case 'MONITOR': return 'bg-[#eab308] text-white';
                default: return 'bg-transparent text-[var(--secondary)]';
              }
            };

            return (
              <div 
                key={zone.id} 
                className={`relative flex flex-col justify-between border-2 p-2 font-mono text-xs uppercase tracking-wider ${getPriorityColor(zone.priority)} ${isTarget ? 'ring-2 ring-offset-2 ring-[var(--critical)] ring-offset-[var(--background)] z-20 shadow-[0_0_15px_rgba(220,38,38,0.5)] bg-[rgba(220,38,38,0.15)]' : 'bg-[var(--surface)]'}`}
              >
                {/* Migration arrows in each cell pointing top-right */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="19 19 19 5 5 5"></polyline></svg>
                </div>

                {isTarget && (
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[var(--critical)] text-white flex items-center justify-center font-bold text-xs rounded-none z-30 animate-pulse">
                    TGT
                  </div>
                )}
                <div className="flex justify-between items-start font-bold relative z-10">
                  <span className="text-xl text-[var(--foreground)]">{zone.id}</span>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-1.5 py-0.5 text-[10px] ${getPriorityBgColor(zone.priority)}`}>
                      {zone.priority.substring(0, 4)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mt-auto border-t border-current pt-1.5 relative z-10 text-[var(--foreground)] text-xs">
                  <div className="flex justify-between">
                    <span className="text-[var(--secondary)]">Dust</span>
                    <span className="font-bold">{zone.dustPercent}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--secondary)]">Power</span>
                    <span className="font-bold">{zone.powerContributionPercent}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="absolute bottom-2 right-2 flex gap-3 font-mono text-[9px] uppercase tracking-widest z-10 bg-[var(--surface)] p-1.5 border border-[var(--border-color)] shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[var(--surface)] border border-[var(--border-color)]"></span> LOW
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[var(--warning)] opacity-50"></span> HIGH
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[var(--critical)] opacity-50"></span> CRITICAL
          </div>
        </div>
      </div>

      {/* Analytical Annotation Footer */}
      <div className="bg-[var(--surface)] border-t border-[var(--border-color)] px-4 py-2 grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <span className="text-[9px] text-[var(--secondary)] uppercase tracking-widest">Targeted Zones</span>
          <span className="font-mono text-base font-bold text-[var(--critical)]">F G K</span>
        </div>
        <div className="flex flex-col border-l border-[var(--border-color)] pl-4">
          <span className="text-[9px] text-[var(--secondary)] uppercase tracking-widest">Recoverable Power</span>
          <span className="font-mono text-base font-bold text-[var(--success)]">+8.2 W</span>
        </div>
        <div className="flex flex-col border-l border-[var(--border-color)] pl-4">
          <span className="text-[9px] text-[var(--secondary)] uppercase tracking-widest">Surface Affected</span>
          <span className="font-mono text-base font-bold text-[var(--primary)]">18%</span>
        </div>
      </div>
    </div>
  );
}

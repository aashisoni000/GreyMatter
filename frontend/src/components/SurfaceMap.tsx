import React from 'react';
import { SolarPanelZone } from '../types';

interface SurfaceMapProps {
  zones: SolarPanelZone[];
}

export default function SurfaceMap({ zones }: SurfaceMapProps) {
  // Helper to derive mission value consistent with ZonePriorityAnalysis
  const getMissionValue = (zone: SolarPanelZone) => {
    if (zone.id === 'F') return 95;
    if (zone.id === 'G') return 93;
    if (zone.id === 'K') return 90;
    return Math.floor(zone.dustPercent * 0.9);
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl flex flex-col h-full flex-1 overflow-hidden">
      {/* Card Header */}
      <div className="border-b border-[var(--border-color)] px-6 py-4 flex justify-between items-center bg-white/[0.01]">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-bold text-white tracking-tight font-sans">
            Surface Intelligence Map
          </span>
          <span className="text-xs text-[var(--text-muted)] font-sans">
            Solar Array Alpha Segment Status
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)] bg-[var(--surface-secondary)] px-2.5 py-1 rounded border border-[var(--border-color)]">
          REF: LUNAR_R4
        </span>
      </div>
      
      {/* Map Grid Container */}
      <div className="flex-1 p-6 bg-[#0B0D11] flex flex-col justify-center items-center relative min-h-[440px]">
        
        {/* Physical Solar Panel Frame Grid */}
        <div className="w-full h-full p-3 bg-black/40 rounded-lg border border-[var(--border-color)] grid grid-cols-4 gap-3 relative">
          {zones.map((zone) => {
            const isTarget = ['F', 'G', 'K'].includes(zone.id);
            const missionValue = getMissionValue(zone);
            
            // Subtle Heatmap overlay bg and border based on dust levels
            let heatmapStyles = 'bg-slate-900/40 border-white/5 text-[var(--text-secondary)]';
            let statusLabel = 'Low';
            let badgeColor = 'text-[var(--text-muted)] border-white/5 bg-white/5';
            
            if (zone.dustPercent >= 80) {
              heatmapStyles = 'bg-rose-500/10 border-rose-500/20 text-rose-300';
              statusLabel = 'Critical';
              badgeColor = 'text-rose-400 border-rose-500/20 bg-rose-500/10';
            } else if (zone.dustPercent >= 60) {
              heatmapStyles = 'bg-orange-500/15 border-orange-500/20 text-orange-300';
              statusLabel = 'High';
              badgeColor = 'text-orange-400 border-orange-500/20 bg-orange-500/10';
            } else if (zone.dustPercent >= 30) {
              heatmapStyles = 'bg-amber-500/5 border-amber-500/10 text-amber-300';
              statusLabel = 'Medium';
              badgeColor = 'text-amber-400 border-amber-500/20 bg-amber-500/10';
            }

            // Stand-out style for target zones (vibrant blue border and glow)
            const targetStyles = isTarget 
              ? 'border-blue-500 border-2 shadow-[0_0_15px_rgba(59,130,246,0.25)] ring-1 ring-blue-500/30' 
              : 'border';

            return (
              <div 
                key={zone.id} 
                className={`relative flex flex-col justify-between p-4.5 rounded-lg overflow-hidden transition-all duration-300 ${heatmapStyles} ${targetStyles}`}
              >
                {/* Silicon Wafer Texture: Grid lines */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: '12px 16px'
                  }}
                />

                {/* Wafer vertical silver bus bars (thin lines) */}
                <div className="absolute inset-0 flex justify-around pointer-events-none opacity-10">
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                </div>

                {/* Target badge or regular priority */}
                <div className="flex justify-between items-start z-10 relative">
                  <span className="font-mono text-xl font-bold text-white">{zone.id}</span>
                  {isTarget ? (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-blue-500/20 bg-blue-500/15 text-blue-400 tracking-wider">
                      Target
                    </span>
                  ) : (
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border ${badgeColor}`}>
                      {statusLabel}
                    </span>
                  )}
                </div>

                {/* Core Tile Metrics */}
                <div className="flex flex-col gap-2 mt-4 pt-3.5 border-t border-white/5 z-10 relative">
                  <div className="flex justify-between text-xs items-center">
                    <span className="text-[var(--text-muted)] font-medium">Dust</span>
                    <span className="font-mono font-semibold text-white">
                      {zone.dustPercent}%
                    </span>
                  </div>
                  <div className="flex justify-between text-xs items-center">
                    <span className="text-[var(--text-muted)] font-medium">Power Loss</span>
                    <span className="font-mono font-semibold text-white">
                      {zone.powerContributionPercent}W
                    </span>
                  </div>
                  <div className="flex justify-between text-xs items-center">
                    <span className="text-[var(--text-muted)] font-medium">Value</span>
                    <span className="font-mono font-semibold text-blue-400">
                      {missionValue}
                    </span>
                  </div>
                </div>

                {/* Pulse light for target */}
                {isTarget && (
                  <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Modern Elegant Map Legend */}
        <div className="absolute bottom-6 right-8 flex gap-3 font-sans text-[10px] bg-[var(--surface)] px-3.5 py-2 rounded-lg border border-[var(--border-color)] shadow-xl text-[var(--text-secondary)] z-30">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-slate-800/80 border border-white/5"></span> Low Dust
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-amber-500/20 border border-amber-500/20"></span> Med
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-orange-500/20 border border-orange-500/20"></span> High
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-rose-500/20 border border-rose-500/20"></span> Crit
          </div>
          <div className="flex items-center gap-1.5 border-l border-[var(--border-color)] pl-3">
            <span className="w-2.5 h-2.5 rounded border-2 border-blue-500 bg-blue-500/10"></span> Targeted
          </div>
        </div>
      </div>

      {/* Analytical Annotation Footer (Redesigned) */}
      <div className="bg-[var(--surface)] border-t border-[var(--border-color)] px-6 py-4 grid grid-cols-3 gap-4 font-sans text-sm">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Targeted Zones</span>
          <span className="font-bold text-blue-400 font-mono tracking-wide">F, G, K</span>
        </div>
        <div className="flex flex-col gap-1 border-l border-[var(--border-color)] pl-6">
          <span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Recoverable Power</span>
          <span className="font-bold text-emerald-400 font-sans tracking-tight text-base">+8.2 W</span>
        </div>
        <div className="flex flex-col gap-1 border-l border-[var(--border-color)] pl-6">
          <span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Surface Affected</span>
          <span className="font-bold text-blue-400 font-sans tracking-tight text-base">18.0%</span>
        </div>
      </div>
    </div>
  );
}

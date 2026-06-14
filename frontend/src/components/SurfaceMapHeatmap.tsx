import React, { useState } from 'react';
import { SolarPanelZone } from '../types';

interface SurfaceMapHeatmapProps {
  zones: SolarPanelZone[];
}

export default function SurfaceMapHeatmap({ zones }: SurfaceMapHeatmapProps) {
  const [hoveredZone, setHoveredZone] = useState<SolarPanelZone | null>(null);

  // Helper to derive mission value consistent with ZonePriorityAnalysis
  const getMissionValue = (zone: SolarPanelZone) => {
    if (zone.id === 'F') return 95;
    if (zone.id === 'G') return 93;
    if (zone.id === 'K') return 90;
    return Math.floor(zone.dustPercent * 0.9);
  };

  // Helper to get heat color class based on dust percent
  const getHeatColor = (zone: SolarPanelZone) => {
    const { dustPercent } = zone;

    if (dustPercent >= 80) return 'bg-[#ef4444] text-white'; // Critical
    if (dustPercent >= 60) return 'bg-[#f97316] text-white'; // High
    if (dustPercent >= 30) return 'bg-[#f59e0b]/60 text-white'; // Medium
    return 'bg-[#222428] text-gray-400'; // Low
  };

  return (
    <div className="bg-[#141517] border border-white/5 rounded-2xl p-5 flex flex-col justify-between h-full font-sans shadow-lg">
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-5">
        <div>
          <h3 className="text-white text-base font-semibold leading-none mb-1">Surface Intelligence Map</h3>
          <p className="text-[#6b7280] text-xs font-medium">Solar Array Alpha Segment Status (Regolith Coverage)</p>
        </div>
        {/* Heat Legend - styled exactly like mockup */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#9ca3af] font-semibold">
          <span className="text-[#6b7280]">DUST:</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#222428]"></span>
            <span>&lt;30%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#f59e0b]/60"></span>
            <span>30%+</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#f97316]"></span>
            <span>60%+</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#ef4444]"></span>
            <span>80%+</span>
          </div>
          <div className="flex items-center gap-1 border-l border-white/10 pl-2">
            <span className="w-2.5 h-2.5 rounded-sm border border-blue-500 bg-blue-500/10"></span>
            <span>Target</span>
          </div>
        </div>
      </div>

      {/* 4x4 Grid - Styled as a responsive heatmap */}
      <div className="flex-1 flex items-center justify-center py-4 min-h-[340px] relative">
        <div className="grid grid-cols-4 gap-4 w-full max-w-[520px]">
          {zones.map((zone) => {
            const isTarget = ['F', 'G', 'K'].includes(zone.id);
            const heatColor = getHeatColor(zone);
            const targetRing = isTarget 
              ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-[#141517] shadow-[0_0_15px_rgba(59,130,246,0.65)]' 
              : '';

            return (
              <div
                key={zone.id}
                onMouseEnter={() => setHoveredZone(zone)}
                onMouseLeave={() => setHoveredZone(null)}
                className={`aspect-square rounded-2xl flex flex-col justify-between p-3 relative cursor-pointer border border-white/5 overflow-hidden transition-all duration-200 hover:scale-105 hover:border-white/20 ${heatColor} ${targetRing}`}
              >
                {/* Visual Silicon Wafer Grid Overlay representing electrode trace lines */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.06]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '10px 10px'
                  }}
                />

                {/* Silver bus-bars current collector traces */}
                <div className="absolute inset-0 flex justify-around pointer-events-none opacity-[0.12]">
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                </div>

                {/* Top row of cell: ID + Target Tag */}
                <div className="flex justify-between items-center w-full z-10 relative">
                  <span className="text-sm font-extrabold font-mono">{zone.id}</span>
                  {isTarget && (
                    <span className="text-[8px] bg-blue-600/30 text-blue-200 border border-blue-400/40 px-1 py-0.5 rounded font-bold uppercase tracking-wider">
                      Target
                    </span>
                  )}
                </div>

                {/* Center: Dust Percent */}
                <div className="flex flex-col items-center justify-center my-auto z-10 relative">
                  <span className="text-xl sm:text-2xl font-black font-mono leading-none">{zone.dustPercent}%</span>
                  <span className="text-[8px] uppercase tracking-widest font-semibold opacity-70 mt-0.5">Dust</span>
                </div>

                {/* Bottom: Secondary Metrics */}
                <div className="flex justify-between w-full border-t border-white/10 pt-1.5 text-[9px] font-semibold font-mono z-10 relative">
                  <div className="flex flex-col">
                    <span className="opacity-70 text-[8px] leading-none mb-0.5">LOSS</span>
                    <span>{zone.powerContributionPercent}W</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="opacity-70 text-[8px] leading-none mb-0.5">VAL</span>
                    <span>{getMissionValue(zone)}</span>
                  </div>
                </div>

                {/* Pulsing Target Dot */}
                {isTarget && (
                  <span className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5 z-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Tooltip overlay on Hover */}
        {hoveredZone && (
          <div className="absolute bg-[#1a1b1e] border border-white/10 p-3.5 rounded-xl shadow-2xl z-20 w-48 font-sans text-xs bottom-1 left-1/2 -translate-x-1/2 pointer-events-none">
            <div className="flex justify-between items-center mb-1.5 pb-1.5 border-b border-white/5">
              <span className="text-white font-bold text-sm">Zone {hoveredZone.id}</span>
              {['F', 'G', 'K'].includes(hoveredZone.id) ? (
                <span className="text-[9px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider">Target</span>
              ) : (
                <span className="text-[9px] bg-white/5 text-gray-400 border border-white/5 px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider">{hoveredZone.priority}</span>
              )}
            </div>
            <div className="flex flex-col gap-1 text-[#9ca3af]">
              <div className="flex justify-between">
                <span>Dust Severity:</span>
                <span className="text-white font-mono font-semibold">{hoveredZone.dustPercent}%</span>
              </div>
              <div className="flex justify-between">
                <span>Power Degradation:</span>
                <span className="text-white font-mono font-semibold">{hoveredZone.powerContributionPercent}W</span>
              </div>
              <div className="flex justify-between">
                <span>Recoverable Val:</span>
                <span className="text-blue-400 font-mono font-semibold">{getMissionValue(hoveredZone)}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Logical decision pipeline link block */}
      <div className="border-t border-white/5 pt-4 mt-2 flex flex-col gap-2">
        <span className="text-[#6b7280] text-[9px] uppercase font-bold tracking-wider leading-none">
          Autonomous Optimization Logic Chain
        </span>
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold">
          {/* Target Zones Badge */}
          <div className="bg-[#1e293b] border border-blue-500/20 px-2 py-1 rounded-md text-blue-400 flex items-center gap-1.5">
            <span className="opacity-70 text-[8.5px]">TARGETS</span>
            <span className="font-mono font-bold">F + G + K</span>
          </div>

          <span className="text-gray-600">➔</span>

          {/* Recovery Badge */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 px-2 py-1 rounded-md text-emerald-400 flex items-center gap-1.5">
            <span className="opacity-70 text-[8.5px]">RECOVERY</span>
            <span className="font-mono font-bold">+8.2 W</span>
          </div>

          <span className="text-gray-600">➔</span>

          {/* Score Badge */}
          <div className="bg-amber-950/20 border border-amber-500/20 px-2 py-1 rounded-md text-[#f59e0b] flex items-center gap-1.5">
            <span className="opacity-70 text-[8.5px]">SCORE</span>
            <span className="font-mono font-bold">92 / 100</span>
          </div>

          <span className="text-gray-600">➔</span>

          {/* Decision badge */}
          <div className="bg-[#291714] border border-[#f0522f]/35 px-2 py-1 rounded-md text-[#f0522f] flex items-center gap-1.5 font-bold animate-pulse">
            <span className="opacity-70 text-[8.5px]">OPTIMAL DECISION</span>
            <span>PARTIAL CLEAN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

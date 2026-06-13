import React from 'react';
import { DustTelemetry } from '../types';

interface MissionStatusProps {
  telemetry: DustTelemetry;
}

export default function MissionStatus({ telemetry }: MissionStatusProps) {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        Current State (Telemetry)
      </div>
      <div className="p-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col border border-[var(--border-color)] p-2 bg-[var(--surface-hover)]">
          <span className="text-xs text-[var(--secondary)] uppercase tracking-wider mb-1">Dust Coverage</span>
          <span className="font-mono text-2xl text-[var(--warning)]">{telemetry.dustCoverage.toFixed(1)} <span className="text-sm text-[var(--foreground)]">%</span></span>
          <div className="mt-1 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--warning)]"></span>
            <span className="text-[10px] text-[var(--warning)] uppercase tracking-widest">Warning</span>
          </div>
        </div>
        
        <div className="flex flex-col border border-[var(--border-color)] p-2">
          <span className="text-xs text-[var(--secondary)] uppercase tracking-wider mb-1">Solar Output</span>
          <span className="font-mono text-2xl text-[var(--foreground)]">{telemetry.solarOutput.toFixed(1)} <span className="text-sm">W</span></span>
          <div className="mt-1 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--success)]"></span>
            <span className="text-[10px] text-[var(--success)] uppercase tracking-widest">Nominal</span>
          </div>
        </div>

        <div className="flex flex-col border border-[var(--border-color)] p-2 bg-[var(--surface-hover)]">
          <span className="text-xs text-[var(--secondary)] uppercase tracking-wider mb-1">Battery Margin</span>
          <span className="font-mono text-2xl text-[var(--critical)]">{telemetry.batteryMargin.toFixed(1)} <span className="text-sm">%</span></span>
          <div className="mt-1 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--critical)]"></span>
            <span className="text-[10px] text-[var(--critical)] uppercase tracking-widest">Critical</span>
          </div>
        </div>

        <div className="flex flex-col border border-[var(--border-color)] p-2">
          <span className="text-xs text-[var(--secondary)] uppercase tracking-wider mb-1">System Health</span>
          <span className="font-mono text-2xl text-[var(--foreground)]">{telemetry.cleaningSystemHealth.toFixed(1)} <span className="text-sm">%</span></span>
          <div className="mt-1 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--success)]"></span>
            <span className="text-[10px] text-[var(--success)] uppercase tracking-widest">Nominal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

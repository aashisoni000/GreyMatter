import React from 'react';
import { DustTelemetry } from '../types';

interface MissionStatusProps {
  telemetry: DustTelemetry;
}

export default function MissionStatus({ telemetry }: MissionStatusProps) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl p-5 flex flex-col justify-between">
      <h3 className="text-sm font-bold text-white tracking-tight border-b border-[var(--border-color)] pb-2.5 mb-4 font-sans">
        Real-Time Telemetry
      </h3>
      <div className="grid grid-cols-2 gap-4 text-sans">
        
        {/* Dust Coverage */}
        <div className="flex flex-col bg-[var(--surface-secondary)] border border-[var(--border-color)] p-4 rounded-lg">
          <span className="text-[3xl] font-semibold text-white font-sans tracking-tight">
            {telemetry.dustCoverage.toFixed(1)}%
          </span>
          <span className="text-xs text-[var(--text-secondary)] font-medium mt-1">
            Dust Coverage
          </span>
          <span className="text-[10px] text-amber-400 font-medium mt-2 bg-amber-500/10 px-2 py-0.5 rounded w-max border border-amber-500/15">
            Warning
          </span>
        </div>
        
        {/* Solar Output */}
        <div className="flex flex-col bg-[var(--surface-secondary)] border border-[var(--border-color)] p-4 rounded-lg">
          <span className="text-[3xl] font-semibold text-white font-sans tracking-tight">
            {telemetry.solarOutput.toFixed(1)}W
          </span>
          <span className="text-xs text-[var(--text-secondary)] font-medium mt-1">
            Solar Output
          </span>
          <span className="text-[10px] text-emerald-400 font-medium mt-2 bg-emerald-500/10 px-2 py-0.5 rounded w-max border border-emerald-500/15">
            Nominal
          </span>
        </div>

        {/* Battery Margin */}
        <div className="flex flex-col bg-[var(--surface-secondary)] border border-[var(--border-color)] p-4 rounded-lg">
          <span className="text-[3xl] font-semibold text-white font-sans tracking-tight">
            {telemetry.batteryMargin.toFixed(1)}%
          </span>
          <span className="text-xs text-[var(--text-secondary)] font-medium mt-1">
            Battery Margin
          </span>
          <span className="text-[10px] text-rose-400 font-medium mt-2 bg-rose-500/10 px-2 py-0.5 rounded w-max border border-rose-500/15">
            Critical
          </span>
        </div>

        {/* System Health */}
        <div className="flex flex-col bg-[var(--surface-secondary)] border border-[var(--border-color)] p-4 rounded-lg">
          <span className="text-[3xl] font-semibold text-white font-sans tracking-tight">
            {telemetry.cleaningSystemHealth.toFixed(1)}%
          </span>
          <span className="text-xs text-[var(--text-secondary)] font-medium mt-1">
            System Health
          </span>
          <span className="text-[10px] text-emerald-400 font-medium mt-2 bg-emerald-500/10 px-2 py-0.5 rounded w-max border border-emerald-500/15">
            Nominal
          </span>
        </div>

      </div>
    </div>
  );
}

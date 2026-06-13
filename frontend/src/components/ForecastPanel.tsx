import React from 'react';

export default function ForecastPanel() {
  // Mock data points for charts (0h, 6h, 12h, 24h, 48h)
  const horizons = ['0h', '6h', '12h', '24h', '48h'];
  const dustGrowth = [42.8, 48.1, 55.3, 68.9, 82.0];
  const powerOutput = [215.4, 202.1, 185.0, 150.2, 110.5];
  const batteryMargin = [14.2, 12.0, 8.5, 2.1, 0.0];

  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)] flex justify-between">
        <span>Forecast (No Action Trajectory)</span>
      </div>
      <div className="p-4 flex flex-col gap-5">
        
        {/* Chart 1: Dust Growth */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-[var(--secondary)]">
            <span>Dust Growth Forecast (%)</span>
            <span className="text-[var(--critical)]">Critical at 48h</span>
          </div>
          <div className="h-12 w-full flex items-end gap-1 mt-2">
            {dustGrowth.map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[var(--warning)] opacity-80" style={{ height: `${val}%` }}></div>
                <span className="font-mono text-[9px]">{val.toFixed(0)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 2: Power Output */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-[var(--secondary)]">
            <span>Power Output Forecast (W)</span>
          </div>
          <div className="h-12 w-full flex items-end gap-1 mt-2">
            {powerOutput.map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[var(--primary)] opacity-80" style={{ height: `${(val / 250) * 100}%` }}></div>
                <span className="font-mono text-[9px]">{val.toFixed(0)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 3: Battery Margin */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-[var(--secondary)]">
            <span>Battery Margin Forecast (%)</span>
            <span className="text-[var(--critical)]">Depletion at 48h</span>
          </div>
          <div className="h-12 w-full flex items-end gap-1 mt-2">
            {batteryMargin.map((val, idx) => {
              const isCritical = val < 5;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div className={`w-full ${isCritical ? 'bg-[var(--critical)]' : 'bg-[var(--foreground)]'} opacity-80`} style={{ height: `${Math.max((val / 20) * 100, 2)}%` }}></div>
                  <span className={`font-mono text-[9px] ${isCritical ? 'text-[var(--critical)] font-bold' : ''}`}>{val.toFixed(1)}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between mt-1 px-1 border-b border-[var(--border-color)] pb-3">
          {horizons.map((h, idx) => (
            <span key={idx} className="font-mono text-[10px] text-[var(--secondary)] w-[20%] text-center">{h}</span>
          ))}
        </div>

        {/* Model Inputs Panel */}
        <div className="flex flex-col gap-2 mt-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--secondary)]">
            Forecast Inputs
          </span>
          <div className="grid grid-cols-2 gap-2 text-[9px] font-mono uppercase text-[var(--foreground)]">
            <div className="flex items-center gap-2 border border-[var(--border-color)] p-1.5 bg-[var(--background)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"></span>
              Historical Telemetry
            </div>
            <div className="flex items-center gap-2 border border-[var(--border-color)] p-1.5 bg-[var(--background)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"></span>
              Dust Growth Model
            </div>
            <div className="flex items-center gap-2 border border-[var(--border-color)] p-1.5 bg-[var(--background)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"></span>
              Power Trend Analysis
            </div>
            <div className="flex items-center gap-2 border border-[var(--border-color)] p-1.5 bg-[var(--background)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"></span>
              Cleaning History
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

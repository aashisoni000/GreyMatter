import React from 'react';
import { MitigationScenario } from '../types';

interface ScenarioMatrixTableProps {
  scenarios: MitigationScenario[];
}

export default function ScenarioMatrixTable({ scenarios }: ScenarioMatrixTableProps) {
  return (
    <div className="bg-[#141517] border border-white/5 rounded-2xl p-5 flex flex-col justify-between h-full font-sans shadow-lg">
      {/* Widget Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-white text-base font-semibold leading-none mb-1">Mitigation Scenario Matrix</h3>
          <p className="text-[#6b7280] text-xs font-medium">Predictive Actions Performance Analysis</p>
        </div>
        <button className="text-[#f0522f] hover:underline text-xs font-semibold cursor-pointer">
          View All
        </button>
      </div>

      {/* Scenario Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-white/5 text-[#6b7280] font-semibold text-[10px] uppercase tracking-wider">
              <th className="pb-3 pl-3 pr-2">Action</th>
              <th className="pb-3 px-2 text-right">Cost</th>
              <th className="pb-3 px-2 text-right">Pwr Rec</th>
              <th className="pb-3 px-2 text-center">Risk</th>
              <th className="pb-3 px-2 text-center">Preserved</th>
              <th className="pb-3 pl-2 pr-3 text-right">Value</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((s) => {
              const isRecommended = s.isRecommended;
              
              // Get risk color pill styles
              let riskPill = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
              if (s.risk === 'HIGH') riskPill = 'text-rose-400 bg-rose-500/10 border-rose-500/20';
              if (s.risk === 'MEDIUM') riskPill = 'text-amber-400 bg-amber-500/10 border-amber-500/20';

              return (
                <tr
                  key={s.id}
                  className={`border-b border-white/5 last:border-b-0 transition-colors ${
                    isRecommended 
                      ? 'bg-[#291613] border-l-4 border-l-[#f0522f] font-bold text-white shadow-md' 
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Action Name */}
                  <td className="py-4.5 pl-3 pr-2 font-bold">
                    <div className="flex items-center gap-2">
                      {isRecommended && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f0522f] shrink-0 animate-ping"></span>
                      )}
                      <span className={isRecommended ? 'text-white' : 'text-gray-300'}>{s.action}</span>
                      {isRecommended && (
                        <span className="text-[9px] bg-[#f0522f] text-white px-1.5 py-0.5 rounded font-black uppercase tracking-wider scale-95 shadow-sm">
                          Optimal
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Cost */}
                  <td className={`py-4.5 px-2 text-right font-mono ${isRecommended ? 'text-white font-bold' : 'text-[#9ca3af]'}`}>
                    {s.energyCost.toFixed(1)} Wh
                  </td>

                  {/* Power Recovery */}
                  <td className={`py-4.5 px-2 text-right font-mono font-black ${
                    s.powerRecovery > 0 ? 'text-emerald-400' : s.powerRecovery < 0 ? 'text-rose-400' : 'text-[#9ca3af]'
                  }`}>
                    {s.powerRecovery > 0 ? `+${s.powerRecovery.toFixed(1)}` : s.powerRecovery.toFixed(1)} W
                  </td>

                  {/* Risk Badge */}
                  <td className="py-4.5 px-2 text-center">
                    <span className={`px-2.5 py-0.5 text-[9px] font-bold rounded-full border ${riskPill}`}>
                      {s.risk}
                    </span>
                  </td>

                  {/* Days Preserved */}
                  <td className={`py-4.5 px-2 text-center font-bold ${
                    s.daysPreserved > 0 ? 'text-emerald-400' : s.daysPreserved < 0 ? 'text-rose-400' : 'text-[#6b7280]'
                  }`}>
                    {s.daysPreserved > 0 ? '+' : ''}{s.daysPreserved}d
                  </td>

                  {/* Value */}
                  <td className={`py-4.5 pl-2 pr-3 text-right font-black font-mono text-sm ${isRecommended ? 'text-[#f59e0b] drop-shadow-[0_0_8px_rgba(245,158,11,0.25)]' : 'text-white'}`}>
                    {s.missionValue}
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

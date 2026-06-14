import React from 'react';

interface Step {
  num: string;
  title: string;
  desc: string;
  meta: string;
  iconType: 'dust' | 'power' | 'sim' | 'filter' | 'optimal';
}

interface Weight {
  name: string;
  pct: number;
  color: string;
}

interface MissionValueEngineProps {
  steps: Step[];
  weights: Weight[];
  valueScore: number;
  activeScenarioId: string;
}

export default function MissionValueEngine({
  steps,
  weights,
  valueScore,
  activeScenarioId,
}: MissionValueEngineProps) {
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'dust':
        return (
          <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
        );
      case 'power':
        return (
          <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          </svg>
        );
      case 'sim':
        return (
          <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'filter':
        return (
          <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case 'optimal':
        return (
          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#141517] border border-white/5 rounded-2xl p-5 flex flex-col justify-between h-full font-sans shadow-lg">
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-white text-base font-semibold leading-none mb-1">Mission Value Engine</h3>
        <p className="text-[#6b7280] text-xs font-medium">Autonomous Optimization & Decision Flow Pipeline</p>
      </div>

      {/* Graphical Timeline Flow */}
      <div key={activeScenarioId} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3.5 relative items-center mb-6 animate-value-change">
        {steps.map((step, idx) => {
          return (
            <div key={step.num} className="relative flex flex-col items-center text-center p-3.5 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-colors h-full">
              {/* Step indicator */}
              <span className="absolute top-2.5 left-2.5 font-mono text-[9px] font-bold text-[#6b7280]">
                {step.num}
              </span>

              {/* Icon */}
              <div className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center mb-2 mt-1">
                {getIcon(step.iconType)}
              </div>

              {/* Text */}
              <span className="text-white text-xs font-bold leading-tight mb-1">{step.title}</span>
              <span className="text-[#9ca3af] text-[10px] font-semibold leading-none mb-1.5">{step.desc}</span>
              <span className="text-[#6b7280] text-[9px] font-medium leading-tight">{step.meta}</span>

              {/* Connector Arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-10 text-white/10">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Formula, Spotlight Score & Weights Area */}
      <div className="border-t border-white/5 pt-4 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Math Formula Card (Cols 4) */}
        <div className="md:col-span-4 flex flex-col bg-white/[0.01] border border-white/5 p-3 rounded-xl text-center">
          <span className="text-[#6b7280] text-[9px] uppercase font-bold tracking-wider mb-1">
            Objective Function Formula
          </span>
          <code className="text-white text-[11px] sm:text-xs font-mono font-bold py-1 bg-black/40 rounded border border-white/5 tracking-wide text-center">
            V = Wₚ·Pᵣ - W_c·E_c + W_m·Mₚ
          </code>
          <span className="text-[#6b7280] text-[8px] font-semibold mt-1">
            Maximize Net Mission Utility Score
          </span>
        </div>

        {/* HERO SCORES SPOTLIGHT (Cols 4) */}
        <div key={valueScore} className={`md:col-span-4 flex flex-col items-center justify-center py-2 border rounded-2xl shadow-md transition-all duration-500 animate-value-change ${
          activeScenarioId === 'dust'
            ? 'bg-gradient-to-tr from-[#251613] to-[#141517] border-[#f0522f]/25'
            : 'bg-gradient-to-tr from-[#131b26] to-[#141517] border-blue-500/25'
        }`}>
          <span className={`${
            activeScenarioId === 'dust' ? 'text-[#f0522f]' : 'text-blue-400'
          } text-[9px] uppercase font-extrabold tracking-widest leading-none mb-1`}>
            Mission Value Score
          </span>
          <span className={`text-white text-3xl font-black font-mono leading-none tracking-tight transition-all duration-500 ${
            activeScenarioId === 'dust'
              ? 'drop-shadow-[0_0_10px_rgba(240,82,47,0.35)]'
              : 'drop-shadow-[0_0_10px_rgba(59,130,246,0.35)]'
          }`}>
            {valueScore}
          </span>
          <span className="text-[#6b7280] text-[8px] font-semibold mt-1">
            Optimal Net Performance Metric
          </span>
        </div>

        {/* Weights bars (Cols 4) */}
        <div key={`weights-${activeScenarioId}`} className="md:col-span-4 flex flex-col gap-1.5 pl-0 md:pl-2 animate-value-change">
          <span className="text-[#6b7280] text-[9px] uppercase font-bold tracking-wider mb-0.5">
            Optimization Priority Weights
          </span>
          
          <div className="flex flex-col gap-1.5">
            {weights.map((w) => {
              return (
                <div key={w.name} className="flex flex-col gap-0.5">
                  <div className="flex justify-between items-center text-[9px] font-semibold leading-none">
                    <span className="text-[#9ca3af]">{w.name}</span>
                    <span className="text-white font-mono">{w.pct}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-[#222428] rounded-full h-1">
                    <div
                      className={`h-1 rounded-full ${w.color} transition-all duration-500`}
                      style={{ width: `${w.pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

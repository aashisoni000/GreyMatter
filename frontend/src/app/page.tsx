'use client';

import React, { useState } from 'react';
import MetricCard from '@/components/MetricCard';
import SurfaceMapHeatmap from '@/components/SurfaceMapHeatmap';
import OutcomeLineChart from '@/components/OutcomeLineChart';
import SafetyConstraintsList from '@/components/SafetyConstraintsList';
import ScenarioMatrixTable from '@/components/ScenarioMatrixTable';
import RecommendedActionCard from '@/components/RecommendedActionCard';
import MissionValueEngine from '@/components/MissionValueEngine';
import { scenariosData } from '@/data/mockData';

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeScenarioId, setActiveScenarioId] = useState<'dust' | 'low-sunlight'>('dust');
  
  const activeScenario = scenariosData[activeScenarioId];
  const { missionStatus, telemetry, zones, scenarios, constraints } = activeScenario;

  // Filter items based on search input
  const filteredConstraints = constraints.filter((c) =>
    c.parameter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredScenarios = scenarios.filter((s) =>
    s.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-[#0d0e10] flex flex-col overflow-x-hidden">
      
      {/* Header Panel with Brand Identity (Sidebar space reclaimed) */}
      <header className="flex flex-col lg:flex-row justify-between items-center px-8 py-5 border-b border-white/5 gap-5 bg-[#141517] shadow-sm">
        
        {/* Reclaimed Sidebar Identity Area */}
        <div className="flex items-center gap-3.5 self-start lg:self-auto font-sans">
          <div className="relative w-8.5 h-8.5 flex items-center justify-center text-[#f0522f] shrink-0">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
              {/* Premium geometric aerospace gear/satellite mesh */}
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L18 8v8l-6 3.7-6-3.7V8l6-3.5z" opacity="0.85" />
              <path d="M12 7l4 2.5v5L12 17l-4-2.5v-5L12 7z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-black text-[22px] tracking-tight leading-none">Grey Matter</h1>
            <span className="text-[#6b7280] text-[9.5px] font-extrabold uppercase tracking-widest mt-1">
              Lunar Dust Mitigation Decision System
            </span>
          </div>
        </div>

        {/* Search Input Box */}
        <div className="relative w-full sm:w-80">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            {/* Search Icon */}
            <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search telemetry parameters, actions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1c1d21] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/10 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6b7280] hover:text-white cursor-pointer"
            >
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Right-side Utilities & Lunar Context Labels */}
        <div className="flex flex-wrap items-center gap-3.5 shrink-0 self-end lg:self-auto font-sans justify-end">
          
          {/* Scenario Selector Segmented Control */}
          <div className="flex bg-[#1c1d21] p-1 border border-white/5 rounded-lg text-[9px] font-bold uppercase tracking-wider items-center">
            <button
              onClick={() => setActiveScenarioId('dust')}
              className={`px-3 py-1.5 rounded-md cursor-pointer transition-all duration-300 font-sans tracking-widest ${
                activeScenarioId === 'dust'
                  ? 'bg-[#f0522f] text-white shadow-md'
                  : 'text-[#9ca3af] hover:text-white hover:bg-[#141517]'
              }`}
            >
              DUST EVENT
            </button>
            <button
              onClick={() => setActiveScenarioId('low-sunlight')}
              className={`px-3 py-1.5 rounded-md cursor-pointer transition-all duration-300 font-sans tracking-widest ${
                activeScenarioId === 'low-sunlight'
                  ? 'bg-[#f0522f] text-white shadow-md'
                  : 'text-[#9ca3af] hover:text-white hover:bg-[#141517]'
              }`}
            >
              LOW-SUNLIGHT
            </button>
          </div>

          <div className="h-5 w-[1px] bg-white/10 hidden sm:block"></div>

          {/* Lunar Context Indicators */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold tracking-wide">
            <span className="text-[#9ca3af] bg-[#1c1d21] border border-white/5 px-2.5 py-1.5 rounded-lg uppercase">
              Lunar Day 11
            </span>
            <span className="text-[#9ca3af] bg-[#1c1d21] border border-white/5 px-2.5 py-1.5 rounded-lg uppercase">
              Array Alpha
            </span>
            {activeScenarioId === 'dust' ? (
              <>
                <span className="text-[#f59e0b] bg-[#1c1d21] border border-[#f59e0b]/20 px-2.5 py-1.5 rounded-lg uppercase animate-pulse">
                  Regolith: High
                </span>
                <span className="text-emerald-400 bg-[#1c1d21] border border-emerald-500/20 px-2.5 py-1.5 rounded-lg uppercase">
                  Budget: 5Wh max
                </span>
              </>
            ) : (
              <>
                <span className="text-emerald-400 bg-[#1c1d21] border border-emerald-500/20 px-2.5 py-1.5 rounded-lg uppercase">
                  Regolith: Nominal
                </span>
                <span className="text-rose-400 bg-[#1c1d21] border border-rose-500/20 px-2.5 py-1.5 rounded-lg uppercase animate-pulse">
                  Battery: 8.1% Critical
                </span>
              </>
            )}
          </div>

          <div className="h-5 w-[1px] bg-white/10 hidden sm:block"></div>

          {/* Earth Date Badge */}
          <span className="text-[#9ca3af] text-xs font-semibold tracking-wide bg-[#1c1d21] border border-white/5 px-3 py-1.5 rounded-lg">
            Sun, 14 Jun 2026
          </span>

          {/* Calendar Button */}
          <button className="p-2 rounded-lg border border-white/5 bg-[#1c1d21] text-[#9ca3af] hover:text-white transition-colors cursor-pointer">
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>

          {/* Alert Bell / Notification Button */}
          <button className="relative p-2 rounded-lg border border-white/5 bg-[#1c1d21] text-[#9ca3af] hover:text-white transition-colors cursor-pointer">
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {/* Active Notification Badge matching warning state */}
            {missionStatus !== 'NOMINAL' && (
              <span className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
              </span>
            )}
          </button>

          {/* User Profile avatar */}
          <div className="w-8.5 h-8.5 rounded-full overflow-hidden border border-white/10 relative bg-[#1c1d21] flex items-center justify-center cursor-pointer">
            <svg className="w-5.5 h-5.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex flex-col gap-6 max-w-[1600px] mx-auto w-full">
          {/* Top Telemetry Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <MetricCard
              title="Dust Coverage"
              value={`${telemetry.dustCoverage}%`}
              status={telemetry.dustCoverage > 30 ? 'WARNING' : 'NOMINAL'}
              subtitle="Target threshold: <30.0%"
            />
            <MetricCard
              title="Solar Output"
              value={`${telemetry.solarOutput}W`}
              status={activeScenarioId === 'dust' ? 'NOMINAL' : 'WARNING'}
              subtitle="Current solar array generation"
            />
            <MetricCard
              title="Battery Margin"
              value={`${telemetry.batteryMargin}%`}
              status={telemetry.batteryMargin < 10 ? 'CRITICAL' : telemetry.batteryMargin < 20 ? 'WARNING' : 'NOMINAL'}
              subtitle="Warning: limit is 20.0%"
            />
            <MetricCard
              title="System Health"
              value={`${telemetry.cleaningSystemHealth}%`}
              status="NOMINAL"
              subtitle="Dust mitigation hardware health"
            />
          </div>

          {/* Row 1: Surface Map Centerpiece (Col 8) & Recommended Action Hero (Col 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8">
              <SurfaceMapHeatmap
                zones={zones}
                activeScenarioId={activeScenarioId}
                targets={activeScenario.targets}
              />
            </div>
            <div className="lg:col-span-4">
              <RecommendedActionCard
                action={activeScenario.recommendedAction.action}
                targets={activeScenario.recommendedAction.targets}
                missionValue={activeScenario.recommendedAction.missionValue}
                powerRecovery={activeScenario.recommendedAction.powerRecovery}
                lifePreserved={activeScenario.recommendedAction.lifePreserved}
                energyCost={activeScenario.recommendedAction.energyCost}
                scienceConflict={activeScenario.recommendedAction.scienceConflict}
                isWait={activeScenario.recommendedAction.isWait}
                justifications={activeScenario.recommendedAction.justifications}
              />
            </div>
          </div>

          {/* Row 2: Mission Value Engine Flow (Col 8) & Forecast Graph (Col 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8">
              <MissionValueEngine
                steps={activeScenario.valueEngine.steps}
                weights={activeScenario.valueEngine.weights}
                valueScore={activeScenario.valueEngine.valueScore}
                activeScenarioId={activeScenarioId}
              />
            </div>
            <div className="lg:col-span-4">
              <OutcomeLineChart
                chartData={activeScenario.chartPoints}
                activeScenarioId={activeScenarioId}
                recommendedAction={activeScenario.recommendedAction.action}
              />
            </div>
          </div>

          {/* Row 3: Scenario Matrix (Col 8) & Safety Constraints (Col 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8">
              <ScenarioMatrixTable scenarios={filteredScenarios} />
            </div>
            <div className="lg:col-span-4">
              <SafetyConstraintsList constraints={filteredConstraints} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

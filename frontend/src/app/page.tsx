import React from 'react';
import Header from '@/components/Header';
import MissionContext from '@/components/MissionContext';
import MissionStatus from '@/components/MissionStatus';
import ForecastPanel from '@/components/ForecastPanel';
import ForecastConfidence from '@/components/ForecastConfidence';
import ResourceUtilization from '@/components/ResourceUtilization';
import SurfaceMap from '@/components/SurfaceMap';
import MissionValueEngine from '@/components/MissionValueEngine';
import ScenarioMatrix from '@/components/ScenarioMatrix';
import DecisionPanel from '@/components/DecisionPanel';
import DecisionReasoning from '@/components/DecisionReasoning';
import ActionImpactAssessment from '@/components/ActionImpactAssessment';
import ConstraintsPanel from '@/components/ConstraintsPanel';
import HistoryPanel from '@/components/HistoryPanel';
import SystemFooter from '@/components/SystemFooter';
import { mockDashboardData } from '@/data/mockData';

export default function DashboardPage() {
  const { missionStatus, telemetry, zones, scenarios, constraints, logs } = mockDashboardData;

  return (
    <div className="min-h-screen flex flex-col p-4 gap-4 max-w-[1600px] mx-auto w-full">
      {/* Header spanning full width */}
      <Header status={missionStatus} />

      {/* Main Grid Layout */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_1fr_auto] gap-4">
        
        {/* Left Column (Col 1-3): Context, State, Forecasts, Constraints, Resources */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <MissionContext />
          <MissionStatus telemetry={telemetry} />
          <ForecastPanel />
          <ForecastConfidence />
          <ResourceUtilization />
          <div className="flex-1 min-h-0">
            <ConstraintsPanel constraints={constraints} />
          </div>
        </div>

        {/* Center Column (Col 4-9): Map, Engine, Matrix */}
        <div className="md:col-span-6 flex flex-col gap-4">
          <div className="h-[400px]">
            <SurfaceMap zones={zones} />
          </div>
          <MissionValueEngine />
          <div className="flex-1 min-h-0">
            <ScenarioMatrix scenarios={scenarios} />
          </div>
        </div>

        {/* Right Column (Col 10-12): Decisions, Reasoning, Impact, History */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <DecisionPanel />
          <DecisionReasoning />
          <ActionImpactAssessment />
          <div className="flex-1 flex flex-col min-h-0">
            <HistoryPanel logs={logs} />
          </div>
        </div>
      </main>

      {/* Footer Workflow */}
      <SystemFooter />
    </div>
  );
}

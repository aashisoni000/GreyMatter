import React from 'react';
import Header from '@/components/Header';
import MissionContext from '@/components/MissionContext';
import MissionStatus from '@/components/MissionStatus';
import SurfaceMap from '@/components/SurfaceMap';
import ZonePriorityAnalysis from '@/components/ZonePriorityAnalysis';
import ScenarioMatrix from '@/components/ScenarioMatrix';
import MissionActionReport from '@/components/MissionActionReport';
import OutcomeComparison from '@/components/OutcomeComparison';
import ConstraintsPanel from '@/components/ConstraintsPanel';
import SystemFooter from '@/components/SystemFooter';
import { mockDashboardData } from '@/data/mockData';

export default function DashboardPage() {
  const { missionStatus, telemetry, zones, scenarios, constraints } = mockDashboardData;

  return (
    <div className="h-screen flex flex-col p-3 gap-3 max-w-[1800px] mx-auto w-full overflow-hidden">
      {/* Header spanning full width */}
      <Header status={missionStatus} />

      {/* Main Grid Layout */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-0">
        
        {/* Left Column (Col 1-3): Context, State, Constraints */}
        <div className="lg:col-span-3 flex flex-col gap-3 min-h-0">
          <MissionContext />
          <MissionStatus telemetry={telemetry} />
          <ConstraintsPanel constraints={constraints} />
        </div>

        {/* Center Column (Col 4-8): Map, Priority Analysis */}
        <div className="lg:col-span-5 flex flex-col gap-3 min-h-0">
          <div className="flex-1 min-h-0">
            <SurfaceMap zones={zones} />
          </div>
          <div className="flex-none">
            <ZonePriorityAnalysis zones={zones} />
          </div>
        </div>

        {/* Right Column (Col 9-12): Action Report, Outcome Comparison, Matrix */}
        <div className="lg:col-span-4 flex flex-col gap-3 min-h-0">
          <MissionActionReport />
          <OutcomeComparison />
          <div className="flex-1 min-h-0 overflow-auto">
            <ScenarioMatrix scenarios={scenarios} />
          </div>
        </div>
      </main>

      {/* Footer Workflow */}
      <div className="flex-none">
        <SystemFooter />
      </div>
    </div>
  );
}

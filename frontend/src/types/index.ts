export type SystemStatus = 'NOMINAL' | 'WARNING' | 'CRITICAL' | 'OFFLINE';
export type PriorityLevel = 'LOW' | 'MONITOR' | 'HIGH' | 'CRITICAL';

export interface DustTelemetry {
  dustCoverage: number;
  solarOutput: number;
  batteryMargin: number;
  cleaningSystemHealth: number;
}

export interface SolarPanelZone {
  id: string; // A-P
  dustPercent: number;
  powerContributionPercent: number;
  priority: PriorityLevel;
}

export interface MitigationScenario {
  id: string;
  action: string;
  energyCost: number; // Wh
  powerRecovery: number; // W
  risk: 'LOW' | 'MEDIUM' | 'HIGH';
  missionValue: number; // metric score
  daysPreserved: number; // days
  isRecommended: boolean;
}

export interface MissionConstraint {
  id: string;
  parameter: string;
  limit: number;
  currentValue: number;
  unit: string;
  isViolated: boolean;
}

export interface LogEntry {
  id: string;
  time: string;
  level: 'INFO' | 'WARN' | 'ERROR';
  message: string;
}

export interface DashboardData {
  missionStatus: SystemStatus;
  telemetry: DustTelemetry;
  zones: SolarPanelZone[];
  scenarios: MitigationScenario[];
  constraints: MissionConstraint[];
  logs: LogEntry[];
}

import { DashboardData, SolarPanelZone, MitigationScenario, MissionConstraint, LogEntry } from '../types';

export interface ExtendedDashboardData extends DashboardData {
  name: string;
  description: string;
  targets: string[];
  recoverablePower: string;
  affectedArray: string;
  recommendedAction: {
    action: string;
    targets: string;
    missionValue: number;
    powerRecovery: string;
    lifePreserved: string;
    energyCost: string;
    scienceConflict: string;
    isWait: boolean;
    justifications: string[];
  };
  valueEngine: {
    steps: {
      num: string;
      title: string;
      desc: string;
      meta: string;
      iconType: 'dust' | 'power' | 'sim' | 'filter' | 'optimal';
    }[];
    valueScore: number;
    weights: {
      name: string;
      pct: number;
      color: string;
    }[];
  };
  chartPoints: {
    hour: string;
    partial: number;
    wait: number;
    full: number;
    x: number;
  }[];
}

export const scenariosData: Record<'dust' | 'low-sunlight', ExtendedDashboardData> = {
  dust: {
    name: 'DUST ACCUMULATION EVENT',
    description: 'Localized regolith buildup detected on solar array.',
    missionStatus: 'WARNING',
    telemetry: {
      dustCoverage: 42.8,
      solarOutput: 215.4,
      batteryMargin: 14.2,
      cleaningSystemHealth: 98.5,
    },
    zones: [
      { id: 'A', dustPercent: 12, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'B', dustPercent: 18, powerContributionPercent: 3, priority: 'LOW' },
      { id: 'C', dustPercent: 15, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'D', dustPercent: 22, powerContributionPercent: 3, priority: 'LOW' },
      { id: 'E', dustPercent: 28, powerContributionPercent: 4, priority: 'MONITOR' },
      { id: 'F', dustPercent: 84, powerContributionPercent: 17, priority: 'CRITICAL' },
      { id: 'G', dustPercent: 78, powerContributionPercent: 15, priority: 'HIGH' },
      { id: 'H', dustPercent: 25, powerContributionPercent: 3, priority: 'LOW' },
      { id: 'I', dustPercent: 19, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'J', dustPercent: 69, powerContributionPercent: 8, priority: 'HIGH' },
      { id: 'K', dustPercent: 81, powerContributionPercent: 16, priority: 'CRITICAL' },
      { id: 'L', dustPercent: 14, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'M', dustPercent: 22, powerContributionPercent: 3, priority: 'LOW' },
      { id: 'N', dustPercent: 29, powerContributionPercent: 4, priority: 'MONITOR' },
      { id: 'O', dustPercent: 17, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'P', dustPercent: 25, powerContributionPercent: 3, priority: 'LOW' },
    ],
    targets: ['F', 'G', 'K'],
    recoverablePower: '+8.2 W',
    affectedArray: '18%',
    recommendedAction: {
      action: 'Partial Clean',
      targets: 'F • G • K',
      missionValue: 92,
      powerRecovery: '+8.2 W',
      lifePreserved: '+14 Days',
      energyCost: '1.3 Wh',
      scienceConflict: 'No Conflict',
      isWait: false,
      justifications: [
        'High efficiency targeted regolith removal.',
        'Minimal energy consumption (1.3 Wh).',
        'Restores 8.2 W power output.',
        'Extends array lifetime by 14 days.',
      ],
    },
    scenarios: [
      {
        id: 'ACT-1',
        action: 'Full Clean',
        energyCost: 12.5,
        powerRecovery: 24.0,
        risk: 'HIGH',
        missionValue: 45,
        daysPreserved: 5,
        isRecommended: false,
      },
      {
        id: 'ACT-2',
        action: 'Partial Clean',
        energyCost: 1.3,
        powerRecovery: 8.2,
        risk: 'LOW',
        missionValue: 92,
        daysPreserved: 14,
        isRecommended: true,
      },
      {
        id: 'ACT-3',
        action: 'Wait',
        energyCost: 0,
        powerRecovery: 0,
        risk: 'MEDIUM',
        missionValue: 30,
        daysPreserved: 0,
        isRecommended: false,
      },
      {
        id: 'ACT-4',
        action: 'Delay Cleaning',
        energyCost: 0,
        powerRecovery: -15.0,
        risk: 'HIGH',
        missionValue: 10,
        daysPreserved: -3,
        isRecommended: false,
      },
    ],
    constraints: [
      {
        id: 'CST-01',
        parameter: 'Battery Reserve',
        limit: 20,
        currentValue: 14.2,
        unit: '%',
        isViolated: true,
      },
      {
        id: 'CST-02',
        parameter: 'Science Window',
        limit: 8,
        currentValue: 6.5,
        unit: 'hrs',
        isViolated: false,
      },
      {
        id: 'CST-03',
        parameter: 'Thermal Margin',
        limit: 10,
        currentValue: 12.4,
        unit: '°C',
        isViolated: false,
      },
      {
        id: 'CST-04',
        parameter: 'HV Cleaning Budget',
        limit: 5,
        currentValue: 1.3,
        unit: 'Wh',
        isViolated: false,
      },
      {
        id: 'CST-05',
        parameter: 'Mission Priority',
        limit: 100,
        currentValue: 95,
        unit: 'IDX',
        isViolated: false,
      },
    ],
    valueEngine: {
      steps: [
        {
          num: '01',
          title: 'Dust Forecast',
          desc: 'Avg Dust: 42.8%',
          meta: 'Target Zones: 81%',
          iconType: 'dust',
        },
        {
          num: '02',
          title: 'Power Loss',
          desc: 'Est. Degradation',
          meta: '-52.4 W output loss',
          iconType: 'power',
        },
        {
          num: '03',
          title: 'Simulation',
          desc: '4 Scenarios Sim',
          meta: 'Full, Partial, Wait, Delay',
          iconType: 'sim',
        },
        {
          num: '04',
          title: 'Filtering',
          desc: 'Constraints Check',
          meta: 'Battery Reserve violated',
          iconType: 'filter',
        },
        {
          num: '05',
          title: 'Optimal Selection',
          desc: 'Partial Clean Picked',
          meta: 'Max Value Score: 92',
          iconType: 'optimal',
        },
      ],
      valueScore: 92,
      weights: [
        { name: 'Power Recovery', pct: 40, color: 'bg-emerald-400' },
        { name: 'Energy Cost', pct: 30, color: 'bg-[#f0522f]' },
        { name: 'Mission Priority', pct: 20, color: 'bg-blue-400' },
        { name: 'System Health', pct: 10, color: 'bg-amber-400' },
      ],
    },
    chartPoints: [
      { hour: '0h', partial: 215, wait: 215, full: 215, x: 50 },
      { hour: '8h', partial: 220, wait: 208, full: 232, x: 120 },
      { hour: '16h', partial: 222, wait: 198, full: 238, x: 190 },
      { hour: '24h', partial: 223, wait: 184, full: 240, x: 260 },
      { hour: '32h', partial: 221, wait: 168, full: 240, x: 330 },
      { hour: '40h', partial: 219, wait: 151, full: 239, x: 400 },
      { hour: '48h', partial: 218, wait: 132, full: 238, x: 470 },
    ],
    logs: [
      {
        id: 'LOG-001',
        time: '08:12:00Z',
        level: 'WARN',
        message: 'Dust accumulation exceeded threshold in F/G/K',
      },
      {
        id: 'LOG-002',
        time: '08:15:30Z',
        level: 'WARN',
        message: 'Power output degraded 8%',
      },
      {
        id: 'LOG-003',
        time: '08:20:12Z',
        level: 'INFO',
        message: 'Forecast updated using latest telemetry',
      },
      {
        id: 'LOG-004',
        time: '08:25:00Z',
        level: 'INFO',
        message: 'Scenario evaluation completed',
      },
      {
        id: 'LOG-005',
        time: '08:25:05Z',
        level: 'INFO',
        message: 'Targeted cleaning recommended',
      },
      {
        id: 'LOG-006',
        time: '08:26:10Z',
        level: 'INFO',
        message: 'Mission value recalculated',
      },
    ],
  },
  'low-sunlight': {
    name: 'LOW-SUNLIGHT PERIOD',
    description: 'Extended low-angle sunlight period predicted. Energy conservation is critical.',
    missionStatus: 'CRITICAL',
    telemetry: {
      dustCoverage: 31.0,
      solarOutput: 180.0,
      batteryMargin: 8.1,
      cleaningSystemHealth: 97.0,
    },
    zones: [
      { id: 'A', dustPercent: 25, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'B', dustPercent: 30, powerContributionPercent: 3, priority: 'MONITOR' },
      { id: 'C', dustPercent: 29, powerContributionPercent: 3, priority: 'LOW' },
      { id: 'D', dustPercent: 24, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'E', dustPercent: 27, powerContributionPercent: 3, priority: 'LOW' },
      { id: 'F', dustPercent: 35, powerContributionPercent: 3, priority: 'MONITOR' },
      { id: 'G', dustPercent: 33, powerContributionPercent: 3, priority: 'MONITOR' },
      { id: 'H', dustPercent: 22, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'I', dustPercent: 28, powerContributionPercent: 3, priority: 'LOW' },
      { id: 'J', dustPercent: 37, powerContributionPercent: 4, priority: 'MONITOR' },
      { id: 'K', dustPercent: 32, powerContributionPercent: 3, priority: 'MONITOR' },
      { id: 'L', dustPercent: 24, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'M', dustPercent: 29, powerContributionPercent: 3, priority: 'LOW' },
      { id: 'N', dustPercent: 26, powerContributionPercent: 2, priority: 'LOW' },
      { id: 'O', dustPercent: 31, powerContributionPercent: 3, priority: 'MONITOR' },
      { id: 'P', dustPercent: 25, powerContributionPercent: 2, priority: 'LOW' },
    ],
    targets: [],
    recoverablePower: '+2.1 W',
    affectedArray: '7%',
    recommendedAction: {
      action: 'Wait',
      targets: 'Monitoring Only',
      missionValue: 87,
      powerRecovery: '+2.1 W',
      lifePreserved: '+0 Days',
      energyCost: '0.0 Wh',
      scienceConflict: 'Preserve Energy',
      isWait: true,
      justifications: [
        'Projected recovery too small (+2.1 W).',
        'Battery reserve below preferred threshold (8.1%).',
        'Cleaning energy expenditure not justified.',
        'Preserve energy for upcoming operations.',
      ],
    },
    scenarios: [
      {
        id: 'ACT-1',
        action: 'Full Clean',
        energyCost: 12.5,
        powerRecovery: 4.0,
        risk: 'HIGH',
        missionValue: 18,
        daysPreserved: 1,
        isRecommended: false,
      },
      {
        id: 'ACT-2',
        action: 'Partial Clean',
        energyCost: 1.3,
        powerRecovery: 2.1,
        risk: 'LOW',
        missionValue: 42,
        daysPreserved: 3,
        isRecommended: false,
      },
      {
        id: 'ACT-3',
        action: 'Wait',
        energyCost: 0,
        powerRecovery: 0,
        risk: 'LOW',
        missionValue: 87,
        daysPreserved: 0,
        isRecommended: true,
      },
      {
        id: 'ACT-4',
        action: 'Delay Cleaning',
        energyCost: 0,
        powerRecovery: -2.0,
        risk: 'MEDIUM',
        missionValue: 70,
        daysPreserved: -1,
        isRecommended: false,
      },
    ],
    constraints: [
      {
        id: 'CST-01',
        parameter: 'Battery Reserve',
        limit: 20,
        currentValue: 8.1,
        unit: '%',
        isViolated: true,
      },
      {
        id: 'CST-02',
        parameter: 'Science Window',
        limit: 8,
        currentValue: 7.2,
        unit: 'hrs',
        isViolated: false,
      },
      {
        id: 'CST-03',
        parameter: 'Thermal Margin',
        limit: 10,
        currentValue: 11.8,
        unit: '°C',
        isViolated: false,
      },
      {
        id: 'CST-04',
        parameter: 'HV Cleaning Budget',
        limit: 5,
        currentValue: 0.0,
        unit: 'Wh',
        isViolated: false,
      },
      {
        id: 'CST-05',
        parameter: 'Mission Priority',
        limit: 100,
        currentValue: 88,
        unit: 'IDX',
        isViolated: false,
      },
    ],
    valueEngine: {
      steps: [
        {
          num: '01',
          title: 'Dust Forecast',
          desc: 'Avg Dust: 31.0%',
          meta: 'No severe hotspots',
          iconType: 'dust',
        },
        {
          num: '02',
          title: 'Power Loss',
          desc: 'Est. Degradation',
          meta: '-8.5 W output loss',
          iconType: 'power',
        },
        {
          num: '03',
          title: 'Simulation',
          desc: '4 Scenarios Sim',
          meta: 'Full, Partial, Wait, Delay',
          iconType: 'sim',
        },
        {
          num: '04',
          title: 'Filtering',
          desc: 'Constraints Check',
          meta: 'Battery Reserve: 8.1% (Critical)',
          iconType: 'filter',
        },
        {
          num: '05',
          title: 'Optimal Selection',
          desc: 'Wait Picked',
          meta: 'Max Value Score: 87',
          iconType: 'optimal',
        },
      ],
      valueScore: 87,
      weights: [
        { name: 'Power Recovery', pct: 20, color: 'bg-emerald-400' },
        { name: 'Energy Cost', pct: 50, color: 'bg-[#f0522f]' },
        { name: 'Mission Priority', pct: 20, color: 'bg-blue-400' },
        { name: 'System Health', pct: 10, color: 'bg-amber-400' },
      ],
    },
    chartPoints: [
      { hour: '0h', partial: 180, wait: 180, full: 180, x: 50 },
      { hour: '8h', partial: 175, wait: 179, full: 150, x: 120 },
      { hour: '16h', partial: 170, wait: 177, full: 130, x: 190 },
      { hour: '24h', partial: 165, wait: 175, full: 110, x: 260 },
      { hour: '32h', partial: 160, wait: 174, full: 90, x: 330 },
      { hour: '40h', partial: 155, wait: 172, full: 70, x: 400 },
      { hour: '48h', partial: 150, wait: 170, full: 50, x: 470 },
    ],
    logs: [
      {
        id: 'LOG-001',
        time: '08:12:00Z',
        level: 'WARN',
        message: 'Low sunlight window detected',
      },
      {
        id: 'LOG-002',
        time: '08:15:30Z',
        level: 'WARN',
        message: 'Battery reserve dropped below 10%',
      },
      {
        id: 'LOG-003',
        time: '08:20:12Z',
        level: 'INFO',
        message: 'Forecast updated to energy preservation mode',
      },
      {
        id: 'LOG-004',
        time: '08:25:00Z',
        level: 'INFO',
        message: 'Scenario evaluation completed',
      },
      {
        id: 'LOG-005',
        time: '08:25:05Z',
        level: 'INFO',
        message: 'Wait/preserve recommended: energy cost high',
      },
      {
        id: 'LOG-006',
        time: '08:26:10Z',
        level: 'INFO',
        message: 'Mission value recalculated: Optimal = Wait (87)',
      },
    ],
  },
};

export const mockDashboardData = scenariosData.dust;

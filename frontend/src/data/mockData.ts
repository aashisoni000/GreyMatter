import { DashboardData, SolarPanelZone } from '../types';

const generateZones = (): SolarPanelZone[] => {
  const ids = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
  
  return ids.map((id) => {
    // Hardcode the requested highlights
    if (id === 'F') return { id, dustPercent: 84, powerContributionPercent: 17, priority: 'CRITICAL' };
    if (id === 'G') return { id, dustPercent: 78, powerContributionPercent: 15, priority: 'CRITICAL' };
    if (id === 'K') return { id, dustPercent: 81, powerContributionPercent: 16, priority: 'CRITICAL' };
    
    // Generate some noise for the others
    const isEdge = ['A', 'B', 'C', 'D', 'E', 'H', 'I', 'L', 'M', 'N', 'O', 'P'].includes(id);
    const dust = isEdge ? Math.floor(Math.random() * 20) + 10 : Math.floor(Math.random() * 40) + 30;
    
    let priority: 'LOW' | 'MONITOR' | 'HIGH' | 'CRITICAL' = 'LOW';
    if (dust > 60) priority = 'HIGH';
    else if (dust > 30) priority = 'MONITOR';

    return {
      id,
      dustPercent: dust,
      powerContributionPercent: Math.floor(Math.random() * 5) + 2, // arbitrary small power output for low priority
      priority,
    };
  });
};

export const mockDashboardData: DashboardData = {
  missionStatus: 'WARNING',
  telemetry: {
    dustCoverage: 42.8, // %
    solarOutput: 215.4, // W
    batteryMargin: 14.2, // %
    cleaningSystemHealth: 98.5, // %
  },
  zones: generateZones(),
  scenarios: [
    {
      id: 'ACT-1',
      action: 'Full Clean',
      energyCost: 12.5,
      powerRecovery: 24.0,
      risk: 'HIGH',
      missionValue: 45,
      isRecommended: false,
    },
    {
      id: 'ACT-2',
      action: 'Partial Clean',
      energyCost: 1.3,
      powerRecovery: 8.2,
      risk: 'LOW',
      missionValue: 92,
      isRecommended: true,
    },
    {
      id: 'ACT-3',
      action: 'Wait',
      energyCost: 0,
      powerRecovery: 0,
      risk: 'MEDIUM',
      missionValue: 30,
      isRecommended: false,
    },
    {
      id: 'ACT-4',
      action: 'Delay Cleaning',
      energyCost: 0,
      powerRecovery: -15.0,
      risk: 'HIGH',
      missionValue: 10,
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
  logs: [
    {
      id: 'LOG-001',
      time: '08:12:00Z',
      level: 'WARN',
      message: 'Dust accumulation detected in zones F, G, K.',
    },
    {
      id: 'LOG-002',
      time: '08:15:30Z',
      level: 'WARN',
      message: 'Power output dropped 8% below nominal threshold.',
    },
    {
      id: 'LOG-003',
      time: '08:20:12Z',
      level: 'INFO',
      message: 'Forecast updated. Solar minimum approaching in 14h.',
    },
    {
      id: 'LOG-004',
      time: '08:25:00Z',
      level: 'INFO',
      message: 'Scenario evaluation completed.',
    },
    {
      id: 'LOG-005',
      time: '08:25:05Z',
      level: 'INFO',
      message: 'Partial clean recommended to preserve battery margin.',
    },
  ],
};

import React, { useState } from 'react';

interface ChartPoint {
  hour: string;
  partial: number;
  wait: number;
  full: number;
  x: number;
}

interface OutcomeLineChartProps {
  chartData: ChartPoint[];
  activeScenarioId: string;
  recommendedAction: string;
}

export default function OutcomeLineChart({
  chartData,
  activeScenarioId,
  recommendedAction,
}: OutcomeLineChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(3); // Default to index 3 (24h)

  // Map power values to SVG Y coordinate (260W = Y:30, 40W = Y:180)
  // Let's adjust getY to handle a wider scale if values drop to 50W in Scenario 2
  const getY = (val: number) => {
    const minVal = 40;
    const maxVal = 260;
    const minY = 170;
    const maxY = 30;
    return minY - ((val - minVal) / (maxVal - minVal)) * (minY - maxY);
  };

  // SVG paths using cubic bezier formatting
  const getCurvePath = (key: 'partial' | 'wait' | 'full') => {
    if (!chartData || chartData.length === 0) return '';
    let path = `M ${chartData[0].x} ${getY(chartData[0][key])}`;
    for (let i = 0; i < chartData.length - 1; i++) {
      const curr = chartData[i];
      const next = chartData[i + 1];
      const cpX1 = curr.x + 30;
      const cpY1 = getY(curr[key]);
      const cpX2 = next.x - 30;
      const cpY2 = getY(next[key]);
      path += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${getY(next[key])}`;
    }
    return path;
  };

  // Predefined annotations and coordinates per scenario to avoid overlaps
  const annotations = activeScenarioId === 'dust' ? {
    full: { x: 310, y: 24, text: "Full Clean ➔ Max Power / High Cost" },
    partial: { x: 290, y: 70, text: "Partial Clean ➔ Power Stabilizes" },
    wait: { x: 310, y: 145, text: "Wait ➔ Power Declines" },
  } : {
    wait: { x: 310, y: 80, text: "Wait ➔ Optimal / Preserves Battery" },
    partial: { x: 290, y: 118, text: "Partial Clean ➔ Battery Drain" },
    full: { x: 310, y: 175, text: "Full Clean ➔ Wasteful / Depletion" },
  };

  return (
    <div className="bg-[#141517] border border-white/5 rounded-2xl p-5 flex flex-col justify-between h-full font-sans relative shadow-lg">
      {/* Title / Legend */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-4">
        <div>
          <h3 className="text-white text-base font-semibold leading-none mb-1">48-Hour Outcome Comparison</h3>
          <p className="text-[#6b7280] text-xs font-medium">Predictive Solar Array Power Yield (W)</p>
        </div>
        {/* Custom Legend */}
        <div className="flex items-center gap-3 text-[10px] text-[#9ca3af] font-semibold shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-[3px] rounded bg-[#f0522f]"></span>
            <span>Partial Clean {recommendedAction === 'Partial Clean' ? '(Rec)' : ''}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-[3px] rounded bg-[#3b82f6]"></span>
            <span>Wait / Decline {recommendedAction === 'Wait' ? '(Rec)' : ''}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-[3px] rounded bg-[#10b981]"></span>
            <span>Full Clean {recommendedAction === 'Full Clean' ? '(Rec)' : ''}</span>
          </div>
        </div>
      </div>

      {/* SVG Canvas - Large Layout */}
      <div className="flex-1 relative min-h-[260px] select-none">
        <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
          {/* Horizontal Grid lines */}
          <line x1="40" y1="30" x2="480" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="40" y1="65" x2="480" y2="65" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="40" y1="100" x2="480" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="40" y1="135" x2="480" y2="135" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="40" y1="170" x2="480" y2="170" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Y-Axis Labels */}
          <text x="12" y="34" className="fill-[#6b7280] text-[9px] font-mono font-medium">240W</text>
          <text x="12" y="69" className="fill-[#6b7280] text-[9px] font-mono font-medium">200W</text>
          <text x="12" y="104" className="fill-[#6b7280] text-[9px] font-mono font-medium">160W</text>
          <text x="12" y="139" className="fill-[#6b7280] text-[9px] font-mono font-medium">120W</text>
          <text x="18" y="174" className="fill-[#6b7280] text-[9px] font-mono font-medium">80W</text>

          {/* Dotted Vertical Marker Line */}
          {hoveredIndex !== null && chartData[hoveredIndex] && (
            <line
              x1={chartData[hoveredIndex].x}
              y1="30"
              x2={chartData[hoveredIndex].x}
              y2="170"
              stroke="#6b7280"
              strokeDasharray="3,3"
              strokeWidth="1.5"
            />
          )}

          {/* Line paths - dynamically highlighting the recommended trajectory */}
          <path
            d={getCurvePath('wait')}
            fill="none"
            stroke="#3b82f6"
            strokeWidth={recommendedAction === 'Wait' ? '3.5' : '2.0'}
            strokeLinecap="round"
            opacity={recommendedAction === 'Wait' ? '1.0' : '0.7'}
          />
          <path
            d={getCurvePath('full')}
            fill="none"
            stroke="#10b981"
            strokeWidth={recommendedAction === 'Full Clean' ? '3.5' : '2.0'}
            strokeLinecap="round"
            opacity={recommendedAction === 'Full Clean' ? '1.0' : '0.7'}
          />
          <path
            d={getCurvePath('partial')}
            fill="none"
            stroke="#f0522f"
            strokeWidth={recommendedAction === 'Partial Clean' ? '3.5' : '2.0'}
            strokeLinecap="round"
            opacity={recommendedAction === 'Partial Clean' ? '1.0' : '0.7'}
          />

          {/* Dynamic predictions annotations placed next to the curves */}
          <text
            x={annotations.full.x}
            y={annotations.full.y}
            className="fill-[#10b981] text-[7.5px] font-extrabold uppercase tracking-wide opacity-90 select-none"
          >
            {annotations.full.text}
          </text>
          <text
            x={annotations.partial.x}
            y={annotations.partial.y}
            className="fill-[#f0522f] text-[7.5px] font-extrabold uppercase tracking-wide select-none"
          >
            {annotations.partial.text}
          </text>
          <text
            x={annotations.wait.x}
            y={annotations.wait.y}
            className="fill-[#3b82f6] text-[7.5px] font-extrabold uppercase tracking-wide opacity-95 select-none"
          >
            {annotations.wait.text}
          </text>

          {/* Data Nodes for Hovered Index */}
          {hoveredIndex !== null && chartData[hoveredIndex] && (
            <>
              <circle cx={chartData[hoveredIndex].x} cy={getY(chartData[hoveredIndex].wait)} r={recommendedAction === 'Wait' ? '5.5' : '4.5'} className={`fill-[#141517] stroke-[#3b82f6] ${recommendedAction === 'Wait' ? 'stroke-[3px]' : 'stroke-[2.5px]'}`} />
              <circle cx={chartData[hoveredIndex].x} cy={getY(chartData[hoveredIndex].full)} r={recommendedAction === 'Full Clean' ? '5.5' : '4.5'} className={`fill-[#141517] stroke-[#10b981] ${recommendedAction === 'Full Clean' ? 'stroke-[3px]' : 'stroke-[2.5px]'}`} />
              <circle cx={chartData[hoveredIndex].x} cy={getY(chartData[hoveredIndex].partial)} r={recommendedAction === 'Partial Clean' ? '5.5' : '4.5'} className={`fill-[#141517] stroke-[#f0522f] ${recommendedAction === 'Partial Clean' ? 'stroke-[3px]' : 'stroke-[2.5px]'}`} />
            </>
          )}

          {/* Invisible interactive zones for hovering */}
          {chartData.map((pt, idx) => (
            <rect
              key={idx}
              x={pt.x - 30}
              y="20"
              width="60"
              height="160"
              className="fill-transparent cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
            />
          ))}

          {/* X-Axis Labels */}
          {chartData.map((pt, idx) => (
            <text
              key={idx}
              x={pt.x}
              y="192"
              textAnchor="middle"
              className={`font-mono text-[9px] font-semibold tracking-wide ${
                hoveredIndex === idx ? 'fill-white' : 'fill-[#6b7280]'
              }`}
            >
              {pt.hour}
            </text>
          ))}
        </svg>

        {/* Dynamic Tooltip popover */}
        {hoveredIndex !== null && chartData[hoveredIndex] && (
          <div
            className="absolute bg-[#1a1b1e] border border-white/10 p-3.5 rounded-xl shadow-2xl z-20 w-44 font-sans text-xs pointer-events-none transition-all duration-200"
            style={{
              left: `${(chartData[hoveredIndex].x / 500) * 100}%`,
              top: '40px',
              transform: hoveredIndex >= 4 ? 'translateX(-110%)' : 'translateX(10px)',
            }}
          >
            <div className="text-white font-bold mb-1.5 pb-1 border-b border-white/5 flex justify-between items-center">
              <span>Projection: +{chartData[hoveredIndex].hour}</span>
              {hoveredIndex === 3 && (
                <span className="text-[9px] bg-red-500/10 text-red-400 px-1 py-0.5 rounded font-semibold uppercase tracking-wider scale-95 animate-pulse">
                  {activeScenarioId === 'dust' ? 'Deadline' : 'Critical'}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1 text-[#9ca3af]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f0522f]"></span>
                  <span>Partial {recommendedAction === 'Partial Clean' ? '(Rec)' : ''}:</span>
                </div>
                <span className="text-white font-mono font-bold">{chartData[hoveredIndex].partial} W</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
                  <span>Wait {recommendedAction === 'Wait' ? '(Rec)' : ''}:</span>
                </div>
                <span className="text-white font-mono font-bold">{chartData[hoveredIndex].wait} W</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                  <span>Full Clean {recommendedAction === 'Full Clean' ? '(Rec)' : ''}:</span>
                </div>
                <span className="text-white font-mono font-bold">{chartData[hoveredIndex].full} W</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

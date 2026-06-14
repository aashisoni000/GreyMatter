import React from 'react';

export type MetricStatus = 'NOMINAL' | 'WARNING' | 'CRITICAL';

interface MetricCardProps {
  title: string;
  value: string;
  status: MetricStatus;
  subtitle?: string;
}

export default function MetricCard({
  title,
  value,
  status,
  subtitle = 'Real-time Telemetry',
}: MetricCardProps) {
  
  const getStatusBadge = () => {
    switch (status) {
      case 'NOMINAL':
        return (
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-[#10b981] border border-emerald-500/20 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
            Nominal
          </span>
        );
      case 'WARNING':
        return (
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-[#f59e0b] border border-amber-500/20 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
            Warning
          </span>
        );
      case 'CRITICAL':
        return (
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 text-[#ef4444] border border-rose-500/20 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-ping"></span>
            Critical
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#141517] border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-white/10 transition-colors w-full font-sans">
      {/* Title & Status badge */}
      <div className="flex justify-between items-center mb-3.5">
        <span className="text-[#9ca3af] text-sm font-medium">{title}</span>
        {getStatusBadge()}
      </div>

      {/* Value */}
      <div className="mb-2">
        <span key={value} className="text-white text-[28px] font-bold tracking-tight inline-block animate-value-change">{value}</span>
      </div>

      {/* Subtitle */}
      <div>
        <span className="text-[#6b7280] text-xs font-medium">{subtitle}</span>
      </div>
    </div>
  );
}

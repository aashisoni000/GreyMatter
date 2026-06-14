import React from 'react';
import { DashboardData } from '../types';

interface HeaderProps {
  status: DashboardData['missionStatus'];
}

export default function Header({ status }: HeaderProps) {
  const getStatusBadgeStyles = () => {
    switch (status) {
      case 'NOMINAL':
        return {
          bg: 'bg-emerald-500/10 border border-emerald-500/20',
          dot: 'bg-emerald-500',
          text: 'text-emerald-400'
        };
      case 'WARNING':
        return {
          bg: 'bg-amber-500/10 border border-amber-500/20',
          dot: 'bg-amber-500',
          text: 'text-amber-400'
        };
      case 'CRITICAL':
        return {
          bg: 'bg-rose-500/10 border border-rose-500/20',
          dot: 'bg-rose-500',
          text: 'text-rose-400'
        };
      default:
        return {
          bg: 'bg-slate-500/10 border border-slate-500/20',
          dot: 'bg-slate-500',
          text: 'text-slate-400'
        };
    }
  };

  const badge = getStatusBadgeStyles();

  return (
    <header className="flex justify-between items-center border border-[var(--border-color)] bg-[var(--surface)] px-6 py-4 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {/* A premium clean logo icon */}
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-xs text-white">
            G
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white font-sans">
            Grey Matter
          </h1>
        </div>
        <div className="h-4 w-px bg-[var(--border-color)]"></div>
        <span className="text-sm text-[var(--text-secondary)] font-medium">
          Lunar Dust Mitigation Support
        </span>
      </div>
      
      <div className="flex items-center gap-5 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--text-muted)] tracking-wider">ELAPSED:</span>
          <span className="font-mono font-semibold text-[var(--text-secondary)] bg-[var(--surface-secondary)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">
            04:12:33:02
          </span>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${badge.bg} ${badge.text}`}>
          <span className={`w-2 h-2 rounded-full ${badge.dot}`}></span>
          <span>Status: {status}</span>
        </div>
      </div>
    </header>
  );
}

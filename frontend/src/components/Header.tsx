import React from 'react';
import { DashboardData } from '../types';

interface HeaderProps {
  status: DashboardData['missionStatus'];
}

export default function Header({ status }: HeaderProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'NOMINAL': return 'bg-[var(--success)] text-white';
      case 'WARNING': return 'bg-[var(--warning)] text-white';
      case 'CRITICAL': return 'bg-[var(--critical)] text-white';
      default: return 'bg-[var(--secondary)] text-white';
    }
  };

  return (
    <header className="flex justify-between items-center border-b border-[var(--border-color)] bg-[var(--surface)] p-3">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold tracking-widest text-[var(--foreground)] uppercase">
          GREY MATTER
        </h1>
        <div className="h-6 w-px bg-[var(--border-color)]"></div>
        <span className="font-mono text-sm tracking-wider text-[var(--secondary)]">
          ORBITAL COMMAND
        </span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="font-mono text-sm">
          T+ 04:12:33:02
        </div>
        <div className={`px-3 py-1 font-mono text-sm font-bold tracking-widest uppercase ${getStatusColor()}`}>
          SYS: {status}
        </div>
      </div>
    </header>
  );
}

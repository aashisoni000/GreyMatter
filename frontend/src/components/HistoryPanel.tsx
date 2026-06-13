import React from 'react';
import { LogEntry } from '../types';

interface HistoryPanelProps {
  logs: LogEntry[];
}

export default function HistoryPanel({ logs }: HistoryPanelProps) {
  return (
    <div className="flex flex-col bg-[var(--surface)] border border-[var(--border-color)]">
      <div className="bg-[var(--foreground)] text-[var(--surface)] px-3 py-2 text-xs font-bold uppercase tracking-widest border-b border-[var(--border-color)]">
        Telemetry & Event Log
      </div>
      <div className="p-0 overflow-auto bg-[var(--background)] h-full min-h-[150px]">
        <ul className="flex flex-col w-full text-xs font-mono m-0 p-0">
          {logs.map((log) => (
            <li key={log.id} className="flex items-start gap-2 border-b border-[var(--border-color)] px-2 py-1.5 hover:bg-[var(--surface)]">
              <span className="text-[var(--secondary)] shrink-0">{log.time}</span>
              <span className={`shrink-0 w-10 ${
                log.level === 'INFO' ? 'text-[var(--primary)]' : 
                log.level === 'WARN' ? 'text-[var(--warning)]' : 'text-[var(--critical)]'
              }`}>
                [{log.level}]
              </span>
              <span className="text-[var(--foreground)] break-words w-full">{log.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

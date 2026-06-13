import React from 'react';

export default function SystemFooter() {
  return (
    <div className="w-full mt-4 flex justify-center items-center font-mono text-[10px] text-[var(--secondary)] uppercase tracking-[0.2em]">
      <span className="flex items-center gap-3">
        OBSERVE <span className="text-[var(--border-color)]">→</span> 
        FORECAST <span className="text-[var(--border-color)]">→</span> 
        SIMULATE <span className="text-[var(--border-color)]">→</span> 
        OPTIMIZE <span className="text-[var(--border-color)]">→</span> 
        EXECUTE <span className="text-[var(--border-color)]">→</span> 
        LEARN
      </span>
    </div>
  );
}

import React from 'react';

export default function SystemFooter() {
  const steps = ['Observe', 'Forecast', 'Simulate', 'Optimize', 'Execute', 'Learn'];

  return (
    <footer className="w-full mt-2 flex justify-between items-center text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-3 px-1">
      <div>
        <span>System Version 2.4.1</span>
      </div>
      <div className="flex items-center gap-3 font-medium">
        {steps.map((step, idx) => (
          <React.Fragment key={step}>
            <span className="hover:text-[var(--text-secondary)] transition-colors cursor-default">
              {step}
            </span>
            {idx < steps.length - 1 && <span className="text-white/10">•</span>}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
}

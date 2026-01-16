'use client';

import { useState, useEffect } from 'react';

export default function GreenCreditToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already dismissed the credit notification
    const hasSeen = localStorage.getItem('lb_green_credit_seen');
    if (!hasSeen) {
      setIsVisible(true);
      // Activate the credit in the background
      localStorage.setItem('lb_green_credit_active', 'true');
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[#E9DAC0] py-2 text-center shadow-lg">
      <div className="flex items-center justify-center gap-4 px-4">
        <span className="animate-pulse h-2 w-2 rounded-full bg-[#00050a]"></span>
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#00050a]">
          [SYSTEM] GREEN CREDIT ENABLED: APPLY DIGITALLY TO SAVE $20 IMMEDIATELY.
        </p>
        <button 
          onClick={() => {
            setIsVisible(false);
            localStorage.setItem('lb_green_credit_seen', 'true');
          }}
          className="absolute right-4 font-mono text-[10px] font-bold text-[#00050a] hover:opacity-50"
        >
          [CLOSE]
        </button>
      </div>
    </div>
  );
}
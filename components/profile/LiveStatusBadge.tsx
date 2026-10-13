"use client";

import { useState, useEffect } from "react";
import { TIMEZONE } from "@/data/portfolio-data";

export function LiveStatusBadge() {
  const [timeString, setTimeString] = useState<string>("");

  // Live Addis Ababa (EAT / UTC+3) time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          timeZone: TIMEZONE,
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2.5 border border-theme-status bg-theme-status px-4 py-2 rounded-[3px] text-sm sm:text-base font-mono text-theme-status shrink-0">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <span className="text-theme-status-bold font-medium">Open to roles</span>
      <span className="opacity-40">·</span>
      <span>{timeString ? `${timeString} EAT (Addis Ababa)` : "Addis Ababa, ET"}</span>
    </div>
  );
}

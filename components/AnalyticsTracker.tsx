"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics/react";

export default function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (link) {
        const href = link.href || "";
        
        if (href.includes("github.com")) {
          track("github_click", { url: href });
        } else if (href.includes("linkedin.com")) {
          track("linkedin_click", { url: href });
        } else if (href.toLowerCase().includes("resume") || href.includes(".pdf")) {
          track("resume_download", { url: href });
        } else if (href.startsWith("http") && !href.includes(window.location.host)) {
          track("outbound_link_click", { url: href });
        } else {
          // If it's a project link or internal route
          if (link.getAttribute("href")?.includes("project") || href.includes("project")) {
            track("project_link_click", { url: href });
          }
        }
      }
    };

    // Use capturing phase to ensure we catch clicks before navigation
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}

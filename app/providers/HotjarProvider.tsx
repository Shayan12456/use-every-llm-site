"use client";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import { usePathname, useSearchParams } from "next/navigation";

export default function HotjarProvider() {
  const pathname = usePathname();
  const search = useSearchParams();

  // Initialize Hotjar once (production only)
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      hotjar.initialize({id:6546047,sv:6}); // (hjid, hjsv)
    }
  }, []);

  // Track route changes in SPA
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).hj) {
      const url = pathname + (search?.toString() ? `?${search}` : "");
      (window as any).hj("stateChange", url);
    }
  }, [pathname, search]);

  return null;
}

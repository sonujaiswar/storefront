// src/hooks/useSmartSignInLink.ts
"use client";

import { usePathname, useSearchParams } from "next/navigation";

export function useSmartSignInLink() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const fullPath = `${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;

  const signInUrl = `/signin?callbackUrl=${encodeURIComponent(fullPath)}`;

  return signInUrl;
}

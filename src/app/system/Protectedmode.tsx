"use client";

import { sessionSetProtectedMode } from "@/controllers/slices/sessionSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUserManagement } from "@/hooks/useUserManagement";
import { useRouter, usePathname } from "next/navigation";
import AccessDenied from "@/components/ui/AccessDenied/Action";

export default function ProtectedMode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { isAuthenticated, isLoading: checkingAuth } = useUserManagement();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname(); // get current path

  useEffect(() => {
    dispatch(sessionSetProtectedMode(true));
  }, [dispatch]);

  useEffect(() => {
    if (!checkingAuth && !isAuthenticated) {
      const encodedPath = encodeURIComponent(pathname);
      router.push(`/signin?callbackUrl=${encodedPath}`);
    }
  }, [checkingAuth, isAuthenticated, pathname, router]);
  if (!checkingAuth && !isAuthenticated) {
    return <AccessDenied />;
  }
  // if (checkingAuth) {
  //   return <div>Checking authentication...</div>;
  // }

  return <>{children}</>;
}

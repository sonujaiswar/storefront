"use client";

import { sessionSetProtectedMode } from "@/controllers/slices/sessionSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUserManagement } from "@/hooks/useUserManagement";

export default function ProtectedMode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { isAuthenticated, isLoading: checkingAuth } = useUserManagement();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionSetProtectedMode(true));
  }, [dispatch]);

  // Optional loading indicator
  if (checkingAuth) {
    return <div>Checking authentication...</div>;
  }

  // Block access if not authenticated
  if (!isAuthenticated) {
    return <div>Access denied. Redirecting...</div>; // or null
  }

  return <>{children}</>;
}

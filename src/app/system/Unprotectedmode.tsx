"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { sessionSetProtectedMode } from "@/controllers/slices/sessionSlice";

export default function Unprotectedmode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(sessionSetProtectedMode(false));
  }, []);
  return <>{children}</>;
}

"use client";

import {
  sessionSetAuthMode,
  sessionSetProtectedMode,
} from "@/controllers/slices/sessionSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function Protectedmode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(sessionSetProtectedMode(true));
    dispatch(sessionSetAuthMode(true));
  }, []);
  return <>{children}</>;
}

"use client";
import { settingSetProtectedMode } from "@/controllers/slices/settings";
import React from "react";
import { useDispatch } from "react-redux";

export default function Unprotectedmode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(settingSetProtectedMode(false));
    console.log("Unprotectedmode is on");
  }, []);
  return <>{children}</>;
}

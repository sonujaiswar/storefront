"use client";
import { settingSetProtectedMode } from "@/controllers/slices/settings";
import React from "react";
import { useDispatch } from "react-redux";

export default function Protectedmode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(settingSetProtectedMode(true));
    console.log("Protectedmode is on");
  }, []);
  return <>{children}</>;
}

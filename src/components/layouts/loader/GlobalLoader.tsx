"use client";
import "@bprogress/core/css";
import { BProgress } from "@bprogress/core";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
  const pathname = usePathname();

  useEffect(() => {
    BProgress.start();
    BProgress.configure({ showSpinner: false, template: "bar" });

    const timer = setTimeout(() => {
      BProgress.done();
    }, 500); // optional delay

    return () => clearTimeout(timer);
  }, [pathname]); // 👈 triggers on route change

  return null;
}

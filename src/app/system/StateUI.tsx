"use client";
import React from "react";

import { persistor, store } from "@/controllers/store";
import theme from "@/styles/attirebellatheme";

import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { ThemeProvider } from "@mui/material";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BProgress } from "@bprogress/core";
import SessionMode from "./SessionMode";
import { ToastContainer, toast } from "react-toastify";

export default function StateUI({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const lastPath = React.useRef(pathname);

  React.useEffect(() => {
    const handleNavigation = () => {
      BProgress.start();

      setTimeout(() => {
        BProgress.done();
      }, 300);
    };

    // Listen to internal Next.js navigation events via popstate + pushState override
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    const patchHistoryMethod = (method: any) => {
      return function (this: any, ...args: any[]) {
        const url = args[2];
        if (typeof url === "string" && url === window.location.pathname) {
          handleNavigation(); // same URL navigation
        }
        return method.apply(this, args);
      };
    };

    window.history.pushState = patchHistoryMethod(originalPushState);
    window.history.replaceState = patchHistoryMethod(originalReplaceState);

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  React.useEffect(() => {
    if (pathname !== lastPath.current) {
      BProgress.start();
      setTimeout(() => {
        BProgress.done();
      }, 300);
      lastPath.current = pathname;
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <ProgressProvider
        height="4px"
        color={theme.palette.primary.main}
        options={{ showSpinner: false }}
        shallowRouting
        startOnLoad={true} // disable auto to avoid conflict
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SessionMode>{children}</SessionMode>
          </PersistGate>
        </Provider>
      </ProgressProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

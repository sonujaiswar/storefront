"use client";
import attirebellaTheme from "@/styles/attirebellatheme";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";

import { ThemeProvider } from "@mui/material";
export default function StateUI({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ThemeProvider theme={attirebellaTheme}>
        <ProgressProvider
          height="4px"
          color="#fffd00"
          options={{ showSpinner: false }}
          shallowRouting
          startOnLoad
        >
          {children}
        </ProgressProvider>
      </ThemeProvider>
    </>
  );
}

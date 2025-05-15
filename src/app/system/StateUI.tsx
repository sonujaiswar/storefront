"use client";
import Protectedmode from "@/app/system/Protectedmode";
import Unprotectedmode from "@/app/system/Unprotectedmode";
import { persistor, store } from "@/controllers/store";
import attirebellaTheme from "@/styles/attirebellatheme";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function StateUI({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ThemeProvider theme={attirebellaTheme}>
        <ProgressProvider
          height="4px"
          color={attirebellaTheme.palette.primary.main}
          options={{ showSpinner: false }}
          shallowRouting
          startOnLoad
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Unprotectedmode>
                <Protectedmode>{children}</Protectedmode>
              </Unprotectedmode>
            </PersistGate>
          </Provider>
        </ProgressProvider>
      </ThemeProvider>
    </>
  );
}

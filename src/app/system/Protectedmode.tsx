"use client";

import { sessionSetProtectedMode } from "@/controllers/slices/sessionSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import AccessDenied from "@/components/ui/AccessDenied/Action";
import { auth } from "@/lib/firebase/firebaseAuth";
import AuthLoading from "@/components/layouts/authloading/AuthLoading";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function ProtectedMode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("profilePage");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (authenticated) dispatch(sessionSetProtectedMode(true));
  }, [dispatch, authenticated]);

  // ✅ Redirect in effect (safe)
  useEffect(() => {
    if (!loading && !authenticated) {
      router.replace(`/signin?callbackUrl=${encodeURIComponent(pathname)}`);
    }
  }, [loading, authenticated, router, pathname]);

  if (!loading && !authenticated) {
    return <AccessDenied />;
  }
  if (loading) {
    return (
      <>
        <AuthLoading>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {t("loading")}
          </Typography>
        </AuthLoading>
      </>
    );
  }
  return <>{children}</>;
}

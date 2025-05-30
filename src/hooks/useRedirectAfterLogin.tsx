"use client";

import { RootState } from "@/types/stateTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useRedirectAfterLogin = (defaultRedirect = "/dashboard") => {
  const router = useRouter();
  const isNewUser = useSelector((state: RootState) => state.session.isNewUser);
  const searchParams = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirect = useCallback(() => {
    const callbackUrl = searchParams.get("callbackUrl");
    const redirectUrl = callbackUrl
      ? decodeURIComponent(callbackUrl)
      : defaultRedirect;

    if (redirectUrl) {
      setIsRedirecting(true);
      console.log("isNewUser:", isNewUser);

      if (isNewUser) {
        const wizardUrl = callbackUrl
          ? `/wizard?callbackUrl=${encodeURIComponent(callbackUrl)}`
          : "/wizard";
        router.replace(wizardUrl);
      } else {
        router.replace(redirectUrl);
      }
    }
  }, [searchParams, router, defaultRedirect, isNewUser]);

  return { redirect, isRedirecting };
};

export default useRedirectAfterLogin;

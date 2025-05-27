"use client";
import React from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { sessionSetAuthMode } from "@/controllers/slices/sessionSlice";
import { usePathname } from "@/i18n/navigation";

export function useUserManagement() {
  const [authUser, setAuthUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Track auth state
  React.useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!isMounted) return;

      if (currentUser) {
        dispatch(sessionSetAuthMode(true));
        setAuthUser(currentUser);
      } else {
        setAuthUser(null);
      }

      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [dispatch]);

  // Get locale from pathname (/en/, /hi/)
  const getLocale = (): string => {
    const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
    return match?.[1] || "en-in";
  };

  // Get callback URL or fallback to dashboard
  const getRedirectUrl = (): string => {
    const callbackUrl = searchParams.get("callbackUrl");
    return callbackUrl
      ? decodeURIComponent(callbackUrl)
      : `/${getLocale()}/dashboard`;
  };

  // Manual redirect after login
  const redirectAfterLogin = () => {
    if (authUser && !isLoading) {
      const redirectUrl = getRedirectUrl();

      router.push(redirectUrl);
    }
  };

  const isAuthenticated = !!authUser;

  return {
    authUser,
    isAuthenticated,
    isLoading,
    redirectAfterLogin,
  };
}

"use client";
import React from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { sessionSetAuthMode } from "@/controllers/slices/sessionSlice";
import { usePathname } from "@/i18n/navigation";
import { RootState } from "@/types/stateTypes";
import useUserDispatch from "./useUserDispatch";
import splitDisplayName from "@/utils/splitDisplayName";

export function useUserManagement() {
  const [authUser, setAuthUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const createAt = useSelector((state: RootState) => state.user.createdAt);
  const lastLoginAt = useSelector((state: RootState) => state.user.lastLoginAt);
  const dateofbirth = useSelector((state: RootState) => state.user.dob);
  const phoneNumber = useSelector((state: RootState) => state.user.phone);
  const photoLink = useSelector((state: RootState) => state.user.photoURL);
  const { userAuthenticate } = useUserDispatch();

  // Track auth state
  React.useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!isMounted) return;

      if (user) {
        dispatch(sessionSetAuthMode(true));
        setAuthUser(user);
        const { first_name, last_name } = splitDisplayName(
          user.displayName || ""
        );
        const gender = "Female";
        const dob = dateofbirth || "";
        const phone = phoneNumber || user.phoneNumber || "";
        const email = user.email || "";
        const providerId = user.providerData[0]?.providerId || "";
        const isEmailVerified = user.emailVerified;
        const photoURL = photoLink || user.photoURL || "";
        const uid = user.uid || "";
        const createdAt = user.metadata.creationTime || "";
        const lastLoginAt = user.metadata.lastSignInTime || "";
        userAuthenticate({
          user: { first_name, last_name },
          gender,
          dob,
          phone,
          email,
          isEmailVerified,
          photoURL,
          uid,
          providerId,
          createdAt,
          lastLoginAt,
        });
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
      const callbackUrl = searchParams.get("callbackUrl") || "";
      const encodedCallbackUrl = encodeURIComponent(callbackUrl);

      if (createAt === lastLoginAt) {
        // First-time login, go to wizard with callback
        router.push(`/wizard?callbackUrl=${encodedCallbackUrl}`);
      } else {
        // Regular login, redirect to callback or dashboard
        const redirectUrl = getRedirectUrl();
        router.push(redirectUrl);
      }
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

"use client";
import React from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { sessionSetAuthMode } from "@/controllers/slices/sessionSlice";
import { usePathname } from "@/i18n/navigation";
import { RootState } from "@/types/stateTypes";
import useUserDispatch from "./useUserDispatch";
import splitDisplayName from "@/utils/splitDisplayName";

export function useUserManagement() {
  const [authUser, setAuthUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const { userAuthenticate } = useUserDispatch();

  // Select multiple user fields in one call to avoid multiple subscribes
  const {
    first_name: firstname,
    last_name: lastname,
    createdAt,
    lastLoginAt,
    dob: dateofbirth,
    phone,
    photoURL: photoLink,
  } = useSelector(
    (state: RootState) => ({
      first_name: state.user.user.first_name,
      last_name: state.user.user.last_name,
      createdAt: state.user.createdAt,
      lastLoginAt: state.user.lastLoginAt,
      dob: state.user.dob,
      phone: state.user.phone,
      photoURL: state.user.photoURL,
    }),
    shallowEqual
  );

  React.useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!isMounted) return;

      if (user) {
        dispatch(sessionSetAuthMode(true));
        setAuthUser(user);

        // Prefer combined redux name, fallback to firebase displayName
        const fullName =
          [firstname, lastname].filter(Boolean).join(" ") ||
          user.displayName ||
          "";
        const { first_name, last_name } = splitDisplayName(fullName);

        userAuthenticate({
          user: { first_name, last_name },
          gender: "Female", // Consider making this dynamic later
          dob: dateofbirth || null,
          phone: phone || user.phoneNumber || "",
          email: user.email || "",
          isEmailVerified: user.emailVerified,
          photoURL: photoLink || user.photoURL || "",
          uid: user.uid || "",
          providerId: user.providerData[0]?.providerId || "",
          createdAt: user.metadata.creationTime || "",
          lastLoginAt: user.metadata.lastSignInTime || "",
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
  }, [
    dispatch,
    firstname,
    lastname,
    dateofbirth,
    phone,
    photoLink,
    userAuthenticate,
  ]);

  const getLocale = React.useCallback((): string => {
    const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
    return match?.[1] || "en-in";
  }, [pathname]);

  const getRedirectUrl = React.useCallback((): string => {
    const callbackUrl = searchParams.get("callbackUrl");
    return callbackUrl
      ? decodeURIComponent(callbackUrl)
      : `/${getLocale()}/dashboard`;
  }, [searchParams, getLocale]);

  const redirectAfterLogin = React.useCallback(() => {
    if (!authUser || isLoading) return;

    const callbackUrl = searchParams.get("callbackUrl") || "";
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    if (createdAt === lastLoginAt) {
      // First-time login
      router.push(`/wizard?callbackUrl=${encodedCallbackUrl}`);
    } else {
      // Regular login
      router.push(getRedirectUrl());
    }
  }, [
    authUser,
    isLoading,
    searchParams,
    createdAt,
    lastLoginAt,
    router,
    getRedirectUrl,
  ]);

  return {
    authUser,
    isAuthenticated: !!authUser,
    isLoading,
    redirectAfterLogin,
  };
}

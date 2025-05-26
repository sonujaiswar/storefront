"use client";

import {
  sessionSetAuthMode,
  sessionSetProtectedMode,
} from "@/controllers/slices/sessionSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/firebaseAuth";
export default function Protectedmode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [checkingAuth, setCheckingAuth] = React.useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/signin"); // 🔁 Redirect to sign-in if not authenticated
      } else {
        dispatch(sessionSetAuthMode(true));
      }
      setCheckingAuth(false);
    });

    return () => unsubscribe(); // cleanup listener
  }, []);
  React.useEffect(() => {
    dispatch(sessionSetProtectedMode(true));
  }, []);

  // Optionally, show nothing or a loading spinner while checking
  return <>{checkingAuth ? <div>Checking authentication...</div> : children}</>;
}

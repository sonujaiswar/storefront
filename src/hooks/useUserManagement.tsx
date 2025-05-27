"use client"; // Ensure this for App Router (if needed)

import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseAuth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { sessionSetAuthMode } from "@/controllers/slices/sessionSlice";

export function useUserManagement() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!isMounted) return;

      if (!currentUser) {
        router.push("/signin");
      } else {
        dispatch(sessionSetAuthMode(true));
      }

      setAuthUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const isAuthenticated = !!authUser;

  return { isAuthenticated, isLoading };
}

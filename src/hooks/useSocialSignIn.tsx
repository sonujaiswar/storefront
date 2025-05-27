"use client";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/firebaseAuth";
import useUserDispatch from "./useUserDispatch";
import { extractUserDetails } from "@/utils/extractUserDetails";
import { FirebaseError } from "firebase/app";
import { FirebaseErrorSimplified } from "@/utils/firebaseErrorMessages";

export function useSocialSignIn() {
  const [error, setError] = useState<string | null>(null);
  const { userAuthenticate } = useUserDispatch();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userDetails = extractUserDetails(user);
      userAuthenticate(userDetails);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(FirebaseErrorSimplified(error));
      }
      // setError((error as Error).message);
    }
  };

  return {
    signInWithGoogle,
    error,
  };
}

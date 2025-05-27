"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseAuth";
import useUserDispatch from "./useUserDispatch";
import { extractUserDetails } from "@/utils/extractUserDetails";
import { FirebaseError } from "firebase/app";
import { FirebaseErrorSimplified } from "@/utils/firebaseErrorMessages";

export function useEmailPassword() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { userAuthenticate } = useUserDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "";

  // fn must return Promise<UserCredential>
  const handleAuth = async (fn: () => Promise<UserCredential>) => {
    try {
      setLoading(true);
      const result = await fn();
      const user = result.user;
      const userDetails = extractUserDetails(user);
      userAuthenticate(userDetails);
      return user;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(FirebaseErrorSimplified(error));
      }
      return null;
      // setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    await handleAuth(() => signInWithEmailAndPassword(auth, email, password));
  };

  const signUpWithEmail = async (email: string, password: string) => {
    const user = await handleAuth(() =>
      createUserWithEmailAndPassword(auth, email, password)
    );
    if (user) {
      const encodedCallback = encodeURIComponent(callbackUrl);
      router.push(`/wizard?callbackUrl=${encodedCallback}`);
    }
  };

  return {
    signInWithEmail,
    signUpWithEmail,
    error,
    loading,
  };
}

"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  User,
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

  const handleAuth = async (fn: () => Promise<UserCredential>) => {
    try {
      setLoading(true);
      const result = await fn();
      const user = result.user;
      const userDetails = extractUserDetails(user);
      userAuthenticate(userDetails);
      return user;
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        setError(FirebaseErrorSimplified(err));
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      return null;
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
    if (user && callbackUrl) {
      router.push(`/wizard?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
  };

  const updatePasswordFirebase = async (newPassword: string) => {
    const currentUser: User | null = auth.currentUser;
    if (currentUser) {
      try {
        setLoading(true);
        await updatePassword(currentUser, newPassword);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          setError(FirebaseErrorSimplified(err));
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    } else {
      setError("No user is currently signed in.");
    }
  };

  return {
    signInWithEmail,
    signUpWithEmail,
    updatePasswordFirebase,
    error,
    loading,
  };
}

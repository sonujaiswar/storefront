import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/firebaseAuth";
import splitDisplayName from "@/utils/splitDisplayName";

export function useSocialSignIn() {
  const [error, setError] = useState<string | null>(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const { firstName, lastName } = splitDisplayName(user.displayName || "");
      const email = user.email || "";
      const providerId = user.providerData[0]?.providerId || "";
      console.log(user);
      console.log({ firstName, lastName, email, providerId });
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const signInWithGoogleRedirect = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return {
    signInWithGoogle,
    signInWithGoogleRedirect,
    error,
  };
}

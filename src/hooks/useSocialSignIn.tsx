import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/firebaseAuth";
import splitDisplayName from "@/utils/splitDisplayName";
import useUserDispatch from "./useUserDispatch";

export function useSocialSignIn() {
  const [error, setError] = useState<string | null>(null);
  const { userAuthenticate } = useUserDispatch();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const { first_name, last_name } = splitDisplayName(
        user.displayName || ""
      );
      const gender = "Female";
      const dob = "";
      const phone = user.phoneNumber || "";
      const email = user.email || "";
      const providerId = user.providerData[0]?.providerId || "";
      const isEmailVerified = user.emailVerified;
      const photoURL = user.photoURL || "";
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

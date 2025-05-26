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
  const {
    setFullName,
    setEmail,
    setPhotoURL,
    setProviderId,
    setUID,
    setEmailVerified,
    setPhone,
  } = useUserDispatch();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const { first_name, last_name } = splitDisplayName(
        user.displayName || ""
      );
      const email = user.email || "";
      const providerId = user.providerData[0]?.providerId || "";

      setFullName({ first_name, last_name });
      setEmail(email);
      setPhotoURL(user.photoURL || "");
      setProviderId(providerId);
      setUID(user.uid);
      setEmailVerified(user.emailVerified);
      setPhone(user.phoneNumber || "");
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

import { useState } from "react";
import { auth } from "@/lib/firebase/firebaseAuth";
import { signOut } from "firebase/auth";

export const useSignOut = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const signOutHandler = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
    } catch (err) {
      const error = err as Error;
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { signOut: signOutHandler, loading, error };
};

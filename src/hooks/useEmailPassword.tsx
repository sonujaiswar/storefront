import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseAuth";

export function useEmailPassword() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const signInWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    signInWithEmail,
    error,
    loading,
  };
}

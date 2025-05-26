/*************  ✨ Windsurf Command ⭐  *************/
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseAuth";

export function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, isLoading };
}

/*******  e9158c52-5048-4eed-b223-18497e9bdc08  *******/

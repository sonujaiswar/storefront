import { getAuth, signOut } from "firebase/auth";

export const useSignOut = () => {
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return handleSignOut;
};

import { FirebaseError } from "firebase/app";

// Add a new Firebase Auth error code and message to the existing map
const firebaseErrorMessages: Record<string, string> = {
  "auth/invalid-email": "The email address is not valid.",
  "auth/email-already-in-use": "This email is already registered.",
  "auth/operation-not-allowed": "Email/password sign-in is disabled.",
  "auth/weak-password": "The password is too weak.",
  "auth/user-disabled": "This user account has been disabled.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "The password is incorrect.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
  "auth/network-request-failed": "Network error. Please check your connection.",
  "auth/internal-error": "Internal server error. Try again later.",
  "auth/requires-recent-login":
    "This operation is sensitive and requires recent authentication. Please sign in again.",
};

export default firebaseErrorMessages;
const FirebaseErrorSimplified = (error: FirebaseError): string => {
  return firebaseErrorMessages[error.code] || "An unknown error occurred.";
};

export { FirebaseErrorSimplified };

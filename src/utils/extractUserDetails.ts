import { User } from "firebase/auth";
import splitDisplayName from "./splitDisplayName";

export function extractUserDetails(
  user: User,
  fallbackData?: {
    first_name?: string;
    last_name?: string;
    photoURL?: string;
    dob?: string;
    phone?: string;
  }
) {
  const { first_name, last_name } = splitDisplayName(
    fallbackData?.first_name && fallbackData?.last_name
      ? `${fallbackData.first_name} ${fallbackData.last_name}`
      : user.displayName || ""
  );

  return {
    user: { first_name, last_name },
    gender: "Female",
    dob: fallbackData?.dob || null,
    phone: fallbackData?.phone || user.phoneNumber || "",
    email: user.email || "",
    isEmailVerified: user.emailVerified,
    photoURL: fallbackData?.photoURL || user.photoURL || "",
    uid: user.uid,
    providerId: user.providerData[0]?.providerId || "",
    createdAt: user.metadata.creationTime || "",
    lastLoginAt: user.metadata.lastSignInTime || "",
  };
}

import { User } from "firebase/auth";
import splitDisplayName from "./splitDisplayName";

export function extractUserDetails(
  user: User,
  fallbackData?: {
    firstname: string | null;
    lastname: string | null;
    gender: string | null;
    dob: string | null;
    phone: string | null;
    email: string | null;
    isemailverified: boolean;
    photourl: string | null;
    uid: string | null;
    providerid: string | null;
    password: string | null;
    language: string | null;
    currency: string | null;
    timezone: string | null;
    country: string | null;
    subdivision: string | null;
    city: string | null;
    postalcode: string | null;
    createdat: string | null;
    lastloginat: string | null;
  }
) {
  const { firstname, lastname } = splitDisplayName(
    fallbackData?.firstname && fallbackData?.lastname
      ? `${fallbackData.firstname} ${fallbackData.lastname}`
      : user.displayName || ""
  );

  return {
    firstname,
    lastname,
    gender: fallbackData?.gender || null,
    dob: fallbackData?.dob || null,
    phone: fallbackData?.phone || user.phoneNumber || "",
    email: user.email || "",
    isemailverified: user.emailVerified || false,
    photourl: fallbackData?.photourl || user.photoURL || "",
    uid: user.uid,
    providerid: user.providerData[0]?.providerId || "",
    password: fallbackData?.password || null,
    language: fallbackData?.language || null,
    currency: fallbackData?.currency || null,
    timezone: fallbackData?.timezone || null,
    country: fallbackData?.country || null,
    subdivision: fallbackData?.subdivision || null,
    city: fallbackData?.city || null,
    postalcode: fallbackData?.postalcode || null,
    createdat: user.metadata.creationTime || "",
    lastloginat: user.metadata.lastSignInTime || "",
  };
}

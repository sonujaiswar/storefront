export interface UserBasicTypes {
  first_name: string;
  last_name: string;
}

export interface UserTypes {
  user: UserBasicTypes;
  gender: string | null;
  dob: string | null;
  phone: string | null;
  email: string | null;
  isEmailVerified: boolean;
  photoURL: string | null;
  uid: string | null;
  providerId: string | null;
}

import { useDispatch } from "react-redux";
import {
  userSetFullName,
  userSetDOB,
  userSetGender,
  userSetPhone,
  userSetEmail,
  userSetEmailVerified,
  userSetPhotoURL,
  userSetUID,
  userSetProviderId,
} from "@/controllers/slices/userSlice";
import { UserBasicTypes } from "@/types/user/userTypes";

const useUserDispatch = () => {
  const dispatch = useDispatch();

  const setFullName = (user: UserBasicTypes) => {
    dispatch(userSetFullName(user));
  };

  const setDOB = (dob: string) => {
    dispatch(userSetDOB(dob));
  };

  const setGender = (gender: string) => {
    dispatch(userSetGender(gender));
  };

  const setPhone = (phone: string) => {
    dispatch(userSetPhone(phone));
  };

  const setEmail = (email: string) => {
    dispatch(userSetEmail(email));
  };

  const setEmailVerified = (isEmailVerified: boolean) => {
    dispatch(userSetEmailVerified(isEmailVerified));
  };

  const setPhotoURL = (photoURL: string) => {
    dispatch(userSetPhotoURL(photoURL));
  };

  const setUID = (uid: string) => {
    dispatch(userSetUID(uid));
  };

  const setProviderId = (providerId: string) => {
    dispatch(userSetProviderId(providerId));
  };

  return {
    setFullName,
    setDOB,
    setGender,
    setPhone,
    setEmail,
    setEmailVerified,
    setPhotoURL,
    setUID,
    setProviderId,
  };
};

export default useUserDispatch;

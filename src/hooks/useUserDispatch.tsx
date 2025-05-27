import { useDispatch } from "react-redux";
import { userAuthSet } from "@/controllers/slices/userSlice";
import { UserTypes } from "@/types/user/userTypes";

const useUserDispatch = () => {
  const dispatch = useDispatch();
  function userAuthenticate(user: UserTypes) {
    dispatch(userAuthSet(user));
  }

  return { userAuthenticate };
};

export default useUserDispatch;

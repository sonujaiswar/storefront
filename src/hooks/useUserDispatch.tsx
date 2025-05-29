import { useDispatch } from "react-redux";
import { userAuthSet } from "@/controllers/slices/userSlice";
import { UserTypes } from "@/types/user/userTypes";
import { supabase } from "@/lib/supabase/supabase";

const useUserDispatch = () => {
  const dispatch = useDispatch();

  async function userAuthenticate(user: UserTypes) {
    const userDetails = {
      ...user,
    };

    // Step 1: Check if user exists by email
    const { data: existingUser, error: selectError } = await supabase
      .from("users")
      .select("*")
      .eq("email", user.email)
      .single();

    if (selectError && selectError.code !== "PGRST116") {
      console.error("Supabase select error:", selectError.message);
      return;
    }

    if (existingUser) {
      // Step 2: User found, dispatch existing data
      console.log(existingUser);
      dispatch(userAuthSet(existingUser));
      console.log("User already exists, loaded from DB.");
    } else {
      // Step 3: User not found, perform upsert
      const { data: upsertedData, error: upsertError } = await supabase
        .from("users")
        .upsert(userDetails, { onConflict: "uid" })
        .select()
        .single(); // get back the inserted row

      if (upsertError) {
        console.error("Supabase upsert error:", upsertError.message);
        return;
      }
      console.log(upsertedData);
      dispatch(userAuthSet(upsertedData));
      console.log("User inserted and loaded from DB.");
    }
  }

  return { userAuthenticate };
};

export default useUserDispatch;

import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { sessionSetAuthMode } from "@/controllers/slices/sessionSlice";
import { useUserAuth } from "@/hooks/useUserAuth";
import useUserDispatch from "@/hooks/useUserDispatch";
import { RootState } from "@/types/stateTypes";
import { extractUserDetails } from "@/utils/extractUserDetails";

interface SessionModeProps {
  children: React.ReactNode;
}

function SessionModeComponent({ children }: SessionModeProps) {
  const { user, isLoading } = useUserAuth();
  const userData = useSelector((state: RootState) => state.user, shallowEqual);
  const dispatch = useDispatch();

  const { userAuthenticate } = useUserDispatch();

  // Keep previous user id to avoid unnecessary effect calls
  const prevUserIdRef = useRef<string | null>(null);

  // Memoize userAuthenticate to avoid effect re-run if its identity changes
  const memoizedUserAuthenticate = useCallback(
    (details: ReturnType<typeof extractUserDetails>) => {
      userAuthenticate(details);
    },
    [userAuthenticate]
  );

  useEffect(() => {
    if (!isLoading) {
      const currentUserId = user?.uid || null;

      if (currentUserId !== prevUserIdRef.current) {
        prevUserIdRef.current = currentUserId;

        if (user) {
          dispatch(sessionSetAuthMode(true));
          
          const userDetails = extractUserDetails(user);
          memoizedUserAuthenticate(userDetails);
          console.log("[SessionMode] User logged in:", userDetails);
        } else {
          // User logged out or not logged in
          dispatch(sessionSetAuthMode(false));
          // Optionally clear user state or do cleanup here
          console.log("[SessionMode] User logged out or not authenticated");
        }
      }
    }
  }, [user, isLoading, dispatch, memoizedUserAuthenticate]);

  // Log updated user data only when it changes
  useEffect(() => {
    if (userData) {
      console.log("[SessionMode] Updated user data in Redux:", userData);
    }
  }, [userData]);

  return <>{children}</>;
}

// Use React.memo to avoid re-render if children prop doesn't change
const SessionMode = React.memo(SessionModeComponent);

export default SessionMode;

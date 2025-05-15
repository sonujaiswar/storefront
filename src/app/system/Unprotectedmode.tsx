import { RootState } from "@/types/stateTypes";
import { useSelector } from "react-redux";

export default function Unprotectedmode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isProtectedMode = useSelector(
    (state: RootState) => state.settings.isProtectedMode
  );
  return (
    <>
      {isProtectedMode === false && <h1>Unprotected Mode</h1>}
      {children}
    </>
  );
}

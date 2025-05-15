import { RootState } from "@/types/stateTypes";
import { useSelector } from "react-redux";

export default function Protectedmode({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isProtectedMode = useSelector(
    (state: RootState) => state.settings.isProtectedMode
  );
  return (
    <>
      {isProtectedMode && <h1>Protected Mode</h1>}
      {children}
    </>
  );
}

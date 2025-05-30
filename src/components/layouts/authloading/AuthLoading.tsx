import Common from "../common/Common";

export default function AuthLoading({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Common protectedMode={true}>{children}</Common>
    </>
  );
}

import Common from "@/components/layouts/common/Common";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Common>{children}</Common>
    </>
  );
}

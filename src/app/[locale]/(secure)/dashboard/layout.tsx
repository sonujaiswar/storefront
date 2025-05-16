import Common from "@/components/layouts/common/Common";

export default function Dashboardlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Common>{children}</Common>
    </>
  );
}

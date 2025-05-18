import Protectedmode from "@/app/system/Protectedmode";
import Common from "@/components/layouts/common/Common";

export default function Dashboardlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Protectedmode>
        <Common>{children}</Common>
      </Protectedmode>
    </>
  );
}

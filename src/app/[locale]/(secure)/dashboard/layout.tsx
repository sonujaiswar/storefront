import Protectedmode from "@/app/system/Protectedmode";
import Common from "@/components/layouts/common/Common";
import SecurePages from "@/components/layouts/common/SecurePages";

export default function Dashboardlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Protectedmode>
        <Common>
          {/* <SecurePages> */}
          {children}
          {/* </SecurePages> */}
        </Common>
      </Protectedmode>
    </>
  );
}

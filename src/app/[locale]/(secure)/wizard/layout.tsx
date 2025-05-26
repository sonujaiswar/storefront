import Protectedmode from "@/app/system/Protectedmode";
import SinglePage from "@/components/layouts/common/SinglePage";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Protectedmode>
        <SinglePage>{children}</SinglePage>
      </Protectedmode>
    </>
  );
}

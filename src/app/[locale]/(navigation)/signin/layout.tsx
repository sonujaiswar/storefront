import SinglePage from "@/components/layouts/common/SinglePage";

export default function SignInlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SinglePage>{children}</SinglePage>
    </>
  );
}

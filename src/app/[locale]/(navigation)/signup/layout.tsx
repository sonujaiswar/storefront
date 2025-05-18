import SinglePage from "@/components/layouts/common/SinglePage";

export default function signUplayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SinglePage>{children}</SinglePage>
    </>
  );
}

import SinglePage from "@/components/layouts/common/SinglePage";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SinglePage>{children}</SinglePage>
    </>
  );
}

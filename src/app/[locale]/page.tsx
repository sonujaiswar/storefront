import { useTranslations } from "next-intl";
import Common from "@/components/layouts/common/Common";
import Products from "@/components/ui/products/Products";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Common>
        <Products />
      </Common>
    </>
  );
}

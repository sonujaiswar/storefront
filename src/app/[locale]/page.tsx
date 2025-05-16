import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Typography } from "@mui/material";
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

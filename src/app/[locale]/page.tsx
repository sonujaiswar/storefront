import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Typography } from "@mui/material";
import Common from "@/components/layouts/common/Common";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Common>
        <h1>{t("title")}</h1>
        <Link href="/about">{t("about")}</Link>
      </Common>
    </>
  );
}

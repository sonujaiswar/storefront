import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Typography } from "@mui/material";
import Common from "@/components/layouts/common/Common";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Common>
        <Typography variant="brand">Attirebella</Typography>
        <Typography variant="h1">Attirebella</Typography>
        <Typography>Attirebella</Typography>
        <h1>{t("title")}</h1>
        <Link href="/about">{t("about")}</Link>
      </Common>
    </div>
  );
}

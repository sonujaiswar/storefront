import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FeaturedItemList({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: React.ReactNode;
}) {
  const t = useTranslations();
  return (
    <>
      <ListItemButton LinkComponent={Link} href={href}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={t(text)} />
      </ListItemButton>
    </>
  );
}

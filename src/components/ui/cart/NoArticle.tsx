import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useTranslations } from "next-intl";
import { NavigationRoutes } from "@/constants/NavigationRoutes";

export default function NoArticle() {
  const t = useTranslations("cartPage");
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ minHeight: "80vh" }}
      >
        <Typography variant="h4" gutterBottom component={"h1"}>
          {t("empty")}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {t("emptymessage")}
        </Typography>

        <Button
          component={Link}
          href={NavigationRoutes.homePage.url}
          variant="contained"
          sx={{ mt: 2 }}
          startIcon={<ShoppingBagIcon />}
        >
          {t("continuebutton")}
        </Button>
      </Box>
    </>
  );
}

import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { useTranslations } from "next-intl";

import EditNameAction from "./EditNameAction";
import EditDOBAction from "./EditDOBAction";
import EditGenderAction from "./EditGenderAction";
import BasicAction from "./BasicAction";

export default function Basic() {
  const t = useTranslations("profilePage");

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Grid container justifyContent="start" sx={{ mb: 2 }}>
          <Grid size={4} display="flex">
            <Avatar sx={{ width: 120, height: 120 }} />
            <Box
              sx={{
                ml: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Typography>{t("profilePicText")}</Typography>
              <Button variant="outlined" sx={{ width: 160 }}>
                {t("profilePicButtonTextAdd")}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="h6">{t("basicTitle")}</Typography>
        <Divider sx={{ my: 2 }} />
        <BasicAction />
      </Paper>
    </>
  );
}

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import ProfileRow from "./ProfileRow";
import DialogModel from "@/components/layouts/dialog/DialogModel";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dialogReset, dialogSetKey } from "@/controllers/slices/dialogSlice";
import { RootState } from "@/types/stateTypes";
import { languageSet } from "@/controllers/slices/languageSlice";
import { languagesSuported } from "@/utils/languagesSuported";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function EditLanguageAction() {
  const t = useTranslations("profilePage");
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);
  const [selectedLanguage, setLanguage] = React.useState("en-in");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale(); // Get the current locale using next-intl

  const handleLanguageChange = (locale: string) => {
    // Check if the current path contains the current locale
    const regex = /^\/(en-in|hi-in)/; // Adjust for other locales if needed
    const updatedPathname = pathname.replace(regex, `/${locale}`);

    // Only update the locale in the URL if the locale is different
    if (locale !== currentLocale) {
      router.push(updatedPathname);
    }
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(languageSet(selectedLanguage));
    handleLanguageChange(selectedLanguage);
    dispatch(dialogReset());
  };
  return (
    <>
      <DialogModel
        dialogTitle={t("basicFormEditLanguageTitle")}
        dialogKey="EditLanguage"
      >
        <Box component={"form"} onSubmit={handleSave}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                name="language"
                label={t("basicFormEditLanguage")}
                fullWidth
                required
                value={selectedLanguage}
                onChange={(e) => setLanguage(e.target.value)}
                margin="normal"
                select
              >
                <MenuItem value="en-in">
                  {t("basicFormEditLanguageMenu1")}
                </MenuItem>
                <MenuItem value="hi-in">
                  {t("basicFormEditLanguageMenu2")}
                </MenuItem>
              </TextField>
            </Grid>
            <Grid size={12} display="flex" justifyContent={"end"}>
              <Button type="submit" variant="contained">
                {t("basicFormEditLanguageButtonText")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogModel>

      <ProfileRow
        label={t("basicFormEditLanguage")}
        value={languagesSuported.find((l) => l.code === language)?.name || ""}
        onEdit={() => dispatch(dialogSetKey("EditLanguage"))}
        editLabel={t("basicFormEditLanguageLink")}
      />
    </>
  );
}

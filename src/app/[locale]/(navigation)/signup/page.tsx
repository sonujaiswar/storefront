import { Box, Button, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function signUpPage() {
  const t = useTranslations("signupPage");
  return (
    <>
      <Box mt={2} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4" align="center">
          {t("title")}
        </Typography>
        <Typography></Typography>
        <form>
          <TextField
            label="Username"
            name="username"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {t("buttonText")}
          </Button>
        </form>
        <Button variant="contained" LinkComponent={Link} href="/signin">
          {t("buttonTextSignIn")}
        </Button>
      </Box>
    </>
  );
}

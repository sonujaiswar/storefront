import { Container, Divider, Paper } from "@mui/material";
import Attirebella from "../brand/Attirebella";

export default function SinglePage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          minHeight: "100vh",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: "center",
          }}
        >
          <Attirebella />

          <Divider sx={{ mt: 2, width: "100%" }} />
          {children}
        </Paper>
      </Container>
    </>
  );
}

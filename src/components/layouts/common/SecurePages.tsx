import { Box, Paper } from "@mui/material";

export default function SecurePages({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Paper sx={{ p: 4 }}>{children}</Paper>
      </Box>
    </>
  );
}

"use client";
import { createTheme } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface PaletteOptions {
//     brand?: {
//       fontFamily: string;
//     };
//   }
// }

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-nunito)",

    brand: {
      fontFamily: "var(--font-rostema)",
      fontSize: "30px",
      color: "#FFFFFF",
    },
    h1: {
      fontFamily: "var(--font-playfair_display)",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "var(--font-playfair_display)",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-playfair_display)",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "var(--font-playfair_display)",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "var(--font-playfair_display)",
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        style: {
          fontWeight: "900",
          fontFamily: "var(--font-roboto)",
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#7B1113", // "#7B2B30",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

export default theme;

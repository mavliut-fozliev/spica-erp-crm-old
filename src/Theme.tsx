import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React, { ReactNode } from "react";

export default function Theme({ children }: { children: ReactNode }) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontWeight: "medium",
            textTransform: "none",
            padding: "0.2rem 0.4rem",
            margin: "0 4px",
            fontSize: "0.85rem",
            backgroundColor: "#fff",
            border: "1px solid rgb(35, 183, 229)",
            color: "rgb(35, 183, 229)",
            ":hover": {
              backgroundColor: "rgb(35, 183, 229)",
              color: "#fff",
              border: "1px solid rgb(35, 183, 229)",
            },
            ":disabled": {
              border: "1px solid rgb(214, 214, 214)",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none", // Remove the box shadow
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: "0.8rem",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

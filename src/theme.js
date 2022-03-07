import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    blue: {
      dark: "#12232E",
      medium: "#007CC7",
      light: "#4DA8DA",
      shadow: {
        dark: "#203647",
        light: "#EEFBFB",
      },
    },
    steel: "#5E807F",
  },
});

export default theme;

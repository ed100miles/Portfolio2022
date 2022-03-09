import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    blue: {
      dark: "#12232E",
      mediumDark: "#0E3A55",
      medium: "#09507B",
      mediumLight: "#1871A6",
      light: "#4DA8DA",
      shadow: {
        dark: "#203647",
        medium: "#8799A1",
        light: "#EEFBFB",
      },
    },
    steel: "#5E807F",
  },
});

export default theme;

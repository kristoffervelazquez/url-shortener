import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#66B2FF",
    },
    secondary: {
      main: "#4B5667",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#101418",
      paper: "#252525",
    },
  },
});

export default Theme;

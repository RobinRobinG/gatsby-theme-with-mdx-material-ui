import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#64b5f6",
      main: "#536DFE",
      dark: "#1976d2",
    },
    secondary: {
      light: "#F2F7F2",
      main: "#5EB1BF",
      dark: "#515052",
    },
    error: {
      main: "#EA5C5C",
    },
    Info: {
      light: "#8693AB",
      main: "#949FA6",
      dark: "#4C4B63",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 14,
      fontStyle: "italic",
    },
    body: {
      fontWeight: 500,
    },
  },
});

export default theme;

import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#64b5f6",
      main: "#6C63FF",
      dark: "#3F3D56",
    },
    secondary: {
      light: "#F2F7F2",
      main: "#D0CDE1",
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

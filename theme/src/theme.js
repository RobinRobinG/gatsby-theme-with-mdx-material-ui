import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9CC8F4",
      main: "#0774F2",
      dark: "#246EB9",
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
    background: {
      default: "#FCFDFF",
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
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       body: {
  //         backgroundImage:
  //           "url(https://source.unsplash.com/random/1024x768?sky)",
  //         backgroundRepeat: "no-repeat",
  //         backgroundPosition: "center center",
  //         backgroundSize: "cover",
  //         backgroundAttachment: "fixed",
  //         height: "100%",
  //       },
  //     },
  //   },
  // },
});

export default theme;

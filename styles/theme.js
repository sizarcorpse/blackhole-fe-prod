import { createMuiTheme } from "@material-ui/core/";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fafafa",
    },
    secondary: {
      main: "#d6d6d6",
    },
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {
      fontSize: "0.92em",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: 1,
    },
    h2: {
      fontSize: "1em",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: 1,
    },
    h3: {
      fontSize: "1.142em", // 16px
      letterSpacing: "0px",
      wordSpacing: "0px",
      lineHeight: "1",
      fontWeight: 400,
      fontStyle: "normal",
      fontVariant: "normal",
    },
    h4: {},
    h5: {},
    h6: {},
    body1: {},
    body2: {},
    subtitle1: {},
    subtitle2: {},
    button: {
      fontSize: "1em",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: 1,
      textTransform: "none",
    },
    caption: {},
    overline: {},
  },
});

theme.overrides = {
  MuiTooltip: {
    tooltip: {
      fontSize: 14,
      borderRadius: 15,
      position: "relative",
      top: -15,
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 960,
  //     lg: 1500,
  //     xl: 1600,
  //   },
  // },
};

theme.props = {
  // #action :
};

export default theme;

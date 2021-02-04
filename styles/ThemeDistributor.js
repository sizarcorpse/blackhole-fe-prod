export const ThemeDistributor = (theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.1em",
      height: "5px",
    },
    "*::-webkit-scrollbar-track": {
      // "-webkit-box-shadow": "inset 0 0 6px #1b262c",
      backgroundColor: "#000000",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#030303",
      outline: "1px solid #272727",
    },
  },

  try: {
    width: "100%",
    padding: 24,
    "& img": {
      width: "100%",
      height: "auto",
      justifySelf: "center",
      textAlign: "center",
    },
    "& figure": {
      width: "100%",
      margin: "auto",
    },
    "& p": {
      fontSize: "15px",
      letterSpacing: ".5px",

      fontWeight: "400",
      textDecoration: "none solid rgb(255, 255, 255)",
      fontStyle: "normal",
      fontVariant: "normal",
      color: "#f8f8f8",
    },
    "& a": {
      fontSize: "16px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "500",
      textDecoration: "none solid rgb(255, 255, 255)",
      fontStyle: "normal",
      fontVariant: "normal",
      color: "#6459ff",
    },
  },
});

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
});

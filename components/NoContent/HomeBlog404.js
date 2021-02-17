// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";

// #other :
import Lottie from "react-lottie";
import animationData from "utils/lottie/16294-404-space-error";

const useStyles = makeStyles({
  textBox: { position: "relative", bottom: 90 },
  text: {
    color: "#253138",
    fontFamily: "Ubuntu",
    fontSize: "1.5em",
    letterSpacing: -1.4,
    wordSpacing: 0,
    fontWeight: 400,
    textTransform: "capitalize",
    fontStyle: "normal",
    fontVariant: "normal",
    textAlign: "center",
  },
});

const HomeBlog404 = (props) => {
  const { classes } = props;

  const localClasses = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container components="main" className={localClasses.backgroundColor}>
      <Grid item xs={12}>
        <Box
          width={"100%"}
          display="flex"
          justifyContent="center"
          style={{ background: "#030305" }}
        >
          <Box
            height={640}
            width={700}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Lottie options={defaultOptions} height={280} width={520} />
            {/* <Box className={localClasses.textBox}>
              <Typography className={localClasses.text}>
                Nothing you looking for..
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                style={{ textAlign: "center" }}
              >
                stay safe
              </Typography>
            </Box> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(HomeBlog404);

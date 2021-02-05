// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :

// #validations :

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
// import Lottie from "react-lottie";
// import animationData from "utils/lottie/35920-search-system";

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

const NoContent = (props) => {
  const { classes } = props;

  const localClasses = useStyles();

  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };

  return (
    <Grid container components="main" className={localClasses.backgroundColor}>
      <Grid item xs={12}>
        <Box width={"100%"} display="flex" justifyContent="center">
          <Box
            height={500}
            width={600}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            {/* <Lottie options={defaultOptions} height={500} width={500} /> */}
            <Box className={localClasses.textBox}>
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
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(NoContent);

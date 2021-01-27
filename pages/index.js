// #next :
//import Head from "next/head";
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { getPortfolioShownInHome } from "actions/FetchPortfolio";

// #components :
import { PortfolioMini } from "components/Home";
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
import { Parallax, Background } from "react-parallax";

// #serverSideProps :

export async function getServerSideProps(context) {
  const homePortfolio = await getPortfolioShownInHome(context);

  return { props: { homePortfolio } };
}

const useStyles = makeStyles({
  root: { backgroundColor: "#000000" },
  parallaxBackground: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(245,244,244,0) 100%)",
  },
  mainContainer: { BackgroundColor: "#000000" },
});

const MyFunction = (props) => {
  const { classes, homePortfolio } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} xl={12} aria-label="background-cover">
        <Parallax bgImage={`wallhaven-28k9zx.png`} strength={500}>
          <Box
            height={900}
            width="100%"
            className={localClasses.parallaxBackground}
          ></Box>
        </Parallax>
      </Grid>

      <Grid container className={localClasses.mainContainer}>
        <Grid item xs={12} xl={12}>
          <PortfolioMini homePortfolio={homePortfolio} />
          <Box height={500} />
        </Grid>
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
)(MyFunction);

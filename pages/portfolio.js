// #next :
//import Head from "next/head";
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { getAllPortfolio } from "actions/FetchPortfolio";

// #components :
import { Portfolio } from "components/Portfolio";
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
  const portfolios = await getAllPortfolio(context);

  return { props: { portfolios } };
}

const useStyles = makeStyles({
  root: { backgroundColor: "#000000" },
  parallaxBackground: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(245,244,244,0) 100%)",
  },
  mainContainer: { BackgroundColor: "#000000" },
});

const PortfolioPage = (props) => {
  const { classes, portfolios } = props;

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
          <Box width="100%" display="flex">
            <Portfolio portfolios={portfolios} />
          </Box>
          <Box height={500} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PortfolioPage);

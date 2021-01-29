// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { getPortfolioByTag } from "actions/FetchPortfolio";
import { SCTypography } from "components/UI";
import { Tag } from "components/Tag";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Grid } from "@material-ui/core";

// #other :
import { Parallax, Background } from "react-parallax";

// #serverSideProps :

export async function getServerSideProps(context) {
  const portfolios = await getPortfolioByTag({ context });

  return {
    props: {
      // portfolios: portfolios.portfolios,
      portfolios: portfolios,
      // details: {
      //   name: portfolios.name,
      //   slug: portfolios.slug,
      //   cover: portfolios.cover,
      //   description: portfolios.desc,
      // },
    },
  };
}

const useStyles = makeStyles({
  root: { backgroundColor: "#000000" },
  parallaxBackground: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(245,244,244,0) 100%)",
  },
  mainContainer: { BackgroundColor: "#000000" },
});
const Tags = (props) => {
  const { classes, portfolios } = props;
  const localClasses = useStyles();

  return (
    <Grid container className={localClasses.root}>
      {/* <Grid item xs={12} xl={12} aria-label="background-cover">
        <Parallax bgImage={MakeUrls(details.cover)} strength={500}>
          <Box
            height={900}
            width="100%"
            className={localClasses.parallaxBackground}
          ></Box>
        </Parallax>
      </Grid> */}

      <Grid container className={localClasses.mainContainer}>
        <Grid item xs={12} xl={12}>
          <Box width="100%" display="flex">
            <Tag portfolios={portfolios} />
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
)(Tags);

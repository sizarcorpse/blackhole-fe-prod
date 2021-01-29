import { useState, useEffect } from "react";
// #next :
import getConfig from "next/config";
import { useRouter } from "next/router";
// import Link from 'next/link';
// import Image from 'next/image';
import useSWR from "swr";

// #contexts :
// #hooks :
import { MakeUrls } from "utils/MakeUrls";
import { FlexColumn } from "utils/FlexColumn";
// #components :
import { PortfolioCard } from "components/PortfolioCard";
import { SCTypography } from "components/UI";

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  CircularProgress,
  Button,
} from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";
// #other :
import Masonry from "react-masonry-css";
import { Parallax, Background } from "react-parallax";

const useStyles = makeStyles({
  root: { backgroundColor: "#000000" },
  parallaxBackground: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(245,244,244,0) 100%)",
  },
  mainContainer: { BackgroundColor: "#000000" },
});

const Tag = (props) => {
  const { classes, portfolios } = props;
  const { publicRuntimeConfig } = getConfig();
  const router = useRouter();
  const localClasses = useStyles();

  const [limit, setLimit] = useState(4);
  // #handlers : Infinity Scroll
  let tag = router.query.slug;
  let page = router.query.page;
  //   const {
  //     data,
  //     error,
  //     mutate,
  //     isValidating,
  //   } = useSWR(
  //     `${publicRuntimeConfig.ROOT_API_URL}/tags/${tag}?_page=${page}&_limit=${limit}`,
  //     { revalidateOnFocus: false, initialData: portfolios }
  //   );

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} xl={12} aria-label="background-cover" width="100%">
        <Parallax bgImage={MakeUrls(portfolios.cover)} strength={500}>
          <Box
            height={900}
            width="100%"
            className={localClasses.parallaxBackground}
          ></Box>
        </Parallax>
      </Grid>
      <Grid item xs={12}>
        <Box width="100%" display="flex">
          <Masonry
            breakpointCols={FlexColumn}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {portfolios.portfolios.map((portfolio, i) => (
              <Box key={i}>
                <PortfolioCard portfolio={portfolio} size="large" />
              </Box>
            ))}
          </Masonry>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          height={50}
          width="100%"
          display="flex"
          justifyContent="center"
          my={2}
        >
          <Button
            onClick={() =>
              router.push(`/portfolio/tags/${tag}?page=${+page + 1}`)
            }
            style={{ background: "red" }}
          >
            {portfolios.length === 0 ? (
              <SCTypography variant="h2" color="white">
                No More Post
              </SCTypography>
            ) : (
              <>
                <AutorenewIcon color="primary" /> {page}
              </>
            )}
          </Button>
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
)(Tag);

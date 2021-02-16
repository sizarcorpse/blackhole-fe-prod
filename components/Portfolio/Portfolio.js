// #next :
import getConfig from "next/config";
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
import { useSWRInfinite } from "swr";
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :
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

const Portfolio = (props) => {
  const { classes, portfolios } = props;
  const { publicRuntimeConfig } = getConfig();
  // #handlers : Infinity Scroll
  let items = 8;
  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) =>
      `${
        publicRuntimeConfig.ROOT_API_URL
      }/portfolios/page?_limit=${items}&_page=${index + 1}`,

    {
      revalidateOnFocus: false,
      initialData: portfolios,
    }
  );
  const concatPostsData = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < items);

  return (
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Box width="100%" display="flex">
          <Masonry
            breakpointCols={FlexColumn}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {concatPostsData.map((portfolio, i) => (
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
            onClick={() => {
              setSize(size + 1);
            }}
            disabled={isReachingEnd}
          >
            {isLoadingMore ? (
              <CircularProgress />
            ) : isReachingEnd ? (
              <SCTypography variant="h2" color="white">
                No More Post
              </SCTypography>
            ) : (
              <AutorenewIcon color="primary" />
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
)(Portfolio);

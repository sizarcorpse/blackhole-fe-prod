// #next :
import getConfig from "next/config";
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
import { useSWRInfinite } from "swr";
// #contexts :

// #hooks :
import { FlexColumn2 } from "utils/FlexColumn";
// #components :
import { SCTypography } from "components/UI";
import { BlogPostCard } from "components/BlogPostCard";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  CircularProgress,
  Button,
} from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";

// #other :
import Masonry from "react-masonry-css";

const useStyles = makeStyles({
  root: {},
});

const Blog = (props) => {
  const { classes, blogPosts } = props;
  const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  let items = 1;
  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) =>
      `${publicRuntimeConfig.ROOT_API_URL}/blogs/page?_limit=${items}&_page=${
        index + 1
      }`,

    {
      revalidateOnFocus: false,
      initialData: blogPosts,
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
      <Grid item xs={4}>
        <SCTypography variant="h2" color="white">
          SEARCH
        </SCTypography>
      </Grid>
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={12}>
            <SCTypography variant="h2" color="white">
              CATEGORY List
            </SCTypography>
          </Grid>
          <Grid item xs={12}>
            <Box width="100%">
              <Masonry
                breakpointCols={FlexColumn2}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column_blog"
              >
                {concatPostsData.map((post, i) => (
                  <Box key={i}>
                    <BlogPostCard post={post} />
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
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Blog);

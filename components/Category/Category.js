import { useState } from "react";
// #next :
import getConfig from "next/config";
import { useRouter } from "next/router";

import useSWR, { useSWRInfinite } from "swr";

// #contexts :
// #hooks :

import { FlexColumn2 } from "utils/FlexColumn";
// #components :
import { BlogPostCard } from "components/BlogPostCard";
import { CategoryList } from "components/CategoryList";
import { SCTypography } from "components/UI";
import { BlogSideBar } from "components/BlogSideBar";
import { Search } from "components/BlogSideBar";
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
  IconButton,
} from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import SortIcon from "@material-ui/icons/Sort";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
// #other :
import Masonry from "react-masonry-css";

const Category = (props) => {
  const { classes, categoryDetails, categoryList } = props;
  const { publicRuntimeConfig } = getConfig();
  const [items, setItem] = useState(2);
  const router = useRouter();

  // #handlers : Infinity Scroll
  let category = router.query.slug;

  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) =>
      `${
        publicRuntimeConfig.ROOT_API_URL
      }/categories/${category}/contents?_limit=${items}&_page=${index + 1}`,

    {
      revalidateOnFocus: false,
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
      {/* <Grid item xs={4}>
        <BlogSideBar />
      </Grid> */}
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              mb={1}
              mt={1}
              flexWrap="wrap"
            >
              <CategoryList categoryList={categoryList} />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              mb={2}
              mt={1}
              flexWrap="wrap"
            >
              <Search />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              display="flex"
              justifyContent="flex-end"
              mb={2}
              mt={1}
              flexWrap="wrap"
            >
              <IconButton>
                <SortIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <ViewColumnIcon style={{ color: "white" }} />
              </IconButton>
            </Box>
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
)(Category);

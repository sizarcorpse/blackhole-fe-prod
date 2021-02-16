// #next :
import Head from "next/head";
// import getConfig from "next/config";
import { useRouter } from "next/router";
// import Link from 'next/link';
// import useSWR, { useSWRInfinite } from "swr";
// #contexts :

// #hooks :
import { getSearchPage } from "actions/FetchPage";
import { getBlogPostsBySearch, getCategoryList } from "actions/FetchBlog";
import { FlexColumn2 } from "utils/FlexColumn";
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { BlogPostCard } from "components/BlogPostCard";
import { NoContent } from "components/NoContent";
import { BlogSideBar } from "components/BlogSideBar";
import { CategoryList } from "components/CategoryList";
import { Search } from "components/BlogSideBar";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  IconButton,
} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import SortIcon from "@material-ui/icons/Sort";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
// #other :
import Masonry from "react-masonry-css";
import { Parallax, Background } from "react-parallax";
import _ from "lodash";

// #serverSideProps :
// const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const searchPage = await getSearchPage({ context: context });
  const blogPosts = await getBlogPostsBySearch({
    context: context,
  });
  const categoryList = await getCategoryList({ context });
  return {
    props: {
      blogPosts,
      searchPage,
      categoryList,
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

const SearchPage = (props) => {
  const { classes, blogPosts, width, searchPage, categoryList } = props;
  const localClasses = useStyles();

  // * this code will be needed when i overwrite strapi default and make page and new route..
  //   let items = 4;
  //   const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
  //     (index) =>
  //       `${publicRuntimeConfig.ROOT_API_URL}/posts/page?_limit=${items}&_page=${
  //         index + 1
  //       }`,
  //     {
  //       revalidateOnFocus: false,
  //       initialData: posts,
  //     }
  //   );
  //   const allComments = data ? [].concat(...data) : [];
  //   const isLoadingInitialData = !data && !error;
  //   const isLoadingMore =
  //     isLoadingInitialData ||
  //     (size > 0 && data && typeof data[size - 1] === "undefined");
  //   const isEmpty = data?.[0]?.length === 0;
  //   const isReachingEnd =
  //     isEmpty || (data && data[data.length - 1]?.length < items);

  return (
    <Grid container components="main" className={localClasses.root}>
      <Head>
        <title>
          This is a personal blog website site. Developed by sizarcorpse.
        </title>
        <meta
          name="description"
          content="This is a personal blog website site. Developed by sizarcorpse. Developer used Strapi as Headless cms, Nextjs as front-end, Vercel as cloud platform and mongodb as database"
        />
      </Head>

      <Grid item xs={12} xl={12} aria-label="background-cover">
        <Parallax bgImage={MakeUrls(searchPage.cover)} strength={500}>
          <Box
            height={500}
            width="100%"
            className={localClasses.parallaxBackground}
          ></Box>
        </Parallax>
      </Grid>

      <Grid container className={localClasses.mainContainer}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container>
            {/* <Grid item xs={4}>
              <Box width="100%">
                <BlogSideBar />
              </Box>
            </Grid> */}
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    mb={6}
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
                  {blogPosts && blogPosts.length !== 0 ? (
                    <Box width="100%">
                      <Masonry
                        breakpointCols={FlexColumn2}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column_blog"
                      >
                        {blogPosts.map((post, i) => (
                          <Box key={i}>
                            <BlogPostCard post={post} />
                          </Box>
                        ))}
                      </Masonry>
                    </Box>
                  ) : (
                    <NoContent />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(SearchPage)
);

// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// #hooks :
import { getAllBlogPosts, getCategoryList } from "actions/FetchBlog";
import { getBlogPage } from "actions/FetchPage";
import { MakeUrls } from "utils/MakeUrls";

// #components :
import { Blog } from "components/Blog";
import { BlogSideBar } from "components/BlogSideBar";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Grid } from "@material-ui/core";

// #other :
import { Parallax, Background } from "react-parallax";

export async function getServerSideProps(context) {
  const page = 1;
  const limit = 4;
  const blogPage = await getBlogPage(context);
  const response = await getAllBlogPosts({ context, page, limit });
  const responseList = await getCategoryList({ context });

  return {
    props: { blogPosts: response, categoryList: responseList, blogPage },
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

const BlogPage = (props) => {
  const { classes, blogPosts, categoryList, blogPage } = props;
  const localClasses = useStyles();

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} xl={12} aria-label="background-cover">
        <Parallax bgImage={MakeUrls(blogPage.cover)} strength={500}>
          <Box
            height={500}
            width="100%"
            className={localClasses.parallaxBackground}
          ></Box>
        </Parallax>
      </Grid>

      <Grid container className={localClasses.mainContainer}>
        <Grid item xl={2} lg={1} md={false} sm={false} xs={false} />
        <Grid item xl={8} lg={10} md={12} sm={12} xs={12}>
          <Blog
            blogPosts={blogPosts}
            categoryList={categoryList}
            BlogSideBar={BlogSideBar}
          />
        </Grid>
        <Grid item xl={2} lg={1} md={false} sm={false} xs={false} />
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
)(BlogPage);

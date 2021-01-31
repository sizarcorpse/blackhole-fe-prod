// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// #hooks :
import { getAllBlogPosts } from "actions/FetchBlog";
// #components :
import { Blog } from "components/Blog";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Grid } from "@material-ui/core";

// #other :
import { Parallax, Background } from "react-parallax";

export async function getServerSideProps(context) {
  const page = 1;
  const limit = 1;
  const response = await getAllBlogPosts({ context, page, limit });
  const responseList = await getCategoryList({ context });

  return { props: { blogPosts: response, categoryList: responseList } };
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
  const { classes, blogPosts, categoryList } = props;
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
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Blog blogPosts={blogPosts} categoryList={categoryList} />
        </Grid>
        <Grid item xs={2} />
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

// #next :

// #contexts :

// #hooks :
import { getASingleBlogPost } from "actions/FetchBlog";
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { BlogPostView, BlogPostHeader } from "components/BlogPostView";
import { CreateReview } from "components/PhotoView";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Grid, Box } from "@material-ui/core";

// #other :
import { Parallax, Background } from "react-parallax";

// #serverSideProps :
export async function getServerSideProps(context) {
  const response = await getASingleBlogPost({ context });

  return { props: { blogPost: response } };
}

const useStyles = makeStyles({
  root: { backgroundColor: "#000000" },
  parallaxBackground: {
    position: "relative",
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(245,244,244,0) 100%)",
  },
  mainContainer: { BackgroundColor: "#000000" },
  header: {
    position: "absolute",
    bottom: 0,
    color: "#dfdfdf",
    width: "100%",
  },
});

const BlogPost = (props) => {
  const { classes, blogPost } = props;
  const localClasses = useStyles();

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} xl={12} aria-label="background-cover">
        <Parallax bgImage={MakeUrls(blogPost.cover)} strength={500}>
          <Box
            height={600}
            width="100%"
            className={localClasses.parallaxBackground}
          >
            <Box className={localClasses.header}>
              <BlogPostHeader blogPost={blogPost} />
            </Box>
          </Box>
        </Parallax>
      </Grid>

      <Grid container className={localClasses.mainContainer}>
        <Grid item xl={2} lg={2} md={1} sm={false} xs={false} />
        <Grid item xl={8} lg={8} md={10} sm={12} xs={12}>
          <BlogPostView content={blogPost.content} />
          <CreateReview />
        </Grid>
        <Grid item xl={2} lg={2} md={1} sm={false} xs={false} />
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
)(BlogPost);

// #next :

// import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image";
// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { SCTypography } from "components/UI";
import BlogCardMedia from "./blogCardMedia";
import BlogCardTitle from "./blogCardTitle";
import BlogCardCategory from "./blogCardCategory";
import BlogCardDetails from "./BlogCardDetails";
import BlogCardFooter from "./BlogCardFooter";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: { border: "1px solid white", margin: 8, maxWidth: 420 },
});

const BlogPostCard = (props) => {
  const { classes, post } = props;

  const localClasses = useStyles();

  return (
    <Box aria-label="single-card" className={localClasses.root}>
      <BlogCardMedia cover={post.cover} slug={post.slug} />
      <Box px={3} my={3}>
        <BlogCardTitle
          title={post.title}
          slug={post.slug}
          createdAt={post.createdAt}
        />
        <BlogCardCategory categories={post.categories} />
        <BlogCardDetails content={post.content} />
        <BlogCardFooter
          author={post.author}
          commentsCount={post.commentsCount}
        />
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BlogPostCard);

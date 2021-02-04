// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { SCTypography } from "components/UI";
import { CategoryList } from "components/CategoryList";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Grid, Avatar } from "@material-ui/core";

// #other :
import { formatDistanceToNow, format } from "date-fns";
const useStyles = makeStyles({
  root: {},
});

const BlogPostHeader = (props) => {
  const { classes, blogPost } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Grid container>
      <Grid item xl={2} lg={2} md={1} sm={false} xs={false} />
      <Grid item xl={8} lg={8} md={10} sm={12} xs={12}>
        <Box aria-label="header-area" p={3}>
          <Box aria-label="title">
            <SCTypography
              variant="h2"
              fontSize={42}
              fontWeight={500}
              color="white"
              lineHeight={1}
            >
              {blogPost.title}
            </SCTypography>
          </Box>
          <Box
            aria-label="category"
            display="flex"
            justifyContent="flex-start"
            flexWrap="wrap"
          >
            <CategoryList categoryList={blogPost.categories} />
          </Box>

          <Box aria-label="author" my={1} display="flex" alignItems="center">
            <Box aria-label="avatar">
              <Avatar>
                {!blogPost.author || !blogPost.author.photo ? (
                  "x"
                ) : (
                  <Image
                    src={MakeUrls(blogPost.author.photo)}
                    height={60}
                    width={60}
                    objectFit="cover"
                  />
                )}
              </Avatar>
            </Box>

            <Box aria-label="username-date" mx={1}>
              <Box aria-label="username">
                <SCTypography
                  variant="h2"
                  fontSize={18}
                  fontWeight={500}
                  color="white"
                >
                  {!blogPost.author ? "Anonymous " : blogPost.author.username}
                </SCTypography>
              </Box>
              <Box aria-label="date">
                <SCTypography variant="h2" fontSize={12} color="white">
                  {format(new Date(blogPost.createdAt), "k:m, MMMM d")}
                </SCTypography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xl={2} lg={2} md={1} sm={false} xs={false} />
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BlogPostHeader);

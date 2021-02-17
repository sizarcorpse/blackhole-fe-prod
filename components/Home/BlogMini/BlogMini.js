// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :
import { SCTypography } from "components/UI";
import { BlogPostCard } from "components/BlogPostCard";
import { HomeBlog404 } from "components/NoContent";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  withWidth,
} from "@material-ui/core";

// #other :
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const useStyles = makeStyles({
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    margin: "auto",
    padding: "",
  },
});

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);
const BlogMini = (props) => {
  const { classes, homeBlog: Blog, width } = props;

  const localClasses = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box width="100%">
          <Box
            aria-label="head"
            className={localClasses.details}
            width={{ xs: "100%", sm: "70%", md: "60%", lg: "50%", xl: "40%" }}
          >
            <SCTypography fontSize={42} fontWeight={700} color="white">
              Recent Blogs
            </SCTypography>
            <SCTypography
              fontSize={14}
              fontWeight={400}
              color="white"
              whiteSpace="pre-line"
              textAlign="center"
            >
              A black hole is a region of spacetime where gravity is so strong
              that nothing—no particles or even electromagnetic radiation such
              as light—can escape from it.The theory of general relativity
              predicts that a sufficiently compact mass can deform spacetime to
              form a black hole
            </SCTypography>
          </Box>

          {!Blog || Blog.length === 0 ? (
            <Box width="100%" display="flex" my={2} height={640}>
              <HomeBlog404 />
            </Box>
          ) : (
            <Box width="100%" display="flex" minWidth={1920} my={2}>
              <Swiper
                spaceBetween={0}
                slidesPerView={width === "xs" ? 1 : 2}
                direction="horizontal"
                mousewheel
              >
                {Blog.map((post, i) => (
                  <SwiperSlide key={i}>
                    <BlogPostCard post={post} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      //   ...(theme)
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(BlogMini)
);

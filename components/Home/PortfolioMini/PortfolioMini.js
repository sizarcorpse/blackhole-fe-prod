// #hooks :
import { MakeUrls } from "utils/MakeUrls";

// #components :
import { SCTypography } from "components/UI";
import { PortfolioCard } from "components/PortfolioCard";
import { HomePortfolio404 } from "components/NoContent";
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
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
// #other :
import Masonry from "react-masonry-css";
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

const PortfolioMini = (props) => {
  const { classes, width, homePortfolio: portfolios } = props;

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
              Recent Works
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

          {!portfolios || portfolios.length === 0 ? (
            <Box width="100%" display="flex" my={2} height={640}>
              <HomePortfolio404 />
            </Box>
          ) : (
            <Box width="100%" display="flex" minWidth={1920} my={2}>
              <Swiper
                spaceBetween={0}
                slidesPerView={width === "xs" ? 1 : 4}
                direction="horizontal"
                mousewheel
                pagination={{ dynamicBullets: true }}
              >
                {portfolios.map((portfolio, i) => (
                  <SwiperSlide key={i}>
                    <PortfolioCard portfolio={portfolio} size="large" />
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
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(PortfolioMini)
);

// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
import Link from "next/link";
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :

// #components :
import { SCTypography } from "components/UI";
import MobileNav from "./MobileNav";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Box,
  Slide,
  Grid,
  IconButton,
  withWidth,
} from "@material-ui/core";
import NightsStayIcon from "@material-ui/icons/NightsStay";
// #other :

const useStyles = makeStyles({
  nav: {
    background: "transparent",
  },
});

const Nav = (props) => {
  const { classes, navigation, width } = props;

  const trigger = useScrollTrigger();
  const localClasses = useStyles();

  return (
    <>
      <CssBaseline />
      <Slide in={!trigger}>
        <AppBar className={localClasses.nav} elevation={0}>
          <Toolbar>
            <Grid container>
              <Grid item xl={2} lg={2} md={1} sm={false} xs={false} />
              <Grid item xl={8} lg={8} md={10} sm={12} xs={12}>
                <Box
                  aria-label="main-nav-area"
                  display="flex"
                  width={{ lg: "100%" }}
                  alignItems="center"
                  flexDirection={
                    width === "sm" || width === "xs" ? "column" : "row"
                  }
                >
                  <Box
                    aria-label="logo-website-name"
                    display="flex"
                    alignItems="center"
                    flexGrow={1}
                    my={{ xs: 2 }}
                  >
                    <Box aria-label="logo">
                      <IconButton>
                        <NightsStayIcon color="primary" fontSize="large" />
                      </IconButton>
                    </Box>
                    <Box aria-label="website-name">
                      <SCTypography
                        variant="h2"
                        color="white"
                        fontVariant="small-caps"
                        fontWeight={700}
                        fontSize={30}
                      >
                        Black Hole
                      </SCTypography>
                    </Box>
                  </Box>

                  <Box
                    width={
                      width === "sm" || width === "xs" ? "100%" : undefined
                    }
                    display="flex"
                    justifyContent="flex-end"
                  >
                    {width !== "xs" && width !== "sm" ? (
                      <Box
                        aria-label="navigation-area"
                        display="flex"
                        alignItems="center"
                        width="100%"
                      >
                        {navigation.main.map((nav, i) => (
                          <Link href={`/${nav.slug}`} key={i}>
                            <Box aria-label="nav-item" mx={2}>
                              <SCTypography
                                variant="h3"
                                fontSize={18}
                                color="white"
                                fontWeight={500}
                              >
                                {nav.name}
                              </SCTypography>
                            </Box>
                          </Link>
                        ))}
                      </Box>
                    ) : (
                      <MobileNav navigation={navigation.main} />
                    )}
                  </Box>
                </Box>
              </Grid>

              <Grid item xl={2} lg={2} md={1} sm={false} xs={false} />
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Nav)
);

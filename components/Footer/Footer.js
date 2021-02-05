// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
import Link from "next/link";
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :
import { MakeUrls } from "utils/MakeUrls";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  Divider,
  Typography,
  IconButton,
  withWidth,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
// #other :
import { Parallax, Background } from "react-parallax";

const useStyles = makeStyles({
  root: { backgroundColor: "#000000" },
  parallaxBackground: {
    display: "flex",
    alignItems: "flex-end",
    background:
      "linear-gradient(180deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 70%, rgba(242,242,242,0) 100%)",
  },
  mainContainer: { BackgroundColor: "#000000" },
  iron: {
    fontSize: 22,
    margin: "auto 16px",
    color: "#f8f8f8",
  },
  ironSingle: {
    fontSize: 20,
    color: "#f8f8f8",
  },
  neckText: {
    fontSize: 13,
    fontWeight: 400,
    fontStyle: "normal",
    color: "#f8f8f8",
    margin: 8,
  },
  bg: { backgroundColor: "transplant" },
});

const Footer = (props) => {
  const { classes, footer, width } = props;
  const localClasses = useStyles();

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} xl={12} aria-label="background-cover">
        <Parallax bgImage={MakeUrls(footer.cover)} strength={500}>
          <Box
            height={500}
            width="100%"
            className={localClasses.parallaxBackground}
          >
            <Box width="100%" aria-label="content">
              <Grid container className={localClasses.bg}>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  style={{ marginTop: 24, marginBottom: 40 }}
                >
                  <Box
                    display="flex"
                    mx={width !== "xs" ? 10 : 1}
                    flexDirection={width !== "xs" ? "row" : "column"}
                    className={localClasses.bg}
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      flexGrow={1}
                      margin="auto"
                    >
                      <Typography className={localClasses.neckText}>
                        💀 2021, SizarCorpse
                      </Typography>
                      <Link href="/terms">
                        <Typography
                          className={localClasses.neckText}
                          style={{ cursor: "pointer" }}
                        >
                          {" "}
                          Terms & Conditions
                        </Typography>
                      </Link>
                      <Link href="/privacy">
                        <Typography
                          className={localClasses.neckText}
                          style={{ cursor: "pointer" }}
                        >
                          {" "}
                          Privacy Policy
                        </Typography>
                      </Link>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="row"
                      mx={width !== "xs" ? 0 : "auto"}
                    >
                      <Link
                        href="https://www.facebook.com/cj.sizar/"
                        passHref={true}
                      >
                        <a target="_blank">
                          <IconButton>
                            <FacebookIcon className={localClasses.ironSingle} />
                          </IconButton>{" "}
                        </a>
                      </Link>

                      <Link
                        href="https://github.com/sizarcorpse"
                        passHref={true}
                      >
                        <a target="_blank">
                          <IconButton>
                            <GitHubIcon className={localClasses.ironSingle} />
                          </IconButton>{" "}
                        </a>
                      </Link>
                      <Link
                        href="https://twitter.com/sizarcorpse"
                        passHref={true}
                      >
                        <a target="_blank">
                          <IconButton>
                            <TwitterIcon className={localClasses.ironSingle} />
                          </IconButton>{" "}
                        </a>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/ramizimran/"
                        passHref={true}
                      >
                        <a target="_blank">
                          <IconButton>
                            <LinkedInIcon className={localClasses.ironSingle} />
                          </IconButton>{" "}
                        </a>
                      </Link>
                      <Link
                        href="https://sizarcorpse.netlify.app/"
                        passHref={true}
                      >
                        <a target="_blank">
                          <IconButton>
                            <LanguageIcon className={localClasses.ironSingle} />
                          </IconButton>{" "}
                        </a>
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Parallax>
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
  )(Footer)
);

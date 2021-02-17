// #hooks :
import { getAboutPage } from "actions/FetchPage";
import { MakeUrls } from "utils/MakeUrls";

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Typography,
  withWidth,
} from "@material-ui/core";

// #other :
import { Parallax, Background } from "react-parallax";

export async function getServerSideProps(context) {
  const aboutPage = await getAboutPage(context);

  return {
    props: { aboutPage },
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

const AboutPage = (props) => {
  const { classes, width, aboutPage } = props;
  const localClasses = useStyles();

  console.log(aboutPage.cover);
  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} aria-label="background-cover">
        <Parallax bgImage={MakeUrls(aboutPage.cover)} strength={500}>
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
          <p>hi</p>
        </Grid>
        <Grid item xl={2} lg={1} md={false} sm={false} xs={false} />
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
  )(AboutPage)
);

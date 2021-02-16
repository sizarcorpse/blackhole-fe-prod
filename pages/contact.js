// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

import { getContactPage } from "actions/FetchPage";
import { MakeUrls } from "utils/MakeUrls";

// #components :
import { Contact } from "components/Contact";
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
  const contactPage = await getContactPage(context);

  return {
    props: { contactPage },
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

const ContactPage = (props) => {
  const { classes, width, contactPage } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} aria-label="background-cover">
        <Parallax bgImage={MakeUrls(contactPage.cover)} strength={500}>
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
          <Contact />
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
  )(ContactPage)
);

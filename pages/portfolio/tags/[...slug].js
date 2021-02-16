// #next :

// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';

// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { getTagDetails, getTagList } from "actions/FetchPortfolio";
import { Tag } from "components/Tag";
import { TagList } from "components/TagList";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Grid } from "@material-ui/core";

// #other :
import { Parallax, Background } from "react-parallax";
import { SCTypography } from "components/UI";

// #serverSideProps :

export async function getServerSideProps(context) {
  const response = await getTagDetails({ context });
  const responseList = await getTagList({ context });

  return {
    props: {
      tagDetails: response,
      tagList: responseList,
    },
  };
}

const useStyles = makeStyles({
  root: { backgroundColor: "#000000" },
  parallaxBackground: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(245,244,244,0) 100%)",
  },
  mainContainer: { BackgroundColor: "#000000" },

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
const Tags = (props) => {
  const { classes, tagDetails, tagList } = props;
  const localClasses = useStyles();

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} xl={12} aria-label="background-cover">
        <Parallax bgImage={MakeUrls(tagDetails.cover)} strength={500}>
          <Box
            height={600}
            width="100%"
            className={localClasses.parallaxBackground}
          >
            <Box
              className={localClasses.details}
              width={{ xs: "100%", sm: "70%", md: "60%", lg: "50%", xl: "40%" }}
            >
              <SCTypography fontSize={42} fontWeight={700} color="white">
                {tagDetails.name}
              </SCTypography>
              <SCTypography
                fontSize={14}
                fontWeight={400}
                color="white"
                whiteSpace="pre-line"
                textAlign="center"
              >
                {tagDetails.description}
              </SCTypography>
            </Box>
          </Box>
        </Parallax>
      </Grid>

      <Grid container className={localClasses.mainContainer}>
        <Grid item xs={12} xl={12}>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            mb={6}
            flexWrap="wrap"
          >
            <TagList tagList={tagList} />
          </Box>
        </Grid>
        <Grid item xs={12} xl={12}>
          <Box width="100%" display="flex" minHeight="600">
            <Tag tagDetails={tagDetails} />
          </Box>
          <Box height={500} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Tags);

// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";
import { getCategoryDetails, getCategoryList } from "actions/FetchBlog";

// #components :
import { Category } from "components/Category";
import { CategoryList } from "components/CategoryList";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Grid } from "@material-ui/core";
import { SCTypography } from "components/UI";
// #other :
import { Parallax, Background } from "react-parallax";

export async function getServerSideProps(context) {
  const response = await getCategoryDetails({ context });
  const responseList = await getCategoryList({ context });

  return {
    props: {
      categoryDetails: response,
      categoryList: responseList,
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
const Categories = (props) => {
  const { classes, categoryDetails, categoryList } = props;
  const localClasses = useStyles();

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} xl={12} aria-label="background-cover">
        <Parallax bgImage={MakeUrls(categoryDetails.cover)} strength={500}>
          <Box
            height={500}
            width="100%"
            className={localClasses.parallaxBackground}
          >
            <Box
              className={localClasses.details}
              width={{ xs: "100%", sm: "70%", md: "60%", lg: "50%", xl: "40%" }}
            >
              <SCTypography fontSize={42} fontWeight={700} color="white">
                {categoryDetails.name}
              </SCTypography>
              <SCTypography
                fontSize={14}
                fontWeight={400}
                color="white"
                whiteSpace="pre-line"
                textAlign="center"
              >
                {categoryDetails.description}
              </SCTypography>
            </Box>
          </Box>
        </Parallax>
      </Grid>

      <Grid container className={localClasses.mainContainer}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Category
            categoryList={categoryList}
            categoryDetails={categoryDetails}
          />
        </Grid>
        <Grid item xs={2} />
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
)(Categories);

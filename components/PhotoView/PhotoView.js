// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// #hooks :

// #components :
import { SCTypography } from "components/UI";
import { MakeUrls } from "utils/MakeUrls";
import PhotoTags from "./PhotoTags";
import PhotoDetails from "./PhotoDetails";

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Card,
  Box,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
// #other :

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    background: "black",
    overflow: "auto",
    alignItems: "stretch",
  },
});

const PhotoView = (props) => {
  const { classes, portfolio, handlePhotoViewClose } = props;

  const localClasses = useStyles();

  return (
    <Box className={localClasses.root}>
      <Grid container>
        <Grid item xs={12} style={{ height: 50 }}>
          <Box
            width="100%"
            height={50}
            display="flex"
            justifyContent="flex-end"
            border={1}
          >
            <IconButton
              color="primary"
              onClick={() => {
                handlePhotoViewClose(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xl={8} lg={8} md={7} sm={12} xs={12}>
          <Box width="100%">
            <Box
              aria-label="photo-view"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Image
                src={MakeUrls(portfolio.photo)}
                height={
                  portfolio.photo.height > portfolio.photo.width ? 800 : 700
                }
                width={
                  portfolio.photo.width < portfolio.photo.height ? 533 : 1200
                }
                objectFit="cover"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xl={4} lg={4} md={5} sm={12} xs={12}>
          <Box aria-label="details" width="100%" px={3}>
            <Box aria-label="tags" mb={2} display="flex">
              <PhotoDetails
                caption={portfolio.caption}
                description={portfolio.description}
              />
            </Box>
            <Box aria-label="tags" mb={2} display="flex">
              <PhotoTags
                tags={portfolio.tags}
                handlePhotoViewClose={handlePhotoViewClose}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PhotoView);

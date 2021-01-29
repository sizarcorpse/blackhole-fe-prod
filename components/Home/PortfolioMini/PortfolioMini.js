// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { SCTypography } from "components/UI";
import { PortfolioCard } from "components/PortfolioCard";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
// #other :

const useStyles = makeStyles({
  root: {},
});

const PortfolioMini = (props) => {
  const { classes, homePortfolio: portfolios } = props;

  const localClasses = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box width="100%">
          <Box
            aria-label="head"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Box aria-label="logo" my={3}>
              <PhotoCameraIcon color="primary" fontSize="large" />
            </Box>
            <Box aria-label="name">
              <SCTypography
                variant="h2"
                color="white"
                fontVariant="small-caps"
                fontWeight={700}
                fontSize={50}
              >
                Recent Works
              </SCTypography>
            </Box>
            <Box aria-label="desc" my={1}>
              <SCTypography variant="h2" color="white">
                The only way to get rid of a temptation is to yield to it. Go
                for it black hole!
              </SCTypography>
            </Box>
          </Box>
          <Box
            aria-label="photos"
            height={700}
            maxHeight={700}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            style={{
              overflow: "auto",
              scrollDirection: "horizontal",
            }}
          >
            {portfolios.map((portfolio, i) => (
              <PortfolioCard portfolio={portfolio} key={i} size={"large"} />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PortfolioMini);

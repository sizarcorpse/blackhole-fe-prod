// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :
import { FlexColumn } from "utils/FlexColumn";
// #components :
import { PortfolioCard } from "components/PortfolioCard";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Grid } from "@material-ui/core";

// #other :
import Masonry from "react-masonry-css";

const useStyles = makeStyles({
  root: {},
});

const Portfolio = (props) => {
  const { classes, portfolios } = props;

  const localClasses = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Box width="100%" display="flex">
          <Masonry
            breakpointCols={FlexColumn}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {portfolios.map((portfolio, i) => (
              <Box key={i}>
                <PortfolioCard portfolio={portfolio} size="large" />
              </Box>
            ))}
          </Masonry>
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
)(Portfolio);

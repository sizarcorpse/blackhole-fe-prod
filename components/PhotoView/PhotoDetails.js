// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :

// #components :
import { SCTypography } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";

// #other :

const useStyles = makeStyles({});

const PhotoTags = (props) => {
  const { classes, caption, description } = props;
  const localClasses = useStyles();

  return (
    <Box>
      <Box aria-label="name" mb={2}>
        <SCTypography variant="h2" fontSize={32} fontWeight={600} color="white">
          {caption}
        </SCTypography>
      </Box>
      <Box aria-label="desc" mb={2}>
        <SCTypography variant="h2" fontSize={16} fontWeight={400} color="white">
          {description}
        </SCTypography>
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PhotoTags);

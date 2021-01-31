// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :
import { SCTypography } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Avatar } from "@material-ui/core";

// #other :
import { formatDistanceToNow } from "date-fns";

const useStyles = makeStyles({
  avatar: { borderRadius: 0, height: 40, width: 40 },
});

const PhotoReviews = (props) => {
  const { classes, reviews } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Box aria-label="main-area" style={{ background: "#030305" }} p={3}>
      {reviews.map((review, i) => (
        <Box aria-label="single-review" key={i} display="flex" mb={2}>
          <Box aria-label="avatar">
            <Avatar className={localClasses.avatar}>
              {review.reviewer[0]}
            </Avatar>
          </Box>
          <Box aria-label="body" display="flex" flexDirection="column" mx={2}>
            <Box aria-label="name" alignItems="center">
              <SCTypography
                variant="h2"
                color="white"
                fontSize={20}
                fontWeight={500}
              >
                {review.reviewer}
              </SCTypography>
            </Box>
            <Box aria-label="date" alignItems="center" mb={1}>
              <SCTypography
                variant="h2"
                color="white"
                fontSize={12}
                fontWeight={400}
              >
                {formatDistanceToNow(new Date(review.createdAt))} ago
              </SCTypography>
            </Box>
            <Box aria-label="content">
              <SCTypography variant="h2" color="white">
                {review.review}
              </SCTypography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PhotoReviews);

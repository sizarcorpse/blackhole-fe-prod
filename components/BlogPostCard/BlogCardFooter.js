// #next :

// import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image";
// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { SCTypography } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Divider,
  Avatar,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  avatar: { marginRight: 16 },
});

const BlogCardFooter = (props) => {
  const { classes, commentsCount, author } = props;

  const localClasses = useStyles();

  return (
    <Box
      aria-label="card-footer"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my={3}
    >
      <Box aria-label="author" display="flex" alignItems="center" flexGrow={1}>
        <Avatar className={localClasses.avatar}>
          <Image
            src={MakeUrls(author.photo)}
            height={40}
            width={40}
            objectFit="cover"
          />
        </Avatar>

        <SCTypography variant="h2" fontSize={18} fontWeight={400} color="white">
          {author.username}
        </SCTypography>
      </Box>

      <Box aria-label="comment">
        <SCTypography variant="h2" fontSize={18} fontWeight={400} color="white">
          Comments {commentsCount}
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
)(BlogCardFooter);

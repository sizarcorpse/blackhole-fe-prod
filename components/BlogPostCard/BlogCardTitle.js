// #next :

import Link from "next/link";

// #contexts :

// #hooks :

// #components :
import { SCTypography } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box } from "@material-ui/core";

// #other :
import { formatDistanceToNow } from "date-fns";
const BlogCardTitle = (props) => {
  const { classes, title, slug, createdAt } = props;

  return (
    <Link href={`/blog/${slug}`}>
      <a style={{ textDecoration: "none" }}>
        <Box aria-label="card-media">
          <SCTypography
            variant="h2"
            color="white"
            fontSize={18}
            fontWeight={500}
            textAlign="justify"
            textJustify="inter-word"
          >
            {title}
          </SCTypography>
          <SCTypography variant="h2" fontSize={12} color="grey">
            Created {formatDistanceToNow(new Date(createdAt))} ago
          </SCTypography>
        </Box>
      </a>
    </Link>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BlogCardTitle);

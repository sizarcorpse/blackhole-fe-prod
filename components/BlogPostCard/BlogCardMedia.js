// #next :

import Link from "next/link";
import Image from "next/image";
// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";

// #other :

const BlogCardMedia = (props) => {
  const { classes, cover, slug } = props;

  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <Box aria-label="single-card">
          <Box aria-label="card-media">
            <Image
              src={MakeUrls(cover)}
              height={280}
              width={425}
              objectFit="cover"
            />
          </Box>
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
)(BlogCardMedia);

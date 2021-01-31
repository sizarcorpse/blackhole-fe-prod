// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
import Link from "next/link";
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
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
    cursor: "pointer",
  },
});

const PhotoTags = (props) => {
  const { classes, tags, handlePhotoViewClose } = props;
  const localClasses = useStyles();

  const hoverProps = {
    base: { backgroundColor: "#f8f8f8", color: "#000000" },
    hover: { backgroundColor: "#000000", color: "#f8f8f8" },
  };

  return (
    <Box display="flex" flexWrap="wrap">
      {tags.map((tag, i) => (
        <Link href={`/portfolio/tags/${tag.slug}`} key={i}>
          <Box
            onClick={() => {
              handlePhotoViewClose(false);
            }}
          >
            <motion.div
              aria-label="tag-name"
              className={localClasses.root}
              initial="base"
              whileHover="hover"
              variants={hoverProps}
            >
              <SCTypography variant="h2">{tag.name}</SCTypography>
            </motion.div>
          </Box>
        </Link>
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
)(PhotoTags);

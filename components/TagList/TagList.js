// #next :
import { useRouter } from "next/router";
import Link from "next/link";

// #contexts :

// #hooks :

// #components :

import { SCTypography } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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

const TagList = (props) => {
  const { classes, tagList } = props;
  const localClasses = useStyles();
  const router = useRouter();

  const hoverProps = {
    base: { color: "#f8f8f8" },
    hover: { backgroundColor: "#f8f8f8", color: "#000000" },
  };

  return (
    <>
      <Link href={`/portfolio/`}>
        <Box mx={2}>
          <motion.div
            aria-label="tag-name"
            className={localClasses.root}
            initial="base"
            whileHover="hover"
            variants={hoverProps}
          >
            {router.pathname === "/portfolio" ? (
              ""
            ) : (
              <ArrowBackIosIcon style={{ height: 14, width: 14 }} />
            )}

            <SCTypography variant="h2">Portfolio</SCTypography>
          </motion.div>
        </Box>
      </Link>

      {tagList.map((tag, i) => (
        <Link href={`/portfolio/tags/${tag.slug}`} key={i}>
          <Box mx={2}>
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
    </>
  );
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(TagList);

// #next :
import Link from "next/link";
// #contexts :

// #hooks :

// #components :
import { SCTypography } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box, makeStyles } from "@material-ui/core";

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

    cursor: "pointer",
  },
});

const BlogCardCategory = (props) => {
  const { classes, categories } = props;
  const localClasses = useStyles();
  const hoverProps = {
    base: { color: "#f8f8f8" },
    hover: { backgroundColor: "#f8f8f8", color: "#000000" },
  };

  return (
    <Box display="flex" justifyContent="center" my={3}>
      {categories.map((category, i) => (
        <Link href="#" key={i}>
          <Box mr={2}>
            <motion.div
              aria-label="tag-name"
              className={localClasses.root}
              initial="base"
              whileHover="hover"
              variants={hoverProps}
            >
              <SCTypography variant="h2" fontWeight={500}>
                {category.name}
              </SCTypography>
            </motion.div>
          </Box>
        </Link>
      ))}
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BlogCardCategory);

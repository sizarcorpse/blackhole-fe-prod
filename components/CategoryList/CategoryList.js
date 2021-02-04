// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
import Link from "next/link";
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
    cursor: "pointer",
  },
});

const CategoryList = (props) => {
  const { classes, categoryList } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  const hoverProps = {
    base: { color: "#f8f8f8" },
    hover: { backgroundColor: "#f8f8f8", color: "#000000" },
  };

  return (
    <>
      {categoryList.map((category, i) => (
        <Link href={`/blog/categories/${category.slug}`} key={i}>
          <Box mr={4}>
            <motion.div
              aria-label="category-name"
              className={localClasses.root}
              initial="base"
              whileHover="hover"
              variants={hoverProps}
            >
              <SCTypography variant="h2">{category.name}</SCTypography>
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
)(CategoryList);

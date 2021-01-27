import { useState } from "react";
// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :
import { SCTypography } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, IconButton } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
// #other :
import { motion } from "framer-motion";
const useStyles = makeStyles({
  root: {},
});

const PortfolioMiniCard = (props) => {
  const { classes, portfolio } = props;
  const [doit, setDoit] = useState(false);
  const [zom, setzom] = useState(false);

  const variants = {
    hidden: {
      width: 480,
      height: 600,
      outline: "2px solid #ffffff",
      outlineOffset: "-25px",
      opacity: 0,
      position: "absolute",
      top: 0,
    },
    visible: {
      width: 480,
      height: 600,
      outline: "2px solid #ffffff",
      outlineOffset: "-25px",
      opacity: 1,
      position: "absolute",
      top: 0,
    },
  };

  const variant = {
    hidden2: {},
    visible2: {
      scale: [1, 1.2, 1.2, 1, 1],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    },
  };

  const images = {
    zoom: { scale: 1.1, height: 600, width: 480 },
    zoomout: {
      scale: 1,
    },
  };

  return (
    <Box
      height={600}
      minWidth={480}
      style={{ position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setzom(true)}
      onMouseLeave={() => setzom(false)}
    >
      <motion.div animate={zom === true ? "zoomout" : "zoom"} variants={images}>
        <Image
          src={MakeUrls(portfolio.photo)}
          width={480}
          height={600}
          objectFit="cover"
        />
      </motion.div>

      <motion.div initial="hidden" whileHover="visible" variants={variants}>
        <div
          style={{
            height: "inherit",
            width: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            initial="hidden2"
            animate="visible2"
            whileHover={{ fontColor: "#ffffff" }}
            variants={variant}
          >
            <IconButton
              size="medium"
              style={{ backgroundColor: "black", height: 65, width: 65 }}
            >
              <ImageIcon color="primary" />
            </IconButton>
          </motion.div>
          <div style={{ margin: "16px 0px" }}>
            <SCTypography variant="h4" color="white" fontSize={25}>
              {portfolio.caption}
            </SCTypography>
          </div>
        </div>
      </motion.div>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PortfolioMiniCard);

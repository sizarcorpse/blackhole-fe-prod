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
import { PhotoView } from "components/PhotoView";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
// #other :
import { motion } from "framer-motion";
const useStyles = makeStyles({
  root: { position: "relative", overflow: "hidden" },
  hoverOption: {
    height: "inherit",
    width: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    background: "black",
    height: 65,
    width: 65,
  },
});

const PortfolioMiniCard = (props) => {
  const { classes, portfolio } = props;
  const localClasses = useStyles();
  const [zoom, setZoom] = useState(false);

  const photoOptionProps = {
    base: {
      width: 480,
      height: 600,
      outline: "1.5px solid #ffffff",
      outlineOffset: "-10px",
      position: "absolute",
      top: 0,
      opacity: 0,
    },
    hoverOption: {
      width: 480,
      height: 600,
      outline: "1.5px solid #ffffff",
      outlineOffset: "-10px",
      opacity: 1,
      position: "absolute",
      top: 0,
    },
  };
  const iconProps = {
    base: {
      height: 65,
      width: 65,
    },
    bounce: {
      height: 65,
      width: 65,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000",
      scale: [1, 1.2, 1.2, 1, 1],
      borderRadius: ["20%", "30%", "50%", "30%", "50%"],
      cursor: "pointer",
    },
    Hover: {
      height: 65,
      width: 65,
      backgroundColor: "#d1d0d0",
    },
  };
  const zoomProps = {
    base: { scale: 1.1, height: 600, width: 480 },
    zoomIn: {
      scale: 1,
    },
  };

  const [photoViewOpen, setPhotoViewOpen] = useState(false);

  const handlePhotoViewOpen = () => {
    setPhotoViewOpen(true);
  };

  const handlePhotoViewClose = () => {
    setPhotoViewOpen(false);
  };

  return (
    <Box
      height={600}
      minWidth={480}
      className={localClasses.root}
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
    >
      <motion.div
        animate={zoom === true ? "zoomIn" : "base"}
        variants={zoomProps}
      >
        <Image
          src={MakeUrls(portfolio.photo)}
          width={480}
          height={600}
          objectFit="cover"
        />
      </motion.div>

      <motion.div
        initial="base"
        whileHover="hoverOption"
        variants={photoOptionProps}
      >
        <div className={localClasses.hoverOption}>
          <motion.div
            initial="base"
            animate="bounce"
            whileHover="Hover"
            variants={iconProps}
          >
            <ImageIcon color="primary" onClick={handlePhotoViewOpen} />
          </motion.div>
          <div style={{ margin: "16px 0px" }}>
            <SCTypography variant="h4" color="white" fontSize={25}>
              {portfolio.caption}
            </SCTypography>
          </div>

          <Modal
            className={classes.modal}
            open={photoViewOpen}
            onClose={handlePhotoViewClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={photoViewOpen}>
              <div className={classes.paper}>
                <PhotoView
                  handlePhotoViewClose={handlePhotoViewClose}
                  portfolio={portfolio}
                />
              </div>
            </Fade>
          </Modal>
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

import { useState } from "react";
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
import {
  withStyles,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// #other :

const useStyles = makeStyles({
  accordion: { borderRadius: 0 },
  list: { width: "100%" },
});

const MobileNav = (props) => {
  const { classes, navigation } = props;
  const localClasses = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box width="100%" px={{ xs: 1, sm: 10 }}>
      <Accordion
        className={localClasses.accordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<MenuIcon style={{ marginRight: 16 }} />}
          style={{ marginLeft: 16 }}
        >
          <SCTypography variant="h3" fontWeight={500}>
            Menu
          </SCTypography>
        </AccordionSummary>
        <AccordionDetails>
          <List component="nav" className={localClasses.list}>
            {navigation.map((nav, i) => (
              <ListItem button key={i} onClick={handleChange("panel1")}>
                <Link href={nav.url}>
                  <ListItemText
                    primary={
                      <SCTypography
                        variant="h3"
                        fontSize={18}
                        color="white"
                        fontWeight={400}
                        color="black"
                      >
                        {nav.name}
                      </SCTypography>
                    }
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(MobileNav);

import { useState } from "react";
// #next :
// import getConfig from 'next/config';
import Router, { useRouter } from "next/router";
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  FormControl,
  TextField,
  InputAdornment,
  Button,
  Typography,
  Grid,
  CssBaseline,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BackspaceIcon from "@material-ui/icons/Backspace";
// #other :

const useStyles = makeStyles({
  SearchTitleTextField: {
    "& .MuiInputBase-input": {
      maxHeight: 100,
      fontSize: "30px",
      letterSpacing: "0px",
      wordSpacing: "0px",
      fontWeight: 700,
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "capitalize",
      lineHeight: 1,
      overflowWrap: "break-word",
      wordWrap: "break-word",
      hyphens: "auto",
      color: "#f8f8f8",
    },
  },
  icon: {
    cursor: "pointer",
    color: "#f8f8f8",
  },
});

const Search = (props) => {
  const { classes } = props;
  const localClasses = useStyles();
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearchTextValueChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearchTextValue = () => {
    setSearchText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearSearchTextValue();
    router.push(`/search/${searchText}`);
  };

  return (
    <Grid
      container
      justify="space-between"
      alignItems="stretch"
      style={{ height: "100%" }}
    >
      <Grid item xs={12}>
        <Box
          height="100%"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Box width="100%">
            <form onSubmit={handleSubmit}>
              <Box>
                <FormControl fullWidth>
                  <TextField
                    className={localClasses.SearchTitleTextField}
                    InputProps={{
                      shrink: "false",
                      autoComplete: "off",

                      /* endAdornment: (
                        <InputAdornment position="start">
                          <BackspaceIcon
                            onClick={clearSearchTextValue}
                            fontSize="small"
                            className={localClasses.icon}
                          />
                        </InputAdornment>
                      ), */
                      disableUnderline: true,
                    }}
                    fullWidth
                    name="search"
                    id="search"
                    placeholder="Search Anything"
                    value={searchText}
                    onChange={handleSearchTextValueChange}
                  />
                </FormControl>
              </Box>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Search);

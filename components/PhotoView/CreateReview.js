// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
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
  Box,
  Card,
  Typography,
  FormControl,
  TextField,
  Grid,
  TextareaAutosize,
  Button,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  card: { borderRadius: 0, padding: 24, background: "#030305" },
  TextAreaLarge: {
    width: "100%",
    maxHeight: 400,
    maxWidth: 545,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 1,
    border: "1px solid #000000",
    borderRadius: 5,
    color: "#f8f8f8",
    background: "#06070d",
    padding: 24,
  },
  SearchTitleTextField: {
    "& .MuiInputBase-input": {
      maxHeight: 100,
      fontSize: "25px",
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
      color: "#fffbfb",
    },
  },
  button: {
    backgroundColor: "#f8f8f8",
    borderRadius: 0,
    padding: 8,
    height: 40,
  },
});

const CreateReview = (props) => {
  const { classes } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Card className={localClasses.card}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextareaAutosize
                className={localClasses.TextAreaLarge}
                required
                label="Comment Body"
                rowsMin={4}
                aria-label="maximum height"
                placeholder="Give me a nice cool review. (max 500 words)"
                name="commentBody"
                id="commentBody"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                className={localClasses.SearchTitleTextField}
                inputProps={{ shrink: "false" }}
                disableunderline="true"
                required
                id="name"
                placeholder="Name"
                color="secondary"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                className={localClasses.SearchTitleTextField}
                inputProps={{
                  shrink: "false",
                }}
                disableunderline="true"
                required
                autoComplete="false"
                id="email"
                placeholder="@"
                color="secondary"
                type="email"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" className={localClasses.button}>
              <SCTypography variant="h2">Post Review</SCTypography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(CreateReview);

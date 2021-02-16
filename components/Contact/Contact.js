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
  withWidth,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Grid,
  Box,
  Container,
  Link,
  Card,
  TextareaAutosize,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",

    [theme.breakpoints.up("xs")]: {
      justifyContent: "center",
    },
  },
  paper: {
    background: "#030305",
    [theme.breakpoints.down("xl")]: {
      maxWidth: "75%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "75%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "80%",
    },
    [theme.breakpoints.up("xs")]: {
      maxWidth: "95%",
    },
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  TextAreaLarge: {
    width: "100%",
    maxHeight: 400,
    // maxWidth: 545,
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
  TextField: {
    color: "#f8f8f8",
    background: "#06070d",
    border: "1px solid #000000",
    "& .MuiInputLabel-root": {
      fontSize: 14,
      fontWeight: 500,
      color: "grey",
    },
    "& .MuiInputBase-root": {
      fontSize: 14,
      fontWeight: 500,
      color: "#f8f8f8",
      letterSpacing: 1,
    },
  },
  Button: {
    height: 40,
    background: "f8f8f8",
    color: "#030305",
    fontWeight: 500,
    transition: "color ease-out 250ms, background ease-out 250ms",
    "&:hover": {
      background: "#06070d",
      color: "#f8f8f8",
    },
  },
}));

const Contact = (props) => {
  const { classes, width } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Container
      component="main"
      maxWidth="md"
      className={localClasses.container}
    >
      <CssBaseline />
      <Card className={localClasses.paper}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <SCTypography
            variant="h2"
            fontSize={32}
            fontWeight={600}
            lineHeight={2.5}
            color="white"
          >
            Lets Talk
          </SCTypography>
          <SCTypography
            variant="h2"
            fontSize={24}
            fontWeight={400}
            lineHeight={1.5}
            color="white"
          >
            Any question ? Please contact us.
          </SCTypography>
        </Box>
        <Box my={3}>
          <form className={localClasses.form} noValidate>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  autoComplete="off"
                  className={localClasses.TextField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="off"
                  className={localClasses.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  className={localClasses.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                  autoComplete="off"
                  className={localClasses.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="website"
                  label="website"
                  name="website"
                  autoComplete="off"
                  className={localClasses.TextField}
                />
              </Grid>

              <Grid item xs={12}>
                <TextareaAutosize
                  className={localClasses.TextAreaLarge}
                  required
                  label="Comment Body"
                  variant="outlined"
                  rowsMin={16}
                  aria-label="maximum height"
                  placeholder="Write Your Message"
                  name="commentBody"
                  variant="outlined"
                  id="commentBody"
                />
              </Grid>
              <Grid item xs={12}>
                <SCTypography
                  variant="h2"
                  fontWeight={450}
                  lineHeight={1.5}
                  color="white"
                >
                  By submitting this form you consent to us emailing you
                  occasionally about our products and services.You can
                  unsubscribe from emails at any time, and we will never pass
                  your email onto third parties. Privacy Policy
                </SCTypography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  className={localClasses.Button}
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Card>
    </Container>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Contact)
);

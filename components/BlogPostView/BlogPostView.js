// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Grid, Box } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: { margin: "24px 0px" },
});

const BlogPostView = (props) => {
  const { classes, content } = props;
  const localClasses = useStyles();

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12}>
        <Box
          aria-label="card-media"
          dangerouslySetInnerHTML={{
            __html: `${content}`,
          }}
          className={classes.try}
        />
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
)(BlogPostView);

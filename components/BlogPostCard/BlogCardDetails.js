// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box } from "@material-ui/core";

// #other :

const BlogCardDetails = (props) => {
  const { classes, content } = props;

  const handleBodyCharLimit = (text) => {
    let texts = [];
    for (let i = 0; i <= 200; i++) {
      texts.push(text[i]);
    }
    return texts.join("") + "...";
  };

  return (
    <Box
      aria-label="card-media"
      dangerouslySetInnerHTML={{ __html: `${handleBodyCharLimit(content)}` }}
      className={classes.tryMini}
    />
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BlogCardDetails);

import PropTypes from "prop-types";
import _ from "lodash";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: (props) => props.fontFamily ?? undefined,
    fontSize: (props) => props.fontSize ?? undefined,
    fontStretch: (props) => props.fontStretch ?? undefined,
    fontStyle: (props) => props.fontStyle ?? undefined,
    fontVariant: (props) => props.fontVariant ?? undefined,
    fontWeight: (props) => props.fontWeight ?? undefined,
    color: (props) => props.color ?? undefined,

    letterSpacing: (props) => props.letterSpacing ?? undefined,
    lineHeight: (props) => props.lineHeight ?? undefined,
    wordSpacing: (props) => props.wordSpacing ?? undefined,
    wordBreak: (props) => props.wordBreak ?? undefined,
    wordWrap: (props) => props.wordWrap ?? undefined,

    textDecoration: (props) => props.textDecoration ?? undefined,
    textTransform: (props) => props.textTransform ?? undefined,

    textAlign: (props) => props.textAlign ?? undefined,
    textJustify: (props) => props.textJustify ?? undefined,

    whiteSpace: (props) => props.whiteSpace ?? undefined,
  },
});

const SCTypography = (props) => {
  const {
    children,
    variant,
    fontFamily,
    fontSize,
    fontStretch,
    fontStyle,
    fontVariant,
    fontWeight,
    color,
    letterSpacing,
    lineHeight,
    wordSpacing,
    wordBreak,
    wordWrap,
    textDecoration,
    textTransform,
    textAlign,
    textJustify,
    whiteSpace,
  } = props;

  const classes = useStyles({
    fontFamily,
    fontSize,
    fontStretch,
    fontStyle,
    fontVariant,
    fontWeight,
    color,
    letterSpacing,
    lineHeight,
    wordSpacing,
    wordBreak,
    wordWrap,
    textDecoration,
    textTransform,
    textAlign,
    textJustify,
    whiteSpace,
  });

  return (
    <Typography variant={variant} className={classes.root}>
      {children}
    </Typography>
  );
};

SCTypography.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontStretch: PropTypes.string,
  fontStyle: PropTypes.string,
  fontVariant: PropTypes.string,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  letterSpacing: PropTypes.number,
  lineHeight: PropTypes.number,
  wordSpacing: PropTypes.number,
  wordBreak: PropTypes.string,
  wordWrap: PropTypes.string,
  textDecoration: PropTypes.string,
  textTransform: PropTypes.string,
  textAlign: PropTypes.string,
  textJustify: PropTypes.string,
  whiteSpace: PropTypes.string,
};

export default SCTypography;

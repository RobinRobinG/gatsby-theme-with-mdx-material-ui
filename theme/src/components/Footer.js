import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.primary,
    padding: theme.spacing(2),
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(0),
  },
}));

export default function Footer({ author }) {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <Container component="footer" maxWidth="xl" className={classes.footer}>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        gutterBottom
      >
        © {year}
      </Typography>
      {author && (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          gutterBottom
        >
          made with love by {author}
        </Typography>
      )}
    </Container>
  );
}

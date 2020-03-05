import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.primary,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

export default function Footer({ children }) {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <Container component="footer" className={classes.footer}>
      <Typography variant="body2" color="textSecondary">
        © {year}, by {children}
      </Typography>
    </Container>
  );
}

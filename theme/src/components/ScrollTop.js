import React from "react";
import { useScrollTrigger, Zoom, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(10),
    right: theme.spacing(2),
  },
}));

function ScrollTop({ window }) {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor",
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab size="large" color="default" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}

export default ScrollTop;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    '& > p': {
      margin: theme.spacing(0),
    },
  },
}));

const ImageContainer = ({ children, width, borderRadius, borderColor }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      borderColor={borderColor}
      border={1}
      borderRadius={borderRadius}
      style={{
        width: `${width}`,
      }}
    >
      {children}
    </Box>
  );
};

export default ImageContainer;

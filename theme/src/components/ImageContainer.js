import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    '& > p': {
      margin: theme.spacing(0),
      '& *': {
        borderRadius: '6px',
      },
    },
  },
}));

const ImageContainer = ({ children, width, borderColor }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      borderColor={borderColor}
      borderRadius={6}
      boxShadow={6}
      border={1}
      style={{
        width: `${width}`,
      }}
    >
      {children}
    </Box>
  );
};

export default ImageContainer;

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

const ImageContainer = ({ children, width, border, borderColor }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      borderColor={borderColor}
      borderRadius={border > 0 ? 6 : 0}
      boxShadow={border > 0 ? 2 : 0}
      border={border > 0 ? border : 0}
      style={{
        width: `${width}`,
      }}
    >
      {children}
    </Box>
  );
};

export default ImageContainer;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Chips = ({ chips }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.text}>
      <div className={classes.root}>
        {chips.map(chip => (
          <Chip label={chip} color="primary" variant="outlined" />
        ))}
      </div>
    </Container>
  );
};

export default Chips;

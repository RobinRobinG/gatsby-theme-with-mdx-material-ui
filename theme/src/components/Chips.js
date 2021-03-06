import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: '1rem',
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
        {chips.map((chip, index) => (
          <Chip
            label={chip}
            color="primary"
            size="small"
            variant="outlined"
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default Chips;

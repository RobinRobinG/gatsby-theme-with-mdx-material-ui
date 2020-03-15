import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

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

const Buttons = ({ buttons }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.text}>
      <div className={classes.root}>
        {buttons.map((button, index) => (
          <Button
            color={button.color}
            href={button.href}
            key={index}
            variant="contained"
          >
            {button.label}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default Buttons;

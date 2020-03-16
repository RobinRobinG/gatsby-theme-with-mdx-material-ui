import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar = ({ title }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" id="back-to-top-anchor">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

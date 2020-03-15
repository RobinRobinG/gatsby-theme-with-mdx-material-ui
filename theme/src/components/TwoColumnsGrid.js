import React from 'react';
import { Box, Grid } from '@material-ui/core';

const TwoColumnsGrid = ({ left, right }) => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6} xs={12}>
        <Box display="flex" justifyContent="flex-start" mr={0.5}>
          {left}
        </Box>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Box display="flex" justifyContent="flex-start" ml={0.5}>
          {right}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TwoColumnsGrid;

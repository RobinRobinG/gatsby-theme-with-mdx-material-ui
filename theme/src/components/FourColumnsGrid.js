import React from 'react';
import { Box, Grid, Container } from '@material-ui/core';

const FourColumnsGrid = ({ first, second, third, fourth }) => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Box display="flex" justifyContent="centers" mx={1}>
            {first}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" justifyContent="center" mx={1}>
            {second}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" justifyContent="center" mx={1}>
            {third}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" justifyContent="center" mx={1}>
            {fourth}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FourColumnsGrid;

import React from 'react';
import { Button, Box } from '@material-ui/core';

function ExportedButton({ children, href, color }) {
  return (
    <Box display="flex" justifyContent="center">
      <Button variant="contained" color={color} href={href} target="_blank">
        {children}
      </Button>
    </Box>
  );
}

export default ExportedButton;

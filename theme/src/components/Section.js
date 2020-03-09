import React from "react";
import { Container, Box } from "@material-ui/core";

const Section = ({ children, background }) => {
  return (
    <Box
      py={8}
      style={{
        backgroundColor: `${background}`,
      }}
    >
      <Container maxWidth="md">
        <Box display="flex" alignContent="center" flexDirection="column">
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default Section;

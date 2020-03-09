import React from "react";
import { Box } from "@material-ui/core";
const ImageContainer = ({ children, width }) => {
  return (
    <Box
      style={{
        margin: "0 auto",
        width: `${width}`,
      }}
    >
      {children}
    </Box>
  );
};

export default ImageContainer;

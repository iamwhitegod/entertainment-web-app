import { Box } from "@mui/material";
import React from "react";

function Main({ children }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows="repeat(min-content, 1fr)"
      gap={2}
    >
      {children}
    </Box>
  );
}

export default Main;

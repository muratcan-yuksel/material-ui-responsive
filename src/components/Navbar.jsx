import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    // need to give a position to navbar lest the other will be seen
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6">Murat the Kurat</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

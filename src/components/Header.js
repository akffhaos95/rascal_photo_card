import { AppBar, Toolbar, Typography } from "@mui/material";

import React from "react";
import { styled } from "@mui/system";

const HeaderBar = styled(AppBar)({
  backgroundColor: "#243152",
  marginBottom: "20px",
});

const Header = () => {
  return (
    <HeaderBar position="static">
      <Toolbar>
        <Typography variant="h6">24' Rascal Awards Photo Card</Typography>
      </Toolbar>
    </HeaderBar>
  );
};

export default Header;

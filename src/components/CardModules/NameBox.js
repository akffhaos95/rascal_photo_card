import { Avatar, Box, Card, Typography } from "@mui/material";

import React from "react";
import { styled } from "@mui/material/styles";

const NameContainer = styled("div")({
  position: "absolute",
  fontSize: "190px",
  fontFamily: "Jalnan",
  color: "white",
  bottom: 0,
  right: "30px",
  zIndex: 10,
  padding: "15px 15px",
  display: "flex",
  textShadow: "8px 8px 30px rgba(0, 0, 0, 0.8)",
});

function NameBox({ name }) {
  return <NameContainer>{name}</NameContainer>;
}

export default NameBox;

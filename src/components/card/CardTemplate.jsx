import React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";

const CardContainer = styled(Card)({
  position: "relative",
  width: "1050px",
  height: "1629px",
  margin: "45px",
  overflow: "hidden",
});

const BackgroundLayer = styled("div")({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  background: "linear-gradient(180deg, #0A1A39 0%, #00356F 100%)",
});

const ContentLayer = styled("div")({
  position: "relative",
  zIndex: 1,
  width: "100%",
  height: "100%",
  padding: "0px 17px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "column",
  boxSizing: "border-box",
});

const CardTemplate = ({ children }) => {
  return (
    <CardContainer>
      <BackgroundLayer />
      <ContentLayer>{children}</ContentLayer>
    </CardContainer>
  );
};

export default CardTemplate;

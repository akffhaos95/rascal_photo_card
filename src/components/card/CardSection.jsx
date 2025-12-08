import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%",
  margin: "30px auto",
  padding: "30px 0 150px 0",

  flexWrap: "wrap",
  gap: "30px",
});

const CardSection = ({ player, data }) => {
  if (player === null || data === null) return null;

  return (
    <Container>
      <CardFront id="front" player={player} />
      <CardBack id="back" data={data} />
    </Container>
  );
};

export default CardSection;

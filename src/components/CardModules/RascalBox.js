import React from "react";
import { styled } from "@mui/material/styles";

const RascalContainer = styled("div")({
  position: "absolute",
  fontSize: "50px",
  fontFamily: "Facon",
  color: "white",
  top: "30px",
  right: "40px",
  zIndex: 10,
  padding: "15px 15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textShadow: "8px 8px 30px rgba(0, 0, 0, 0.8)",
});

const Logo = styled("img")({
  marginTop: "10px",
  width: "200px",
  height: "200px",
  zIndex: 10,
});

const Award = styled("img")({
  marginTop: "0px",
  width: "200px",
  height: "200px",
  zIndex: 10,
});

function RascalBox({ award }) {
  return (
    <RascalContainer>
      <Logo src={`${process.env.PUBLIC_URL}/image/team.png`} />
      {award && (
        <Award
          src={`${process.env.PUBLIC_URL}/image/${award}.png`}
          alt="Award"
        />
      )}
    </RascalContainer>
  );
}

export default RascalBox;

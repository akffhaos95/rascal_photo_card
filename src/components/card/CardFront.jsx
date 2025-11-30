import React from "react";
import CardTemplate from "./CardTemplate";
import BackNumberComponent from "../modules/BackNumber";
import FirstNameComponent from "../modules/FirstName";
import { styled } from "@mui/material";

const Image = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain",
  zIndex: 10,
});

const CardFront = ({ player }) => {
  const engName = player["영어 이름"] || "";
  const parts = engName.trim().split(/\s+/);
  const firstName = parts.length > 1 ? parts.slice(1).join(" ") : engName;
  const backNumber = player["등번호"];

  return (
    <div id="front">
      <CardTemplate>
        <FirstNameComponent firstName={firstName} />
        <BackNumberComponent backNumber={backNumber} />
        <Image src={`/player/${player["이름"]}.png`} />
      </CardTemplate>
    </div>
  );
};

export default CardFront;

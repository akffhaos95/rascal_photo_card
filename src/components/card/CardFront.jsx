import React from "react";
import CardTemplate from "./CardTemplate";
import BackNumberComponent from "../modules/BackNumber";
import FirstNameComponent from "../modules/FirstName";

const CardFront = ({ player }) => {
  const engName = player["영어 이름"] || "";
  const parts = engName.trim().split(/\s+/);
  const firstName = parts.length > 1 ? parts.slice(1).join(" ") : engName;
  const backNumber = player["등번호"];

  return (
    <CardTemplate>
      <FirstNameComponent firstName={firstName} />
      <BackNumberComponent backNumber={backNumber} />
    </CardTemplate>
  );
};

export default CardFront;

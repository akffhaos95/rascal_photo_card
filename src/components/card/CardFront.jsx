import React from "react";
import CardTemplate from "./CardTemplate";
import BackNumberComponent from "../modules/BackNumber";
import FirstNameComponent from "../modules/FirstName";

const CardFront = () => {

  const name = "권강현"
  const firstName = "KANG HYUN";
  const backNumber = "23";

  return (
    <CardTemplate>
        <FirstNameComponent firstName = {firstName} />
        <BackNumberComponent backNumber= {backNumber} />
    </CardTemplate>
  );
};

export default CardFront;

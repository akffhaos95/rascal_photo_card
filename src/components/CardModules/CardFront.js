import { FrontBottomBox, Image } from "./common";

import CardTemplate from "./CardTemplate";
import NameBox from "./NameBox";
import Number from "./Number";
import RascalBox from "./RascalBox";
import React from "react";
import html2canvas from "html2canvas";

const CardFront = ({ player }) => {
  const name = player["이름"];
  const number = player["등번호"];
  const en_name = player["영어 이름"];
  const position = player["포지션"];
  const award = player["어워즈"];

  function setImagebyName() {
    if (name === "김형준") {
      if (position === "P") {
        return name + "_투수";
      } else {
        return name + "_타자";
      }
    } else {
      return name;
    }
  }
  var middleName = en_name.split(" ");

  return (
    <div id="front">
      <CardTemplate>
        <Number number={number} />
        <Image
          style={{ zIndex: 9 }}
          src={`${process.env.PUBLIC_URL}/image/front.png`}
        />
        <Image
          style={{ zIndex: 0 }}
          src={`${process.env.PUBLIC_URL}/image/front2.png`}
        />
        <RascalBox award={award} />
        <NameBox name={name} />
        <Image
          src={`${process.env.PUBLIC_URL}/image/${setImagebyName()}.png`}
        />
        <FrontBottomBox />
      </CardTemplate>
    </div>
  );
};

export default CardFront;

import CardTemplate from "./CardTemplate";
import Comment from "./Comment";
import { Image } from "./common";
import Profile from "./ProfileBox";
import ProgressBarTemplate from "./ProgressBarTemplate";
import RadarChart from "./RadarChart";
import React from "react";
import html2canvas from "html2canvas";

const CardBack = ({ player, data }) => {
  const playerData = data.find((item) => item.이름 === player.이름);

  return (
    <div id="back">
      <CardTemplate>
        <Image
          style={{ zIndex: 9 }}
          src={`${process.env.PUBLIC_URL}/image/back.png`}
        />

        <RadarChart score={playerData} />

        <ProgressBarTemplate
          title={player["포지션"] === "P" ? "WHIP" : "V.C"}
          score={
            player["포지션"] === "P" ? playerData["WHIP"] : playerData["V.C"]
          }
        />
        <Profile player={player} data={data} />
      </CardTemplate>
    </div>
  );
};

export default CardBack;

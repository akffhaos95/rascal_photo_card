import React from "react";
import CardTemplate from "./CardTemplate";
import ScoreLayout from "../layout/ScoreLayout";
import CustomDivider from "../modules/Divider";
import { getScoreFromData } from "../util/getScoreFromData";
import KeyMetricBar from "../modules/KeyMetricBar";
import { getMetricFromData } from "../util/getMetricFromData";
import StatBars from "../modules/StatBars";
import { getStatData } from "../util/getStatData";
import ProfileLayout from "../layout/ProfileLayout";

const CardBack = ({ player, data }) => {
  if (!data) return null;

  const score = getScoreFromData(data);
  const metric = getMetricFromData(data);
  const stat = getStatData(data);

  return (
    <div id="back">
      <CardTemplate>
        <ProfileLayout player={player} />
        <CustomDivider />
        <ScoreLayout score={score} />
        <CustomDivider />
        <KeyMetricBar metric={metric} />
        <CustomDivider />
        <StatBars stat={stat} />
      </CardTemplate>
    </div>
  );
};

export default CardBack;

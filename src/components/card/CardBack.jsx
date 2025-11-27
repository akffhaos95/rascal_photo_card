import React from "react";
import CardTemplate from "./CardTemplate";
import ScoreLayout from "../layout/ScoreLayout";
import CustomDivider from "../modules/Divider";
import { getScoreFromData } from "../util/getScoreFromData";
import KeyMetricBar from "../modules/KeyMetricBar";
import { getMetricFromData } from "../util/getMetricFromData";
import StatBars from "../modules/StatBars";
import { getStatData } from "../util/getStatData";

const CardBack = ({ data }) => {
  if (!data) return null;

  const score = getScoreFromData(data);
  const metric = getMetricFromData(data);
  const stat = getStatData(data);

  console.log(data);
  console.log(stat);
  return (
    <CardTemplate>
      <CustomDivider />
      <ScoreLayout score={score} />
      <KeyMetricBar metric={metric} />
      <StatBars stat={stat} />
      <StatBars
        stat={[
          { label: "Hit", value: 10 },
          { label: "Out", value: 5 },
          { label: "Base", value: 3 },
        ]}
      />
    </CardTemplate>
  );
};

export default CardBack;

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
import Comment from "../modules/Comment";

const CardBack = ({ data }) => {
  if (!data) return null;

  const score = getScoreFromData(data);
  const metric = getMetricFromData(data);
  const stat = getStatData(data);

  const profile = {
    name: "김민석",
    number: "12",
    hitRight: false,
    hitLeft: true,
    throwRight: true,
    throwLeft: false,
    position: "투수",
    comment: "안녕하세요! 저는 열정적인 개발자 김민석입니다.",
  };
  return (
    <div id="back">
      <CardTemplate>
        <ProfileLayout player={profile} />
        {/* <Comment comment={profile.comment} /> */}
        <CustomDivider />
        <ScoreLayout score={score} />
        <KeyMetricBar metric={metric} />
        <CustomDivider />
        <ScoreLayout score={score} />
        <StatBars stat={stat} />
      </CardTemplate>
    </div>
  );
};

export default CardBack;

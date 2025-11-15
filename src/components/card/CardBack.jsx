import React from "react";
import CardTemplate from "./CardTemplate";
import ScoreLayout from "../layout/ScoreLayout";
import CustomDivider from "../modules/Divider";

const CardBack = () => {

  const score = [
    { label: 'Math', value: 10 },
    { label: 'Science', value: 30 },
    { label: 'History', value: 58 },
    { label: 'Art', value: 72 },
    { label: 'Physical', value: 99 }
  ]
    
  return (
    <CardTemplate>
        <ScoreLayout score={score} />
        <CustomDivider />
    </CardTemplate>
  );
};

export default CardBack;
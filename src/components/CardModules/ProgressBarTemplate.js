import { height, styled } from "@mui/system";

import { LinearProgress } from "@material-ui/core";
import React from "react";

const CustomLinearProgress = styled(LinearProgress)({
  flex: 6,
  borderRadius: "18px",
  backgroundColor: "#E0E0E0",
  boxShadow: "15px 15px 30px #1c2a48, -15px -15px 30px #3a4a6a",
  filter: 'drop-shadow("15px 15px 30px #1c2a48, -15px -15px 30px #3a4a6a")',
  "& .MuiLinearProgress-bar": {
    borderRadius: "18px",
    boxShadow: "15px 15px 30px #1c2a48, -15px -15px 30px #3a4a6a",
    backgroundImage: "linear-gradient(90deg, #ff4500, #ff8c00, #ff4500)",
  },
  "&.MuiLinearProgress-root": {
    height: 50, // 루트의 height를 명시적으로 설정
  },
});

const ProgressBarContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "95%",
  gap: "15px",
  paddingLeft: "20px",
});

const TitleLabel = styled("span")({
  flex: 1,
  color: "white",
  fontFamily: "Titan One",
  fontSize: "36px",
});

const ProgressBarTemplate = ({ title, score }) => {
  const calculatePosition = (score) => {
    const maxScore = 100; // 점수 최대값
    const maxPosition = 375; // 위치 최대값
    return (score / maxScore) * maxPosition;
  };

  const ScoreTooltip = styled("div")({
    position: "absolute",
    top: 950,
    left: 195 + calculatePosition(score),
    color: "white",
    fontFamily: "Kanit",
    fontSize: "40px",
  });

  return (
    <ProgressBarContainer>
      <TitleLabel>{title}</TitleLabel>
      <CustomLinearProgress variant="determinate" value={score} />
      <ScoreTooltip>{score}</ScoreTooltip>
    </ProgressBarContainer>
  );
};

export default ProgressBarTemplate;

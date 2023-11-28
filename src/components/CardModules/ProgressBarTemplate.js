import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { styled } from '@mui/system';

const CustomLinearProgress = styled(LinearProgress)({
    flex: 6,
    height: '36px',
    borderRadius: '18px',
    backgroundColor: '#E0E0E0',
    boxShadow:  "15px 15px 30px #1c2a48, -15px -15px 30px #3a4a6a",
    filter: "drop-shadow(\"15px 15px 30px #1c2a48, -15px -15px 30px #3a4a6a\")",
    '& .MuiLinearProgress-bar': {
        borderRadius: '18px',
        boxShadow:  "15px 15px 30px #1c2a48, -15px -15px 30px #3a4a6a",
        backgroundImage: 'linear-gradient(90deg, #ff4500, #ff8c00, #ff4500)'
    },
});
  
const ProgressBarContainer = styled('div')({
  position: 'absolute',
  top: 915,
  display: 'flex',
  alignItems: 'center',
  width: '90%',
  gap: '30px',
});
  
const TitleLabel = styled('span')({
  flex: 1,
  color: 'white',
  fontFamily: "Titan One",
  fontSize: "36px"
});
  
const ProgressBarTemplate = ({ title, score }) => {

  const calculatePosition = (score) => {
    const maxScore = 100; // 점수 최대값
    const maxPosition = 375; // 위치 최대값
    return (score / maxScore) * maxPosition;
  };

  const ScoreTooltip = styled('div')({
    position: "absolute",
    top: -5, 
    left: 135 + calculatePosition(score),
    color: 'white',
    fontFamily: "Kanit",
    fontSize: "36px",
  });
  
  return (
    <ProgressBarContainer>
      <TitleLabel>{ title }</TitleLabel>
      <CustomLinearProgress variant="determinate" value={score} />
      <ScoreTooltip>{ score }</ScoreTooltip>
    </ProgressBarContainer>
  );
};


export default ProgressBarTemplate;
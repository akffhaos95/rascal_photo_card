import React, { useState, useEffect, useRef } from 'react';
import { LinearProgress, Box, Typography } from '@material-ui/core';
import { styled } from '@mui/system';

const CustomLinearProgress = styled(LinearProgress)({
    flex: 6,
    height: '12px',
    borderRadius: '6px',
    backgroundColor: '#E0E0E0',
    boxShadow:  "5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a",
    filter: "drop-shadow(\"5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a\")",
    '& .MuiLinearProgress-bar': {
        borderRadius: '6px',
        boxShadow:  "5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a",
        backgroundImage: 'linear-gradient(90deg, #ff4500, #ff8c00, #ff4500)',  // <-- 불타는 느낌의 그래디언트 추가
        // backgroundColor: '#2196F3',
        // backgroundRepeat: 'no-repeat', 
        // backgroundSize: 'cover'
    },
});
  
const ProgressBarContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '10px',
});
  
const TitleLabel = styled('span')({
  flex: 1,
  color: 'white',
  fontFamily: "Titan One"
});
  
const ProgressBarTemplate = ({ title, score }) => {
  const [scorePosition, setscorePosition] = useState([]);
  const barRef = useRef();

  useEffect(() => {
    if (barRef.current)  {
      // const rect = barRef.current.ProgressBarTemplate
      const root = barRef.current.getElementsByClassName("MuiLinearProgress-root")
      const bar = barRef.current.getElementsByClassName("MuiLinearProgress-bar")

      const rootRect = barRef.current.getBoundingClientRect();

      const rootRectX = rootRect['x']
      Array.from(bar).forEach(element => {
        const barRect = element.getBoundingClientRect();
        const barRectX = barRect['x']
        const barRectY = barRect['y']
        
        
        const x = rootRectX - barRectX
        const y = barRectY

        console.log(x, y)

        setscorePosition([x, y])        
      });
     
    }
  }, [score])

  const calculatePosition = (score) => {
    const maxScore = 100; // 점수 최대값
    const maxPosition = 125; // 위치 최대값
    return (score / maxScore) * maxPosition;
  };

  const ScoreTooltip = styled('div')(({ scorePosition }) => ({
    position: "absolute",
    top: 334, 
    left: 65 + calculatePosition(score),
    color: 'white',
    fontFamily: "Kanit",
    fontSize: "12px",
  }));
  
  // MuiLinearProgress-root 
  // MuiLinearProgress-bar 
  return (
    <ProgressBarContainer>
      <TitleLabel>{ title }</TitleLabel>
      <CustomLinearProgress ref={barRef} variant="determinate" value={score} />
      <ScoreTooltip scorePosition={scorePosition}>{ score }</ScoreTooltip>
    </ProgressBarContainer>
  );
};


export default ProgressBarTemplate;
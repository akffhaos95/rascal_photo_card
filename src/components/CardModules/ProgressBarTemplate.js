import React from 'react';
import { LinearProgress, Box, Typography } from '@material-ui/core';
import { styled } from '@mui/system';

const CustomLinearProgress = styled(LinearProgress)({
    height: '12px',
    borderRadius: '6px',
    backgroundColor: '#E0E0E0',
    boxShadow:  "5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a",
    filter: "drop-shadow(\"5px 5px 10px #1c2a48, -5px -5px 10px #3a4a6a\")",
    flex: 1,
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
    color: '#555',
});
  

const ProgressBarTemplate = ({ title, score }) => {
  return (
    <ProgressBarContainer>
      <TitleLabel>{ title }</TitleLabel>
      <CustomLinearProgress variant="determinate" value={score} />
    </ProgressBarContainer>
  );
};


export default ProgressBarTemplate;